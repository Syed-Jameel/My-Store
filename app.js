
var categories = ["Select a Category", "Electronics", "Footware", "Fashion"];
var electronics = ["Select Electronics", "laptop", "mobile", "speaker"];
var footware = ["Select Footware", "shoe", "sandal", "loafer"];
var fashion = ["Select Fashion", "backpack", "jacket", "blazer"];
var products = [];

var data = [{ Name: "laptop", Price: "45000 &#8377;", Photo: "./images/laptop.jpg" },
{ Name: "mobile", Price: "15000 &#8377;", Photo: "./images/mobile.jpg" },
{ Name: "speaker", Price: "8000 &#8377;", Photo: "./images/speaker.jpg" },
{ Name: "shoe", Price: "5000 &#8377;", Photo: "./images/shoe.jpg" },
{ Name: "sandal", Price: "4000 &#8377;", Photo: "./images/sandal.jpg" },
{ Name: "loafer", Price: "4500 &#8377;", Photo: "./images/loafer.jpg" },
{ Name: "backpack", Price: "5500 &#8377;", Photo: "./images/backpack.jpg" },
{ Name: "jacket", Price: "9999 &#8377;", Photo: "./images/jacket.jpg" },
{ Name: "blazer", Price: "6000 &#8377;", Photo: "./images/blazer.jpg" }];

function LoadProducts() {
    document.getElementById("lstProducts").innerHTML = "";
    for (var item of products) {
        var option = document.createElement("option");
        option.text = item;
        option.value = item;
        document.getElementById("lstProducts").appendChild(option);
    }
}

function LoadCategories() {
    for (var item of categories) {
        var option = document.createElement("option");
        option.text = item;
        option.value = item;
        document.getElementById("lstCategories").appendChild(option);
    }
}

function CategoryChange() {
    var categoryName = document.getElementById("lstCategories").value;
    switch (categoryName) {
        case "Electronics":
            products = electronics;
            LoadProducts();
            break;

        case "Footware":
            products = footware;
            LoadProducts();
            break;

        case "Fashion":
            products = fashion;
            LoadProducts();
            break;
    }
}
var selectedProduct;
function ProductChange() {
    var productName = document.getElementById("lstProducts").value;
    selectedProduct = data.find(function (product) {
        return product.Name == productName;
    });
    document.getElementById("pic").src = selectedProduct.Photo;
    document.getElementById("productName").innerHTML = selectedProduct.Name;
    document.getElementById("productPrice").innerHTML = selectedProduct.Price;
}

var cartItems = [];
function GetCartItems() {
    document.getElementById("count").innerHTML = cartItems.length;
}

function AddToCartClick() {
    cartItems.push(selectedProduct);
    console.log(cartItems);
    GetCartItems();
}

function YourCartClick() {
    document.querySelector("table").style.display = "block";
    document.querySelector("tbody").innerHTML = "";
    for (var item of cartItems) {
        var tr = document.createElement("tr");
        var tdName = document.createElement("td");
        var tdphoto = document.createElement("td");
        var tdprice = document.createElement("td");

        tdName.innerHTML = item.Name;
        tdprice.innerHTML = item.Price;

        var img = document.createElement("img");
        img.src = item.Photo;
        img.style.width = "50px";
        img.style.height = "50px";

        tdphoto.appendChild(img);

        tr.appendChild(tdName);
        tr.appendChild(tdphoto);
        tr.appendChild(tdprice);

        document.querySelector("tbody").appendChild(tr);
    }
}
function bodyload() {
    LoadCategories();
    GetCartItems();
}