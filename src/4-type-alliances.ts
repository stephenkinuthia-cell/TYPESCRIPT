
const typeAlliances = () => {

    /* TypeScript has a concept of "type alliances" which allows you to create
     types that are based on other types. This can be useful for creating
   more complex types that are based on simpler types.
      */


   //1. Type Aliases: You can create a type alias using the type keyword.
   type person = {
    name: string;
    age: number;
    hobbies: string[];
   };
   type Employee = person & { //means Employee is a type that has all the properties of Person and also has its own properties
    employeeId: number;
    position: string;
   };

   const employee: Employee = {
    name: "Steve",
    age: 21,
    hobbies: ["reading", "coding"],
    employeeId: 12345,
    position: "data scientist"
   };


   console.log("--TypeScript Type Alliences--");
   console.log(`Employee Details: ${JSON.stringify(employee)}`);
   // or
   console.log(`Employee Details; ${employee.name} is ${employee.age} years and enjoys ${employee.hobbies.join(", ")}. Their employee ID ${employee.employeeId} and their position is ${employee.position}.`);
   




}

export default typeAlliances;