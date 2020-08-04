import mcdonalds from './img/mcdonalds.jpg';
import florinafood from './img/florinafood.jpg';
import facilicom from './img/facilicom.jpg';
import signify from './img/signify.jpg';

export default {
  'pre-heading': 'Latest',
  heading: 'Projects',
  projects: [
    {
      name: 'McDonalds',
      imgSrc: mcdonalds,
      desc: {
        type: 'Career website',
        general: 'In this project I was working within a team of three developers using Kanban methodology.',
        role: 'Create reusable components according to the design.',
        features: 'Home page, thank you page, restaurants overview page, restaurant team page.',
      },
      url: 'https://werkenbijmcdonalds.nl/',
    },
    {
      name: 'florinafood.gr',
      imgSrc: florinafood,
      desc: {
        type: 'Online food delivery',
        general: 'This is a side project on which I am working in my free time. (From Jan 2020 working I am working on version 2 with React/Node/MySQL).',
        role: 'Analyse the market and build the frontend/backend of the website.',
        features: 'Full project',
      },
      url: 'https://florinafood.gr/',
    },
    {
      name: 'Facilicom',
      imgSrc: facilicom,
      desc: {
        type: 'Career website',
        general: 'In this project I was working within a team of three frontend developer using Kanban methodology.',
        role: 'Create reusable components according to the design.',
        features: 'Navigation menu, Footer, team sticky search, team sidebar navigation, jobs overview page (jobs search), and the about us page',
      },
      url: 'https://werkenbijfacilicom.nl/',
    },
    {
      name: 'Signify',
      imgSrc: signify,
      desc: {
        type: 'Career website',
        general: 'In this project I took the ownership in order to developer the website, based on the new design.',
        role: 'Create reusable components according to the design, update and support the website.',
        features: 'All the components of the websites.',
      },
      url: 'https://www.careers.signify.com/',
    },
  ],
};
