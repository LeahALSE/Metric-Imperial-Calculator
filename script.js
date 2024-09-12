var input = document.getElementById('input');
var result = document.getElementById('result');
var inputType = document.getElementById("inputType");
var resultType = document.getElementById("resultType");
var inputTypeValue, resultTypeValue;
input.addEventListener("keyup", myResult);

inputType.addEventListener("change", myResult);
resultType.addEventListener("change", myResult);

inputTypeValue = inputType.value; 
resultTypeValue = resultType.value;
function myResult(){
    // result.value = input.value;

inputTypeValue = inputType.value;
resultTypeValue = resultType.value;
//Meter ->
if(inputTypeValue === "Meter" && resultTypeValue === "Kilometer") {
    result.value = Number(input.value) * 0.001;
}else if(inputTypeValue === "Meter" && resultTypeValue === "Centimeter"){
    result.value = Number(input.value) * 100;
}else if(inputTypeValue === "Meter" && resultTypeValue === "Meter") {
    result.value = input.value
}else if(inputTypeValue === "Meter" && resultTypeValue === "Foot") {
    result.value = Number(input.value) * 3.28;
}else if(inputTypeValue === "Meter" && resultTypeValue ==="Yard"){
    result.value = Number(input.value) * 1.09;
}
//Yard
if(inputTypeValue === "Yard" && resultTypeValue === "Meter"){
    result.value = Number(input.value) * 0.9144
}else if(inputTypeValue === "Yard" && resultTypeValue === "Kilometer"){
    result.value = Number(input.value) * 0.0009144
}else if(inputTypeValue === "Yard" && resultTypeValue === "Mile") {
    result.value = Number(input.value) * 0.000568
}else if(inputTypeValue === "Yard" && resultTypeValue === "Centimeter") {
    result.value = Number(input.value) * 91.44
}else if(inputTypeValue === "Yard" && resultTypeValue === "Yard") {
    result.value = input.value
}else if(inputTypeValue === "Yard" && resultTypeValue === "Foot") {
    result.value = Number(input.value) * 3
}
//Kilometer ->
if(inputTypeValue === "Kilometer" && resultTypeValue === "Meter"){
    result.value = Number(input.value) * 1000;
}else if(inputTypeValue === "Kilometer" && resultTypeValue === "Centimeter"){
    result.value = Number(input.value) * 100000;
}else if(inputTypeValue === "Kilometer" && resultTypeValue === "Kilometer") {
    result.value = input.value
}else if(inputTypeValue === "Kilometer" && resultTypeValue === "Mile") {
    result.value = Number(input.value) /= 1609.344;
}else if(inputTypeValue === "Kilometer" && resultTypeValue === "Yard") {
    result.value = Number(input.type) * 1093.61;
}
//Mile ->
if(inputTypeValue === "Mile" && resultTypeValue === "Meter"){
    result.value = Number(input.value) * 1609.34
}else if(inputTypeValue === "Mile" && resultTypeValue === "Kilometer"){
    result.value = Number(input.value) * 1.60934
}else if(inputTypeValue === "Mile" && resultTypeValue === "Yard") {
    result.value = Number(input.value) * 1760
}else if(inputTypeValue === "Mile" && resultTypeValue === "Centimeter") {
    result.value = Number(input.value) * 160934
}else if(inputTypeValue === "Mile" && resultTypeValue === "Mile") {
    result.value = input.value
}else if(inputTypeValue === "Mile" && resultTypeValue === "Foot") {
    result.value = Number(input.value) * 5280
}

//Centimeter - > 
if(inputTypeValue === "Centimeter" && resultTypeValue === "Meter") {
    result.value  = Number(input.value) * 0.01
}else if (inputTypeValue === "Centimeter" && resultTypeValue === "Kilometer") {
    result.value = Number(input.value) * 0.00001
}else if(inputTypeValue === "Centimeter" && resultTypeValue === "Centimeter") {
    result.value = input.value
}else if(inputTypeValue === "Centimeter" && resultTypeValue === "Inch") {
    result.value = Number(input.value) * 0.394
}else if (inputTypeValue === "Centimeter" && resultTypeValue === "Foot") {
    result.value =  Number(input.value) * 0.0328
}
//Foot ->
if(inputTypeValue === "Foot" && resultTypeValue === "Meter"){
    result.value = Number(input.value) * 0.305
}else if(inputTypeValue === "Foot" && resultTypeValue === "Kilometer"){
    result.value = Number(input.value) * 0.000305
}else if(inputTypeValue === "Foot" && resultTypeValue === "Yard") {
    result.value = Number(input.value) * 0.33
}else if(inputTypeValue === "Foot" && resultTypeValue === "Centimeter") {
    result.value = Number(input.value) * 30.48
}else if(inputTypeValue === "Foot" && resultTypeValue === "Foot") {
    result.value = input.value
}else if(inputTypeValue === "Foot" && resultTypeValue === "Mile") {
    result.value = Number(input.value) * 0.00019
}else if(inputTypeValue === "Foot" && resultTypeValue === "Inch") {
    result.value = Number(input.value) * 12
}

//Inch ->
if(inputTypeValue === "Inch" && resultTypeValue === "Meter"){
    result.value = Number(input.value) * 0.0254
}else if(inputTypeValue === "Inch" && resultTypeValue === "Kilometer"){
    result.value = Number(input.value) * .0000254
}else if(inputTypeValue === "Inch" && resultTypeValue === "Yard") {
    result.value = Number(input.value) * 0.0278
}else if(inputTypeValue === "Inch" && resultTypeValue === "Centimeter") {
    result.value = Number(input.value) * 2.54
}else if(inputTypeValue === "Inch" && resultTypeValue === "Inch") {
    result.value = input.value
}else if(inputTypeValue === "Inch" && resultTypeValue === "Foot") {
    result.value = Number(input.value) /= 12
}else if(inputTypeValue === "Inch" && resultTypeValue === "Mile") {
    result.value = Number(input.value) * .0000158
}
//Ounce ->
if(inputTypeValue === "Ounce" && resultTypeValue === "Liter"){
    result.value = Number(input.value) * 0.0296
}else if(inputTypeValue === "Ounce" && resultTypeValue === "Gallon"){
    result.value = Number(input.value) * 0.0065
}else if(inputTypeValue === "Ounce" && resultTypeValue === "Milileter") {
    result.value = Number(input.value) *  29.6
}else if(inputTypeValue === "Ounce" && resultTypeValue === "Ounce") {
    result.value = input.value
//}else if(inputTypeValue === "Mile" && resultTypeValue === "Foot") {
    //result.value = Number(input.value) * 5280
}
//Gallon ->
if(inputTypeValue === "Gallon" && resultTypeValue === "Ounce"){
    result.value = Number(input.value) * 1609.34
}else if(inputTypeValue === "Gallon" && resultTypeValue === "Liter"){
    result.value = Number(input.value) * 1.60934
}else if(inputTypeValue === "Gallon" && resultTypeValue === "MiliLiter") {
    result.value = Number(input.value) * 1760
}else if(inputTypeValue === "Gallon" && resultTypeValue === "Gallon") {
    result.value = Number(input.value) * 160934
}else if(inputTypeValue === "Mile" && resultTypeValue === "Mile") {
    result.value = input.value
}else if(inputTypeValue === "Mile" && resultTypeValue === "Foot") {
    result.value = Number(input.value) * 5280
}
//Mililiter ->
if(inputTypeValue === "Mililiter" && resultTypeValue === "Ounce"){
    result.value = Number(input.value) * 0.034
}else if(inputTypeValue === "Mililiter" && resultTypeValue === "Liter"){
    result.value = Number(input.value) * 0.001
}else if(inputTypeValue === "Mililiter" && resultTypeValue === "Gallon") {
    result.value = Number(input.value) * 0.00022
}else if(inputTypeValue === "Mililiter" && resultTypeValue === "Militer") {
    result.value = input.value
}
//Gallon ->
if(inputTypeValue === "Gallon" && resultTypeValue === "Ounce"){
    result.value = Number(input.value) * 153.77
}else if(inputTypeValue === "Gallon" && resultTypeValue === "Liter"){
    result.value = Number(input.value) * 4.55
}else if(inputTypeValue === "Gallon" && resultTypeValue === "MiliLiter") {
    result.value = Number(input.value) * 4546.1
}else if(inputTypeValue === "Gallon" && resultTypeValue === "Gallon") {
    result.value = input.value
}
//Liter ->
if(inputTypeValue === "Liter" && resultTypeValue === "Ounce"){
    result.value = Number(input.value) * 0.00651
}else if(inputTypeValue === "Liter" && resultTypeValue === "Mililiter"){
    result.value = Number(input.value) * 1000
}else if(inputTypeValue === "Liter" && resultTypeValue === "Gallon") {
    result.value = Number(input.value) * 0.22
}else if(inputTypeValue === "Liter" && resultTypeValue === "Liter") {
    result.value = input.value
}
//Fahrenheit I feel like this one's wrong but ->
if(inputTypeValue === "Fahrenheit" && resultTypeValue === "Celcius"){
    result.value = (Number(input.value) -32) * (5/9)
}else if(inputTypeValue === "Fahrenheit" && resultTypeValue === "Kelvin"){
    result.value = (Number(input.value) + 459.67) * (5/9)  
}else if(inputTypeValue === "Fahrenheit" && resultTypeValue === "Fahrenheit") {
    result.value = input.value
}
//Celcius ->
if(inputTypeValue === "Celcius" && resultTypeValue === "Fahrenheit"){
    result.value = (Number(input.value) * (9/5) + 32)
}else if(inputTypeValue === "Celcius" && resultTypeValue === "Kelvin"){
    result.value = Number(input.value) + 273
}else if(inputTypeValue === "Celcius" && resultTypeValue === "Celcius") {
    result.value = input.value
}
//Kelvin ->
if(inputTypeValue === "Kelvin" && resultTypeValue === "Celcius"){
    result.value = Number(input.value) -= 273
}else if(inputTypeValue === "Kelvin" && resultTypeValue === "Fahrenheit"){
    result.value = 1.8(Number(input.value) - 273) +32
}else if(inputTypeValue === "Kelvin" && resultTypeValue === "Kelvin") {
    result.value = input.value
}
//Pound ->
if(inputTypeValue === "Pound" && resultTypeValue === "Kilogram"){
    result.value = Number(input.value) * 0.4536
}else if(inputTypeValue === "Pound" && resultTypeValue === "Gram"){
    result.value = Number(input.value) * 453.592
}else if(inputTypeValue === "Pound" && resultTypeValue === "Pound") {
    result.value = input.value

}
//Kilogram ->
if(inputTypeValue === "Kilogram" && resultTypeValue === "Pound"){
    result.value = Number(input.value) * 2.205
}else if(inputTypeValue === "Kilogram" && resultTypeValue === "Gram"){
    result.value = Number(input.value) * 1000
}else if(inputTypeValue === "Kilogram" && resultTypeValue === "Kilogram") {
    result.value = input.value
}
//Gram ->
if(inputTypeValue === "Gram" && resultTypeValue === "Pound"){
    result.value = Number(input.value) * 0.454
}else if(inputTypeValue === "Gram" && resultTypeValue === "Gram"){
    result.value = input.value 
}else if(inputTypeValue === "Gram" && resultTypeValue === "Kilogram") {
    result.value = Number(input.value) * .0001
}
}