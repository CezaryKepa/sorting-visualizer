import * as utils from "../utility/utility.js";

/* This function takes last element as pivot,
      places the pivot element at its correct
      position in sorted array, and places all
      smaller (smaller than pivot) to left of
      pivot and all greater elements to right
      of pivot */
async function partition(arr, low, high) {
    const pivot = arr[high];
    let i = (low-1); // index of smaller element
    for (let j=low; j<high; j++) {
        // If current element is smaller than the pivot
        if (arr[j] < pivot) {
            i++;
            const prev = document.getElementById(i);
            const next = document.getElementById(j);
            await utils.highlightAndSleepHeap(prev, next);
            utils.swap(prev,next);
            // swap arr[i] and arr[j]
            const temp = arr[i];
            arr[i] = arr[j];
            arr[j] = temp;
        }
    }
    const prev = document.getElementById(i+1);
    const next = document.getElementById(high);
    await utils.highlightAndSleepHeap(prev, next);
    utils.swap(prev,next);
    // swap arr[i+1] and arr[high] (or pivot)
    const temp = arr[i+1];
    arr[i+1] = arr[high];
    arr[high] = temp;

    return i+1;
}


/* The main function that implements QuickSort()
  arr[] --> Array to be sorted,
  low  --> Starting index,
  high  --> Ending index */
export async function quickSort(arr, low, high)
{
    if (low < high)
    {
        /* pi is partitioning index, arr[pi] is
          now at right place */
        const pi = await partition(arr, low, high);
        const pivot = document.getElementById(pi);
        pivot.style.background = "#3c61e7";
        // Recursively sort elements before
        // partition and after partition
        await quickSort(arr, low, pi-1);
        await quickSort(arr, pi+1, high);
    }else{
        const pivot = document.getElementById(high);
        if(pivot !== null) {
            pivot.style.background = "#3c61e7";
        }
    }
}
