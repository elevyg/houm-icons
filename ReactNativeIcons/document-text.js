import * as React from "react";
import Svg, { Path } from "react-native-svg";
/* SVGR has dropped some elements not supported by react-native-svg: style */

const SvgDocumentText = props => <Svg id="Capa_1" xmlns="http://www.w3.org/2000/svg" x={0} y={0} viewBox="0 0 24 24" style={{
  enableBackground: "new 0 0 24 24"
}} xmlSpace="preserve" width={24} height={24} {...props}><Path className="st0" d="M20.7 8.5 12.9.7c-.4-.4-1-.7-1.6-.7H5.8C5 0 4.2.3 3.6.9s-1 1.4-1 2.2v17.8c0 .8.3 1.6.9 2.2.7.6 1.5.9 2.3.9h12.4c.8 0 1.6-.3 2.2-.9s.9-1.4.9-2.2V10.1c.1-.6-.1-1.2-.6-1.6zm-1 .4h-5.9c-.3 0-.7-.1-.9-.4s-.4-.6-.4-.9v-6l7.2 7.3zm.7 12c0 .6-.2 1.2-.6 1.5-.4.4-1 .6-1.5.6H5.8c-.6 0-1.2-.2-1.5-.6-.4-.4-.6-1-.6-1.5V3.1c0-.6.2-1.2.6-1.5.4-.4 1-.6 1.5-.6h5.7v6.6c0 .6.2 1.2.7 1.6s1 .7 1.6.7h6.6v11z" /><Path className="st0" d="M16.5 13.3H7.6c-.3 0-.5.2-.5.5s.2.5.5.5h8.9c.3 0 .5-.2.5-.5s-.3-.5-.5-.5zm0 4.4H7.6c-.3 0-.5.2-.5.5s.2.5.5.5h8.9c.3 0 .5-.2.5-.5s-.3-.5-.5-.5z" /></Svg>;

export default SvgDocumentText;