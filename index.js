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
    { categoria: "Secuencias Numéricas", pregunta: "Completa la serie numérica: 4, 9, 14, 19, ...", opciones: { A: "22", B: "24", C: "25", D: "26" }, correcta: "B", explicación: "Se suma una constante de +5 a cada término." },
    { categoria: "Secuencias Numéricas", pregunta: "¿Qué número continúa la secuencia? 3, 7, 11, 15, ...", opciones: { A: "18", B: "19", C: "20", D: "21" }, correcta: "B", explicación: "Progresión aritmética con diferencia constante d = 4." },
    { categoria: "Secuencias Numéricas", pregunta: "Encuentre el número que falta: 6, 12, 24, 48, ...", opciones: { A: "96", B: "84", C: "72", D: "100" }, correcta: "A", explicación: "Multiplicación consecutiva por la razón geométrica de 2." },
    { categoria: "Secuencias Numéricas", pregunta: "¿Qué número sigue? 50, 45, 40, 35, ...", opciones: { A: "32", B: "30", C: "25", D: "28" }, correcta: "B", explicación: "Disminución constante restando 5 unidades a cada término." },
    { categoria: "Secuencias Numéricas", pregunta: "Completa la serie: 1, 8, 27, 64, ...", opciones: { A: "100", B: "125", C: "150", D: "81" }, correcta: "B", explicación: "Serie de potencias cúbicas perfectas: 1³, 2³, 3³, 4³, sigue 5³ = 125." },
    { categoria: "Secuencias Alfabéticas", pregunta: "¿Qué letra continúa la serie? A, C, E, G, ...", opciones: { A: "H", B: "I", C: "J", D: "K" }, correcta: "B", explicación: "Se salta una letra intermedia en el abecedario (A... C... E... G... I)." },
    { categoria: "Secuencias Alfabéticas", pregunta: "Determina la letra que sigue: Z, X, V, T, ...", opciones: { A: "S", B: "R", C: "Q", D: "U" }, correcta: "B", explicación: "El alfabeto en reversa saltando una letra (Z... X... V... T... R)." },
    { categoria: "Secuencias Alfabéticas", pregunta: "Completa la serie: B, E, H, K, ...", opciones: { A: "L", B: "M", C: "N", D: "Ñ" }, correcta: "C", explicación: "Se saltan dos letras intermedias cada vez: B (cd) E (fg) H (ij) K (lm) N." },
    { categoria: "Secuencias Alfabéticas", pregunta: "¿Qué letra sigue? A, D, G, J, ...", opciones: { A: "K", B: "L", C: "M", D: "N" }, correcta: "C", explicación: "Avanza de 3 en 3 en el abecedario. Sigue la M." },
    { categoria: "Secuencias Alfabéticas", pregunta: "Encuentra la letra que falta: C, F, I, L, ...", opciones: { A: "M", B: "N", C: "Ñ", D: "O" }, correcta: "D", explicación: "Avanza de 3 en 3 posiciones en el abecedario (C=3, F=6, I=9, L=12, O=15)." },
    { categoria: "Secuencias Alfabéticas", pregunta: "¿Qué letra continúa? A, B, D, G, K, ...", opciones: { A: "L", B: "O", C: "Ñ", D: "P" }, correcta: "C", explicación: "Los saltos aumentan: 0 letras, luego 1 letra, luego 2, luego 3. Toca saltar 4 letras después de la K, lo que nos da la Ñ." },
    { categoria: "Secuencias Alfabéticas", pregunta: "Completa la secuencia: AB, CD, EF, GH, ...", opciones: { A: "HG", B: "IJ", C: "JI", D: "KL" }, correcta: "B", explicación: "Parejas ordenadas del abecedario en secuencia directa." },
    { categoria: "Secuencias Alfabéticas", pregunta: "¿Qué letra sigue? Z, W, T, Q, ...", opciones: { A: "P", B: "O", C: "N", D: "M" }, correcta: "C", explicación: "Retrocede de 3 en 3 en el abecedario. Antes de Q está la N." },
    { categoria: "Secuencias Alfabéticas", pregunta: "Determina la letra que sigue: F, G, I, L, P, ...", opciones: { A: "Q", B: "R", C: "U", D: "V" }, correcta: "C", explicación: "Saltos crecientes de letras: 0, 1, 2, 3, toca saltar 4 letras desde la P, llegando a la U." },
    { categoria: "Secuencias Alfabéticas", pregunta: "Completa la serie: U, T, S, R, Q, ...", opciones: { A: "P", B: "O", C: "N", D: "Z" }, correcta: "A", explicación: "Abecedario estricto en orden inverso. Antes de Q está la P." },
    { categoria: "Secuencias Alfabéticas", pregunta: "¿Qué letra continúa? D, G, J, M, ...", opciones: { A: "Ñ", B: "O", C: "P", D: "Q" }, correcta: "A", explicación: "Se avanza sumando 3 posiciones de forma constante en el alfabeto." },
    { categoria: "Secuencias Alfabéticas", pregunta: "Determine el término alfabético que sigue: O, L, I, F, ...", opciones: { A: "C", B: "D", C: "B", D: "E" }, correcta: "A", explicación: "Retroceso constante de 3 posiciones en el orden alfabético ordinario." },
    { categoria: "Secuencias Alfabéticas", pregunta: "Complete la serie elemental: E, G, I, K, ...", opciones: { A: "L", B: "M", C: "N", D: "O" }, correcta: "B", explicación: "Saltos uniformes de una letra intermedia en sentido directo." },
    { categoria: "Secuencias Alfabéticas", pregunta: "¿Qué letra sigue? B, D, F, H, ...", opciones: { A: "I", B: "J", C: "K", D: "L" }, correcta: "B", explicación: "Letras en posiciones pares del alfabeto (2, 4, 6, 8, sigue la décima letra J)." },
    { categoria: "Secuencias Alfabéticas", pregunta: "Complete: Z, Y, X, W, ...", opciones: { A: "U", B: "V", C: "T", D: "S" }, correcta: "B", explicación: "Orden inverso regular sin saltos del abecedario." },
    { categoria: "Secuencias Alfanuméricas", pregunta: "¿Qué término continúa? A1, B2, C3, D4, ...", opciones: { A: "E6", B: "F5", C: "E5", D: "D5" }, correcta: "C", explicación: "Las letras avanzan de uno en uno y los números también de uno en uno." },
    { categoria: "Secuencias Alfanuméricas", pregunta: "Completa la serie: Z10, X20, V30, T40, ...", opciones: { A: "R50", B: "S50", C: "R60", D: "S60" }, correcta: "A", explicación: "Las letras retroceden de 2 en 2 y los números aumentan de 10 en 10." },
    { categoria: "Secuencias Alfanuméricas", pregunta: "¿Qué sigue? A2, C4, E8, G16, ...", opciones: { A: "I24", B: "H32", C: "I32", D: "J32" }, correcta: "C", explicación: "Letras saltan de 2 en 2 (sigue I) y los números se duplican (16 x 2 = 32)." },
    { categoria: "Secuencias Alfanuméricas", pregunta: "Completa la serie: 1A, 3C, 5E, 7G, ...", opciones: { A: "9I", B: "8H", C: "9H", D: "10I" }, correcta: "A", explicación: "Números impares consecutivos coordinados con letras que saltan de a una." },
    { categoria: "Secuencias Alfanuméricas", pregunta: "¿Qué sigue? B5, D10, F15, H20, ...", opciones: { A: "I25", B: "J25", C: "J30", D: "K25" }, correcta: "B", explicación: "Letras pares (B, D, F, H, J) junto a la tabla del 5 (5, 10, 15, 20, 25)." },
    { categoria: "Secuencias Alfanuméricas", pregunta: "Encuentra el término: M1, N2, Ñ4, O8, ...", opciones: { A: "P12", B: "Q16", C: "P16", D: "O16" }, correcta: "C", explicación: "Letras consecutivas (M, N, Ñ, O, P) y los números se multiplican por 2." },
    { categoria: "Secuencias Alfanuméricas", pregunta: "¿Qué sigue? 2Z, 4Y, 8X, 16W, ...", opciones: { A: "32V", B: "24V", C: "32U", D: "30V" }, correcta: "A", explicación: "Los números se duplican (32) y las letras van en reversa (Z, Y, X, W, V)." },
    { categoria: "Secuencias Alfanuméricas", pregunta: "Completa: A1, C3, E5, G7, ...", opciones: { A: "H8", B: "I9", C: "I8", D: "J10" }, correcta: "B", explicación: "La letra corresponde a su posición numérica en orden impar (I es la novena letra)." },
    { categoria: "Secuencias Alfanuméricas", pregunta: "¿Qué sigue? 100A, 50B, 25C, ...", opciones: { A: "12.5D", B: "10D", C: "12D", D: "5D" }, correcta: "A", explicación: "Los números se dividen para 2 (25 / 2 = 12.5) y las letras avanzan ordenadamente." },
    { categoria: "Secuencias Alfanuméricas", pregunta: "Completa: C3, F6, I9, L12, ...", opciones: { A: "N14", B: "Ñ15", C: "O15", D: "M13" }, correcta: "C", explicación: "Letras avanzan de 3 en 3 y los números marcan exactamente su posición indexada." },
    { categoria: "Secuencias Alfanuméricas", pregunta: "¿Qué término continúa? X1, U2, R3, O4, ...", opciones: { A: "M5", B: "L5", C: "N5", D: "L6" }, correcta: "B", explicación: "Las letras retroceden 3 posiciones (X, U, R, O, L) y los números incrementan en 1." },
    { categoria: "Secuencias Alfanuméricas", pregunta: "Complete la serie mixta: 1A, 2B, 4C, 8D, ...", opciones: { A: "16E", B: "12E", C: "16F", D: "10E" }, correcta: "A", explicación: "Los coeficientes se duplican sucesivamente y las letras avanzan de manera regular." },
    { categoria: "Secuencias Alfanuméricas", pregunta: "¿Qué sigue? B2, D4, F6, H8, ...", opciones: { A: "I10", B: "J10", C: "J12", D: "K10" }, correcta: "B", explicación: "Letras en orden de índice par acompañadas por su valor posicional simétrico." },
    { categoria: "Secuencias Alfanuméricas", pregunta: "Complete la secuencia: 5A, 10C, 15E, 20G, ...", opciones: { A: "25I", B: "25H", C: "30I", D: "25J" }, correcta: "A", explicación: "Múltiplos de 5 coordinados con avance alfabético saltando una letra." },
    { categoria: "Secuencias Alfanuméricas", pregunta: "¿Qué término sigue? Z1, Y2, X4, W8, ...", opciones: { A: "V16", B: "V12", C: "U16", D: "W16" }, correcta: "A", explicación: "Letras en orden regresivo continuo combinadas con duplicación de números." },
    { categoria: "Lógica Proposicional", pregunta: "Si p es VERDADERO, ¿cuál es el valor de verdad de la negación (~p)?", opciones: { A: "Verdadero", B: "Falso", C: "Indeterminado", D: "Depende" }, correcta: "B", explicación: "La negación invierte el valor de verdad de forma absoluta." },
    { categoria: "Lógica Proposicional", pregunta: "¿Cuándo es VERDADERA una conjunción (p ∧ q)?", opciones: { A: "Cuando ambas son verdaderas.", B: "Cuando al menos una es verdadera.", C: "Cuando ambas son falsas.", D: "Nunca." }, correcta: "A", explicación: "La conjunción exige que ambas partes se cumplan rigurosamente para ser verdadera." },
    { categoria: "Lógica Proposicional", pregunta: "¿Cuándo es FALSA una disyunción inclusiva (p ∨ q)?", opciones: { A: "Cuando ambas son falsas.", B: "Cuando una es verdadera.", C: "Cuando ambas son verdaderas.", D: "Nunca." }, correcta: "A", explicación: "La disyunción inclusiva solo falla si ninguna de las opciones es verdadera." },
    { categoria: "Lógica Proposicional", pregunta: "En una condicional (p → q), si p es Verdadero y q es Falso, el resultado es:", opciones: { A: "Verdadero", B: "Falso", C: "Indeterminado", D: "Tautología" }, correcta: "B", explicación: "Una promesa condicional solo se rompe si teniendo la causa (V) no se da el efecto (F)." },
    { categoria: "Lógica Proposicional", pregunta: "Si p y q tienen el mismo valor de verdad, la bicondicional (p ↔ q) es:", opciones: { A: "Verdadero", B: "Falso", C: "Contradicción", D: "Variable" }, correcta: "A", explicación: "La equivalencia matemática o bicondicional es verdadera si ambos lados coinciden (V↔V o F↔F)." },
    { categoria: "Lógica Proposicional", pregunta: "¿Qué es una tautología?", opciones: { A: "Una proposición siempre falsa.", B: "Una proposición siempre verdadera.", C: "Una combinación de falso y verdadero.", D: "Un error matemático." }, correcta: "B", explicación: "Tautología define a toda expresión lógica que resulta verdadera en todas sus líneas posibles." },
    { categoria: "Lógica Proposicional", pregunta: "¿Qué es una contradicción?", opciones: { A: "Una proposición siempre falsa.", B: "Una proposición siempre verdadera.", C: "Una duda filosófica.", D: "Una igualdad." }, correcta: "A", explicación: "Es una expresión formal cuyo resultado final en la tabla de verdad siempre da Falso." },
    { categoria: "Lógica Proposicional", pregunta: "La negación de 'Todos los hombres son altos' es:", opciones: { A: "Ningún hombre es alto.", B: "Algunos hombres no son altos.", C: "Todos los hombres son bajos.", D: "Las mujeres son altas." }, correcta: "B", explicación: "Para romper un enunciado universal basta con demostrar que existe al menos una excepción ('Al menos un hombre no es alto')." },
    { categoria: "Lógica Proposicional", pregunta: "La negación de la proposición 'p ∧ q' por leyes de De Morgan es equivalente a:", opciones: { A: "~p ∧ ~q", B: "~p ∨ ~q", C: "p ∨ q", D: "~(p ∨ q)" }, correcta: "B", explicación: "Al negar una conjunción, se niegan ambos términos independientes y el conector cambia a disyunción." },
    { categoria: "Lógica Proposicional", pregunta: "Si el antecedente de un condicional es FALSO, la condicional completa automáticamente es:", opciones: { A: "Falsa", B: "Verdadera", C: "Indeterminada", D: "Una falacia" }, correcta: "B", explicación: "Si la condición inicial no ocurre, no se puede violar la regla, por lo tanto el enunciado es formalmente verdadero." },
    { categoria: "Lógica Proposicional", pregunta: "¿Cuál es el conectivo de la disyunción exclusiva?", opciones: { A: "O ... o ...", B: "... y ...", C: "Si ... entonces", D: "... si y solo si ..." }, correcta: "A", explicación: "Excluye la posibilidad de que ambos eventos pasen a la vez (ej: O estás vivo o estás muerto)." },
    { categoria: "Lógica Proposicional", pregunta: "Si p es Falso y q es Falso, ¿cuánto da p → q?", opciones: { A: "Falso", B: "Verdadera", C: "No se sabe", D: "Nulo" }, correcta: "B", explicación: "Falso implica Falso es formalmente una estructura válida y verdadera." },
    { categoria: "Lógica Proposicional", pregunta: "La negación de 'Ningún estudiante aprobó' es:", opciones: { A: "Todos los estudiantes aprobaron.", B: "Al menos un estudiante aprobó.", C: "Los profesores aprobaron.", D: "Nadie aprobó." }, correcta: "B", explicación: "La negación de un cuantificador existencial negativo se hace afirmando la existencia de al menos un caso positivo." },
    { categoria: "Lógica Proposicional", pregunta: "Si una tabla de verdad da respuestas mezcladas (verdaderas y falsas), se llama:", opciones: { A: "Tautología", B: "Contingencia", C: "Contradicción", D: "Falacia" }, correcta: "B", explicación: "Contingencia significa que el valor depende de las variables originales." },
    { categoria: "Lógica Proposicional", pregunta: "La expresión p ∨ ~p es un ejemplo clásico de:", opciones: { A: "Contradicción", B: "Tautología", C: "Contingencia", D: "Paradoja" }, correcta: "B", explicación: "Principio del tercero excluido: Algo es o no es, no hay término medio; por tanto, siempre es verdad." },
    { categoria: "Silogismos", pregunta: "Premisa 1: Todos los lácteos tienen calcio. Premisa 2: El yogur es un lácteo. Conclusión:", opciones: { A: "El yogur tiene calcio.", B: "El calcio es yogur.", C: "La leche tiene calcio.", D: "Nada concluyente." }, correcta: "A", explicación: "Deducción directa transitiva: Si A está en B y B está en C, entonces A está en C." },
    { categoria: "Silogismos", pregunta: "P1: Ningún ave tiene dientes. P2: El águila es un ave. Conclusión:", opciones: { A: "El águila tiene dientes.", B: "El águila no tiene dientes.", C: "Algunas aves cazan.", D: "Las águilas muerden." }, correcta: "B", explicación: "Aplicación universal de una propiedad negativa al elemento del conjunto." },
    { categoria: "Silogismos", pregunta: "P1: Todos los científicos son observadores. P2: Algunos matemáticos son científicos. Conclusión:", opciones: { A: "Todos los matemáticos son observadores.", B: "Algunos matemáticos son observadores.", C: "Ningún matemático es observador.", D: "Los científicos no se equivocan." }, correcta: "B", explicación: "La intersección parcial mantiene la propiedad del conjunto mayor." },
    { categoria: "Silogismos", pregunta: "P1: Los metales brillan. P2: El oro es un metal. Conclusión:", opciones: { A: "El oro brilla.", B: "El oro es caro.", C: "Todo lo que brilla es oro.", D: "El oro no se oxida." }, correcta: "A", explicación: "Silogismo categórico simple en el que se asigna la propiedad general al caso específico." },
    { categoria: "Silogismos", pregunta: "P1: Todos los planetas giran alrededor de una estrella. P2: Júpiter es un planeta. Conclusión:", opciones: { A: "Júpiter es una estrella.", B: "Júpiter gira alrededor de una estrella.", C: "Las estrellas giran.", D: "Júpiter es grande." }, correcta: "B", explicación: "Deducción lógica por inclusión de clases." },
    { categoria: "Silogismos", pregunta: "P1: Ningún mamífero vuela (en lógica estricta). P2: El perro es un mamífero. Conclusión:", opciones: { A: "El perro vuela.", B: "El perro no vuela.", C: "Los perros corren.", D: "Los pájaros vuelan." }, correcta: "B", explicación: "Se niega la característica basándose en la regla restrictiva de la premisa mayor." },
    { categoria: "Silogismos", pregunta: "P1: Todos los libros instruyen. P2: Este manual es un libro. Conclusión:", opciones: { A: "Este manual instruye.", B: "Los manuales son aburridos.", C: "Leer es bueno.", D: "Ningún manual instruye." }, correcta: "A", explicación: "Deducción clásica categórica válida." },
    { categoria: "Silogismos", pregunta: "P1: Algunos médicos son cirujanos. P2: Todos los cirujanos usan bisturí. Conclusión:", opciones: { A: "Todos los médicos usan bisturí.", B: "Algunos médicos usan bisturí.", C: "Ningún médico usa bisturí.", D: "Los cirujanos no son médicos." }, correcta: "B", explicación: "El grupo de médicos que son cirujanos obligatoriamente arrastran la propiedad de usar bisturí." },
    { categoria: "Silogismos", pregunta: "P1: Los felinos son cazadores. P2: El gato de mi casa es un felino. Conclusión:", opciones: { A: "El gato es manso.", B: "El gato es un cazador.", C: "A los gatos les gusta la leche.", D: "Los cazadores tienen gatos." }, correcta: "B", explicación: "Deducción directa de lo general a lo particular." },
    { categoria: "Silogismos", pregunta: "P1: Todos los cuadrados tienen 4 lados. P2: Esta figura no tiene 4 lados. Conclusión:", opciones: { A: "Esta figura es un triángulo.", B: "Esta figura no es un cuadrado.", C: "La figura es un círculo.", D: "La figura está mal dibujada." }, correcta: "B", explicación: "Modus Tollens: Al negar el consecuente (4 lados), se niega inmediatamente el antecedente (cuadrado)." },
    { categoria: "Silogismos", pregunta: "P1: Ningún gas tiene forma propia. P2: El oxígeno es un gas. Conclusión:", opciones: { A: "El oxígeno tiene forma propia.", B: "El oxígeno no tiene forma propia.", C: "El oxígeno es invisible.", D: "El aire pesa." }, correcta: "B", explicación: "Propiedad negativa universal aplicada al elemento." },
    { categoria: "Silogismos", pregunta: "P1: Todas las plantas hacen fotosíntesis. P2: El helecho es una planta. Conclusión:", opciones: { A: "El helecho hace fotosíntesis.", B: "El helecho es verde.", C: "El helecho no necesita agua.", D: "Las plantas son seres vivos." }, correcta: "A", explicación: "Asignación lógica deductiva directa." },
    { categoria: "Silogismos", pregunta: "P1: Las frutas contienen fructosa. P2: La manzana es una fruta. Conclusión:", opciones: { A: "La manzana es roja.", B: "La manzana contiene fructosa.", C: "La fructosa es dañina.", D: "Las verduras no tienen fructosa." }, correcta: "B", explicación: "Inclusión lógica evidente." },
    { categoria: "Silogismos", pregunta: "P1: Todos los atletas entrenan. P2: Pedro es un atleta. Conclusión:", opciones: { A: "Pedro está cansado.", B: "Pedro entrena.", C: "Pedro va a ganar.", D: "Pedro corre rápido." }, correcta: "B", explicación: "Cumple las reglas básicas de inferencia válida." },
    { categoria: "Silogismos", pregunta: "P1: Ningún triángulo tiene 5 lados. P2: Esta figura es un triángulo. Conclusión:", opciones: { A: "Esta figura tiene 5 lados.", B: "Esta figura no tiene 5 lados.", C: "Es un pentágono.", D: "No es una figura geométrica." }, correcta: "B", explicación: "Exclusión absoluta basada en la premisa excluyente universal." },
    { categoria: "Analogías", pregunta: "Perro es a jauría como abeja es a:", opciones: { A: "Enjambre", B: "Colmena", C: "Panal", D: "Miel" }, correcta: "A", explicación: "Relación de elemento a conjunto colectivo (Sustantivo colectivo)." },
    { categoria: "Analogías", pregunta: "Pájaro es a nido como oso es a:", opciones: { A: "Cueva", B: "Bosque", C: "Miel", D: "Jaula" }, correcta: "A", explicación: "Relación de habitáculo natural del animal." },
    { categoria: "Analogías", pregunta: "Conductor es a coche como piloto es a:", opciones: { A: "Avión", B: "Pista", C: "Cielo", D: "Pasajero" }, correcta: "A", explicación: "Persona que maneja o comanda el respectivo medio de transporte." },
    { categoria: "Analogías", pregunta: "Calor es a frío como luz es a:", opciones: { A: "Foco", B: "Oscuridad", C: "Sombra", D: "Sol" }, correcta: "B", explicación: "Relación de antonimia directa (conceptos opuestos)." },
    { categoria: "Analogías", pregunta: "Médico es a hospital como profesor es a:", opciones: { A: "Libro", B: "Escuela", C: "Alumno", D: "Pizarrón" }, correcta: "B", explicación: "Profesión asociada a su lugar de trabajo característico." },
    { categoria: "Analogías", pregunta: "Pluma es a ave como escama es a:", opciones: { A: "Pez", B: "Agua", C: "Mar", D: "Aleta" }, correcta: "A", explicación: "Recubrimiento corporal propio de la especie." },
    { categoria: "Analogías", pregunta: "Guante es a mano como zapato es a:", opciones: { A: "Calcetín", B: "Pie", C: "Piso", D: "Pantalón" }, correcta: "B", explicación: "Prenda de vestir respecto a la extremidad que protege." },
    { categoria: "Analogías", pregunta: "Estudiante es a libro como pintor es a:", opciones: { A: "Cuadro", B: "Pincel", C: "Museo", D: "Color" }, correcta: "B", explicación: "Herramienta u objeto de trabajo fundamental para ejecutar el oficio." },
    { categoria: "Analogías", pregunta: "Lunes es a martes como enero es a:", opciones: { A: "Febrero", B: "Año", C: "Mes", D: "Diciembre" }, correcta: "A", explicación: "Elemento inmediatamente posterior dentro de una serie temporal fija." },
    { categoria: "Analogías", pregunta: "Volante es a coche como timón es a:", opciones: { A: "Avión", B: "Barco", C: "Mar", D: "Capitán" }, correcta: "B", explicación: "Mecanismo de dirección del vehículo correspondiente." },
    { categoria: "Planteamiento Matemático", pregunta: "Si el doble de un número es 50, ¿cuál es el triple de ese mismo número?", opciones: { A: "100", B: "75", C: "150", D: "60" }, correcta: "B", explicación: "Si 2x = 50, entonces x = 25. El triple es 25 x 3 = 75." },
    { categoria: "Planteamiento Matemático", pregunta: "Un padre tiene 40 años y su hijo 10. ¿En cuántos años la edad del padre será el triple de la del hijo?", opciones: { A: "5 años", B: "10 años", C: "15 años", D: "20 años" }, correcta: "A", explicación: "En 5 años el padre tendrá 45 y el hijo 15. 45 es exactamente el triple de 15." },
    { categoria: "Planteamiento Matemático", pregunta: "Si tres gatos cazan tres ratones en tres minutos, ¿cuántos minutos tardará un gato en cazar un ratón?", opciones: { A: "1 minuto", B: "3 minutos", C: "9 minutos", D: "0 minutos" }, correcta: "B", explicación: "La tasa de trabajo es simultánea. Cada gato se encarga de un ratón y le toma los mismos 3 minutos." },
    { categoria: "Planteamiento Matemático", pregunta: "En una caja hay 4 bolas rojas, 5 azules y 6 verdes. ¿Cuántas bolas debo sacar como mínimo a ciegas para estar seguro de tener una azul?", opciones: { A: "1 bola", B: "6 bolas", C: "11 bolas", D: "12 bolas" }, correcta: "C", explicación: "Caso del peor de los casos: saco todas las rojas (4) y todas las verdes (6), lo que suma 10. La siguiente bola (la número 11) será azul con total certeza." },
    { categoria: "Planteamiento Matemático", pregunta: "Si un ladrillo pesa un kilo más medio ladrillo, ¿cuánto pesa un ladrillo entero?", opciones: { A: "1 kg", B: "1.5 kg", C: "2 kg", D: "3 kg" }, correcta: "C", explicación: "Ecuación: X = 1 + X/2 -> X/2 = 1 -> X = 2 kg." },
    { categoria: "Planteamiento Matemático", pregunta: "Un tren eléctrico viaja hacia el norte a 100 km/h y el viento sopla hacia el sur. ¿Hacia dónde va el humo?", opciones: { A: "Hacia el sur", B: "Hacia el este", C: "Hacia ningún lado", D: "Hacia abajo" }, correcta: "C", explicación: "Pregunta capciosa de descarte cognitivo: Al ser un tren eléctrico, no genera humo." },
    { categoria: "Planteamiento Matemático", pregunta: "Si ayer fue martes, ¿qué día será el pasado mañana de mañana?", opciones: { A: "Viernes", B: "Sábado", C: "Jueves", D: "Domingo" }, correcta: "B", explicación: "Si ayer fue martes, hoy es miércoles. Mañana será jueves, y pasado mañana de jueves es sábado." },
    { categoria: "Planteamiento Matemático", pregunta: "Tengo 5 manzanas y me quitas 3, ¿cuántas manzanas tienes tú?", opciones: { A: "2", B: "3", C: "5", D: "0" }, correcta: "B", explicación: "La pregunta interroga sobre cuántas manzanas posees tú ahora mismo; como me quitaste 3, tú tienes 3." },
    { categoria: "Planteamiento Matemático", pregunta: "Una camiseta y un pantalón cuestan $110 en total. El pantalón cuesta $100 más que la camiseta. ¿Cuánto cuesta la camiseta?", opciones: { A: "$10", B: "$5", C: "$15", D: "$20" }, correcta: "B", explicación: "Ecuación: C + (C + 100) = 110 -> 2C = 10 -> C = $5. El pantalón cuesta $105." },
    { categoria: "Planteamiento Matemático", pregunta: "¿Cuántas veces se puede restar el número 5 del número 25?", opciones: { A: "5 veces", B: "1 vez", C: "25 veces", D: "Un sinfín" }, correcta: "B", explicación: "Solo se puede restar una vez, porque tras realizar la operación por primera vez ya dejas de tener 25 (ahora tienes 20)." },
    { categoria: "Planteamiento Matemático", pregunta: "Si subo una escalera de 2 en 2 escalones doy 6 pasos menos que si la subo de uno en uno. ¿Cuántos escalones tiene la escalera?", opciones: { A: "12", B: "24", C: "6", D: "18" }, correcta: "A", explicación: "Ecuación: X/2 = X - 6 -> X = 2X - 12 -> X = 12 escalones." },
    { categoria: "Planteamiento Matemático", pregunta: "En una familia hay dos padres y dos hijos, pero solo hay 3 personas en total. ¿Cómo es posible?", opciones: { A: "Es un error", B: "Son abuelo, padre e hijo", C: "Son dos hermanos", D: "Son tíos" }, correcta: "B", explicación: "El abuelo es padre, el padre es hijo y padre a la vez, y el nieto es hijo. Ahí se cumplen los roles con 3 individuos." },
    { categoria: "Planteamiento Matemático", pregunta: "Si divido 30 por 0.5 y le sumo 10, ¿qué número obtengo?", opciones: { A: "25", B: "70", C: "40", D: "15" }, correcta: "B", explicación: "Dividir para 0.5 equivale matemáticamente a multiplicar por 2. (30 / 0.5) = 60. Luego, 60 + 10 = 70." },
    { categoria: "Planteamiento Matemático", pregunta: "Un granjero tiene 17 ovejas y mueren todas menos 9. ¿Cuántas ovejas le quedan?", opciones: { A: "8", B: "9", C: "17", D: "0" }, correcta: "B", explicación: "El enunciado afirma de forma explícita que murieron todas 'menos 9', por lo que le quedan exactamente esas 9 vivas." },
    { categoria: "Planteamiento Matemático", pregunta: "¿Qué pesa más? ¿Un kilo de hierro o un kilo de paja?", opciones: { A: "El hierro", B: "La paja", C: "Pesan igual", D: "Depende del clima" }, correcta: "C", explicación: "Ambos objetos tienen exactamente la misma masa métrica asignada (1 kilogramo)." },
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
        if(consolaComodin) { consolaComodin.innerHTML = `📞 <b>El experto en lógica dice:</b> "Analizando los patrones del ejercicio, estoy seguro de que la respuesta correcta es la <b>${pActual.correcta}</b>."`; consolaComodin.style.display = 'block'; }
    });
}

if(btnComodinPublico) {
    btnComodinPublico.addEventListener('click', () => {
        if (respondido || comodinesUsados["publico"]) return;
        comodinesUsados["publico"] = true; btnComodinPublico.disabled = true;
        let pActual = preguntasPartida[indicePreguntaActual];
        if(consolaComodin) {
            consolaComodin.innerHTML = `👥 <b>Resultados de la votación del público:</b><br>Opción con mayor tendencia analítica: <b>${pActual.correcta}</b> con un 68% de aprobación general en la sala.`;
            consolaComodin.style.display = 'block';
        }
    });
}
