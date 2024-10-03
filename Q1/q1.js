function lowerCaseWords(mixedArray) {
    return new Promise((resolve, reject) => {
      if (!Array.isArray(mixedArray)) {
        return reject(new Error("Input should be an array"));
      }
      
      const filteredArray = mixedArray
        .filter(item => typeof item === 'string') // Filter out non-strings
        .map(item => item.toLowerCase()); // Convert to lowercase
      
      resolve(filteredArray);
    });
  }
  
  // Example usage
  const mixedArray = ['PIZZA', 10, true, 25, false, 'WING'];
  
  lowerCaseWords(mixedArray)
    .then(result => console.log(result)) // Output: ['pizza', 'wing']
    .catch(error => console.error(error));
  