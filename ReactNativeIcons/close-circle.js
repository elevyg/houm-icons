import * as React from "react";
import Svg, { Path } from "react-native-svg";
/* SVGR has dropped some elements not supported by react-native-svg: style */

const SvgCloseCircle = props => <Svg id="Capa_1" xmlns="http://www.w3.org/2000/svg" x={0} y={0} viewBox="0 0 24 24" style={{
  enableBackground: "new 0 0 24 24"
}} xmlSpace="preserve" width={24} height={24} {...props}><Path className="st0" d="M12 0C5.4 0 0 5.4 0 12s5.4 12 12 12 12-5.4 12-12S18.6 0 12 0zm0 23.1C5.9 23.1.9 18.1.9 12S5.9.9 12 .9s11.1 5 11.1 11.1-5 11.1-11.1 11.1z" /><Path className="st0" d="M16.2 7.8c-.2-.2-.5-.2-.6 0L12 11.4 8.5 7.8c-.2-.1-.5-.1-.7 0-.1.2-.1.5 0 .7l3.5 3.5-3.5 3.5c-.2.2-.2.5 0 .6.1.1.2.1.3.1.1 0 .2 0 .3-.1l3.5-3.5 3.5 3.5c.1.1.2.1.3.1.1 0 .2 0 .4-.1.2-.2.2-.5 0-.6L12.6 12l3.6-3.6c.2-.1.2-.4 0-.6z" /></Svg>;

export default SvgCloseCircle;