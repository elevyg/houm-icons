import * as React from "react";
import Svg, { Path } from "react-native-svg";
/* SVGR has dropped some elements not supported by react-native-svg: style */

const SvgShare = props => <Svg id="Capa_1" xmlns="http://www.w3.org/2000/svg" x={0} y={0} viewBox="0 0 24 24" style={{
  enableBackground: "new 0 0 24 24"
}} xmlSpace="preserve" width={24} height={24} {...props}><Path className="st0" d="M20.5 8.8c-.5-.5-1.2-.8-1.9-.8h-2.2c-.3 0-.5.2-.5.5s.2.5.5.5h2.2c.5 0 .9.2 1.2.5s.5.8.5 1.2v10.6c0 .5-.2.9-.5 1.2-.3.3-.8.5-1.2.5H5.4c-.5 0-.9-.2-1.2-.5-.3-.3-.5-.8-.5-1.2V10.7c0-.5.2-.9.5-1.2s.8-.6 1.2-.6h2.2c.3 0 .5-.2.5-.5 0-.2-.2-.4-.5-.4H5.4c-.7 0-1.4.3-1.9.8s-.7 1.2-.7 1.9v10.6A2.732 2.732 0 0 0 5.5 24h13.2a2.732 2.732 0 0 0 2.7-2.7V10.7c-.2-.7-.4-1.4-.9-1.9z" /><Path className="st0" d="m7.9 5.3 3.6-3.6v13.9c0 .3.2.5.5.5s.5-.2.5-.5V1.7l3.6 3.6c.1.1.2.1.3.1s.2 0 .3-.1c.2-.2.2-.5 0-.6L12.3.3l-.1-.1h-.4s-.1 0-.1.1L7.3 4.6c-.2.2-.2.5 0 .6.2.3.4.3.6.1z" /></Svg>;

export default SvgShare;