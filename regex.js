let cardNumber = "5544482698938691";
let myRegEx = /^5\d{15}/; //Mastercard credit cards usually start with the number 5 and have 16 digits in total.
let result = myRegEx.test (cardNumber); //This should tell if the card number meets the requirements stipulated in the above Regex.
// console.log (cardNumber.length);
// console.log (result);
if (cardNumber.match(myRegEx) && (cardNumber.length == 16)){
    console.log ("This is a Mastercard");
}
else{
    console.log("We only accept Mastercard");
}
