import * as React from "react";
import Svg, { Path } from "react-native-svg";
/* SVGR has dropped some elements not supported by react-native-svg: style */

const SvgMedkit = props => <Svg id="Capa_1" xmlns="http://www.w3.org/2000/svg" x={0} y={0} viewBox="0 0 24 24" style={{
  enableBackground: "new 0 0 24 24"
}} xmlSpace="preserve" width={24} height={24} {...props}><Path className="st0" d="M21.1 4.2h-2.8V3c0-.6-.2-1.1-.6-1.5s-.9-.6-1.5-.6H7.9c-.6 0-1.1.2-1.5.6-.4.4-.6.9-.6 1.5v1.2H2.9C1.3 4.1 0 5.5 0 7v13.2c0 1.6 1.3 2.9 2.9 2.9H21c1.6 0 2.9-1.3 2.9-2.9V7.1c.1-1.6-1.2-2.9-2.8-2.9zM6.7 3c0-.3.1-.6.3-.8.2-.2.5-.3.8-.3H16c.3 0 .6.1.8.3.2.2.3.5.3.8v1.2H6.7V3zm16.4 17.3c0 1.1-.9 2-2 2H2.9c-1.1 0-2-.9-2-2V7.1c0-1.1.9-2 2-2H21c1.1 0 2 .9 2 2l.1 13.2z" /><Path className="st0" d="M16.2 13.2h-3.7V9.5c0-.3-.2-.5-.5-.5s-.5.2-.5.5v3.7H7.9c-.3 0-.5.2-.5.5s.2.5.5.5h3.7v3.7c0 .3.2.5.5.5s.5-.2.5-.5v-3.7h3.7c.3 0 .5-.2.5-.5s-.4-.5-.6-.5z" /></Svg>;

export default SvgMedkit;