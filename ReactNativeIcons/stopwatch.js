import * as React from "react";
import Svg, { Path } from "react-native-svg";
/* SVGR has dropped some elements not supported by react-native-svg: style */

const SvgStopwatch = props => <Svg id="Capa_1" xmlns="http://www.w3.org/2000/svg" x={0} y={0} viewBox="0 0 24 24" style={{
  enableBackground: "new 0 0 24 24"
}} xmlSpace="preserve" width={24} height={24} {...props}><Path className="st0" d="M12.5 10.3V5.4c0-.3-.2-.4-.5-.4s-.5.2-.5.5v4.9c-1.1.2-2 1.2-2 2.4 0 1.3 1.1 2.4 2.4 2.4s2.4-1.1 2.4-2.4c.1-1.2-.7-2.2-1.8-2.5zm-.5 3.9c-.8 0-1.5-.7-1.5-1.5s.7-1.5 1.5-1.5 1.5.7 1.5 1.5-.7 1.5-1.5 1.5z" /><Path className="st0" d="M19.9 4.8c-2-2-4.6-3.1-7.4-3.3v-1c0-.3-.2-.5-.5-.5s-.5.2-.5.5v1c-2 0-4 .7-5.8 1.9-.2.2-.6.5-.8.7 0-.1 0-.1-.1-.2l-.7-.7c-.2-.2-.5-.2-.7 0-.2.2-.2.5 0 .7l.7.7.1.1c-1.1 1-2 2.3-2.6 3.8-.9 2-1.1 4.3-.6 6.5.4 2.2 1.5 4.1 3 5.7s3.6 2.6 5.7 3c.7.1 1.5.2 2.2.2 1.5 0 2.9-.3 4.3-.9 2-.9 3.8-2.3 5-4.1 1.2-1.9 1.9-4 1.9-6.2.1-2.9-1.1-5.7-3.2-7.9zm.6 13.6c-1.1 1.7-2.7 3-4.6 3.8-1.9.8-3.9 1-5.9.6-2-.4-3.8-1.4-5.2-2.8S2.4 16.7 2 14.7c-.4-2-.2-4 .5-5.9s2.1-3.5 3.8-4.6C8 3.1 10 2.5 12 2.5c2.7 0 5.3 1 7.2 3s3 4.5 3 7.2c0 2.1-.6 4-1.7 5.7z" /></Svg>;

export default SvgStopwatch;