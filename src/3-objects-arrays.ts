



const objectsArraysTuples = () => {

    //1. objects: In TS, you can define the type of an object using an interface or a type alias.
    const person: { name: string, age: number, hobbies: string[], role: string[]} = {
        name: "Steve",
        age: 21,
        hobbies: ["reading", "coding"],
        role: ["Trainee", "software developer"]
    }
    console.log("--TypeScript Objects--");
    console.log(`Person Details: ${JSON.stringify(person)}`);
    //or
    console.log(`Person Details: ${person.name} is ${person.age} years old and enjoying ${person.hobbies.join(", ")}. Their roles are ${person.role.join(", ")}.`);

    const Person1: { name: string; age: number; hobbies: string[]; role: string[] } = {
        name: "ant",
        age: 0.25,
        hobbies: ["working", "eating"],
        role: ["trainee", "DS", "Statistics"]
    };
    // log info
    console.log(`Person Details: ${Person1.name} is ${Person1.age} years old and enjoys ${Person1.hobbies.join(", ")} and his roles are ${Person1.role.join(", ")}`);


    // car object with properties and methods
    const car: { //this is an interface
        make: string;
        model: string;
        year: number;
        start: () => void;
        stop: () => void;
    } = {
        make: "Toyota",
        model: "Camry",
        year: 2020,
        start: function () {
            console.log("car started");
        },
        stop: function(){
            console.log("car stopped");
        }
    };

    // Accessing properties and method of the car object 
    console.log(`car details: ${car.make} ${car.model} (${car.year})`);
    car.start();
    car.stop();

    const Car = {
        make: "Audi",
        model: "AMG",
        year: "2024",
        // method
        start: function () {
            console.log("Car started");
        },
        stop: function() {
            console .log("Car Stopped")
        }

    }
    console.log(`\n Car detail: ${Car.make}, ${Car.model}, ${Car.year}`);


    //2 Arrays: In TypeScript, you can define the type of an array using the Array<T> syntax or the T[] syntax.
    let colors: string[] = ["red", "green", "blue"];
    let numbers: Array<number> = [1,2,3,4,5];

    console.log("--TypeScript Arrays--");
    console.log(`color: ${colors.join(", ")}`);
    console.log(`numbers: ${numbers.join(", ")}`);

    //Array methods
    colors.push("yellow")
    console.log(`\nupdated colors: ${colors.join(", ")}`);
    console.log(`\nFirst color: ${colors[0]}`);
    console.log(`\nsecond color: ${colors[1]}`)
    console.log(`\nLast Color: ${colors[colors.length - 1]}`);
    console.log(`\nNumber of Colors: ${colors.length}`);

    // shift() removes the first element from an array and returns that removed element. This method changes the length of the array.
    const firstColor = colors.shift();
    console.log(`First Color Removed: ${firstColor}`);
    console.log(`Updated Colors after shift: ${colors.join(", ")}`);


    // unshift() adds one or more elements to the beginning of an array and returns the new length of the array.
    const newLength = colors.unshift("purple");
    console.log(`New Length after unshift: ${newLength}`);
    console.log(`Updated Colors after unshift: ${colors.join(", ")}`);

    const removeLastColor = colors.pop();
    console.log(`\nColor removed: ${removeLastColor}`);

    // push, length, pop, shift, unshift
    //TODO: splice
    




    //3.  Tuples: In TypeScript, you can define a tuple using the [type1, type2, ...] syntax.
    let personx: [string, number] = ["John", 30]; // Tuple with string and number

    console.log("--TypeScript Tuples--");
    console.log(`Person Tuple: ${personx[0]} is ${personx[1]} years old`);
    // Accessing tuple elements
    console.log(`Name: ${personx[0]}`);
    console.log(`Age: ${personx[1]}`);


    const RegistratioInfo: [string, number, string, boolean, string[]] = ["stephen kinuthia", 22, "pass123", true, ["reading", "coding"]]
    console.log(`\nDetails: ${RegistratioInfo[0]}, is ${RegistratioInfo[1]} years old`);


}


export default objectsArraysTuples;