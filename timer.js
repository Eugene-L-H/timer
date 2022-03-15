const timers = process.argv.slice(1);

const timer = function(timers) {
  if (timers.length === 0) {
    return;
  }

  // Keep only arguments that are a positive number value 
  let validTimers = [];
  for (const arg of timers ) {
    if (arg > 0 && !isNaN(arg)) {
      validTimers.push(arg);
    }
  }

  // Return if there are no valid arguments supplied
  if (validTimers.length === 0) {
    return; 
  }

  // Find the largest value of command line aguments
  let consoleNewLine = Number(validTimers[0]);
  for (let i = 1; i < validTimers.length; i++) {
    if (validTimers[i] > consoleNewLine) {
      consoleNewLine = Number(validTimers[i]);
    }
  };
  
// Add 'beep' an amount of seconds later equal to each timer's value
  for (const timer of validTimers) {
    setTimeout (() => {
      process.stdout.write('beep!');
    }, timer * 1000);
  };
  
  // Bump cursor down one line one second after last beep
  setTimeout(() => {
    console.log();
  }, (consoleNewLine + 1) * 1000);
}

timer(timers);