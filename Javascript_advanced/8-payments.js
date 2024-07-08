function processPayment(amount) {

    // data validation
    if (typeof amount !== 'number' || amount < 0) {
        console.log("amount is not a valid number");
    }

    console.log(`Collecting payment of ${amount}`);
}

function processOrder(orderId, amount) {

    // data validation
    if (typeof amount !== 'number' || amount < 0) {
        console.log("amount is not a valid number");
    }

    if (typeof orderId !== 'number' || orderId < 0) {
        console.log("orderId is not a valid number")
    }

    console.log(`${orderId} is being processed`);

    processPayment(amount);

    console.log(`${orderId} has been fully processed`);
}

processOrder(12321, 10.99);
processOrder(12322, 12.99);
processOrder(12323, 15.0);

console.log("All the orders have been processed");
