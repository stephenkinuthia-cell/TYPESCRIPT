// dataservice.ts

import * as readline from "readline";

// Define a DataDeal type
type DataDeal = {
  price: number;
  bundle: string;
  validity: string;
};

// Create available deals
const deals: DataDeal[] = [
  { price: 10, bundle: "100MB", validity: "24hrs" },
  { price: 15, bundle: "500MB", validity: "24hrs" },
  { price: 100, bundle: "1GB", validity: "24hrs" },
  { price: 150, bundle: "2GB", validity: "24hrs" },
  { price: 1000, bundle: "10GB", validity: "7days" },
];

// Setup readline interface for user input
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

console.log("Welcome to DataService!");

rl.question("What is your name? ", (name) => {
  console.log(`\nWelcome ${name}, here are our deals:`);
  deals.forEach((deal, index) => {
    console.log(`${index + 1}. ${deal.price} shillings - ${deal.bundle}`);
  });

  rl.question("\nPlease choose your option (1-5): ", (input) => {
    const choice = parseInt(input);

    if (choice >= 1 && choice <= deals.length) {
      const selected = deals[choice - 1];
      console.log(
        `\nCongrats ${name}, you have received ${selected.bundle} for ${selected.validity}!`
      );
    } else {
      console.log("Invalid choice, please try again!");
    }

    rl.close();
  });
});
