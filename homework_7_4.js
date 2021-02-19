console.log('7.4')

function ElectroItem(name) {
    this.name = name,
    this.isTurnOn = false

}
ElectroItem.prototype.turnOn = function() {
    this.isTurnOn = true
}

function SmallElectroItem(name, weight) {
    this.name = name,
    this.weight = weight,
    this.power = 0
}
SmallElectroItem.prototype = new ElectroItem()
SmallElectroItem.prototype.countPower = function(contribute) {
    this.power = contribute * 100

    console.log(`Power is ${this.power} W`) 
}

const lamp = new SmallElectroItem('lamp', '500g')
const computer = new SmallElectroItem('computer', '2kg')

lamp.turnOn()
computer.countPower(500)

console.log(lamp)
console.log(computer)