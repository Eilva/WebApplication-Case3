window.onload=function(){
  var javaNode= document.getElementById("java");
  var cafeNode=document.getElementById("cafe");
  var capNode= document.getElementById("cap");
  javaNode.addEventListener("change",chkJava,false);
  cafeNode.addEventListener("change",chkCafe,false);
  capNode.addEventListener("change",chkCap,false);
  var subtotalJava =document.getElementById("subtotalJava");
  var subtotalCafe =document.getElementById("subtotalCafe");
  var subtotalCappuccino =document.getElementById("subtotalCappuccino");
  var total = document.getElementById("total");
}


function chkJava(event){
  subtotalJava.value = parseFloat(javaNode.value* 2.00).toFixed(2);
   tot();
  }



function chkCafe(event){
    if(document.getElementById("CafeSingle").checked==true){
    subtotalCafe.value=parseFloat(cafeNode.value*2.00).toFixed(2);
    tot();
      }
   else if(document.getElementById("CafeDouble").checked==true){
    subtotalCafe.value=parseFloat(cafeNode.value*3.00).toFixed(2);
    tot();
    }
  }


function chkCap(event){
    if(document.getElementById("CapSingle").checked==true){
    subtotalCappuccino.value=parseFloat(capNode.value*4.75).toFixed(2);
    tot();
    }
    else if(document.getElementById("CapDouble").checked==true){
    subtotalCappuccino.value=parseFloat(capNode.value*5.75).toFixed(2);
    tot();
    }
  }

function tot(){
  temp.value=subtotalJava.value+subtotalCafe.value+subtotalCappuccino.value;
  total.value parseFloat(temp.value).toFixed(2);
}
