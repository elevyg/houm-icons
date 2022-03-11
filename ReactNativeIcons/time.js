import * as React from "react";
import Svg, { Path } from "react-native-svg";
/* SVGR has dropped some elements not supported by react-native-svg: style */

const SvgTime = props => <Svg id="Capa_1" xmlns="http://www.w3.org/2000/svg" x={0} y={0} viewBox="0 0 24 24" style={{
  enableBackground: "new 0 0 24 24"
}} xmlSpace="preserve" width={24} height={24} {...props}><Path className="st0" d="M12 0C5.4 0 0 5.4 0 12s5.4 12 12 12 12-5.4 12-12S18.6 0 12 0zm0 23C5.9 23 1 18.1 1 12S5.9 1 12 1s11 4.9 11 11-4.9 11-11 11z" /><Path className="st0" d="M17.8 12.5h-5.3V4.3c0-.3-.2-.5-.5-.5s-.5.2-.5.5V13c0 .3.2.5.5.5h5.8c.3 0 .5-.2.5-.5s-.3-.5-.5-.5z" /></Svg>;

export default SvgTime;