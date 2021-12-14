const emailRegEx = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;

module.exports.validateSignUpData = (signUpData) => {
    const { email, password, confirmPassword, displayName } = signUpData;
    //validate
    if (email === "" || password === "" || confirmPassword === "" || displayName === "") {
        return {
            validate: false,
            error: "Không được bỏ trống !"
        };
    } else if (!emailRegEx.test(email)) {
        return {
            validate: false,
            error: "Email không đúng định dạng !"
        }
    } else if (confirmPassword != password) {
        return {
            validate: false,
            error: "Không đúng password !"
        }
    } else if (displayName.length > 5) {
        return {
            validate: false,
            error: "Tên hiển thị phải trên 5 kí tự !"
        }
    } else {
        return {
            validate: true,
            error: null,
        };
    }
};

module.exports.validateSignInData = (signInData) => {
    const { email, password } = signInData;
    if (email === "" || password === "") {
        return {
            validate: false,
            error: "Không được bỏ trống !",
        }
    } else if (!emailRegEx.test(email)) {
        return {
            validate: false,
            error: "Email không đúng định dạng !"
        }
    } else {
        return {
            validate: true,
            error: null,
        };
    }
}