const functions = {
     stringLength: (string) => {
          const len = string.length
          if (len > 0 && len <= 10) {
               return len;
          }
          throw new Error('Condition on length Failed');
     },

     reverseString: (string) =>  string.split('').reverse().join('')
    
}

module.exports = functions;
