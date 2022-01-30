class ElectricalDevices{
  constructor(name){
      this.nameProduct = name;
      this.power = 220;
  }  
  switchingOn() {
    console.log(this.nameProduct + ' включен в розетку.')
  }
  switchingOff() {
    console.log(this.nameProduct + ' выключен из розетки.')
  }
  getPowerProduct() {
    let result = this.amper * this.power; 
    console.log('Мощность которую имеет ' +  this.nameProduct + ' равна ' + result + ' Вт.')
  }
  hasBacklightProp() {
    console.log(this.nameProduct + ' имеет встроенную функцию ' + this.backLight + ' .')
  }
  isCompactProduct(){
    console.log(this.nameProduct + ' имеет компактные размеры ' + this.size + ' .')
  } 
}

class Kettle extends ElectricalDevices{
  constructor(name, backLight, num){
    super(name);
    this.nameProduct = name;
    this.backLight = backLight;
    this.amper = num;
  }
}
  
class VacuumCleaner extends ElectricalDevices{
  constructor(name, size, num){
    super(name);
    this.nameProduct = name;
    this.size = size;
    this.amper = num;
  }
}

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