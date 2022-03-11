import * as React from "react";
import Svg, { Path } from "react-native-svg";
/* SVGR has dropped some elements not supported by react-native-svg: style */

const SvgCloset = props => <Svg id="Capa_1" xmlns="http://www.w3.org/2000/svg" x={0} y={0} viewBox="0 0 24 24" style={{
  enableBackground: "new 0 0 24 24"
}} xmlSpace="preserve" width={24} height={24} {...props}><Path className="st0" d="M22.9 2.8c0-.1-.2-.3-.3-.4-.1-.1-.3-.1-.4-.2h-.5l-4 1v-.8c0-.6-.2-1.3-.7-1.7-.4-.4-1-.7-1.7-.7H3.1c-.2 0-.5 0-.8.1s-.5.3-.7.5c-.2.2-.4.4-.5.7-.1.3-.1.6-.1.8v21.4c0 .3.2.5.5.5s.5-.2.5-.5v-1.3h14.7v1.3c0 .3.2.5.5.5s.5-.2.5-.5v-4.1l4 1h.4c.1 0 .3-.1.4-.2.1-.1.2-.2.3-.4s.1-.3.1-.4V3.2c.1-.1.1-.3 0-.4zM2 4.3h6.9v14H2v-14zm14.7 0v1.8H9.8V4.3h6.9zM9.8 7.1h1.7v1.5c0 .3.2.5.5.5s.5-.2.5-.5V7.1H14v1.5c0 .3.2.5.5.5s.5-.2.5-.5V7.1h1.7v11.2H9.8V7.1zM2.1 1.7c0-.1.1-.2.2-.4.1-.1.3-.2.4-.3h12.6c.4 0 .7.1 1 .4s.4.6.4 1v.9H2V2.1c0-.1 0-.3.1-.4zM2 19.3h6.9v2H2v-2zm7.8 2v-2h6.9v2H9.8zM22 19.5l-4.3-1.1V4.2l4.3-1v16.3l.3.3-.3-.3z" /><Path className="st0" d="M6.7 9.5c-.3 0-.5.2-.5.5v2.7c0 .3.2.5.5.5s.5-.2.5-.5V9.9c0-.3-.2-.4-.5-.4z" /></Svg>;

export default SvgCloset;