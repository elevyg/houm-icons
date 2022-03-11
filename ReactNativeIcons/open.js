import * as React from "react";
import Svg, { Path } from "react-native-svg";
/* SVGR has dropped some elements not supported by react-native-svg: style */

const SvgOpen = props => <Svg id="Capa_1" xmlns="http://www.w3.org/2000/svg" x={0} y={0} viewBox="0 0 24 24" style={{
  enableBackground: "new 0 0 24 24"
}} xmlSpace="preserve" width={24} height={24} {...props}><Path className="st0" d="M19.7 9.6c-.3 0-.5.2-.5.5v11.1c0 .3 0 .5-.1.7-.1.2-.2.5-.4.6-.2.2-.4.3-.6.4-.2.1-.5.1-.7.1H2.9c-.5 0-1-.2-1.4-.6-.4-.4-.6-.9-.6-1.4V6.7c0-.5.2-1 .6-1.4s.9-.6 1.4-.6H13c.3 0 .5-.2.5-.5s-.2-.5-.5-.5H2.9c-.8 0-1.5.3-2 .8S0 5.9 0 6.7v14.4c0 .8.3 1.5.8 2 .6.6 1.2.8 2 .8h14.4c.4 0 .7-.1 1.1-.2s.6-.4.9-.6c.3-.3.5-.6.6-.9.1-.4.2-.7.2-1.1V10c.2-.2-.1-.4-.3-.4z" /><Path className="st0" d="M23.5 0h-6.7c-.3 0-.5.2-.5.5s.2.5.5.5h5.6L9.8 13.6c-.2.2-.2.5 0 .6.1.1.2.1.3.1s.2 0 .3-.1L23.1 1.6v5.6c0 .3.2.5.5.5s.4-.2.4-.5V.5c0-.3-.2-.5-.5-.5z" /></Svg>;

export default SvgOpen;