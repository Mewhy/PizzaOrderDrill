function placeOrder(itemText,costText,totalCost,types){
    itemText = '';
    costText = '';
    totalCost = 0;
    types = ['size','meat','veggie','cheese','crust','sauce']
    for (i = 0; i < types.length; i++){
        var options = document.getElementsByName(types[i]);
        var comp = 0;
        for (j = 0; j < options.length; j++) { 
            if(options[j].checked == true){
                itemText = itemText + options[j].value + "<br/>";
                costText = costText + "$" + options[j].getAttribute("data-cost") + ".00" + "<br/>";
                totalCost = totalCost + Number(options[j].getAttribute("data-cost"));
                setname = options[j].getAttribute("name");
                if(setname == 'meat' || setname == 'veggie'){
                    comp++;
                }
            }
        }
        if(comp >= 1){
            itemText = itemText + "One complementary " + types[i] + " selection" + "<br/>";
            costText = costText + "-$1.00" + "<br/>";
            totalCost = totalCost - 1;
        }
    }
    document.getElementById("itemText").innerHTML = itemText;
    document.getElementById("costText").innerHTML = costText;
    document.getElementById("totalCost").innerHTML = "<h3>" + "$" + totalCost + ".00" + "</h3>";
    document.getElementById("order").style.visibility = "visible";
}