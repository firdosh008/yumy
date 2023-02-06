let bu = document.getElementById("bu");
bu.addEventListener("click", ()=>{
console.log("Button clicked.");
document.getElementById("new-box").innerHTML += " <label for=iteam2>Iteam: </label><input type=text id=iteam2 placeholder= eg:samosa><input type=text  placeholder=Message>";

});