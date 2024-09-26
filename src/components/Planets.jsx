import planets from "../assets/img/planets.jpeg"

import PropTypes from "prop-types"

export const Planets = ({className}) => {
  return (
    <img src={planets} alt="Planets Landscape" className={className} />
  )
}


Planets.propTypes = {
    className: PropTypes.string,
}