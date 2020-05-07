import React from 'react';
import content from './content';
import * as Component from './styles';

const {
  title,
  preTitle: pre,
  subTitle,
  role,
  fullName,
} = content;

const Hero: React.FC = () => (
    <Component.Wrapper>

      <Component.Heading><span>{pre}</span>{title}</Component.Heading>

      <Component.SubTitle>{subTitle}</Component.SubTitle>

      <Component.FullName>{fullName}</Component.FullName>

      <Component.Role>{role}</Component.Role>

      <Component.Arrow onClick={() => alert('go down')} />

    </Component.Wrapper>
);

export default Hero;
