import * as React from "react";
import Svg, { Path } from "react-native-svg";
/* SVGR has dropped some elements not supported by react-native-svg: style */

const SvgAlertCircle = props => <Svg id="Capa_1" xmlns="http://www.w3.org/2000/svg" x={0} y={0} viewBox="0 0 24 24" style={{
  enableBackground: "new 0 0 24 24"
}} xmlSpace="preserve" width={24} height={24} {...props}><Path className="st0" d="M12 0C5.4 0 0 5.4 0 12s5.4 12 12 12 12-5.4 12-12S18.6 0 12 0zm0 23C5.9 23 1 18.1 1 12S5.9 1 12 1s11 4.9 11 11-4.9 11-11 11z" /><Path className="st0" d="M12 14.4c.2 0 .5-.2.5-.5l.3-7.3v-.3c0-.1-.1-.2-.2-.3-.1-.1-.2-.1-.3-.2s-.2 0-.3 0h-.3c-.1 0-.2.1-.3.2s-.1.2-.2.3 0 .2 0 .3l.3 7.3c0 .3.3.5.5.5zm.5 2c-.2-.1-.5-.1-.7 0-.2 0-.4.1-.6.3-.1.1-.3.4-.3.6v.7c.1.2.2.4.4.5.2.1.4.2.7.2.3 0 .6-.1.9-.3.2-.2.3-.5.3-.9 0-.2 0-.5-.2-.7-.1-.1-.3-.3-.5-.4z" /></Svg>;

export default SvgAlertCircle;