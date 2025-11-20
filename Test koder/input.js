const readline = require("readline").createInterface({
    input: process.stdin,
    output: process.stdout
});

readline.question("hva heter du? ", (name) => {
    console.log("hei " + name + "! Velkommen til JavaScript!");
    readline.close();
});
