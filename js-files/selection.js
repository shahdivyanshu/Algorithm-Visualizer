async function selectionSort(){
  var bars = document.getElementsByClassName("bar-style");
  let i,j,min_idx;
  for(i=0;i<bars.length-1;i++){
    bars[i].style.background = "blue";
    min_idx = i;
    for(j=i+1;j<bars.length;j++){
      bars[j].style.background = "red";
      await timeout(delay);
      if(parseInt(bars[j].style.height)<parseInt(bars[min_idx].style.height)){
        if(min_idx!=i){
          bars[min_idx].style.background = "cyan";
        }
        min_idx = j;
      }
      else{
        bars[j].style.background = "cyan";
      }
      // bars[min_idx].style.background = "red";
    }
    await timeout(delay);
    swap(bars[i],bars[min_idx]);
    bars[min_idx].style.background = "cyan";
    bars[i].style.background = "green";
  }
  bars[bars.length-1].style.background = "green"
}


document.getElementsByClassName("selection-sort")[0].addEventListener("click", async function(){
  disableSortBtns();
  disableGenArray();
  disableszSlider();
  await selectionSort();
  enableSortBtns();
  enableGenArray();
  enableszSlider();
});
