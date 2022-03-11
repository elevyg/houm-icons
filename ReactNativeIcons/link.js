import * as React from "react";
import Svg, { Path } from "react-native-svg";
/* SVGR has dropped some elements not supported by react-native-svg: style */

const SvgLink = props => <Svg id="Capa_1" xmlns="http://www.w3.org/2000/svg" x={0} y={0} viewBox="0 0 24 24" style={{
  enableBackground: "new 0 0 24 24"
}} xmlSpace="preserve" width={24} height={24} {...props}><Path className="st0" d="M9.4 17.7H5.9c-1.5 0-3-.6-4.1-1.7S.2 13.5.2 12s.6-3 1.7-4.1S4.4 6.2 6 6.2h3.5c.3 0 .5.2.5.5s-.3.5-.6.5H5.9c-1.3 0-2.5.5-3.4 1.4-.9.9-1.4 2.1-1.4 3.4s.5 2.5 1.4 3.4c.9.9 2.1 1.4 3.4 1.4h3.5c.3 0 .5.2.5.5s-.2.4-.5.4zm8.7 0h-3.5c-.3 0-.5-.2-.5-.5s.2-.5.5-.5h3.5c1.3 0 2.5-.5 3.4-1.4s1.4-2.1 1.4-3.4-.5-2.5-1.4-3.4c-.9-.9-2.1-1.4-3.4-1.4h-3.5c-.3 0-.5-.2-.5-.5s.2-.5.5-.5h3.5c1.5 0 3 .6 4.1 1.7 1.1 1.1 1.7 2.5 1.7 4.1s-.6 3-1.7 4.1c-1.1 1.2-2.6 1.7-4.1 1.7z" /><Path className="st0" d="M17.2 12.5H6.9c-.3 0-.5-.2-.5-.5s.2-.5.5-.5h10.3c.3 0 .5.2.5.5s-.3.5-.5.5z" /></Svg>;

export default SvgLink;