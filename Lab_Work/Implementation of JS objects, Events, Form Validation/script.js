// var obj={
//     name:"Allyan",
//     age:24,
//     lastname:"khan"
// };

// document.write("Name: "+obj.name+"<br>");
// document.write("Age: "+obj.age+"<br>");
// document.write("Last Name: "+obj.lastname+"<br>");


// let obj_one={

//     firstName:"Allyan",
//     lastName:"Khan",
//     age:24,

//      address:['Mardan','kpk'],
//      skills:{
//         programming:"Python",
//         interest:"AI"
//      }  
// };

// document.write("First Name: "+obj_one.firstName+"<br>");
// document.write("Last Name: "+obj_one.lastName+"<br>");
// document.write("Age: "+obj_one.age+"<br>");
// document.write("Address: "+obj_one.address[0]+"<br>");
// document.write("Skills: "+obj_one.skills.programming+"<br>");
// document.write("Interest: "+obj_one.skills.interest+"<br>");

// var obj_three={
//     name:"Allyan",
//     age:24,
//     lastname:"khan",
// };

// for(var data in obj_three){
// document.write(obj_three[data]+"<br>");
// }


// let obj_four={
//     firstName:"Allyan",
//     lastName:"Khan",
//     age:24,

//     skills:{
//         programming:"Python",
//         interest:"AI"
//      }  
// };

// for(let data in obj_four){
//     if(typeof obj_four[data] === "object"){
//         for(let nestedProperty in obj_four[data]){
//             document.write(obj_four[data][nestedProperty]+"<br>");
//         }
//     } else {
//         document.write(obj_four[data]+"<br>");
//     }
// }

//Task 1
var person={
     firstName: "Allyan",
                lastName: "Khan",
                 age: 20
          };

 document.write("<table border='1'>");
 document.write("<tr><th>Key</th><th>Value</th></tr>");

 for (var key in person) {
 document.write("<tr>");
                    
                
 document.write("<td>" + key + "</td>"); 
                    
 document.write("<td><input type='text' value='" + person[key] + "'></td>"); 
                    
 document.write("</tr>");
       }

document.write("</table>");

//Task 2
function calculate() {
      const val1 = document.getElementById('num1').value;
      const val2 = document.getElementById('num2').value;
      const num1 = parseFloat(val1);
      const num2 = parseFloat(val2);
      const resultBox = document.getElementById('result');

      if (val1 === '' && val2 === '') {
        resultBox.value = '';
      } else {
        resultBox.value = num1 + num2;
      }
    }

//Task 3
function replaceDropdown() {
    var dropdown = document.getElementById('myDropdown');
    var textbox = document.getElementById('myInput');
    dropdown.style.display = 'none';

    textbox.style.display = 'inline-block';
}

//Task 4

function validateForm(event) {

    clearErrors();

    var isValid = true;

    var name = document.getElementById('name').value;
    if (name.trim() === "") {
        document.getElementById('nameError').innerText = "* Name is required";
        isValid = false;
    }

    var genderMale = document.getElementById('genderMale').checked;
    var genderFemale = document.getElementById('genderFemale').checked;
    if (!genderMale && !genderFemale) {
        document.getElementById('genderError').innerText = "* Please select a gender";
        isValid = false;
    }


    var email = document.getElementById('email').value;
    if (email.trim() === "") {
        document.getElementById('emailError').innerText = "* Email is required";
        isValid = false;
    }


    var address = document.getElementById('address').value;
    if (address.trim() === "") {
        document.getElementById('addressError').innerText = "* Address is required";
        isValid = false;
    }


    var loginId = document.getElementById('loginId').value;
    if (loginId.trim() === "") {
        document.getElementById('loginIdError').innerText = "* Login ID is required";
        isValid = false;
    }


    var password = document.getElementById('password').value;
    if (password.trim() === "") {
        document.getElementById('passwordError').innerText = "* Password is required";
        isValid = false;
    }


    var agree = document.getElementById('agree').checked;
    if (!agree) {
        document.getElementById('agreeError').innerText = "* You must agree to the policy";
        isValid = false;
    }

    if (!isValid) {
        event.preventDefault(); 
    }

    return isValid;
}


function clearErrors() {
    var errorSpans = document.getElementsByClassName('error-message');
    for (var i = 0; i < errorSpans.length; i++) {
        errorSpans[i].innerText = "";
    }
}

//Task 5
function displaySelected() {
            var txtBox = document.getElementById("myText");
            var highlightedText = txtBox.value.substring(txtBox.selectionStart, txtBox.selectionEnd);
        
            document.getElementById("outputDiv").innerHTML = highlightedText;
        }