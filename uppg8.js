

function uppg8(){
    const persons = [
        {name: 'Anastasiia', age:18},
        {name: 'Gustaf', age:24},
        {name: 'Alex', age:33},
        {name: 'Ingrid', age:32},
        {name: 'Anne', age:29},
    ]
    const over30Years = (array) => {
        array.map((person) => {
            if (person.age > 30) {
                console.log(person.name, ' is ', person.age, ' years old.')
            }
        })
    }

    over30Years(persons)

// skapa en array med fem person obkjet
// varje person objekt ska ha två properties, name och age

// skapa en fuktion som tar in en array som argument
// skapa ett konditionsvillkor som gör att det bara är namnet på personerna som är
//  över 30 år som skrivs ut i konsolen

// anropa funktionen och skicka med arrayen som argument


}

module.exports = { uppg8 };