(function () {
    var registerBtn = jQuery('#registerBtn');
    registerBtn.click(function () {
        alert("Register button clicked");
        var username = $('#username');
        username.css('color','red');
        var password = jQuery('#password');
        var password2 = jQuery('#password2');
        if (password.val() == password2.val()) {
        //    document.getElementById("password2").insertAdjacentText("afterend", "Passwords match");
            var passwordobj = password.val();
            var usernameobj = username.val();

            var userobj = {
                username: usernameobj,
                password: passwordobj
            }
        //    console.log(userobj);


        }
        else {
            //  alert('passwords dont match');
          //  document.getElementById("password2").value = "";
          //  document.getElementById("password2").insertAdjacentText("afterend", "Passwords dont match");
            password2.insertAdjacentText("Passwords donot match, Please re-enter");
        }
        


    })
})();
