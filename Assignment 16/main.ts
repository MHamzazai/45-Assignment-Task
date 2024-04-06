// storing guests in a array

let guests : string[] = ["Bade Mamu", "Mamu", "Badi Mami", "Nana Abu", "Nani Ammi", "Khala"];

//a new message for guests

console.log("Unfortunately! our new dienning table has not been arrived at time so we can invite only two guests.");

// removing guests from the list
// by using while loop

while (guests.length > 2) {
    let removedGuest : string | undefined = guests.pop();
    if (removedGuest !== undefined){
        console.log(`Sorry ${removedGuest}, you can't invited for dinner.`);
    }
}

// now inviting only two peoples from list

guests.forEach(mode => {
    console.log(`${mode}, you are invited for dinner.`);
});

// empty the whole guests list 
// by using splice() method

guests.splice(0, guests.length);

// printing the message 

console.log("updated empty list of guests:", guests);