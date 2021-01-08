const isNumbersFieldValid = (str) => {
    if (str == '') return true;
  
    let lower = 1, upper = 384;
    
    // Removing the unnecessary spaces
    str = str.replace(/\s/g, '');
    
    // Split the string by comma (,)
    const nums = str.split(',');
    const track = {};
    
    // Visit the numbers
    for (const num of nums) {
      
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
        if (num * 1 >= lower && num * 1 <= upper && track[num] === undefined) {
          track[num] = true;
        } else {
          return false;
        }
      }
    }
    
    // If everything okay then return true, i.e. valid.
    return true;
  }

  module.exports = isNumbersFieldValid;