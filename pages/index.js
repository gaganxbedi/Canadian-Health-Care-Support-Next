import React from 'react'
import Head from 'next/head'

import Frame513443 from '../components/frame513443'
import Hero from '../components/hero'
import Navbar from '../components/navbar'
import AppComponent from '../components/component'
import PlaceCard from '../components/place-card'
import Footer from '../components/footer'

const Home = () => {
  return (
    <>
      <div className="container">
        <Head>
          <title>Canadian Health Care Support</title>
          <meta property="og:title" content="Canadian Health Care Support" />
        </Head>
        <section className="hero">
          <Frame513443></Frame513443>
          <section className="top-container">
            <Hero rootClassName="rootClassName"></Hero>
          </section>
          <Navbar rootClassName="rootClassName2"></Navbar>
          <div className="frame513443">
            <span className="text">
              <span className="text01">
                <span>
                  We provide
                  <span
                    dangerouslySetInnerHTML={{
                      __html: ' ',
                    }}
                  />
                </span>
                <br></br>
                <span>
                  Personalized
                  <span
                    dangerouslySetInnerHTML={{
                      __html: ' ',
                    }}
                  />
                </span>
                <br></br>
                <span></span>
              </span>
              <span className="text07">Caregiving</span>
              <span className="text08">
                <span>
                  <span
                    dangerouslySetInnerHTML={{
                      __html: ' ',
                    }}
                  />
                </span>
                <br></br>
                <span>Services</span>
              </span>
            </span>
            <span className="text12">
              <span className="text13">
                Find the right caregiver for your needs
              </span>
            </span>
            <div className="group113448">
              <img
                alt="Rectangle113449"
                src="https://aheioqhobo.cloudimg.io/v7/_playground-bucket-v2.teleporthq.io_/c1ffdb5c-412e-4725-9813-fbc657132c82/166bfd12-2ffc-4a4e-8d09-6d2d4a0c3ab3?org_if_sml=1830"
                className="image"
              />
              <span className="text14">
                <span className="text15">Book Appointment</span>
              </span>
            </div>
          </div>
        </section>
        <AppComponent rootClassName="rootClassName"></AppComponent>
        <div id="main-section" className="main">
          <h1>
            Find The Right Home Care Services For You
            <span
              dangerouslySetInnerHTML={{
                __html: ' ',
              }}
            />
          </h1>
          <span className="text17">Recommended</span>
          <div className="cards-container">
            <PlaceCard
              city="London"
              image="https://images.unsplash.com/photo-1529655683826-aba9b3e77383?ixlib=rb-1.2.1&amp;q=85&amp;fm=jpg&amp;crop=entropy&amp;cs=srgb&amp;h=1000"
            ></PlaceCard>
            <PlaceCard
              city="Paris"
              image="https://images.unsplash.com/photo-1551634979-2b11f8c946fe?ixlib=rb-1.2.1&amp;q=85&amp;fm=jpg&amp;crop=entropy&amp;cs=srgb&amp;h=1000"
            ></PlaceCard>
            <PlaceCard
              city="Amsterdam"
              image="https://images.unsplash.com/photo-1585211969224-3e992986159d?ixlib=rb-1.2.1&amp;q=85&amp;fm=jpg&amp;crop=entropy&amp;cs=srgb&amp;h=1000"
            ></PlaceCard>
            <PlaceCard
              city="Barcelona"
              image="https://images.unsplash.com/photo-1564221710304-0b37c8b9d729?ixlib=rb-1.2.1&amp;q=85&amp;fm=jpg&amp;crop=entropy&amp;cs=srgb&amp;h=1000"
            ></PlaceCard>
            <div className="autolayout13365">
              <span className="text18">
                <span className="text19">
                  Aging in place means staying in the comfort of your own home
                  for as long as possible as you get older, rather than moving
                  into a retirement or long-tem care facility
                </span>
              </span>
              <span className="text20">
                <span className="text21">
                  While it may be hard to accept, most of us will require some
                  type of care assistance after the age of 65. You may be used
                  to handling everything yourself, dividing up duties with your
                  spouse, or relying on family members for minor help around the
                  home.
                </span>
              </span>
              <span className="text22">
                <span className="text23">Learn More about this</span>
              </span>
            </div>
          </div>
        </div>
        <Footer></Footer>
      </div>
      <style jsx>
        {`
          .container {
            width: 100%;
            height: auto;
            display: flex;
            min-height: 100vh;
            align-items: center;
            flex-direction: column;
          }
          .hero {
            width: 100%;
            height: 800px;
            display: flex;
            position: relative;
            align-items: center;
            flex-direction: column;
          }
          .top-container {
            width: 100%;
            height: 800px;
            display: flex;
            position: relative;
            align-items: center;
            flex-direction: column;
          }
          .frame513443 {
            top: 0px;
            left: 0px;
            width: 1440px;
            height: 800px;
            display: flex;
            padding: 10px 10px 10px 90px;
            position: absolute;
            box-sizing: border-box;
            align-items: flex-start;
            border-color: transparent;
            flex-direction: column;
            justify-content: center;
            background-image: url('https://aheioqhobo.cloudimg.io/v7/_playground-bucket-v2.teleporthq.io_/c1ffdb5c-412e-4725-9813-fbc657132c82/4db96a58-0310-49b6-8b1c-7b62f7f152fd?org_if_sml=11132558');
          }
          .text {
            color: rgba(42, 42, 42, 1);
            height: auto;
            margin: 0 0 36px 0;
            font-size: 70px;
            align-self: auto;
            font-style: normal;
            text-align: left;
            font-family: Inter;
            font-weight: 700;
            line-height: normal;
            font-stretch: normal;
            text-decoration: none;
          }
          .text01 {
            color: rgba(42, 42, 42, 1);
            height: auto;
            align-self: auto;
            font-style: normal;
            text-align: left;
            font-weight: 700;
            font-stretch: normal;
            text-decoration: none;
          }
          .text07 {
            color: rgba(237, 68, 68, 1);
            height: auto;
            align-self: auto;
            font-style: normal;
            text-align: left;
            font-weight: 700;
            font-stretch: normal;
            text-decoration: none;
          }
          .text08 {
            color: rgba(42, 42, 42, 1);
            height: auto;
            align-self: auto;
            font-style: normal;
            text-align: left;
            font-weight: 700;
            font-stretch: normal;
            text-decoration: none;
          }
          .text12 {
            color: rgba(0, 0, 0, 1);
            width: 407px;
            height: auto;
            margin: 0 0 36px 0;
            font-size: 22px;
            align-self: auto;
            font-style: normal;
            text-align: center;
            font-family: Inter;
            font-weight: 500;
            line-height: normal;
            font-stretch: normal;
            text-decoration: none;
          }
          .text13 {
            color: rgba(0, 0, 0, 1);
            width: 407px;
            height: auto;
            align-self: auto;
            font-style: normal;
            text-align: center;
            font-weight: 500;
            font-stretch: normal;
            text-decoration: none;
          }
          .group113448 {
            width: 328px;
            height: 69px;
            display: flex;
            position: relative;
            box-sizing: border-box;
            align-items: flex-start;
            flex-shrink: 1;
            border-color: transparent;
          }
          .image {
            top: 0px;
            left: 0px;
            width: 328px;
            height: 69px;
            position: absolute;
            object-fit: cover;
            border-color: transparent;
            border-radius: 14px;
            background-color: rgba(237, 68, 68, 1);
          }
          .text14 {
            top: 19px;
            left: 41px;
            color: rgba(255, 255, 255, 1);
            width: 285px;
            height: auto;
            position: absolute;
            font-size: 28px;
            align-self: auto;
            font-style: normal;
            text-align: left;
            font-family: Inter;
            font-weight: 700;
            line-height: normal;
            font-stretch: normal;
            text-decoration: none;
          }
          .text15 {
            color: rgba(255, 255, 255, 1);
            width: 285px;
            height: auto;
            align-self: auto;
            font-style: normal;
            text-align: left;
            font-weight: 700;
            font-stretch: normal;
            text-decoration: none;
          }
          .main {
            width: 100%;
            display: flex;
            align-items: center;
            padding-top: var(--dl-space-space-quadruple);
            padding-left: var(--dl-space-space-doubleunit);
            padding-right: var(--dl-space-space-doubleunit);
            flex-direction: column;
            padding-bottom: var(--dl-space-space-quadruple);
            justify-content: flex-start;
          }
          .text17 {
            color: var(--dl-color-gray-500);
          }
          .cards-container {
            width: 100%;
            display: flex;
            grid-gap: var(--dl-space-space-doubleunit);
            flex-wrap: wrap;
            max-width: 1000px;
            margin-top: var(--dl-space-space-doubleunit);
            align-items: flex-start;
            margin-bottom: var(--dl-space-space-doubleunit);
            flex-direction: row;
            justify-content: space-between;
          }
          .autolayout13365 {
            width: 1440px;
            height: 5472px;
            display: flex;
            overflow: hidden;
            position: relative;
            max-width: 1440px;
            box-sizing: border-box;
            align-items: flex-start;
            border-color: transparent;
            background-color: rgba(255, 255, 255, 1);
          }
          .text18 {
            top: 894px;
            left: 90px;
            color: rgba(255, 255, 255, 1);
            width: 610px;
            height: auto;
            position: absolute;
            font-size: 18px;
            align-self: auto;
            font-style: normal;
            text-align: left;
            font-family: Inter;
            font-weight: 700;
            line-height: 37.5px;
            font-stretch: normal;
            text-decoration: none;
          }
          .text19 {
            color: rgba(255, 255, 255, 1);
            width: 610px;
            height: auto;
            align-self: auto;
            font-style: normal;
            text-align: left;
            font-weight: 700;
            font-stretch: normal;
            text-decoration: none;
          }
          .text20 {
            top: 1045px;
            left: 90px;
            color: rgba(255, 255, 255, 1);
            width: 610px;
            height: auto;
            position: absolute;
            font-size: 18px;
            align-self: auto;
            font-style: normal;
            text-align: left;
            font-family: Inter;
            font-weight: 700;
            line-height: 225.5000114440918%;
            font-stretch: normal;
            text-decoration: none;
          }
          .text21 {
            color: rgba(255, 255, 255, 1);
            width: 610px;
            height: auto;
            align-self: auto;
            font-style: normal;
            text-align: left;
            font-weight: 700;
            font-stretch: normal;
            text-decoration: none;
          }
          .text22 {
            top: 1053px;
            left: 1120px;
            color: rgba(255, 255, 255, 1);
            height: auto;
            position: absolute;
            font-size: 18px;
            align-self: auto;
            font-style: normal;
            text-align: left;
            font-family: Inter;
            font-weight: 700;
            line-height: 37.5px;
            font-stretch: normal;
            text-decoration: none;
          }
          .text23 {
            color: rgba(255, 255, 255, 1);
            height: auto;
            align-self: auto;
            font-style: normal;
            text-align: left;
            font-weight: 700;
            font-stretch: normal;
            text-decoration: none;
          }
          @media (max-width: 991px) {
            .cards-container {
              justify-content: center;
            }
          }
          @media (max-width: 767px) {
            .hero {
              background-color: var(--dl-color-gray-white);
            }
            .top-container {
              background-color: var(--dl-color-gray-white);
            }
            .main {
              padding-left: var(--dl-space-space-unit);
              padding-right: var(--dl-space-space-unit);
            }
          }
          @media (max-width: 479px) {
            .hero {
              background: white;
            }
            .top-container {
              background: white;
            }
          }
        `}
      </style>
    </>
  )
}

export default Home
