# 🦷 Dental Caries Care

**Dental Caries Care** adalah aplikasi edukasi dan skrining sederhana mengenai kesehatan gigi, khususnya gigi berlubang (dental caries).
Aplikasi ini dibuat sebagai media pembelajaran interaktif yang menggabungkan **edukasi, kuis/skrining, dan solusi personalisasi** berdasarkan hasil penilaian.

---

## ✨ Fitur Utama

1 **Halaman Welcome**: Informasi pembuat, institusi, dan navigasi awal.
2 **Biodata**: Input data dasar (nama, umur, jenis kelamin).
3 **Edukasi**: Materi tentang gigi berlubang lengkap dengan teks, gambar, animasi, dan video.
4 **Skrining**: Kuesioner sederhana untuk menilai risiko gigi berlubang.
5 **Hasil Penilaian**: Menampilkan skor, interpretasi (rendah/sedang/tinggi), serta solusi dan rekomendasi.
6 **Unduh PDF**: Hasil skrining dapat diunduh sebagai file PDF.
7 **Game Edukasr**: Mini game interaktif untuk melatih kebiasaan menjaga kesehatan gigi.

---

## 🛠️ Teknologi yang Digunakan

* **Frontend**: TailWindCSS, React (TypeScript)
* **Backend**: Node.js.
* **PDF Generator**: jsPDF.
* **Database**: SQLite. ORM menggunakan Prisma

---

## 📌 Alur Program

1. **Welcome → Next**
2. **Login Biodata → Input Nama, Umur, Jenis Kelamin**
3. **Edukasi → Materi + Animasi/Video + Game**
4. **Skrining → Jawab pertanyaan kuis**
5. **Submit → Hitung skor**
6. **Hasil Penilaian → Tampilkan risiko + solusi + opsi unduh PDF**

---

## 🎯 Tujuan

* Memberikan edukasi mengenai kesehatan gigi dengan cara interaktif.
* Membantu pengguna mengetahui risiko gigi berlubang melalui skrining sederhana.
* Memberikan solusi preventif maupun kuratif dasar untuk menjaga kesehatan gigi.

---

## 📂 Struktur Project (contoh)

```
Dental-Caries-Care/
├── index.html
├── /assets
│   ├── images/
│   ├── videos/
│   └── css/
├── /js
│   └── main.js
├── /data
│   └── questions.json
└── README.md
