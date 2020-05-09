import React from 'react';
import AliceCarousel from 'react-alice-carousel';
import "react-alice-carousel/lib/alice-carousel.css";
import content from './content';
import * as Component from './styles';

const {
  'pre-heading': pre,
  heading,
  images,
} = content;

const TechLogoElements: React.FC = () => {
  // Carousel slider config
  const data = images.map(logo => <Component.Img src={logo} alt='tech logo' />);
  const responsive = { 1024: { items: 6 }};

  return (
      <Component.Wrapper>

        <Component.Heading><span>{pre}</span> {heading}</Component.Heading>

        <Component.LogoWrapper>
          {/* {images.map((logo, index) => (
            <Component.Logo key={`logo-id-${index.toString()}`}>
              <Component.Img src={logo} alt='tech logo' />
            </Component.Logo>
          ))} */}
          <AliceCarousel
            responsive={responsive}
            items={data}
          />
        </Component.LogoWrapper>

      </Component.Wrapper>
);
};

export default TechLogoElements;
