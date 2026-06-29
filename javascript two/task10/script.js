let product = {
    name: "Laptop",
    price: 50000,
    brand: "ASUS",
    stock: true
};


console.log("Product Name: " + product.name);
console.log("Brand: " + product.brand);
console.log("Price: " + product.price);
console.log("Stock Available: " + (product.stock ? "Yes" : "No"));

document.writeln("Product Name: " + product.name + "<br>");
document.writeln("Brand: " + product.brand + "<br>");
document.writeln("Price: " + product.price + "<br>");
document.writeln("Stock Available: " + (product.stock ? "Yes" : "No") + "<br><br>");