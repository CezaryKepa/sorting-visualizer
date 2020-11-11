import * as utils from "../utility/utility.js";

export async function selectionSort(arr) {
    const len = arr.length;

    for (let i = 0; i < len - 1; i++) {
        let minIdx = i;
        const current = document.getElementById(minIdx);
        current.style.background = '#3c61e7';
        for (let j = i + 1; j < len; j++) {
            const highlighted = document.getElementById(j);
            await utils.highlightAndSleepSelection(highlighted);

            if (arr[j] < arr[minIdx]) {
                minIdx = j;
            }
        }
        const selected = document.getElementById(minIdx);
        utils.swap(current, selected);
        const temp = arr[minIdx];
        arr[minIdx] = arr[i];
        arr[i] = temp;
    }
}
