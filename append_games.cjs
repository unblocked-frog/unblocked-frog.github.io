const fs = require('fs');

const currentData = JSON.parse(fs.readFileSync('src/data/games.json', 'utf8'));

const newGames1 = JSON.parse(fs.readFileSync('new_games_1.json', 'utf8'));
const newGames2 = JSON.parse(fs.readFileSync('new_games_2.json', 'utf8'));
const allNewGames = [...newGames1, ...newGames2];

const mappedGames = allNewGames.map(g => ({
  id: g.slug,
  name: g.title,
  url: g.embed_url,
  thumbnail: g.thumbnail,
  description: g.description,
  category: g.category
}));

const combined = [...currentData];

const seen = new Set(combined.map(g => g.id));
let added = 0;

for (const mapped of mappedGames) {
  if (!seen.has(mapped.id)) {
    combined.push(mapped);
    seen.add(mapped.id);
    added++;
  }
}

fs.writeFileSync('src/data/games.json', JSON.stringify(combined, null, 2));

console.log('Added ' + added + ' new games. Total games: ' + combined.length);
