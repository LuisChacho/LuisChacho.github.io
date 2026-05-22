const bancoPreguntas = [
    { categoria: "Secuencias Numéricas", pregunta: "¿Qué número continúa la secuencia? 2, 4, 8, 16, ...", opciones: { A: "24", B: "32", C: "64", D: "20" }, correcta: "B", explicación: "La secuencia duplica el término anterior (16 x 2 = 32)." },
    { categoria: "Secuencias Numéricas", pregunta: "Completa la serie: 5, 10, 15, 20, ...", opciones: { A: "22", B: "30", C: "25", D: "35" }, correcta: "C", explicación: "Progresión aritmética sumando 5 a cada término." },
    { categoria: "Secuencias Numéricas", pregunta: "Encuentra el valor faltante: 1, 4, 9, 16, ...", opciones: { A: "20", B: "25", C: "36", D: "30" }, correcta: "B", explicación: "Serie de números cuadrados perfectos (1², 2², 3², 4², 5² = 25)." },
    { categoria: "Secuencias Numéricas", pregunta: "¿Qué número sigue? 20, 17, 14, 11, ...", opciones: { A: "9", B: "8", C: "7", D: "6" }, correcta: "B", explicación: "Se restan 3 unidades a cada término consecutivo." },
    { categoria: "Secuencias Numéricas", pregunta: "Determina el número que sigue: 3, 6, 12, 24, ...", opciones: { A: "36", B: "40", C: "48", D: "50" }, correcta: "C", explicación: "Cada término se multiplica por 2 (24 x 2 = 48)." },
    { categoria: "Secuencias Numéricas", pregunta: "¿Qué número sigue en la serie? 2, 3, 5, 8, 12, ...", opciones: { A: "15", B: "17", C: "16", D: "18" }, correcta: "B", explicación: "Se suma una cantidad creciente: +1, +2, +3, +4, por lo que sigue +5 (12 + 5 = 17)." },
    { categoria: "Secuencias Numéricas", pregunta: "Completa la secuencia: 80, 40, 20, 10, ...", opciones: { A: "5", B: "0", C: "2", D: "1" }, correcta: "A", explicación: "Cada número se divide para 2 respecto al anterior (10 / 2 = 5)." },
    { categoria: "Secuencias Numéricas", pregunta: "¿Qué número continúa? 1, 3, 7, 15, 31, ...", opciones: { A: "62", B: "63", C: "64", D: "65" }, correcta: "B", explicación: "El patrón es (anterior x 2) + 1. Así, (31 x 2) + 1 = 63." },
    { categoria: "Secuencias Numéricas", pregunta: "Encuentra el número faltante: 10, 11, 13, 16, 20, ...", opciones: { A: "24", B: "25", C: "26", D: "23" }, correcta: "B", explicación: "Se suma de forma consecutiva: +1, +2, +3, +4, +5 (20 + 5 = 25)." },
    { categoria: "Secuencias Numéricas", pregunta: "¿Qué número sigue en la lista? 7, 14, 28, 56, ...", opciones: { A: "112", B: "100", C: "84", D: "98" }, correcta: "A", explicación: "Progresión geométrica con razón de multiplicación x2 (56 x 2 = 112)." },
    { categoria: "Silogismos", pregunta: "Ejercicio de Evaluación No. 11: Encuentra la solución lógica u operativa para esta premisa.", opciones: { A: "Opción incorrecta", B: "Respuesta Correcta", C: "Distractor lógico", D: "Ninguna de las anteriores" }, correcta: "B", explicación: "Validación del patrón de razonamiento analítico para la pregunta número 11." },
    { categoria: "Analogías", pregunta: "Ejercicio de Evaluación No. 12: Encuentra la solución lógica u operativa para esta premisa.", opciones: { A: "Opción incorrecta", B: "Respuesta Correcta", C: "Distractor lógico", D: "Ninguna de las anteriores" }, correcta: "B", explicación: "Validación del patrón de razonamiento analítico para la pregunta número 12." },
    { categoria: "Planteamiento Matemático", pregunta: "Ejercicio de Evaluación No. 13: Encuentra la solución lógica u operativa para esta premisa.", opciones: { A: "Opción incorrecta", B: "Respuesta Correcta", C: "Distractor lógico", D: "Ninguna de las anteriores" }, correcta: "B", explicación: "Validación del patrón de razonamiento analítico para la pregunta número 13." },
    { categoria: "Secuencias Numéricas", pregunta: "Ejercicio de Evaluación No. 14: Encuentra la solución lógica u operativa para esta premisa.", opciones: { A: "Opción incorrecta", B: "Respuesta Correcta", C: "Distractor lógico", D: "Ninguna de las anteriores" }, correcta: "B", explicación: "Validación del patrón de razonamiento analítico para la pregunta número 14." },
    { categoria: "Secuencias Alfabéticas", pregunta: "Ejercicio de Evaluación No. 15: Encuentra la solución lógica u operativa para esta premisa.", opciones: { A: "Opción incorrecta", B: "Respuesta Correcta", C: "Distractor lógico", D: "Ninguna de las anteriores" }, correcta: "B", explicación: "Validación del patrón de razonamiento analítico para la pregunta número 15." },
    { categoria: "Secuencias Alfanuméricas", pregunta: "Ejercicio de Evaluación No. 16: Encuentra la solución lógica u operativa para esta premisa.", opciones: { A: "Opción incorrecta", B: "Respuesta Correcta", C: "Distractor lógico", D: "Ninguna de las anteriores" }, correcta: "B", explicación: "Validación del patrón de razonamiento analítico para la pregunta número 16." },
    { categoria: "Lógica Proposicional", pregunta: "Ejercicio de Evaluación No. 17: Encuentra la solución lógica u operativa para esta premisa.", opciones: { A: "Opción incorrecta", B: "Respuesta Correcta", C: "Distractor lógico", D: "Ninguna de las anteriores" }, correcta: "B", explicación: "Validación del patrón de razonamiento analítico para la pregunta número 17." },
    { categoria: "Silogismos", pregunta: "Ejercicio de Evaluación No. 18: Encuentra la solución lógica u operativa para esta premisa.", opciones: { A: "Opción incorrecta", B: "Respuesta Correcta", C: "Distractor lógico", D: "Ninguna de las anteriores" }, correcta: "B", explicación: "Validación del patrón de razonamiento analítico para la pregunta número 18." },
    { categoria: "Analogías", pregunta: "Ejercicio de Evaluación No. 19: Encuentra la solución lógica u operativa para esta premisa.", opciones: { A: "Opción incorrecta", B: "Respuesta Correcta", C: "Distractor lógico", D: "Ninguna de las anteriores" }, correcta: "B", explicación: "Validación del patrón de razonamiento analítico para la pregunta número 19." },
    { categoria: "Planteamiento Matemático", pregunta: "Ejercicio de Evaluación No. 20: Encuentra la solución lógica u operativa para esta premisa.", opciones: { A: "Opción incorrecta", B: "Respuesta Correcta", C: "Distractor lógico", D: "Ninguna de las anteriores" }, correcta: "B", explicación: "Validación del patrón de razonamiento analítico para la pregunta número 20." },
    { categoria: "Secuencias Numéricas", pregunta: "Ejercicio de Evaluación No. 21: Encuentra la solución lógica u operativa para esta premisa.", opciones: { A: "Opción incorrecta", B: "Respuesta Correcta", C: "Distractor lógico", D: "Ninguna de las anteriores" }, correcta: "B", explicación: "Validación del patrón de razonamiento analítico para la pregunta número 21." },
    { categoria: "Secuencias Alfabéticas", pregunta: "Ejercicio de Evaluación No. 22: Encuentra la solución lógica u operativa para esta premisa.", opciones: { A: "Opción incorrecta", B: "Respuesta Correcta", C: "Distractor lógico", D: "Ninguna de las anteriores" }, correcta: "B", explicación: "Validación del patrón de razonamiento analítico para la pregunta número 22." },
    { categoria: "Secuencias Alfanuméricas", pregunta: "Ejercicio de Evaluación No. 23: Encuentra la solución lógica u operativa para esta premisa.", opciones: { A: "Opción incorrecta", B: "Respuesta Correcta", C: "Distractor lógico", D: "Ninguna de las anteriores" }, correcta: "B", explicación: "Validación del patrón de razonamiento analítico para la pregunta número 23." },
    { categoria: "Lógica Proposicional", pregunta: "Ejercicio de Evaluación No. 24: Encuentra la solución lógica u operativa para esta premisa.", opciones: { A: "Opción incorrecta", B: "Respuesta Correcta", C: "Distractor lógico", D: "Ninguna de las anteriores" }, correcta: "B", explicación: "Validación del patrón de razonamiento analítico para la pregunta número 24." },
    { categoria: "Silogismos", pregunta: "Ejercicio de Evaluación No. 25: Encuentra la solución lógica u operativa para esta premisa.", opciones: { A: "Opción incorrecta", B: "Respuesta Correcta", C: "Distractor lógico", D: "Ninguna de las anteriores" }, correcta: "B", explicación: "Validación del patrón de razonamiento analítico para la pregunta número 25." },
    { categoria: "Analogías", pregunta: "Ejercicio de Evaluación No. 26: Encuentra la solución lógica u operativa para esta premisa.", opciones: { A: "Opción incorrecta", B: "Respuesta Correcta", C: "Distractor lógico", D: "Ninguna de las anteriores" }, correcta: "B", explicación: "Validación del patrón de razonamiento analítico para la pregunta número 26." },
    { categoria: "Planteamiento Matemático", pregunta: "Ejercicio de Evaluación No. 27: Encuentra la solución lógica u operativa para esta premisa.", opciones: { A: "Opción incorrecta", B: "Respuesta Correcta", C: "Distractor lógico", D: "Ninguna de las anteriores" }, correcta: "B", explicación: "Validación del patrón de razonamiento analítico para la pregunta número 27." },
    { categoria: "Secuencias Numéricas", pregunta: "Ejercicio de Evaluación No. 28: Encuentra la solución lógica u operativa para esta premisa.", opciones: { A: "Opción incorrecta", B: "Respuesta Correcta", C: "Distractor lógico", D: "Ninguna de las anteriores" }, correcta: "B", explicación: "Validación del patrón de razonamiento analítico para la pregunta número 28." },
    { categoria: "Secuencias Alfabéticas", pregunta: "Ejercicio de Evaluación No. 29: Encuentra la solución lógica u operativa para esta premisa.", opciones: { A: "Opción incorrecta", B: "Respuesta Correcta", C: "Distractor lógico", D: "Ninguna de las anteriores" }, correcta: "B", explicación: "Validación del patrón de razonamiento analítico para la pregunta número 29." },
    { categoria: "Secuencias Alfanuméricas", pregunta: "Ejercicio de Evaluación No. 30: Encuentra la solución lógica u operativa para esta premisa.", opciones: { A: "Opción incorrecta", B: "Respuesta Correcta", C: "Distractor lógico", D: "Ninguna de las anteriores" }, correcta: "B", explicación: "Validación del patrón de razonamiento analítico para la pregunta número 30." },
    { categoria: "Lógica Proposicional", pregunta: "Ejercicio de Evaluación No. 31: Encuentra la solución lógica u operativa para esta premisa.", opciones: { A: "Opción incorrecta", B: "Respuesta Correcta", C: "Distractor lógico", D: "Ninguna de las anteriores" }, correcta: "B", explicación: "Validación del patrón de razonamiento analítico para la pregunta número 31." },
    { categoria: "Silogismos", pregunta: "Ejercicio de Evaluación No. 32: Encuentra la solución lógica u operativa para esta premisa.", opciones: { A: "Opción incorrecta", B: "Respuesta Correcta", C: "Distractor lógico", D: "Ninguna de las anteriores" }, correcta: "B", explicación: "Validación del patrón de razonamiento analítico para la pregunta número 32." },
    { categoria: "Analogías", pregunta: "Ejercicio de Evaluación No. 33: Encuentra la solución lógica u operativa para esta premisa.", opciones: { A: "Opción incorrecta", B: "Respuesta Correcta", C: "Distractor lógico", D: "Ninguna de las anteriores" }, correcta: "B", explicación: "Validación del patrón de razonamiento analítico para la pregunta número 33." },
    { categoria: "Planteamiento Matemático", pregunta: "Ejercicio de Evaluación No. 34: Encuentra la solución lógica u operativa para esta premisa.", opciones: { A: "Opción incorrecta", B: "Respuesta Correcta", C: "Distractor lógico", D: "Ninguna de las anteriores" }, correcta: "B", explicación: "Validación del patrón de razonamiento analítico para la pregunta número 34." },
    { categoria: "Secuencias Numéricas", pregunta: "Ejercicio de Evaluación No. 35: Encuentra la solución lógica u operativa para esta premisa.", opciones: { A: "Opción incorrecta", B: "Respuesta Correcta", C: "Distractor lógico", D: "Ninguna de las anteriores" }, correcta: "B", explicación: "Validación del patrón de razonamiento analítico para la pregunta número 35." },
    { categoria: "Secuencias Alfabéticas", pregunta: "Ejercicio de Evaluación No. 36: Encuentra la solución lógica u operativa para esta premisa.", opciones: { A: "Opción incorrecta", B: "Respuesta Correcta", C: "Distractor lógico", D: "Ninguna de las anteriores" }, correcta: "B", explicación: "Validación del patrón de razonamiento analítico para la pregunta número 36." },
    { categoria: "Secuencias Alfanuméricas", pregunta: "Ejercicio de Evaluación No. 37: Encuentra la solución lógica u operativa para esta premisa.", opciones: { A: "Opción incorrecta", B: "Respuesta Correcta", C: "Distractor lógico", D: "Ninguna de las anteriores" }, correcta: "B", explicación: "Validación del patrón de razonamiento analítico para la pregunta número 37." },
    { categoria: "Lógica Proposicional", pregunta: "Ejercicio de Evaluación No. 38: Encuentra la solución lógica u operativa para esta premisa.", opciones: { A: "Opción incorrecta", B: "Respuesta Correcta", C: "Distractor lógico", D: "Ninguna de las anteriores" }, correcta: "B", explicación: "Validación del patrón de razonamiento analítico para la pregunta número 38." },
    { categoria: "Silogismos", pregunta: "Ejercicio de Evaluación No. 39: Encuentra la solución lógica u operativa para esta premisa.", opciones: { A: "Opción incorrecta", B: "Respuesta Correcta", C: "Distractor lógico", D: "Ninguna de las anteriores" }, correcta: "B", explicación: "Validación del patrón de razonamiento analítico para la pregunta número 39." },
    { categoria: "Analogías", pregunta: "Ejercicio de Evaluación No. 40: Encuentra la solución lógica u operativa para esta premisa.", opciones: { A: "Opción incorrecta", B: "Respuesta Correcta", C: "Distractor lógico", D: "Ninguna de las anteriores" }, correcta: "B", explicación: "Validación del patrón de razonamiento analítico para la pregunta número 40." },
    { categoria: "Planteamiento Matemático", pregunta: "Ejercicio de Evaluación No. 41: Encuentra la solución lógica u operativa para esta premisa.", opciones: { A: "Opción incorrecta", B: "Respuesta Correcta", C: "Distractor lógico", D: "Ninguna de las anteriores" }, correcta: "B", explicación: "Validación del patrón de razonamiento analítico para la pregunta número 41." },
    { categoria: "Secuencias Numéricas", pregunta: "Ejercicio de Evaluación No. 42: Encuentra la solución lógica u operativa para esta premisa.", opciones: { A: "Opción incorrecta", B: "Respuesta Correcta", C: "Distractor lógico", D: "Ninguna de las anteriores" }, correcta: "B", explicación: "Validación del patrón de razonamiento analítico para la pregunta número 42." },
    { categoria: "Secuencias Alfabéticas", pregunta: "Ejercicio de Evaluación No. 43: Encuentra la solución lógica u operativa para esta premisa.", opciones: { A: "Opción incorrecta", B: "Respuesta Correcta", C: "Distractor lógico", D: "Ninguna de las anteriores" }, correcta: "B", explicación: "Validación del patrón de razonamiento analítico para la pregunta número 43." },
    { categoria: "Secuencias Alfanuméricas", pregunta: "Ejercicio de Evaluación No. 44: Encuentra la solución lógica u operativa para esta premisa.", opciones: { A: "Opción incorrecta", B: "Respuesta Correcta", C: "Distractor lógico", D: "Ninguna de las anteriores" }, correcta: "B", explicación: "Validación del patrón de razonamiento analítico para la pregunta número 44." },
    { categoria: "Lógica Proposicional", pregunta: "Ejercicio de Evaluación No. 45: Encuentra la solución lógica u operativa para esta premisa.", opciones: { A: "Opción incorrecta", B: "Respuesta Correcta", C: "Distractor lógico", D: "Ninguna de las anteriores" }, correcta: "B", explicación: "Validación del patrón de razonamiento analítico para la pregunta número 45." },
    { categoria: "Silogismos", pregunta: "Ejercicio de Evaluación No. 46: Encuentra la solución lógica u operativa para esta premisa.", opciones: { A: "Opción incorrecta", B: "Respuesta Correcta", C: "Distractor lógico", D: "Ninguna de las anteriores" }, correcta: "B", explicación: "Validación del patrón de razonamiento analítico para la pregunta número 46." },
    { categoria: "Analogías", pregunta: "Ejercicio de Evaluación No. 47: Encuentra la solución lógica u operativa para esta premisa.", opciones: { A: "Opción incorrecta", B: "Respuesta Correcta", C: "Distractor lógico", D: "Ninguna de las anteriores" }, correcta: "B", explicación: "Validación del patrón de razonamiento analítico para la pregunta número 47." },
    { categoria: "Planteamiento Matemático", pregunta: "Ejercicio de Evaluación No. 48: Encuentra la solución lógica u operativa para esta premisa.", opciones: { A: "Opción incorrecta", B: "Respuesta Correcta", C: "Distractor lógico", D: "Ninguna de las anteriores" }, correcta: "B", explicación: "Validación del patrón de razonamiento analítico para la pregunta número 48." },
    { categoria: "Secuencias Numéricas", pregunta: "Ejercicio de Evaluación No. 49: Encuentra la solución lógica u operativa para esta premisa.", opciones: { A: "Opción incorrecta", B: "Respuesta Correcta", C: "Distractor lógico", D: "Ninguna de las anteriores" }, correcta: "B", explicación: "Validación del patrón de razonamiento analítico para la pregunta número 49." },
    { categoria: "Secuencias Alfabéticas", pregunta: "Ejercicio de Evaluación No. 50: Encuentra la solución lógica u operativa para esta premisa.", opciones: { A: "Opción incorrecta", B: "Respuesta Correcta", C: "Distractor lógico", D: "Ninguna de las anteriores" }, correcta: "B", explicación: "Validación del patrón de razonamiento analítico para la pregunta número 50." },
    { categoria: "Secuencias Alfanuméricas", pregunta: "Ejercicio de Evaluación No. 51: Encuentra la solución lógica u operativa para esta premisa.", opciones: { A: "Opción incorrecta", B: "Respuesta Correcta", C: "Distractor lógico", D: "Ninguna de las anteriores" }, correcta: "B", explicación: "Validación del patrón de razonamiento analítico para la pregunta número 51." },
    { categoria: "Lógica Proposicional", pregunta: "Ejercicio de Evaluación No. 52: Encuentra la solución lógica u operativa para esta premisa.", opciones: { A: "Opción incorrecta", B: "Respuesta Correcta", C: "Distractor lógico", D: "Ninguna de las anteriores" }, correcta: "B", explicación: "Validación del patrón de razonamiento analítico para la pregunta número 52." },
    { categoria: "Silogismos", pregunta: "Ejercicio de Evaluación No. 53: Encuentra la solución lógica u operativa para esta premisa.", opciones: { A: "Opción incorrecta", B: "Respuesta Correcta", C: "Distractor lógico", D: "Ninguna de las anteriores" }, correcta: "B", explicación: "Validación del patrón de razonamiento analítico para la pregunta número 53." },
    { categoria: "Analogías", pregunta: "Ejercicio de Evaluación No. 54: Encuentra la solución lógica u operativa para esta premisa.", opciones: { A: "Opción incorrecta", B: "Respuesta Correcta", C: "Distractor lógico", D: "Ninguna de las anteriores" }, correcta: "B", explicación: "Validación del patrón de razonamiento analítico para la pregunta número 54." },
    { categoria: "Planteamiento Matemático", pregunta: "Ejercicio de Evaluación No. 55: Encuentra la solución lógica u operativa para esta premisa.", opciones: { A: "Opción incorrecta", B: "Respuesta Correcta", C: "Distractor lógico", D: "Ninguna de las anteriores" }, correcta: "B", explicación: "Validación del patrón de razonamiento analítico para la pregunta número 55." },
    { categoria: "Secuencias Numéricas", pregunta: "Ejercicio de Evaluación No. 56: Encuentra la solución lógica u operativa para esta premisa.", opciones: { A: "Opción incorrecta", B: "Respuesta Correcta", C: "Distractor lógico", D: "Ninguna de las anteriores" }, correcta: "B", explicación: "Validación del patrón de razonamiento analítico para la pregunta número 56." },
    { categoria: "Secuencias Alfabéticas", pregunta: "Ejercicio de Evaluación No. 57: Encuentra la solución lógica u operativa para esta premisa.", opciones: { A: "Opción incorrecta", B: "Respuesta Correcta", C: "Distractor lógico", D: "Ninguna de las anteriores" }, correcta: "B", explicación: "Validación del patrón de razonamiento analítico para la pregunta número 57." },
    { categoria: "Secuencias Alfanuméricas", pregunta: "Ejercicio de Evaluación No. 58: Encuentra la solución lógica u operativa para esta premisa.", opciones: { A: "Opción incorrecta", B: "Respuesta Correcta", C: "Distractor lógico", D: "Ninguna de las anteriores" }, correcta: "B", explicación: "Validación del patrón de razonamiento analítico para la pregunta número 58." },
    { categoria: "Lógica Proposicional", pregunta: "Ejercicio de Evaluación No. 59: Encuentra la solución lógica u operativa para esta premisa.", opciones: { A: "Opción incorrecta", B: "Respuesta Correcta", C: "Distractor lógico", D: "Ninguna de las anteriores" }, correcta: "B", explicación: "Validación del patrón de razonamiento analítico para la pregunta número 59." },
    { categoria: "Silogismos", pregunta: "Ejercicio de Evaluación No. 60: Encuentra la solución lógica u operativa para esta premisa.", opciones: { A: "Opción incorrecta", B: "Respuesta Correcta", C: "Distractor lógico", D: "Ninguna de las anteriores" }, correcta: "B", explicación: "Validación del patrón de razonamiento analítico para la pregunta número 60." },
    { categoria: "Analogías", pregunta: "Ejercicio de Evaluación No. 61: Encuentra la solución lógica u operativa para esta premisa.", opciones: { A: "Opción incorrecta", B: "Respuesta Correcta", C: "Distractor lógico", D: "Ninguna de las anteriores" }, correcta: "B", explicación: "Validación del patrón de razonamiento analítico para la pregunta número 61." },
    { categoria: "Planteamiento Matemático", pregunta: "Ejercicio de Evaluación No. 62: Encuentra la solución lógica u operativa para esta premisa.", opciones: { A: "Opción incorrecta", B: "Respuesta Correcta", C: "Distractor lógico", D: "Ninguna de las anteriores" }, correcta: "B", explicación: "Validación del patrón de razonamiento analítico para la pregunta número 62." },
    { categoria: "Secuencias Numéricas", pregunta: "Ejercicio de Evaluación No. 63: Encuentra la solución lógica u operativa para esta premisa.", opciones: { A: "Opción incorrecta", B: "Respuesta Correcta", C: "Distractor lógico", D: "Ninguna de las anteriores" }, correcta: "B", explicación: "Validación del patrón de razonamiento analítico para la pregunta número 63." },
    { categoria: "Secuencias Alfabéticas", pregunta: "Ejercicio de Evaluación No. 64: Encuentra la solución lógica u operativa para esta premisa.", opciones: { A: "Opción incorrecta", B: "Respuesta Correcta", C: "Distractor lógico", D: "Ninguna de las anteriores" }, correcta: "B", explicación: "Validación del patrón de razonamiento analítico para la pregunta número 64." },
    { categoria: "Secuencias Alfanuméricas", pregunta: "Ejercicio de Evaluación No. 65: Encuentra la solución lógica u operativa para esta premisa.", opciones: { A: "Opción incorrecta", B: "Respuesta Correcta", C: "Distractor lógico", D: "Ninguna de las anteriores" }, correcta: "B", explicación: "Validación del patrón de razonamiento analítico para la pregunta número 65." },
    { categoria: "Lógica Proposicional", pregunta: "Ejercicio de Evaluación No. 66: Encuentra la solución lógica u operativa para esta premisa.", opciones: { A: "Opción incorrecta", B: "Respuesta Correcta", C: "Distractor lógico", D: "Ninguna de las anteriores" }, correcta: "B", explicación: "Validación del patrón de razonamiento analítico para la pregunta número 66." },
    { categoria: "Silogismos", pregunta: "Ejercicio de Evaluación No. 67: Encuentra la solución lógica u operativa para esta premisa.", opciones: { A: "Opción incorrecta", B: "Respuesta Correcta", C: "Distractor lógico", D: "Ninguna de las anteriores" }, correcta: "B", explicación: "Validación del patrón de razonamiento analítico para la pregunta número 67." },
    { categoria: "Analogías", pregunta: "Ejercicio de Evaluación No. 68: Encuentra la solución lógica u operativa para esta premisa.", opciones: { A: "Opción incorrecta", B: "Respuesta Correcta", C: "Distractor lógico", D: "Ninguna de las anteriores" }, correcta: "B", explicación: "Validación del patrón de razonamiento analítico para la pregunta número 68." },
    { categoria: "Planteamiento Matemático", pregunta: "Ejercicio de Evaluación No. 69: Encuentra la solución lógica u operativa para esta premisa.", opciones: { A: "Opción incorrecta", B: "Respuesta Correcta", C: "Distractor lógico", D: "Ninguna de las anteriores" }, correcta: "B", explicación: "Validación del patrón de razonamiento analítico para la pregunta número 69." },
    { categoria: "Secuencias Numéricas", pregunta: "Ejercicio de Evaluación No. 70: Encuentra la solución lógica u operativa para esta premisa.", opciones: { A: "Opción incorrecta", B: "Respuesta Correcta", C: "Distractor lógico", D: "Ninguna de las anteriores" }, correcta: "B", explicación: "Validación del patrón de razonamiento analítico para la pregunta número 70." },
    { categoria: "Secuencias Alfabéticas", pregunta: "Ejercicio de Evaluación No. 71: Encuentra la solución lógica u operativa para esta premisa.", opciones: { A: "Opción incorrecta", B: "Respuesta Correcta", C: "Distractor lógico", D: "Ninguna de las anteriores" }, correcta: "B", explicación: "Validación del patrón de razonamiento analítico para la pregunta número 71." },
    { categoria: "Secuencias Alfanuméricas", pregunta: "Ejercicio de Evaluación No. 72: Encuentra la solución lógica u operativa para esta premisa.", opciones: { A: "Opción incorrecta", B: "Respuesta Correcta", C: "Distractor lógico", D: "Ninguna de las anteriores" }, correcta: "B", explicación: "Validación del patrón de razonamiento analítico para la pregunta número 72." },
    { categoria: "Lógica Proposicional", pregunta: "Ejercicio de Evaluación No. 73: Encuentra la solución lógica u operativa para esta premisa.", opciones: { A: "Opción incorrecta", B: "Respuesta Correcta", C: "Distractor lógico", D: "Ninguna de las anteriores" }, correcta: "B", explicación: "Validación del patrón de razonamiento analítico para la pregunta número 73." },
    { categoria: "Silogismos", pregunta: "Ejercicio de Evaluación No. 74: Encuentra la solución lógica u operativa para esta premisa.", opciones: { A: "Opción incorrecta", B: "Respuesta Correcta", C: "Distractor lógico", D: "Ninguna de las anteriores" }, correcta: "B", explicación: "Validación del patrón de razonamiento analítico para la pregunta número 74." },
    { categoria: "Analogías", pregunta: "Ejercicio de Evaluación No. 75: Encuentra la solución lógica u operativa para esta premisa.", opciones: { A: "Opción incorrecta", B: "Respuesta Correcta", C: "Distractor lógico", D: "Ninguna de las anteriores" }, correcta: "B", explicación: "Validación del patrón de razonamiento analítico para la pregunta número 75." },
    { categoria: "Planteamiento Matemático", pregunta: "Ejercicio de Evaluación No. 76: Encuentra la solución lógica u operativa para esta premisa.", opciones: { A: "Opción incorrecta", B: "Respuesta Correcta", C: "Distractor lógico", D: "Ninguna de las anteriores" }, correcta: "B", explicación: "Validación del patrón de razonamiento analítico para la pregunta número 76." },
    { categoria: "Secuencias Numéricas", pregunta: "Ejercicio de Evaluación No. 77: Encuentra la solución lógica u operativa para esta premisa.", opciones: { A: "Opción incorrecta", B: "Respuesta Correcta", C: "Distractor lógico", D: "Ninguna de las anteriores" }, correcta: "B", explicación: "Validación del patrón de razonamiento analítico para la pregunta número 77." },
    { categoria: "Secuencias Alfabéticas", pregunta: "Ejercicio de Evaluación No. 78: Encuentra la solución lógica u operativa para esta premisa.", opciones: { A: "Opción incorrecta", B: "Respuesta Correcta", C: "Distractor lógico", D: "Ninguna de las anteriores" }, correcta: "B", explicación: "Validación del patrón de razonamiento analítico para la pregunta número 78." },
    { categoria: "Secuencias Alfanuméricas", pregunta: "Ejercicio de Evaluación No. 79: Encuentra la solución lógica u operativa para esta premisa.", opciones: { A: "Opción incorrecta", B: "Respuesta Correcta", C: "Distractor lógico", D: "Ninguna de las anteriores" }, correcta: "B", explicación: "Validación del patrón de razonamiento analítico para la pregunta número 79." },
    { categoria: "Lógica Proposicional", pregunta: "Ejercicio de Evaluación No. 80: Encuentra la solución lógica u operativa para esta premisa.", opciones: { A: "Opción incorrecta", B: "Respuesta Correcta", C: "Distractor lógico", D: "Ninguna de las anteriores" }, correcta: "B", explicación: "Validación del patrón de razonamiento analítico para la pregunta número 80." },
    { categoria: "Silogismos", pregunta: "Ejercicio de Evaluación No. 81: Encuentra la solución lógica u operativa para esta premisa.", opciones: { A: "Opción incorrecta", B: "Respuesta Correcta", C: "Distractor lógico", D: "Ninguna de las anteriores" }, correcta: "B", explicación: "Validación del patrón de razonamiento analítico para la pregunta número 81." },
    { categoria: "Analogías", pregunta: "Ejercicio de Evaluación No. 82: Encuentra la solución lógica u operativa para esta premisa.", opciones: { A: "Opción incorrecta", B: "Respuesta Correcta", C: "Distractor lógico", D: "Ninguna de las anteriores" }, correcta: "B", explicación: "Validación del patrón de razonamiento analítico para la pregunta número 82." },
    { categoria: "Planteamiento Matemático", pregunta: "Ejercicio de Evaluación No. 83: Encuentra la solución lógica u operativa para esta premisa.", opciones: { A: "Opción incorrecta", B: "Respuesta Correcta", C: "Distractor lógico", D: "Ninguna de las anteriores" }, correcta: "B", explicación: "Validación del patrón de razonamiento analítico para la pregunta número 83." },
    { categoria: "Secuencias Numéricas", pregunta: "Ejercicio de Evaluación No. 84: Encuentra la solución lógica u operativa para esta premisa.", opciones: { A: "Opción incorrecta", B: "Respuesta Correcta", C: "Distractor lógico", D: "Ninguna de las anteriores" }, correcta: "B", explicación: "Validación del patrón de razonamiento analítico para la pregunta número 84." },
    { categoria: "Secuencias Alfabéticas", pregunta: "Ejercicio de Evaluación No. 85: Encuentra la solución lógica u operativa para esta premisa.", opciones: { A: "Opción incorrecta", B: "Respuesta Correcta", C: "Distractor lógico", D: "Ninguna de las anteriores" }, correcta: "B", explicación: "Validación del patrón de razonamiento analítico para la pregunta número 85." },
    { categoria: "Secuencias Alfanuméricas", pregunta: "Ejercicio de Evaluación No. 86: Encuentra la solución lógica u operativa para esta premisa.", opciones: { A: "Opción incorrecta", B: "Respuesta Correcta", C: "Distractor lógico", D: "Ninguna de las anteriores" }, correcta: "B", explicación: "Validación del patrón de razonamiento analítico para la pregunta número 86." },
    { categoria: "Lógica Proposicional", pregunta: "Ejercicio de Evaluación No. 87: Encuentra la solución lógica u operativa para esta premisa.", opciones: { A: "Opción incorrecta", B: "Respuesta Correcta", C: "Distractor lógico", D: "Ninguna de las anteriores" }, correcta: "B", explicación: "Validación del patrón de razonamiento analítico para la pregunta número 87." },
    { categoria: "Silogismos", pregunta: "Ejercicio de Evaluación No. 88: Encuentra la solución lógica u operativa para esta premisa.", opciones: { A: "Opción incorrecta", B: "Respuesta Correcta", C: "Distractor lógico", D: "Ninguna de las anteriores" }, correcta: "B", explicación: "Validación del patrón de razonamiento analítico para la pregunta número 88." },
    { categoria: "Analogías", pregunta: "Ejercicio de Evaluación No. 89: Encuentra la solución lógica u operativa para esta premisa.", opciones: { A: "Opción incorrecta", B: "Respuesta Correcta", C: "Distractor lógico", D: "Ninguna de las anteriores" }, correcta: "B", explicación: "Validación del patrón de razonamiento analítico para la pregunta número 89." },
    { categoria: "Planteamiento Matemático", pregunta: "Ejercicio de Evaluación No. 90: Encuentra la solución lógica u operativa para esta premisa.", opciones: { A: "Opción incorrecta", B: "Respuesta Correcta", C: "Distractor lógico", D: "Ninguna de las anteriores" }, correcta: "B", explicación: "Validación del patrón de razonamiento analítico para la pregunta número 90." },
    { categoria: "Secuencias Numéricas", pregunta: "Ejercicio de Evaluación No. 91: Encuentra la solución lógica u operativa para esta premisa.", opciones: { A: "Opción incorrecta", B: "Respuesta Correcta", C: "Distractor lógico", D: "Ninguna de las anteriores" }, correcta: "B", explicación: "Validación del patrón de razonamiento analítico para la pregunta número 91." },
    { categoria: "Secuencias Alfabéticas", pregunta: "Ejercicio de Evaluación No. 92: Encuentra la solución lógica u operativa para esta premisa.", opciones: { A: "Opción incorrecta", B: "Respuesta Correcta", C: "Distractor lógico", D: "Ninguna de las anteriores" }, correcta: "B", explicación: "Validación del patrón de razonamiento analítico para la pregunta número 92." },
    { categoria: "Secuencias Alfanuméricas", pregunta: "Ejercicio de Evaluación No. 93: Encuentra la solución lógica u operativa para esta premisa.", opciones: { A: "Opción incorrecta", B: "Respuesta Correcta", C: "Distractor lógico", D: "Ninguna de las anteriores" }, correcta: "B", explicación: "Validación del patrón de razonamiento analítico para la pregunta número 93." },
    { categoria: "Lógica Proposicional", pregunta: "Ejercicio de Evaluación No. 94: Encuentra la solución lógica u operativa para esta premisa.", opciones: { A: "Opción incorrecta", B: "Respuesta Correcta", C: "Distractor lógico", D: "Ninguna de las anteriores" }, correcta: "B", explicación: "Validación del patrón de razonamiento analítico para la pregunta número 94." },
    { categoria: "Silogismos", pregunta: "Ejercicio de Evaluación No. 95: Encuentra la solución lógica u operativa para esta premisa.", opciones: { A: "Opción incorrecta", B: "Respuesta Correcta", C: "Distractor lógico", D: "Ninguna de las anteriores" }, correcta: "B", explicación: "Validación del patrón de razonamiento analítico para la pregunta número 95." },
    { categoria: "Analogías", pregunta: "Ejercicio de Evaluación No. 96: Encuentra la solución lógica u operativa para esta premisa.", opciones: { A: "Opción incorrecta", B: "Respuesta Correcta", C: "Distractor lógico", D: "Ninguna de las anteriores" }, correcta: "B", explicación: "Validación del patrón de razonamiento analítico para la pregunta número 96." },
    { categoria: "Planteamiento Matemático", pregunta: "Ejercicio de Evaluación No. 97: Encuentra la solución lógica u operativa para esta premisa.", opciones: { A: "Opción incorrecta", B: "Respuesta Correcta", C: "Distractor lógico", D: "Ninguna de las anteriores" }, correcta: "B", explicación: "Validación del patrón de razonamiento analítico para la pregunta número 97." },
    { categoria: "Secuencias Numéricas", pregunta: "Ejercicio de Evaluación No. 98: Encuentra la solución lógica u operativa para esta premisa.", opciones: { A: "Opción incorrecta", B: "Respuesta Correcta", C: "Distractor lógico", D: "Ninguna de las anteriores" }, correcta: "B", explicación: "Validación del patrón de razonamiento analítico para la pregunta número 98." },
    { categoria: "Secuencias Alfabéticas", pregunta: "Ejercicio de Evaluación No. 99: Encuentra la solución lógica u operativa para esta premisa.", opciones: { A: "Opción incorrecta", B: "Respuesta Correcta", C: "Distractor lógico", D: "Ninguna de las anteriores" }, correcta: "B", explicación: "Validación del patrón de razonamiento analítico para la pregunta número 99." },
    { categoria: "Secuencias Alfanuméricas", pregunta: "Ejercicio de Evaluación No. 100: Encuentra la solución lógica u operativa para esta premisa.", opciones: { A: "Opción incorrecta", B: "Respuesta Correcta", C: "Distractor lógico", D: "Ninguna de las anteriores" }, correcta: "B", explicación: "Validación del patrón de razonamiento analítico para la pregunta número 100." },

];

let preguntasPartida = [];
let indicePreguntaActual = 0;
let puntos = 0;
let comodinesUsados = { "5050": false, "eliminar": false, "llamada": false, "publico": false };
let respondido = false;

const pantallaInicio = document.getElementById('pantalla-inicio');
const pantallaJuego = document.getElementById('pantalla-juego');
const pantallaFinal = document.getElementById('pantalla-final');
const btnJugar = document.getElementById('btn-jugar');
const btnSiguiente = document.getElementById('btn-siguiente');
const btnReiniciar = document.getElementById('btn-reiniciar');
const txtCategoria = document.getElementById('categoria-txt');
const txtPregunta = document.getElementById('pregunta-txt');
const txtContador = document.getElementById('contador-pregunta');
const txtPuntosActuales = document.getElementById('puntos-actuales');
const txtPuntosFinales = document.getElementById('puntos-finales');
const consolaComodin = document.getElementById('consola-comodin');
const panelRetro = document.getElementById('panel-retro');
const txtTituloRetro = document.getElementById('titulo-retro');
const txtExplicacion = document.getElementById('explicacion-txt');

const btnComodin5050 = document.getElementById('comodin-5050');
const btnComodinEliminar = document.getElementById('comodin-eliminar');
const btnComodinLlamada = document.getElementById('comodin-llamada');
const btnComodinPublico = document.getElementById('comodin-publico');
const botonesOpciones = document.querySelectorAll('.btn-opcion');

function iniciarJuego() {
    preguntasPartida = [...bancoPreguntas].sort(() => Math.random() - 0.5);
    indicePreguntaActual = 0; puntos = 0; respondido = false;
    
    for (let c in comodinesUsados) comodinesUsados[c] = false;
    if(btnComodin5050) btnComodin5050.disabled = false;
    if(btnComodinEliminar) btnComodinEliminar.disabled = false;
    if(btnComodinLlamada) btnComodinLlamada.disabled = false;
    if(btnComodinPublico) btnComodinPublico.disabled = false;

    if(txtPuntosActuales) txtPuntosActuales.textContent = puntos;
    cambiarPantalla(pantallaJuego);
    cargarPregunta();
}

function cambiarPantalla(pantallaObjetivo) {
    pantallaInicio.classList.remove('activa');
    pantallaJuego.classList.remove('activa');
    pantallaFinal.classList.remove('activa');
    pantallaObjetivo.classList.add('activa');
}

function cargarPregunta() {
    respondido = false;
    if(btnSiguiente) btnSiguiente.style.display = 'none';
    if(panelRetro) panelRetro.style.display = 'none';
    if(consolaComodin) consolaComodin.style.display = 'none';

    let pActual = preguntasPartida[indicePreguntaActual];
    if(txtCategoria) txtCategoria.textContent = pActual.categoria;
    if(txtPregunta) txtPregunta.textContent = pActual.pregunta;
    if(txtContador) txtContador.textContent = `Pregunta ${indicePreguntaActual + 1} de ${preguntasPartida.length}`;

    botonesOpciones.forEach(btn => {
        const letra = btn.getAttribute('data-opcion');
        const txtOpc = btn.querySelector('.txt-opc');
        if(txtOpc) txtOpc.textContent = pActual.opciones[letra];
        btn.className = "btn-opcion";
        btn.disabled = false;
    });
}

function verificarRespuesta(letraSeleccionada, botonPresionado) {
    if (respondido) return;
    respondido = true;

    let pActual = preguntasPartida[indicePreguntaActual];
    botonesOpciones.forEach(btn => btn.disabled = true);

    if (letraSeleccionada === pActual.correcta) {
        puntos++;
        if(txtPuntosActuales) txtPuntosActuales.textContent = puntos;
        botonPresionado.classList.add('seleccionada-correcta');
        if(txtTituloRetro) { txtTituloRetro.textContent = "¡CORRECTO!"; txtTituloRetro.className = "titulo-retro bien"; }
    } else {
        botonPresionado.classList.add('seleccionada-incorrecta');
        botonesOpciones.forEach(btn => {
            if (btn.getAttribute('data-opcion') === pActual.correcta) btn.classList.add('seleccionada-correcta');
        });
        if(txtTituloRetro) { txtTituloRetro.textContent = "INCORRECTO"; txtTituloRetro.className = "titulo-retro mal"; }
    }

    if(txtExplicacion) txtExplicacion.textContent = pActual.explicación;
    if(panelRetro) panelRetro.style.display = 'block';
    if(btnSiguiente) btnSiguiente.style.display = 'block';
}

if(btnJugar) btnJugar.addEventListener('click', iniciarJuego);
if(btnSiguiente) {
    btnSiguiente.addEventListener('click', () => {
        indicePreguntaActual++;
        if (indicePreguntaActual < preguntasPartida.length) {
            cargarPregunta();
        } else {
            if(txtPuntosFinales) txtPuntosFinales.textContent = puntos;
            cambiarPantalla(pantallaFinal);
        }
    });
}
if(btnReiniciar) btnReiniciar.addEventListener('click', iniciarJuego);

botonesOpciones.forEach(btn => {
    btn.addEventListener('click', function() {
        verificarRespuesta(this.getAttribute('data-opcion'), this);
    });
});

if(btnComodin5050) {
    btnComodin5050.addEventListener('click', () => {
        if (respondido || comodinesUsados["5050"]) return;
        comodinesUsados["5050"] = true; btnComodin5050.disabled = true;
        let pActual = preguntasPartida[indicePreguntaActual];
        let incorrectas = ['A', 'B', 'C', 'D'].filter(l => l !== pActual.correcta).sort(() => Math.random() - 0.5);
        let aOcultar = incorrectas.slice(0, 2);
        botonesOpciones.forEach(btn => { if (aOcultar.includes(btn.getAttribute('data-opcion'))) { btn.classList.add('oculta'); btn.disabled = true; } });
    });
}

if(btnComodinEliminar) {
    btnComodinEliminar.addEventListener('click', () => {
        if (respondido || comodinesUsados["eliminar"]) return;
        comodinesUsados["eliminar"] = true; btnComodinEliminar.disabled = true;
        let pActual = preguntasPartida[indicePreguntaActual];
        let disponibles = [];
        botonesOpciones.forEach(btn => { if (btn.getAttribute('data-opcion') !== pActual.correcta && !btn.classList.contains('oculta')) disponibles.push(btn); });
        if (disponibles.length > 0) { let elegido = disponibles[Math.floor(Math.random() * disponibles.length)]; elegido.classList.add('oculta'); elegido.disabled = true; }
    });
}

if(btnComodinLlamada) {
    btnComodinLlamada.addEventListener('click', () => {
        if (respondido || comodinesUsados["llamada"]) return;
        comodinesUsados["llamada"] = true; btnComodinLlamada.disabled = true;
        let pActual = preguntasPartida[indicePreguntaActual];
        if(consolaComodin) { consolaComodin.innerHTML = `📞 <b>El experto en lógica dice:</b> "Estoy seguro de que la respuesta correcta es la <b>${pActual.correcta}</b>."`; consolaComodin.style.display = 'block'; }
    });
}

if(btnComodinPublico) {
    btnComodinPublico.addEventListener('click', () => {
        if (respondido || comodinesUsados["publico"]) return;
        comodinesUsados["publico"] = true; btnComodinPublico.disabled = true;
        let pActual = preguntasPartida[indicePreguntaActual];
        if(consolaComodin) {
            consolaComodin.innerHTML = `👥 <b>El público vota mayoritariamente por la opción ${pActual.correcta}.</b>`;
            consolaComodin.style.display = 'block';
        }
    });
}
