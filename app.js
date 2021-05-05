// Global variable
var global = "Hello World!";

function localVar() {
    // Local variable
    var local = "this is inside!";
    console.log(local);
    console.log('right after local //', global);
}

// console.log(local);

// localVar();

// function changeGlobal() {
//     global = "new variable"
// }

// changeGlobal();

// console.log(global)



// Lexical Scope

function parent() {
    var name = 'Paul';
    // name is accessible
    // hobbies are not accesible here

    // console.log(hobbies);
    function firstChild() {
        // name is still accesible
        // still not accessible for hobbies

        // console.log(name);
        
        function secondChild() {
            // name and hobbies are accessible
            var hobbies = 'Gaming';
            // console.log(name);
            // console.log(hobbies)
        }
        // secondChild();
    }

    // firstChild();
}

parent();

// Closures

function closure() {
    var name = "Paul";
    return function () {
        console.log("Hello there " + name);
    }
}

// Does not log hello there
closure()

var newClosure = closure();

// newClosure();


// closure()();
