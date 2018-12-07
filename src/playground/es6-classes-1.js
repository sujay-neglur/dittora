
class Person {
    constructor(name = 'Anonymous', age = 0){
        this.name = name;
        this.age = age;
    }

    getGreeting() {
        return `Hi I am ${this.name}`;
    }

    getDescription() {
        return `${this.name} is ${this.age} year(s) old.`;
    }
}

class Student extends Person{
    constructor(name, age, major){
        super(name, age)
        this.major = major;
    }

    hasMajor(){
        return !!this.major;
    }

    getDescription() {
        let description = super.getDescription();
        console.log(this.hasMajor());
        if(this.hasMajor()){

            return `${description} Their is a major of ${this.major}`;
        }
        return description;
    }
}

class Traverler extends Person {
    constructor(name, age, homeLocation){
        super(name, age)
        this.homeLocation = homeLocation;
    }

    hasHomeLocation() {
        return !!this.homeLocation;
    }

    getDescription() {
        let description = super.getDescription();
        if(this.hasHomeLocation()){
            return `${description} Lives in ${this.homeLocation}`;
        }
        return description;
    }
}

const me = new Traverler('Suyash', 23, 'Montreal');
//console.log(me.getGreeting());
console.log(me.getDescription());

const other = new Traverler();
//console.log(other.getGreeting());
console.log(other.getDescription());