function placeOrder(){
    itemText = '';
    costText = '';
    totalCost = 0;
    getSize(itemText,costText,totalCost);
}

function getSize(itemText,costText,totalCost){
    var sizes = document.getElementsByName("size");
    for (i = 0; i < sizes.length; i++) { 
        if(sizes[i].checked == true){
            itemText = itemText + sizes[i].value + "<br/>";
            costText = costText + "$" + sizes[i].getAttribute("data-cost") + ".00" + "<br/>";
            totalCost = totalCost + Number(sizes[i].getAttribute("data-cost"));
        }
    }
    getMeat(itemText,costText,totalCost)
}

function getMeat(itemText,costText,totalCost){
    var meats = document.getElementsByName("meat");
    var commeat = 0;
    for (i = 0; i < meats.length; i++) { 
        if(meats[i].checked == true){
            commeat++;
            itemText = itemText + meats[i].value + "<br/>";
            costText = costText + "$" + meats[i].getAttribute("data-cost") + ".00" + "<br/>";
            totalCost = totalCost + Number(meats[i].getAttribute("data-cost"));
        }
    }
    if(commeat >= 1){
        itemText = itemText + "One Complementary Meat Selection" + "<br/>";
        costText = costText + "-$1.00" + "<br/>";
        totalCost = totalCost - 1;
    }
    getVeggies(itemText,costText,totalCost)
}

function getVeggies(itemText,costText,totalCost){
    var veggies = document.getElementsByName("veggies");
    var comveg = 0;
    for (i = 0; i < veggies.length; i++) { 
        if(veggies[i].checked == true){
            comveg++;
            itemText = itemText + veggies[i].value + "<br/>";
            costText = costText + "$" + veggies[i].getAttribute("data-cost") + ".00" + "<br/>";
            totalCost = totalCost + Number(veggies[i].getAttribute("data-cost"));
        }
    }
    if(comveg >= 1){
        itemText = itemText + "One Complementary Veggie Selection" + "<br/>";
        costText = costText + "-$1.00" + "<br/>";
        totalCost = totalCost - 1;
    }
    getCheese(itemText,costText,totalCost)
}

function getCheese(itemText,costText,totalCost){
    var cheeses = document.getElementsByName("cheese");
    for (i = 0; i < cheeses.length; i++) { 
        if(cheeses[i].checked == true){
            itemText = itemText + cheeses[i].value + "<br/>";
            costText = costText + "$" + cheeses[i].getAttribute("data-cost") + ".00" + "<br/>";
            totalCost = totalCost + Number(cheeses[i].getAttribute("data-cost"));
        }
    }
    getCrust(itemText,costText,totalCost)
}

function getCrust(itemText,costText,totalCost){
    var crusts = document.getElementsByName("crust");
    for (i = 0; i < crusts.length; i++) { 
        if(crusts[i].checked == true){
            itemText = itemText + crusts[i].value + "<br/>";
            costText = costText + "$" + crusts[i].getAttribute("data-cost") + ".00" + "<br/>";
            totalCost = totalCost + Number(crusts[i].getAttribute("data-cost"));
        }
    }
    getSauce(itemText,costText,totalCost)
}

function getSauce(itemText,costText,totalCost){
    var sauces = document.getElementsByName("sauce");
    for (i = 0; i < sauces.length; i++) { 
        if(sauces[i].checked == true){
            itemText = itemText + sauces[i].value + "<br/>";
            costText = costText + "$" + sauces[i].getAttribute("data-cost") + ".00" + "<br/>";
            totalCost = totalCost + Number(sauces[i].getAttribute("data-cost"));
        }
    }
    totals(itemText,costText,totalCost)
}

function totals(itemText,costText,totalCost){
    document.getElementById("itemText").innerHTML = itemText;
    document.getElementById("costText").innerHTML = costText;
    document.getElementById("totalCost").innerHTML = "<h3>" + "$" + totalCost + ".00" + "</h3>";
    document.getElementById("order").style.visibility = "visible";
}