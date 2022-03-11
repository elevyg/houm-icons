import * as React from "react";
import Svg, { Path } from "react-native-svg";
/* SVGR has dropped some elements not supported by react-native-svg: style */

const SvgCheckmarkDoneCircle = props => <Svg id="Capa_1" xmlns="http://www.w3.org/2000/svg" x={0} y={0} viewBox="0 0 24 24" style={{
  enableBackground: "new 0 0 24 24"
}} xmlSpace="preserve" width={24} height={24} {...props}><Path className="st0" d="M12 24C5.4 24 0 18.6 0 12S5.4 0 12 0s12 5.4 12 12-5.4 12-12 12zm0-23C5.9 1 1 5.9 1 12s4.9 11 11 11 11-4.9 11-11S18.1 1 12 1z" /><Path className="st0" d="M12 16.3c-.1 0-.2 0-.3-.1l-2.9-2.9c-.2-.2-.2-.5 0-.7.2-.2.5-.2.7 0l2.5 2.5 6.4-7.3c.2-.2.5-.2.7 0s.2.5 0 .7l-6.7 7.7c-.1.1-.3.1-.4.1zm-3.8 0c-.1 0-.2 0-.3-.1L5 13.3c-.2-.2-.2-.5 0-.7s.5-.2.7 0l2.9 2.9c.2.2.2.5 0 .7-.2.1-.3.1-.4.1z" /><Path className="st0" d="M11.9 12.2c-.1 0-.2 0-.3-.1-.2-.2-.2-.5 0-.7l3.1-3.6c.2-.2.5-.2.7 0 .2.2.2.5 0 .7L12.2 12c-.1.1-.2.2-.3.2z" /></Svg>;

export default SvgCheckmarkDoneCircle;