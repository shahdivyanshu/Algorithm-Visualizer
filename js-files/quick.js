async function partitiongen(bars,left,right){
  var i=left-1;
  // right end is pivot
  bars[right].style.background = "red";
  for(var j=left;j<right;j++){
    bars[j].style.background = "yellow";
    await timeout(delay);
    if(parseInt(bars[j].style.height)<parseInt(bars[right].style.height)){
      i++;
      swap(bars[i],bars[j]);
      bars[i].style.background = "orange";
      bars[j].style.background = "orange";
      await timeout(delay);
    }
    else{
      bars[j].style.background = "pink";
    }
  }
  i++;
  await timeout(delay);
  swap(bars[i],bars[right]);
  bars[right].style.background = "pink";
  bars[i].style.background = "green";
  await timeout(delay);
  for(var k=0;k<bars.length;k++){
    if(bars[k].style.background!="green"){
      bars[k].style.background = "cyan";
    }
  }
  return i;
}



async function quickSort(bars,left,right){
  if(left<right){
    var pivot_index = await partitiongen(bars,left,right);
    await quickSort(bars,left,pivot_index-1);
    await quickSort(bars,pivot_index+1,right);
  }
  else{
    if(left>=0&&right>=0&&left<bars.length&&right<bars.length){
      bars[right].style.background = "green";
      bars[left].style.background = "green";
    }
  }
}



document.getElementsByClassName("quick-sort")[0].addEventListener("click", async function(){
  var bars = document.getElementsByClassName("bar-style");
  var left=0;
  var right=bars.length-1;
  disableSortBtns();
  disableGenArray();
  disableszSlider();
  await quickSort(bars,left,right);
  enableSortBtns();
  enableGenArray();
  enableszSlider();
});
