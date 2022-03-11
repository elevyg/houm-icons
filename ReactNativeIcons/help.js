import * as React from "react";
import Svg, { Path, Circle } from "react-native-svg";
/* SVGR has dropped some elements not supported by react-native-svg: style */

const SvgHelp = props => <Svg id="Capa_1" xmlns="http://www.w3.org/2000/svg" x={0} y={0} viewBox="0 0 24 24" style={{
  enableBackground: "new 0 0 24 24"
}} xmlSpace="preserve" width={24} height={24} {...props}><Path className="st0" d="M15.2.7c-.8-.4-2-.6-3.2-.6-1.8 0-3.3.5-4.5 1.5-2.2 1.9-2.4 4.2-2.4 4.3 0 .2.2.5.5.5s.5-.2.5-.4c0-.1.1-2 2.1-3.6 1-.8 2.3-1.2 3.9-1.3 1.1 0 2.2.2 2.8.5 2 1 3.1 2.5 3.1 4.4 0 2.8-1.9 4.1-3.9 5.6-2.1 1.4-3 3-3 5.1 0 .3.2.5.5.5s.5-.2.5-.5c0-1.3.3-2.8 2.6-4.3 2.1-1.5 4.4-3 4.4-6.4-.2-2.3-1.5-4.1-3.9-5.3z" /><Circle className="st0" cx={11.5} cy={21.7} r={2.1} /></Svg>;

export default SvgHelp;