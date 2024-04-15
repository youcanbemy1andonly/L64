const tabTitles = [
    "FUCKED",
    "BY",
    "THE",
    "*L64",
    "BITCHES",
];

let index = 0;

function updateTabTitle() {
    document.title = tabTitles[index];
    index = (index + 1) % tabTitles.length;
}

updateTabTitle();

setInterval(updateTabTitle, 500);
