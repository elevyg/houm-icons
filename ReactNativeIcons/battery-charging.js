import * as React from "react";
import Svg, { Path } from "react-native-svg";
/* SVGR has dropped some elements not supported by react-native-svg: style */

const SvgBatteryCharging = props => <Svg id="Capa_1" xmlns="http://www.w3.org/2000/svg" x={0} y={0} viewBox="0 0 24 24" style={{
  enableBackground: "new 0 0 24 24"
}} xmlSpace="preserve" width={24} height={24} {...props}><Path className="st0" d="M19.1 5.6H2.9C1.3 5.6 0 6.9 0 8.5v7c0 1.6 1.3 2.9 2.9 2.9h16.2c1.6 0 2.9-1.3 2.9-2.9v-7c0-1.6-1.3-2.9-2.9-2.9zm1.9 9.9c0 1.1-.9 1.9-1.9 1.9H2.9c-1.1 0-1.9-.9-1.9-1.9v-7c0-1.1.9-1.9 1.9-1.9h16.2c1.1 0 1.9.9 1.9 1.9v7z" /><Path className="st0" d="M7.4 13.8c-.2 0-.5 0-.7-.1s-.4-.2-.5-.4c-.1-.2-.2-.4-.1-.6 0-.2.1-.4.2-.6l2.9-3.4H3.6c-.3 0-.6.1-.8.3-.2.1-.4.4-.4.6v5c0 .2.1.5.3.7.2.2.5.3.8.3h5.3l.5-1.6-1.9-.2z" /><Path className="st0" d="M14.2 11.6v-.1h-2.9l.6-1.7.1-.4.3-.9.4-1.1-.9.9-.8.6-.5.5-3 3.2v.1h3l-1.4 4.1 1.1-1.2.8-.9 2-1.7 1.2-1.4z" /><Path className="st0" d="M18 8.6h-5.3l-.5 1.6h1.9c.2 0 .5 0 .7.1.2.1.4.2.5.4.1.2.2.4.1.6 0 .2-.1.4-.2.6l-2.9 3.4H18c.3 0 .5-.1.8-.3.2-.2.3-.4.3-.7V9.5c0-.2-.1-.5-.3-.7-.2-.1-.5-.2-.8-.2zm5.5 1c-.3 0-.5.2-.5.5V14c0 .3.2.5.5.5s.5-.2.5-.5v-3.9c0-.3-.2-.5-.5-.5z" /></Svg>;

export default SvgBatteryCharging;