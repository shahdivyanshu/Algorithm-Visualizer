async function bubbleSort(){
  var bars = document.getElementsByClassName("bar-style");
  for(var i=0;i<bars.length-1;i++){
    // var flag = 0;
    for(var j=0;j<bars.length-i-1;j++){
      bars[j].style.background="#ff4c68";
      bars[j+1].style.background="#ff4c68";
      // console.log(typeof(parseInt(bars[j].style.height)));
      await timeout(delay);
      if(parseInt(bars[j].style.height)>parseInt(bars[j+1].style.height)){
        // await timeout(delay);
        swap(bars[j],bars[j+1]);
        // flag = 1;
      }
      bars[j].style.background="cyan";
      bars[j+1].style.background="cyan";
    }
    bars[bars.length-1-i].style.background="green";
    // if(flag===0){
    //   break;
    // }
  }
  bars[0].style.background="green";
}

document.getElementsByClassName("bubble-sort")[0].addEventListener("click", async function(){
  disableSortBtns();
  disableGenArray();
  disableszSlider();
  await bubbleSort();
  enableSortBtns();
  enableGenArray();
  enableszSlider();
});
