# Notes App Back-End

Notes App Back-End adalah aplikasi server untuk mengelola catatan menggunakan Node.js dan Express.

## Fitur
- Menambahkan catatan.
- Mendapatkan semua catatan.
- Mendapatkan catatan berdasarkan ID.
- Memperbarui catatan berdasarkan ID.
- Menghapus catatan berdasarkan ID.

## Persiapan
### Prasyarat
- Node.js versi 16 atau lebih baru.
- npm (disertakan dengan Node.js).

### Instalasi
1. **Kloning Repositori**
   ```bash
   git clone https://github.com/username/notes-app-back-end.git
   cd notes-app-back-end

2. **Instal Dependensi**
   ```bash
   npm install

3. **Menjalankan Server**
- **Untuk Pengembangan**, gunakan perintah berikut untuk menjalankan server dalam mode pengembangan:
  ```bash
  npm run start-dev
 - Server akan berjalan di localhost:3000 dengan mode pengembangan (NODE_ENV=development).

- **Untuk Produksi**, gunakan perintah berikut untuk menjalankan server dalam mode produksi:
  ```bash
  npm run start-prod
- Server akan berjalan di 0.0.0.0:5000 dengan mode produksi (NODE_ENV=production).

4. **Skrip npm**
- npm start: Menjalankan server tanpa pengaturan lingkungan.
- npm run start-dev: Menjalankan server dalam mode pengembangan dengan nodemon.
- npm run start-prod: Menjalankan server dalam mode produksi.
