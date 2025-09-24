import typeAlliances from "./4-type-alliances";

const tsLoops = () => {
    console.log("---- loops----");

    //For loop
    /**
     * initilizer i=0
     * condition - print hello world 5 times
     * i++
     * 
     * Doing
     * i=0
     * "hello world"
     * i=1
     * "hello world"
     * .
     * .
     * i= 5
     * break
     */

    for( let i = 0; i<=5; i++) {
        console.log("hello world") 
        }

    for (let i = 0; i < 5; i++) {
        console.log(`\niteration: ${i}`);
        
    }

    console.log("\nFor...of Loop:");
    const fruits:string[] = ["apple", "banana", "cherry"];
    let Iteration = 1
    for (const fruit of fruits){
        Iteration ++
        console.log(Iteration);

        console.log(fruit);
    }

    //for in loops
    console.log("\nfor...in loops:");
    const person ={
        name: "alice",
        age: 25,
        city: "nairobi"
    }
    for(const key in person){
        console.log(`${key}: ${person[key as keyof typeof person]}`);
    }

    //nested loops
    console.log("\nNested Loops:");
    for (let i: number = 1; i <= 3; i++) {
        for (let j: number = 1; j <= 2; j++) {
            console.log(`i: ${i}, j: ${j}`);
        }
    }
    
    

}


export default tsLoops;