 


![License](https://img.shields.io/badge/license-MIT-blue.svg)
![Status](https://img.shields.io/badge/status-active-brightgreen)
![Built With](https://img.shields.io/badge/Built%20With-React%2C%20Express%2C%20MongoDB-blue)

**BlogNexus** adalah sistem manajemen blog modern yang dibangun menggunakan **React**, **Express.js**, dan **MongoDB**. Dirancang khusus untuk administrator, BlogNexus memungkinkan Anda membuat, mengedit, dan menghapus artikel, mengelola konten, serta melihat statistik dasar — semuanya dalam antarmuka bertema gelap yang elegan.

---

## ✨ Fitur Utama

- **Dashboard Admin**: Pantau statistik seperti jumlah artikel, artikel yang dipublikasikan, dan total views.
- **Manajemen Artikel**: Tambah, edit, dan hapus artikel lengkap dengan judul, konten (HTML), ringkasan, URL gambar, kategori, penulis, waktu baca, dan status.
- **Autentikasi Admin**: Login aman menggunakan autentikasi berbasis JWT.
- **Halaman User Umum**: Tampilan semua artikel yang sudah di publish oleh admin dan bisa di baca oleh pengguna umum.

---

## 🧰 Teknologi yang Digunakan

### 🔹 Frontend (client)
- **React** – Library UI berbasis komponen.
- **TypeScript** – Superset JavaScript dengan tipe statis.
- **Tailwind CSS** – Framework CSS utility-first.
- **Axios** – Klien HTTP untuk komunikasi API.
- **React Toastify** – Notifikasi responsif.

### 🔹 Backend (server)
- **Express.js** – Framework web untuk Node.js.
- **MongoDB** – Database NoSQL.
- **Mongoose** – ODM untuk MongoDB.
- **JWT** – JSON Web Token untuk autentikasi.
- **Bcrypt** – Enkripsi password.

---

## ⚙️ Prasyarat

- **Node.js** v18 atau lebih baru
- **MongoDB** (lokal atau remote seperti MongoDB Atlas)
- **Git**

---

## 🚀 Instalasi & Menjalankan Proyek

### 1. Clone Repositori

```bash
git clone [https://github.com/your-username/blognexus.git](https://github.com/RiskaHaqikaSitumorang/BlogAdmin_Kelompok06.git)
cd breezy-blog-nexus
````

### 2. Setup Backend (server)

```bash
cd blog-nexus-backend
npm install
```

Buat file `.env` di folder `server/`:

```
MONGO_URI=mongodb://localhost:27017/blog-nexus
JWT_SECRET=your_jwt_secret_here
PORT=5000
```

Jalankan backend:

```bash
npm run dev
```

### 3. Setup Frontend (client)

```bash
cd ..
npm install
npm start
```

Frontend akan berjalan di: `http://localhost:3000`
Backend di: `http://localhost:5000`

---

## 🔐 Akses Dashboard Admin

Buka: [http://localhost:3000/admin](http://localhost:3000/admin)
Login dengan kredensial default:

```
Email:    admin@blognexus.com
Password: admin123
```


## 🗂️ Struktur Proyek

```
breezy-blog-nexus/       # Frontend (React)
│   ├── src/
│   │   ├── components/  # Komponen UI (e.g., ArticleForm, ArticleList)
│   │   ├── types.ts     # Tipe TypeScript terpusat
│   │   └── index.css    # Global style (Tailwind)
│   └── package.json
├── blog-nexus-backend/              # Backend (Express.js)
│   ├── src/
│   │   ├── models/      # Skema Mongoose (Article, User)
│   │   ├── routes/      # Routing API
│   │   └── middleware/  # Middleware (e.g., auth)
│   ├── .env
│   └── package.json
└── README.md
```

---

## 📝 Cara Menggunakan

### ➕ Tambah Artikel

1. Login ke dashboard admin.
2. Klik tab **Tambah Artikel**.
3. Isi semua kolom (HTML diizinkan di konten).
4. Klik **Tambah** untuk menyimpan.

### ✏️ Edit Artikel

1. Di tab **Daftar Artikel**, klik tombol **Edit** (biru).
2. Ubah isi artikel lalu klik **Perbarui**.

### 🗑️ Hapus Artikel

1. Klik tombol **Hapus** (merah) di daftar artikel.
2. Konfirmasi penghapusan.

---

## 📸 Tangkapan Layar

### Dashboard Admin

![Dashboard Screenshot](screenshots/admin-dashboard.png)

### Daftar Artikel

![Article List Screenshot](screenshots/article-list.png)

---

## 👥 Kontributor

| Nama | NPM | 
|------|-----|
| Berliani Utami | 2208107010082 |
| Raihan Firyal | 2208107010084 |
| Riska Haqika Situmorang | 2208107010086 | 
---

## 📄 Lisensi

Proyek ini menggunakan lisensi **MIT**. Lihat file [LICENSE](./LICENSE) untuk detail.



