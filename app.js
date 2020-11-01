import * as utils from './utility.js'
import {swap} from "./utility.js";

const sortButton = document.getElementById('sort');
const list = document.querySelector('ul');
const LIST_SIZE = 100;

function setList() {
    const array = [];
    for(let i = 0; i<LIST_SIZE; i++) {
        array.push(utils.getRandomInt(5,50));
    }
    for(let i = 0; i<array.length; i++) {
        const listElement = document.createElement("li");
        listElement.id = i;
        listElement.style.height = array[i] + 'rem';
        listElement.textContent = array[i];
        listElement.style.width = 90 / LIST_SIZE + '%';
        list.append(listElement);
    }
    console.log((0+array.length)/2)

    mergeSort(array,0,array.length-1);
    console.log(array)
}
async function bubbleSort(arr) {
    const len = arr.length;
    for (let i = 0; i < len ; i++) {
        for(let j = 0 ; j < len - i - 1; j++){
            const prev = document.getElementById(j);
            const next = document.getElementById(j + 1);
            await utils.highlightAndSleepBubble(prev, next);
            if (arr[j] > arr[j + 1]) {
                utils.swap(prev,next);
                const temp = arr[j];
                arr[j] = arr[j+1];
                arr[j + 1] = temp;
            }
        }
    }
}
async function selectionSort(arr) {
    const len = arr.length;

    for (let i = 0; i < len - 1 ; i++) {
        let minIdx = i;
        const current = document.getElementById(minIdx);
        current.style.background = '#3c61e7';
        for (let j = i+1; j < len; j++) {
            const highlighted = document.getElementById(j);
            await utils.highlightAndSleepSelection(highlighted);

            if (arr[j] < arr[minIdx]) {
                minIdx = j;
            }
        }
        const selected =document.getElementById(minIdx);
        utils.swap(current, selected);
        const temp = arr[minIdx];
        arr[minIdx] = arr[i];
        arr[i] = temp;
    }
}

async function insertionSort(arr) {
    const len = arr.length;

    for (let i = 1; i < len; ++i) {
        const key = arr[i];
        let j = i - 1;
        const current = document.getElementById(i);
        current.style.background = '#3c61e7';

        while (j >= 0 && arr[j] > key) {
            const prev = document.getElementById(j);
            const next = document.getElementById(j + 1);
            await utils.highlightAndSleepInsertion(prev, next);
            arr[j + 1] = arr[j];
            swap(prev,next);
            j--;
        }
        arr[j + 1] = key;
    }
}

async function heapSort(arr) {
    const n = arr.length;

    // Build heap (rearrange array) 
    for (let  i = n / 2 - 1; i >= 0; i--) {
        await heapify(arr, n, i);
    }
    // One by one extract an element from heap
    for (let i=n-1; i>0; i--) {
        const prev = document.getElementById(0);
        const next = document.getElementById(i);
        await utils.highlightAndSleepInsertion(prev, next);
        utils.swap(prev,next);
        // Move current root to end
        const temp = arr[0];
        arr[0] = arr[i];
        arr[i] = temp;

        // call max heapify on the reduced heap 
        await heapify(arr, i, 0);
    }
}

// To heapify a subtree rooted with node i which is 
// an index in arr[]. n is size of heap 
async function heapify(arr,  n,  i) {
    let largest = i; // Initialize largest as root
    const l = 2*i + 1; // left = 2*i + 1
    const r = 2*i + 2; // right = 2*i + 2

    // If left child is larger than root 
    if (l < n && arr[l] > arr[largest])
        largest = l;

    // If right child is larger than largest so far 
    if (r < n && arr[r] > arr[largest])
        largest = r;

    // If largest is not root 
    if (largest != i)
    {
        const prev = document.getElementById(i);
        const next = document.getElementById(largest);
        await utils.highlightAndSleepHeap(prev, next);
        utils.swap(prev,next);
        const swap = arr[i];
        arr[i] = arr[largest];
        arr[largest] = swap;

        // Recursively heapify the affected sub-tree 
        await heapify(arr, n, largest);
    }
}

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
async function quickSort(arr, low, high)
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
        quickSort(arr, low, pi-1);
        quickSort(arr, pi+1, high);
    }else{
        const pivot = document.getElementById(high);
        pivot.style.background = "#3c61e7";
    }
}

// Merges two subarrays of arr[].
// First subarray is arr[l..m]
// Second subarray is arr[m+1..r]
function merge(arr, l, m, r)
{
    // Find sizes of two subarrays to be merged
    const n1 = m - l + 1;
    const n2 = r - m;


    /* Create temp arrays */
    const L = [n1];
    const R = [n2];

    /*Copy data to temp arrays*/
    for (let i = 0; i < n1; ++i) {
        L[i] = arr[l + i];
    }
    for (let j = 0; j < n2; ++j) {
        R[j] = arr[m + 1 + j];
    }

    /* Merge the temp arrays */

    // Initial indexes of first and second subarrays
    let i = 0, j = 0;

    // Initial index of merged subarry array
    let k = l;
    while (i < n1 && j < n2) {
        if (L[i] <= R[j]) {
            const prev = document.getElementById(k);
            prev.style.height =  L[i] + 'rem';
            prev.textContent =  L[i];
            arr[k] = L[i];
            i++;
        }
        else {
            const prev = document.getElementById(k);
            prev.style.height =  R[j] + 'rem';
            prev.textContent =  R[j];
            arr[k] = R[j];
            j++;
        }
        k++;
    }

    /* Copy remaining elements of L[] if any */
    while (i < n1) {
        const prev = document.getElementById(k);
        prev.style.height =  L[i] + 'rem';
        prev.textContent =  L[i];
        arr[k] = L[i];
        i++;
        k++;
    }

    /* Copy remaining elements of R[] if any */
    while (j < n2) {
        const prev = document.getElementById(k);
        prev.style.height =  R[j] + 'rem';
        prev.textContent =  R[j];
        arr[k] = R[j];
        j++;
        k++;
    }
}

// Main function that sorts arr[l..r] using
// merge()
function mergeSort(arr, l, r)
{
    if (l < r) {
        // Find the middle point
        const m = Math.floor((l + r) / 2);

        // Sort first and second halves
        mergeSort(arr, l, m);
        mergeSort(arr, m + 1, r);

        // Merge the sorted halves
        merge(arr, l, m, r);
    }
}


setList();
