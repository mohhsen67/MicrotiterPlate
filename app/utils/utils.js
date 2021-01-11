const isNumbersFieldValid = (str) => {
  if (str == '') return true;

  let lower = 1, upper = 384;

  // Removing the unnecessary spaces
  str = str.replace(/\s/g, '');

  // Split the string by comma (,)
  const nums = str.split(',');
  const track = {};

  // Visit the numbers
  for (let num of nums) {

    // Check if any number contains a dash (-)
    if (/\-/.test(num)) {

      // If has dash then split by dash and get the upper and lower bounds.
      const [l, u] = num.split('-').map(x => x * 1);

      // Visit from lower to upper bound
      for (let i = l; i <= u; i++) {

        // If any number of the range doesn't exceed the upper
        // or lower bound i.e. [1, 384] range and did not
        // appear before then track this number.
        // otherwise return false i.e. mark it as invalid.
        if (i >= lower && i <= upper && track[i] === undefined) {
          track[i] = true;
        } else {
          return false;
        }
      }

    } else {

      // Checking again if it exceed the range [1, 384] or appears before.
      num *= 1;
      if (num >= lower && num <= upper && track[num] === undefined) {
        track[num] = true;
      } else {
        return false;
      }
    }
  }

  // If everything okay then return true, i.e. valid.
  return true;
}

const getDimensions = (inputNumber) => {
  const root = Math.sqrt(inputNumber);
  const natural_root = Math.floor(root);

  if (root === natural_root) return [natural_root, natural_root];

  let rowsCount = 0;
  // O(Sqrt(n))
  for (let i = natural_root; i > 0; i--) {
    if (inputNumber % i === 0) {
      rowsCount = i;
      break;
    }
  }

  let columnsCount = 0;
  // O(n/2 - Sqrt(n)) => O(n)
  for (let i = natural_root + 1; i <= inputNumber; i++) {
    if (inputNumber % i === 0) {
      columnsCount = i;
      break;
    }
  }

  return [rowsCount, columnsCount];
}

// O(n + n + n^2) => O(n^2)
const customSort = (str) => str.split(",") // n
  .map(item => item.trim()) // n
  .sort((prv, nxt) => extractStart(prv) - extractStart(nxt)); // n^2

const extractStart = str => isNaN(str) ? parseInt(str.split('-')[0]) : parseInt(str);

module.exports.isNumbersFieldValid = isNumbersFieldValid;
module.exports.getDimensions = getDimensions;
module.exports.customSort = customSort;