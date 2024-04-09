// creating a array of some userNames 

let userNames = ["Aliyan", "Saim", "Huzaifa", "Rafay", "Admin"];

// using forEach loop method including if statements

userNames.forEach(oneuser =>{
    if(oneuser === "Admin"){
        console.log(`Hello ${oneuser}, Would You Like To See A Status Report ?.`);
    }
    else{
        console.log(`Hello ${oneuser}, Thank You For Logging In !.`);
    }
});