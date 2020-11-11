import * as utils from "../utility/utility.js";

// Merges two subarrays of arr[].
// First subarray is arr[l..m]
// Second subarray is arr[m+1..r]
async function merge(arr, l, m, r) {
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
            await utils.highlightAndSleepMerge(prev,L[i])
            arr[k] = L[i];
            i++;
        } else {
            const prev = document.getElementById(k);
            await utils.highlightAndSleepMerge(prev, R[j])
            arr[k] = R[j];
            j++;
        }
        k++;
    }

    /* Copy remaining elements of L[] if any */
    while (i < n1) {
        const prev = document.getElementById(k);
        await utils.highlightAndSleepMerge(prev,L[i])
        arr[k] = L[i];
        i++;
        k++;
    }

    /* Copy remaining elements of R[] if any */
    while (j < n2) {
        const prev = document.getElementById(k);
        await utils.highlightAndSleepMerge(prev, R[j])
        arr[k] = R[j];
        j++;
        k++;
    }
}

// Main function that sorts arr[l..r] using
// merge()
export async function mergeSort(arr, l, r) {
    if (l < r) {
        // Find the middle point
        const m = Math.floor((l + r) / 2);

        // Sort first and second halves
        await mergeSort(arr, l, m);
        await mergeSort(arr, m + 1, r);

        // Merge the sorted halves
        await merge(arr, l, m, r);
    }
}
