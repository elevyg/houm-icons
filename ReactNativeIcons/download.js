import * as React from "react";
import Svg, { Path } from "react-native-svg";
/* SVGR has dropped some elements not supported by react-native-svg: style */

const SvgDownload = props => <Svg id="Capa_1" xmlns="http://www.w3.org/2000/svg" x={0} y={0} viewBox="0 0 24 24" style={{
  enableBackground: "new 0 0 24 24"
}} xmlSpace="preserve" width={24} height={24} {...props}><Path className="st0" d="M20.5 7.9c-.5-.5-1.2-.8-1.9-.8h-2.2c-.3 0-.5.2-.5.5s.2.5.5.5h2.2c.5 0 .9.2 1.2.5.3.3.5.7.5 1.2v11.4c0 .5-.2.9-.5 1.2-.3.3-.7.5-1.2.5H5.4c-.5 0-.9-.2-1.2-.5-.3-.3-.5-.8-.5-1.2V9.8c0-.5.2-.9.5-1.2.3-.4.8-.5 1.2-.5h2.2c.3 0 .5-.2.5-.5s-.2-.5-.5-.5H5.4c-.7 0-1.4.3-1.9.8s-.7 1.2-.7 1.9v11.4a2.732 2.732 0 0 0 2.7 2.7h13.1a2.732 2.732 0 0 0 2.7-2.7V9.8c-.1-.7-.3-1.4-.8-1.9z" /><Path className="st0" d="M8 12.5c-.2-.2-.5-.2-.6 0s-.2.5 0 .6l4.4 4.4c.1.1.2.1.3.1s.2 0 .3-.1l4.4-4.4c.2-.2.2-.5 0-.6-.2-.2-.5-.2-.6 0l-3.6 3.6V.6c0-.3-.2-.5-.5-.5s-.5.2-.5.5v15.5L8 12.5z" /></Svg>;

export default SvgDownload;