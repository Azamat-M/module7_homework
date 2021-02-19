console.log('7.1')

const consoleKeysOfObj = (obj) => {
    for(let key in obj) {
        if (obj.hasOwnProperty(key)) {
            console.log(`${key} - ${obj[key]}`)
        }
        
    }
}

const person = {
    city: 'Almaty',
}
const teacher = Object.create(person)

teacher.subject = 'Math'
teacher.ownCity = 'Moscow'

consoleKeysOfObj(teacher)