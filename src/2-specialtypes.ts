
const specialTypes = () => {

    //never: represent the type of values that never occur
    const throwError = ():never => {
        throw new Error("This is an error")
    }

    const infiniteloop = ():true => {
        while(true)
        [

        ]

    }
    


    //any
    let age:any = 45;
    age = "forty five"
    age = true

    //null and undefined - in ts, both null & undefined have their 
    let a:undefined
    
    let b:null=null; //intentional


}

export default specialTypes
