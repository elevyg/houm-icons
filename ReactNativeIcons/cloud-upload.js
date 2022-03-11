import * as React from "react";
import Svg, { Path } from "react-native-svg";
/* SVGR has dropped some elements not supported by react-native-svg: style */

const SvgCloudUpload = props => <Svg id="Capa_1" xmlns="http://www.w3.org/2000/svg" x={0} y={0} viewBox="0 0 24 24" style={{
  enableBackground: "new 0 0 24 24"
}} xmlSpace="preserve" width={24} height={24} {...props}><Path className="st0" d="M19.3 8.9C18.8 5 15.8 2.3 12 2.3c-3.4 0-5.6 2.2-6.5 4.4C1.7 7.2 0 9.8 0 12.3c0 3.2 2.7 5.5 6.2 5.5h2.7c.3 0 .5-.2.5-.5s-.2-.5-.5-.5H6.2c-3 0-5.3-2-5.3-4.7 0-2.9 2.5-4.4 5-4.7.2 0 .3-.1.4-.3A6 6 0 0 1 12 3.2c3.5 0 6.1 2.5 6.5 6.2 0 .2.2.4.4.4 1.7.1 4.2 1.1 4.2 3.6 0 2.6-2.4 3.6-4.3 3.6h-3.6c-.3 0-.5.2-.5.5s.2.5.5.5h3.6c3.1 0 5.3-1.8 5.3-4.5-.1-2.7-2.5-4.3-4.8-4.6z" /><Path className="st0" d="M14.8 12.3c.1.1.2.1.3.1s.2 0 .3-.1c.2-.2.2-.5 0-.6l-3.1-3.1c-.2-.2-.5-.2-.6 0l-3.1 3.1c-.2.2-.2.5 0 .6s.5.2.6 0l2.3-2.3v11.2c0 .3.2.5.5.5s.5-.2.5-.5V10l2.3 2.3z" /></Svg>;

export default SvgCloudUpload;