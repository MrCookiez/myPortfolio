import React from 'react';
import content from './content';
import * as Component from './styles';

const {
  'pre-heading': pre,
  heading,
  images,
} = content;

const TechLogoElements: React.FC = () => (
    <Component.Wrapper>

      <Component.Heading><span>{pre}</span> {heading}</Component.Heading>

      <Component.LogoWrapper>
        {images.map((logo, index) => (
          <Component.Logo key={`logo-id-${index.toString()}`}>
            <Component.Img src={logo} alt='tech logo' />
          </Component.Logo>
        ))}
      </Component.LogoWrapper>

    </Component.Wrapper>
);

export default TechLogoElements;
