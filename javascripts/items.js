var tabObject = [];
var cart = [];

function Items(parentName, name, price, imgSrc, value) {
    this.imgSrc = imgSrc;
    this.name = name;
    this.price = price;
    this.value = value;
}

function Pack(itemData, numberData) {
    this.item = itemData;
    this.numberOfItems = numberData;
    this.totalprice;
}

function fillTheCart(item, qte) {
    var found = false;
    var checker;

    for (checker = 0; checker < cart.length && !found; checker++) {
        if (cart[checker].item == item) {
            found = true
        }
    }

    if (found) {
        cart[checker - 1].numberOfItems += qte;
        cart[checker - 1].totalPrice = cart[checker - 1].item.price * cart[checker - 1].numberOfItems;
        console.log("Ajout de x" + qte + " " + item.name + " au panier.");
        console.log(cart[checker - 1].item.name + " : x" + cart[checker - 1].numberOfItems + " " + cart[checker - 1].item.price + " [" + cart[checker - 1].totalPrice + " $]");
        updateCartFrame(checker - 1, cart[checker - 1]);
    } else {
        cart.push(new Pack(item, qte));
        cart[cart.length - 1].totalPrice = cart[cart.length - 1].item.price * cart[cart.length - 1].numberOfItems;
        console.log("Ajoute d'un nouvel item : " + cart[cart.length - 1].item.name + " x" + cart[cart.length - 1].numberOfItems);
        console.log(cart[cart.length - 1].item.name + " : x" + cart[cart.length - 1].numberOfItems + " " + cart[cart.length - 1].item.price + " [" + cart[cart.length - 1].totalPrice + " $]");

        tabCartFrame[tabCartFrame.length] = new CartFrame("basket", cart[cart.length - 1], cart.length - 1);
    }


}

function buyItem() {
    var btnObj = document.activeElement;
    var id = btnObj.getAttribute("btnId");
    var item = tabObject[id];
    var qte = parseInt(btnObj.parentNode.getElementsByTagName('input')[0].value);
    var price = item.price;
    var total;

    if (qte != "" && qte != 0 && !isNaN(qte)) {
        total = qte * price;
        fillTheCart(item, qte);
        updateTotalFrame(cart);
    }
}

function removeItem() {
    console.log("Item removed");
    var id = btnObj.getAttribute("delete-btn");
    var trashCan = document.getElementById()
    var line = trashCan.parentNode.parentNode;
    console.log(line);
    var value = line.getAttribute("lineId");
    cart.splice(index, 1);
    updateTotalFrame(cart);
    line.remove();
}

