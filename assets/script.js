// ====================== navbar fixed ==================================

const fixNav = () => {
  const nav = document.getElementById('nav');
  const cardHeader = document.querySelector('.card-header');
  const navbarHeight = cardHeader.offsetHeight;
  const scrollTop = window.pageYOffset || document.documentElement.scrollTop;
  if (scrollTop > navbarHeight) {
    nav.classList.add('navbar-fixed');
  } else {
    nav.classList.remove('navbar-fixed');
  }
};

fixNav();

window.addEventListener('scroll', fixNav);

// ====================== scroll target ==================================

const navLinks = document.querySelectorAll('.nav-item a');

navLinks.forEach((link) => {
  link.addEventListener('click', (event) => {
    event.preventDefault();

    const targetId = link.getAttribute('href');

    if (targetId === '#') {
      // Jika link home diklik, kembalikan ke elemen home dan tambahkan class active pada elemen home
      window.scrollTo({
        top: 0,
        behavior: 'smooth',
      });
      navLinks.forEach((link) => {
        if (link.getAttribute('href') === '#') {
          link.classList.add('active');
        } else {
          link.classList.remove('active');
        }
      });
      return;
    }

    // Hapus class active dari semua elemen <a>
    navLinks.forEach((link) => link.classList.remove('active'));

    // Tambahkan class active pada elemen <a> yang baru saja diklik
    link.classList.add('active');

    const target = document.querySelector(link.getAttribute('href'));
    const selectTarget = document.querySelectorAll(link.getAttribute('href'));
    selectTarget.forEach((target) => target.classList.remove('p-5'));
    target.classList.add('p-5');
    const cardHeader = document.querySelector('.card-header');
    const navbarHeight = cardHeader.offsetHeight;
    const targetTop = target.getBoundingClientRect().top + window.scrollY - navbarHeight;
    window.scrollTo({
      top: targetTop,
      behavior: 'smooth',
    });
  });
});

// ======================== text typing ================================
const myDiv = document.getElementById('myJob');
const types = myDiv.dataset.type.split(','); //mengambil nilai tipe data dan memisahkan dengan koma
let currentIndex = 0;

function typingEffect() {
  let currentType = types[currentIndex];
  let text = `${currentType}`; //menambahkan nilai tipe data ke dalam kalimat

  let i = 0;
  const intervalId = setInterval(() => {
    if (i >= text.length) {
      clearInterval(intervalId);
      setTimeout(() => {
        currentIndex = (currentIndex + 1) % types.length;
        typingEffect();
      }, 1000); //delay 1 detik sebelum mengetik kalimat baru
    } else {
      myDiv.innerHTML = text.slice(0, i + 1);
      i++;
    }
  }, 100); //delay 0.1 detik setiap karakter yang diketik
}

typingEffect(); //memulai efek ketik pada halaman web

// ====================== lihat lebih banyak  ===========================
const data = [
  {
    id: 1,
    color: 'text-danger',
    icon: 'html5',
    title: 'HTML',
    subTitle: 'HTML5',
    description:
      'Sebagai ahli HTML5, saya dapat membuat struktur konten halaman web, tampilan visual yang menarik dan responsif, serta memanfaatkan fitur HTML5 seperti geolocation dan localStorage untuk membuat pengalaman pengguna yang lebih interaktif. Saya juga mampu membuat halaman web yang ramah SEO dengan mengoptimalkan tag HTML5.',
  },
  {
    id: 2,

    color: 'text-primary',
    icon: 'css3',
    title: 'CSS',
    subTitle: 'CSS3',
    description:
      'Saya memiliki kemampuan dalam CSS, yang memungkinkan saya untuk mendesain tampilan website dengan kualitas tinggi, tata letak yang baik, dan animasi yang menarik. Dengan keterampilan ini, saya dapat menghasilkan desain website yang responsif dan menarik bagi pengguna.',
  },
  {
    id: 3,
    color: 'text-warning',
    icon: 'javascript',
    title: 'Javascript',
    subTitle: 'Javascript',
    description:
      'Saya memiliki keterampilan dalam JavaScript yang memungkinkan saya untuk memprogram website dan membuat interaksi dinamis antara pengguna dan halaman website, seperti validasi form, navigasi dropdown, dan animasi yang menarik. Dengan kemampuan ini, saya mampu menghasilkan website yang interaktif dan responsif, serta meningkatkan pengalaman pengguna pada website tersebut.',
  },
  {
    id: 4,
    color: 'text-primary',
    icon: 'bootstrap',
    title: 'Bootstrap',
    subTitle: 'Bootstrap',
    description:
      'Saya memiliki kemampuan dalam menggunakan Bootstrap, sebuah framework CSS yang memungkinkan saya untuk membuat tampilan website dengan cepat dan mudah berkat fitur-fitur yang telah disediakan, seperti grid system, komponen UI, dan responsivitas yang baik.',
  },
  {
    id: 5,
    color: 'text-primary',
    icon: 'react',
    title: 'ReactJS',
    subTitle: 'ReactJS',
    description:
      'Saya memiliki kemampuan dalam ReactJS, yang memungkinkan saya untuk menciptakan aplikasi web modern dengan teknologi front-end terbaru untuk memudahkan pengguna dalam mengakses informasi. Dengan ReactJS, saya dapat membangun antarmuka pengguna yang dinamis, responsive, dan dapat diakses dengan mudah di berbagai perangkat. Saya juga dapat memanfaatkan berbagai library dan framework terkait ReactJS untuk membuat aplikasi web yang berkualitas tinggi dan memenuhi kebutuhan pengguna dengan baik.',
  },
  {
    id: 6,
    color: 'text-success',
    icon: 'nodejs',
    title: 'NodeJs',
    subTitle: 'NodeJs',
    description:
      'Saya memiliki kemampuan dalam NodeJS, yaitu mampu membangun aplikasi web server-side dengan cepat dan efisien. Dalam pengembangan aplikasi, saya dapat menggunakan NodeJS untuk menangani permintaan dan respons data dari klien dengan mudah, serta memanfaatkan berbagai modul dan framework untuk meningkatkan produktivitas dan kualitas kode yang saya tulis. Dengan kemampuan NodeJS yang saya miliki, saya siap untuk berkontribusi dalam tim pengembang aplikasi web dan membangun solusi yang skalabel dan efisien.',
  },
  {
    id: 7,
    color: 'text-success',
    icon: 'mongodb',
    title: 'Mongodb',
    subTitle: 'Mongodb',
    description:
      'Saya memiliki kemampuan dalam MongoDB, yaitu basis data NoSQL yang fleksibel dan scalable untuk mengelola dan memanipulasi data secara efisien. Dalam pengembangan aplikasi web, saya dapat menggunakan MongoDB untuk memproses dan menyimpan data dengan efektif, sehingga memungkinkan aplikasi berjalan dengan cepat dan stabil.',
  },
];

// ===================================
let cardsHTML = '';
data.forEach((card, index) => {
  const cardHTML = `<div class=" col">
                      <div class="  card  border-primary mb-3 " style="max-width: 18rem">
                        <div class="card-header"><i class="bx bxl-${card.icon} ${card.color} ms-2"></i>${card.title}</div>
                       
                      </div>
                    </div>`;
  cardsHTML += cardHTML;
});

const cardContainer = document.getElementById('cards');
cardContainer.innerHTML = cardsHTML;

// ===================  contact me =============================

// ================================================
const currentYear = new Date().getFullYear();
const footer = document.getElementById('tahun');
footer.innerHTML = '&copy; ' + currentYear + ' gumelar-wicaksono. All rights reserved.';

// ====================== DARK ==================================
let isDarkMode = localStorage.getItem('theme') === 'light';

if (isDarkMode) {
  setDarkMode(true);
}

function toggleDarkMode() {
  isDarkMode = !isDarkMode;
  setDarkMode(isDarkMode);
  updateModeIcon();
}

function setDarkMode(isDark) {
  if (isDark) {
    document.body.setAttribute('id', 'darkmode');
    localStorage.setItem('theme', 'dark');
  } else {
    document.body.setAttribute('id', '');
    localStorage.removeItem('theme');
  }
}

function updateModeIcon() {
  const icon = isDarkMode ? 'sun text-black' : 'moon text-black';
  document.getElementById('mode-icon').className = `bx bxs-${icon}`;
  const modeClass = document.getElementById('mode-icon').classList;

  if (modeClass.contains('bxs-sun') && isDarkMode) {
    document.getElementById('mode-icon').innerHTML = 'dark';
  } else if (modeClass.contains('bxs-moon')) {
    document.getElementById('mode-icon').innerHTML = 'light';
  }
}
