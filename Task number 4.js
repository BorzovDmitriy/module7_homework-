function ElectricalDevices() {
  this.classProduct = "Electrical",
  this.power = 220
}
  
ElectricalDevices.prototype.switchingOn = function(name) {
    console.log(`${name} включен в розетку.`)
};  
ElectricalDevices.prototype.switchingOff = function(name) {
    console.log(`${name} выключен из розетки.`)
};
ElectricalDevices.prototype.getPowerProduct = function(name, amper) {
    let result = amper * this.power; 
    console.log(`Мощность которую имеет ${name} равна ${result} Вт.`)
};

function Kettle(name, backLight, num){
  this.nameProduct = name,
  this.backLight = backLight,
  this.amper = num,
  this.hasBacklightProp = function() {
  console.log(`${name} имеет встроенную функцию ${backLight}`)
}
}

function VacuumCleaner(name, size, num){
  this.nameProduct = name,
  this.size = size,
  this.amper = num,
  this.isCompactProduct = function(){
  console.log(`${name} имеет компактные размеры ${size}`)
}
}

Kettle.prototype = new ElectricalDevices();
VacuumCleaner.prototype = new ElectricalDevices();

let kettle = new Kettle('Чайник', 'подсветки', 4);
let vacuumCleaner = new VacuumCleaner('Пылесос', '20x30', 7);

kettle.switchingOn('Чайник');
kettle.switchingOff('Чайник');
kettle.getPowerProduct('Чайник', 4)
kettle.hasBacklightProp('Чайник', 'подсветки');

vacuumCleaner.switchingOn('Пылесос');
vacuumCleaner.switchingOff('Пылесос');
vacuumCleaner.getPowerProduct('Пылесос', 7);
vacuumCleaner.isCompactProduct('Пылесос', '20x30');