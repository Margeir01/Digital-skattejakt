function classifyAge(age) {
    if (age < 13) return " Du er et barn.";
        if (age < 20) return "Du er en tenåring.";
        return "Du er voksen.";
}
console.log("Margeir (24): "+ classifyAge(24));
console.log("Joakim (16): " + classifyAge(16));
console.log(" May-Helen (10): " + classifyAge(10));