import * as utils from './utility/utility.js'
import * as constants from './utility/constants.js';
import {selectionSort} from './sorting-algorithms/selectionSort.js';
import {insertionSort} from './sorting-algorithms/insertionSort.js';
import {bubbleSort} from './sorting-algorithms/bubbleSort.js';
import {heapSort} from './sorting-algorithms/heapSort.js';
import {mergeSort} from './sorting-algorithms/mergeSort.js';
import {quickSort} from './sorting-algorithms/quickSort.js';

const sortButton = document.querySelector('a');
const bubbleButton = document.getElementById('bubble');
const heapButton = document.getElementById('heap');
const insertionButton = document.getElementById('insertion');
const selectionButton = document.getElementById('selection');
const quickButton = document.getElementById('quick');
const mergeButton = document.getElementById('merge');
const generateButton = document.getElementById('generate');
const speedSlider = document.getElementById('speedRange');
const sizeSlider = document.getElementById('sizeRange');
const speedOutput = document.getElementById('speedOutput');
const sizeOutput = document.getElementById('sizeOutput');
const list = document.querySelector('ul');
// Todo fix moveing array size while sorting, numbers under fixed array size
speedOutput.innerHTML = speedSlider.value;
sizeOutput.innerHTML = sizeSlider.value;

let ALGORITHM = constants.INSERTION;
let array = [];
let isBeingSorted = false;

function setList() {
    if (isBeingSorted) {
        return;
    }
    while (list.firstChild) {
        list.removeChild(list.firstChild);
    }
    array = [];
    for (let i = 0; i < constants.LIST_SIZE; i++) {
        array.push(utils.getRandomInt(5, 50));
    }
    for (let i = 0; i < array.length; i++) {
        const listElement = document.createElement('li');
        listElement.id = i;
        listElement.style.height = array[i] * 0.75 + 'rem';
        listElement.textContent = array[i];
        listElement.style.width = 90 / constants.LIST_SIZE + '%';
        list.append(listElement);
    }

}

async function sortHandler() {
    if (isBeingSorted) {
        console.log(isBeingSorted);
        return;
    }
    switch (ALGORITHM) {
        case constants.INSERTION:
            isBeingSorted = true;
            await insertionSort(array);
            isBeingSorted = false;
            break;
        case constants.BUBBLE:
            isBeingSorted = true;
            await bubbleSort(array);
            isBeingSorted = false;
            break;
        case constants.SELECTION:
            isBeingSorted = true;
            await selectionSort(array);
            isBeingSorted = false;
            break;
        case constants.HEAP:
            isBeingSorted = true;
            await heapSort(array);
            isBeingSorted = false;
            break;
        case constants.MERGE:
            isBeingSorted = true;
            await mergeSort(array, 0, array.length - 1);
            isBeingSorted = false;
            break;
        case constants.QUICK:
            isBeingSorted = true;
            await quickSort(array, 0, array.length - 1);
            isBeingSorted = false;
            break;
    }
}


speedSlider.addEventListener('input', () => {
    speedOutput.innerText = speedSlider.value;
    constants.changeSleepTime(speedSlider.value)
})
sizeSlider.addEventListener('input', () => {
    if (isBeingSorted) {
        return;
    }
    sizeOutput.innerText = sizeSlider.value;
    constants.changeListSize(sizeSlider.value)
    setList();
})
bubbleButton.addEventListener('click', () => ALGORITHM = constants.BUBBLE);
heapButton.addEventListener('click', () => ALGORITHM = constants.HEAP);
insertionButton.addEventListener('click', () => ALGORITHM = constants.INSERTION);
selectionButton.addEventListener('click', () => ALGORITHM = constants.SELECTION);
quickButton.addEventListener('click', () => ALGORITHM = constants.QUICK);
mergeButton.addEventListener('click', () => ALGORITHM = constants.MERGE);
generateButton.addEventListener('click', setList);
sortButton.addEventListener('click', sortHandler);

setList();
