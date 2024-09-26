import wolves from "../assets/img/wolves.png"

import PropTypes from "prop-types"

export const Wolves = ({className}) => {
  return (
    <img src={wolves} alt="Wolves Landscape" className={className} />
  )
}


Wolves.propTypes = {
    className: PropTypes.string,
}