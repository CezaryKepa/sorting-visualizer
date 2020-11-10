import * as utils from "../utility/utility.js";

export async function heapSort(arr) {
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
