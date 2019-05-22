//function validationForm(){
//  'use strict' // The syntax, for declaring strict mode, was designed to be compatible with older versions of JavaScript.
/*  var name= document.getElementById('Name');
  var email= document.getElementById('Email');
  name.addEventListener("change", chkName, false);
  email.addEventListener("change",chkEmail, false);
  */
//}

function chkName(event){
  var myName= event.currentTarget;
  var pos= myName.value.search(/^[A-Z][a-z]+[\s][A-Z][a-z]+$/);
  if (pos!=0){
    alert("The name you entered    " +myName.value
    +"   is not in the correct form.\n"
    +"Only alphabets and character spaces are allowed.");
    myName.focus();
    myName.select();
    return false;
  }
}

  function chkEmail(event){
    var myEmail=event.currentTarget;
    var pos = myEmail.value.search(/^[\w.-]+@([\w]+\.){1,3}[A-Za-z]{2,3}$/); //^[\w.-]+\@[\w.-]*\.*[\w]*\.*[\w]+\.[\w]{2,3}$
    //var ext= myEmail.value.search();
    if (pos!=0){
      alert("This email address you entered "+ myEmail.value
      +"  is not in correct form"+"Your last domain name should not exceed 3 characters");
      myEmail.focus();
      myEmail.select();
      return false;
    }
  }

  function chkDate(event){
  // document.getElementById("demo").innerHTML = d;   // print on screen for date
    var myDate=new Date(event.currentTarget.value);  //selected date
//    var sd=myDate.toISOString().slice(0,10).replace(/-/g,"");  //format:20190909
    var rightNow = new Date();       //currentdate
  //  var res = rightNow.toISOString().slice(0,10).replace(/-/g,"");//format:20180927
      //  var d1 = Date.parse("20121101"); // check the date
   if(rightNow>=myDate){
     alert("Please select a valid  future date.");
     myDate.focus();
     myDate.select();
     return false;
   }
  }

  function chkExp(event){
     var myExp =event.currentTarget;
     var com= myExp.value.trim();
     if (com==""){
       alert("Please fill in your experience.");
       myExp.focus();
       myExp.select();
       return false;

     }
  }
