const car={
name:'car',
color:'black',
getDetails(brand, seats){
    console.log(`This is a ${this.color} ${this.name} of brand ${brand} company. It has ${seats} seats`);
},
};
car.getDetails("Audi", 4);

//creating one more object

const bus={
    name:"bus",
    color:"blue",
};
//Call method
car.getDetails.call(bus,'Star',40);
//apply
car.getDetails.apply(bus, ['Gold', 65]);
//bind
const veh1= car.getDetails.bind(bus);

veh1('silver', 43);
