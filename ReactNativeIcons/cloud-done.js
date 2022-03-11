import * as React from "react";
import Svg, { Path } from "react-native-svg";
/* SVGR has dropped some elements not supported by react-native-svg: style */

const SvgCloudDone = props => <Svg id="Capa_1" xmlns="http://www.w3.org/2000/svg" x={0} y={0} viewBox="0 0 24 24" style={{
  enableBackground: "new 0 0 24 24"
}} xmlSpace="preserve" width={24} height={24} {...props}><Path className="st0" d="M18.7 20.2H6.2c-3.5 0-6.2-2.5-6.2-5.8C0 11.2 2.1 9 5.5 8.5c.9-2.4 3.1-4.7 6.5-4.7 3.8 0 6.8 2.8 7.3 7 2.3.3 4.7 1.8 4.7 4.7 0 2.9-2 4.7-5.3 4.7zM12 4.8c-3.3 0-5.1 2.3-5.7 4.3 0 .2-.2.3-.4.3-2.4.2-4.9 1.7-4.9 4.9 0 2.8 2.3 4.9 5.3 4.9h12.5c2.7 0 4.3-1.4 4.3-3.8 0-2.8-2.6-3.7-4.2-3.8-.2 0-.4-.2-.4-.4-.4-3.8-3-6.4-6.5-6.4z" /><Path className="st0" d="M9.8 16.3c-.1 0-.3 0-.3-.1l-2.2-2.5c-.2-.2-.1-.5 0-.7.2-.2.5-.1.7 0l1.9 2.1 4.8-5.8c.2-.2.5-.2.7 0s.2.5 0 .7l-5.2 6.2c-.2 0-.3.1-.4.1z" /></Svg>;

export default SvgCloudDone;