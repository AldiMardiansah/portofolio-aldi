import React from 'react';
import { Layout } from '../layouts';
import { Timeline } from '../components';

const About = () => {
  return (
    <Layout>
      <main className="container mx-auto max-width pt-10 pb-20 mt-10">
        <section>
          <h1 className="text-1xl text-dark-primary dark:text-light-primary md:text-3xl
          xl:text-4xl xl:leading-tight font-bold capitalize"
          >
            about me
          </h1>
          <p className="text-content py-8 lg:max-w-3xl">
            Fullstack Developer yang berdedikasi dan mudah beradaptasi, dengan latar belakang
            jurusan Rekayasa Perangkat Lunak dari SMK Negeri 4 Bandung. Memiliki 2 tahun
            pengalaman dalam Vue.js, Laravel, dan Lumen. Saya mempunyai dasar yang kuat
            dalam pengembangan backend, integrasi API, dan manajemen database MySQL, dan
            saya sangat bersemangat untuk terus belajar dan menerapkan teknologi baru.
          </p>
        </section>
        <section>
          <h1 className="text-1xl text-dark-primary dark:text-light-primary md:text-3xl
          xl:text-4xl xl:leading-tight font-bold capitalize"
          >
            work experience
          </h1>
          <Timeline
            position="Backend Developer"
            company="PT Tabel Data Informatika"
            location="Bandung"
            type="Freelancer"
            duration="Oktober 2024 - Januari 2025"
            description={[
              'Mengembangkan dan membuat API menggunakan Laravel dan Lumen',
              'Mengembangkan dan mengoptimalkan penggunaan database melalui MySQL',
              'Mengimplementasikan autentikasi dan otorisasi menggunakan JWT'
            ]}
          />
          <Timeline
            position="Fullstack Developer"
            company="PT Tabel Data Informatika"
            location="Bandung"
            type="Intership"
            duration="Juli 2024 - Oktober 2024"
            description={[
              'Mengembangkan 2 projek website menggunakan Vue.js dan Laravel',
              'Mengintegrasikan API pada website',
              'Memperbaiki bug dan meningkatkan performa pada website aplikasi'
            ]}
          />
          <Timeline
            position="Frontend Developer"
            company="Teaching Factory SMK Negeri 4 Bandung"
            location="Bandung"
            type="Fulltime"
            duration="Februari 2024 - Juni 2024"
            description={[
              'Membangun antarmuka pengguna yang responsif menggunakan Vue.js',
              'Mengatur dan berkolaborasi dengan tim untuk pengelolaan website yang efektif',
              'Menerapkan praktik pengembangan terbaik dan standar kode'
            ]}
          />
        </section>
        <section className="mt-6">
          <h1 className="text-1xl text-dark-primary dark:text-light-primary md:text-3xl
          xl:text-4xl xl:leading-tight font-bold capitalize"
          >
            education
          </h1>
          <Timeline
            position="Rekayasa Perangkat Lunak"
            company="SMK Negeri 4 Bandung"
            location="Bandung"
            type="Full Time"
            duration="Juli 2022 - Mei 2025"
            description={[
              'Mempelajari dasar-dasar pemrograman, algoritma, dan struktur data',
              'Menguasai kompetensi dasar HTML, CSS, JavaScript, dan framework front-end seperti Vue.js',
              'Mengembangkan keahlian dalam PHP dan framework Laravel dan Lumens'
            ]}
          />
        </section>
      </main>
    </Layout>
  );
};

export default About;
