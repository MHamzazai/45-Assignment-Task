// creating a variable of uesr age

let Age : any = 14;

// creating an if-else chain to determine the usre life phase

if (Age < 2 ){
    console.log(`If You Are "${Age}" Year Old: So You Are A "Baby".`);
}
else if (Age >= 2 && Age < 4){
    console.log(`If You Are "${Age}" Year Old: So You Are A "Toddler".`);
}
else if (Age >= 4 && Age < 13 ){
    console.log(`If You Are "${Age}" Year Old: So You Are A "Kid".`);    
}
else if (Age >= 13 && Age < 20){
    console.log(`If You Are "${Age}" Year Old: So You Are A "Teenager".`);
}
else if (Age >=20 && Age < 65){
    console.log(`If You Are "${Age}" Year Old: So You Are A "Adult".`);
} 
else if (Age >=65){
    console.log(`If You Are "${Age}" Year Old: So You Are "Elder".`);
}