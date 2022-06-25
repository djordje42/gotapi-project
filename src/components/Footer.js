import { color } from '@mui/system';
import React from 'react'

const style = {
    backgroundColor: "#5C4033",
    borderTop: "1px solid #E7E7E7",
    textAlign: "center",
    padding: "20px",
    position: "relative",
    left: "0",
    bottom: "0",
    height: "30px",
    width: "100%",
    display: "flex",
    justifyContent: "center",
    alignItems: "center"
  };

const Footer = (props) => {
  return (
<div>
      <div style={style}>{props.text}</div>
    </div>
  )
}

export default Footer