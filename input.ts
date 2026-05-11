import * as readline from 'readline';

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

rl.question("Enter your phone number: ", (phone) => {

    console.log("Your phone number is: " + phone);

    rl.close();

            if (phone.trimStart().length ===10 && /^[0-9]+$/.test(phone)) {
                console.log("Valid phone number");
            } else {
                console.log("Invalid phone number");
            }
});

