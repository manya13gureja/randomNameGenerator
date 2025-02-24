// roomNameGenerator.ts
declare global {
    interface Window {
      generateRoomName: () => string;
      generateUniqueRoomNames: (count: number) => string[];
    }
  }
// Adjectives for room descriptions
const adjectives = [
   "Ominous", "Cursed", "Forsaken", "Hollow", "Whispering", "Damp", "Echoing", "Vanishing", "Murky", "Haunted", "Phantom", "Eldritch", "Wretched", "Twisted", "Spectral", "Shrouded", "Tormented"
  ];
  
  // Nouns for room types
  const roomTypes = [
    "Nook", "Nest", "Den", "Burrow", "Tea Room", "Hearth", "Cozy Corner", "Pillow Fort", "Marshmallow Pit", "Bubble Bath", "Sofa Kingdom", "Beanbag Throne"
  ];
  
  // Themes specific to crochet
  const themes = [
    "404 Not Found", "Corrupted Data", "Lost Signal", "Broken Code", "Recursive Nightmare", "Data Anomaly", "Pixelated Ruins", "Memory Leak", "Infinite Loop", "Desynchronized", "Glitched Out"
  ];
  
function generateRoomName(): string {
    const adjective = adjectives[Math.floor(Math.random() * adjectives.length)];
    const roomType = roomTypes[Math.floor(Math.random() * roomTypes.length)];
    const theme = themes[Math.floor(Math.random() * themes.length)];
    
    // 50% chance to include a theme
    const includeTheme = Math.random() > 0.5;
    
    return includeTheme ? `The ${adjective} ${roomType} ${theme} Room` : `The ${adjective} ${roomType} Room`;
  };
  
  // Generate a set of unique room names
  function generateUniqueRoomNames(count: number): string[] {
    const names = new Set<string>();
    
    while (names.size < count) {
      names.add(generateRoomName());
    }
    
    return Array.from(names);
  };

  window.generateRoomName = generateRoomName;
  window.generateUniqueRoomNames = generateUniqueRoomNames;

  export { generateRoomName, generateUniqueRoomNames };