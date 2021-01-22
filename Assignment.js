

// 01 kilometerToMeter

function kilometerToMeter(Km){
    var meter = Km/1000
    // var meter = km * .001 
    return meter;
}
var mtr = kilometerToMeter(5000);
console.log(mtr);
var mtr2 = kilometerToMeter(25000);
console.log(mtr2);

//02 budgetCalculator

function budgetCalculator(clock, mobile, leptop) {
    var result = clock*5  +  mobile*5  +  leptop*5;
    //Purchase Quantity is = 5
    return result;
}
var totalPrice = budgetCalculator(50, 100, 500);
console.log(totalPrice);

// 04 megaFriend

function megaFriend (array) {
    var longWord = "";
  
    array.forEach(function(longW) {
      if(longW.length > longWord.length) {
        longWord = longW;
      }
    });
  
    return longWord;
  }
  
  var longW = megaFriend  (["Messi","Ronaldu","Shakib", "Tamim", "Mushfiqur", "Liton", "Reza", ]);
  console.log(longW); 







