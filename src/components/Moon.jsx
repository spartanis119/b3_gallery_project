import moon from "../assets/img/moon.jpeg"

import PropTypes from "prop-types"

export const Moon = ({className}) => {
  return (
    <img src={moon} alt="Moon" className={className} />
  )
}

Moon.propTypes = {
    className: PropTypes.string,
}