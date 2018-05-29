function placeOrder(){
    itemText = '';
    costText = '';
    totalCost = 0;
    types = ['size','meat','veggies','cheese','crust','sauce']
    getOrder(itemText,costText,totalCost,types);
}

function getOrder(itemText,costText,totalCost,types){
    for (i = 0; i < types.length; i++){
        var options = document.getElementsByName(types[i]);
        var come = 0;
        var cove = 0;
        for (j = 0; j < options.length; j++) { 
            if(options[j].checked == true){
                itemText = itemText + options[j].value + "<br/>";
                costText = costText + "$" + options[j].getAttribute("data-cost") + ".00" + "<br/>";
                totalCost = totalCost + Number(options[j].getAttribute("data-cost"));
                console.log(options[j]);
                if(options[j].getAttribute("name") == 'meat'){
                    come++;
                }
                if(options[j].getAttribute("name") == 'veggies'){
                    cove++;
                }
            }
        }
        if(come >= 1){
            itemText = itemText + "One complementary meat selection" + "<br/>";
            costText = costText + "-$1.00" + "<br/>";
            totalCost = totalCost - 1;
        }
        if(cove >= 1){
            itemText = itemText + "One complementary veggie selection" + "<br/>";
            costText = costText + "-$1.00" + "<br/>";
            totalCost = totalCost - 1;
        }
    }
    totals(itemText,costText,totalCost);
}

function totals(itemText,costText,totalCost){
    document.getElementById("itemText").innerHTML = itemText;
    document.getElementById("costText").innerHTML = costText;
    document.getElementById("totalCost").innerHTML = "<h3>" + "$" + totalCost + ".00" + "</h3>";
    document.getElementById("order").style.visibility = "visible";
}