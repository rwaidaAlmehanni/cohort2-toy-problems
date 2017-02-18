
/**
 * Given a roman numeral as input, write a function that converts the roman
 * numeral to a number and outputs it.
 *
 * Example:
 * translateRomanNumeral("XXI") // 21
 *
 * When a smaller numeral appears before a larger one, it becomes
 * a subtractive operation. You can assume only one smaller numeral
 * may appear in front of larger one.
 *
 * Example:
 * translateRomanNumeral("IV") // 4
 *
 * You should return `null` on invalid input.
 */

var translateRomanNumeral = function(romanNumeral){
	var DIGIT_VALUES = {
	  I: 1,
	  V: 5,
	  X: 10,
	  L: 50,
	  C: 100,
	  D: 500,
	  M: 1000
	};
<<<<<<< HEAD
	var result=DIGIT_VALUES[romanNumeral[0]];

	for(var i=1; i<romanNumeral.length; i++){
		 if(DIGIT_VALUES[romanNumeral[i]]===undefined){
			return null;
		    }
		if(DIGIT_VALUES[romanNumeral[i-1]] < DIGIT_VALUES[romanNumeral[i]]){
			result-=DIGIT_VALUES[romanNumeral[i]];

		}else{console.log(result)
			result+=DIGIT_VALUES[romanNumeral[i]]
		}
	}
	return Math.abs(result);
}
//O(n)
=======
}
>>>>>>> ec1197ded368e7aad2cc2c29d5059a3905f42645
