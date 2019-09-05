// Converting Arrays to Strings
// The JavaScript method toString() converts an array to a string of (comma separated) array values.
{
  const fruits = ["Banana", "Orange", "Apple", "Mango"];
  document.getElementById("demo").innerHTML = fruits.toString();
  document.getElementById("demo").innerHTML = fruits.join(" * ");
}

// Popping and Pushing
// When you work with arrays, it is easy to remove elements and add new elements.

// This is what popping and pushing is:

// Popping items out of an array, or pushing items into an array.

// The pop() method removes the last element from an array:
{
  const fruits = ["Banana", "Orange", "Apple", "Mango"];
  const x = fruits.pop(); // the value of x is "Mango"
  fruits.pop(); // Removes the last element from fruits
  console.log(fruits);
  console.log(x);
  console.log("");
}

// Pushing
// The push() method adds a new element to an array (at the end):
{
  const fruits = ["Banana", "Orange", "Apple", "Mango"];
  fruits.push("Kiwi"); //  Adds a new element ("Kiwi") to fruits
  console.log(fruits);
  console.log("");
}

// Changing Elements
// Array elements are accessed using their index number:

// Array indexes start with 0. [0] is the first array element, [1] is the second, [2] is the third ...
{
  const fruits = ["Banana", "Orange", "Apple", "Mango"];
  fruits[0] = "Kiwi"; // Changes the first element of fruits to "Kiwi"
  console.log(fruits);
  console.log("");
}

// Deleting Elements
// Since JavaScript arrays are objects, elements can be deleted by using the JavaScript operator delete:

{
  const fruits = ["Banana", "Orange", "Apple", "Mango"];
  delete fruits[0]; // Changes the first element in fruits to undefined
  console.log(fruits);
  console.log("");
}

// Slicing an Array
// The slice() method slices out a piece of an array into a new array.

// This example slices out a part of an array starting from array element 1 ("Orange"):
{
  const fruits = ["Banana", "Orange", "Lemon", "Apple", "Mango"];
  const citrus = fruits.slice(1);
  const citrus2 = fruits.slice(1, 3);
  console.log(citrus);
  console.log(citrus2);
  console.log("");
}

//JavaScript Sorting Arrays
// The sort() method sorts an array alphabetically:
// The reverse() method reverses the elements in an array.
// You can use it to sort an array in descending order:
{
  const fruits = ["Banana", "Orange", "Apple", "Mango"];
  console.log(fruits.sort()); // First sort the elements of fruits
  console.log(fruits.reverse()); // Then reverse the order of the elements
  console.log("");
}

// Numeric Sort
// By default, the sort() function sorts values as strings.

// This works well for strings ("Apple" comes before "Banana").

// However, if numbers are sorted as strings, "25" is bigger than "100", because "2" is bigger than "1".

// Because of this, the sort() method will produce incorrect result when sorting numbers.

// You can fix this by providing a compare function:

{
  const points = [40, 100, 1, 5, 25, 10];
  console.log(
    points.sort(function(a, b) {
      return a - b;
    })
  );
  console.log("");
}

// Array.map()
// The map() method creates a new array by performing a function on each array element.

// The map() method does not execute the function for array elements without values.

// The map() method does not change the original array.

// This example multiplies each array value by 2:
{
  const numbers1 = [45, 4, 9, 16, 25];
  const numbers2 = numbers1.map(myFunction);

  console.log(numbers2);
  console.log("");

  function myFunction(value, index, array) {
    return value * 2;
  }
}

// Array.filter()
// The filter() method creates a new array with array elements that passes a test.

// This example creates a new array from elements with a value larger than 18:
{
  const numbers = [45, 4, 9, 16, 25];
  const over18 = numbers.filter(myFunction);
  console.log(over18)
  function myFunction(value, index, array) {
    return value > 18;
  }
}
