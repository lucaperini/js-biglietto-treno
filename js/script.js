const km_number = parseInt(prompt("Quanti kilometri devi percorrere?"));
if (isNaN (km_number)){
    // console.log("Devi inserire un numero valido!");
};
let fair_price = 0.21 * km_number;
// console.log("il prezzo del biglietto è: "+ fair_price);
const user_age=parseInt(prompt("Quanti anni hai?"));
let discount_18 = (fair_price / 100) * 20;
let discount_65 = (fair_price / 100) * 40;
let total_price ="";
if (user_age < 18){
    total_price = fair_price - discount_18;
    console.log("Sconto del 20% per chi è minorenne: "+ total_price);
} else if (user_age > 65) {
    total_price = fair_price - discount_65;
    console.log("Sconto del 40% per gli over 65: "+ total_price);
    
} else {
    total_price=fair_price;
    console.log("Il prezzo del tuo biglietto è: "+ total_price);
    
}

document.getElementById("total-km").innerHTML=km_number;
document.getElementById()





