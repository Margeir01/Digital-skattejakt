const rl = require("readline").createInterface({
    input: process.stdin,
    output: process.stdout
});

rl.question("hvor gammel er du? ", (input) => {
    let age = Number(input);  // gjør teksten om til tall

    if (age < 13) {
        console.log("du er et barn");
    }else if (age <20) {
        console.log("du er en tenåring");
     } else {
        console.log("du er voksen");

    }
    
    rl.close();
});

