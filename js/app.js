/* var i;
for (i = 1; i <= 100; i++) {
    if ((i%3 == 0) && (i%5 == 0)) {
    document.write('FizzBuzz<br>');
    }
    else if (i%3 == 0) {
    document.write('Fizz<br>');
    }
    else if (i%5 == 0) {
    document.write('Buzz<br>');
    }
    else {
    document.write(i + '<br>');
    }
} */


function myFunction() {
    var userEntry = prompt("Please enter a number", userEntry);    
    if (userEntry != "15") {
        document.getElementById("demo").innerHTML = userEntry;
    }
    else if (userEntry = "15") {
        document.getElementById("demo").innerHTML = "FizzBuzz";
    }
}

// will have to use parseInt() to convert the user entry to an integer so it can be evaluated with the previous logic and returned appropriately