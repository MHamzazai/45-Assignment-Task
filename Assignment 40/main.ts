// create  a function 

function show_magicians(magicians : string[]){
    magicians.forEach(mode => {
        console.log(mode);
    });
}

// store the magicians name in a array

let magiciansName : string[] = ["Zack", "Dai Vernon", "Harry Houdini"];

// now recalling the function and store magicianName in it

show_magicians(magiciansName);
