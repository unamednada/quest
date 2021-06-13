const argumentValue = process.argv[2];
const numberValue = Number(argumentValue);

switch (true) {
    case (numberValue == 0):
        console.log("alive");
        break;
    case (numberValue == 1):
        console.log("flowering");
        break;
    case (numberValue == 2):
        console.log("shedding");
        break;
    case (numberValue >= 3):
        console.log("other");
        break;
}