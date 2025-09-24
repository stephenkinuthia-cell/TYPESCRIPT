
const variables = () => 
    {


        //variables
        console.log("--variables--")
        let a: number = 10
        console.log(`Value of a:`, a);
        a=30
        console.log(`New Value of a:`, a);
        console.log(a * 2);


        //const = constant
        const b: number = 3.15
        console.log(`\nValue of b:`, b);

        // b = 50  error: Cannot assign to 'b' because it is a constant.
        //console.log(`New Value of b:`, b);
        // console.log(b * 2);

        //new JS - let, const - es6 features
        //old JS - var - did not have es6 features
        var c = 100
        console.log(`\nValue of c:`, c);
        c = 200
        console.log(`New Value of c:`, c);
        console.log(c * 2);






        let name: string = "steve"

        let isMale: boolean = true

        let evenNumbers: number[] = [2,4,6,8]

        let g:any = [1, "hello", true]

        let char = 'A'  //inferred as string

        //char = 'AB'  //error: Type '"AB"' is not assignable to type 'string'.



        console.log(`Type in a: ${typeof a}`);
        console.log(`Type in name: ${typeof name}`);
        console.log(`Type in isMale: ${typeof isMale}`);
        console.log(`Type in evenNumbers: ${typeof evenNumbers}`);
        console.log(`Type in g: ${typeof g}`);
        console.log(g);
        console.log(a);
        console.log(name);
        console.log(isMale);
        console.log(evenNumbers);
        console.log(g);
        console.log(g[0]);
        console.log(g[1]);
        console.log(g[2]);
        console.log(a + 5);
        console.log(name + " world");
        console.log(`Type in char: ${typeof char}`);
        console.log(char);

    
    }
export default variables


    