document.onmouseover = Pres;
document.onmouseout = Zpet;

function Pres()
{
if (window.event.srcElement.className == "menu")
window.event.srcElement.className = "menupres";
}

function Zpet()
{
if (window.event.srcElement.className == "menupres")
window.event.srcElement.className = "menu";
}