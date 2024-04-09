// creating a variable of current_user.

let current_users = ["Rafay", "Saim", "Saad", "Huzaifa", "Taheer", "SRK"];

// creting another variable name new_users.

let new_users = ["Aliyan", "saad", "saim", "Haris", "Ifraq", "srk"];

// comparing the values of new_users and current_user and then print the result for user

new_users.forEach(mode => {
    if(current_users.some(node => node.toLowerCase() === mode.toLowerCase())){
        console.log(`userName "${mode}" already exists, The person will need to enter a new userName !.`);  
    }
    else{
        console.log(`The userName "${mode}", Is Available !.`);
    }
});
