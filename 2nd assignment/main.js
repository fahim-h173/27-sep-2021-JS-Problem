function hotelCost(day) {
    var fistTenDays=100;
    var secoundTenDays=80;
    var normalDays=50;


    if (day<=10) {

        var firstCost=day*fistTenDays;
        return firstCost;
    }
    else if (day<=20){
        var firstTenDaysCost=10*fistTenDays;
        var oldDays=day-10;
        var secondTenDaysCost=oldDays*secoundTenDays;
        var secoundConst=firstTenDaysCost+secondTenDaysCost;
        return secoundConst;
    }else{
        var firstTenDaysCost=10*fistTenDays;
        var secondTenDaysCost=oldDays*secoundTenDays;
        var oldDays=day-20;
        var thirdTenDayCost=oldDays*normalDays;
        var totalCost= firstTenDaysCost+secondTenDaysCost+thirdTenDayCost
        return totalCost;
    }
};

document.write("Total Hotel Cost is: " + hotelCost(11) + " TK");