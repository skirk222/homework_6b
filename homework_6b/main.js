function Item (image, name, color, size, price) {
    this.image = image;
    this.name = name;
    this.color = color;
    this.size = size;
    this.price = price;
}

var cartArray;

function updateCartTab() {

        cartArray = JSON.parse(localStorage.getItem("cart") || "[]");
        let cartNum = cartArray.length;
        if (cartNum > 0){
           document.getElementById('cart-label').href = "cart.html";
            document.getElementById('cart-label').textContent = "Cart("+cartNum+ ")";
            
        } else {
           document.getElementById('cart-label').textContent = "Cart";
        }
    }

    updateCartTab ();

function imageSelect () {
    var imageSelected = document.getElementById("harnesspic").src;
    // console.log("name: " + (nameSelected));
    return imageSelected;
}

function nameSelect () {
    var nameSelected = document.getElementById("product-name").textContent;
    // console.log("name: " + (nameSelected));
    return nameSelected;
}

function colorSelect () {
    var colorSelected = document.getElementById("color-dropdown").value;
    colorSelected = colorSelected.split(" ")[0];
    document.getElementById("harnesspic").src = colorSelected + ".png";
    // console.log(colorSelected);
    return colorSelected;
}

function sizeSelect () {
    var sizeSelected = document.getElementById("size-dropdown").value;
    // console.log(sizeSelected);
    return sizeSelected;
}

function priceSelect () {
    var priceSelected = document.getElementById("product-price").textContent;
    // console.log("price: " + (priceSelected));
    return priceSelected;
}


function addtoCart () {
    let imageSelected = imageSelect();
    let nameSelected = nameSelect();
    let colorSelected = colorSelect();
    let sizeSelected = sizeSelect();
    let priceSelected = priceSelect();
    let itemSelected = new Item (imageSelected, nameSelected, colorSelected, sizeSelected, priceSelected);
    console.log(localStorage.getItem("cart"))
    cartArray = JSON.parse(localStorage.getItem("cart") || "[]")
    cartArray.push(itemSelected);
    console.log(cartArray);
    itemSelectedJSON = JSON.stringify(cartArray);
    localStorage.setItem("cart",itemSelectedJSON);
}

