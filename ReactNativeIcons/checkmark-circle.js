import * as React from "react";
import Svg, { Path } from "react-native-svg";
/* SVGR has dropped some elements not supported by react-native-svg: style */

const SvgCheckmarkCircle = props => <Svg id="Capa_1" xmlns="http://www.w3.org/2000/svg" x={0} y={0} viewBox="0 0 24 24" style={{
  enableBackground: "new 0 0 24 24"
}} xmlSpace="preserve" width={24} height={24} {...props}><Path className="st0" d="M12 24C5.4 24 0 18.6 0 12S5.4 0 12 0s12 5.4 12 12-5.4 12-12 12zm0-23C5.9 1 1 5.9 1 12s4.9 11 11 11 11-4.9 11-11S18.1 1 12 1z" /><Path className="st0" d="M9.7 17.3c-.1 0-.3 0-.3-.1l-3.5-3.8c-.2-.2-.1-.5 0-.7s.5-.1.7 0l3.1 3.4 7.7-9.2c.2-.2.5-.2.7 0 .2.2.2.5 0 .7L10 17.2s-.2.1-.3.1z" /></Svg>;

export default SvgCheckmarkCircle;