import {SLEEP_TIME} from "./constants.js";

export async function highlightAndSleepBubble(prev, next){
    prev.style.background = '#e7de3c';
    next.style.background = '#e7de3c';
    await sleep(SLEEP_TIME);
    prev.style.background = '#E73C4E';
    next.style.background = '#E73C4E';
}
export async function highlightAndSleepInsertion(prev, next){
    prev.style.background = '#e7de3c';
    next.style.background = '#4de73c';
    await sleep(SLEEP_TIME);
    prev.style.background = '#3c61e7';
    next.style.background = '#3c61e7';
}
export async function highlightAndSleepSelection(highlighted) {
    highlighted.style.background = '#e7de3c';
    await sleep(SLEEP_TIME);
    highlighted.style.background = '#E73C4E';
}
export async function highlightAndSleepHeap(prev, next){
    prev.style.background = '#e7de3c';
    next.style.background = '#4de73c';
    await sleep(SLEEP_TIME);
    prev.style.background = '#E73C4E';
    next.style.background = '#E73C4E';
}
export async function highlightAndSleepMerge(DOMElement, arrElement){
    DOMElement.style.height = arrElement + 'rem';
    DOMElement.textContent = arrElement;
    DOMElement.style.background = '#3c61e7';
    await sleep(SLEEP_TIME);
}


export function swap(element1, element2) {
    const el1Height = element1.style.height;
    const el1TextContent = element1.textContent;
    element1.style.height = element2.style.height;
    element1.textContent = element2.textContent;
    element2.style.height = el1Height;
    element2.textContent = el1TextContent;
}
export function sleep(ms) {
    return new Promise(resolve => setTimeout(resolve, ms));
}
export function getRandomInt(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min + 1)) + min;
}

