import * as React from "react";
import Svg, { Path } from "react-native-svg";
/* SVGR has dropped some elements not supported by react-native-svg: style */

const SvgTimer = props => <Svg id="Capa_1" xmlns="http://www.w3.org/2000/svg" x={0} y={0} viewBox="0 0 24 24" style={{
  enableBackground: "new 0 0 24 24"
}} xmlSpace="preserve" width={24} height={24} {...props}><Path className="st0" d="M12 24c-3.3 0-6.3-1.3-8.5-3.6S0 15.1 0 11.9C0 9 1.1 6.2 3.1 4c.2-.2.5-.2.7 0 .2.1.2.4 0 .6C2 6.6 1 9.2 1 11.9c0 2.9 1.1 5.7 3.2 7.9C6.3 21.8 9 23 12 23c2.9 0 5.7-1.2 7.8-3.2 2.1-2.1 3.3-4.8 3.3-7.8 0-5.9-4.7-10.8-10.6-11v4.8c0 .3-.2.5-.5.5s-.5-.2-.5-.5V.5c0-.1.1-.2.1-.2.2-.2.3-.3.4-.3h.3C18.7.1 24 5.5 24 12c0 3.2-1.2 6.2-3.5 8.5-2.2 2.3-5.3 3.5-8.5 3.5zm.3-23z" /><Path className="st0" d="M10.7 13.3 5.9 6.6c0-.1-.1-.2-.1-.3 0-.2.1-.3.2-.3.1-.1.2-.1.3-.1s.2 0 .3.1l6.8 4.8c.4.3.7.8.8 1.2.1.5 0 1-.3 1.4-.3.4-.7.7-1.2.8-.5.1-1 0-1.4-.3-.3-.2-.5-.4-.6-.6z" /></Svg>;

export default SvgTimer;