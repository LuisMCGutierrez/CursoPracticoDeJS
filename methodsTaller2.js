const cupones = [
    { value: 10, des: "cupon chiquito" },
    { value: 20, des: "cupopn chico" },
    { value: 30, des: "cupon descente" },
    { value: 40, des: "cupon bueno" },
    { value: 50, des: "cupon genial" },
    { value: 60, des: "cupon increible" }
]

function myOnLoad() {
    cargarCupones()
}

function precioConDescuento() {
    let precio = document.getElementById("precio").value;
    let descuento = document.getElementById("cupones").value;
    descuento = cupones.find(function (des) { return des.des == descuento }).value
    let precioFinal = precio * (100 - descuento) / 100;
    document.getElementById("precioFinal").innerText = `el precio final es de ${precioFinal}`
}
function cargarCupones() {
    var opcionCupones = document.getElementById("cupones");

    for (cupon in cupones) {
        let option = document.createElement("option");
        option.text = cupones[cupon].des;
        opcionCupones.add(option);
    }
}