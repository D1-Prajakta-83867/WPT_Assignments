function isEmpty(numid, msgid, errMsg)
{
  var refToBox = document.getElementById(numid);
  var refToErrMsg = document.getElementById(msgid);

  var dataInBox = refToBox.value;

  var isEmpty = true;

  if(dataInBox != "")
  {
    refToErrMsg.innerText="";
    console.log(dataInBox);
    isEmpty = false;
  } else
  {
    refToErrMsg.innerText = errMsg;
    isEmpty = true;
  }
  return isEmpty;

}
function isNumber(numid, msgid, errMsg)
{
  var refToNum = document.getElementById(numid);
  var refToMsg = document.getElementById(msgid);

  var isNumber = false;

  var N1Text = isNaN(refToNum.value);
  if(N1Text == true)
  {
    refToMsg.innerText = errMsg;
    isNumber = false;
  }else
  {
    refToMsg.innerText = "";
    console.log(refToNum.value);
    isNumber = true;
  }
  return isNumber;
}
function ADD() {
  var refTOtxtN1 = document.getElementById("num1");
  var refTOtxtN2 = document.getElementById("num2");
  var refToresultDiv = document.getElementById("result");

  var isN1Number = false;
  var isN2Number = false;

  var isN1BoxEmpty = isEmpty("num1", "errMsgN1", "Please enter no 1");
  if (isN1BoxEmpty == false) {
    isN1Number = isNumber("num1", "errMsgN1", "Enter valid no");
  }

  var isN2BoxEmpty = isEmpty("num2", "errMsgN2", "Please enter no 2");
  if (isN2BoxEmpty == false) {
    isN2Number = isNumber("num2", "errMsgN2", "Enter valid no");
  }

  if (isN1Number == true && isN2Number == true) {
    

    var n1 = refTOtxtN1.value;
    var n2 = refTOtxtN2.value;
    var n1Data = parseInt(n1);
    var n2Data = parseInt(n2);

    var result = n1Data + n2Data;
    refToresultDiv.value = result;

  } else {
    refToresultDiv.value = "";
  }
}

function SUB() {
  var refTOtxtN1 = document.getElementById("num1");
  var refTOtxtN2 = document.getElementById("num2");
  var refToresultDiv = document.getElementById("result");

  var isN1Number = false;
  var isN2Number = false;

  var isN1BoxEmpty = isEmpty("num1", "errMsgN1", "Please enter no 1");
  if (isN1BoxEmpty == false) {
    isN1Number = isNumber("num1", "errMsgN1", "Enter valid no");
  }

  var isN2BoxEmpty = isEmpty("num2", "errMsgN2", "Please enter no 2");
  if (isN2BoxEmpty == false) {
    isN2Number = isNumber("num2", "errMsgN2", "Enter valid no");
  }

  if (isN1Number == true && isN2Number == true) {
   

    var n1 = refTOtxtN1.value;
    var n2 = refTOtxtN2.value;
    var n1Data = parseInt(n1);
    var n2Data = parseInt(n2);

    var result = n1Data - n2Data;
    refToresultDiv.value = result;

  } else {
    refToresultDiv.value = "";
  }
}
function MUL() {
  var refTOtxtN1 = document.getElementById("num1");
  var refTOtxtN2 = document.getElementById("num2");
  var refToresultDiv = document.getElementById("result");

  var isN1Number = false;
  var isN2Number = false;

  var isN1BoxEmpty = isEmpty("num1", "errMsgN1", "Please enter no 1");
  if (isN1BoxEmpty == false) {
    isN1Number = isNumber("num1", "errMsgN1", "Enter valid no");
  }

  var isN2BoxEmpty = isEmpty("num2", "errMsgN2", "Please enter no 2");
  if (isN2BoxEmpty == false) {
    isN2Number = isNumber("num2", "errMsgN2", "Enter valid no");
  }

  if (isN1Number == true && isN2Number == true) {
    

    var n1 = refTOtxtN1.value;
    var n2 = refTOtxtN2.value;
    var n1Data = parseInt(n1);
    var n2Data = parseInt(n2);

    var result = n1Data * n2Data;
    refToresultDiv.value = result;

  } else {
    refToresultDiv.value = "";
  }
}
function DIV() {
  var refTOtxtN1 = document.getElementById("num1");
  var refTOtxtN2 = document.getElementById("num2");
  var refToresultDiv = document.getElementById("result");

  var isN1Number = false;
  var isN2Number = false;

  var isN1BoxEmpty = isEmpty("num1", "errMsgN1", "Please enter no 1");
  if (isN1BoxEmpty == false) {
    isN1Number = isNumber("num1", "errMsgN1", "Enter valid no");
  }

  var isN2BoxEmpty = isEmpty("num2", "errMsgN2", "Please enter no 2");
  if (isN2BoxEmpty == false) {
    isN2Number = isNumber("num2", "errMsgN2", "Enter valid no");
  }

  if (isN1Number == true && isN2Number == true) {
   

    var n1 = refTOtxtN1.value;
    var n2 = refTOtxtN2.value;
    var n1Data = parseInt(n1);
    var n2Data = parseInt(n2);

    var result = n1Data / n2Data;
    refToresultDiv.value = result;

  } else {
    refToresultDiv.value = "";
  }
}