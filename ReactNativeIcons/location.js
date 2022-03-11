import * as React from "react";
import Svg, { Path } from "react-native-svg";
/* SVGR has dropped some elements not supported by react-native-svg: style */

const SvgLocation = props => <Svg id="Capa_1" xmlns="http://www.w3.org/2000/svg" x={0} y={0} viewBox="0 0 24 24" style={{
  enableBackground: "new 0 0 24 24"
}} xmlSpace="preserve" width={24} height={24} {...props}><Path className="st0" d="M12 23.9c-.2 0-.4 0-.6-.1-.2-.1-.3-.2-.5-.4-2.2-3-7.3-10.4-7.3-15.2 0-4.4 3.8-8 8.4-8s8.4 3.6 8.4 8c0 4.8-5.1 12.3-7.3 15.2-.1.2-.3.3-.5.4-.2.1-.4.1-.6.1zM12 1C7.9 1 4.6 4.2 4.6 8c0 4.7 5.5 12.4 7.1 14.7l.1.1h.3s.1 0 .1-.1c1.7-2.3 7.1-10 7.1-14.7.1-3.8-3.2-7-7.3-7z" /><Path className="st0" d="M12 11.6c-1.7 0-3.1-1.4-3.1-3.1s1.4-3.1 3.1-3.1 3.1 1.4 3.1 3.1-1.4 3.1-3.1 3.1zm0-5.3c-1.2 0-2.2 1-2.2 2.2s1 2.2 2.2 2.2 2.2-1 2.2-2.2-1-2.2-2.2-2.2z" /></Svg>;

export default SvgLocation;