import * as React from "react";
import Svg, { Path } from "react-native-svg";
/* SVGR has dropped some elements not supported by react-native-svg: style */

const SvgMic = props => <Svg id="Capa_1" xmlns="http://www.w3.org/2000/svg" x={0} y={0} viewBox="0 0 24 24" style={{
  enableBackground: "new 0 0 24 24"
}} xmlSpace="preserve" width={24} height={24} {...props}><Path className="st0" d="M19.7 8.7c-.3 0-.5.2-.5.5v1.9c0 4-3.2 7.2-7.2 7.2s-7.2-3.2-7.2-7.2v-2c0-.3-.2-.5-.5-.5s-.4.3-.4.5V11c0 4.3 3.4 7.9 7.6 8.1V23H8.2c-.3 0-.5.2-.5.5s.2.5.5.5h7.6c.3 0 .5-.2.5-.5s-.2-.5-.5-.5h-3.4v-3.9c4.3-.2 7.6-3.8 7.6-8.1V9.1c.1-.2-.1-.4-.3-.4z" /><Path className="st0" d="M12 15.3c2.4 0 4.3-2 4.3-4.4V4.4C16.3 2 14.4.1 12 .1c-.6 0-1.1.1-1.6.3s-1 .5-1.4.9-.7.9-1 1.4-.3 1.1-.3 1.7V11c0 2.4 2 4.3 4.3 4.3zM8.6 4.4c0-.4.1-.9.2-1.3.3-.4.5-.8.8-1.1.3-.3.7-.6 1.1-.7.4-.2.9-.3 1.3-.3 1.9 0 3.4 1.5 3.4 3.4V11c0 1.9-1.5 3.4-3.4 3.4-1.8 0-3.4-1.5-3.4-3.4V4.4z" /></Svg>;

export default SvgMic;