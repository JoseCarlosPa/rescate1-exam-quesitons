# Infusion Pump Simulator

Simulador de bomba de infusion para entrenamiento prehospitalario con enfoque ACLS/AHA.

## Incluye

- Perfil de bomba (Alaris/Baxter emulado)
- Modo por dosis (`mcg/kg/min`) y modo manual (`mL/h`)
- Libreria de farmacos con concentracion estandar
- Alarmas criticas de entrenamiento (occlusion, aire en linea, puerta abierta)
- Casos base para practica
- Checklist de seguridad con hard-stop antes de iniciar
- Puntuacion de entrenamiento ACLS/AHA con recompensas y penalizaciones
- Flujo fiel de bomba: programar -> confirmar -> iniciar
- Teclado numerico para carga de parametros (peso, dosis, flujo y VTBI)

## Verificacion rapida

Este modulo tiene pruebas unitarias para calculos y validacion de rangos.

```bash
npm run test
```

