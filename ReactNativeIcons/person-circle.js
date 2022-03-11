import * as React from "react";
import Svg, { Path } from "react-native-svg";
/* SVGR has dropped some elements not supported by react-native-svg: style */

const SvgPersonCircle = props => <Svg id="Capa_1" xmlns="http://www.w3.org/2000/svg" x={0} y={0} viewBox="0 0 24 24" style={{
  enableBackground: "new 0 0 24 24"
}} xmlSpace="preserve" width={24} height={24} {...props}><Path className="st0" d="M12.1.1C5.4 0 0 5.4.1 12.1c.1 6.4 5.3 11.7 11.8 11.8 6.7.1 12.1-5.3 12-12C23.8 5.4 18.6.2 12.1.1zm7.3 18.8H19c-.5-.7-1.1-1.2-1.8-1.7-1.4-.9-3.3-1.4-5.2-1.4s-3.7.5-5.2 1.4c-.7.4-1.3 1-1.8 1.7h-.4c-1.7-1.8-2.6-4.2-2.7-6.7C1.8 6.6 6.4 1.9 12 1.9S22.1 6.4 22.1 12c0 2.5-.9 5-2.7 6.9z" /><Path className="st0" d="M12 5.6c-1.1 0-2.1.4-2.9 1.2-.7.7-1.1 1.8-1 3 .2 2.2 1.9 4 3.9 4s3.7-1.8 3.9-4.1c.1-1.1-.3-2.2-1-3-.8-.7-1.8-1.1-2.9-1.1z" /></Svg>;

export default SvgPersonCircle;