import {useState} from "react";
import {FaBaby, FaBrain, FaCalculator, FaChild, FaHeartbeat, FaLungs, FaWeight} from "react-icons/fa";
import {MdBloodtype, MdLocalHospital} from "react-icons/md";
import {BroslowEquipment, BroslowMedications, NIHSSScore, Tool} from "./ToolsModal.types";

export default function useToolsModal() {

    const [shockCalc, setShockCalc] = useState({
        heartRate: '',
        systolicBP: '',
        result: null as number | null,
        interpretation: ''
    });

    // Calculadora de IMC
    const [bmiCalc, setBmiCalc] = useState({
        weight: '',
        height: '',
        result: null as number | null,
        interpretation: ''
    });

    // Calculadora de PAM (Presión Arterial Media)
    const [mapCalc, setMapCalc] = useState({
        systolic: '',
        diastolic: '',
        result: null as number | null,
        interpretation: ''
    });

    // Calculadora de Escala de Glasgow
    const [glasgowCalc, setGlasgowCalc] = useState({
        eyeOpening: '',
        verbalResponse: '',
        motorResponse: '',
        result: null as number | null,
        interpretation: ''
    });

    // Calculadora de Dosis de Medicamentos
    const [dosageCalc, setDosageCalc] = useState({
        weight: '',
        medication: '',
        result: null as number | null,
        unit: '',
        route: '',
        instructions: ''
    });

    // Escala de Cincinnati
    const [cincinnati, setCincinnati] = useState({
        facial: '',
        arm: '',
        speech: '',
        result: '',
    });

    // Regla de Parkland
    const [parkland, setParkland] = useState({
        weight: '',
        tbsa: '',
        result: null as number | null,
        instructions: '',
    });

    // Puntaje APGAR
    const [apgarScore, setApgarScore] = useState({
        appearance: '',
        pulse: '',
        grimace: '',
        activity: '',
        respiration: '',
        result: null as number | null,
        interpretation: ''
    });

    // Revised Trauma Score (RTS)
    const [rtsScore, setRtsScore] = useState({
        glasgow: '',
        systolicBP: '',
        respiratoryRate: '',
        result: null as number | null,
        interpretation: '',
        survivalProbability: ''
    });

    // Calculadora de Oxigenoterapia
    const [oxygenCalc, setOxygenCalc] = useState({
        device: '',
        flowRate: '',
        fio2: null as number | null,
        instructions: ''
    });

    // Cinta de Broselow
    const [broslowCalc, setBroslowCalc] = useState({
        length: '',
        weight: null as number | null,
        color: '',
        medications: {} as Partial<BroslowMedications>,
        equipment: {} as Partial<BroslowEquipment>
    });

    // Escala de NIHSS
    const [nihssScore, setNihssScore] = useState<NIHSSScore>({
        consciousness: '',
        questions: '',
        commands: '',
        eyeMovement: '',
        visualField: '',
        facialPalsy: '',
        leftArmMotor: '',
        rightArmMotor: '',
        leftLegMotor: '',
        rightLegMotor: '',
        limbAtaxia: '',
        sensation: '',
        language: '',
        dysarthria: '',
        neglect: '',
        result: null,
        interpretation: ''
    });

    const calculateShockIndex = () => {
        const hr = parseFloat(shockCalc.heartRate);
        const sbp = parseFloat(shockCalc.systolicBP);

        if (hr && sbp) {
            const index = hr / sbp;
            let interpretation = '';

            if (index < 0.5) {
                interpretation = 'Bajo - Posible bradicardia o hipertensión';
            } else if (index >= 0.5 && index <= 1.0) {
                interpretation = 'Normal - Rango fisiológico';
            } else if (index > 1.0 && index <= 1.5) {
                interpretation = 'Elevado - Posible shock compensado';
            } else {
                interpretation = 'Muy elevado - Shock descompensado, requiere intervención inmediata';
            }

            setShockCalc({
                ...shockCalc,
                result: parseFloat(index.toFixed(2)),
                interpretation
            });
        }
    };

    const calculateBMI = () => {
        const weight = parseFloat(bmiCalc.weight);
        const height = parseFloat(bmiCalc.height) / 100; // convertir cm a m

        if (weight && height) {
            const bmi = weight / (height * height);
            let interpretation = '';

            if (bmi < 18.5) {
                interpretation = 'Bajo peso';
            } else if (bmi >= 18.5 && bmi < 25) {
                interpretation = 'Peso normal';
            } else if (bmi >= 25 && bmi < 30) {
                interpretation = 'Sobrepeso';
            } else {
                interpretation = 'Obesidad';
            }

            setBmiCalc({
                ...bmiCalc,
                result: parseFloat(bmi.toFixed(1)),
                interpretation
            });
        }
    };

    const calculateMAP = () => {
        const sys = parseFloat(mapCalc.systolic);
        const dia = parseFloat(mapCalc.diastolic);

        if (sys && dia) {
            const map = dia + ((sys - dia) / 3);
            let interpretation = '';

            if (map < 60) {
                interpretation = 'Baja - Riesgo de hipoperfusión';
            } else if (map >= 60 && map <= 100) {
                interpretation = 'Normal - Perfusión adecuada';
            } else {
                interpretation = 'Alta - Posible hipertensión';
            }

            setMapCalc({
                ...mapCalc,
                result: parseFloat(map.toFixed(1)),
                interpretation
            });
        }
    };

    const calculateGlasgow = () => {
        const eye = parseFloat(glasgowCalc.eyeOpening);
        const verbal = parseFloat(glasgowCalc.verbalResponse);
        const motor = parseFloat(glasgowCalc.motorResponse);

        if (eye && verbal && motor) {
            const total = eye + verbal + motor;
            let interpretation = '';

            if (total < 8) {
                interpretation = 'Severo - Coma o estado de no respuesta';
            } else if (total >= 8 && total <= 12) {
                interpretation = 'Moderado - Respuesta parcial o confusa';
            } else {
                interpretation = 'Leve - Respuesta normal';
            }

            setGlasgowCalc({
                ...glasgowCalc,
                result: total,
                interpretation
            });
        }
    };

    const calculateCincinnati = () => {
        const {facial, arm, speech} = cincinnati;
        let positives = 0;
        if (facial === 'yes') positives++;
        if (arm === 'yes') positives++;
        if (speech === 'yes') positives++;
        let result = '';
        if (positives === 0) result = 'No hay signos de ACV.';
        else if (positives === 1) result = 'Un signo: posible ACV, evaluar más.';
        else if (positives === 2) result = 'Dos signos: alta sospecha de ACV.';
        else result = 'Tres signos: ACV muy probable, activar código ictus.';
        setCincinnati({...cincinnati, result});
    };

    const calculateParkland = () => {
        const weight = parseFloat(parkland.weight);
        const tbsa = parseFloat(parkland.tbsa);
        if (weight && tbsa) {
            const total = weight * tbsa * 4;
            setParkland({
                ...parkland,
                result: total,
                instructions: `Administrar ${total / 2} mL en las primeras 8 horas y ${total / 2} mL en las siguientes 16 horas.`,
            });
        }
    };

    const calculateApgar = () => {
        const appearance = parseFloat(apgarScore.appearance);
        const pulse = parseFloat(apgarScore.pulse);
        const grimace = parseFloat(apgarScore.grimace);
        const activity = parseFloat(apgarScore.activity);
        const respiration = parseFloat(apgarScore.respiration);

        if (!isNaN(appearance) && !isNaN(pulse) && !isNaN(grimace) && !isNaN(activity) && !isNaN(respiration)) {
            const total = appearance + pulse + grimace + activity + respiration;
            let interpretation = '';

            if (total >= 7) {
                interpretation = 'Normal - El bebé está en buenas condiciones';
            } else if (total >= 4) {
                interpretation = 'Moderadamente deprimido - Requiere estimulación y oxígeno';
            } else {
                interpretation = 'Severamente deprimido - Requiere reanimación inmediata';
            }

            setApgarScore({
                ...apgarScore,
                result: total,
                interpretation
            });
        }
    };

    const calculateRTS = () => {
        const glasgow = parseFloat(rtsScore.glasgow);
        const sbp = parseFloat(rtsScore.systolicBP);
        const rr = parseFloat(rtsScore.respiratoryRate);

        if (!isNaN(glasgow) && !isNaN(sbp) && !isNaN(rr)) {
            // Codificación para RTS
            let glasgowCode = 0;
            let sbpCode = 0;
            let rrCode = 0;

            // Glasgow
            if (glasgow >= 13) glasgowCode = 4;
            else if (glasgow >= 9) glasgowCode = 3;
            else if (glasgow >= 6) glasgowCode = 2;
            else if (glasgow >= 4) glasgowCode = 1;
            else glasgowCode = 0;

            // Presión sistólica
            if (sbp >= 90) sbpCode = 4;
            else if (sbp >= 76) sbpCode = 3;
            else if (sbp >= 50) sbpCode = 2;
            else if (sbp >= 1) sbpCode = 1;
            else sbpCode = 0;

            // Frecuencia respiratoria
            if (rr >= 10 && rr <= 29) rrCode = 4;
            else if (rr >= 6 && rr <= 9) rrCode = 3;
            else if (rr >= 1 && rr <= 5) rrCode = 2;
            else if (rr >= 30) rrCode = 2;
            else rrCode = 0;

            const rts = (0.9368 * glasgowCode) + (0.7326 * sbpCode) + (0.2908 * rrCode);
            const survival = Math.exp(0.9934 + (0.9364 * rts)) / (1 + Math.exp(0.9934 + (0.9364 * rts))) * 100;

            let interpretation = '';
            if (rts >= 7) interpretation = 'Buen pronóstico';
            else if (rts >= 4) interpretation = 'Pronóstico moderado';
            else interpretation = 'Pronóstico grave';

            setRtsScore({
                ...rtsScore,
                result: parseFloat(rts.toFixed(2)),
                interpretation,
                survivalProbability: `${survival.toFixed(1)}%`
            });
        }
    };

    const calculateOxygen = () => {
        const device = oxygenCalc.device;
        const flow = parseFloat(oxygenCalc.flowRate);
        let fio2 = 21; // Aire ambiente
        let instructions = '';

        if (device && flow) {
            switch (device) {
                case 'cannula':
                    if (flow >= 1 && flow <= 6) {
                        fio2 = 21 + (4 * flow);
                        instructions = `Cánula nasal a ${flow}L/min. FiO2 aproximada: ${fio2}%. Máximo 6L/min para evitar sequedad nasal.`;
                    }
                    break;
                case 'simple-mask':
                    if (flow >= 5 && flow <= 10) {
                        fio2 = 40 + (5 * (flow - 5));
                        instructions = `Mascarilla simple a ${flow}L/min. FiO2 aproximada: ${fio2}%. Flujo mínimo 5L/min para evitar reinspiración de CO2.`;
                    }
                    break;
                case 'reservoir-mask':
                    if (flow >= 10 && flow <= 15) {
                        fio2 = 80 + (5 * (flow - 10));
                        if (fio2 > 95) fio2 = 95;
                        instructions = `Mascarilla con reservorio a ${flow}L/min. FiO2 aproximada: ${fio2}%. Mantener bolsa inflada.`;
                    }
                    break;
                case 'venturi':
                    // Venturi ofrece concentraciones específicas
                    if (flow === 24) fio2 = 24;
                    else if (flow === 28) fio2 = 28;
                    else if (flow === 35) fio2 = 35;
                    else if (flow === 40) fio2 = 40;
                    else if (flow === 50) fio2 = 50;
                    instructions = `Mascarilla Venturi al ${fio2}%. Concentración precisa y constante.`;
                    break;
            }

            setOxygenCalc({
                ...oxygenCalc,
                fio2,
                instructions
            });
        }
    };

    const calculateBroselow = () => {
        const length = parseFloat(broslowCalc.length);
        if (length) {
            let weight = 0;
            let color = '';
            let medications = {};
            let equipment = {};

            // Estimación de peso basada en longitud
            if (length >= 46 && length < 53) {
                weight = 3;
                color = 'Gris';
                medications = {
                    epinefrina: '0.03 mg',
                    atropina: '0.06 mg',
                    amiodarona: '15 mg'
                };
                equipment = {
                    tuboET: '3.0-3.5',
                    aspiracion: '6-8 Fr',
                    iv: '22-24 G'
                };
            } else if (length >= 53 && length < 61) {
                weight = 5;
                color = 'Rosa';
                medications = {
                    epinefrina: '0.05 mg',
                    atropina: '0.1 mg',
                    amiodarona: '25 mg'
                };
                equipment = {
                    tuboET: '3.5-4.0',
                    aspiracion: '8 Fr',
                    iv: '22 G'
                };
            } else if (length >= 61 && length < 69) {
                weight = 7;
                color = 'Rojo';
                medications = {
                    epinefrina: '0.07 mg',
                    atropina: '0.14 mg',
                    amiodarona: '35 mg'
                };
                equipment = {
                    tuboET: '4.0-4.5',
                    aspiracion: '8-10 Fr',
                    iv: '20-22 G'
                };
            } else if (length >= 69 && length < 79) {
                weight = 10;
                color = 'Morado';
                medications = {
                    epinefrina: '0.1 mg',
                    atropina: '0.2 mg',
                    amiodarona: '50 mg'
                };
                equipment = {
                    tuboET: '4.5-5.0',
                    aspiracion: '10 Fr',
                    iv: '20 G'
                };
            } else if (length >= 79 && length < 89) {
                weight = 14;
                color = 'Amarillo';
                medications = {
                    epinefrina: '0.14 mg',
                    atropina: '0.28 mg',
                    amiodarona: '70 mg'
                };
                equipment = {
                    tuboET: '5.0-5.5',
                    aspiracion: '10-12 Fr',
                    iv: '18-20 G'
                };
            } else if (length >= 89 && length < 102) {
                weight = 18;
                color = 'Blanco';
                medications = {
                    epinefrina: '0.18 mg',
                    atropina: '0.36 mg',
                    amiodarona: '90 mg'
                };
                equipment = {
                    tuboET: '5.5-6.0',
                    aspiracion: '12 Fr',
                    iv: '18 G'
                };
            } else if (length >= 102 && length < 115) {
                weight = 23;
                color = 'Azul';
                medications = {
                    epinefrina: '0.23 mg',
                    atropina: '0.46 mg',
                    amiodarona: '115 mg'
                };
                equipment = {
                    tuboET: '6.0-6.5',
                    aspiracion: '12-14 Fr',
                    iv: '16-18 G'
                };
            } else if (length >= 115) {
                weight = 30;
                color = 'Verde';
                medications = {
                    epinefrina: '0.3 mg',
                    atropina: '0.5 mg',
                    amiodarona: '150 mg'
                };
                equipment = {
                    tuboET: '6.5-7.0',
                    aspiracion: '14 Fr',
                    iv: '14-16 G'
                };
            }

            setBroslowCalc({
                ...broslowCalc,
                weight,
                color,
                medications,
                equipment
            });
        }
    };

    const calculateNIHSS = () => {
        const {
            consciousness, questions, commands, eyeMovement, visualField,
            facialPalsy, leftArmMotor, rightArmMotor, leftLegMotor, rightLegMotor,
            limbAtaxia, sensation, language, dysarthria, neglect
        } = nihssScore;

        // Sumar todos los valores numéricos de los campos
        const total =
            parseFloat(consciousness || '0') +
            parseFloat(questions || '0') +
            parseFloat(commands || '0') +
            parseFloat(eyeMovement || '0') +
            parseFloat(visualField || '0') +
            parseFloat(facialPalsy || '0') +
            parseFloat(leftArmMotor || '0') +
            parseFloat(rightArmMotor || '0') +
            parseFloat(leftLegMotor || '0') +
            parseFloat(rightLegMotor || '0') +
            parseFloat(limbAtaxia || '0') +
            parseFloat(sensation || '0') +
            parseFloat(language || '0') +
            parseFloat(dysarthria || '0') +
            parseFloat(neglect || '0');

        let interpretation = '';

        if (total === 0) {
            interpretation = 'Sin déficit neurológico - No hay signos de ACV';
        } else if (total >= 1 && total <= 4) {
            interpretation = 'ACV menor - Déficit neurológico leve';
        } else if (total >= 5 && total <= 15) {
            interpretation = 'ACV moderado - Déficit neurológico moderado';
        } else if (total >= 16 && total <= 20) {
            interpretation = 'ACV moderado a severo - Déficit neurológico importante';
        } else if (total >= 21 && total <= 42) {
            interpretation = 'ACV severo - Déficit neurológico grave, requiere atención inmediata';
        }

        setNihssScore({
            ...nihssScore,
            result: total,
            interpretation
        });
    };

    const tools = [
        {
            id: 'shock-index' as Tool,
            name: 'Índice de Shock',
            icon: <FaHeartbeat className="w-6 h-6"/>,
            description: 'Calcula el índice de shock (FC/PAS)'
        },
        {
            id: 'bmi' as Tool,
            name: 'Calculadora IMC',
            icon: <FaWeight className="w-6 h-6"/>,
            description: 'Índice de masa corporal'
        },
        {
            id: 'map-calculator' as Tool,
            name: 'PAM Calculator',
            icon: <MdBloodtype className="w-6 h-6"/>,
            description: 'Presión arterial media'
        },
        {
            id: 'drug-calculator' as Tool,
            name: 'Calculadora de Dosis',
            icon: <FaCalculator className="w-6 h-6"/>,
            description: 'Cálculos de medicamentos'
        },
        {
            id: 'glasgow-scale' as Tool,
            name: 'Escala de Glasgow',
            icon: <FaBrain className="w-6 h-6"/>,
            description: 'Evalúa el nivel de conciencia'
        },
        {
            id: 'cincinnati-scale' as Tool,
            name: 'Escala de Cincinnati',
            icon: <FaBrain className="w-6 h-6"/>,
            description: 'Evaluación rápida de ACV',
        },
        {
            id: 'parkland-rule' as Tool,
            name: 'Regla de Parkland',
            icon: <FaCalculator className="w-6 h-6"/>,
            description: 'Cálculo de líquidos en quemaduras',
        },
        {
            id: 'apgar-score' as Tool,
            name: 'Puntaje APGAR',
            icon: <FaBaby className="w-6 h-6"/>,
            description: 'Evaluación neonatal al nacimiento',
        },
        {
            id: 'rts-score' as Tool,
            name: 'Trauma Score Revisado',
            icon: <MdLocalHospital className="w-6 h-6"/>,
            description: 'Predictor de supervivencia en trauma',
        },
        {
            id: 'oxygen-calculator' as Tool,
            name: 'Calculadora de Oxígeno',
            icon: <FaLungs className="w-6 h-6"/>,
            description: 'FiO2 según dispositivo y flujo',
        },
        {
            id: 'broselow-tape' as Tool,
            name: 'Cinta de Broselow',
            icon: <FaChild className="w-6 h-6"/>,
            description: 'Dosis pediátricas por longitud',
        },
        {
            id: 'nihss-scale' as Tool,
            name: 'Escala de NIHSS',
            icon: <FaBrain className="w-6 h-6"/>,
            description: 'Evaluación neurológica de ACV (15 ítems)',
        },
    ];

    return {
        tools,
        shockCalc,
        setShockCalc,
        calculateShockIndex,
        bmiCalc,
        setBmiCalc,
        calculateBMI,
        mapCalc,
        setMapCalc,
        calculateMAP,
        glasgowCalc,
        setGlasgowCalc,
        calculateGlasgow,
        dosageCalc,
        setDosageCalc,
        cincinnati,
        setCincinnati,
        calculateCincinnati,
        parkland,
        setParkland,
        calculateParkland,
        apgarScore,
        setApgarScore,
        calculateApgar,
        rtsScore,
        setRtsScore,
        calculateRTS,
        oxygenCalc,
        setOxygenCalc,
        calculateOxygen,
        broslowCalc,
        setBroslowCalc,
        calculateBroselow,
        nihssScore,
        setNihssScore,
        calculateNIHSS
    }
}