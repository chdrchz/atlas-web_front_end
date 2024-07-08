console.log("Start of the execution queue");

// set timeout waits for the execution stack to be cleared before executing
setTimeout(() => {
    console.log('Final code block to be executed using setTimeout');
  }, 0);

// this is what setTimeout is waiting on 
for (let i = 0; i <= 100; i++) {
    console.log(i);
}

// the loop has completed
console.log("End of the loop printing");