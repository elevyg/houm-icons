import * as React from "react";
import Svg, { Path } from "react-native-svg";
/* SVGR has dropped some elements not supported by react-native-svg: style */

const SvgBatteryFull = props => <Svg id="Capa_1" xmlns="http://www.w3.org/2000/svg" x={0} y={0} viewBox="0 0 24 24" style={{
  enableBackground: "new 0 0 24 24"
}} xmlSpace="preserve" width={24} height={24} {...props}><Path className="st0" d="M18.7 18.2H2.8C1.2 18.2 0 17 0 15.4V8.6C0 7 1.2 5.8 2.8 5.8h15.9c1.6 0 2.8 1.2 2.8 2.8v6.8c.1 1.6-1.2 2.8-2.8 2.8zM2.8 6.7c-1 0-1.8.8-1.8 1.9v6.8c0 1 .8 1.9 1.9 1.9h15.9c1 0 1.9-.8 1.9-1.9V8.6c0-1-.8-1.9-1.9-1.9h-16z" /><Path className="st0" d="M18.1 9.1H3.5c-.1 0-.2.1-.2.2v5.5c0 .1.1.2.2.2h14.6c.1 0 .2-.1.2-.2V9.3c0-.1-.1-.2-.2-.2zm5.4 5.3c-.3 0-.5-.2-.5-.5v-3.8c0-.3.2-.5.5-.5s.5.2.5.5v3.8c0 .3-.2.5-.5.5z" /></Svg>;

export default SvgBatteryFull;