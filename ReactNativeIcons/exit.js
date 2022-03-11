import * as React from "react";
import Svg, { Path } from "react-native-svg";
/* SVGR has dropped some elements not supported by react-native-svg: style */

const SvgExit = props => <Svg id="Capa_1" xmlns="http://www.w3.org/2000/svg" x={0} y={0} viewBox="0 0 24 24" style={{
  enableBackground: "new 0 0 24 24"
}} xmlSpace="preserve" width={24} height={24} {...props}><Path className="st0" d="M15.5 15.9c-.3 0-.5.2-.5.5v2.2c0 .5-.2.9-.5 1.2-.3.3-.8.5-1.2.5H2.7c-.5 0-.9-.2-1.2-.5-.3-.3-.5-.7-.5-1.2V5.4c0-.5.2-.9.5-1.2s.8-.5 1.2-.5h10.6c.5 0 .9.2 1.2.5s.5.8.5 1.2v2.2c0 .3.2.5.5.5s.5-.2.5-.5V5.4a2.732 2.732 0 0 0-2.7-2.7H2.7c-.7 0-1.3.3-1.8.8S.1 4.7.1 5.4v13.2a2.732 2.732 0 0 0 2.7 2.7h10.6a2.732 2.732 0 0 0 2.7-2.7v-2.2c-.1-.2-.3-.5-.6-.5z" /><Path className="st0" d="M23.9 12.2v-.5l-4.4-4.4c-.2-.2-.5-.2-.6 0-.2.2-.2.5 0 .6l3.6 3.6H8.4c-.2 0-.4.2-.4.5s.2.5.5.5h13.9l-3.6 3.6c-.2.2-.2.5 0 .6.1.1.2.1.3.1.1 0 .2 0 .3-.1l4.4-4.4.1-.1z" /></Svg>;

export default SvgExit;