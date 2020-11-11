export const INSERTION = 'INSERTION';
export const SELECTION = 'SELECTION';
export const BUBBLE = 'BUBBLE';
export const MERGE = 'MERGE';
export const QUICK = 'QUICK';
export const HEAP = 'HEAP';
export let SLEEP_TIME = 100;
export let LIST_SIZE = 50;
export function changeSleepTime(value) {
    SLEEP_TIME = value;
}
export function changeListSize(value) {
    LIST_SIZE = value;
}
