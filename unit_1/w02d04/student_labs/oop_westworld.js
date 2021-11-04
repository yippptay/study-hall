const host = {
    name: 'Sharon',
    occupation: 'Owner of Westworld Park',
    saySpecs() {
        console.log(`My name is ${host.name}. My occupation is ${host.occupation}`)
    }
};
host.saySpecs();

class BasicHost {
    constructor(name, occupation) {
        this.name = name;
        this.occupation = occupation
    }
}
const host1 = new BasicHost('Shelley', 'Speech Pathologist');
console.log(host1);

const host2 = new BasicHost('Ashley', 'PA');
console.log(host2);

BasicHost.prototype.saySpecs = function () {console.log(`My name is ${this.name}. My occupation is ${this.occupation}`)};

const host3 = new BasicHost('Gus', 'Pastor');
const host4 = new BasicHost('Esther', 'Lawyer');
console.log(host3);
console.log(host4);
host3.saySpecs();

//////////////////////
// Populate the world with hosts
//////////////////////

const names = ["Laila", "Jack", "Harley", "Hertha", "Darren", "Jolene", 
"Loura", "Lona", "Davida", "Reena", "Leland", "Ta", "Jen", 
"Linn", "Roslyn", "Margorie", "Rafaela", "Romona", "Shanel", "Stan"];

const occupations = ["Clerical assistant", "Leaflet distributor", "Landowner",
"Special constable", "Anaesthetist", "Park-keeper", "Butler",
"Choreographer", "Blacksmith", "Chef", "Legal secretary",
"Song writer", "Librarian", "Landscape gardener"]

let hostArray = [];

for (let i = 1; i < 100; i++) {
    hostArray.push(new BasicHost(names[Math.floor(Math.random()*names.length)], occupations[Math.floor(Math.random()*occupations.length)]));
}
console.log(hostArray);
hostArray[55].saySpecs();
