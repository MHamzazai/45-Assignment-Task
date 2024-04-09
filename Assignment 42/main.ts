// create a function 

function show_magicians(magicians : string[]) {
    magicians.forEach(mode => console.log(`${mode}.`));;
}

// // create an array and store magicians name in it

let magicians_names : string[] = ["Zack", "Dai Vernon", "Harry Houdini"];

// make another function to write the great in starting of maigicians name

function make_great(magic : string[]){
    return magic.map(name => `The Great ${name}.`);
 }

 // first making copy of original array to write "The Great" in Magicians Names 
 // by using slice () method

 let copy = magicians_names.slice();

// now make another variable to store thi copy with make_great function

let copy2 = make_great(copy);

// now first printing a original function

console.log("\nOriginal Function !.\n");
show_magicians(magicians_names);

// now printing a copy function 
console.log("\nCopy Or Modified Function !.\n");
show_magicians(copy2);