import React, { useState } from 'react';
import content from './content';
import * as Component from './styles';

const { heading, projects } = content;

const ProjetsSection: React.FC = () => {
  const [active, setActive] = useState(false);

  return (
    <Component.Wrapper>
      <Component.Heading>{heading}</Component.Heading>
      <Component.Grid>
        {projects.map(({ name, imgSrc }) => (
          <Component.Item>
            <img src={imgSrc} alt={name} />
          </Component.Item>
        ))}
      </Component.Grid>
    </Component.Wrapper>
  );
};

export default ProjetsSection;