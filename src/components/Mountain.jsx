import mountain from "../assets/img/mountain.jpeg"

import PropTypes from "prop-types"

export const Mountain = ({className}) => {
  return (
    <img src={mountain} alt="Mountain Landscape" className={className} />
  )
}

Mountain.propTypes = {
    className : PropTypes.string,
}



