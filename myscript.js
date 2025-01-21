const name = "Daniel"
const surname = "Salazar"
console.log(`Mi nombre es: ${name} ${surname}`)

alert(`Mi nombre es: ${name} ${surname}`)

/* document.getElementById("mensaje").innerHTML = `Mi nombre es: ${name} ${surname}` */



function sumar () {
    let a = Number(document.getElementById("num1").value)
    let b = Number(document.getElementById("num2").value)
    let c = a + b
    document.getElementById("mensaje").innerHTML = `La suma es: ${c}`
}