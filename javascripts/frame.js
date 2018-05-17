var tabBoxFrame = [];
var tabCartFrame = [];

function BoxFrame(parentName, name, price, imgSrc, value) {
    var parent = document.getElementById(parentName);

    var mainPlate = document.createElement("div");
    mainPlate.setAttribute("class", "item");

    //Creating Plate kid
    var img = document.createElement("img");
    img.setAttribute("src", imgSrc);

    var divName = document.createElement("div");
    divName.setAttribute("class", "item-name");
    divName.innerHTML = name;

    var divPrice = document.createElement("div");
    divPrice.setAttribute("class", "item-price");
    divPrice.innerHTML = price + " $";

    var divBuy = document.createElement("div");
    divBuy.setAttribute("class", "item-buy");

    var label = document.createElement("label");
    label.innerHTML = "Qté";

    var input = document.createElement("input");
    input.setAttribute("type", "text");
    input.setAttribute("inputId", value);

    var btn = document.createElement("button");
    btn.setAttribute("btnId", value)
    btn.onclick = buyItem;
    btn.innerHTML = "Acheter";

    divBuy.appendChild(label);
    divBuy.appendChild(input);
    divBuy.appendChild(btn);

    mainPlate.appendChild(img);
    mainPlate.appendChild(divName);
    mainPlate.appendChild(divPrice);
    mainPlate.appendChild(divBuy);

    parent.append(mainPlate);
}

function CartFrame(parentName, pack, id) {
    this.parentNode = document.getElementById(parentName);
    this.tbody = this.parentNode.getElementsByTagName("tbody")[0];

    this.tr = document.createElement("tr");
    this.tr.setAttribute("lineId", id);

    /* TD-MAIN */
    this.tdMain = document.createElement("td");

    this.trashCan = document.createElement("span");
    this.trashCan.className = "delete-btn";
    this.trashCan.setAttribute("data-icon", "D");
    this.trashCan.setAttribute("title", "Supprimer l'article du panier");
    this.trashCan.setAttribute("id", Math.random());
    this.trashCan.onclick = removeItem;
    this.tdMain.appendChild(this.trashCan);

    this.tdMain.innerHTML += " " + pack.item.name + " (";

    this.inputQty = document.createElement("input");
    this.inputQty.setAttribute("type", "text");
    this.inputQty.setAttribute("value", pack.numberOfItems);
    this.inputQty.setAttribute("id", Math.random());
    this.tdMain.appendChild(this.inputQty);

    this.tdMain.innerHTML += ")";

    /* TD-PRICE */
    this.tdPrice = document.createElement("td");
    this.tdPrice.innerHTML = (pack.item.price * pack.numberOfItems) + "$";

    this.tr.appendChild(this.tdMain);
    this.tr.appendChild(this.tdPrice);

    this.tbody.appendChild(this.tr);
}

function updateCartFrame(id, pack) {
    cartFrame = tabCartFrame[id];
    cartFrame.tdPrice.innerHTML = (pack.item.price * pack.numberOfItems) + "$";
    var inputQty = document.getElementById(cartFrame.inputQty.id);
    inputQty.setAttribute("value", pack.numberOfItems);
}

function updateTotalFrame(cart) {
    var TVQ = 0.09975;
    var TPS = 0.05;

    var total = 0;
    var subTotal = 0;
    var taxeTVQ = 0;
    var taxeTPS = 0;

    var bigNode = document.getElementById("total").getElementsByTagName("tbody")[0];

    var subTotalNode = bigNode.getElementsByTagName("tr")[0].getElementsByTagName("td")[1];
    var taxeTPSNode = bigNode.getElementsByTagName("tr")[1].getElementsByTagName("td")[1];
    var taxeTVQNode = bigNode.getElementsByTagName("tr")[2].getElementsByTagName("td")[1];
    var totalNode = bigNode.getElementsByTagName("tr")[3].getElementsByTagName("td")[1];

    for (var adder = 0; adder < cart.length; adder++) {
        subTotal += cart[adder].numberOfItems * cart[adder].item.price;
    }

    taxeTVQ = subTotal * TVQ;
    taxeTPS = subTotal * TPS;
    total = subTotal + taxeTVQ + taxeTPS;

    subTotalNode.innerHTML = subTotal.toFixed(2) + "$";
    taxeTPSNode.innerHTML = taxeTPS.toFixed(2) + "$";
    taxeTVQNode.innerHTML = taxeTVQ.toFixed(2) + "$";
    totalNode.innerHTML = total.toFixed(2) + "$";
}


