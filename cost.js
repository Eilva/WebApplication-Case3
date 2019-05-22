window.onload = function(){
  var cutomJavaQuan = document.getElementById("cutomJavaQuan");
  var cutomJavaSubTotal = document.getElementById("cutomJavaSubTotal");
  cutomJavaQuan.addEventListener("change", onChangeJavaQuan, false);

  var cutomCafeQuan = document.getElementById("cutomCafeQuan");
	var cutomCafeSubTotal = document.getElementById("cutomCafeSubTotal");
	cutomCafeQuan.addEventListener("change", onChangeCafeQuan, false);

	var cutomCappQuan = document.getElementById("cutomCappQuan");
	var cutomtCappSubTotal = document.getElementById("cutomtCappSubTotal");
	cutomCappQuan.addEventListener("change", onChangeCappQuan, false);

	var cutomTotal = document.getElementById("cutomTotal");
}

function onChangeJavaQuan(event){
  updateJavaSubTotal();
  updateTotal();
}

function onChangeCafeQuan(event){
	updateCafeSubTotal();
	updateTotal();
}

function onChangeCappQuan(event){
	updateCappSubTotal();
	updateTotal();
}

function getJavaSubTotal(){
  return parseFloat(cutomJavaQuan.value * 2.0);
}

function getCafeSubTotal(){
  var selectedVal = getSelectedVal('cafe');
  var unitPrice;
  switch (selectedVal){
    case "SingleCafe":
    unitPrice = 2.0;
    break;
    case "DoubleCafe":
    unitPrice = 3.0;
    break;
  }
  return parseFloat(cutomCafeQuan.value * unitPrice);
}

function getCappSubTotal(){
  var selectedVal = getSelectedVal('cappuccino');
  var unitPrice;
  switch (selectedVal){
    case "SingleCappu":
    unitPrice = 4.75;
    break;
    case "DoubleCappu":
    unitPrice = 5.75;
    break;
  }
  return parseFloat(cutomCappQuan.value * unitPrice);
}

function updateJavaSubTotal(){
  cutomJavaSubTotal.value = getJavaSubTotal().toFixed(2);
}

function updateCafeSubTotal(){
  cutomCafeSubTotal.value = getCafeSubTotal().toFixed(2);
}

function updateCappSubTotal(){
  cutomtCappSubTotal.value = getCappSubTotal().toFixed(2);
}

function updateTotal(){
  cutomTotal.value = (getJavaSubTotal() + getCafeSubTotal() + getCappSubTotal()).toFixed(2)
}

function getSelectedVal(radioName){
  var radioCafe = document.getElementsByName(radioName);
  for(var i = 0; i < radioCafe.length; i++){
    if(radioCafe[i].checked){
      return radioCafe[i].value;
    }
  }
  return -1;
}
