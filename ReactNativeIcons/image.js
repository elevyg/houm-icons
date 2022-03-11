import * as React from "react";
import Svg, { Path } from "react-native-svg";
/* SVGR has dropped some elements not supported by react-native-svg: style */

const SvgImage = props => <Svg id="Capa_1" xmlns="http://www.w3.org/2000/svg" x={0} y={0} viewBox="0 0 24 24" style={{
  enableBackground: "new 0 0 24 24"
}} xmlSpace="preserve" width={24} height={24} {...props}><Path className="st0" d="M20.8 1.9H3.2C1.5 1.9.1 3.3.1 5v14c0 1.7 1.4 3.1 3.1 3.1h17.6c1.7 0 3.1-1.4 3.1-3.1V5c0-1.7-1.4-3.1-3.1-3.1zm-17.6.9h17.6c1.2 0 2.1 1 2.1 2.1v12.2l-3.2-2.7c-.4-.3-1-.5-1.5-.5-.6 0-1.1.2-1.5.7l-1.6 1.6s0-.1-.1-.1l-5-5c-.4-.4-1-.6-1.5-.7-.6 0-1.1.2-1.6.6L1 16.3V5c.1-1.2 1-2.2 2.2-2.2zM1.1 19.1v-1.6l6.5-5.8c.2-.2.6-.3.9-.3.3 0 .6.1.9.4l5 5s.1 0 .1.1l-4.4 4.4H3.2c-1.2-.1-2.1-1-2.1-2.2zm19.7 2.1h-9.4l5.9-5.9c.2-.2.5-.4.9-.4.3 0 .6.1.9.3l3.9 3.2v.7c-.1 1.2-1 2.1-2.2 2.1z" /><Path className="st0" d="M16.4 9.9c1.2 0 2.2-1 2.2-2.2s-1-2.2-2.2-2.2-2.2 1-2.2 2.2.9 2.2 2.2 2.2zm0-3.5c.7 0 1.3.6 1.3 1.3S17.1 9 16.4 9c-.7 0-1.3-.6-1.3-1.3s.6-1.3 1.3-1.3z" /></Svg>;

export default SvgImage;