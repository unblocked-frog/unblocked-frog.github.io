const fs = require('fs');
const data = JSON.parse(fs.readFileSync('src/data/games.json', 'utf8'));

const namesToRemove = [
  "SkillFite", "Deadswitch 3", "Dinogen Online", "Bad Egg", "Earth's Greatest Defender", "Sword Masters", "Tanks 3D", "Ninja vs EVILCORP", "KILLOVER", "Mana Blade", "Tanko.io", "Eonfall", "Chrome Shift: Genesis", "Sentiel", "Up Together", "Mini Mana", "Mine Blocks", "OVIVO", "Bubbits", "Carillion", "ZooDrop", "Tower Stack", "Pipedown", "Chroma", "Shift", "Bubbly Tim's Time Bubble Trouble", "A Number From the Ghost", "Edelweiss", "Raccoon Retail", "Egg Hunt", "Crazy Pumpkin", "Double Dodgers", "Cybernetic Serenade", "Slope", "Hole.io", "Blumgi Castle", "Sushi Party", "Path to Glory", "CaptainForever.io", "Kingdom of Pixels", "Lord of the Harvest", "OpenFront.io", "Drift.io", "The Race", "The Race – Season 2", "Threltemania", "Slow Roads", "Golf Mania", "Kinda Hard Golf"
].map(n => n.toLowerCase().trim());

const newData = data.filter(g => {
  const isMatch = namesToRemove.includes(g.name.toLowerCase().trim()) || namesToRemove.some(n => g.name.toLowerCase().includes(n));
  if (isMatch) console.log('Removing:', g.name);
  return !isMatch;
});

fs.writeFileSync('src/data/games.json', JSON.stringify(newData, null, 2));
console.log('Remaining games:', newData.length);
