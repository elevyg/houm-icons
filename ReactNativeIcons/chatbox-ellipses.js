import * as React from "react";
import Svg, { Path } from "react-native-svg";
/* SVGR has dropped some elements not supported by react-native-svg: style */

const SvgChatboxEllipses = props => <Svg id="Capa_1" xmlns="http://www.w3.org/2000/svg" x={0} y={0} viewBox="0 0 24 24" style={{
  enableBackground: "new 0 0 24 24"
}} xmlSpace="preserve" width={24} height={24} {...props}><Path className="st0" d="M22.9 1.9c-.7-.7-1.6-1-2.5-1.1H3.6c-1 0-1.9.4-2.5 1.1S0 3.5 0 4.5v10.6c0 1 .4 1.9 1.1 2.5.7.7 1.6 1.1 2.5 1.1h1.7v3.9c0 .2.1.3.3.4h.2c.1 0 .2 0 .3-.1l5.2-4.3h9.1c1 0 1.9-.4 2.5-1.1.7-.7 1.1-1.6 1.1-2.5V4.5c0-1-.4-1.9-1.1-2.6zm.1 13.2c0 .7-.3 1.3-.8 1.9-.5.5-1.1.8-1.9.8h-9.1c-.2 0-.4.1-.6.2l-4.4 3.6v-3.4c0-.3-.2-.5-.5-.5H3.6c-.7 0-1.3-.3-1.9-.8-.4-.4-.7-1.1-.7-1.8V4.5c0-.7.3-1.3.8-1.8s1.1-.8 1.9-.8h16.8c.7 0 1.3.3 1.9.8.3.4.6 1.1.6 1.8v10.6z" /><Path className="st0" d="M6.7 8c-1 0-1.8.8-1.8 1.8s.8 1.8 1.8 1.8 1.8-.8 1.8-1.8S7.7 8 6.7 8zM12 8c-1 0-1.8.8-1.8 1.8s.8 1.8 1.8 1.8 1.8-.8 1.8-1.8S13 8 12 8zm5.3 0c-1 0-1.8.8-1.8 1.8s.8 1.8 1.8 1.8 1.8-.8 1.8-1.8S18.3 8 17.3 8z" /></Svg>;

export default SvgChatboxEllipses;