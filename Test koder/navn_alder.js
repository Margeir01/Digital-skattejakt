function classifyAge(age) {
    if (age < 13) return "Du er et barn.";
    if (age < 20) return "Du er en tenåring.";
    return "Du er voksen.";
}

const rl = require("readline").createInterface({
    input: process.stdin,
    output: process.stdout
});

rl.question("hva heter du? ", (name) => {
    rl.question("hvor gammel er du? ", (input) => {
    const age = Number(input);
    console.log("Hei " + name + "! " + classifyAge(age));
    rl.close();
    });
});

 