import React from 'react';
import Container from '../Container/Container';
import Hero from '../Hero/Hero';
import {faqData} from '../../data/dataStore';

const Faq = () => (
  <Container>
    <Hero titleText={faqData.title} bgImage={faqData.image} />
    <p>{faqData.paragraph_1}</p>
    <p>{faqData.paragraph_2}</p>
    <p>{faqData.paragraph_3}</p>
  </Container>
);

export default Faq;
