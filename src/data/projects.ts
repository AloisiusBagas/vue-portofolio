export interface Project {
  id: string;
  title: string;
  subtitle: string;
  description: string;
  tag: string[];
  liveLink: string;
  githubLink: string;
  heroImage: string;
  detailedTech: { name: string; icon: string }[];
  features: { title: string; desc: string; icon: string }[];
  gallery: string[];
  language?: string;
}

export const projects: Project[] = [
    //============== Gojek UI Clone ===============
  {
    id: 'gojek-ui-clone',
    title: 'Gojek-UI-Clone',
    subtitle: 'A pixel-perfect Gojek UI study focused on high-fidelity frontend execution and rigorous mobile layout architecture.',
    description:
      'A high-fidelity UI study of the Gojek "Super App," built to demonstrate pixel-perfect frontend development and precision in mobile layout architecture. The goal of this project was to replicate a world-class user experience from scratch, ensuring every spacing, icon, and alignment matched the original application`s design language. \n\n' +
      '<b>this project made for educational purpose only(not real project)</b>\n' +
      'The content may have copyrighted contents: <ul><li>Logo</li><li>Icon</li><li>Images</li><li>Font</li></ul>',
    tag: ['Mobile Apps', 'Android', 'UI/UX', 'Flutter','responsive-ui'],
    liveLink: '',
    githubLink: 'https://github.com/AloisiusBagas/Gojek-UI-Clone',
    heroImage: 'https://images.pexels.com/photos/12725400/pexels-photo-12725400.jpeg',
    detailedTech: [
      { name: 'Flutter', icon: 'fa-solid fa-check-circle' },
      { name: 'Dart', icon: 'fa-solid fa-check-circle' },
      { name: 'Adobe Illustrator', icon: 'fa-solid fa-check-circle' },
      { name: 'Adobe XD', icon: 'fa-solid fa-check-circle' }
    ],
    features: [
  {
    title: 'Layered UI Depth',
    desc: 'Replicated the floating Gojek dashboard using complex Stack orchestration.',
    icon: 'fa-solid fa-layer-group'
  },
  {
    title: 'Gopay Wallet Integration',
    desc: 'Simulated the digital wallet interface complete with precise balance display and essential quick action buttons (Pay, Top Up, Explore).',
    icon: 'fa-solid fa-wallet'
  },
  {
    title: 'Dynamic Service Grid',
    desc: 'Implemented a responsive, scalable grid layout to fluidly display core Gojek services such as GO-RIDE, GO-FOOD, and GO-SEND.',
    icon: 'fa-solid fa-table-cells-large'
  },
  {
    title: 'Interactive Promo Carousels',
    desc: 'Developed smooth, horizontally scrollable list views optimized for showcasing promotional banners and featured deal content.',
    icon: 'fa-solid fa-images'
  },
  {
    title: 'Seamless Navigation System',
    desc: 'Built a customized bottom navigation bar providing intuitive routing between the Home, Orders, Help, and Profile screens.',
    icon: 'fa-solid fa-compass'
  },
  {
    title: 'Pixel-Perfect Styling',
    desc: 'Accurately replicated Gojek\'s brand identity utilizing custom typography, authentic color palettes, and precise iconography.',
    icon: 'fa-solid fa-wand-magic-sparkles'
  }
],
    gallery: [
      'https://raw.githubusercontent.com/AloisiusBagas/Gojek-UI-Clone/master/Screenshot/Screenshot_1592554447.png',
      'https://raw.githubusercontent.com/AloisiusBagas/Gojek-UI-Clone/master/Screenshot/Screenshot_1592554496.png',
      'https://raw.githubusercontent.com/AloisiusBagas/Gojek-UI-Clone/master/Screenshot/Screenshot_1592554510.png'
    ],
    language: 'Flutter'
  },
      //============== OVO UI Clone ===============
  {
    id: 'ovo-ui-clone',
    title: 'OVO-UI-Clone',
    subtitle: 'A beautiful and pixel-perfect clone of the OVO app UI, built with Flutter. This project demonstrates modern mobile UI design patterns and interactive elements.',
    description:
      'A high-fidelity clone of the OVO payment app UI built with Flutter, designed as an educational resource to demonstrate complex widget composition, interactive animations, and responsive layout implementation. \n\n' +
      '<b>this project made for educational purpose only(not real project)</b>\n' +
      'The content may have copyrighted contents: <ul><li>Logo</li><li>Icon</li><li>Images</li><li>Font</li></ul>',
    tag: ['Mobile Apps', 'Android', 'UI/UX', 'Flutter','responsive-ui'],
    liveLink: '',
    githubLink: 'https://github.com/AloisiusBagas/OVO-UI-Clone',
    heroImage: 'https://images.pexels.com/photos/7821552/pexels-photo-7821552.jpeg',
    detailedTech: [
      { name: 'Flutter', icon: 'fa-solid fa-check-circle' },
      { name: 'Dart', icon: 'fa-solid fa-check-circle' },
      { name: 'Adobe Illustrator', icon: 'fa-solid fa-check-circle' },
      { name: 'Adobe XD', icon: 'fa-solid fa-check-circle' }
    ],
    features: [
      {
        title: 'Pixel-Perfect Home Dashboard',
        desc: 'Faithfully recreated the core OVO home experience with a sleek, responsive layout and accurate color schemes.',
        icon: 'fa-solid fa-house-chimney'
      },
      {
        title: 'Fluid Navigation System',
        desc: 'Engineered a custom bottom navigation bar to effortlessly switch between the main dashboard, finance, and profile sections.',
        icon: 'fa-solid fa-compass'
      },
      {
        title: 'Dynamic Service Grid',
        desc: 'Organized essential OVO services into a structured grid layout, ensuring quick access and scalability for users.',
        icon: 'fa-solid fa-border-all'
      },
      {
        title: 'Interactive Promotions Carousel',
        desc: 'Implemented a smooth auto-playing image slider to showcase dynamic promotional banners and offers.',
        icon: 'fa-solid fa-images'
      },
      {
        title: 'Intuitive Top-Up Flow',
        desc: 'Designed a seamless instant top-up interface featuring predefined nominals, custom input, and distinct payment methods.',
        icon: 'fa-solid fa-wallet'
      },
      {
        title: 'Comprehensive Payment Options',
        desc: 'Structured a clear, interactive presentation for various linked payment cards and alternative transaction methods.',
        icon: 'fa-solid fa-credit-card'
      }
    ],
    gallery: [
      'https://raw.githubusercontent.com/AloisiusBagas/OVO-UI-Clone/master/Demo/Home.gif',
      'https://raw.githubusercontent.com/AloisiusBagas/OVO-UI-Clone/master/Demo/InstantTopUp.gif',
      'https://raw.githubusercontent.com/AloisiusBagas/OVO-UI-Clone/master/Demo/MetodeLain.gif'
    ],
    language: 'Flutter'
  },
          //============== React E-commerce Template ===============

  {
    id: 'react-ecommerce-template',
    title: 'react-ecommerce-template',
    subtitle: 'A modern e-commerce interface featuring a real-time cart, wishlist functionality, dynamic product filtering, and smooth animations using Radix UI and Framer Motion.',
    description:
      'This Modern E-commerce UI project is a feature-rich, responsive, and visually stunning frontend repository for an e-commerce platform. It focuses on providing a seamless shopping experience using modern web design patterns and smooth animations',
    tag: [
  'Web Development',
  'Frontend',
  'E-commerce',
  'UI/UX',
  'React',
  'Tailwind CSS',
  'Responsive Design',
  'Radix UI'
],
    liveLink: 'https://react-ecommerce-template-three.vercel.app/',
    githubLink: '',
    heroImage: 'https://images.pexels.com/photos/4348404/pexels-photo-4348404.jpeg',
    detailedTech: [
      { name: 'React', icon: 'fa-solid fa-check-circle' },
      { name: 'Tailwind CSS', icon: 'fa-solid fa-check-circle' },
      { name: 'Framer Motion', icon: 'fa-solid fa-check-circle' },
      { name: 'Radix UI', icon: 'fa-solid fa-check-circle' },
      { name: 'TypeScript', icon: 'fa-solid fa-check-circle' },
      { name: 'Vercel', icon: 'fa-solid fa-check-circle' },
      { name: 'Framer Motion', icon: 'fa-solid fa-check-circle' },
      { name: 'Radix UI', icon: 'fa-solid fa-check-circle' },
      { name: 'TypeScript', icon: 'fa-solid fa-check-circle' },
      { name: 'Vercel', icon: 'fa-solid fa-check-circle' },
    ],
    features: [
  {
    title: 'Modern & Clean Aesthetics',
    desc: 'Crafted a stunning, accessible user interface utilizing Tailwind CSS and Radix UI primitives.',
    icon: 'fa-solid fa-wand-magic-sparkles'
  },
  {
    title: 'Responsive Architecture',
    desc: 'Ensured a seamless shopping experience dynamically adapting across Desktop, Tablet, and Mobile devices.',
    icon: 'fa-solid fa-mobile-screen-button'
  },
  {
    title: 'Dynamic Micro-Interactions',
    desc: 'Implemented smooth page transitions and interactive product animations powered by Framer Motion.',
    icon: 'fa-solid fa-bolt' 
  },
  {
    title: 'Advanced Product Filtering',
    desc: 'Engineered a robust filtering system allowing users to sort products by category, price range, and custom options.',
    icon: 'fa-solid fa-filter'
  },
  {
    title: 'Real-Time Smart Cart',
    desc: 'Built an intuitive cart management system providing instant visual feedback and seamless checkout preparation.',
    icon: 'fa-solid fa-cart-shopping'
  },
  {
    title: 'Wishlist Functionality',
    desc: 'Created a personalized favorites system enabling users to save and track desired items for future purchase.',
    icon: 'fa-solid fa-heart'
  },
  {
    title: 'Rich Product Galleries',
    desc: 'Developed comprehensive product detail views with interactive image galleries, color selection, and sizing options.',
    icon: 'fa-solid fa-images' 
  }
],
    gallery: [
      'https://raw.githubusercontent.com/AloisiusBagas/react-ecommerce-template/main/public/images/Home_pc.png',
      'https://raw.githubusercontent.com/AloisiusBagas/react-ecommerce-template/main/public/images/detail_pc.png',
      'https://raw.githubusercontent.com/AloisiusBagas/react-ecommerce-template/main/public/images/cart_pc.png',
      'https://raw.githubusercontent.com/AloisiusBagas/react-ecommerce-template/main/public/images/Cart_mobilview.png',
      'https://raw.githubusercontent.com/AloisiusBagas/react-ecommerce-template/main/public/images/favourite_mobileview.png',

    ],
    language: 'ReactJs'
  },
          //============== Real Estate Landing Page ===============
  {
    id: 'real-estate-landing-page',
    title: 'real-estate-landing-page',
    subtitle: 'A Modern, Animated Real Estate Landing Page Built with React and Tailwind CSS.',
    description:
      'HOUSFY is a premium real estate landing page designed to showcase luxury properties. Built with React, Tailwind CSS, and Framer Motion, it delivers a seamless user experience with scroll-triggered animations, interactive property showcases, and an accessible, mobile-first design system powered by Radix UI.',
    tag: [
  'Web Development',
  'Frontend',
  'React',
  'Tailwind CSS',
  'UI/UX',
  'Landing Page',
  'Framer Motion',
  'Radix UI',
  'Real Estate'
],
    liveLink: 'https://real-estate-landing-9muawdt8e-aloisius-bagas-projects.vercel.app/',
    githubLink: '',
    heroImage: 'https://images.pexels.com/photos/323780/pexels-photo-323780.jpeg',
    detailedTech: [
      { name: 'React', icon: 'fa-solid fa-check-circle' },
      { name: 'Tailwind CSS', icon: 'fa-solid fa-check-circle' },
      { name: 'Framer Motion', icon: 'fa-solid fa-check-circle' },
      { name: 'Radix UI', icon: 'fa-solid fa-check-circle' },
      { name: 'TypeScript', icon: 'fa-solid fa-check-circle' },
      { name: 'Vercel', icon: 'fa-solid fa-check-circle' },
      { name: 'Framer Motion', icon: 'fa-solid fa-check-circle' },
      { name: 'Radix UI', icon: 'fa-solid fa-check-circle' },
      { name: 'TypeScript', icon: 'fa-solid fa-check-circle' },
      { name: 'Vercel', icon: 'fa-solid fa-check-circle' },
    ],
    features: [
  {
    title: 'Interactive Property Showcase',
    desc: 'Implemented a dynamic tabbed interface (Buy, Rent, Sold) with a smooth horizontal scrolling carousel for visually browsing property listings.',
    icon: 'fa-solid fa-house-chimney-window'
  },
  {
    title: 'Smooth Viewport Animations',
    desc: 'Integrated Framer Motion to deliver an engaging experience with scroll-triggered fade-in and staggered appearance animations.',
    icon: 'fa-solid fa-wand-magic-sparkles'
  },
  {
    title: 'Complex Grid Orchestration',
    desc: 'Engineered a modern, responsive grid layout for Featured Properties, highlighting a primary bento-style card alongside interactive hover states.',
    icon: 'fa-solid fa-border-all'
  },
  {
    title: 'Dynamic Transparent Navigation',
    desc: 'Built a sleek, mobile-friendly sticky header that smoothly transitions from transparent to solid white upon user scrolling.',
    icon: 'fa-regular fa-window-maximize'
  },
  {
    title: 'Accessible UI Components',
    desc: 'Utilized Radix UI primitives and Tailwind CSS to craft highly customized, accessible components like tabs, forms, and dialogs.',
    icon: 'fa-solid fa-cubes'
  },
  {
    title: 'Immersive Hero Section',
    desc: 'Engages users immediately using a full-viewport background image combined with a floating abstract statistics card.',
    icon: 'fa-solid fa-layer-group'
  }
],
    gallery: [
      'https://raw.githubusercontent.com/AloisiusBagas/real-estate-landing/main/public/Demo/hero.PNG',
      'https://raw.githubusercontent.com/AloisiusBagas/real-estate-landing/main/public/Demo/showcase.PNG',
      'https://raw.githubusercontent.com/AloisiusBagas/real-estate-landing/main/public/Demo/contact.PNG',
    ],
    language: 'ReactJs'
  },
        //============== Covid 19 Tracker ===============
  {
    id: 'covid19-indonesia',
    title: 'Covid19-Indonesia',
    subtitle: 'A real-time Covid-19 monitoring app for Indonesia, built with Flutter. Tracks provincial cases, hospital availability, and pandemic statistics.',
    description:
      'Covid-19 Indonesia is a sleek, user-friendly mobile application developed with Flutter to provide accurate and up-to-date information on the Covid-19 pandemic in Indonesia. It aggregates data from reliable sources to present key metrics, provincial breakdowns, and hospital availability in an intuitive interface.',
    tag: [
  'Mobile Apps',
  'Flutter',
  'Dart',
  'Android',
  'COVID-19 Tracker',
  'Data Visualization',
  'API Integration',
  'UI/UX'
],
    liveLink: '',
    githubLink: 'https://github.com/AloisiusBagas/Covid19-Indonesia',
    heroImage: 'https://images.pexels.com/photos/4021266/pexels-photo-4021266.jpeg',
    detailedTech: [
      { name: 'Flutter', icon: 'fa-solid fa-check-circle' },
      { name: 'Dart', icon: 'fa-solid fa-check-circle' },
      { name: 'Adobe Illustrator', icon: 'fa-solid fa-check-circle' },
      { name: 'Adobe XD', icon: 'fa-solid fa-check-circle' }
    ],
    features: [
  {
    title: 'Real-Time Dashboard',
    desc: 'Monitor total confirmed cases, recoveries, and deaths with live updates from reliable sources.',
    icon: 'fa-solid fa-chart-line'
  },
  {
    title: 'Provincial Data',
    desc: 'Explore detailed statistics for all 34 provinces in Indonesia, including search and sort capabilities.',
    icon: 'fa-solid fa-map-location-dot'
  },
  {
    title: 'Hospital Directory',
    desc: 'Access a comprehensive list of referral hospitals with contact details and address information.',
    icon: 'fa-solid fa-hospital'
  },
  {
    title: 'Interactive Analytics',
    desc: 'Visualize data trends through dynamic charts covering Daily Cases, Age Groups, and Gender Distribution.',
    icon: 'fa-solid fa-chart-pie'
  },
  {
    title: 'Responsive UI',
    desc: 'A modern, clean design optimized for various device sizes, ensuring a seamless user experience.',
    icon: 'fa-solid fa-mobile-screen-button'
  }
],
    gallery: [
      'https://raw.githubusercontent.com/AloisiusBagas/Covid19-Indonesia/master/Screenshoot/Screenshot_20201015-222357.png',
      'https://raw.githubusercontent.com/AloisiusBagas/Covid19-Indonesia/master/Screenshoot/Screenshot_20201015-222531.png',
      'https://raw.githubusercontent.com/AloisiusBagas/Covid19-Indonesia/master/Screenshoot/Screenshot_20201015-222628.png',
      'https://raw.githubusercontent.com/AloisiusBagas/Covid19-Indonesia/master/Screenshoot/Screenshot_20201015-222830.png',
      'https://raw.githubusercontent.com/AloisiusBagas/Covid19-Indonesia/master/Screenshoot/Screenshot_20201015-233913.png',
      'https://raw.githubusercontent.com/AloisiusBagas/Covid19-Indonesia/master/Screenshoot/Screenshot_20201015-233925.png',
      'https://raw.githubusercontent.com/AloisiusBagas/Covid19-Indonesia/master/Screenshoot/Screenshot_20201015-103000.png',
    ],
    language: 'Flutter'
  },
          //============== My Note App ===============
  {
    id: 'my-note-app',
    title: 'My-Note-App',
    subtitle: 'A creative and aesthetically pleasing note-taking application built with Flutter, featuring image attachments, custom colors, and smooth animations.',
    description:
      'NoteApp is a beautifully designed, cross-platform note-taking productivity application built using the Flutter framework. It offers a premium, digital-first aesthetic with custom typography and smooth dark-mode support. The app features a highly dynamic staggered grid UI that adapts to the content size, making your dashboard instantly readable and visually appealing.Under the hood, it pairs seamless offline data persistence using an SQLite database with delightful user interactions powered by Rive animations. Key features include the ability to seamlessly integrate images from your gallery or camera directly into notes, individual color-coding for better organization, and high-performance cross-platform capabilities.',
    tag: ['Mobile Apps','Android', 'Flutter', 'UI/UX', 'Productivity', 'Note-Taking'],
    liveLink: '#',
    githubLink: 'https://github.com/AloisiusBagas/NoteApp',
    heroImage: 'https://images.pexels.com/photos/418841/pexels-photo-418841.jpeg',
    detailedTech: [
      { name: 'Flutter', icon: 'fa-solid fa-check-circle' },
      { name: 'Dart', icon: 'fa-solid fa-check-circle' },
      { name: 'Adobe Illustrator', icon: 'fa-solid fa-check-circle' },
      { name: 'Adobe XD', icon: 'fa-solid fa-check-circle' }
    ],
    features: [
  {
    title: 'Personalized Notes',
    desc: 'Assign unique colors to each note for better organization and visual appeal.',
    icon: 'fa-solid fa-palette'
  },
  {
    title: 'Image Integration',
    desc: 'Attach images to your notes directly from your gallery or camera to capture moments.',
    icon: 'fa-solid fa-image'
  },
  {
    title: 'Smart Layout',
    desc: 'Utilizes a staggered grid layout for a dynamic, modern, and space-efficient user interface.',
    icon: 'fa-solid fa-table-cells-large'
  },
  {
    title: 'Rich Animations',
    desc: 'Features smooth transitions and interactive elements powered by Rive and Flutter\'s animation package.',
    icon: 'fa-solid fa-wand-magic-sparkles'
  },
  {
    title: 'Local Storage',
    desc: 'Ensures your data stays secure and accessible offline directly on your device using a local SQLite database.',
    icon: 'fa-solid fa-database'
  },
  {
    title: 'Digital Aesthetic',
    desc: 'Employs unique custom typography alongside a sleek, dark-mode friendly design vibe.',
    icon: 'fa-solid fa-moon'
  }
]
,
    gallery: [
      'https://raw.githubusercontent.com/AloisiusBagas/NoteApp/master/assets/Demo/Screenshot_1771658060.png',
      'https://raw.githubusercontent.com/AloisiusBagas/NoteApp/master/assets/Demo/Screenshot_1771658066.png',
      'https://raw.githubusercontent.com/AloisiusBagas/NoteApp/master/assets/Demo/Screenshot_1771689875.png',
      'https://raw.githubusercontent.com/AloisiusBagas/NoteApp/master/assets/Demo/Screenshot_1771690462.png',
      'https://raw.githubusercontent.com/AloisiusBagas/NoteApp/master/assets/Demo/Screenshot_1771774098.png'
    ],
    language: 'Flutter'
  },
            //============== Web Portofolio Page ===============
  {
    id: 'web-portofolio',
    title: 'Web Portofolio',
    subtitle: 'A responsive personal portfolio website built with Vue 3, TypeScript, and Bootstrap. Features dark mode, smooth animations, and a clean modern design.',
    description:
      'A modern, fully responsive personal portfolio website designed to showcase my skills, projects, and professional background. Built from the ground up using Vue 3 (Composition API) and Vite for blazing-fast performance. This application leverages TypeScript for robust type safety and maintainable code. The design emphasizes a clean, intuitive user experience, integrating dynamic dark/light mode theming, smooth AOS scroll animations, and a well-structured modular architecture using component lazy-loading.',
    tag: [
      'Web Development',
      'Frontend',
      'Vue.js',
      'Vue 3',
      'TypeScript',
      'Vite',
      'Bootstrap 5',
      'Portfolio',
      'UI/UX',
      'Responsive Design'
    ],
    liveLink: 'https://www.aloisiusbagas.com/',
    githubLink: 'https://github.com/AloisiusBagas/vue-portofolio',
    heroImage: 'https://images.pexels.com/photos/251225/pexels-photo-251225.jpeg',
    detailedTech: [
      { name: 'Vue.js', icon: 'fa-solid fa-check-circle' },
      { name: 'Tailwind CSS', icon: 'fa-solid fa-check-circle' },
      { name: 'Framer Motion', icon: 'fa-solid fa-check-circle' },
      { name: 'Radix UI', icon: 'fa-solid fa-check-circle' },
      { name: 'TypeScript', icon: 'fa-solid fa-check-circle' },
      { name: 'Vercel', icon: 'fa-solid fa-check-circle' },
    ],
       features: [
      {
        title: 'Dynamic Theming',
        desc: 'Implemented a seamless toggle between dark and light themes for an optimal viewing experience.',
        icon: 'fa-solid fa-circle-half-stroke'
      },
      {
        title: 'Smooth Scroll Animations',
        desc: 'Integrated AOS (Animate On Scroll) to deliver engaging and staggered element entrances as users navigate.',
        icon: 'fa-solid fa-wand-magic-sparkles'
      },
      {
        title: 'Modular Architecture',
        desc: 'Designed a clean, maintainable file structure utilizing lazy-loaded Vue components to optimize initial load times.',
        icon: 'fa-solid fa-cubes'
      },
      {
        title: 'Fully Responsive Layout',
        desc: 'Leveraged Bootstrap 5 and custom CSS to ensure a flawless and intuitive experience across all mobile, tablet, and desktop screens.',
        icon: 'fa-solid fa-mobile-screen'
      },
      {
        title: 'Type-Safe Implementation',
        desc: 'Utilized TypeScript throughout the application to enhance code quality, predictability, and long-term maintainability.',
        icon: 'fa-solid fa-shield-halved'
      },
      {
        title: 'Blazing Fast Performance',
        desc: 'Powered by Vite as the build tool to provide rapid hot module replacement (HMR) during development and highly optimized production builds.',
        icon: 'fa-solid fa-bolt'
      }
    ],
    gallery: [
      'https://raw.githubusercontent.com/AloisiusBagas/vue-portofolio/main/public/images/screenshots/Hero.PNG',
      'https://raw.githubusercontent.com/AloisiusBagas/vue-portofolio/main/public/images/screenshots/About Me.PNG',
      'https://raw.githubusercontent.com/AloisiusBagas/vue-portofolio/main/public/images/screenshots/My Resume.PNG',
      'https://raw.githubusercontent.com/AloisiusBagas/vue-portofolio/main/public/images/screenshots/portofolio.PNG',
      'https://raw.githubusercontent.com/AloisiusBagas/vue-portofolio/main/public/images/screenshots/contactMe.PNG',

    ],
    language: 'VueJs'
  },
];
