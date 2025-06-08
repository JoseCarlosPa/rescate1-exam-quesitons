import { FaDownload } from "react-icons/fa";
import { NavLink } from "react-router";
import React from "react";
import { resources as resourcesList } from "./Resources.constants";

export default function Resources() {
    const [search, setSearch] = React.useState("");
    const [category, setCategory] = React.useState("Todas");
    const categories = ["Todas", ...Array.from(new Set(resourcesList.map(r => r.category).filter(Boolean)))];
    const resources = resourcesList;
    const filtered = resources.filter(r =>
        (category === "Todas" || r.category === category) &&
        ((r.title?.toLowerCase() ?? "").includes(search.toLowerCase()) ||
        (r.subtitle?.toLowerCase() ?? "").includes(search.toLowerCase()) ||
        (r.edition?.toLowerCase() ?? "").includes(search.toLowerCase()))
    );
    return (
        <div className="flex flex-col min-h-screen bg-gradient-to-br from-orange-50 to-gray-200 pb-12 md:p-12 px-4 p-4">
            <div className="flex flex-col justify-center items-center mb-8">
                <p className="text-5xl font-extrabold mb-2 text-orange-600 drop-shadow text-center">Recursos y Libros</p>
                <p className="text-base italic text-gray-600 mb-4">Alumnos Generación 2025 Sábados Rescate 1</p>
                <NavLink
                    to="/"
                    className="flex gap-2 mb-4 bg-white shadow-lg rounded-full px-6 py-2 hover:bg-orange-100 transition duration-300 ease-in-out items-center border border-orange-200">
                    <p className="text-lg font-semibold text-orange-600">Regresar</p>
                </NavLink>
                <div className="flex flex-col md:flex-row gap-4 w-full max-w-2xl mt-2">
                    <input
                        type="text"
                        placeholder="Buscar recurso, autor o edición..."
                        value={search}
                        onChange={e => setSearch(e.target.value)}
                        className="w-full px-4 py-2 rounded-full border border-orange-200 shadow focus:outline-none focus:ring-2 focus:ring-orange-300 text-lg"
                    />
                    <select
                        value={category}
                        onChange={e => setCategory(e.target.value)}
                        className="w-full md:w-56 px-4 py-2 rounded-full border border-orange-200 shadow focus:outline-none focus:ring-2 focus:ring-orange-300 text-lg bg-white"
                    >
                        {categories.map(cat => (
                            <option key={cat} value={cat}>{cat}</option>
                        ))}
                    </select>
                </div>
            </div>
            <div className="grid md:grid-cols-5 sm:grid-cols-2 grid-cols-1 gap-10 mt-6">
                {filtered.length === 0 && (
                    <div className="col-span-full text-center text-gray-500 text-xl">No se encontraron recursos.</div>
                )}
                {filtered.map((r, i) => (
                    <div key={i} className="bg-white rounded-3xl shadow-xl hover:shadow-2xl transition-shadow duration-300 flex flex-col items-center p-6 group border border-orange-100">
                        <img src={r.img} className="mb-4 w-40 h-52 object-cover rounded-xl group-hover:scale-105 transition-transform duration-300" alt={r.title} />
                        <div className="flex flex-col gap-2 w-full items-center">
                            <p className="text-xl font-bold text-orange-700 text-center">{r.title}</p>
                            {r.subtitle && <p className="text-sm italic text-gray-500 text-center">{r.subtitle}</p>}
                            {r.edition && <p className="text-sm text-gray-700"><strong>Edición:</strong> {r.edition}</p>}
                            {r.editor && <p className="text-sm text-gray-700"><strong>Editor:</strong> {r.editor}</p>}
                            {r.category && <span className="text-xs bg-orange-100 text-orange-700 px-3 py-1 rounded-full mt-1">{r.category}</span>}
                            <div className="flex gap-3 mt-2">
                                <a
                                    target="_blank"
                                    href={r.download}
                                    className="flex items-center gap-2 bg-orange-100 text-orange-700 font-semibold px-4 py-2 rounded-full shadow hover:bg-orange-200 transition"
                                    download
                                >
                                    <FaDownload className="w-5 h-5" />
                                    Descargar
                                </a>
                                {r.link && (
                                    <a href={r.link.url}
                                       target="_blank"
                                       rel="noopener noreferrer"
                                       className="flex items-center gap-1 text-blue-600 hover:underline font-medium">
                                        {r.link.label}
                                    </a>
                                )}
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
}

