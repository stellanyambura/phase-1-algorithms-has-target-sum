function hasTargetSum(array, target) {
  // Write your algorithm here
  for (var i = 0; i < array.length; i++) {
    for (var j = 0; j < array.length; j++) {
      if (array[i] + array[j] === target) {
        return true;
      }
       else if (array[j] + array[j] === target || array[i]+array[i]===target) {
        return false;
      } 
      else if (array.length === 1) {
        return false;
      }
    }
  }
}

/* 
  Write the Big O time complexity of your function here
  o(n²)
*/

/* 
  Add your pseudocode here
  To find two numbers that add to target, for every number i in the array we try to add number j
   to i and see if that equals target. If it is, return the pair. 
   The pairs should not be of the same index and of one lenght
*/

/*
  Add written explanation of your solution here
  loop through the the inner array to add each pair in the array then compare with the target in the outer array and compare if it 
  equates
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