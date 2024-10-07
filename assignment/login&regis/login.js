window.onload = function() {
    let loginForm = document.getElementById("myLogin");
    loginForm.onsubmit = checkLogin;

    const inputs = loginForm.querySelectorAll('input[type="text"], input[type="password"], input[type="email"]');
    inputs.forEach(input => {
        input.addEventListener('focus', function() {
            input.style.borderBottom = '2px solid #fdd835';
            input.style.backgroundColor = 'rgba(255, 255, 255, 0.1)'; 
        });
        input.addEventListener('blur', function() {
            input.style.borderBottom = '2px solid #fdd835'; 
            input.style.backgroundColor = 'transparent'; 
        });
    });

    const buttons = loginForm.querySelectorAll('input[type="submit"], input[type="reset"]');
    buttons.forEach(button => {
        button.addEventListener('mouseover', function() {
            button.style.transform = 'scale(1.05)'; 
        });
        button.addEventListener('mouseout', function() {
            button.style.transform = 'scale(1)'; 
        });
    });

    loginForm.style.opacity = 0;
    setTimeout(() => {
        loginForm.style.transition = 'opacity 1s';
        loginForm.style.opacity = 1; 
    }, 100);
};

function warningText(message) {
    let loginForm = document.forms["myLogin"];
    loginForm.username.value = ""; 
    loginForm.password.value = ""; 
    alert(message); 
    return false;
}

function checkLogin() {
    let loginForm = document.forms["myLogin"]; 

    const queryString = window.location.search;
    const urlParams = new URLSearchParams(queryString);
    const expectedUsername = urlParams.get("username");
    const expectedPassword = urlParams.get("password");

    if (!loginForm.username.value) {
        return warningText("กรุณากรอกชื่อผู้ใช้");
    } else if (!loginForm.password.value) {
        return warningText("กรุณากรอกรหัสผ่าน");
    } else if (loginForm.username.value !== expectedUsername) {
        return warningText("ชื่อผู้ใช้ไม่ถูกต้อง");
    } else if (loginForm.password.value !== expectedPassword) {
        return warningText("รหัสผ่านไม่ถูกต้อง");
    }

    alert("เข้าสู่ระบบสำเร็จ!");
    return false; 
}
