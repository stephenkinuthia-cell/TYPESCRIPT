

const myInterface = () => {
    // interface: used to define the structure of an object
    interface Person{
        name: string;
        age: number;
        greet: () => void
    }
    interface Employee extends Person {
        employeeId: number,
        position: string
    }

    const Employee: Employee = {
        name: "steve",
        age: 22,
        employeeId: 123,
        position: "Trainee",
        greet() {
            console.log(`Hello my name is ${this.name}, and am a ${this.position}`);
        },
    }
    console.log("--TypeScript Interfaces--");
    console.log(`\nEmployee Details: ${JSON.stringify(Employee)}`);

    console.log(`\nEmployee Details: ${Employee.name} is ${Employee.age} years old and their employee ID is ${Employee.employeeId}. They are a ${Employee.position}.`);
    Employee.greet();

}

export default myInterface;