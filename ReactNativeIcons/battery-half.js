import * as React from "react";
import Svg, { Path } from "react-native-svg";
/* SVGR has dropped some elements not supported by react-native-svg: style */

const SvgBatteryHalf = props => <Svg id="Capa_1" xmlns="http://www.w3.org/2000/svg" x={0} y={0} viewBox="0 0 24 24" style={{
  enableBackground: "new 0 0 24 24"
}} xmlSpace="preserve" width={24} height={24} {...props}><Path className="st0" d="M18.7 5.8H2.8C1.2 5.8 0 7 0 8.6v6.8c0 1.6 1.2 2.8 2.8 2.8h15.9c1.6 0 2.8-1.2 2.8-2.8V8.6c.1-1.6-1.2-2.8-2.8-2.8zm1.9 9.6c0 1-.8 1.9-1.9 1.9H2.8c-1 0-1.9-.8-1.9-1.9V8.6c0-1 .8-1.9 1.9-1.9h15.9c1 0 1.9.8 1.9 1.9v6.8z" /><Path className="st0" d="M11 9.1H3.5c-.1 0-.2.1-.2.2v5.5c0 .1.1.2.2.2H11c.1 0 .2-.1.2-.2V9.3c0-.1-.1-.2-.2-.2zm12.5.5c-.3 0-.5.2-.5.5v3.8c0 .3.2.5.5.5s.5-.2.5-.5v-3.8c0-.3-.2-.5-.5-.5z" /></Svg>;

export default SvgBatteryHalf;