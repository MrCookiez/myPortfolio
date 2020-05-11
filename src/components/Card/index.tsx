/* eslint-disable react/prop-types */
import React from 'react';
import * as Component from './styles';

interface CardProps {
  image: string,
  title: string,
  features: string,
  difficulties: string,
  mySolutions: string,
  url: string,
}

const Card: React.FC<CardProps> = ({
  image, title, features, difficulties, mySolutions, url,
}) => (
  <Component.Wrapper>
    {image && (
      <Component.ImageWrapper>
        <img className="image" src={image} alt={title} />
      </Component.ImageWrapper>
    )}

    {title && url && (
      <a href={url} rel="noopener noreferrer" target="_blank">
        <Component.Heading>{title}</Component.Heading>
      </a>
    )}

    <Component.DescriptionWrapper>
      {features && <Component.DescriptionItem>{features}</Component.DescriptionItem>}
      {difficulties && <Component.DescriptionItem>{difficulties}</Component.DescriptionItem>}
      {mySolutions && <Component.DescriptionItem>{mySolutions}</Component.DescriptionItem>}
    </Component.DescriptionWrapper>

  </Component.Wrapper>
);

export default Card;
