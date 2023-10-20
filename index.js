// Create a prompt for user to enter froyo flavors 
const userInputString = prompt(
    "Please enter a list of froyo flavors.",
    // "chocolate,chocolate,vanilla,coffee"
);

function createOrderObject(str) {

const stringArray = str.split(",");

const order = {};
for (let i = 0; i < stringArray.length; i++) {
    if(stringArray[i] in order) {
        order[stringArray[i]] += 1;
    }
        else {
            order[stringArray[i]] = 1;
        }
    }
    return order;
}

const newOrder = createOrderObject(userInputString);

console.table(newOrder);
