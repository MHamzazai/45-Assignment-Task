// storing guests in a array

let guests : string[] = ["mamu", "Nani Ammi", "Nana Abu"];

// printing a surprise message 

console.log("Great! We will find a bigger dineing table.");

// add a new guest at te beginning of the array
// by using unshift() method

guests.unshift("Bade Mamu");

// add a new guest at the middle of the array
// by using splice() method

guests.splice(Math.floor(guests.length / 2), 0,"Badi Mami");

// add a new guest at the end of the list
// by using append() method

guests.push("khala");

// printing a new message 
// by using forEach method

guests.forEach(mode => {
    console.log(`Assalam u Alikum ${mode}, "you are cordially invited for dinner at my home."`);
});
