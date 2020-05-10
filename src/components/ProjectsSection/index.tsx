import React from 'react';
import content from './content';
import * as Component from './styles';

const { 'pre-heading': pre, heading, projects } = content;

const ProjetsSection: React.FC = () => (
  <Component.Wrapper>

    <Component.HeadingWrapper>
      <Component.Heading>
        <span>{pre}</span>
        {heading}
      </Component.Heading>
    </Component.HeadingWrapper>

    <Component.Grid>
      {projects.map(({ name, imgSrc }) => (
        <Component.Item>
          <img src={imgSrc} alt={name} />
        </Component.Item>
      ))}
    </Component.Grid>
  </Component.Wrapper>
);

export default ProjetsSection;
