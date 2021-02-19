console.log('7.5')

class ElectroItem2 {
    constructor(name) {
        this.name = name
        this.isTurnOn = false
    }
    turnOn() {
        this.isTurnOn = true
    }

}

class SmallElectroItem2 extends ElectroItem2 {
    constructor(name, weight) {
        super(name)
        this.name = name
        this.weight = weight
        this.power = 0
    }
    countPower(contribute) {
        this.power = contribute * 100
        console.log(`Power is ${this.power} W`) 
    }
}

const lamp2 = new SmallElectroItem2('lamp', '500g')
const computer2 = new SmallElectroItem2('computer', '2kg')

lamp2.turnOn()
computer2.countPower(500)

console.log(lamp2)
console.log(computer2)