import nightMoon from "../assets/img/nightMoon.png"

import PropTypes from "prop-types"

export const NightMoon = ({className}) => {
  return (
    <img src={nightMoon} alt="Moon Night Landscape" className={className}/>
  )
}

NightMoon.propTypes = {
    className : PropTypes.string,
}
