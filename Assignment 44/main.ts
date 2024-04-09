// making a function and give it 3 parameters in which 2 are neccessary and 1 are optional 

function createcars(manufacturer : string, model : string, ...extraOption : {[key : string ] : any} [] ) : object {
    let cars = {
        manufacturer ,
        model,
        ...Object.assign({}, ...extraOption),
    }
    // return the variable 
    return cars;
};

// calling the function in variable and then print it

let car = createcars("Toyota ", "Corolla", {colour : "Black", sunroof : "Yes"});
console.log(car);