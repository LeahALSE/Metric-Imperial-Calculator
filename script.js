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

if(inputTypeValue === "Meter" && resultTypeValue === "Kilometer") {
    result.value = Number(input.value) * 0.001;
}else if(inputTypeValue === "Meter" && resultTypeValue === "Centimeter"){
    result.value = Number(input.value) * 100;
}else if(inputTypeValue === "Meter" && resultTypeValue === "Meter") {
    result.value = input.value
}/* else if(inputTypeValue === "Meter" && resultTypeValue === "Foot") {
    result.value = Number(input.value) * 3.28;
}else if(inputTypeValue === "Meter" && resultTypeValue ==="Yard" ){
    result.value = Number(input.value) * 0.9144;
} */

if(inputTypeValue === "Kilometer" && resultTypeValue === "Meter"){
    result.value = Number(input.value) * 1000;
}else if(inputTypeValue === "Kilometer" && resultTypeValue === "Centimeter"){
    result.value = Number(input.value) * 100000;
}else if(inputTypeValue === "Kilometer" && resultTypeValue === "Kilometer") {
    result.value = input.value
}/*else if(inputTypeValue === "Kilometer" && resultTypeValue === "Mile") {
    result.value = Number(input.value) % 1609.344;
}else if(inputTypeValue === "Kilometer" && resultTypeValue === "Yard") {
    result.value = Number(input.type) * 1093.61;
} */


if(inputTypeValue === "Centimeter" && resultTypeValue === "Meter") {
    result.value  = Number(input.value) * .01
}else if (inputTypeValue === "Centimer" && resultTypeValue === "Kilometer") {
    result.value = Number(input.value) * .00001
}else if(inputTypeValue === "Centimer" && resultTypeValue === "Centimeter") {
    result.value = input.value
}
}