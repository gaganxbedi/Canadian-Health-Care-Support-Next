import React from 'react'

import PropTypes from 'prop-types'

const Hero = (props) => {
  return (
    <>
      <section className={`hero ${props.rootClassName} `}>
        <div className="content-container">
          <h1 className="text">
            <span>
              We Provide Personalized
              <span
                dangerouslySetInnerHTML={{
                  __html: ' ',
                }}
              />
            </span>
            <span className="text2">
              Caregiving
              <span
                dangerouslySetInnerHTML={{
                  __html: ' ',
                }}
              />
            </span>
            <span>Services</span>
          </h1>
          <h2 className="subheading">{props.Subheading}</h2>
          <div className="container">
            <button className="button">
              <span className="text4 subheading">Book Appointment</span>
            </button>
          </div>
        </div>
      </section>
      <style jsx>
        {`
          .hero {
            flex: 1;
            width: 100%;
            display: flex;
            padding: var(--dl-space-space-unit);
            max-width: 100%;
            min-height: 100vh;
            align-items: center;
            padding-top: var(--dl-space-space-doubleunit);
            padding-left: var(--dl-space-space-doubleunit);
            padding-right: var(--dl-space-space-doubleunit);
            flex-direction: row;
            padding-bottom: var(--dl-space-space-doubleunit);
            background-size: cover;
            justify-content: flex-start;
            background-image: url('/playground_assets/herosection-1500w.png');
            background-position: top left;
          }
          .content-container {
            width: 567px;
            height: 494px;
            display: flex;
            align-items: flex-start;
            padding-left: 90px;
            flex-direction: column;
          }
          .text {
            color: var(--dl-color-primary-black);
            width: 560px;
            height: 343px;
            font-size: 65px;
            font-family: Inter;
            font-weight: 800;
            line-height: 1.2;
            margin-bottom: 12px;
            text-transform: none;
            text-decoration: none;
          }
          .text2 {
            color: var(--dl-color-primary-100);
          }
          .subheading {
            font-size: 22px;
            font-family: Inter;
            font-weight: 400;
            margin-bottom: 26px;
            text-transform: none;
            text-decoration: none;
          }
          .container {
            width: 289px;
            height: 54px;
            display: flex;
            position: relative;
            justify-content: center;
          }
          .button {
            color: var(--dl-color-gray-white);
            width: 294px;
            border: none;
            display: flex;
            padding: var(--dl-space-space-halfunit);
            align-self: center;
            padding-top: var(--dl-space-space-unit);
            padding-left: var(--dl-space-space-unit);
            border-radius: 50px;
            padding-right: var(--dl-space-space-unit);
            flex-direction: row;
            padding-bottom: var(--dl-space-space-unit);
            background-color: var(--dl-color-primary-100);
          }
          .text4 {
            padding: 0px;
            text-align: left;
          }
          .rootClassName {
            max-width: 1400%;
            max-height: 100vh;
          }
          @media (max-width: 991px) {
            .hero {
              padding-left: var(--dl-space-space-tripleunit);
              padding-right: var(--dl-space-space-tripleunit);
            }
          }
          @media (max-width: 767px) {
            .hero {
              justify-content: center;
            }
            .content-container {
              align-items: center;
            }
          }
          @media (max-width: 479px) {
            .content-container {
              height: 506px;
            }
          }
        `}
      </style>
    </>
  )
}

Hero.defaultProps = {
  text: 'Book Appointment',
  Subheading: 'Find the right caregiver for your needs',
  rootClassName: '',
}

Hero.propTypes = {
  text: PropTypes.string,
  Subheading: PropTypes.string,
  rootClassName: PropTypes.string,
}

export default Hero
