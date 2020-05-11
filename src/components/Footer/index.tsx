import React from 'react';
import { getCurrentYear } from '../../functions';
import content from './content';
import * as Component from './styles';

const {
  'pre-heading': pre,
  heading,
  icons,
} = content;

const Footer: React.FC = () => (
  <Component.Wrapper>
    <Component.Heading>
      <span>{pre}</span>
      {heading}
    </Component.Heading>
    <Component.IconsWrapper>
      {icons.map(({ name, url, imgSrc }) => (
        <li key={name}>
          <a href={url} rel="noreferrer noopener" target="_blank">
            <Component.SvgIcon src={imgSrc} alt={name} />
          </a>
        </li>
      ))}
    </Component.IconsWrapper>
    <Component.Copyrights>{`© Copyrights ${getCurrentYear()} - Theodoros Vragkos`}</Component.Copyrights>
  </Component.Wrapper>
);

export default Footer;
