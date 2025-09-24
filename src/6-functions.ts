const myFunctions = () =>{
 
    //function declaration
    function add(x:number, y:number): number {
        return x + y
    }``

    //invoke - arguments
    let total = add(10, 15)
    console.log("sum: ",total)


    //function declaration
    function subtract(a:number, b:number): number {
        return a - b
    }

    console.log(`subtraction: ${subtract(20, 5)}`);


    //function declaration
    function multiply(m:number, n:number): number {
        return m * n
    }
    console.log(`multiplication: ${multiply(10, 20)}`);

    // Optional Parameters
    const divide = (x: number, y?: number): number => {
        if (y) {
            return x / y;
        }
        return x;
    };
    console.log(`division: ${divide(5, 2)}`);

    type credentials = {
        email: string,
        pin: number
    }

    function Login(email:string, pin:number):credentials{
        return{
            email: "sk@gmail.com",
            pin: 456
        }
    }

    const user = Login("sk@gmail.com", 456);
    console.log("login credentials:", user);
}

export default myFunctions;