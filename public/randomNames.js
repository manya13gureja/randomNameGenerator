"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.generateRoomName = generateRoomName;
exports.generateUniqueRoomNames = generateUniqueRoomNames;
// Adjectives for room descriptions
var adjectives = [
    "Ominous", "Cursed", "Forsaken", "Hollow", "Whispering", "Damp", "Echoing", "Vanishing", "Murky", "Haunted", "Phantom", "Eldritch", "Wretched", "Twisted", "Spectral", "Shrouded", "Tormented"
];
// Nouns for room types
var roomTypes = [
    "Nook", "Nest", "Den", "Burrow", "Tea Room", "Hearth", "Cozy Corner", "Pillow Fort", "Marshmallow Pit", "Bubble Bath", "Sofa Kingdom", "Beanbag Throne"
];
// Themes specific to crochet
var themes = [
    "404 Not Found", "Corrupted Data", "Lost Signal", "Broken Code", "Recursive Nightmare", "Data Anomaly", "Pixelated Ruins", "Memory Leak", "Infinite Loop", "Desynchronized", "Glitched Out"
];
function generateRoomName() {
    var adjective = adjectives[Math.floor(Math.random() * adjectives.length)];
    var roomType = roomTypes[Math.floor(Math.random() * roomTypes.length)];
    var theme = themes[Math.floor(Math.random() * themes.length)];
    // 50% chance to include a theme
    var includeTheme = Math.random() > 0.5;
    return includeTheme ? "The ".concat(adjective, " ").concat(roomType, " ").concat(theme, " Room") : "The ".concat(adjective, " ").concat(roomType, " Room");
}
;
// Generate a set of unique room names
function generateUniqueRoomNames(count) {
    var names = new Set();
    while (names.size < count) {
        names.add(generateRoomName());
    }
    return Array.from(names);
}
;
window.generateRoomName = generateRoomName;
window.generateUniqueRoomNames = generateUniqueRoomNames;
