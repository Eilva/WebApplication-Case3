var nameNode= document.getElementById("Name");
var emailNode=document.getElementById("Email");
var dateNode=document.getElementById("Date");
var expNode=document.getElementById("myComments");
nameNode.addEventListener("change", chkName, false);
emailNode.addEventListener("change",chkEmail, false);
dateNode.addEventListener("change", chkDate, false);
expNode.addEventListener("change", chkExp, false);
