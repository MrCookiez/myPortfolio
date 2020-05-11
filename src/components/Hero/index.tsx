import React from 'react';
import jump from 'jump.js';
import content from './content';
import * as Component from './styles';

const {
  title,
  preTitle: pre,
  subTitle,
  role,
  fullName,
} = content;


const jumpToTop = () => (
  jump('.info', {
    duration: 350,
    offset: 0,
    a11y: false,
  })
);

const Hero: React.FC = () => (
  <Component.Wrapper>

    <Component.Heading>
      <span>{pre}</span>
      {title}
    </Component.Heading>

    <Component.SubTitle>{subTitle}</Component.SubTitle>

    <Component.FullName>{fullName}</Component.FullName>

    <Component.Role>{role}</Component.Role>

    <Component.Arrow onClick={() => jumpToTop()} />

  </Component.Wrapper>
);

export default Hero;
