const km_number = parseInt(prompt("Quanti kilometri devi percorrere?"));
document.getElementById('total-km').innerHTML= km_number;
const user_age=parseInt(prompt("Quanti anni hai?"));
document.getElementById('passenger-age').innerHTML=user_age;
let fair_price = 0.21 * km_number;
let discount_18 = (fair_price / 100) * 20;
let discount_65 = (fair_price / 100) * 40;
let total_price = fair_price;
document.getElementById('total').innerHTML=total_price.toFixed(2) +"€";
if (user_age < 18){
    total_price = fair_price - discount_18;
    document.getElementById('total-discount').innerHTML="Sconto del 20% per chi è minorenne. Il costo del tuo biglietto è "+ total_price.toFixed(2) +"€";
} else if (user_age > 65) {
    total_price = fair_price - discount_65;
    document.getElementById('total-discount').innerHTML="Sconto del 40% per chi è over 65. Il costo del tuo biglietto è: "+ total_price.toFixed(2) +"€";
    
} else {
    total_price=fair_price;
    document.getElementById('total').innerHTML=total_price.toFixed(2) +"€";
}










