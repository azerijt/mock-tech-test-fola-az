/**
 * 
 * Return an array containing the numbers from 1 to N, where N is the parametered value.

Replace certain values however if any of the following conditions are met:

- If the value is a multiple of 3: use the value "Fizz" instead
- If the value is a multiple of 5: use the value "Buzz" instead
- If the value is a multiple of 3 & 5: use the value "FizzBuzz" instead

N will never be less than 1.



 */

/* PSEUDOCODE
function 
parameter: num (number)
return: array of numbers/ string

initialise empty array called fizzBuzzArray
initialise a for loop starting from i=1, i++, up to num:
  if i%3 is equivalent to 0 and if i%5 is equivalent to 0:
    push "fizzbuzz" into fizzBuzzArray
  else if i%3 is equivalent to 0:
    push "fizz" into fizzBuzzArray
  else if i%5 is equiavalent to 0:
    push "buzz" into fizzBuzzArray
  else:
    push i into fizzBuzzArray
  
  END IF
END FOR

return fizzBuzzArray
    
*/ 


function fizzbuzz(num: number): (string|number)[] {
  const fizzBuzzArray: (string|number)[] = [];
  for (let i=1; i<=num; i++){
    if ((i%3===0)&&(i%5===0)){
      fizzBuzzArray.push("FizzBuzz")
    }
    else if (i%3===0){
      fizzBuzzArray.push("Fizz")
    }
    else if(i%5===0){
      fizzBuzzArray.push("Buzz")
    }
    else{
      fizzBuzzArray.push(i)
    }
  }

  return fizzBuzzArray;
}

export default fizzbuzz;

console.log(fizzbuzz(3))