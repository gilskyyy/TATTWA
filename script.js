/* ===================================================
   EKSPLORASI BUDAYA BULELENG — Main JavaScript
   =================================================== */

/* ─── QUIZ DATA — 20 soal (4 per kecamatan), diacak tiap sesi ─── */
const quizPool = [
  // ══════ SUKASADA (4 soal) ══════
  {
    question: "Di desa mana tradisi Perang Api (Amuk-Amukan) dilaksanakan di Kecamatan Sukasada?",
    options: ["Desa Panji", "Desa Padangbulia", "Desa Wanagiri", "Desa Gitgit"],
    correct: 1,
    explanation: "Perang Api atau Meamuk-amukan adalah ritual tradisional di Desa Adat Padangbulia, Kecamatan Sukasada, sebagai ritual penyucian desa dari Buta Kala.",
    kecamatan: "Sukasada"
  },
  {
    question: "Apa nama alat yang digunakan dalam tradisi Perang Api (Meamuk-amukan) di Padangbulia?",
    options: ["Tombak bambu", "Danyuh (daun kelapa kering)", "Obor dari kayu bakar", "Kembang api tradisional"],
    correct: 1,
    explanation: "Danyuh adalah daun kelapa kering yang diikat menyerupai sapu (mapuput), lalu dibakar dan digunakan untuk saling serang dalam ritual Meamuk-amukan.",
    kecamatan: "Sukasada"
  },
  {
    question: "Permainan tradisional Megoak-goakan terinspirasi dari strategi perang tokoh siapa?",
    options: ["I Gusti Ketut Jelantik", "I Gusti Ngurah Panji Sakti", "Patih Gajah Mada", "Ki Barak Panji"],
    correct: 1,
    explanation: "Megoak-goakan lahir dari strategi perang I Gusti Ngurah Panji Sakti (Ki Barak Panji Sakti), pendiri Kerajaan Buleleng abad ke-17, yang mengamati tingkah laku burung gagak (goak).",
    kecamatan: "Sukasada"
  },
  {
    question: "Apa arti kata 'Goak' dalam bahasa Bali yang menjadi nama permainan Megoak-goakan?",
    options: ["Elang", "Gagak", "Rajawali", "Burung hantu"],
    correct: 1,
    explanation: "'Goak' berarti gagak dalam bahasa Bali. Formasi berbaris panjang ini terinspirasi dari cara kawanan gagak terbang berurutan saat mengincar mangsa.",
    kecamatan: "Sukasada"
  },

  // ══════ GEROKGAK (4 soal) ══════
  {
    question: "Tradisi 'Gebug Ende' di Kecamatan Gerokgak dipercaya bertujuan untuk apa?",
    options: ["Merayakan panen jagung", "Memanggil hujan di musim kemarau", "Menghormati para leluhur desa", "Mengusir hama dari ladang"],
    correct: 1,
    explanation: "Gebug Ende adalah ritual adu pukul rotan di desa-desa Gerokgak yang dipercaya sebagai persembahan kepada Ida Sang Hyang Widhi Wasa agar menurunkan hujan di musim kemarau panjang.",
    kecamatan: "Gerokgak"
  },
  {
    question: "Dari mana asal-usul tradisi Gebug Ende yang kini populer di Gerokgak?",
    options: ["Desa Panji, Sukasada", "Desa Seraya, Karangasem", "Desa Pemuteran, Gerokgak", "Desa Penglipuran, Bangli"],
    correct: 1,
    explanation: "Tradisi Gebug Ende sejatinya dibawa oleh para perantau dari Desa Seraya, Kabupaten Karangasem pada awal abad ke-20 ke wilayah Gerokgak.",
    kecamatan: "Gerokgak"
  },
  {
    question: "Apa nama konsep filosofi keselarasan alam yang dianut masyarakat Pemuteran, Gerokgak?",
    options: ["Tri Hita Karana", "Nyegara Gunung", "Tat Twam Asi", "Rwa Bhineda"],
    correct: 1,
    explanation: "Nyegara Gunung adalah filosofi keselarasan yang menyatukan laut (segara) dan gunung sebagai sumber kehidupan, diterapkan lewat konsep 'Sad Kertih' di Desa Pemuteran.",
    kecamatan: "Gerokgak"
  },
  {
    question: "Apa nama perisai bundar yang digunakan petarung dalam ritual Gebug Ende?",
    options: ["Tameng", "Ende", "Perisai Poleng", "Tamiang"],
    correct: 1,
    explanation: "Ende adalah perisai bundar tradisional yang digunakan oleh petarung untuk menangkis pukulan rotan (penyalin) lawan dalam ritual Gebug Ende.",
    kecamatan: "Gerokgak"
  },

  // ══════ BULELENG KOTA (4 soal) ══════
  {
    question: "Kuliner khas Singaraja yang merupakan perpaduan budaya Tionghoa-Bali adalah...",
    options: ["Tum Bongkol", "Gorengan Ores", "Siobak Singaraja", "Lawar Bali"],
    correct: 2,
    explanation: "Siobak Singaraja adalah kuliner warisan Tionghoa peranakan berupa olahan daging berkuah dengan bumbu rempah Bali, identik dengan kawasan Pecinan Singaraja.",
    kecamatan: "Buleleng (Kota)"
  },
  {
    question: "Gamelan Gong Kebyar yang menjadi identitas seni Bali lahir di Buleleng pada tahun berapa?",
    options: ["Tahun 1895", "Tahun 1915", "Tahun 1925", "Tahun 1945"],
    correct: 1,
    explanation: "Gamelan Gong Kebyar pertama kali tampil publik sekitar tahun 1915 di Desa Jagaraga, Buleleng. Maestro I Mario kemudian mempopulerkan tari Kebyar ke dunia internasional.",
    kecamatan: "Buleleng (Kota)"
  },
  {
    question: "Apa sebutan akrab masyarakat Singaraja untuk saudara yang beragama Islam?",
    options: ["Nyama Hindu", "Nyama Selam", "Nyama Budha", "Nyama Kristen"],
    correct: 1,
    explanation: "'Nyama Selam' (saudara Muslim) dan 'Nyama Bali' (saudara Hindu) adalah sebutan akrab yang menggambarkan harmoni antar umat beragama di Singaraja selama ratusan tahun.",
    kecamatan: "Buleleng (Kota)"
  },
  {
    question: "Siobak Khe Lok, salah satu legenda warung Siobak Singaraja, mulai beroperasi sejak tahun berapa?",
    options: ["Tahun 1945", "Tahun 1963", "Tahun 1978", "Tahun 1950"],
    correct: 1,
    explanation: "Siobak Khe Lok mulai beroperasi sejak tahun 1963 dan menjadi salah satu warung Siobak paling legendaris di kawasan Pecinan Singaraja.",
    kecamatan: "Buleleng (Kota)"
  },

  // ══════ BANJAR (4 soal) ══════
  {
    question: "Tradisi 'Nyakan Diwang' yang menjadi keistimewaan Kecamatan Banjar adalah...",
    options: ["Ritual mandi di sumber air panas", "Memasak bersama di luar rumah pada hari Ngembak Geni", "Berburu kijang menggunakan upih", "Tarian sakral di pura desa"],
    correct: 1,
    explanation: "Nyakan Diwang adalah tradisi memasak di luar rumah (pinggir jalan) pada dini hari saat Ngembak Geni (sehari setelah Nyepi), bermakna penyucian dapur dan silaturahmi antar warga.",
    kecamatan: "Banjar"
  },
  {
    question: "Apa nama vihara Buddha terbesar di Bali yang terletak di Kecamatan Banjar?",
    options: ["Vihara Dharma Giri", "Brahma Vihara Arama", "Vihara Buddha Singaraja", "Vihara Kertanegara"],
    correct: 1,
    explanation: "Brahma Vihara Arama adalah vihara Buddha terbesar di Bali, terletak di perbukitan Banjar, dengan arsitektur unik perpaduan Bali dan replika mini Candi Borobudur.",
    kecamatan: "Banjar"
  },
  {
    question: "Pukul berapa tradisi Nyakan Diwang biasanya dimulai pada hari Ngembak Geni?",
    options: ["Pukul 06.00 WITA", "Pukul 03.00 WITA", "Pukul 12.00 WITA", "Pukul 18.00 WITA"],
    correct: 1,
    explanation: "Nyakan Diwang dimulai sekitar pukul 03.00 WITA pada hari Ngembak Geni, ditandai bunyi kulkul (kentongan) desa yang bersahutan memecah keheningan malam.",
    kecamatan: "Banjar"
  },
  {
    question: "Air Panas Banjar mengandung mineral apa yang dipercaya berkhasiat untuk kesehatan kulit?",
    options: ["Kalsium", "Belerang (Sulfur)", "Magnesium", "Zinc"],
    correct: 1,
    explanation: "Air Panas Banjar mengandung mineral belerang (sulfur) alami berkadar sekitar 26% yang dipercaya berkhasiat untuk menyembuhkan penyakit kulit dan relaksasi otot.",
    kecamatan: "Banjar"
  },

  // ══════ BUSUNGBIU (4 soal) ══════
  {
    question: "Tradisi unik 'Meboros Kidang' di Kecamatan Busungbiu menggunakan senjata berburu berupa apa?",
    options: ["Tombak bambu runcing", "Jerat dari akar rotan", "Upih (pelepah pinang)", "Sumpit beracun tradisional"],
    correct: 2,
    explanation: "Meboros Kidang menggunakan 'upih' yaitu pelepah pinang yang dikeringkan sebagai topi pelindung. Perburuan juga menggunakan senjata tajam tradisional.",
    kecamatan: "Busungbiu"
  },
  {
    question: "Kijang dalam tradisi Meboros Kidang Busungbiu disebut juga dengan nama apa?",
    options: ["I Bulu Macan", "I Bulu Pangi", "I Bulu Kijang", "I Bulu Menjangan"],
    correct: 1,
    explanation: "Kijang yang diburu dalam tradisi Meboros Kidang disebut 'I Bulu Pangi' oleh masyarakat Desa Adat Busungbiu, dan digunakan sebagai sarana yadnya di Pura Puseh.",
    kecamatan: "Busungbiu"
  },
  {
    question: "Ritual apa yang dilaksanakan pada tengah malam sebelum perburuan Meboros Kidang dimulai?",
    options: ["Ritual Ngerauhang", "Ritual Ngajit", "Ritual Mecaru", "Ritual Melasti"],
    correct: 1,
    explanation: "Ritual Ngajit dilaksanakan pada tengah malam untuk memohon petunjuk dari Ida Bhatara mengenai keberadaan kijang yang akan diburu di hutan sakral.",
    kecamatan: "Busungbiu"
  },
  {
    question: "Monumen apa di kawasan Busungbiu/Sukasada yang memperingati ikrar rakyat Bali mempertahankan NKRI?",
    options: ["Monumen Puputan", "Monumen Bhuwana Kerta", "Monumen Merdeka Bali", "Monumen Jagaraga"],
    correct: 1,
    explanation: "Monumen Bhuwana Kerta dibangun untuk memperingati ikrar pemuda-pemuda Bali dalam mengusir penjajah Belanda dan mempertahankan Republik Indonesia.",
    kecamatan: "Busungbiu"
  }
];

/* ─── Shuffle & pick quiz questions ─── */
function shuffleArray(arr) {
  const a = [...arr];
  for (let i = a.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [a[i], a[j]] = [a[j], a[i]];
  }
  return a;
}

function pickQuizQuestions(count) {
  // Pick 1 from each kecamatan, then fill rest randomly
  const kecs = ['Sukasada', 'Gerokgak', 'Buleleng (Kota)', 'Banjar', 'Busungbiu'];
  const picked = [];
  const used = new Set();

  kecs.forEach(kec => {
    const pool = quizPool.filter((q, i) => q.kecamatan === kec && !used.has(i));
    if (pool.length > 0) {
      const shuffled = shuffleArray(pool);
      const q = shuffled[0];
      const idx = quizPool.indexOf(q);
      picked.push(q);
      used.add(idx);
    }
  });

  // Fill remaining slots
  const remaining = quizPool.filter((q, i) => !used.has(i));
  const shuffledRemaining = shuffleArray(remaining);
  const needed = Math.min(count - picked.length, shuffledRemaining.length);
  for (let i = 0; i < needed; i++) {
    picked.push(shuffledRemaining[i]);
  }

  return shuffleArray(picked);
}

/* ─── QUIZ STATE ─── */
let quizData = [];
let currentQ = 0, score = 0, answered = false;

function initQuiz() {
  quizData = pickQuizQuestions(7); // 7 soal per sesi (bervariasi setiap main)
  currentQ = 0; score = 0; answered = false;
  document.getElementById('quizPlay').style.display = 'block';
  document.getElementById('quizResult').classList.remove('show');
  loadQuestion();
}

function loadQuestion() {
  answered = false;
  const q = quizData[currentQ];
  const letters = ['A', 'B', 'C', 'D'];
  const pct = (currentQ / quizData.length) * 100;

  document.getElementById('quizProgressLabel').textContent = `Pertanyaan ${currentQ + 1} dari ${quizData.length}`;
  document.getElementById('quizScoreBadge').textContent = `Skor: ${score}`;
  document.getElementById('quizProgressBar').style.width = pct + '%';
  document.getElementById('quizProgressBar').setAttribute('aria-valuenow', pct);
  document.getElementById('quizQNum').textContent = `Kecamatan: ${q.kecamatan} \u00b7 Pertanyaan #${currentQ + 1}`;
  document.getElementById('quizQuestion').textContent = q.question;

  const fb = document.getElementById('quizFeedback');
  fb.className = 'quiz-feedback';
  fb.textContent = '';

  const nextBtn = document.getElementById('quizNextBtn');
  nextBtn.classList.remove('show');
  nextBtn.innerHTML = currentQ < quizData.length - 1 ? 'Pertanyaan Berikutnya &rarr;' : 'Lihat Hasil Akhir &#127881;';

  const optEl = document.getElementById('quizOptions');
  optEl.innerHTML = '';
  q.options.forEach((opt, idx) => {
    const btn = document.createElement('button');
    btn.className = 'quiz-option';
    btn.setAttribute('id', 'opt-' + idx);
    btn.innerHTML = `<span class="quiz-option-letter">${letters[idx]}</span><span class="quiz-option-text">${opt}</span>`;
    btn.addEventListener('click', () => selectAnswer(idx));
    optEl.appendChild(btn);
  });
}

function selectAnswer(sel) {
  if (answered) return;
  answered = true;
  const q = quizData[currentQ];
  const opts = document.querySelectorAll('.quiz-option');
  const fb = document.getElementById('quizFeedback');

  opts.forEach((o, i) => {
    o.classList.add('disabled');
    if (i === q.correct) o.classList.add('correct');
    else if (i === sel && sel !== q.correct) o.classList.add('wrong');
  });

  if (sel === q.correct) {
    score++;
    document.getElementById('quizScoreBadge').textContent = `Skor: ${score}`;
    fb.className = 'quiz-feedback correct-fb show';
    fb.innerHTML = `<i class="fa-solid fa-circle-check"></i> <strong>Benar!</strong> ${q.explanation}`;
  } else {
    fb.className = 'quiz-feedback wrong-fb show';
    fb.innerHTML = `<i class="fa-solid fa-circle-xmark"></i> <strong>Kurang tepat.</strong> ${q.explanation}`;
  }
  document.getElementById('quizNextBtn').classList.add('show');
}

function nextQuestion() {
  currentQ++;
  if (currentQ >= quizData.length) showResult();
  else loadQuestion();
}

function showResult() {
  document.getElementById('quizPlay').style.display = 'none';
  document.getElementById('quizResult').classList.add('show');
  document.getElementById('quizProgressBar').style.width = '100%';
  document.getElementById('quizProgressBar').setAttribute('aria-valuenow', 100);
  document.getElementById('resultScore').textContent = `${score}/${quizData.length}`;

  const starsEl = document.getElementById('resultStars');
  starsEl.innerHTML = '';
  const filled = Math.round((score / quizData.length) * 5);
  for (let i = 0; i < 5; i++) {
    const s = document.createElement('span');
    s.textContent = '\u2605';
    s.className = i < filled ? 'star-fill' : 'star-empty';
    s.style.animation = `trophyBounce 0.5s ease ${0.3 + i * 0.1}s both`;
    starsEl.appendChild(s);
  }

  const pct = score / quizData.length;
  const configs = [
    [1.0,  '\u{1F3C6}', 'Sempurna! Maestro Budaya Buleleng!', 'Luar biasa! Kamu mengenal Buleleng dengan sangat baik. Kamu adalah penjelajah budaya sejati Bali Utara!'],
    [0.7,  '\u{1F947}', 'Hebat! Hampir Sempurna!', 'Pengetahuanmu tentang budaya Buleleng sangat mendalam. Satu langkah lagi menuju kematangan!'],
    [0.5,  '\u{1F948}', 'Bagus! Kamu Mulai Mengenal Buleleng!', 'Lumayan! Kamu sudah mengenal sebagian besar keunikan Buleleng. Terus eksplorasi!'],
    [0.28, '\u{1F949}', 'Terus Belajar!', 'Masih banyak hal menarik tentang Buleleng yang perlu kamu pelajari. Coba lagi!'],
    [0,    '\u{1F331}', 'Jangan Menyerah!', 'Perjalanan seribu mil dimulai dari satu langkah. Pelajari kembali konten di atas!']
  ];

  const cfg = configs.find(c => pct >= c[0]) || configs[configs.length - 1];
  document.getElementById('resultTrophy').textContent = cfg[1];
  document.getElementById('resultMessage').textContent = cfg[2];
  document.getElementById('resultSubMessage').textContent = cfg[3];
}

function restartQuiz() { initQuiz(); }

/* ─── KECAMATAN TABS ─── */
function switchKec(name) {
  document.querySelectorAll('.kec-card').forEach(c => c.classList.remove('active'));
  document.querySelectorAll('.kec-tab').forEach(t => { t.classList.remove('active'); t.setAttribute('aria-selected', 'false'); });
  const card = document.getElementById('kec-' + name);
  if (card) { card.classList.add('active'); card.classList.add('visible'); }
  const tab = document.getElementById('tab-' + name);
  if (tab) { tab.classList.add('active'); tab.setAttribute('aria-selected', 'true'); }
  setTimeout(() => document.getElementById('kecamatan').scrollIntoView({ behavior: 'smooth', block: 'start' }), 50);
}

/* ─── NAVBAR SCROLL ─── */
const nav = document.getElementById('mainNav');
if (nav) {
  window.addEventListener('scroll', () => { nav.classList.toggle('scrolled', window.scrollY > 60); }, { passive: true });
}

/* ─── MOBILE MENU ─── */
const navToggle = document.getElementById('navToggle');
const mobileMenu = document.getElementById('mobileMenu');
let menuOpen = false;
if (navToggle && mobileMenu) {
  navToggle.addEventListener('click', () => {
    menuOpen = !menuOpen;
    mobileMenu.style.display = menuOpen ? 'flex' : 'none';
    navToggle.setAttribute('aria-expanded', menuOpen);
  });
}
function closeMobileMenu(e) {
  menuOpen = false;
  if (mobileMenu) mobileMenu.style.display = 'none';
  if (navToggle) navToggle.setAttribute('aria-expanded', 'false');
}

/* ─── SCROLL REVEAL ─── */
const revealObs = new IntersectionObserver((entries) => {
  entries.forEach(e => { if (e.isIntersecting) { e.target.classList.add('visible'); revealObs.unobserve(e.target); } });
}, { threshold: 0.1, rootMargin: '0px 0px -40px 0px' });
document.querySelectorAll('.reveal').forEach(el => revealObs.observe(el));

/* ─── COUNTER ANIMATION ─── */
function animateCount(el, target, suffix) {
  const dur = 1800, start = performance.now();
  (function upd(now) {
    const p = Math.min((now - start) / dur, 1);
    const e = 1 - Math.pow(1 - p, 3);
    el.textContent = Math.floor(e * target) + suffix;
    if (p < 1) requestAnimationFrame(upd); else el.textContent = target + suffix;
  })(performance.now());
}
const stripObs = new IntersectionObserver((entries) => {
  if (entries[0] && entries[0].isIntersecting) {
    document.querySelectorAll('[data-target]').forEach(el => animateCount(el, +el.dataset.target, el.dataset.suffix || ''));
    stripObs.disconnect();
  }
}, { threshold: 0.5 });
const strip = document.getElementById('intro-strip');
if (strip) stripObs.observe(strip);

/* ─── HERO PARTICLES ─── */
(function createParticles() {
  const container = document.getElementById('particles');
  if (!container) return;
  const colors = ['#C9A84C', '#C0576A', '#E6C97A', '#8B2A4A', 'rgba(255,255,255,0.6)'];
  for (let i = 0; i < 22; i++) {
    const p = document.createElement('div');
    p.className = 'particle';
    const size = Math.random() * 5 + 2;
    p.style.cssText = `left:${Math.random()*100}%;bottom:-20px;width:${size}px;height:${size}px;background:${colors[i%colors.length]};animation-delay:${Math.random()*12}s;animation-duration:${Math.random()*10+8}s;`;
    container.appendChild(p);
  }
})();

/* ─── ACTIVE NAV SECTION ─── */
const sectionIds = ['hero', 'kecamatan', 'highlights', 'game', 'footer'];
const navAnchors = document.querySelectorAll('.nav-link-item');
if (navAnchors.length > 0) {
  const secObs = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        navAnchors.forEach(a => a.classList.remove('active-section'));
        const match = document.querySelector(`.nav-link-item[href="#${entry.target.id}"]`);
        if (match) match.classList.add('active-section');
      }
    });
  }, { threshold: 0.35 });
  sectionIds.forEach(id => { const el = document.getElementById(id); if (el) secObs.observe(el); });
}

/* ─── INIT ─── */
const quizNextBtn = document.getElementById('quizNextBtn');
if (quizNextBtn) {
  quizNextBtn.addEventListener('click', nextQuestion);
  initQuiz();
}

/* ===================================================
   FAQ & TESTIMONI - GOOGLE SHEETS INTEGRATION
   =================================================== */

// Konfigurasi Google Sheets
// Masukkan URL Google Apps Script Anda (Setelah melakukan deploy script)
const APPS_SCRIPT_URL = 'https://script.google.com/macros/s/AKfycbxaoXwfdhFwKPlFsq9VInxtWGlVJ1RRTuB8iCo7wroXu9n6UBCWgydq34EVLXzse8VfPA/exec';

// Inisialisasi saat DOM dimuat
document.addEventListener('DOMContentLoaded', () => {
  if (document.getElementById('feedbackForm')) {
    setupFeedbackForm();
  }
});



/* ─── FORM SUBMIT UNIFIED FEEDBACK ─── */
function setupFeedbackForm() {
  const form = document.getElementById('feedbackForm');
  const alertBox = document.getElementById('feedbackAlert');
  const btnSubmit = document.getElementById('btnSubmitFeedback');
  
  if(!form) return;

  form.addEventListener('submit', (e) => {
    e.preventDefault();
    
    if(APPS_SCRIPT_URL === 'MASUKKAN_URL_APPS_SCRIPT_ANDA_DI_SINI' || APPS_SCRIPT_URL.includes('AKfycbwOXAy9PSxI3ZoClPvz00IzuCPb0qzLlBUPZnee5oLTPYQshWp3AsHNq24FMn_r6LaE')) {
      showAlert('Sistem belum diperbarui. Harap perbarui Google Apps Script Anda (lihat panduan).', 'warning');
      return;
    }

    const nama = document.getElementById('namaFeedback').value;
    const pesan = document.getElementById('pesanFeedback').value;
    const selectedRating = document.querySelector('input[name="ratingScale"]:checked');
    
    if (!selectedRating) {
      showAlert('Silakan pilih skala penilaian 1 hingga 5.', 'warning');
      return;
    }
    
    const nilaiRating = selectedRating.value;
    
    btnSubmit.disabled = true;
    btnSubmit.innerHTML = '<span class="spinner-border spinner-border-sm" role="status" aria-hidden="true"></span> Mengirim...';
    
    // Siapkan data formData
    const formData = new FormData();
    formData.append('Type', 'Feedback');
    formData.append('Nama', nama);
    formData.append('Nilai', nilaiRating);
    formData.append('Pesan', pesan);

    fetch(APPS_SCRIPT_URL, {
      method: 'POST',
      body: formData
    })
    .then(response => {
      if(response.ok) {
        showAlert('<i class="fa-solid fa-check"></i> Terima kasih! Penilaian & pesan Anda telah berhasil dikirim.', 'success');
        form.reset();
      } else {
        throw new Error('Network response was not ok.');
      }
    })
    .catch(error => {
      console.error('Error:', error);
      showAlert('Gagal mengirim pesan. Silakan coba lagi nanti.', 'danger');
    })
    .finally(() => {
      btnSubmit.disabled = false;
      btnSubmit.innerHTML = '<i class="fa-solid fa-paper-plane"></i> Kirim Penilaian & Pesan';
    });
  });

  function showAlert(msg, type) {
    alertBox.className = `alert alert-${type} p-3 fw-medium`;
    alertBox.innerHTML = msg;
    alertBox.style.display = 'block';
    setTimeout(() => { alertBox.style.display = 'none'; }, 5000);
  }
}


