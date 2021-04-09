class Cars {
    constructor(name, model, year){
        this.name = name;
        this.model = model;
        this.year = year;
    }
    static addYears(x, y){console.log(x + y)}
}

class Electric extends Cars{
    constructor(name, model, year, engine, medium){
        super(name, model, year);
        this.engine = engine;
        this.medium = medium;
    }
}
const electric1 = new Electric('Tesla', 'sinotruck',2020, 'electric', 'space');
console.log(`${electric1.name} ${electric1.model} ${electric1.year} is a very convincing ${electric1.engine} ${electric1.medium} vehicle`);