//Progression 1:
//We've got some basic info about Karen's home
//Debug the type of data provided
//Return the types concatenated in a single variable
function moreAboutHome(address, distanceFromTown, hasNeighbours) {
    var typ1 = typeof (address);
    var typ2 = typeof (distanceFromTown);
    var typ3 = typeof (hasNeighbours);
    return typ1 + typ2 + typ3;
}

//Progression 2:
//Check if the data given is of the right type
//parents = String, noOfSiblings = Number, isNuclearFamily = Boolean
// function moreAboutKaren(parents, noOfSiblings, isNuclearFamily) {
//     var one = (typeof (parents) === 'string');
//     if (one === true)
//         console.log("true");
//     else
//         console.log("false");
//     var two = (typeof (noOfSiblings) === 'number');
//     if (two === true)
//         console.log("true");
//     else
//         console.log("false");
//     var three = (typeof (isNuclearFamily) === 'boolean');
//     if (three === true)
//         console.log("true");
//     else
//         console.log("false");
// }
function moreAboutKaren(parents, noOfSiblings, isNuclearFamily) {
    var parents, noOfSiblings, isNuclearFamily;
    if (typeof (parents) == "string" && typeof (isNuclearFamily) == "boolean") {
        var Check = true;
        return Check && Number.isInteger(noOfSiblings);
    } else {
        return false;
    }
}

//Progression 3:
//Lily is suspicious about Karen's new friend
//Karen tells her friend's age and even writes it down
//Check which one those is not a number (NaN) and return that value
function doesFriendExist(ageInText, ageInNumber) {
    if (isNaN(ageInText) == true)
        return ageInText;
    else
        return ageInNumber;
}

//Progression 4:
//Lily gave Karen x sweets
//Karen ate y sweets herself
//On her way to the river, she ate another z sweets every n meters travelled
//Her friend divided the remaining sweets into 2 parts for each
//How many sweets did her friend get to eat?
function sweetTooth(totalNoOfSweets, sweetsConsumedByKaren, sweetsConsumedInNMeters, metersToTravel) {
    var x = totalNoOfSweets;
    var y = sweetsConsumedByKaren;
    var z = sweetsConsumedInNMeters;
    var meters = metersToTravel;
    var total = z * meters;
    var remaining = x - y - total;
    return remaining / 2;
}

//Progression 5:
//As Lily moves closer, it gets colder. She checks the temperature on her mobile
//It only shows in fahrenheit. Convert the data to celsius and return it.
function convertToCelsius(fahrenheit) {
    var f = fahrenheit;
    var c = (f - 32) * 5 / 9;
    return c;
}


//Progression 6:
//Lily can now do multiple things to deal with this
//1. Take her daughter to a doctor
//2. Talk to her husband about it
//3. Counsel her daughter herself
//4. Lock her daughter in her room
//Given a value, return which of these above actions Lily would take
function aDifficultChoice(choice) {
    switch (choice) {
        case 1:
            // return choice;
            console.log("Take her daughter to a doctor");
            break;
        case 2:
            // return choice;
            console.log("Talk to her husband about it");
            break;
        case 3:
            // return choice;
            console.log("Counsel her daughter herself");
            break;
        case 4:
            // return choice;
            console.log("Lock her daughter in her room");
            break;
        default:
            console.log("invalid input");
    }
}

//Progression 7:
//Lily realized that she'd hurt her daughter
//All she wants now is for her to stop crying
//She refuses to talk to her but Lily doesn't stop trying
//She tries out multiple things hoping for the best
//Take all of Lily's strategies and concatenate them to a single var
//Seperate the strategies by a single space
//Return the length of the complete strategy
function consoleKaren(strategies) {
    var total = " ";
    var final = total.concat(" ", strategies);
    return final.length;
}