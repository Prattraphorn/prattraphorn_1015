window.onload = pageLoad;

function pageLoad() {
    let regisForm = document.getElementById("myRegister");

    regisForm.firstname.value = "Prattraphorn";
    regisForm.lastname.value = "Hiruntiwakul";
    regisForm.email.value = "ice.hiruntivakul@gmail.com";

    regisForm.onsubmit = validateForm;
}


function validateForm() {
   
    
    let regisForm = document.forms["myRegister"];
    console.log(regisForm);

    let password = document.forms["myRegister"]["password"][0].value;
    let retypepassword = document.forms["myRegister"]["password"][1].value;

    if(password == retypepassword) {
        return true;
    }
    

    if (!regisForm.firstname.value) {
        document.getElementById("errormsg").innerHTML= "กรุณากรอกชื่อ";
        return false;
    } else if (!regisForm.lastname.value) {
        document.getElementById("errormsg").innerHTML= "กรุณากรอกนามสกุล";
        return false;
    } else if (!regisForm.gender.value) {
        document.getElementById("errormsg").innerHTML= "กรุณาเลือกเพศ";
        return false;
    } else if (!regisForm.bday.value) {
        document.getElementById("errormsg").innerHTML= "กรุณากรอกวันเดือนปีเกิด";
        return false;
    } else if (!regisForm.email.value) {
        document.getElementById("errormsg").innerHTML= "กรุณากรอกอีเมล";
        return false;
    } else if (!regisForm.username.value) {
        document.getElementById("errormsg").innerHTML= "กรุณากรอก username";
        return false;
    } else if (!regisForm.password.value) {
        document.getElementById("errormsg").innerHTML= "รหัสไม่ถูกต้อง";
        return false;
    } else if (!regisForm.re_password.value) {
        document.getElementById("errormsg").innerHTML= "รหัสไม่ถูกต้อง";
        return false;
    } 
            
    alert("ลงทะเบียนสำเร็จ");
    return true;
}
