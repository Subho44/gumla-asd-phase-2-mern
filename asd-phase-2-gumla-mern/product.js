let products = [
    { name: "laptop", price: 76000 },
    { name: "tab", price: 7600 },
    { name: "mobile", price: 6000 },
    
];

//add one new product
function addproduct(x) {
    products.push(x);
    return products;
}
//show all product
function getallproducts() {
    return products;
}
//add multiple products
function muttiproduct(y) {
    products.push(...y);
    return products;
}
//search product price wise
function sp(price) {
    return products.find(
        (x) => x.price === price
    );
}

const d = msg => "hi all";
module.exports = {addproduct,getallproducts,muttiproduct,sp,d}