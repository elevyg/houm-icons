import * as React from "react";
import Svg, { Path } from "react-native-svg";
/* SVGR has dropped some elements not supported by react-native-svg: style */

const SvgWater = props => <Svg id="Capa_1" xmlns="http://www.w3.org/2000/svg" x={0} y={0} viewBox="0 0 24 24" style={{
  enableBackground: "new 0 0 24 24"
}} xmlSpace="preserve" width={24} height={24} {...props}><Path className="st0" d="M12.9.5c-.1-.1-.2-.2-.4-.3-.3-.1-.7-.1-.9 0-.1 0-.3.2-.4.3-1.9 2.1-7.7 9.4-7.7 14.9 0 5.2 3.4 8.5 8.5 8.5s8.5-3.4 8.5-8.5c0-5.5-5.8-12.8-7.6-14.9zM12 22.9c-4.7 0-7.6-2.9-7.6-7.6 0-5.1 5.7-12.2 7.4-14.2h.2c.1 0 0 0 0 0 1.8 2 7.4 9.1 7.4 14.2.2 4.7-2.7 7.6-7.4 7.6z" /><Path className="st0" d="M16.9 15.3c-.3 0-.5.2-.5.5 0 .9-.4 1.9-1 2.5-.7.7-1.6 1-2.5 1-.3 0-.5.2-.5.5s.2.5.5.5c1.2 0 2.3-.5 3.2-1.3s1.3-2 1.3-3.2c0-.3-.2-.5-.5-.5z" /></Svg>;

export default SvgWater;