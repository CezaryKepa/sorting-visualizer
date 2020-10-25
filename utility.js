export async function highlightAndSleepBubble(prev, next){
    prev.style.background = '#e7de3c';
    next.style.background = '#e7de3c';
    await sleep(1);
    prev.style.background = '#E73C4E';
    next.style.background = '#E73C4E';
}
export async function highlightAndSleepInsertion(prev, next){
    prev.style.background = '#e7de3c';
    next.style.background = '#4de73c';
    await sleep(0.2);
    prev.style.background = '#3c61e7';
    next.style.background = '#3c61e7';
}
export async function highlightAndSleepSelection(highlighted) {
    highlighted.style.background = '#e7de3c';
    await sleep(1);
    highlighted.style.background = '#E73C4E';
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

