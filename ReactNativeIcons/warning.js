import * as React from "react";
import Svg, { Path } from "react-native-svg";
/* SVGR has dropped some elements not supported by react-native-svg: style */

const SvgWarning = props => <Svg id="Capa_1" xmlns="http://www.w3.org/2000/svg" x={0} y={0} viewBox="0 0 24 24" style={{
  enableBackground: "new 0 0 24 24"
}} xmlSpace="preserve" width={24} height={24} {...props}><Path className="st0" d="M23.7 19.9 14 1.9c-.4-.8-1.2-1.2-2-1.2-.9 0-1.6.4-2 1.2l-9.7 18c-.2.3-.3.8-.3 1.1 0 .4.1.8.3 1.2.2.3.5.6.8.8s.7.3 1.2.3h19.4c.4 0 .8-.1 1.2-.3.3-.2.6-.5.8-.8s.3-.7.3-1.2c0-.4-.1-.8-.3-1.1zm-.9 1.8c-.1.2-.3.4-.5.5-.2.1-.4.2-.7.2H2.3c-.2 0-.5 0-.7-.2-.2-.1-.4-.3-.5-.5 0-.2-.1-.5-.1-.7s0-.5.1-.7l9.7-18c.2-.4.7-.7 1.2-.7s1 .2 1.2.7l9.7 18c.1.2.1.5.1.7 0 .2 0 .5-.2.7z" /><Path className="st0" d="M11.5 15.5c0 .2.2.5.5.5s.5-.2.5-.5l.3-7v-.3c0-.1-.1-.2-.2-.3-.1-.1-.1-.1-.3-.2h-.6c-.1 0-.2.1-.2.2-.1.1-.1.2-.2.3s0 .2 0 .3l.2 7zm.9 2.3c-.2-.1-.4-.1-.7 0-.2 0-.4.1-.6.3-.1.1-.3.4-.3.6v.7c0 .2.2.4.4.5s.6.1.8.1c.3 0 .6-.1.8-.3.2-.2.3-.5.3-.8 0-.2 0-.4-.2-.6-.1-.2-.3-.4-.5-.5z" /></Svg>;

export default SvgWarning;