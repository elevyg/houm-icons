import * as React from "react";
import Svg, { Path } from "react-native-svg";
/* SVGR has dropped some elements not supported by react-native-svg: style */

const SvgArrowForward = props => <Svg id="Capa_1" xmlns="http://www.w3.org/2000/svg" x={0} y={0} viewBox="0 0 24 24" style={{
  enableBackground: "new 0 0 24 24"
}} xmlSpace="preserve" width={24} height={24} {...props}><Path className="st0" d="M23.6 11.7 13.2 1.2c-.2-.2-.5-.2-.6 0-.2.2-.2.5 0 .6L22.7 12 12.5 22.1c-.2.2-.2.5 0 .6.1.1.2.1.3.1s.2 0 .3-.1l10.4-10.4c.3-.2.3-.4.1-.6z" /><Path className="st0" d="M22.3 12c0-.3-.2-.5-.5-.5H.7c-.3 0-.5.2-.5.5s.2.5.5.5h21.1c.3 0 .5-.2.5-.5z" /></Svg>;

export default SvgArrowForward;