import React from 'react'
import Head from 'next/head'

const Services = () => {
  return (
    <>
      <div className="container">
        <Head>
          <title>Services - Canadian Health Care Support</title>
          <meta
            property="og:title"
            content="Services - Canadian Health Care Support"
          />
        </Head>
      </div>
      <style jsx>
        {`
          .container {
            width: 100%;
            display: flex;
            overflow: auto;
            min-height: 100vh;
            align-items: center;
            flex-direction: column;
          }
        `}
      </style>
    </>
  )
}

export default Services
