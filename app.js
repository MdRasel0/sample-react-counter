// Vulnerable: Hardcoded password
const password = "SuperSecret123!";

// Vulnerable: Insecure use of eval
function runUserCode(code) {
  return eval(code);
}

// Example usage
console.log("Hardcoded password:", password);
runUserCode("console.log('Eval executed')");