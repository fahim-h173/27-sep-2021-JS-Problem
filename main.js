function shopingCost() {

    var Mobile=12000;
    var Laptop=50000;
    var watch=1500;
    document.write("Mobile Price is: "+Mobile  + ' TK'+  '<br>'+'<br>');
    document.write("Laptop Price is: "+Laptop  + ' TK'+  '<br>'+'<br>');
    document.write("Watch Price is: "+watch  + ' TK'+  '<br>'+'<br>');
    
    var totalCost=Mobile+Laptop+watch;
    return totalCost;
}
document.write("Total Shopping Cost is: " + shopingCost() + ' TK');
document.write('<br>')