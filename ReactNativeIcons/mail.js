import * as React from "react";
import Svg, { Path } from "react-native-svg";
/* SVGR has dropped some elements not supported by react-native-svg: style */

const SvgMail = props => <Svg id="Capa_1" xmlns="http://www.w3.org/2000/svg" x={0} y={0} viewBox="0 0 24 24" style={{
  enableBackground: "new 0 0 24 24"
}} xmlSpace="preserve" width={24} height={24} {...props}><Path className="st0" d="M21.3 2.7H2.7C1.2 2.7 0 3.9 0 5.4v13.3c0 1.4 1.2 2.7 2.7 2.7h18.6c1.5 0 2.7-1.2 2.7-2.7V5.4c0-1.5-1.2-2.7-2.7-2.7zM23 18.6c0 1-.8 1.7-1.7 1.7H2.7c-1 0-1.7-.8-1.7-1.7V5.4c0-1 .8-1.7 1.7-1.7h18.6c1 0 1.7.8 1.7 1.7v13.2z" /><Path className="st0" d="M19.7 6.3 12 12.2 4.3 6.3c-.1-.1-.5-.1-.6.1-.2.2-.2.5.1.7l7.9 6.2c.1 0 .2.1.3.1s.2 0 .3-.1l7.9-6.2c.2-.1.2-.5.1-.7-.1-.2-.5-.2-.6-.1z" /></Svg>;

export default SvgMail;