import * as utils from "../utility/utility.js";

export async function bubbleSort(arr) {
    const len = arr.length;
    for (let i = 0; i < len; i++) {
        for (let j = 0; j < len - i - 1; j++) {
            const prev = document.getElementById(j);
            const next = document.getElementById(j + 1);
            await utils.highlightAndSleepBubble(prev, next);
            if (arr[j] > arr[j + 1]) {
                utils.swap(prev, next);
                const temp = arr[j];
                arr[j] = arr[j + 1];
                arr[j + 1] = temp;
            }
        }
    }
}
