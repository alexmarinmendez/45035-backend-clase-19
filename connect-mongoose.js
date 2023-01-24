import mongoose from 'mongoose'

const estudiantes = [
    { nombre: 'Pedro', apellido: 'Mei', edad: 21, dni: '12213213123', curso: 'NodeJs', nota: 7 },
    { nombre: 'Ana', apellido: 'Gonzales', edad: 21, dni: '534525235', curso: 'NodeJs', nota: 9 },
    { name: 'Alex' },
    { nombre: 'José', apellido: 'Picos', edad: 21, dni: '535435', curso: 'NodeJs', nota: 6 },
    { nombre: 'Lucas', apellido: 'Blanco', edad: 21, dni: '865756756', curso: 'NodeJs', nota: 10 },
    { nombre: 'María', apellido: 'García', edad: 21, dni: '324353453', curso: 'NodeJs', nota: 6 },
]

const estudiantesSchema = new mongoose.Schema({
    nombre: { type: String, required: true },
    apellido: { type: String, required: true },
    edad: { type: Number, required: true },
    dni: { type: String, required: true, unique: true },
    curso: { type: String, required: true },
    nota: { type: Number, required: true },
})

const EstudiantesDAO = mongoose.model('estudiantes', estudiantesSchema)

await mongoose.connect('mongodb://localhost:27017/colegio', {
    serverSelectionTimeoutMS: 5000
})

console.log('Base de datos conectada')

// for (const estudiante of estudiantes) {
//     await EstudiantesDAO.create(estudiante)
// }

// try {
//     for (const estudiante of estudiantes) {
//         await EstudiantesDAO.create(estudiante)
//     }
// } catch(error) {
//     console.log(error)
// }

// await EstudiantesDAO.insertMany(estudiantes)

for (const estudiante of estudiantes) {
    try {
        await EstudiantesDAO.create(estudiante)
    } catch(err) {
        console.log('Hubo un error')
    }
}


