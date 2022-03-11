import * as React from "react";
import Svg, { Path } from "react-native-svg";
/* SVGR has dropped some elements not supported by react-native-svg: style */

const SvgPrint = props => <Svg id="Capa_1" xmlns="http://www.w3.org/2000/svg" x={0} y={0} viewBox="0 0 24 24" style={{
  enableBackground: "new 0 0 24 24"
}} xmlSpace="preserve" width={24} height={24} {...props}><Path className="st0" d="M23 4.8c-.5-.5-1.2-.9-2-.9h-1V3c0-.8-.3-1.5-.9-2-.5-.5-1.2-.9-2-.9H6.8c-.8 0-1.5.3-2 .9-.5.5-.9 1.2-.9 2v1H3c-.8 0-1.5.3-2 .9C.5 5.3.1 6 .1 6.8v9.5c0 .8.3 1.5.9 2 .5.5 1.2.9 2 .9h1V22c0 1 .9 1.9 1.9 1.9h12.3c1 0 1.9-.9 1.9-1.9v-2.9h1c.8 0 1.5-.3 2-.9.5-.5.9-1.2.9-2V6.8c-.1-.8-.4-1.5-1-2zM4.9 3c0-.5.2-1 .6-1.3.4-.4.9-.6 1.3-.6h10.5c.5 0 1 .2 1.3.6.4.3.5.8.5 1.3v1H4.9V3zm14.2 19c0 .5-.4 1-1 1H5.8c-.5 0-1-.4-1-1v-9.5c0-.5.4-1 1-1h12.3c.5 0 1 .4 1 1V22zm3.8-5.7c0 .5-.2 1-.6 1.3-.3.4-.8.6-1.3.6h-1v-5.7c0-1-.9-1.9-1.9-1.9H5.8c-1 0-1.9.9-1.9 1.9v5.7H3c-.5 0-1-.2-1.3-.6-.4-.4-.6-.9-.6-1.3V6.8c0-.5.2-1 .6-1.3.3-.4.8-.6 1.3-.6h18c.5 0 1 .2 1.3.6.4.4.6.9.6 1.3v9.5z" /><Path className="st0" d="M20.1 6.3c-.8 0-1.4.6-1.4 1.4s.6 1.4 1.4 1.4c.8 0 1.4-.6 1.4-1.4s-.6-1.4-1.4-1.4zm0 1.9c-.3 0-.5-.2-.5-.5s.2-.5.5-.5.5.2.5.5-.2.5-.5.5z" /></Svg>;

export default SvgPrint;