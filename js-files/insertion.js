async function insertionSort(){
  var bars = document.getElementsByClassName("bar-style");
  bars[0].style.background = "green";
  let i,key,j;
  for(i=1;i<bars.length;i++){
    bars[i].style.background = "blue";
    key = bars[i].style.height;
    j = i-1;
    await timeout(delay);
    while(j>=0&&parseInt(bars[j].style.height)>parseInt(key)){
      bars[j].style.background = "blue";
      bars[j+1].style.height = bars[j].style.height;
      j = j - 1;
      await timeout(delay);
      for(var k=i;k>=0;k--){
        bars[k].style.background = "green";
      }
    }
    // await timeout(2000);
    // for(var k=i;k>=0;k--){
    //   bars[k].style.background = "green";
    // }
    bars[j+1].style.height = key;
    bars[i].style.background = "green";
  }
}

document.getElementsByClassName("insertion-sort")[0].addEventListener("click", async function(){
  disableSortBtns();
  disableGenArray();
  disableszSlider();
  await insertionSort();
  enableSortBtns();
  enableGenArray();
  enableszSlider();
  console.log(delay);
});
