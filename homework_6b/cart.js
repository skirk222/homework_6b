function showProductInCart(product, position) {
    const storedValue1 = JSON.parse(localStorage.getItem("cart"));
    const storedCartArray = storedValue1 ? storedValue1 : []; 

    const cartDiv = document.getElementById('items');
    console.log(product)
    let thecode = '<div class="item">'+ "<img id='harnesspic' src='" +  product.image + "' alt='click a color button!'></img>" +'<h5>'+ product.name +'</h5><h5 id="item-price">'+ "$25" +'</h5><h5 id="quantity">1</h5><h5 id="total-price">$25.00</h5><div></div><div></div><div></div><h5 id="size"><b>Size:</b> ' + product.size + '</h5><div></div><div></div><div></div><div></div><h5 id="color"><b>Color:</b> ' + product.color + '</h5><div></div><div></div><div></div><div></div><div></div><h5 id="gift-wrap"><u>Gift Wrap</u></h5><h5 id="edit"><u>Edit</u></h5><h5 id="remove" onClick = "removeItem('+position+');"><u>Remove</u></h5></div>';
    document.getElementById('items').innerHTML += thecode;
}
function displayCart() {
    const storedValue1 = JSON.parse(localStorage.getItem("cart"));
    const storedCartArray = storedValue1 ? storedValue1 : []; 

    const cartDiv = document.getElementById('cart-container');
    for(let i = 0; i < storedCartArray.length; i++) {
        storedCartArray[i].id = i+1; 
        showProductInCart(storedCartArray[i],i);
    }
}
displayCart();


//Remove item
function removeItem(position){
    cartArray = JSON.parse(localStorage.getItem("cart") || "[]")
    cartArray.splice(position,1);
    console.log(cartArray);
    itemSelectedJSON = JSON.stringify(cartArray);
    localStorage.setItem("cart",itemSelectedJSON);
    // document.getElementById('cart-container').innerHTML += "";
    // displayCart();
    location.reload();
}

// function showProductInCart(product, position) {
//         // Getting item from local storage
//         const storedValue1 = JSON.parse(localStorage.getItem("cartArr"));
//         const cartArray1 = storedValue1 ? storedValue1 : []; 
    
//         const cartDiv = document.getElementById('cart-container');
//         let thecode = '<img src = "pumpkin-spice-roll.jpg" alt= "pumpkin spice Cinnamon roll" class = "roll-pics" id="cart-image"><div id = "cart-text" class = "roll-pics"><b>Pumpkin Spice Cinnamon Roll</b><br><div>Glaze: '+ product.glaze+'</div><br><div class = "roll-text" id = "remove" onClick = "removeItem('+position+');">Remove</div></div><div id = "item-price">$5.99</div><div id="item-quantity">'+ product.quantity+'</div><div id = "item-total">$'+ product.price+'</div>';
//         document.getElementById("cart-container").innerHTML += thecode; 
//     }
    
//     function displayCart() {
//         // Getting item from local storage
//         const storedValue1 = JSON.parse(localStorage.getItem("cartArr"));
//         const cartArray1 = storedValue1 ? storedValue1 : []; 
//         for (let i = 0; i < cartArray1.length; i++) {
//             cartArray1[i].id = i+1; 
//             showProductInCart(cartArray1[i],i);
//         }
//     }
//     displayCart();
    
    
//     //Remove item
//     function removeItem(position) {
//         cartArr = JSON.parse(localStorage.getItem("cartArr") || "[]");
//         cartArr.splice(position,1);
//         //console.log(cartArr);
//         itemSelectedJSON = JSON.stringify(cartArr);
//         localStorage.setItem("cartArr", itemSelectedJSON);
//         //document.getElementById("cart-container").innerHTML = "";
//         //displayCart();
//         location.reload();
//     }