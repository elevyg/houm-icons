import * as React from "react";
import Svg, { Path } from "react-native-svg";
/* SVGR has dropped some elements not supported by react-native-svg: style */

const SvgResize = props => <Svg id="Capa_1" xmlns="http://www.w3.org/2000/svg" x={0} y={0} viewBox="0 0 24 24" style={{
  enableBackground: "new 0 0 24 24"
}} xmlSpace="preserve" width={24} height={24} {...props}><Path className="st0" d="M23.5 0h-8.1c-.2 0-.4.2-.4.5s.2.5.5.5h7L1.3 22.1c-.2.2-.2.5 0 .6.1.1.2.1.3.1s.2 0 .3-.1L23.1 1.6v7c0 .3.2.5.5.5s.4-.3.4-.6v-8c0-.3-.2-.5-.5-.5z" /><Path className="st0" d="M8.5 23.1H.9v-7.6c0-.3-.2-.5-.5-.5s-.4.2-.4.5v8.1c0 .2.2.4.5.4h8.1c.2 0 .4-.2.4-.5s-.2-.4-.5-.4z" /></Svg>;

export default SvgResize;