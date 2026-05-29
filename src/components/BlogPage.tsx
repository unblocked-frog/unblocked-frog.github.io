import React from "react";
import { motion } from "motion/react";
import { X, ArrowLeft } from "lucide-react";

interface BlogPageProps {
  onClose: () => void;
}

const articles = [
  {
    id: "5-game-html5-terbaik",
    title: "5 Game HTML5 Terbaik untuk Dimainkan Saat Istirahat",
    date: "May 14, 2026",
    category: "Guides",
    content: `
      <h2>Beristirahat dengan Game Casual</h2>
      <p>Ketika beban kerja atau pelajaran mulai terasa berat, mengambil jeda sejenak untuk bermain game casual bisa menjadi solusi ampuh untuk menyegarkan pikiran. Game berbasis web (HTML5) menawarkan cara tercepat untuk bersenang-senang tanpa perlu mengunduh atau menginstal file yang memberatkan penyimpanan perangkat Anda.</p>
      
      <h2>1. The Rise of Casual IO Games</h2>
      <p>Banyak pemain saat ini lebih memilih game berjenis .io karena sifatnya yang multiplayer namun sangat mudah dipahami. Permainan ini umumnya hanya menggunakan kursor mouse atau sentuhan jari. Anda langsung masuk ke dalam arena, berkompetisi dengan pemain dari seluruh dunia, dan membesarkan karakter Anda untuk bertahan hidup. Game semacam ini merangsang respon cepat dan adrenalin.</p>
      
      <h2>2. Puzzle Penantang Otak</h2>
      <p>Jika Anda lebih suka stimulasi mental, game puzzle adalah pilihan terbaik. Dibandingkan hanya duduk diam, memecahkan teka-teki logika seperti mencocokkan warna, angka, atau menyusun blok dapat membuat pikiran lebih tajam. Permainan ini melatih problem solving secara ringan tanpa memberikan tingkat stres yang tinggi.</p>
      
      <h2>3. Arcade Klasik Retro</h2>
      <p>Tidak ada yang bisa mengalahkan nostalgia dari game arcade retro. Mekanik yang sederhana seperti berlari tanpa henti, melompat menghindari rintangan, atau menembak musuh yang datang bergelombang merupakan inti dari keseruan bermain game. Kemudahan kontrol membuatnya sangat cocok untuk dimainkan dalam jeda waktu 10 hingga 15 menit.</p>
      
      <h2>Kesimpulan</h2>
      <p>Pilihlah game yang paling sesuai dengan mood Anda saat istirahat. Menggunakan waktu luang secara efektif untuk melepaskan penat akan meningkatkan produktivitas Anda ketika kembali bekerja.</p>
    `
  },
  {
    id: "cara-mengatasi-lag",
    title: "Cara Mengatasi Lag Saat Bermain Game di Browser",
    date: "May 10, 2026",
    category: "Tips",
    content: `
      <h2>Kenapa Game Browser Sering Lag?</h2>
      <p>Bermain game langsung di browser memang sangat praktis, namun terkadang masalah penurunan frame rate atau "lag" menjadi kendala utama yang merusak pengalaman bermain. Masalah ini bisa disebabkan oleh beberapa faktor, mulai dari koneksi internet yang tidak stabil, penumpukan cache, hingga masalah pada akselerasi hardware di browser Anda.</p>
      
      <h2>1. Aktifkan Hardware Acceleration</h2>
      <p>Salah satu langkah terpenting adalah memastikan fitur Hardware Acceleration pada browser Anda dalam keadaan aktif. Fitur ini memungkinkan browser untuk menggunakan GPU (Graphics Processing Unit) pada perangkat Anda, alih-alih hanya mengandalkan CPU. Pada Chrome, Anda bisa menemukannya di menu Settings > System > Use hardware acceleration when available.</p>
      
      <h2>2. Bersihkan Cache dan Ekstensi yang Tidak Perlu</h2>
      <p>Ekstensi browser yang berjalan di latar belakang (seperti adblocker, VPN, atau fitur tracking) seringkali memakan banyak memori atau RAM. Jika Anda mengalami lag, cobalah bermain di Incognito Mode (Mode Penyamaran) yang mana mematikan seluruh ekstensi secara default. Jika game berjalan lancar, berarti ada ekstensi yang membuat browser menjadi berat.</p>
      
      <h2>3. Tutup Tab Lain</h2>
      <p>Setiap tab yang terbuka di browser akan memakan alokasi RAM yang cukup besar. Terlebih jika tab tersebut memuat video atau animasi. Tutuplah semua tab yang tidak digunakan sementara Anda bermain game. Semakin banyak RAM yang tersisa, semakin lancar game Anda berjalan.</p>
      
      <h2>Kesimpulan</h2>
      <p>Dengan mengikuti langkah-langkah di atas, Anda bisa menikmati pengalaman bermain yang jauh lebih mulus tanpa perlu upgrade komputer. Pastikan browser Anda juga selalu berada di versi terbaru karena pengembang selalu merilis patch untuk meningkatkan performa.</p>
    `
  },
  {
    id: "evolusi-game-endless-runner",
    title: "Review Mendalam: Evolusi Game Endless Runner",
    date: "April 28, 2026",
    category: "Reviews",
    content: `
      <h2>Awal Mula Kepopuleran Endless Runner</h2>
      <p>Genre "Endless Runner" telah menjadi pilar utama dalam dunia mobile gaming dan web browser. Semuanya dimulai dari game-game sederhana di awal era smartphone yang menuntut kecepatan reaksi pemain tanpa akhir. Daya tarik utamanya adalah: kesederhanaan. Pemain hanya perlu bergerak ke kanan, kiri, atas, atau bawah untuk menghindari rintangan sambil mengumpulkan poin atau koin.</p>
      
      <h2>Transisi ke Platform Browser Web</h2>
      <p>Melihat tingginya minat permain di perangkat mobile, developer mulai membawa genre ini ke teknologi WebGL dan HTML5. Proses adaptasi ini memungkinkan game Endless Runner dimainkan langsung dari PC tanpa harus diunduh. Kecepatan loading instan serta kemampuan berjalan di perangkat keras yang rendah menjadikan game ini fenomena di kalangan pelajar dan pekerja kantor yang mencari hiburan sesaat.</p>
      
      <h2>Fitur Kustomisasi dan Elemen Progresi</h2>
      <p>Permainan Endless Runner modern tidak hanya tentang mencetak skor tertinggi (High Score). Mereka kini mengemas fitur progresi seperti membuka jalan cerita, karakter-karakter baru dengan kemampuan unik, hingga item kosmetik berupa skin. Elemen-elemen inilah yang membuat pemain mau kembali bermain setiap hari.</p>
      
      <h2>Masa Depan Genre Ini</h2>
      <p>Dengan semakin canggihnya browser, visual 3D yang ditampilkan dalam game Endless Runner akan semakin realistis dan mulus. Integrasi dengan papan peringkat global (Leaderboards) dan fitur turnamen langsung kemungkinan akan menjadi standar baru di masa mendatang.</p>
    `
  }
];

export function BlogPage({ onClose }: BlogPageProps) {
  const [selectedArticle, setSelectedArticle] = React.useState<typeof articles[0] | null>(null);

  // Return to article list if escape is pressed
  React.useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") {
        if (selectedArticle) setSelectedArticle(null);
        else onClose();
      }
    };
    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [selectedArticle, onClose]);

  return (
    <div className="fixed inset-0 z-[100] bg-black/95 flex flex-col font-sans overflow-y-auto">
      <div className="sticky top-0 z-10 p-6 flex justify-between items-center bg-black/80 backdrop-blur-md border-b border-white/5">
        <h2 className="text-2xl font-display font-bold text-frog-main uppercase tracking-widest">
          Frog Games Guides & Blog
        </h2>
        <button
          onClick={onClose}
          className="p-2 bg-white/5 hover:bg-white/10 rounded-full transition-colors group"
        >
          <X className="w-6 h-6 text-frog-light group-hover:text-frog-main group-hover:rotate-90 transition-all" />
        </button>
      </div>

      <div className="max-w-4xl mx-auto w-full p-6 py-12 flex-1">
        <AnimatePresence mode="wait">
          {!selectedArticle ? (
            <motion.div
              key="list"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.95 }}
              className="space-y-6"
            >
              <div className="mb-10 text-center">
                <h1 className="text-4xl md:text-5xl font-display font-black text-white mb-4">Master Your Gameplay</h1>
                <p className="text-lg text-frog-light opacity-80 max-w-2xl mx-auto">
                  Increase your skills, fix your browser lag, and read deep dives about your favorite game genres.
                </p>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {articles.map((article) => (
                  <button
                    key={article.id}
                    onClick={() => setSelectedArticle(article)}
                    className="text-left bg-surface/30 border border-white/10 p-6 rounded-2xl hover:border-frog-main hover:bg-surface/50 transition-all group flex flex-col items-start"
                  >
                    <span className="text-[10px] font-black uppercase tracking-widest text-frog-main mb-3 bg-frog-main/10 px-2 py-1 rounded">
                      {article.category}
                    </span>
                    <h3 className="text-xl font-bold text-white mb-2 group-hover:text-frog-main transition-colors">
                      {article.title}
                    </h3>
                    <p className="text-xs text-frog-light opacity-60 mt-auto pt-4">{article.date}</p>
                  </button>
                ))}
              </div>
            </motion.div>
          ) : (
            <motion.div
              key="article"
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -20 }}
              className="bg-surface/30 p-8 md:p-12 rounded-3xl border border-white/10"
            >
              <button
                onClick={() => setSelectedArticle(null)}
                className="flex items-center gap-2 text-frog-light hover:text-frog-main transition-colors mb-8 text-sm uppercase font-bold tracking-widest"
              >
                <ArrowLeft className="w-4 h-4" /> Back to Articles
              </button>
              
              <div className="mb-8">
                <span className="text-[10px] font-black uppercase tracking-widest text-frog-main mb-3 bg-frog-main/10 px-2 py-1 rounded inline-block">
                  {selectedArticle.category}
                </span>
                <h1 className="text-3xl md:text-4xl font-display font-black text-white mt-4 mb-2">{selectedArticle.title}</h1>
                <p className="text-sm text-frog-light opacity-60">{selectedArticle.date}</p>
              </div>

              <div 
                className="prose prose-invert prose-frog max-w-none"
                dangerouslySetInnerHTML={{ __html: selectedArticle.content }}
              />
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </div>
  );
}
