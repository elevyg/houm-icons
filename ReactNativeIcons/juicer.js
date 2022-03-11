import * as React from "react";
import Svg, { Path } from "react-native-svg";
/* SVGR has dropped some elements not supported by react-native-svg: style */

const SvgJuicer = props => <Svg id="Capa_1" xmlns="http://www.w3.org/2000/svg" x={0} y={0} viewBox="0 0 24 24" style={{
  enableBackground: "new 0 0 24 24"
}} xmlSpace="preserve" width={24} height={24} {...props}><Path className="st0" d="M19.4 3.5H18v-1c0-.3-.2-.5-.5-.5h-3.9V.6c0-.3-.2-.5-.5-.5h-2.4c-.3 0-.5.2-.5.5V2H4.6c-.2 0-.5.2-.5.5 0 1 .4 2.9 2.2 3.3v10.7c0 .1 0 .3.1.3l1.8 1.6-1.6 1c-.2.1-.2.3-.2.5l.8 3.5c0 .2.2.4.5.4h8.4c.2 0 .4-.1.5-.4l.8-3.5c0-.2 0-.4-.2-.5l-1.2-.8 1.8-1.6c.1-.1.1-.2.1-.3V4.5h.9v10.8c0 .3.2.5.5.5s.5-.2.5-.5V4c0-.2-.2-.5-.4-.5zm-8.2-2.4h1.5v1h-1.5v-1zM5.2 3h1.2v1.8C5.5 4.5 5.3 3.6 5.2 3zm10.6 19.9H8.2L7.5 20l1.7-1h5.7l1.5 1.1-.6 2.8zm1.2-6.5L15.1 18h-6l-1.9-1.7V3H17v13.4z" /><Path className="st0" d="M12 19.9c-.6 0-1.1.5-1.1 1.1 0 .6.5 1.1 1.1 1.1.6 0 1.1-.5 1.1-1.1 0-.6-.5-1.1-1.1-1.1zm0 1.3c-.1 0-.1 0-.1-.1s0-.1.1-.1.1 0 .1.1l-.1.1z" /></Svg>;

export default SvgJuicer;