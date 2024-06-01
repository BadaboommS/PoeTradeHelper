export function dynamicSort(one, two) {
    return function(a, b) {
        return (a[one][two] < b[one][two]) ? -1 : (a[one][two] > b[one][two]) ? 1 : 0;
    }
 }