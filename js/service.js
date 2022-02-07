'use strict';
const STORAGE_KEY = 'projDB';
var gProjs;

function _createProj(name, title, url) {
    var proj =
    {
        id: makeId(),
        // img: `./img/games/${name}.jpeg`,
        img: `./img/games/minesweeper.jpeg`,
        name: name,
        title: title,
        desc: "lorem ipsum lorem ipsum lorem ipsum",
        url: url,
        publishedAt: 1448693940000,
        labels: ["Matrixes", "keyboard events"],
    };
    return proj;

}


function createProjects() {
    var projs = loadFromStorage(STORAGE_KEY);
    if (!projs || !projs.length) {
        projs = [
            _createProj('pacman', 'game pacman', 'https://diklash7.github.io/final/'),
            _createProj('bookstore', 'bookstore', 'https://diklash7.github.io/final/'),
            _createProj('shamat', 'shamat pacman', 'https://diklash7.github.io/final/'),

        ];
    }
    gProjs = projs;
    saveProjToStorage();
}

function saveProjToStorage() {
    saveToStorage(STORAGE_KEY, gProjs);
}

function getProjsForDisplay(){
    return gProjs;
}

function getProject(projId) {
    return gProjs.find((proj) => proj.id === projId)
}
