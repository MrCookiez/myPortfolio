/* eslint-disable react/prop-types */
import React from 'react';
import * as Component from './styles';

interface CardProps {
  image: string,
  title: string,
  type: string,
  general: string,
  role: string,
  features: string,
  url: string,
}

const Card: React.FC<CardProps> = ({
  image, title, type, general, role, features, url,
}) => (
  <Component.Wrapper>
    {image && url && (
      <a href={url} rel="noopener noreferrer" target="_blank">
        <Component.ImageWrapper>
          <img className="image" src={image} alt={title} />
        </Component.ImageWrapper>
      </a>
    )}

    {title && url && (
      <a href={url} rel="noopener noreferrer" target="_blank">
        <Component.Heading>{title}</Component.Heading>
      </a>
    )}

    <Component.DescriptionWrapper>
      {type && (
        <Component.DescriptionItem>
          <span>Type: </span>
          {type}
        </Component.DescriptionItem>
      )}
      {role && (
        <Component.DescriptionItem>
          <span>My role: </span>
          {role}
        </Component.DescriptionItem>
      )}
      {general && (
        <Component.DescriptionItem>
          <span>General: </span>
          {general}
        </Component.DescriptionItem>
      )}
      {features && (
        <Component.DescriptionItem>
          <span>Features: </span>
          {features}
        </Component.DescriptionItem>
      )}
    </Component.DescriptionWrapper>

  </Component.Wrapper>
);

export default Card;
