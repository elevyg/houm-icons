import * as React from "react";
import Svg, { Path } from "react-native-svg";
/* SVGR has dropped some elements not supported by react-native-svg: style */

const SvgArrowUpCircle = props => <Svg id="Capa_1" xmlns="http://www.w3.org/2000/svg" x={0} y={0} viewBox="0 0 24 24" style={{
  enableBackground: "new 0 0 24 24"
}} xmlSpace="preserve" width={24} height={24} {...props}><Path className="st0" d="M12.3 6.5c-.2-.2-.5-.2-.6 0l-4.8 4.8c-.2.2-.2.5 0 .6.1.1.2.1.3.1.1 0 .2 0 .3-.1l4-4v9.2c0 .3.2.5.5.5s.5-.2.5-.5V7.9l4 4c.2.2.5.2.6 0s.2-.5 0-.6l-4.8-4.8z" /><Path className="st0" d="M12 0C5.4 0 0 5.4 0 12s5.4 12 12 12 12-5.4 12-12S18.6 0 12 0zm0 23.1C5.9 23.1.9 18.1.9 12S5.9.9 12 .9s11.1 5 11.1 11.1-5 11.1-11.1 11.1z" /></Svg>;

export default SvgArrowUpCircle;