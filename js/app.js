function fizzBuzz() {
    for (x=document.getElementById("number").value; x<100; x++) {
        if (x%3===0 && x%5===0) document.write("FizzBuzz <br>");
        else if (x%3===0) document.write("Fizz <br>"); 
        else if (x%5===0) document.write("Buzz <br>");
        else document.write(x + "<br>");
    }
}


// this writes the full list on page load
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


/*function myFunction() {
    var userEntry = prompt("Please enter a number", userEntry);
//    for (userEntry=1, userEntry<=100, userEntry++) {
        if ((userEntry%3==0)&&(userEntry%5==0)) {
            document.getElementById("demo").innerHTML = "FizzBuzz";
        }
        else if (userEntry%5==0) {
            document.getElementById("demo").innerHTML = "Buzz";
        }
        else if (userEntry%3==0) { //this one isn't returning anything at all
            document.GetElementById("demo").innerHTML = "Fizz";
        }
        else {
            document.getElementById("demo").innerHTML = userEntry;
        }
//    }
}*/
//the prompt doesn't work with if the "for" statement is included
//the second else-if doesn't return anything at all, but everything else works


//this one works, don't lose it
/*
function myFunction() {
    var userEntry = prompt("Please enter a number", userEntry);    
    if (userEntry != "15") {
        document.getElementById("demo").innerHTML = userEntry;
    }
    else if (userEntry = "15") {
        document.getElementById("demo").innerHTML = "FizzBuzz";
    }
}
*/
// will have to use parseInt() to convert the user entry to an integer so it can be evaluated with the previous logic and returned appropriately
