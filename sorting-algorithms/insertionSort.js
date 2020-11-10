import * as utils from "../utility/utility.js";

export async function insertionSort(arr) {
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
            utils.swap(prev,next);
            j--;
        }
        arr[j + 1] = key;
    }
}
