import {
  FPresence,
  Astina,
  FProperties,
  Siwik,
  Keraton,
  Nusafood,
} from '../assets';

export const projects = [
  {
    title: '4Presence',
    image: FPresence,
    description: `Website ini digunakan sebagai pengelolaan
      data absensi siswa di sekolah SMK Negeri 4 Bandung`,
    techstack: 'Node.js, Prisma, Postman',
    periode: 'Januari 2025 - Sekarang',
    role: 'Database Manager',
  },
  {
    title: 'Astina (Aplikasi Koleksi Benda Seni Istana Kepresidenan)',
    image: Astina,
    description: `Website yang berfungsi untuk melakukan
      pengelolaan mutasi asset benda seni di lingkungan istana kepresidenan`,
    techstack: 'PHP, Laravel, Lumens, Postman',
    periode: 'Oktober 2024 - Januari 2025',
    role: 'Backend Developer',
  },
  {
    title: '4Properties',
    image: FProperties,
    description: `Website yang dirancang untuk membantu sekolah
      dalam pengelolaan asset peralatan dan fasilitas yang ada di SMK Negeri 4 Bandung`,
    techstack: 'Vue.js, Node.js, Tailwind, Prisma, Hoppscotch, Postman',
    periode: 'November 2024 - Desember 2024',
    role: 'Frontend Developer',
  },
  {
    title: 'SIWIK (Sistem Informasi Wartawan Istana Kepresidenan)',
    image: Siwik,
    description: `Sebuah website yang digunakan untuk pengelolaan
      kehadiran wartawan media di istana presiden`,
    techstack: 'Vue.js, Node.js, Laravel, Lumens, Figma, Postman',
    periode: 'Juli 2024 - September 2024',
    role: 'Fullstack Developer',
  },
  {
    title: 'Keraton Point Of Sales',
    image: Keraton,
    description: `Keraton POS merupakan sebuah website yang mengatur dan
     mengelola penjualan berbasis ticketing online`,
    techstack: 'Vue.js, Node.js, Prisma',
    periode: 'Februari 2024 - Juni 2024',
    role: 'Frontend Developer',
  },
  {
    title: 'NusaFood',
    image: Nusafood,
    description: `NusaFood merupakan sebuah website restoran yang
     mengelola manajemen resto dan mengatur sistem reservasi online`,
    techstack: 'Html, Css, Javascript, Bootstrap',
    periode: 'Juni 2024',
    role: 'Frontend Developer',
  },
];
