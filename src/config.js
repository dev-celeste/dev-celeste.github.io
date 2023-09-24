module.exports = {
  siteTitle: 'Maria Alcantara | Software Developer',
  siteDescription:
    'Maria Alcantara holds a Bachelors degree from Rutgers University',
  siteKeywords:
    'Maria Alcantara, Maria, Alcantara, mariaalcantara, software developer, software engineer, web developer, python developer, Rutgers University, ',
  siteUrl: 'https://dev-celeste.github.io/',
  siteLanguage: 'en_US',
  googleAnalyticsID: 'UA-45666519-2',
  googleVerification: 'DCl7VAf9tcz6eD9gb67NfkNnJ1PKRNcg8qQiwpbx9Lk',
  name: 'Maria Alcantara',
  location: 'New Jersey',
  email: 'devcelestecodes@gmail.com',
  github: 'https://github.com/dev-celeste',
  socialMedia: [
    {
      name: 'GitHub',
      url: 'https://github.com/dev-celeste',
    },
    {
      name: 'Linkedin',
      url: 'https://www.linkedin.com/in/maria-alcantara-864790142/',
    },
    {
      name: 'Instagram',
      url: 'https://www.instagram.com/dev.celeste',
    },
  ],

  navLinks: [
    {
      name: 'About',
      url: '/#about',
    },
    {
      name: 'Experience',
      url: '/#jobs',
    },
    {
      name: 'Projects',
      url: '/#projects',
    },
    {
      name: 'Contact',
      url: '/#contact',
    },
  ],

  navHeight: 100,

  colors: {
    green: '#FCB1D3',
    navy: '#A6989E',
    darkNavy: '#524F50',
  },

  srConfig: (delay = 200) => ({
    origin: 'bottom',
    distance: '20px',
    duration: 500,
    delay,
    rotate: { x: 0, y: 0, z: 0 },
    opacity: 0,
    scale: 1,
    easing: 'cubic-bezier(0.645, 0.045, 0.355, 1)',
    mobile: true,
    reset: false,
    useDelay: 'always',
    viewFactor: 0.25,
    viewOffset: { top: 0, right: 0, bottom: 0, left: 0 },
  }),
};
