var output = [];

function sortedNumber(){
  var sortedArray = output.slice().sort(function(a,b){
    return a-b
  });
  return sortedArray;
}


module.exports = {
  outputNumber: function(number){
    output.push(number);
  },
  sortedNumber: function(){
    var sort = sortedNumber();
    console.log(sort);
  }
}
