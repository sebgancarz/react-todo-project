import React from 'react';
import Container from '../Container/Container';
import Hero from '../Hero/Hero';
import {infoData} from '../../data/dataStore';

const Info = () => (
  <Container>
    <Hero titleText={infoData.title} bgImage={infoData.image} />
    <p>{infoData.description}</p>
  </Container>
);
export default Info;
