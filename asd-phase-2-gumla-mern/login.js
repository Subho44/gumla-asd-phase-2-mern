//login validation system

function logindata(email, password) {
    if (email === "a@gmail.com" && password === "1234") {
        return "login success";
    } else {
        return "login fail";
    }
}

//how to calculate total price

function tp(price, qty) {
    return price * qty;
}
module.exports = {logindata,tp}