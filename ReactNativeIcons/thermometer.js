import * as React from "react";
import Svg, { Path } from "react-native-svg";
/* SVGR has dropped some elements not supported by react-native-svg: style */

const SvgThermometer = props => <Svg id="Capa_1" xmlns="http://www.w3.org/2000/svg" x={0} y={0} viewBox="0 0 24 24" style={{
  enableBackground: "new 0 0 24 24"
}} xmlSpace="preserve" width={24} height={24} {...props}><Path className="st0" d="M16.7 16c-.4-.8-1-1.5-1.8-2V3c0-.8-.3-1.5-.9-2.1-.5-.5-1.3-.8-2-.8s-1.5.3-2.1.9c-.7.5-.9 1.2-.9 2v11c-.8.5-1.4 1.2-1.9 2-.4.8-.6 1.8-.6 2.7 0 1.4.7 2.7 1.7 3.7 1 .9 2.3 1.5 3.7 1.5h.1c1.4 0 2.7-.6 3.8-1.6 1-1 1.6-2.3 1.6-3.8-.1-.8-.3-1.7-.7-2.5zm-1.6 5.7c-.8.8-1.9 1.3-3.1 1.3-1.2 0-2.3-.4-3.1-1.2-.8-.8-1.4-1.9-1.4-3 0-.8.1-1.6.5-2.2.3-.7.9-1.3 1.6-1.7l.3-.3c0-.1.1-.3.1-.4V3c0-.5.2-1 .6-1.4s.8-.6 1.3-.6 1 .2 1.4.6c.4.4.6.9.6 1.4v11c0 .1 0 .3.1.4 0 .1.2.2.3.3.6.4 1.1 1 1.5 1.6.3.6.5 1.4.5 2.1.1 1.3-.4 2.5-1.2 3.3z" /><Path className="st0" d="M12.4 16.2V4.7c0-.3-.2-.5-.5-.5s-.5.2-.5.5v11.5c-1.1.2-2 1.2-2 2.4 0 1.4 1.1 2.4 2.4 2.4 1.4 0 2.4-1.1 2.4-2.4.2-1.2-.7-2.2-1.8-2.4z" /></Svg>;

export default SvgThermometer;