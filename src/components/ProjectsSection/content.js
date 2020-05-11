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
        role: 'Was to create reusable components according to the design.',
        features: 'Home page, thank you page, restaurants overview page, restaurant team page.',
      },
      url: 'https://mcdonalds.csb-demo.en2.cloud/',
    },
    {
      name: 'florinafood.gr',
      imgSrc: florinafood,
      desc: {
        type: 'Online food delivery',
        general: 'This is a side project on which I am working in my free time. (From Jan 2020 working I am working on version 2 with React/Node/MySQL).',
        role: 'Is to analyse the market and build the frontend/backend of the website.',
        features: 'Whole website',
      },
      url: 'https://florinafood.gr/',
    },
    {
      name: 'Facilicom',
      imgSrc: facilicom,
      desc: {
        type: 'Career website',
        general: 'In this project I was working within a team of three frontend developer using Kanban methodology.',
        role: 'Was to create reusable components according to the design.',
        features: 'Home page, thank you page, restaurants overview page, restaurant team page.',
      },
      url: 'https://werkenbijfacilicom.nl/',
    },
    {
      name: 'Signify',
      imgSrc: signify,
      desc: {
        type: 'Career website',
        general: 'In this project I took the ownership in order to developer the website, based on the new design.',
        role: 'Was to create reusable components according to the design, update and support the website.',
        features: 'All the components of the websites.',
      },
      url: 'https://www.careers.signify.com/',
    },
  ],
};
