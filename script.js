var random = Math.floor(Math.random()*10)+1
console.log(random)
var inputbox = document.getElementById("inputbox")
var b = document.getElementById("para")
function msg()
{
    var a = Number(inputbox.value)
    if(random == a)
    {
        b.textContent = "Right"
    }
    else
    {
        b.textContent  = "Wrong"
    }
}