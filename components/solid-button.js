import React from 'react'

import PropTypes from 'prop-types'

const SolidButton = (props) => {
  return (
    <>
      <div className={`container ${props.rootClassName} `}>
        <div className="button"></div>
      </div>
      <style jsx>
        {`
          .container {
            display: flex;
            position: relative;
          }
          .button {
            flex: 0 0 auto;
            width: 200px;
            border: 2px dashed rgba(120, 120, 120, 0.4);
            height: 50px;
            display: flex;
            align-items: flex-start;
          }
        `}
      </style>
    </>
  )
}

SolidButton.defaultProps = {
  rootClassName: '',
}

SolidButton.propTypes = {
  rootClassName: PropTypes.string,
}

export default SolidButton
