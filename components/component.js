import React from 'react'

import PropTypes from 'prop-types'

const AppComponent = (props) => {
  return (
    <>
      <div className={`container ${props.rootClassName} `}>
        <div className="hero">
          <div className="container1">
            <h2 className="text">
              <span>
                We give you peace of mind by keeping your
                <span
                  dangerouslySetInnerHTML={{
                    __html: ' ',
                  }}
                />
              </span>
              <br></br>
              <span>loved ones where they are most comfortable</span>
              <br></br>
              <span> â at home.</span>
            </h2>
            <h1 className="text04 heading">
              <span>
                What is
                <span
                  dangerouslySetInnerHTML={{
                    __html: ' ',
                  }}
                />
              </span>
              <span className="text06">
                Aging
                <span
                  dangerouslySetInnerHTML={{
                    __html: ' ',
                  }}
                />
              </span>
              <br></br>
              <span className="text08">in Place?</span>
            </h1>
          </div>
          <img
            alt="image"
            src="/playground_assets/in-home-caregiver-1200w.jpg"
            className="image"
          />
        </div>
        <div className="hero1">
          <div className="container2">
            <h1 className="text09">
              <span>How Canadian Healthcare Support</span>
              <br></br>
              <span className="text12">Help You</span>
              <span> Age In Place</span>
            </h1>
            <h2 className="text14">
              <span>
                Your loved ones deserve a customized level of attention most
                assisted living facilities can&apos;t provide. Our tailor-made
                home health care plans are dedicated to providing happiness,
                comfort, and security to your senior family members in their own
                home.
              </span>
            </h2>
          </div>
        </div>
      </div>
      <style jsx>
        {`
          .container {
            width: 100%;
            height: 700px;
            display: flex;
            position: relative;
            align-items: center;
            flex-direction: column;
            justify-content: center;
          }
          .hero {
            width: 100%;
            display: flex;
            padding: 32px;
            position: relative;
            align-self: flex-end;
            min-height: 50vh;
            align-items: center;
            flex-direction: row;
            justify-content: space-between;
            background-color: var(--dl-color-primary-700);
          }
          .container1 {
            width: 100%;
            height: 247px;
            display: flex;
            position: relative;
            align-self: flex-start;
            align-items: flex-start;
            margin-left: 0px;
            flex-direction: column;
            justify-content: center;
          }
          .text {
            color: var(--dl-color-gray-white);
            width: 541px;
            margin-top: var(--dl-space-space-unit);
            font-weight: 600;
            margin-bottom: var(--dl-space-space-unit);
          }
          .text04 {
            top: 40px;
            color: var(--dl-color-gray-white);
            right: 241px;
            width: 476px;
            position: absolute;
            align-self: flex-end;
          }
          .text06 {
            color: var(--dl-color-primary-100);
          }
          .text08 {
            color: var(--dl-color-primary-100);
          }
          .image {
            right: 146px;
            width: 392px;
            bottom: -123px;
            height: 252px;
            position: absolute;
            object-fit: cover;
            border-radius: 16px;
          }
          .hero1 {
            width: 100%;
            display: flex;
            padding: 32px;
            align-self: flex-end;
            min-height: 50vh;
            align-items: center;
            flex-direction: row;
            justify-content: space-between;
            background-color: var(--dl-color-gray-white);
          }
          .container2 {
            width: 100%;
            height: 294px;
            display: flex;
            align-items: flex-start;
            margin-left: 32px;
            flex-direction: row;
          }
          .text09 {
            width: 595px;
            font-size: 3rem;
          }
          .text12 {
            color: var(--dl-color-primary-100);
          }
          .text14 {
            width: 613px;
            align-self: flex-end;
            margin-top: var(--dl-space-space-unit);
            font-weight: 600;
            margin-bottom: var(--dl-space-space-unit);
          }

          @media (max-width: 991px) {
            .hero {
              padding: 48px;
              flex-direction: column;
            }
            .container1 {
              align-items: center;
              margin-left: 0px;
              margin-right: 0px;
              margin-bottom: 32px;
            }
            .text {
              text-align: center;
            }
            .text04 {
              text-align: center;
            }
            .image {
              order: 2;
            }
            .hero1 {
              padding: 48px;
              flex-direction: column;
            }
            .container2 {
              align-items: center;
              margin-left: 0px;
              margin-right: 0px;
              margin-bottom: 32px;
            }
            .text09 {
              text-align: center;
            }
            .text14 {
              text-align: center;
            }
          }
          @media (max-width: 767px) {
            .hero {
              padding-left: 32px;
              padding-right: 32px;
            }
            .image {
              width: 80%;
              display: none;
            }
            .hero1 {
              padding-left: 32px;
              padding-right: 32px;
            }
          }
          @media (max-width: 479px) {
            .hero {
              padding-top: 32px;
              padding-left: var(--dl-space-space-unit);
              padding-right: var(--dl-space-space-unit);
              padding-bottom: 32px;
            }
            .container1 {
              margin-bottom: var(--dl-space-space-unit);
            }
            .text04 {
              display: none;
            }
            .hero1 {
              padding-top: 32px;
              padding-left: var(--dl-space-space-unit);
              padding-right: var(--dl-space-space-unit);
              padding-bottom: 32px;
            }
            .container2 {
              margin-bottom: var(--dl-space-space-unit);
            }
          }
        `}
      </style>
    </>
  )
}

AppComponent.defaultProps = {
  rootClassName: '',
}

AppComponent.propTypes = {
  rootClassName: PropTypes.string,
}

export default AppComponent
