const number = Number(process.argv[2]);

if (number % 3 == 0 && number % 5 != 0) {
    console.log("Java");
} else if (number % 5 == 0 && number % 3 != 0) {
    console.log("Script");
} else if (number % 3 == 0 && number % 5 == 0) {
    console.log("JavaScript");
} else {
    console.log(number);
}