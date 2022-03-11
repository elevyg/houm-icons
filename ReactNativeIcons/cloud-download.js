import * as React from "react";
import Svg, { Path } from "react-native-svg";
/* SVGR has dropped some elements not supported by react-native-svg: style */

const SvgCloudDownload = props => <Svg id="Capa_1" xmlns="http://www.w3.org/2000/svg" x={0} y={0} viewBox="0 0 24 24" style={{
  enableBackground: "new 0 0 24 24"
}} xmlSpace="preserve" width={24} height={24} {...props}><Path className="st0" d="M19.3 8.1c-.6-3.9-3.6-6.6-7.3-6.6-3.4 0-5.7 2.2-6.5 4.4C2 6.4 0 8.3 0 11.1c0 3 2.6 5.2 6.2 5.2h2.7c.3 0 .5-.2.5-.5s-.2-.5-.5-.5H6.2C3.6 15.3.9 14 .9 11.1.9 7.7 4.4 7 5.8 6.9c.2 0 .3-.1.4-.3.6-1.9 2.5-4 5.7-4 3.5 0 6 2.5 6.4 6.1 0 .2.2.4.4.4 1 0 4.1.4 4.1 3.1 0 2.8-2.7 3.1-4.3 3.1h-3.6c-.3 0-.5.2-.5.5s.2.5.5.5h3.7c3.3 0 5.3-1.5 5.3-4.1.1-2.7-2.3-3.9-4.6-4.1z" /><Path className="st0" d="m14.7 18.5-2.3 2.2V10.5c0-.3-.2-.5-.5-.5s-.5.2-.5.5v10.4l-2.3-2.2c-.2-.2-.5-.2-.7 0s-.2.5 0 .7l3.1 3.1c.1.1.2.1.3.1s.2 0 .3-.1l3.1-3.1c.2-.2.2-.5 0-.7 0-.3-.3-.3-.5-.2z" /></Svg>;

export default SvgCloudDownload;