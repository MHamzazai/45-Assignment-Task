// create a function 

function show_magicians(magicians : string[]) {
    magicians.forEach(mode => console.log(`${mode}.`));;
}

// // create an array and store magicians name in it

let magicians_names : string[] = ["zack", "Dai Vernon", "Harry Houdini"];

// make another function to write the great in starting of maigicians name

function make_great(magic : string[]){
    return magic.map(name => `The Great ${name}`)
 }

 // now storing the function make_great in a variable and call it

 let great = make_great(magicians_names);

//  printing the updated magicians name in a array 
 show_magicians(great);
