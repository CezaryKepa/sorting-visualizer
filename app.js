import * as utils from './utility/utility.js'
import * as constants from "./utility/constants.js";
import {selectionSort} from "./sorting-algorithms/selectionSort.js";
import {insertionSort} from "./sorting-algorithms/insertionSort.js";
import {bubbleSort} from "./sorting-algorithms/bubbleSort.js";
import {heapSort} from "./sorting-algorithms/heapSort.js";
import {mergeSort} from "./sorting-algorithms/mergeSort.js";
import {quickSort} from "./sorting-algorithms/quickSort.js";

const sortButton = document.querySelector('a');
const bubbleButton = document.getElementById('bubble');
const heapButton = document.getElementById('heap');
const insertionButton = document.getElementById('insertion');
const selectionButton = document.getElementById('selection');
const quickButton = document.getElementById('quick');
const mergeButton = document.getElementById('merge');
const list = document.querySelector('ul');
//TODO: MULTIPLE SORT CLICKS, CLEAN UP
const LIST_SIZE = 100;
let ALGORITHM = constants.INSERTION;
const array = [];

function setList() {

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

}

setList();
async function sortHandler() {
    switch (ALGORITHM) {
        case constants.INSERTION:
            await insertionSort(array);
            break;
        case constants.BUBBLE:
            await bubbleSort(array);
            break;
        case constants.SELECTION:
            await selectionSort(array);
            break;
        case constants.HEAP:
            await heapSort(array);
            break;
        case constants.MERGE:
            await mergeSort(array,0,array.length-1);
            break;
        case constants.QUICK:
            await quickSort(array,0,array.length-1);
            break;
    }
}
bubbleButton.addEventListener('click', () => ALGORITHM = constants.BUBBLE)
heapButton.addEventListener('click', () => ALGORITHM = constants.HEAP)
insertionButton.addEventListener('click', () => ALGORITHM = constants.INSERTION)
selectionButton.addEventListener('click', () => ALGORITHM = constants.SELECTION)
quickButton.addEventListener('click', () => ALGORITHM = constants.QUICK)
mergeButton.addEventListener('click', () => ALGORITHM = constants.MERGE)

sortButton.addEventListener('click', sortHandler);
