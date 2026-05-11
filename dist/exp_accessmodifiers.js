import { faker } from "@faker-js/faker";
class AccessModifiers {
    constructor() {
        this.name = faker.person.fullName();
        this.salary = 100000;
        this.city = 'New York';
    }
    tiversahni() {
        console.log("Name: " + this.name);
        console.log("Salary: " + this.salary);
        console.log("City: " + this.city);
    }
}
let accessmodifiers = new AccessModifiers();
accessmodifiers.tiversahni();
