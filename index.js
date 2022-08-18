

// Crie uma função que obtenha o valor da chave de acordo com o seu índice no objeto. Por exemplo:

const lesson1 = {
    materia: 'Matemática',
    numeroEstudantes: 20,
    professor: 'Maria Clara',
    turno: 'manhã',
};

const getValueByNumber = (obj, number) => Object.values(obj)[number]
console.log(getValueByNumber(lesson1, 0));

// const lesson2 = {
//     materia: 'História',
//     numeroEstudantes: 20,
//     professor: 'Carlos',
// };
//
// const lesson3 = {
//     materia: 'Matemática',
//     numeroEstudantes: 10,
//     professor: 'Maria Clara',
//     turno: 'noite',
// };

// const allLessons = Object.assign({}, {lesson1, lesson2, lesson3})
//
// function totalStudents(obj) {
//     let total = 0;
//     let array = Object.keys(obj)
//     for(let i in array){
//         const currKey = array[i]
//         total += obj[currKey]['numeroEstudantes']
//     }
//     return total
// }
//
// console.log(totalStudents(allLessons))

// function newAttribute (obj, key, value) {
//     return obj[key] = value
// }
//
// newAttribute(lesson2, 'turno', 'noite')
// console.log(lesson2)
//
// function listKeys(obj) {
//     return Object.keys(obj)
// }
// console.log(listKeys(lesson3))
//
// function objSize(obj) {
//     return Object.keys(obj).length
// }
// console.log(objSize(lesson3))
//
// function listValues(obj) {
//     return Object.values(obj)
// }
//
// console.log(listValues(lesson3))




