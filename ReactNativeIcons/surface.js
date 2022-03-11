import * as React from "react";
import Svg, { Path } from "react-native-svg";
/* SVGR has dropped some elements not supported by react-native-svg: style */

const SvgSurface = props => <Svg id="Capa_1" xmlns="http://www.w3.org/2000/svg" x={0} y={0} viewBox="0 0 24 24" style={{
  enableBackground: "new 0 0 24 24"
}} xmlSpace="preserve" width={24} height={24} {...props}><Path className="st0" d="M5.2 15.7c.2.2.5.2.7 0s.2-.5 0-.7l-2.3-2.3h9.7v6.2L11 16.6c-.2-.2-.5-.2-.7 0s-.2.5 0 .7l3.1 3.1c.2.2.5.2.7 0l3.1-3.1c.2-.2.2-.5 0-.7s-.5-.2-.7 0l-2.3 2.3v-6.2h6L18.1 15c-.2.2-.2.5 0 .7s.5.2.7 0l3.1-3.1c.2-.2.2-.5 0-.7l-3.1-3.1c-.2-.2-.5-.2-.7 0s-.2.5 0 .7l2.3 2.3h-6V4.3l2.3 2.3c.2.2.5.2.7 0 .2-.2.2-.5 0-.7l-3.1-3.1c-.2-.2-.5-.2-.7 0l-3.1 3.1c-.2.2-.2.5 0 .7.2.2.5.2.7 0l2.3-2.3v7.5H3.6l2.3-2.3c.2-.2.2-.5 0-.7s-.5-.2-.7 0l-3.1 3.1c-.2.2-.2.5 0 .7l3.1 3.1z" /><Path className="st0" d="M23.5 0H.5C.2 0 0 .2 0 .5v23c0 .3.2.5.5.5h23c.3 0 .5-.2.5-.5V.5c0-.3-.2-.5-.5-.5zM23 23H1V1h22v22z" /></Svg>;

export default SvgSurface;