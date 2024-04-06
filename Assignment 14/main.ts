// storing my guests

let guests : string[] = ["Mamu", "Mami", "Nani Ami"];

// removing one guest

let unAttend : string = guests.splice(1,1)[0];

console.log(`${unAttend}, should not join the dinner.`);

// adding one more guests 

guests.push("Nana Abu");

// now printing a message
// using foraEach loop

guests.forEach(mode => {
    console.log(`Assalam u Alikum ${mode}, "you are cordially invited for dinner at my house.`);
})
