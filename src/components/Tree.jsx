import tree from "../assets/img/tree.png"

import PropTypes from "prop-types"

export const Tree = ({className}) => {
  return (
    <img src={tree} alt="Tree Landscape" className={className}/>
  )
}


Tree.propTypes = {
    className : PropTypes.string,
}