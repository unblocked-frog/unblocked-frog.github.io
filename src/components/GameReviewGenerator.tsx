import React, { useMemo } from 'react';

export interface GameReviewItem {
  id: string;
  name: string;
  category?: string;
  description?: string;
}

interface GameReviewGeneratorProps {
  game: GameReviewItem;
}

// Simple seeded random number generator
function xmur3(str: string) {
    for(var i = 0, h = 1779033703 ^ str.length; i < str.length; i++) {
        h = Math.imul(h ^ str.charCodeAt(i), 3432918353);
        h = h << 13 | h >>> 19;
    } return function() {
        h = Math.imul(h ^ (h >>> 16), 2246822507);
        h = Math.imul(h ^ (h >>> 13), 3266489909);
        return (h ^= h >>> 16) >>> 0;
    }
}

function sfc32(a: number, b: number, c: number, d: number) {
    return function() {
      a >>>= 0; b >>>= 0; c >>>= 0; d >>>= 0; 
      var t = (a + b | 0) + d | 0;
      d = d + 1 | 0;
      a = b ^ b >>> 9;
      b = c + (c << 3) | 0;
      c = c << 21 | c >>> 11;
      c = c + t | 0;
      return (t >>> 0) / 4294967296;
    }
}

const gameplayIntros = [
  "If you are looking for instant entertainment that kicks boredom away, {game} is a title you should not miss. Featuring signature elements of the {category} genre, it wraps intuitive mechanics into an addictive and satisfying gaming experience.",
  "The arrival of {game} in browser gaming brings fresh excitement for fans of {category} games. From the very first moment, players are plunged into fun challenges that put their reaction speed and dexterity to the test.",
  "When it comes to web games that blend easy-to-learn controls with rewarding progression, {game} definitely tops the list. Representing the {category} category, it delivers hours of endless fun directly in your browser without requiring any downloads."
];

const gameplayDetails = [
  "The gameplay offers a smooth learning curve—accessible enough for newcomers to pick up right away, yet offering plenty of depth for those who love to master high scores. Every level is carefully balanced to provide an engaging challenge without early frustration. Mastering momentum, anticipation, and precise timing is the key to victory.",
  "At the heart of the experience is quick reflexes and rapid situational awareness. Controlling your character or vehicle feels sharp and responsive, giving you complete command of every move. High-risk maneuvers are richly rewarded with higher scores and thrilling gameplay moments.",
  "The controls are remarkably fluid, making it one of the most responsive HTML5 games available. With freedom of movement and multiple approaches to each obstacle, every run feels fresh and dynamic for both casual gamers and competitive players."
];

const historySections = [
  (name: string) => `<h2>Overview & Background: ${name}</h2><p>Developed as part of the modern wave of accessible browser gaming, ${name} has become a popular pick across web game communities. Inspired by timeless arcade fundamentals and powered by modern WebGL technology, it delivers crisp visuals and smooth framerates right inside your browser. Continuous performance optimizations ensure seamless gameplay across laptops, Chromebooks, and desktop setups.</p>`,
  (name: string) => `<h2>Origins and Community Reception</h2><p>The popularity of ${name} grew rapidly thanks to its accessible design and instant-action philosophy. What started as an innovative browser concept has expanded into a full-featured experience with enhanced physics and creative level design. Today, it stands as a favorite for players seeking instant fun without complicated installations or paywalls.</p>`,
  (name: string) => `<h2>Development & Evolution</h2><p>From early iterations to its current polished build, ${name} has continually refined its core mechanics based on player feedback. By streamlining complex genre mechanics into an intuitive, lightweight package that launches in seconds, it provides pure gameplay satisfaction tailored for modern web browsers.</p>`
];

const whyFunSections = [
  (desc: string) => `<h2>Why Is It So Addictive?</h2><p>Beyond its core premise ("${desc}"), the real appeal lies in its satisfying gameplay loop. Whenever a round ends, the instant restart allows you to jump right back in and beat your personal best. With zero wait times between attempts, it is easy to find yourself immersed in just 'one more run.'</p>`,
  (desc: string) => `<h2>What Makes It Stand Out</h2><p>Building upon its classic description ("${desc}"), the game features delightful visual feedback and sound effects that make every successful move feel impactful. Crisp animations, subtle screen dynamics, and responsive audio cues create an engaging rhythm that keeps you hooked from start to finish.</p>`,
  (desc: string) => `<h2>The Secret Behind the Fun</h2><p>Many players praise the game for its high replay value and rewarding skill curve ("${desc}"). With randomized obstacles and dynamic challenges, no two play sessions feel identical, keeping every run engaging and unpredictable.</p>`
];

const tipsSections = [
  "<h2>Pro Tips & Gameplay Strategy</h2><ul><li><strong>Find Your Rhythm Early:</strong> Take your time during the first few moments to calibrate to the control sensitivity before picking up the pace.</li><li><strong>Focus on the Screen Center:</strong> Do not just stare at your own avatar; keep your peripheral vision centered to anticipate hazards well in advance.</li><li><strong>Use Fullscreen for Mouse Control:</strong> For 3D and action games, activate Fullscreen mode to unlock maximum precision and uninterrupted mouse cursor capture.</li><li><strong>Stay Calm Under Pressure:</strong> Rushing when hazards cluster often leads to mistakes. Maintain a steady hand and time your actions deliberately.</li></ul><p>Keep these strategies in mind, and you will consistently climb to new high scores!</p>",
  "<h2>How to Win and Maximize Your Score</h2><ul><li><strong>Keep Your Fingers Ready:</strong> Response time is key. Position your fingers comfortably over your action keys for zero-delay reactions.</li><li><strong>Learn Safe Routes:</strong> Observe hazard cycles and memorise safe trajectories with wider error margins.</li><li><strong>Do Not Get Distracted:</strong> Avoid risking an entire run for a dangerous bonus item unless you have established a safe escape route.</li><li><strong>Take Short Breaks:</strong> Quick reaction games can tire your eyes—take a quick breather between marathon sessions to stay sharp!</li></ul><p>Apply these habits consistently to dominate the leaderboard with ease!</p>",
  "<h2>Advanced Tactics & Mechanics</h2><ul><li><strong>Master Your Hitbox:</strong> Learn the exact boundaries of your character or vehicle to graze past hazards safely.</li><li><strong>Input Efficiency:</strong> Avoid panic-clicking or unnecessary micro-adjustments. Smooth, deliberate movements yield the cleanest runs.</li><li><strong>Listen to Audio Cues:</strong> Play with audio enabled; subtle sound effects often give away impending events before they become visible.</li><li><strong>Analyze Mistakes:</strong> Treat each game-over as a learning opportunity to spot which traps caught you off guard.</li></ul><p>Put these pro strategies into practice and enjoy a dramatic boost in your gaming performance.</p>"
];

export function GameReviewGenerator({ game }: GameReviewGeneratorProps) {
  const content = useMemo(() => {
    // Determine random seed based on game ID
    const seed = xmur3(game.id)();
    const rand = sfc32(seed, seed + 1, seed + 2, seed + 3);

    const pick = (arr: any[]) => arr[Math.floor(rand() * arr.length)];

    const p1 = pick(gameplayIntros)
      .replace("{game}", `<strong>${game.name}</strong>`)
      .replace("{category}", `<em>${game.category || 'Casual'}</em>`);
    const p2 = pick(gameplayDetails);
    
    // Create paragraphs
    const section1 = `<h2>Gameplay & Core Mechanics</h2><p>${p1} ${p2}</p>`;
    
    const hFunc = pick(historySections);
    const section2 = hFunc(game.name);

    const funFunc = pick(whyFunSections);
    // Sanitize description
    const safeDesc = (game.description || "An exciting and challenging browser game.").replace(/<[^>]*>?/gm, "").slice(0, 150) + "...";
    const section3 = funFunc(safeDesc);

    const section4 = pick(tipsSections);

    return `
      ${section1}
      ${section2}
      ${section3}
      ${section4}
    `;
  }, [game.id, game.name, game.category, game.description]);

  return (
    <div className="prose prose-invert prose-frog max-w-none mt-8 p-6 bg-surface/30 border border-white/5 rounded-3xl" dangerouslySetInnerHTML={{ __html: content }} />
  );
}
