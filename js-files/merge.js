async function merge(bars, left, mid, right) {
  var size1 = mid - left + 1;
  var size2 = right - mid;

  var arr1 = new Array(size1);
  var arr2 = new Array(size2);

  for (var i = 0; i < size1; i++) {
    await timeout(delay);
    bars[left + i].style.background = "orange";
    arr1[i] = bars[left + i].style.height;
  }

  for (var i = 0; i < size2; i++) {
    await timeout(delay);
    bars[mid + i + 1].style.background = "yellow";
    arr2[i] = bars[mid + i + 1].style.height;
  }

  await timeout(delay);
  var ptr1 = 0,
    ptr2 = 0,
    idx = left;
  while (ptr1 < size1 && ptr2 < size2) {
    await timeout(delay);
    if (parseInt(arr1[ptr1]) <= parseInt(arr2[ptr2])) {
      if (size1 + size2 === bars.length) {
        bars[idx].style.background = "green";
      } else {
        bars[idx].style.background = "lightgreen";
      }
      bars[idx].style.height = arr1[ptr1];
      ptr1++;
      idx++;
    } else {
      if (size1 + size2 === bars.length) {
        bars[idx].style.background = "green";
      } else {
        bars[idx].style.background = "lightgreen";
      }
      bars[idx].style.height = arr2[ptr2];
      ptr2++;
      idx++;
    }
  }

  while(ptr1<size1){
    await timeout(delay);
    if (size1 + size2 === bars.length) {
      bars[idx].style.background = "green";
    } else {
      bars[idx].style.background = "lightgreen";
    }
    bars[idx].style.height = arr1[ptr1];
    ptr1++;
    idx++;
  }

  while(ptr2<size2){
    await timeout(delay);
    if (size1 + size2 === bars.length) {
      bars[idx].style.background = "green";
    } else {
      bars[idx].style.background = "lightgreen";
    }
    bars[idx].style.height = arr2[ptr2];
    ptr2++;
    idx++;
  }
}



async function mergeSort(bars, left, right) {
  if (left >= right) {
    console.log("Base case");
    return;
  }
  var mid = left + Math.floor((right - left) / 2);
  await mergeSort(bars, left, mid);
  await mergeSort(bars, mid + 1, right);
  await merge(bars, left, mid, right);
}


document.getElementsByClassName("merge-sort")[0].addEventListener("click", async function() {
  var bars = document.getElementsByClassName("bar-style");
  var left = 0;
  var right = bars.length - 1;
  disableSortBtns();
  disableGenArray();
  disableszSlider();
  await mergeSort(bars, left, right);
  enableSortBtns();
  enableGenArray();
  enableszSlider();
});
