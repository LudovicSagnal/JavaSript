let euroSelector = document.getElementById("euro");
let francSelector = document.getElementById("franc");

euroSelector.addEventListener("input", function(){
    let euro = euroSelector.value;
    francSelector.value = parseFloat(euro*1.06).toFixed(2);
})

francSelector.addEventListener("input", function(){
    let franc = francSelector.value;
    euroSelector.value = parseFloat(franc/1.06).toFixed(2);
})