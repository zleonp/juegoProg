
function iniciarJuego() {
    // Preguntar si quiere Front-End o Back-End
    let area = prompt("¿Qué área te interesa? (Escribe 'Front-End' o 'Back-End')");

    if (area.toLowerCase() === "front-end") {
        // Si eligió Front-End, preguntamos por React o Vue
        let framework = prompt("¿Qué framework te gustaría aprender? (Escribe 'React' o 'Vue')");

        if (framework.toLowerCase() === "react") {
            alert("¡Genial! React es una librería muy popular para construir interfaces de usuario.");
        } else if (framework.toLowerCase() === "vue") {
            alert("¡Genial! Vue es un framework progresivo para construir interfaces de usuario.");
        } else {
            alert("Opción no válida. Elige entre React o Vue.");
            return; 
        }

    } else if (area.toLowerCase() === "back-end") {
        // Si eligió Back-End, preguntamos por C# o Java
        let lenguaje = prompt("¿Qué lenguaje de Back-End te gustaría aprender? (Escribe 'C#' o 'Java')");

        if (lenguaje.toLowerCase() === "c#") {
            alert("¡Genial! C# es un lenguaje poderoso para desarrollo de aplicaciones de Back-End.");
        } else if (lenguaje.toLowerCase() === "java") {
            alert("¡Genial! Java es un lenguaje de programación ampliamente utilizado en el desarrollo Back-End.");
        } else {
            alert("Opción no válida. Elige entre C# o Java.");
            return; 
        }
    } else {
        alert("Opción no válida. Elige entre Front-End o Back-End.");
        return; 
    }

    // Preguntar si quiere especializarse o ser Fullstack
    let especializacion = prompt("¿Te gustaría seguir especializándote en esta área o convertirte en Fullstack? (Escribe 'especializarse' o 'fullstack')");

    if (especializacion.toLowerCase() === "especializarse") {
        alert("¡Excelente! ¡A especializarse en " + area + "!");
    } else if (especializacion.toLowerCase() === "fullstack") {
        alert("¡Genial! Como Fullstack, podrás trabajar tanto en el Front-End como en el Back-End.");
    } else {
        alert("Opción no válida. Elige entre 'especializarse' o 'fullstack'.");
        return; 
    }

    // Preguntar por tecnologías adicionales
    let continuar = true;
    while (continuar) {
        let tecnologia = prompt("¿Hay alguna otra tecnología que te gustaría aprender?");
        if (tecnologia.toLowerCase() === "ok") {
            continuar = true;
        } else {
            alert("¡Genial! " + tecnologia + " es una tecnología muy interesante.");
            continuar = confirm("¿Hay alguna otra tecnología que te gustaría aprender?");
        }
    }
    alert("¡Gracias por jugar! ¡Te deseamos mucho éxito en tu aprendizaje!");
}