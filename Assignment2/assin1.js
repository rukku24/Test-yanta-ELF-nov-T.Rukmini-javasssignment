//Named function
function factorial(n)
{
    if(n===0)
    {
        return 1;
    }
    return n*factorial(n-1)
}
console.log(factorial(3))

console.log("--------------")
//Ananymous function
var factorial = function(n)
{
    if(n===0)
    {
        return 1;
    }
    return n*factorial(n-1)
}
console.log(factorial(3))

console.log("--------------")
//arrow function
var factorial = (n) =>
{
    if(n===0)
    {
        return 1;
    }
    return n*factorial(n-1)
}
console.log(factorial(3));


//self invoked function
  (function(n)
  {
    if(n===0)
    {
        return 1;
    }
    console.log(n*factorial(n-1))
  })(3)




 