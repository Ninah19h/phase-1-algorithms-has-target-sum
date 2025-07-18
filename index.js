function hasTargetSum(array, target) {
  // Write your algorithm here

  // Create a Set to store numbers we’ve seen so far
  const seenNumbers = new Set();

  // Loop through each number in the array
  for (const number of array) {
    // Calculate the complement that would reach the target
    const complement = target - number;

    // If the complement exists in our set, return true
    if (seenNumbers.has(complement)) {
      return true;
    }

    // Add the current number to the set
    seenNumbers.add(number);
  }

  // If no pair adds up to the target, return false
  return false;
}

/* 
  Write the Big O time complexity of your function here
  Time: O(n)
  Space: O(n)
*/

/* 
  Add your pseudocode here
  - Make an empty Set to store numbers I see
  - Go through each number in the array
    - Find the number I need to reach the target current no
    - Check if that number is already in the Set
      - If yes, return true
      - If no, add the current number to the Set
  - If no match is found after checking all numbers, return false
*/

/*
  Add written explanation of your solution here
   I want to see if two numbers in the array can add up to the target.
  So, I look at each number one by one.
  For each number, I check if the other number I need (to reach the target) is already in the Set.
  If yes, that means the pair exists, so I return true.
  If not, I add the number to the Set and keep checking.
  If I finish checking all numbers and don’t find any pair, I return false.
*/

// You can run `node index.js` to view these console logs
if (require.main === module) {
  // add your own custom tests in here
  console.log("Expecting: true");
  console.log("=>", hasTargetSum([3, 8, 12, 4, 11, 7], 10));

  console.log("");

  console.log("Expecting: true");
  console.log("=>", hasTargetSum([22, 19, 4, 6, 30], 25));

  console.log("");

  console.log("Expecting: false");
  console.log("=>", hasTargetSum([1, 2, 5], 4));
}

module.exports = hasTargetSum;
