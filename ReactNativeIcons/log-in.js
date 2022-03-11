import * as React from "react";
import Svg, { Path } from "react-native-svg";
/* SVGR has dropped some elements not supported by react-native-svg: style */

const SvgLogIn = props => <Svg id="Capa_1" xmlns="http://www.w3.org/2000/svg" x={0} y={0} viewBox="0 0 24 24" style={{
  enableBackground: "new 0 0 24 24"
}} xmlSpace="preserve" width={24} height={24} {...props}><Path className="st0" d="M23 2c-.6-.6-1.3-.9-2.2-.9H10.4c-.8 0-1.6.3-2.1.9-.6.6-.9 1.3-.9 2.2v2.6c0 .3.2.5.5.5s.5-.2.5-.5V4.2c0-.6.2-1.1.6-1.5.3-.5.9-.7 1.4-.7h10.4c.6 0 1.1.2 1.5.6.4.4.6 1 .6 1.5v15.7c0 .6-.2 1.1-.6 1.5-.4.4-1 .6-1.5.6h-9.9c-1.2 0-2.7-1-2.7-2.2v-2.6c0-.3-.2-.5-.5-.5s-.5.2-.5.5v2.6c0 1.7 1.9 3.1 3.6 3.1h9.9c.8 0 1.6-.3 2.2-.9.6-.6.9-1.3.9-2.2V4.2c.2-.8-.2-1.6-.8-2.2z" /><Path className="st0" d="M13.7 16.9c-.2.2-.2.5 0 .6.1.1.2.1.3.1s.2 0 .3-.1l5.2-5.2c.2-.2.2-.5 0-.6l-5.2-5.2c-.2-.2-.5-.2-.6 0-.2.2-.2.5 0 .6l4.5 4.5H.5c-.3 0-.5.1-.5.4 0 .3.2.5.5.5h17.7l-4.5 4.4z" /></Svg>;

export default SvgLogIn;