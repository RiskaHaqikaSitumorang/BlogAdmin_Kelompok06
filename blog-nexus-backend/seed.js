const mongoose = require('mongoose');
const User = require('./models/User');
const Article = require('./models/Article');
const connectDB = require('./config/db');
const dotenv = require('dotenv');

dotenv.config();
connectDB();

const seedData = async () => {
  try {
    // Seed admin user
    await User.deleteMany({});
    await User.create({
      email: 'admin@blognexus.com',
      password: 'admin123',
      role: 'admin',
    });

    // Seed articles
    await Article.deleteMany({});
    await Article.create([
      {
        title: "Membangun Aplikasi Web Modern dengan React",
        content: `
          <p>React telah menjadi salah satu framework JavaScript yang paling populer untuk membangun aplikasi web modern. Dengan pendekatan component-based dan virtual DOM, React memungkinkan developer untuk membuat aplikasi yang cepat, scalable, dan maintainable.</p>
          <h2>Mengapa Memilih React?</h2>
          <p>Ada beberapa alasan mengapa React menjadi pilihan utama para developer:</p>
          <ul>
            <li><strong>Component-Based Architecture:</strong> Memungkinkan penggunaan kembali kode dan organisasi yang lebih baik</li>
            <li><strong>Virtual DOM:</strong> Meningkatkan performa aplikasi dengan update yang efisien</li>
            <li><strong>Large Ecosystem:</strong> Banyak library dan tools yang mendukung development</li>
            <li><strong>Strong Community:</strong> Komunitas yang aktif dan dokumentasi yang lengkap</li>
          </ul>
          <h2>Memulai Proyek React</h2>
          <p>Untuk memulai proyek React baru, Anda dapat menggunakan Create React App atau tools modern seperti Vite:</p>
          <pre><code>npx create-react-app my-app\ncd my-app\nnpm start</code></pre>
          <p>Atau dengan Vite untuk performa yang lebih baik:</p>
          <pre><code>npm create vite@latest my-react-app -- --template react\ncd my-react-app\nnpm install\nnpm run dev</code></pre>
          <h2>Best Practices</h2>
          <p>Berikut adalah beberapa best practices yang sebaiknya diikuti saat mengembangkan aplikasi React:</p>
          <ul>
            <li>Gunakan functional components dengan hooks</li>
            <li>Implementasikan proper state management</li>
            <li>Optimalkan performa dengan React.memo dan useMemo</li>
            <li>Tulis unit tests untuk komponen-komponen penting</li>
            <li>Gunakan TypeScript untuk type safety</li>
          </ul>
          <h2>Kesimpulan</h2>
          <p>React adalah tool yang powerful untuk membangun aplikasi web modern. Dengan memahami konsep-konsep dasar dan mengikuti best practices, Anda dapat membuat aplikasi yang robust dan user-friendly.</p>
        `,
        excerpt: "Pelajari cara membangun aplikasi web yang responsif dan interaktif menggunakan React dan teknologi modern lainnya.",
        author: "John Doe",
        date: "2024-01-15",
        category: "Programming",
        readTime: "5 min",
        image: "https://images.unsplash.com/photo-1498050108023-c5249f4df085?w=1200&h=600&fit=crop",
        status: "published",
        views: 0,
      },
      {
        title: "Tips Menulis Kode yang Bersih dan Maintainable",
        content: "<p>Panduan praktis untuk menulis kode yang mudah dibaca, dipahami, dan dimaintain oleh tim development.</p>",
        excerpt: "Panduan praktis untuk menulis kode yang mudah dibaca, dipahami, dan dimaintain oleh tim development.",
        author: "Jane Smith",
        date: "2024-01-12",
        category: "Best Practices",
        readTime: "7 min",
        image: "https://images.unsplash.com/photo-1461749280684-dccba630e2f6?w=800&h=600&fit=crop",
        status: "published",
        views: 0,
      },
      {
        title: "Mengenal TypeScript untuk Pengembangan JavaScript",
        content: "<p>Mengapa TypeScript menjadi pilihan utama untuk pengembangan aplikasi JavaScript skala besar.</p>",
        excerpt: "Mengapa TypeScript menjadi pilihan utama untuk pengembangan aplikasi JavaScript skala besar.",
        author: "Mike Johnson",
        date: "2024-01-10",
        category: "Programming",
        readTime: "6 min",
        image: "https://images.unsplash.com/photo-1487058792275-0ad4aaf24ca7?w=800&h=600&fit=crop",
        status: "published",
        views: 0,
      },
      {
        title: "Optimasi Performa Website untuk User Experience",
        content: "<p>Strategi dan teknik untuk meningkatkan kecepatan loading dan performa website Anda.</p>",
        excerpt: "Strategi dan teknik untuk meningkatkan kecepatan loading dan performa website Anda.",
        author: "Sarah Wilson",
        date: "2024-01-08",
        category: "Web Performance",
        readTime: "8 min",
        image: "https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?w=800&h=600&fit=crop",
        status: "published",
        views: 0,
      },
    ]);

    console.log('Database seeded successfully');
    mongoose.connection.close();
  } catch (err) {
    console.error('Error seeding database:', err);
    mongoose.connection.close();
  }
};

seedData();