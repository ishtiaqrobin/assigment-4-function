/*************************
Problem 1:  radianToDegree 
**************************/

function radianToDegree(radian) {
    if (typeof radian != 'number') {
        return "Please Enter The Valid Number";
    }
    const degree = radian * 57.2958;
    const degreeTwoDecimal = degree.toFixed(2);
    const result = parseFloat(degreeTwoDecimal);
    return result;
}




/**************************
Problem 2:  isJavaScriptFile 
***************************/

function isJavaScriptFile(file) {
    if (typeof file != 'string') {
        return "Please Enter The Valid String";
    }
    let result = file.endsWith(".js");
    return result;
}




/******************
Problem 3: oilPrice
*******************/

function oilPrice(dieselOil, petrolOil, octaneOil) {
    if (typeof dieselOil != 'number' || typeof petrolOil != 'number' || typeof octaneOil != 'number') {
        return "Please Enter The Valid Number";
    }
    const dieselOilPricePerLitre = 114;
    const petrolOilPricePerLitre = 130;
    const octaneOilPricePerLitre = 135;

    const dieselOilPrice = dieselOilPricePerLitre * dieselOil;
    const petrolOilPrice = petrolOilPricePerLitre * petrolOil;
    const octaneOilPrice = octaneOilPricePerLitre * octaneOil;

    const totalOilPrice = dieselOilPrice + petrolOilPrice + octaneOilPrice;

    return totalOilPrice;
}




/***********************
Problem 4: publicBusFare
************************/

function publicBusFare(people) {
    if (typeof people != 'number') {
        return "Please Enter The Valid Number";
    }
    let remainingPeople = people % 50;
    remainingPeople %= 11;
    return remainingPeople * 250;
}




/**********************
Problem 5: isBestFriend 
***********************/

function isBestFriend(bestFriends, justFriends) {
    if (typeof bestFriends != 'object' || typeof justFriends != 'object') {
        return "Please Enter The Valid Object"
    }
    else if (bestFriends.name.toLowerCase() == justFriends.friend.toLowerCase() && justFriends.name.toLowerCase() == bestFriends.friend.toLowerCase()) {
        return true;
    }
    else {
        return "Please Enter The Same Name";
    }
}




