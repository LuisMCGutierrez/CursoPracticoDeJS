

function perimetroRectangulo() {
    let base = document.getElementById("baseRectangulo").value;
    let altura = document.getElementById("alturaRectangulo").value;
    let perimetro = 2 * base + 2 * altura;
    alert(`el perimetro es igual a: ${perimetro}`)
}
function areaRectangulo() {
    let base = document.getElementById("baseRectangulo").value;
    let altura = document.getElementById("alturaRectangulo").value;
    let area = base * altura;
    alert(`el perimetro es igual a: ${area}`)
}
function perimetroCuadrado() {
    let lado = document.getElementById("ladoCuadrado").value;
    let perimetro = lado * 4;
    alert(`el perimetro es igual a: ${perimetro}`)
}
function areaCuadrado() {
    let lado = document.getElementById("ladoCuadrado").value;
    let area = lado * lado;
    alert(`el perimetro es igual a: ${area}`)
}
function perimetroTriangulo() {
    let lado1 = document.getElementById("ladoTriangulo1").value;
    let lado2 = document.getElementById("ladoTriangulo2").value;
    let lado3 = document.getElementById("ladoTriangulo3").value;
    let perimetro = Number(lado1) + Number(lado2) + Number(lado3);
    alert(`el perimetro es igual a: ${perimetro}`)
}
function areaTriangulo() {
    let base = document.getElementById("baseTriangulo").value;
    let altura = document.getElementById("alturaTriangulo").value;
    let area = (base * altura) / 2;
    alert(`el area es igual a: ${area}`)
}
function perimetroCirculo() {
    let diametro = document.getElementById("diametroCirculo").value;
    let perimetro = Math.PI * diametro;
    alert(`el perimetro es igual a: ${perimetro}`)
}
function areaCirculo() {
    let diametro = document.getElementById("diametroCirculo").value;
    let area = (diametro / 2) * (diametro / 2) * Math.PI;
    alert(`el area es igual a: ${area}`)
}
function validarTrianguloIsoceles() {
    let lado1 = document.getElementById("ladoTrianguloIs1").value;
    let lado2 = document.getElementById("ladoTrianguloIs2").value;
    let lado3 = document.getElementById("ladoTrianguloIs3").value;
    let ladoIgual;
    let ladoDesigual;
    let altura;
    if (lado1 == lado2) {
        ladoIgual = lado1;
        ladoDesigual = lado3;
        altura = this.alturaTrianguloIsoceles(ladoIgual, ladoDesigual);
        alert(`la altura es igual a ${altura}`)
    } else if (lado1 == lado3) {
        ladoIgual = lado1;
        ladoDesigual = lado2;
        altura = this.alturaTrianguloIsoceles(ladoIgual, ladoDesigual);
        alert(`la altura es igual a ${altura}`)
    } else if (lado2 == lado3) {
        ladoIgual = lado2;
        ladoDesigual = lado1;
        altura = this.alturaTrianguloIsoceles(ladoIgual, ladoDesigual);
        alert(`la altura es igual a ${altura}`)
    } else {
        alert("los lados no corresponden a un triangulo isoceles")
    }
}
function alturaTrianguloIsoceles(ladoIgual, ladoDesigual) {
    return Math.sqrt(ladoIgual * ladoIgual - ((ladoDesigual * ladoDesigual) / 4));
}