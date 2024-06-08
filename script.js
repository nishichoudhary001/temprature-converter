let cel = document.getElementById("celsius");
let feh = document.getElementById("fahrenheit");
let fra= document.getElementById("feh");
let ca = document.getElementById("cel");
cel.addEventListener("input",function(){
   let c = this.value;
   let f = (c * 9/5) + 32;
   feh.value = f;

})

fra.addEventListener("input",function(){
    let f = this.value;
    let c = (f - 32) * 5/9;
    ca.value = c;
 
 })