import * as React from "react";
import Svg, { Path } from "react-native-svg";
/* SVGR has dropped some elements not supported by react-native-svg: style */

const SvgEllipsisVerticalCircle = props => <Svg id="Capa_1" xmlns="http://www.w3.org/2000/svg" x={0} y={0} viewBox="0 0 24 24" style={{
  enableBackground: "new 0 0 24 24"
}} xmlSpace="preserve" width={24} height={24} {...props}><Path className="st0" d="M12 13.6c.9 0 1.5-.7 1.5-1.5 0-.9-.7-1.5-1.5-1.5-.9 0-1.5.7-1.5 1.5s.6 1.5 1.5 1.5zm0 5.4c.9 0 1.5-.7 1.5-1.5S12.8 16 12 16c-.9 0-1.5.7-1.5 1.5S11.1 19 12 19zm0-10.8c.9 0 1.5-.7 1.5-1.5S12.9 5 12 5s-1.5.7-1.5 1.5.6 1.7 1.5 1.7z" /><Path className="st0" d="M12 24C5.4 24 0 18.6 0 12S5.4 0 12 0s12 5.4 12 12-5.4 12-12 12zm0-23C5.9 1 1 5.9 1 12s4.9 11 11 11 11-4.9 11-11S18.1 1 12 1z" /></Svg>;

export default SvgEllipsisVerticalCircle;