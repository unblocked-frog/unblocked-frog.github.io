import React, { useMemo } from 'react';

interface Game {
  id: string;
  name: string;
  category: string;
  description: string;
}

interface GameReviewGeneratorProps {
  game: Game;
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
  "Jika Anda sedang mencari hiburan instan yang mampu mengusir rasa bosan, {game} adalah pilihan yang tidak boleh Anda lewatkan. Mengusung elemen-elemen khas dari genre {category}, permainan ini berhasil mengemas mekanik yang sederhana menjadi sebuah pengalaman bermain yang sangat adiktif.",
  "Kehadiran {game} di ranah browser gaming memberikan warna tersendiri bagi para pecinta genre {category}. Sejak menit pertama, pemain akan langsung disuguhkan dengan tantangan yang menguji kecepatan respon dan ketangkasan.",
  "Bicara soal game web yang memadukan kesederhanaan kontrol dengan tingkat kesulitan yang terus meningkat, nama {game} tentu harus masuk dalam daftar. Mewakili genre {category}, game ini menjanjikan berjam-jam keseruan tanpa perlu instalasi yang rumit."
];

const gameplayDetails = [
  "Gameplay-nya dirancang dengan lengkungan pembelajaran (learning curve) yang pas—mudah untuk dipahami oleh pemula, namun butuh dedikasi tinggi untuk benar-benar menguasainya. Setiap level dirancang secara teliti (meticulous) untuk memberikan progres kesulitan yang logis sehingga pemain tidak merasa frustrasi di awal permainan. Fokus utamanya adalah bagaimana Anda dapat memanfaatkan momentum dan timing secara tepat.",
  "Inti dari permainan ini terletak pada refleks cepat dan kemampuan membaca situasi dalam hitungan detik. Mengendalikan karakter atau objek di dalam layar terasa sangat responsif, memberikan ilusi kontrol penuh kepada sang pemain. Berbeda dengan judul-judul lain di genre yang sama, judul ini memberikan apresiasi ekstra untuk manuver berisiko tinggi yang berhasil dieksekusi dengan sempurna.",
  "Mekanisme kontrolnya sangat mulus, menjadikannya salah satu game HTML5 paling responsif yang pernah dirilis. Kebebasan bergerak dan berbagai opsi aksi membuat permainan ini tidak terasa linear. Anda bisa bereksperimen dengan berbagai pendekatan berbeda untuk melewati setiap rintangan yang menghadang, menjadikannya sangat bersahabat bagi pemain kasual maupun hardcore."
];

const historySections = [
  (name: string) => `<h2>Sejarah Singkat ${name}</h2><p>Dikembangkan sebagai bentuk evolusi dari tren game kasual, judul ini mulai mendapat sorotan besar di komunitas portal web game internasional. Mengambil inspirasi dari game arkade klasik tahun 90-an yang kemudian disematkan teknologi WebGL modern, pengembangnya secara perlahan menambahkan aset-aset grafis baru yang memanjakan mata tanpa mengorbankan framerate. Seiring berjalannya waktu, game ini terus mendapat pembaruan kecil secara berkala (minor updates) yang memperbaiki bugs dan mendongkrak performa secara umum di berbagai peramban modern.</p>`,
  (name: string) => `<h2>Latar Belakang & Sejarah ${name}</h2><p>Popularitas game seperti ini sebenarnya tidak datang dalam semalam. Berawal dari proyek eksperimental sederhana yang mengeksplorasi batas kemampuan mesin HTML5, sang developer melihat potensi besar dari reaksi positif komunitas awal. Prototipe yang mulanya hanya memiliki mekanik dasar mulai diperluas hingga mencakup sistem fisika yang lebih kompleks dan desain level yang lebih luas. Kini, game ini berdiri sebagai salah satu yang populer di kalangan pemain muda yang menyukai aksesibilitas cepat tanpa ribet.</p>`,
  (name: string) => `<h2>Perjalanan Evolusi Pengembangan</h2><p>Awal kemunculannya mungkin tidak terlalu mengguncang jagat maya, namun lewat optimalisasi rutin (routine optimization), produk ini sukses menemukan momentumnya. Berbasis dari ide brilian untuk menyederhanakan genre yang rumit menjadi satu paket compact yang bisa dimainkan dalam jendela browser. Para desainer juga sangat transparan dalam mendengarkan keluhan pemain di versi-versi terdahulu, sehingga mekanik yang kita nikmati hari ini merupakan hasil polesan berbulan-bulan yang lahir murni berkat dukungan komunitas permainannya.</p>`
];

const whyFunSections = [
  (desc: string) => `<h2>Kenapa Game Ini Sangat Seru?</h2><p>Selain karena, "${desc}", daya pikat utamanya ada pada siklus permainannya (gameplay loop) yang sangat memuaskan. Ketika Anda kalah atau gagal melewati sebuah babak, rasa penasaran akan terus memaksa jari Anda menekan tombol 'Main Lagi'. Transisi antar ronde yang sangat cepat (tanpa loading screen yang lama) membuat pemain tanpa sadar telah menghabiskan waktu berjam-jam untuk memecahkan rekor mereka sebelumnya.</p>`,
  (desc: string) => `<h2>Alasan Mengapa Anda Akan Ketagihan</h2><p>Berpegang pada deskripsi klasiknya: "${desc}", game ini punya bumbu rahasia yang tidak dimiliki pesaingnya—yakni feedback visual yang sangat "juicy". Mulai dari partikel efek saat berhasil, goyangan layar yang ringan (screen shake), hingga suara efek renyah yang menemani setiap aksi Anda. Kombinasi faktor neuro-estetika ini memicu dopamin secara berkesinambungan setiap kali Anda mencapai sekadar checkpoint kecil sekalipun.</p>`,
  (desc: string) => `<h2>Titik Keseruan Tersembunyi</h2><p>Banyak penggemar setuju bahwa letak keseruannya ada pada elemen kompetisi diri sendiri. Seperti tertulis dalam deskripsi singkat: "${desc}". Meskipun terlihat simpel, ada lapisan kedalaman strategi jika Anda benar-benar mau memperhatikannya. Pola rintangan yang terkadang bersifat acak (procedurally generated) memastikan bahwa tidak ada dua sesi permainan yang memiliki alur 100% sama, menjaga rasa segar (freshness) setiap kali Anda membuka gamenya.</p>`
];

const tipsSections = [
  "<h2>Tips Jitu: Strategi dan Cara Bermain</h2><ul><li><strong>Pahami Ritme Awal:</strong> Jangan terlalu terburu-buru di fase-fase awal permainan. Biasakan mata dan tangan Anda terlebih dahulu dengan sensitivitas kontrol.</li><li><strong>Fokus ke Pusat Layar:</strong> Jangan hanya terpaku pada posisi avatar Anda; pusatkan pandangan ke tengah untuk mengantisipasi bahaya sedini mungkin.</li><li><strong>Manfaatkan Jeda:</strong> Terkadang, tidak mengambil tindakan apa-apa lebih baik daripada bergerak gegabah. Timing adalah segalanya.</li><li><strong>Tetap Tenang Saat Terjepit:</strong> Panik hanya akan membawa Anda pada kesalahan fundamental. Bernapaslah dan lepaskan tombol jika situasi semakin kacau.</li></ul><p>Semoga dengan memahami kiat-kiat di atas, skor maksimum Anda akan terus meroket tajam!</p>",
  "<h2>Cara Ampuh Memenangkan Permainan</h2><ul><li><strong>Posisikan Jari Tepat di Atas Tombol:</strong> Respon berkedip sangat penting. Kurangi waktu delay dari pikiran ke jari dengan cara selalu waspada.</li><li><strong>Kenali Rute Aman:</strong> Dalam beberapa sesi, jalur tertentu memiliki tingkat toleransi kesalahan lebih lebar. Hafalkan pola kemunculannya.</li><li><strong>Abaikan Kosmetik di Awal:</strong> Menyiksa diri untuk mendapatkan satu koin atau item nyawa ekstra yang berada di wilayah mematikan bukanlah pertukaran yang adil. Terus melaju!</li><li><strong>Istirahat Berkala:</strong> Karena sangat membutuhkan fokus visual tinggi, pastikan Anda meregangkan mata setiap 20 menit sekali agar tidak mengalami kelelahan mata akut.</li></ul><p>Terapkan gaya bermain pragmatis ini secara konsisten, maka Anda pasti bisa menaklukkan puncak peringkat dengan mudah!</p>",
  "<h2>Panduan Strategi Level Mahir (Advanced Tips)</h2><ul><li><strong>Manipulasi Hitbox:</strong> Pelajari seberapa besar batas presisi dari karakter Anda. Seringkali Anda dapat 'menyerempet' objek berbahaya tanpa terkena luka.</li><li><strong>Efisiensi Gerak (Input Efficiency):</strong> Semakin sedikit aksi kontrol mikro yang tidak penting, semakian baik. Kurangi memencet arah/tombol berulang untuk hal-hal yang dapat dihindari lewat satu gerakan mulus.</li><li><strong>Amati Indikasi Audio:</strong> Mainkan dengan suara menyala, karena banyak sekali isyarat audio terselubung yang dirancang developer untuk memberi tahu pemain akan serangan mendadak.</li><li><strong>Review Kesalahan:</strong> Saat mati, jujurlah pada diri sendiri kenapa Anda bisa gagal; jangan cuma menyalahkan ketidakadilan sistem mekanik.</li></ul><p>Praktikkan rahasia profesional ini, dan rasakan perubahan kualitas permainan Anda yang drastis.</p>"
];

export function GameReviewGenerator({ game }: GameReviewGeneratorProps) {
  const content = useMemo(() => {
    // Determine random seed based on game ID
    const seed = xmur3(game.id)();
    const rand = sfc32(seed, seed + 1, seed + 2, seed + 3);

    const pick = (arr: any[]) => arr[Math.floor(rand() * arr.length)];

    const p1 = pick(gameplayIntros)
      .replace("{game}", `<strong>${game.name}</strong>`)
      .replace("{category}", `<em>${game.category}</em>`);
    const p2 = pick(gameplayDetails);
    
    // Create paragraphs
    const section1 = `<h2>Gameplay dan Mekanik Utama</h2><p>${p1} ${p2}</p>`;
    
    const hFunc = pick(historySections);
    const section2 = hFunc(game.name);

    const funFunc = pick(whyFunSections);
    // Sanitize description
    const safeDesc = (game.description || "Sebuah permainan yang seru dan menantang").replace(/<[^>]*>?/gm, "").slice(0, 150) + "...";
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
