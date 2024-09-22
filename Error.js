// Function to simulate expense calculation
function calculateTotal(expenses) {
    if (!Array.isArray(expenses)) {
      throw new Error("Invalid input: expenses should be an array.");
    }
  
    let total = 0;
  
    for (let i = 0; i < expenses.length; i++) {
      let expense = expenses[i];
  
      if (typeof expense !== "number" || expense < 0) {
        throw new Error(`Invalid expense value at index ${i}: ${expense}`);
      }
  
      total += expense;
    }
  
    return total;
  }
  
  // Example usage with error handling
  try {
    // Correct data
    let expenses = [100, 200, 50];
    let total = calculateTotal(expenses);
    console.log(`Total expenses: $${total}`);
  
    // Incorrect data to trigger error
    let faultyExpenses = [100, "abc", 50];
    let faultyTotal = calculateTotal(faultyExpenses); // This will throw an error
    console.log(`Faulty Total expenses: $${faultyTotal}`);
  } catch (error) {
    console.error(`Error occurred: ${error.message}`);
  }
  