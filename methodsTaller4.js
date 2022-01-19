function LlenarPaices() {
    for (let i = 0; i <= 10; i++) {
        Colombia.push({
            Nombre: nombreRandom(),
            salario: salariosColombia[Math.floor(Math.random() * (35 - 0))]
        })
        Mexico.push({
            Nombre: nombreRandom(),
            salario: salariosMexico[Math.floor(Math.random() * (55 - 0))]
        })
        Argentina.push({
            Nombre: nombreRandom(),
            salario: salariosArgentina[Math.floor(Math.random() * (155 - 0))]
        })
    };
    for (persona of Mexico) {
        crearParrafos(`Nombre: ${persona.Nombre}`, "personasMexico")
        crearParrafos(`Salario: $${persona.salario}`, "personasMexico")
    }
    for (persona of Colombia) {
        crearParrafos(`Nombre: ${persona.Nombre}`, "personasColombia")
        crearParrafos(`Salario: $${persona.salario}`, "personasColombia")
    }
    for (persona of Argentina) {
        crearParrafos(`Nombre: ${persona.Nombre}`, "personasArgentina")
        crearParrafos(`Salario: $${persona.salario}`, "personasArgentina")
    }
    CalcularPromedioPaises()
    CalcularMedianaPaises()
    CalcularModaPaises()
}
function nombreRandom() {
    let nombre = `${Nombres[Math.floor(Math.random() * (99 - 0))]} ${Apellidos[Math.floor(Math.random() * (99 - 0))]} ${Apellidos[Math.floor(Math.random() * (99 - 0))]}`
    return nombre;
}
function crearParrafos(persona, divId) {
    let p = document.createElement("p");
    let pTexto = document.createTextNode(persona);
    p.appendChild(pTexto);
    document.getElementById(divId).appendChild(p)
}
function CalcularPromedioPaises() {
    let promedioMexico = 0;
    let promedioColombia = 0;
    let promedioArgentina = 0;
    for (persona of Mexico) {
        promedioMexico += persona.salario
    }
    for (persona of Colombia) {
        promedioColombia += persona.salario
    }
    for (persona of Argentina) {
        promedioArgentina += persona.salario
    }
    promedioMexico = promedioMexico / Mexico.length
    promedioArgentina = promedioArgentina / Argentina.length
    promedioColombia = promedioColombia / Colombia.length

    let promedioMexicoInput = document.getElementById("promedioMexico")
    promedioMexicoInput.value = promedioMexico
    let promedioArgentinaInput = document.getElementById("promedioArgentina")
    promedioArgentinaInput.value = promedioArgentina
    let promedioColombiaInput = document.getElementById("promedioColombia")
    promedioColombiaInput.value = promedioColombia
}
function CalcularMedianaPaises() {
    let medianaMexico = []
    let medianaColombia = []
    let medianaArgentina = []

    let inputMedianaMexico = document.getElementById("medianaMexico");
    let inputMedianaArgentina = document.getElementById("medianaArgentina");
    let inputMedianaColombia = document.getElementById("medianaColombia");

    let arrayOrdenadoMexico = Mexico.map((persona) => { return persona.salario })
    arrayOrdenadoMexico = arrayOrdenadoMexico.sort(function (a, b) {
        return a - b;
    })
    let arrayOrdenadoColombia = Colombia.map((persona) => { return persona.salario })
    arrayOrdenadoColombia = arrayOrdenadoColombia.sort(function (a, b) {
        return a - b;
    })
    let arrayOrdenadoArgentina = Argentina.map((persona) => { return persona.salario })
    arrayOrdenadoArgentina = arrayOrdenadoArgentina.sort(function (a, b) {
        return a - b;
    })

    if (arrayOrdenadoMexico.length % 2 == 0) {
        medianaMexico.push(arrayOrdenadoMexico[arrayOrdenadoMexico.length / 2])
        medianaMexico.push(arrayOrdenadoMexico[arrayOrdenadoMexico.length / 2 - 1])
        console.log(arrayOrdenadoMexico.length / 2)
    } else {
        medianaMexico.push(arrayOrdenadoMexico[Math.trunc(arrayOrdenadoMexico.length / 2)])
    }
    inputMedianaMexico.value = medianaMexico

    if (arrayOrdenadoColombia.length % 2 == 0) {
        medianaColombia.push(arrayOrdenadoColombia[arrayOrdenadoColombia.length / 2])
        medianaColombia.push(arrayOrdenadoColombia[arrayOrdenadoColombia.length / 2 - 1])
        console.log(arrayOrdenadoColombia.length / 2)
    } else {
        medianaColombia.push(arrayOrdenadoColombia[Math.trunc(arrayOrdenadoColombia.length / 2)])
    }
    inputMedianaColombia.value = medianaColombia

    if (arrayOrdenadoArgentina.length % 2 == 0) {
        medianaArgentina.push(arrayOrdenadoArgentina[arrayOrdenadoArgentina.length / 2])
        medianaArgentina.push(arrayOrdenadoArgentina[arrayOrdenadoArgentina.length / 2 - 1])
        console.log(arrayOrdenadoArgentina.length / 2)
    } else {
        medianaArgentina.push(arrayOrdenadoArgentina[Math.trunc(arrayOrdenadoArgentina.length / 2)])
    }
    inputMedianaArgentina.value = medianaArgentina
}
function CalcularModaPaises() {
    let inputModaMexico = document.getElementById("modaMexico")
    let inputModaArgentina = document.getElementById("modaArgentina")
    let inputModaColombia = document.getElementById("modaColombia")

    let arrayOrdenadoMexico = Mexico.map((persona) => { return persona.salario })
    arrayOrdenadoMexico = arrayOrdenadoMexico.sort(function (a, b) {
        return a - b;
    })
    let arrayOrdenadoColombia = Colombia.map((persona) => { return persona.salario })
    arrayOrdenadoColombia = arrayOrdenadoColombia.sort(function (a, b) {
        return a - b;
    })
    let arrayOrdenadoArgentina = Argentina.map((persona) => { return persona.salario })
    arrayOrdenadoArgentina = arrayOrdenadoArgentina.sort(function (a, b) {
        return a - b;
    })

    let repetidosMexico = {}
    let repetidosArgentina = {}
    let repetidosColombia = {}

    arrayOrdenadoMexico.map(el => {
        if (repetidosMexico[el]) {
            repetidosMexico[el] += 1
        } else {
            repetidosMexico[el] = 1
        }
    })
    arrayOrdenadoArgentina.map(el => {
        if (repetidosArgentina[el]) {
            repetidosArgentina[el] += 1
        } else {
            repetidosArgentina[el] = 1
        }
    })
    arrayOrdenadoColombia.map(el => {
        if (repetidosColombia[el]) {
            repetidosColombia[el] += 1
        } else {
            repetidosColombia[el] = 1
        }
    })

    let arrayModaMexico = Object.entries(repetidosMexico)
    arrayModaMexico = arrayModaMexico.sort(function (a, b) {
        return b[1] - a[1];
    })
    let arrayModaArgenina = Object.entries(repetidosArgentina)
    arrayModaArgenina = arrayModaArgenina.sort(function (a, b) {
        return b[1] - a[1];
    })
    let arrayModaColombia = Object.entries(repetidosColombia)
    arrayModaColombia = arrayModaColombia.sort(function (a, b) {
        return b[1] - a[1];
    })

    inputModaMexico.value = arrayModaMexico[0][0]
    inputModaArgentina.value = arrayModaArgenina[0][0]
    inputModaColombia.value = arrayModaColombia[0][0]

}