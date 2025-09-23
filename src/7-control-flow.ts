

const controlFlow = () => {
    console.log("--TypeScript Control Statements--");

    //if statement
    console.log("\nIf Statement:");
    let age: number = 21;

    if (age >= 18) {
        console.log("You are eligiable to vote.");
    }





     //if-else statement
    console.log("\nIf-Else Statement:");

     if (age < 12) {
        console.log("You are not eligiable to vote.");
     } else {
         console.log("You are eligiable to vote.");
     }





    //if-else-if ladder
    console.log("\nIf-Else-If Ladder:");
    let score: number = 88;

    if (score >= 70 && score <= 100) {
        console.log("Grade A");
    } else if (score >= 60 && score < 70) {
        console.log("Grade B");
    } else if (score >= 50 && score < 60) {
        console.log("Grade C");
    } else if (score >= 40 && score < 50) {
        console.log("Grade D");
    } else if (score >= 0 && score < 40) {
        console.log("Grade E: will have to do a supplementary exam!");
    } else {
        console.log("Invalid Score");
    }


    //switch statement
    console.log("\nSwitch Statement:");
    let day: number = 1;
    let dayName: string;

    switch (day) {
        case 2:
            dayName = "Monday";
            break;
        case 3:
            dayName = "Tuesday";
            break;
        case 4:
            dayName = "Wednesday";
            break;
        case 5:
            dayName = "Thursday";
            break;
        case 6:
            dayName = "Friday";
            break;
        case 7:
            dayName = "Saturday";
            break;
        case 1:
            dayName = "Sunday";
            break;
        default:
            dayName = "Invalid Day";
    }
    console.log(`\nDay ${day} is ${dayName}`);



    
    
    /**
     welcome to dataservice, whats your name:......
     Welcome steve, here is our services:
     1. 10shillings - 100MB
     2.
     3.
     .
     .
     6.
     -------
     3

     congrats steve, you have received **** MBS for 24hrs
     */


    // //do-while loop
    // count = 1;
    // console.log("\nDo-While Loop:");
    // do {
    //     console.log(`Count: ${count}`);
    //     count++;
    // } while (count <= 2);


}


export default controlFlow;