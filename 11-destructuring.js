let myArray = ["Daniel", "Salazar", 28];

let [nombre, apellido, edad, fechaDeNacimiento] = myArray

console.log(nombre, apellido, edad, fechaDeNacimiento);

let myArray2 = [1, 2, 3, 4, 5];

let [uno, dos, ...losDemas] = myArray2

let [tres, cuatro, cinco] = losDemas;

console.log(uno, dos, losDemas);

console.log(tres, cuatro, cinco);

[myArray[0], myArray[2]] = [myArray[2], myArray[0]];

console.log(myArray);

const myFunction = () => {
    return [9, 'abc'];
}

//let [a, b] = myFunction();

//console.log(a, b);

const o = {p: 42, q: true};

const {p, q} = o;

console.log(p, q);

const letras = {a: 3};

const {a, b = 2, c = 1} = letras;

console.log(a, b, c);

const user2 = {
    id: 30,
    displayName: 'Raz',
    fullName: {
        firstName: 'Mike',
        lastName: 'Laris'
    }
}

const {id, displayName, fullName} = user2

const {firstName, lastName} = fullName;

console.log(id, displayName, firstName, lastName);

const arr = [30, 40, 50];

const arr2 = [60, 70, 80];

const newArr = [...arr, ...arr2]

console.log(newArr);

let persona = {
    nombre: 'Daniel',
    apellido: 'Salazar',
    estadoCivil: "Soltero",
    tieneHijos: false
}

const newPerson = {
    ...persona,
    edad: 33,
    email: "daniel@mail.com"
}

console.log(persona);
console.log(newPerson);

const copyPersona = {
    ...persona
}

console.log(copyPersona);

const copyPersona2 = persona;

persona.nombre = "Alexander";

console.log(persona, copyPersona2);

let variable = 5;

console.log(variable || "falsy");
console.log(variable && "truthy");
console.log(variable ?? "coalicion");

let var1 = 5;
let var2 = 10;

let max = var1 > var2 && var1 || var2
console.log(max);

