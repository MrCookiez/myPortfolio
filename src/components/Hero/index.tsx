import React from 'react';
import { getCurrentYear } from '../../functions';
import content from './content';
import * as Component from './styles';

const {
  title,
  preTitle: pre,
  subTitle,
  role,
  fullName,
} = content;

const Footer: React.FC = () => (
    <Component.Wrapper>

      <Component.Heading><span>{pre}</span>{title}</Component.Heading>

      <Component.SubTitle>{subTitle}</Component.SubTitle>

      <Component.FullName>{fullName}</Component.FullName>

      <Component.Role>{role}</Component.Role>

    </Component.Wrapper>
);

export default Footer;
