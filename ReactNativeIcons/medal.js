import * as React from "react";
import Svg, { Path } from "react-native-svg";
/* SVGR has dropped some elements not supported by react-native-svg: style */

const SvgMedal = props => <Svg id="Capa_1" xmlns="http://www.w3.org/2000/svg" x={0} y={0} viewBox="0 0 24 24" style={{
  enableBackground: "new 0 0 24 24"
}} xmlSpace="preserve" width={24} height={24} {...props}><Path className="st0" d="M12 14c-1.6 0-3 1.3-3 3s1.3 3 3 3 3-1.3 3-3-1.3-3-3-3zm0 5.1c-1.1 0-2.1-.9-2.1-2.1 0-1.2.9-2.1 2.1-2.1s2.1.9 2.1 2.1c0 1.2-1 2.1-2.1 2.1z" /><Path className="st0" d="M24 6.1c0-.4 0-.8-.2-1.1l-1.6-3.3c-.2-.3-.4-.7-.8-.9-.3-.2-.7-.3-1.1-.3H3.8c-.4.1-.8.2-1.2.4s-.6.5-.7.9L.2 5c-.1.4-.2.7-.2 1.1 0 .4.1.7.3 1.1l5.5 8.5c-.1.4-.1.9-.1 1.4 0 3.5 2.8 6.4 6.4 6.4 3.5 0 6.4-2.8 6.4-6.4 0-.5 0-1-.1-1.4l5.4-8.5c.1-.4.2-.7.2-1.1zM2.7 2.2c.1-.2.3-.4.5-.5.2-.1.4-.2.6-.2h16.5l-2.5 4.1H1v-.1l1.7-3.3zm9.3 8.4c-.8 0-1.6.1-2.4.5L6.8 6.6h10.4l-2.8 4.6c-.8-.4-1.6-.6-2.4-.6zm-10.8-4h4.5l3.1 4.9c-1.2.7-2.1 1.7-2.6 2.9l-5-7.8zM12 22.4c-3 0-5.4-2.4-5.4-5.4S9 11.6 12 11.6s5.4 2.4 5.4 5.4-2.4 5.4-5.4 5.4zM22.8 6.6l-5 7.8c-.5-1.2-1.4-2.3-2.6-2.9l6-9.5.1.1 1.6 3.3c.1.2.1.4.1.7 0 .2-.1.4-.2.5z" /></Svg>;

export default SvgMedal;