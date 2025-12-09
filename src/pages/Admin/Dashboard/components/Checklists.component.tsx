import { useState, useEffect, useCallback } from "react";
import { collection, getDocs, query, orderBy, Timestamp } from "firebase/firestore";
import { db } from "../../../../firebase/firebaseConfig";
import { IChecklistCompleto } from "../../../AmbulanceChecklist/AmbulanceChecklist.types";
import {
    EQUIPAMIENTO_LABELS,
    TRAUMA_LABELS,
    VIA_AEREA_LABELS,
    MECANICA_LABELS,
    UNIDADES_AMBULANCIA
} from "../../../AmbulanceChecklist/AmbulanceChecklist.constants";
import { FaDownload, FaEye, FaFilter, FaTimes, FaFileExcel, FaFilePdf } from "react-icons/fa";
import { ImSpinner2 } from "react-icons/im";
import * as XLSX from "xlsx";
import jsPDF from "jspdf";

export default function Checklists() {
    const [checklists, setChecklists] = useState<IChecklistCompleto[]>([]);
    const [filteredChecklists, setFilteredChecklists] = useState<IChecklistCompleto[]>([]);
    const [loading, setLoading] = useState(true);
    const [selectedChecklist, setSelectedChecklist] = useState<IChecklistCompleto | null>(null);
    const [filterUnidad, setFilterUnidad] = useState<string>("");
    const [filterFechaInicio, setFilterFechaInicio] = useState<string>("");
    const [filterFechaFin, setFilterFechaFin] = useState<string>("");

    const applyFilters = useCallback(() => {
        let filtered = [...checklists];

        if (filterUnidad) {
            filtered = filtered.filter(c => c.datosGenerales.unidad === filterUnidad);
        }

        if (filterFechaInicio) {
            const fechaInicio = new Date(filterFechaInicio);
            filtered = filtered.filter(c => {
                const fechaChecklist = c.fechaCreacion instanceof Timestamp
                    ? c.fechaCreacion.toDate()
                    : new Date(c.fechaCreacion);
                return fechaChecklist >= fechaInicio;
            });
        }

        if (filterFechaFin) {
            const fechaFin = new Date(filterFechaFin);
            fechaFin.setHours(23, 59, 59, 999);
            filtered = filtered.filter(c => {
                const fechaChecklist = c.fechaCreacion instanceof Timestamp
                    ? c.fechaCreacion.toDate()
                    : new Date(c.fechaCreacion);
                return fechaChecklist <= fechaFin;
            });
        }

        setFilteredChecklists(filtered);
    }, [checklists, filterUnidad, filterFechaInicio, filterFechaFin]);

    useEffect(() => {
        fetchChecklists();
    }, []);

    useEffect(() => {
        applyFilters();
    }, [applyFilters]);

    const fetchChecklists = async () => {
        try {
            const q = query(collection(db, "ambulanceChecklists"), orderBy("fechaCreacion", "desc"));
            const snapshot = await getDocs(q);
            const data = snapshot.docs.map(doc => ({
                id: doc.id,
                ...doc.data()
            })) as IChecklistCompleto[];
            setChecklists(data);
        } catch (error) {
            console.error("Error fetching checklists:", error);
        } finally {
            setLoading(false);
        }
    };

    const clearFilters = () => {
        setFilterUnidad("");
        setFilterFechaInicio("");
        setFilterFechaFin("");
    };

    const formatDate = (fecha: Timestamp | Date) => {
        const date = fecha instanceof Timestamp ? fecha.toDate() : new Date(fecha);
        return date.toLocaleDateString("es-MX", {
            year: "numeric",
            month: "short",
            day: "numeric",
            hour: "2-digit",
            minute: "2-digit"
        });
    };

    const exportToExcel = () => {
        const data = filteredChecklists.map(c => {
            const fecha = c.fechaCreacion instanceof Timestamp ? c.fechaCreacion.toDate() : new Date(c.fechaCreacion);
            return {
                "Fecha": fecha.toISOString(),
                "Unidad": c.datosGenerales.unidad,
                "Guardia": c.datosGenerales.guardia,
                "Encargado": c.datosGenerales.nombreEncargado,
                "Motivo": c.datosGenerales.motivo,
                // Equipamiento
                ...Object.entries(c.equipamiento || {}).reduce((acc, [key, value]) => {
                    const label = EQUIPAMIENTO_LABELS[key as keyof typeof EQUIPAMIENTO_LABELS] || key;
                    acc[`Equip: ${label}`] = value;
                    return acc;
                }, {} as Record<string, number>),
                // Trauma
                ...Object.entries(c.botiquinTrauma || {}).reduce((acc, [key, value]) => {
                    const label = TRAUMA_LABELS[key as keyof typeof TRAUMA_LABELS] || key;
                    acc[`Trauma: ${label}`] = value;
                    return acc;
                }, {} as Record<string, number>),
                // Vía Aérea
                ...Object.entries(c.viaAerea || {}).reduce((acc, [key, value]) => {
                    const label = VIA_AEREA_LABELS[key as keyof typeof VIA_AEREA_LABELS] || key;
                    acc[`VíaAérea: ${label}`] = value;
                    return acc;
                }, {} as Record<string, number>),
                // Mecánica
                ...Object.entries(c.mecanica || {}).reduce((acc, [key, value]) => {
                    const label = MECANICA_LABELS[key as keyof typeof MECANICA_LABELS] || key;
                    acc[`Mecánica: ${label}`] = value;
                    return acc;
                }, {} as Record<string, number>)
            };
        });

        const ws = XLSX.utils.json_to_sheet(data);
        const wb = XLSX.utils.book_new();
        XLSX.utils.book_append_sheet(wb, ws, "Checklists");
        XLSX.writeFile(wb, `checklists_ambulancia_${new Date().toISOString().split('T')[0]}.xlsx`);
    };

    const exportToPDF = () => {
        const doc = new jsPDF();
        const pageWidth = doc.internal.pageSize.getWidth();

        doc.setFontSize(18);
        doc.text("Reporte de Checklists de Ambulancia", pageWidth / 2, 20, { align: "center" });

        doc.setFontSize(10);
        doc.text(`Generado: ${new Date().toLocaleDateString("es-MX")}`, pageWidth / 2, 28, { align: "center" });
        doc.text(`Total registros: ${filteredChecklists.length}`, pageWidth / 2, 34, { align: "center" });

        let y = 45;

        filteredChecklists.forEach((checklist, index) => {
            if (y > 270) {
                doc.addPage();
                y = 20;
            }

            const fecha = checklist.fechaCreacion instanceof Timestamp
                ? checklist.fechaCreacion.toDate()
                : new Date(checklist.fechaCreacion);

            doc.setFontSize(12);
            doc.setFont("helvetica", "bold");
            doc.text(`${index + 1}. ${checklist.datosGenerales.unidad}`, 14, y);

            doc.setFontSize(9);
            doc.setFont("helvetica", "normal");
            y += 6;
            doc.text(`Fecha: ${fecha.toLocaleDateString("es-MX")} - Guardia: ${checklist.datosGenerales.guardia}`, 14, y);
            y += 5;
            doc.text(`Encargado: ${checklist.datosGenerales.nombreEncargado} - Motivo: ${checklist.datosGenerales.motivo}`, 14, y);
            y += 10;
        });

        doc.save(`checklists_ambulancia_${new Date().toISOString().split('T')[0]}.pdf`);
    };

    const DetailModal = ({ checklist, onClose }: { checklist: IChecklistCompleto; onClose: () => void }) => {
        const renderSection = <T extends object>(title: string, data: T, labels: Record<string, string>) => (
            <div className="mb-6">
                <h4 className="font-semibold text-orange-600 mb-3 pb-2 border-b border-orange-200">{title}</h4>
                <div className="grid grid-cols-2 md:grid-cols-3 gap-2">
                    {Object.entries(data).map(([key, value]) => (
                        <div key={key} className="flex justify-between text-sm py-1 px-2 bg-gray-50 rounded">
                            <span className="text-gray-600 truncate">{labels[key] || key}</span>
                            <span className={`font-medium ml-2 ${(value as number) > 0 ? 'text-green-600' : 'text-gray-400'}`}>{value as number}</span>
                        </div>
                    ))}
                </div>
            </div>
        );

        return (
            <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-50 p-4">
                <div className="bg-white rounded-2xl max-w-4xl w-full max-h-[90vh] overflow-hidden">
                    <div className="bg-orange-500 text-white px-6 py-4 flex justify-between items-center">
                        <div>
                            <h3 className="text-lg font-bold">{checklist.datosGenerales.unidad}</h3>
                            <p className="text-sm text-orange-100">
                                {formatDate(checklist.fechaCreacion)} - {checklist.datosGenerales.guardia}
                            </p>
                        </div>
                        <button onClick={onClose} className="p-2 hover:bg-orange-600 rounded-lg transition-colors">
                            <FaTimes className="w-5 h-5" />
                        </button>
                    </div>

                    <div className="p-6 overflow-y-auto max-h-[calc(90vh-120px)]">
                        <div className="bg-gray-50 rounded-xl p-4 mb-6">
                            <h4 className="font-semibold text-gray-800 mb-2">Datos Generales</h4>
                            <div className="grid grid-cols-2 gap-4 text-sm">
                                <div>
                                    <span className="text-gray-500">Encargado:</span>
                                    <p className="font-medium">{checklist.datosGenerales.nombreEncargado}</p>
                                </div>
                                <div>
                                    <span className="text-gray-500">Motivo:</span>
                                    <p className="font-medium">{checklist.datosGenerales.motivo}</p>
                                </div>
                            </div>
                        </div>

                        {renderSection("Equipamiento General", checklist.equipamiento, EQUIPAMIENTO_LABELS)}
                        {renderSection("Botiquín de Trauma", checklist.botiquinTrauma, TRAUMA_LABELS)}
                        {renderSection("Vía Aérea", checklist.viaAerea, VIA_AEREA_LABELS)}
                        {renderSection("Mecánica y Seguridad", checklist.mecanica, MECANICA_LABELS)}
                    </div>
                </div>
            </div>
        );
    };

    if (loading) {
        return (
            <div className="flex items-center justify-center py-12">
                <ImSpinner2 className="animate-spin w-8 h-8 text-orange-500" />
            </div>
        );
    }

    return (
        <div>
            <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-4 mb-6">
                <h2 className="text-2xl font-bold text-gray-800">Checklists de Ambulancia</h2>
                <div className="flex gap-2">
                    <button
                        onClick={exportToExcel}
                        disabled={filteredChecklists.length === 0}
                        className="flex items-center px-4 py-2 bg-green-600 text-white rounded-lg hover:bg-green-700 transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
                    >
                        <FaFileExcel className="w-4 h-4 mr-2" />
                        Excel
                    </button>
                    <button
                        onClick={exportToPDF}
                        disabled={filteredChecklists.length === 0}
                        className="flex items-center px-4 py-2 bg-red-600 text-white rounded-lg hover:bg-red-700 transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
                    >
                        <FaFilePdf className="w-4 h-4 mr-2" />
                        PDF
                    </button>
                </div>
            </div>

            {/* Filtros */}
            <div className="bg-white rounded-xl shadow-sm border border-gray-200 p-4 mb-6">
                <div className="flex items-center gap-2 mb-4">
                    <FaFilter className="text-orange-500" />
                    <h3 className="font-semibold text-gray-700">Filtros</h3>
                    {(filterUnidad || filterFechaInicio || filterFechaFin) && (
                        <button
                            onClick={clearFilters}
                            className="ml-auto text-sm text-orange-500 hover:text-orange-600"
                        >
                            Limpiar filtros
                        </button>
                    )}
                </div>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                    <div>
                        <label className="block text-sm font-medium text-gray-600 mb-1">Unidad</label>
                        <select
                            value={filterUnidad}
                            onChange={(e) => setFilterUnidad(e.target.value)}
                            className="w-full p-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-orange-400 focus:border-transparent"
                        >
                            <option value="">Todas las unidades</option>
                            {UNIDADES_AMBULANCIA.map((unidad) => (
                                <option key={unidad} value={unidad}>{unidad}</option>
                            ))}
                        </select>
                    </div>
                    <div>
                        <label className="block text-sm font-medium text-gray-600 mb-1">Fecha desde</label>
                        <input
                            type="date"
                            value={filterFechaInicio}
                            onChange={(e) => setFilterFechaInicio(e.target.value)}
                            className="w-full p-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-orange-400 focus:border-transparent"
                        />
                    </div>
                    <div>
                        <label className="block text-sm font-medium text-gray-600 mb-1">Fecha hasta</label>
                        <input
                            type="date"
                            value={filterFechaFin}
                            onChange={(e) => setFilterFechaFin(e.target.value)}
                            className="w-full p-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-orange-400 focus:border-transparent"
                        />
                    </div>
                </div>
            </div>

            {/* Estadísticas rápidas */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-6">
                <div className="bg-white rounded-xl shadow-sm border border-gray-200 p-4">
                    <p className="text-sm text-gray-500">Total registros</p>
                    <p className="text-2xl font-bold text-orange-600">{filteredChecklists.length}</p>
                </div>
                <div className="bg-white rounded-xl shadow-sm border border-gray-200 p-4">
                    <p className="text-sm text-gray-500">Unidades únicas</p>
                    <p className="text-2xl font-bold text-blue-600">
                        {new Set(filteredChecklists.map(c => c.datosGenerales.unidad)).size}
                    </p>
                </div>
                <div className="bg-white rounded-xl shadow-sm border border-gray-200 p-4">
                    <p className="text-sm text-gray-500">Hoy</p>
                    <p className="text-2xl font-bold text-green-600">
                        {filteredChecklists.filter(c => {
                            const fecha = c.fechaCreacion instanceof Timestamp ? c.fechaCreacion.toDate() : new Date(c.fechaCreacion);
                            const hoy = new Date();
                            return fecha.toDateString() === hoy.toDateString();
                        }).length}
                    </p>
                </div>
                <div className="bg-white rounded-xl shadow-sm border border-gray-200 p-4">
                    <p className="text-sm text-gray-500">Esta semana</p>
                    <p className="text-2xl font-bold text-purple-600">
                        {filteredChecklists.filter(c => {
                            const fecha = c.fechaCreacion instanceof Timestamp ? c.fechaCreacion.toDate() : new Date(c.fechaCreacion);
                            const hoy = new Date();
                            const hace7dias = new Date(hoy.getTime() - 7 * 24 * 60 * 60 * 1000);
                            return fecha >= hace7dias;
                        }).length}
                    </p>
                </div>
            </div>

            {/* Tabla de checklists */}
            <div className="bg-white rounded-xl shadow-sm border border-gray-200 overflow-hidden">
                {filteredChecklists.length === 0 ? (
                    <div className="p-12 text-center text-gray-500">
                        <FaDownload className="w-12 h-12 mx-auto mb-4 text-gray-300" />
                        <p className="text-lg font-medium">No hay checklists registrados</p>
                        <p className="text-sm">Los checklists aparecerán aquí cuando se registren.</p>
                    </div>
                ) : (
                    <div className="overflow-x-auto">
                        <table className="w-full">
                            <thead className="bg-gray-50">
                                <tr>
                                    <th className="px-4 py-3 text-left text-sm font-semibold text-gray-600">Fecha</th>
                                    <th className="px-4 py-3 text-left text-sm font-semibold text-gray-600">Unidad</th>
                                    <th className="px-4 py-3 text-left text-sm font-semibold text-gray-600">Guardia</th>
                                    <th className="px-4 py-3 text-left text-sm font-semibold text-gray-600">Encargado</th>
                                    <th className="px-4 py-3 text-left text-sm font-semibold text-gray-600">Motivo</th>
                                    <th className="px-4 py-3 text-center text-sm font-semibold text-gray-600">Acciones</th>
                                </tr>
                            </thead>
                            <tbody className="divide-y divide-gray-100">
                                {filteredChecklists.map((checklist) => (
                                    <tr key={checklist.id} className="hover:bg-gray-50 transition-colors">
                                        <td className="px-4 py-3 text-sm text-gray-700">
                                            {formatDate(checklist.fechaCreacion)}
                                        </td>
                                        <td className="px-4 py-3">
                                            <span className="px-2 py-1 bg-orange-100 text-orange-700 rounded-lg text-sm font-medium">
                                                {checklist.datosGenerales.unidad}
                                            </span>
                                        </td>
                                        <td className="px-4 py-3 text-sm text-gray-700">
                                            {checklist.datosGenerales.guardia}
                                        </td>
                                        <td className="px-4 py-3 text-sm text-gray-700">
                                            {checklist.datosGenerales.nombreEncargado}
                                        </td>
                                        <td className="px-4 py-3 text-sm text-gray-500">
                                            {checklist.datosGenerales.motivo}
                                        </td>
                                        <td className="px-4 py-3 text-center">
                                            <button
                                                onClick={() => setSelectedChecklist(checklist)}
                                                className="p-2 text-orange-500 hover:bg-orange-50 rounded-lg transition-colors"
                                                title="Ver detalle"
                                            >
                                                <FaEye className="w-4 h-4" />
                                            </button>
                                        </td>
                                    </tr>
                                ))}
                            </tbody>
                        </table>
                    </div>
                )}
            </div>

            {/* Modal de detalle */}
            {selectedChecklist && (
                <DetailModal
                    checklist={selectedChecklist}
                    onClose={() => setSelectedChecklist(null)}
                />
            )}
        </div>
    );
}

