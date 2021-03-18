function Person(name) {
    this.name = name;
}

Person.prototype.describe = function () {
    return 'Person called ' + this.name;
};

console.log((new Person('Can')).describe());

class Developer {

    constructor(name) {
        this.name = name; 
    }

    describe () {
        return 'Developer called ' + this.name;
    }
}

console.log((new Developer('Can')).describe());