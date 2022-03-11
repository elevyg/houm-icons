import * as React from "react";
import Svg, { Path } from "react-native-svg";
/* SVGR has dropped some elements not supported by react-native-svg: style */

const SvgPush = props => <Svg id="Capa_1" xmlns="http://www.w3.org/2000/svg" x={0} y={0} viewBox="0 0 24 24" style={{
  enableBackground: "new 0 0 24 24"
}} xmlSpace="preserve" width={24} height={24} {...props}><Path className="st0" d="M20.4.9c-.5-.5-1.2-.8-1.9-.8H5.4C4.7.1 4 .4 3.5.9S2.7 2 2.7 2.8v11.4a2.732 2.732 0 0 0 2.7 2.7h2.2c.3 0 .5-.2.5-.5s-.2-.4-.5-.4H5.4c-.5 0-.9-.2-1.2-.5-.3-.3-.5-.7-.5-1.2V2.8c0-.5.2-.9.5-1.2.2-.4.7-.6 1.2-.6h13.2c.5 0 .9.2 1.2.5.3.3.5.7.5 1.2v11.4c0 .5-.2.9-.5 1.2-.3.4-.7.5-1.2.5h-2.2c-.3 0-.5.2-.5.5s.2.5.5.5h2.2a2.732 2.732 0 0 0 2.7-2.7V2.8c-.1-.8-.3-1.4-.9-1.9z" /><Path className="st0" d="M16.1 11.4c.1.1.2.1.3.1.1 0 .2 0 .3-.1.2-.2.2-.5 0-.6l-4.4-4.4c-.2-.2-.5-.2-.6 0l-4.4 4.4c-.2.2-.2.5 0 .6.2.2.5.2.6 0l3.6-3.6v15.6c0 .3.2.5.5.5s.5-.2.5-.5V7.8l3.6 3.6z" /></Svg>;

export default SvgPush;