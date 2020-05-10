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
        features: 'Project has features like...',
        difficulties: 'We faced those difficulties ...',
        mySolutions: 'My personal solutions were...',
      },
      url: 'https://mcdonalds.csb-demo.en2.cloud/',
    },
    {
      name: 'florinafood.gr',
      imgSrc: florinafood,
      desc: {
        features: 'Project has features like...',
        difficulties: 'We faced those difficulties ...',
        mySolutions: 'My personal solutions were...',
      },
      url: 'https://florinafood.gr/',
    },
    {
      name: 'Facilicom',
      imgSrc: facilicom,
      desc: {
        features: 'Project has features like...',
        difficulties: 'We faced those difficulties ...',
        mySolutions: 'My personal solutions were...',
      },
      url: 'https://werkenbijfacilicom.nl/',
    },
    {
      name: 'Signify',
      imgSrc: signify,
      desc: {
        features: 'Project has features like...',
        difficulties: 'We faced those difficulties ...',
        mySolutions: 'My personal solutions were...',
      },
      url: 'https://www.careers.signify.com/',
    },
  ],
};
