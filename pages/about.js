import React from 'react'
import Head from 'next/head'

import Navbar from '../components/navbar'

const About = () => {
  return (
    <>
      <div className="container">
        <Head>
          <title>About - Canadian Health Care Support</title>
          <meta
            property="og:title"
            content="About - Canadian Health Care Support"
          />
        </Head>
        <Navbar rootClassName="rootClassName1"></Navbar>
      </div>
      <style jsx>
        {`
          .container {
            width: 100%;
            display: flex;
            overflow: auto;
            min-height: 100vh;
            align-items: flex-start;
            flex-direction: column;
            justify-content: flex-start;
          }
        `}
      </style>
    </>
  )
}

export default About
