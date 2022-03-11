import * as React from "react";
import Svg, { Path } from "react-native-svg";
/* SVGR has dropped some elements not supported by react-native-svg: style */

const SvgPower = props => <Svg id="Capa_1" xmlns="http://www.w3.org/2000/svg" x={0} y={0} viewBox="0 0 24 24" style={{
  enableBackground: "new 0 0 24 24"
}} xmlSpace="preserve" width={24} height={24} {...props}><Path className="st0" d="M12 24C5.4 24 0 18.6 0 12c0-1.7.4-3.5 1.1-5.1s1.8-3 3.2-4.1c.2-.2.5-.1.7 0 .2.2.1.5 0 .7-1.4 1.1-2.4 2.4-3 3.8S.9 10.4.9 12c0 6.1 4.9 11 11 11s11-4.9 11-11c0-1.6-.4-3.3-1.1-4.7s-1.7-2.8-3-3.8c-.2-.2-.2-.5 0-.7.2-.2.5-.2.7 0 1.3 1.1 2.5 2.5 3.2 4.1.8 1.6 1.2 3.4 1.2 5.1.1 6.6-5.3 12-11.9 12z" /><Path className="st0" d="M12 12.5c-.3 0-.5-.2-.5-.5V.5c0-.3.2-.5.5-.5s.5.2.5.5V12c0 .3-.2.5-.5.5z" /></Svg>;

export default SvgPower;