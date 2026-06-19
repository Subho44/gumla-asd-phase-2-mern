const var1 = require("./var1");
const login = require("./login");
const product = require("./product");

console.log(var1.pname + " - " + var1.siteurl + " - " + var1.location);
console.log(login.logindata("a@gmail.com", "12345"));
console.log(login.tp(1000, 10));

console.log("all products");
console.log(product.getallproducts());

//add one new product
console.log("after adding one product");
console.log(product.addproduct({
    name: "headphone",
    price:789
}));

//added multiple product
console.log("after adding multiple product");
console.log(product.muttiproduct([
    {
    name: "data1",
    price:789
    },
    {
    name: "data2",
    price:789
    },
   {
    name: "data3",
    price:789
    },
]

));
//search product price
console.log("search product");
console.log(product.sp(6000));

//arrow
console.log(product.d());