(function (globals) {
    'use strict';
    $(() => {
        $('#password').bind('keyup', function () {
            let securityLevel = 0;
            let password = $(this).val();
            if(password.length != 0){
                $(this).addClass('notEmpty');
            }else{
                $(this).removeClass('notEmpty');
            }

            // 1 lower char
            let lowerRegex = /[a-z]/g;
            if (password.match(lowerRegex)) {
                securityLevel += 1;
            }
            // 1 upper char
            let upperRegex = /[A-Z]/g;
            if (password.match(upperRegex)) {
                securityLevel += 1;
            }
            // 1 number char
            let numberRegex = /[0-9]/g;
            if (password.match(numberRegex)) {
                securityLevel += 1;
            }
            // 1 special char
            let noSpecialRegex = /^[0-9|a-zA-Z]*$/g;
            if (!password.match(noSpecialRegex)) {
                securityLevel += 1;
            }
            // 8 chars
            if (password.length > 8) {
                securityLevel += 1;
            }

            // change security level
            $('#security_level').attr('class', 'level' + securityLevel);
        });
    });
})();