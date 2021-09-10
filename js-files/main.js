// Swapping the two bars
function swap(el1, el2) {
    // console.log('In swap()');
    let temp = el1.style.height;
    el1.style.height = el2.style.height;
    el2.style.height = temp;
}
// Disabling sorting buttons while sorting is going on
function disableSortBtns() {
  document.getElementsByClassName("bubble-sort")[0].disabled = true;
  document.getElementsByClassName("insertion-sort")[0].disabled = true;
  document.getElementsByClassName("merge-sort")[0].disabled = true;
  document.getElementsByClassName("quick-sort")[0].disabled = true;
  document.getElementsByClassName("selection-sort")[0].disabled = true;
}
// Enabling sorting buttons when sorting is done
function enableSortBtns() {
  document.getElementsByClassName("bubble-sort")[0].disabled = false;
  document.getElementsByClassName("insertion-sort")[0].disabled = false;
  document.getElementsByClassName("merge-sort")[0].disabled = false;
  document.getElementsByClassName("quick-sort")[0].disabled = false;
  document.getElementsByClassName("selection-sort")[0].disabled = false;
}

// Disabling generate array button while sorting is going on
function disableGenArray() {
  document.getElementsByClassName("Generate-array")[0].disabled = true;
}

// Enabling generate array button when sorting is done
function enableGenArray() {
  document.getElementsByClassName("Generate-array")[0].disabled = false;
}

// Disabling size slider while sorting is going on
function disableszSlider(){
  document.getElementById("arr_size").disabled = true;
}

// Enabling size slider while sorting is going on
function enableszSlider(){
  document.getElementById("arr_size").disabled = false;
}

// Timeout fuction for promise to asynchronous functions
function timeout(ms) {
    return new Promise(resolve => setTimeout(resolve, ms));
}

var arrSize = document.getElementById("arr_size");
arr_size.addEventListener("input",function(){
  // console.log(typeof(no_of_bar));
  // console.log(no_of_bar);
  generateArray(arrSize.value);
});

var delay;
var speedAnimation = document.getElementById("fast");
speedAnimation.addEventListener("input",function(){
  console.log(speedAnimation.value);
  console.log(typeof(speedAnimation.value));
  delay = 520-speedAnimation.value;
  console.log(delay);
});

generateArray();

// Generating new array
var x  = parseInt(arrSize.value)
function generateArray(x) {
  delPrevArr();
  var array = [];
  for (var i = 0; i < arrSize.value; i++) {
    var num = Math.floor(101 * Math.random());
    array.push(num);
    var newDiv = document.createElement("div");
    newDiv.classList.add("bar-style");
    newDiv.style.height = `${array[i]*4}px`;
    // console.log(typeof(newDiv.style.height));
    // newDiv.innerHTML = num;
    // console.log(newDiv.innerHTML);
    document.getElementById("bars").appendChild(newDiv);
  }
}

// Deleting previous generateArray
function delPrevArr() {
  document.getElementById("bars").innerHTML = "";
}
// console.log(document.getElementById("bars").innerHTML);

document.getElementsByClassName("Generate-array")[0].addEventListener("click", function(){
  enableSortBtns();
  enableszSlider();
  generateArray(arrSize.value);
  console.log(arrSize.value);
});
