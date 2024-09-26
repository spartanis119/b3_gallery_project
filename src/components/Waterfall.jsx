import waterfall from "../assets/img/waterfall.png"

import PropTypes from "prop-types"

export const Waterfall = ({className}) => {
  return (
    <img src={waterfall} alt="Planets Landscape" className={className} />
  )
}

Waterfall.propTypes = {
    className : PropTypes.string.isRequired,
}