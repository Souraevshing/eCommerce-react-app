import React from 'react'
import styled from 'styled-components'

import { PageHero } from '../components'
import aboutImg from '../assets/hero-bcg.jpeg'

const AboutPage = () => {
  return (
    <main>
      <PageHero title='About' />
      <Wrapper className='page section section-center'>
        <img src={aboutImg} alt='man cutting furnitures' />
        <article>
          <div className='title'>
            <h2>Our Success Story</h2>
            <div className='underline'></div>
          </div>
          <p>
            Our journey started as mere gadgets selling store. And now we are
            here, in 2022 a successfull shopping site "TechKart" launched on
            20nd June.
            <br />
            It was developed on MERN Stack technology.
          </p>
        </article>
      </Wrapper>
    </main>
  )
}

const Wrapper = styled.section`
  display: grid;
  gap: 4rem;
  img {
    width: 100%;
    display: block;
    border-radius: var(--radius);
    height: 500px;
    object-fit: cover;
  }
  p {
    line-height: 2;
    max-width: 45em;
    margin: 0 auto;
    margin-top: 2rem;
    color: var(--clr-grey-5);
  }
  .title {
    text-align: left;
  }
  .underline {
    margin-left: 0;
  }
  @media (min-width: 992px) {
    grid-template-columns: 1fr 1fr;
  }
`
export default AboutPage
