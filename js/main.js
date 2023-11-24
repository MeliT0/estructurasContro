
function esNumero(nombreCampo, valor) {
    let result = !isNaN(valor) && !isNaN(parseFloat(valor));
    if (!result) {
        alert(nombreCampo + " debe ser numerico")
    }
    return result
}
function soloLetras(nombreCampo, cadena) {
    let result = /^[a-zA-Z]+$/.test(cadena);
    if (!result) {
        alert(nombreCampo + " debe ser letras")
    }
    return result
}

function validarCategoria(nombreCampo, categoria) {
    const letrasPermitidas = ['A', 'B', 'C', 'D'];
    let result = letrasPermitidas.includes(categoria);
    if (!result) {
        alert(nombreCampo + " debe ser A, B, C, D")
    }
    return result
}

function esNumeroEntero(nombreCampo, valor) {
    let resultEsEntero = Number.isInteger(Number(valor))
    if (!resultEsEntero) {
        alert(nombreCampo + " No corresponde a un numero entero")
    }
    return resultEsEntero
}


function verificarEdad() {
    let edad = prompt("Ingrese su edad:");
    if (esNumero("edad", edad)) {
        let mensaje = (edad >= 18) ? "Eres mayor de edad" : "Eres menor de edad";
        console.log(mensaje);
        alert(mensaje)
    }

}

function calculoNotaFinal() {
    let name = prompt("Ingrese su Nombre:");
    if (soloLetras("nombre", name)) {
        let carnet = prompt("Ingrese su carnet:");
        let notaExamen = prompt("Ingrese la nota de examen:");
        let notaTarea = prompt("Ingrese la nota de la tarea:");
        let notaAsistencia = prompt("Ingrese la nota de asistencia:");
        let notaInvestigacion = prompt("Ingrese la nota de investigación:");

        if (esNumero("carnet", carnet) && esNumero("nota examen", notaExamen) && esNumero("nota tarea", notaTarea) && esNumero("nota asistencia", notaAsistencia) && esNumero("nota investigacion", notaInvestigacion)) {
            let notaFinal = (notaExamen * 0.2) + (notaTarea * 0.4) + (notaAsistencia * 0.1) + (notaInvestigacion * 0.3)

            let mensaje = "La nota final del alumno " + name + " con carnet " + carnet + " es: " + notaFinal
            console.log(mensaje);
            alert(mensaje)
        }

    }

}

function calculoAumentoTrabajador() {
    let name = prompt("Ingrese su Nombre:");
    let salario = prompt("Ingrese el salario:");
    let categoria = prompt("Ingrese la categoria:");
    if (soloLetras("nombre", name) && esNumero("salario", salario)) {
        let porcentajeAumentoSalarial
        switch (categoria) {
            case 'A':
                porcentajeAumentoSalarial = 1.15
                break;
            case 'B':
                porcentajeAumentoSalarial = 1.3
                break;
            case 'C':
                porcentajeAumentoSalarial = 1.1
                break;
            case 'D':
                porcentajeAumentoSalarial = 1.2
                break;
            default:

                alert("La letra no es A, B, C ni D.")
                console.log('La letra no es A, B, C ni D.');
        }
        let totalAumentoSalarial = salario * porcentajeAumentoSalarial
        let mensaje = " El aumento salarial para el empleado " + name + " de categoria " + categoria + " corresponde a: " + totalAumentoSalarial
        console.log(mensaje)
        alert(mensaje)
    }

}

function calculoNumeroMayor() {
    let primerNumero = prompt("Ingrese primer numero")
    let segundoNumero = prompt("Ingrese segundo numero")
    if (esNumero("primerNumero", primerNumero) && esNumero("segundoNumero", segundoNumero)) {

        if (primerNumero == segundoNumero) {
            alert("son iguales")
        } else if (primerNumero > segundoNumero) {
            alert("primer numero es mayor")
        } else {
            alert("segundo numero es mayor")
        }
    }

}


function calculoDescuentoCoches() {
    let modeloCoche = prompt("Ingrese el modelo de FORD")
    modeloCoche = modeloCoche.toUpperCase()
    let descuento = "N/A"
    switch (modeloCoche) {
        case 'FIESTA':
            descuento = "5%"
            break;
        case 'FOCUS':
            descuento = "10%"
            break;
        case 'ESCAPE':
            descuento = "20%"
            break;
        default:
            console.log("No aplica descuento");
    }
    let mensaje = "El coche seleccionado es: " + modeloCoche + " con descuento del: " + descuento

    console.log(mensaje)
    alert(mensaje)
}

function calculoDescuentoViajes() {

    const ciudadPalma = "PALMA"
    const ciudadLaCostaDelSol = "LA COSTA DEL SOL"
    const ciudadPanchimalco = "PANCHIMALCO"
    const ciudadPuertoElTriunfo = "PUERTO EL TRIUNFO"

    let ciudadOrigen = prompt("Ingrese ciudad de origen")
    ciudadOrigen = ciudadOrigen.toUpperCase()

    let ciudadDestino = prompt("Ingrese ciudad de destino")
    ciudadDestino = ciudadDestino.toUpperCase()

    let descuento = "N/A"
    if (ciudadOrigen == ciudadPalma) {

        switch (ciudadDestino) {
            case ciudadLaCostaDelSol:
                descuento = "5%"
                break;

            case ciudadPanchimalco:
                descuento = "10%"
                break;


            case ciudadPuertoElTriunfo:
                descuento = "15%"
                break;


            default:
                alert("No aplica descuento")
                break;
        }
        alert("El descuento sera de: " + descuento)

    } else {
        alert("No aplica descuento")
    }

}

function cargaValores() {
    let cantidadValoresNegativos = 0
    let cantidadValoresPositivos = 0
    let cantidadValoresMultiplos15 = 0
    let valorAcumuladoPares = 0

    for (let index = 0; index < 10; index++) {
        let numeroEntero = prompt("Ingrese el numero entero " + (index + 1))

        if (esNumeroEntero("numero" + (index + 1), numeroEntero)) {
            if (numeroEntero < 0) {
                cantidadValoresNegativos++
            }
            if (numeroEntero > 0) {
                cantidadValoresPositivos++
            }
            if (numeroEntero % 15 == 0) {
                cantidadValoresMultiplos15++
            }
            if (numeroEntero % 2 == 0) {
                valorAcumuladoPares = Number(valorAcumuladoPares) + Number(numeroEntero)

            }

        } else {
            break;
        }
    }
    alert("la cantidad de numeros Negativos son: " + cantidadValoresNegativos)
    alert("la cantidad de numeros Positivos son: " + cantidadValoresPositivos)
    alert("la cantidad de multiplos de 15 son: " + cantidadValoresMultiplos15)
    alert("El valor acumulado de los numeros pares son: " + valorAcumuladoPares)

}


function tablaMultiplicar() {
    let numero = prompt("Ingresar un numero")
    if (esNumero("Numero", numero)) {
        for (let index = 0; index < 10; index++) {
            let result = numero * (index + 1)
            alert(numero + " X " + (index + 1) + " es igual a: " + result)
        }
    }

}


function convertirTemperatura() {
    let temperaturaCelsius = document.getElementById("celsiusInput").value;
    if (isNaN(temperaturaCelsius)) {
        alert("Por favor, ingrese un número válido para la temperatura.");
        return;
    } let temperaturaFahrenheit = (temperaturaCelsius * 9 / 5) + 32;
    let resultado = "";
    if (temperaturaFahrenheit >= 14 && temperaturaFahrenheit < 32) {
        resultado = "Temperatura baja";
    } else if (temperaturaFahrenheit >= 32 && temperaturaFahrenheit < 68) {
        resultado = "Temperatura adecuada";
    } else if (temperaturaFahrenheit >= 68 && temperaturaFahrenheit < 96) {
        resultado = "Temperatura alta";
    } else {
        resultado = "Temperatura desconocida";
    }

    document.getElementById("resultado").innerText = resultado;
}

function calcularPromedio(turno) {
    let edades = Array.from({ length: 11 }, (_, i) => parseInt(document.getElementById(turno + (i + 1)).value)).filter(e => !isNaN(e));
    let promedio = edades.length > 0 ? edades.reduce((a, b) => a + b) / edades.length : 0;
    document.getElementById("promedio" + turno.charAt(0).toUpperCase() + turno.slice(1)).innerText = `Promedio: ${promedio.toFixed(2)}`;
    actualizarMensajeMayorPromedio();
}

function actualizarMensajeMayorPromedio() {
    let promedios = ['manana', 'tarde', 'noche'].map(turno => parseFloat(document.getElementById("promedio" + turno.charAt(0).toUpperCase() + turno.slice(1)).innerText.split(":")[1]));
    let maxPromedio = Math.max(...promedios);
    let mensaje = maxPromedio > 0 ? `El turno con el mayor promedio de edades es: ${['Mañana', 'Tarde', 'Noche'][promedios.indexOf(maxPromedio)]}` : "No se ingresaron edades.";
    document.getElementById("mensajeMayorPromedio").innerText = mensaje;
}