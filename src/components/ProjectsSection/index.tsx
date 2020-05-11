import React from 'react';
import content from './content';
import Card from '../Card';
import * as Component from './styles';

const { 'pre-heading': pre, heading, projects } = content;

const ProjetsSection: React.FC = () => (
  <Component.Wrapper>

    <Component.HeadingWrapper>
      <Component.Heading>
        <span>{`${pre} `}</span>
        {heading}
      </Component.Heading>
    </Component.HeadingWrapper>

    <Component.Grid>
      {projects.map(({
        name, imgSrc, url, desc: { features, difficulties, mySolutions },
      }) => (
        <Component.Item key={name}>
          <Card
            image={imgSrc}
            title={name}
            features={features}
            difficulties={difficulties}
            mySolutions={mySolutions}
            url={url}
          />
        </Component.Item>
      ))}
    </Component.Grid>
  </Component.Wrapper>
);

export default ProjetsSection;
