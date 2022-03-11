import * as React from "react";
import Svg, { Path } from "react-native-svg";
/* SVGR has dropped some elements not supported by react-native-svg: style */

const SvgEye = props => <Svg id="Capa_1" xmlns="http://www.w3.org/2000/svg" x={0} y={0} viewBox="0 0 24 24" style={{
  enableBackground: "new 0 0 24 24"
}} xmlSpace="preserve" width={24} height={24} {...props}><Path className="st0" d="M23.8 11.3C20.9 6.8 16.5 4.1 12 4.1 7.6 4.1 3.5 6.6.2 11.3c-.1.2-.2.5-.2.7s0 .5.2.7c2.9 4.5 7.3 7.2 11.8 7.2 4.5 0 9-2.7 11.8-7.2.1-.2.2-.5.2-.7 0-.2 0-.5-.2-.7zm-.8.9c-2.7 4.2-6.8 6.7-11 6.7s-8.3-2.5-11-6.7v-.4c3.1-4.4 6.9-6.7 11-6.7 4.2 0 8.3 2.5 11 6.7v.2c0 .1.1.1 0 .2z" /><Path className="st0" d="M12 7.4c-2.5 0-4.6 2.1-4.6 4.6s2.1 4.6 4.6 4.6 4.6-2.1 4.6-4.6-2-4.6-4.6-4.6zm0 8.2c-2 0-3.6-1.6-3.6-3.6S10 8.4 12 8.4s3.6 1.6 3.6 3.6-1.6 3.6-3.6 3.6z" /></Svg>;

export default SvgEye;