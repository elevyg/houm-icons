import * as React from "react";
import Svg, { Path, Circle } from "react-native-svg";
/* SVGR has dropped some elements not supported by react-native-svg: style */

const SvgListCircle = props => <Svg id="Capa_1" xmlns="http://www.w3.org/2000/svg" x={0} y={0} viewBox="0 0 24 24" style={{
  enableBackground: "new 0 0 24 24"
}} xmlSpace="preserve" width={24} height={24} {...props}><Path className="st0" d="M17.8 8h-7.7c-.3 0-.5-.2-.5-.5s.2-.5.5-.5h7.7c.3 0 .5.2.5.5s-.3.5-.5.5zm0 4.3h-7.7c-.3 0-.5-.2-.5-.5s.2-.5.5-.5h7.7c.3 0 .5.2.5.5s-.3.5-.5.5zm0 4.3h-7.7c-.3 0-.5-.2-.5-.5s.2-.5.5-.5h7.7c.3 0 .5.2.5.5-.1.3-.3.5-.5.5z" /><Path className="st0" d="M12 24C5.4 24 0 18.6 0 12S5.4 0 12 0s12 5.4 12 12-5.4 12-12 12zm0-23C5.9 1 1 5.9 1 12s4.9 11 11 11 11-4.9 11-11S18.1 1 12 1z" /><Circle className="st0" cx={6.7} cy={7.5} r={1} /><Circle className="st0" cx={6.7} cy={12} r={1} /><Circle className="st0" cx={6.7} cy={16.2} r={1} /></Svg>;

export default SvgListCircle;