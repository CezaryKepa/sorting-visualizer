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
    bubbleSort(array);
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
        let temp = arr[minIdx];
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
            await utils.highlightAndSleepBubble(prev, next);
            arr[j + 1] = arr[j];
            swap(prev,next);
            j--;
        }
        arr[j + 1] = key;
    }
}




setList();
