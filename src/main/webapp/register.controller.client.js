(function () {
    var registerBtn = jQuery('#registerBtn');
    registerBtn.click(function () {
        //alert("Register button clicked clicked.");
        var username = $('#username');
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
             username.css('color','red');
             $('p1').html('Passwords dont match');
             alert("Passwords dont match,Please re-enter");   
             password2.val()=" ";
             
          //  document.getElementById("password2").insertAdjacentText("afterend", "Passwords dont match");
           // password2.insertAdjacentText("afterend", "Passwords donot match, Please re-enter");
        }
        


    })
})();

