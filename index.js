const app = new Vue({
    el: '#app',
    data: {
        titulo: 'Tabla de usuarios',
        users: [
            {
                "nombre": "José",
                "apellido": "Pérez",
                "run": "123456-2",
                "nacimiento": "12-04-67",
                "edad": 52
            },
            {
                "nombre": "María",
                "apellido": "Rodríguez",
                "run": "654321-1",
                "nacimiento": "30-11-90",
                "edad": 29
            },
            {
                "nombre": "Manuel",
                "apellido": "Patiño",
                "run": "14223456-6",
                "nacimiento": "02-12-59",
                "edad": 60
            }
        ]
    }
});