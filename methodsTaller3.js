const arrayGeneral = []

function updateArray() {
    arrayParagraph = document.getElementById("array");
    arrayStyle = "["
    for (number of arrayGeneral) {
        arrayStyle = arrayStyle + number + ",";
    }
    arrayStyle = arrayStyle.slice(0, -1)
    arrayStyle = arrayStyle + "]"
    arrayParagraph.value = arrayStyle;
}
function promedio() {
    let promedio = 0;
    for (number of arrayGeneral) {
        promedio = promedio + Number(number)
    }
    promedio = promedio / arrayGeneral.length
    let promedioInput = document.getElementById("promedio")
    promedioInput.value = promedio
}
function mediana() {
    let mediana = []
    let inputMediana = document.getElementById("mediana");
    arrayOrdenado = arrayGeneral.sort(function (a, b) {
        return a - b;
    })
    if (arrayOrdenado.length % 2 == 0) {
        mediana.push(arrayOrdenado[arrayOrdenado.length / 2])
        mediana.push(arrayOrdenado[arrayOrdenado.length / 2 - 1])
        console.log(arrayOrdenado.length / 2)
    } else {
        mediana.push(arrayOrdenado[Math.trunc(arrayOrdenado.length / 2)])
    }
    inputMediana.value = mediana
}
function moda() {
    inputModa = document.getElementById("moda")
    let arrayOrdenado = arrayGeneral.sort(function (a, b) {
        return a - b;
    })
    let repetidos = {}
    arrayOrdenado.map(el => {
        if (repetidos[el]) {
            repetidos[el] += 1
        } else {
            repetidos[el] = 1
        }
    })
    let arrayModa = Object.entries(repetidos)
    arrayModa = arrayModa.sort(function (a, b) {
        return b[1] - a[1];
    })
    inputModa.value = arrayModa[0][0]

}
function insertNumber() {
    let number = document.getElementById("insertNum");
    arrayGeneral.push(number.value)
    number.value = ""
    updateArray()
    promedio()
    mediana()
    moda()
}


