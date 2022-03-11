import * as React from "react";
import Svg, { Path } from "react-native-svg";
/* SVGR has dropped some elements not supported by react-native-svg: style */

const SvgLogOut = props => <Svg id="Capa_1" xmlns="http://www.w3.org/2000/svg" x={0} y={0} viewBox="0 0 24 24" style={{
  enableBackground: "new 0 0 24 24"
}} xmlSpace="preserve" width={24} height={24} {...props}><Path className="st0" d="M14.9 16.3c-.3 0-.5.2-.5.5v2.4c0 .5-.2 1-.6 1.4s-.9.6-1.4.6H2.9c-.5 0-1-.2-1.4-.6s-.6-.9-.6-1.4V4.8c0-.5.2-1 .6-1.4s.9-.6 1.4-.6H12c1.1 0 2.4.9 2.4 1.9v2.4c0 .3.2.5.5.5s.5-.2.5-.5V4.8c0-1.6-1.8-2.9-3.3-2.9H2.9c-.8 0-1.5.3-2 .8S0 4 0 4.8v14.4c0 .8.3 1.5.8 2s1.2.8 2 .8h9.6c.7 0 1.5-.3 2-.8.6-.6.8-1.2.8-2v-2.4c.2-.2-.1-.5-.3-.5z" /><Path className="st0" d="m23.9 11.7-4.8-4.8c-.2-.2-.5-.2-.6 0s-.2.5 0 .6l4 4H7.2c-.3 0-.5.2-.5.5s.2.5.5.5h15.2l-4 4c-.2.2-.2.5 0 .6.1.1.2.1.3.1s.2 0 .3-.1l4.8-4.8c.2-.1.2-.2.2-.3 0-.1 0-.2-.1-.3z" /></Svg>;

export default SvgLogOut;