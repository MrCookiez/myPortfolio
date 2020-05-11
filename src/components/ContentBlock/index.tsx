import React from 'react';
import content from './content.json';
import * as Component from './styles';
import img from './coding-man.svg';

const {
  'pre-heading': pre,
  heading,
  text,
} = content;

const ContentBlock: React.FC = () => (
  <Component.Wrapper className="info">
    <Component.ImageContainer>
      <Component.Image src={img} alt="https://www.freepik.com/free-photos-vectors/business" />
    </Component.ImageContainer>
    <Component.TextBlock>
      <Component.Heading>
        <span>
          {pre}
          {' '}
        </span>
        {heading}
      </Component.Heading>
      <Component.Text>{text}</Component.Text>
    </Component.TextBlock>
  </Component.Wrapper>
);

export default ContentBlock;
