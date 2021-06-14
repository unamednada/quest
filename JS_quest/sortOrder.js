const argumentOne = process.argv[2].toLowerCase();
const argumentTwo = process.argv[3].toLowerCase();

if (argumentOne < argumentTwo) {
    console.log(-1);
} else if (argumentOne == argumentTwo) {
    console.log(0);
} else {
    console.log(1);
}
