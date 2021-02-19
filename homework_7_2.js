console.log('7.2')

const checkPropInObj = (str, obj) => obj.hasOwnProperty(str) ? true : false

const person2 = {
    city2: 'Almaty',
    city3: 'Almaty2',
}

console.log(checkPropInObj('city2', person2))