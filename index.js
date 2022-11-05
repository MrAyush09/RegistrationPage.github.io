function clearErrors()
{
    errors = document.getElementsByClassName('formerror');
    for(let item of errors)
    {
        item.innerHTML = "";
    }
}
function seterror(id, error){
    alert(id);
    alert(error)
    element = document.getElementById(id);
    alert(element)
    element.getElementsByClassName('formerror')[0].innerHTML = error;

}
function onsubmit(){
    alert("1")

    alert("Yours details have been saved successfully! ")
    let fname = document.querySelector('#fname').value;
}

function validateForm(){
    var returnval = true;
    clearErrors();   
    var fname = document.forms.regeistration.fname.value; 
    var lname = document.forms.regeistration.lname.value; 
    var email = document.forms.regeistration.email.value; 
    var phone = document.forms.regeistration.phone.value; 
    var country = document.forms.regeistration.country.value;
    var regEmail=/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/g;  //for Email Validation.
    var regName =  /^[A-Za-z]+$/;  


    submit= true;
    if (fname.length<3 || !regName.test(fname)){
            nameError = "Please Enter Proper First Name";
            document.getElementById("fname_error").innerHTML = nameError;
        submit = false;
    }
    if (lname.length<3){
        nameError = "Please Enter Proper Last Name";
        document.getElementById("lname_error").innerHTML = nameError;
        submit =  false;
    }
    if (email.length = 0 || !regEmail.test(email)){
        nameError = "Please Enter Proper Email id";
        document.getElementById("email_error").innerHTML = nameError;
        submit =  false;
    }
    if (phone.length != 10){
        nameError = "Please Enter Proper Mobile No";
        document.getElementById("mobile_error").innerHTML = nameError;
        submit =  false;
    }
    if(country == null || country == "" || country == undefined ){
        nameError = "Please Select at least one country";
        document.getElementById("country_error").innerHTML = nameError;
        submit = false;
    }
    if(submit == true){
        alert("Your detail have been saved successfully");
    }
    return submit;
}




