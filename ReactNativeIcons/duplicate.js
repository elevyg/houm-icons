import * as React from "react";
import Svg, { Path } from "react-native-svg";
/* SVGR has dropped some elements not supported by react-native-svg: style */

const SvgDuplicate = props => <Svg id="Capa_1" xmlns="http://www.w3.org/2000/svg" x={0} y={0} viewBox="0 0 24 24" style={{
  enableBackground: "new 0 0 24 24"
}} xmlSpace="preserve" width={24} height={24} {...props}><Path className="st0" d="M20.4 4.4h-.8v-.9c0-1-.4-1.8-1.1-2.5s-1.6-1-2.6-1H4C2.9 0 1.9.4 1.1 1.1.4 1.9 0 2.9-.1 4v12c0 1 .4 1.8 1.1 2.5s1.6 1.1 2.5 1.1h.9v.8C4.4 22.4 6 24 8 24h12.3c2 0 3.6-1.6 3.6-3.6V8.1c.1-2.1-1.5-3.7-3.5-3.7zM3.6 18.6c-.7 0-1.4-.3-1.8-.8S1 16.7 1 16V4c0-.8.3-1.6.9-2.2S3.2.9 4.1.9h12c.7 0 1.4.3 1.8.8s.8 1.2.8 1.8v.9H8.1C6.1 4.4 4.5 6 4.5 8v10.6h-.9zm19.5 1.7c0 1.5-1.2 2.7-2.8 2.7H8.1c-1.5 0-2.7-1.2-2.7-2.7V8.1c0-1.5 1.2-2.7 2.7-2.7h12.3c1.5 0 2.7 1.2 2.7 2.7v12.2z" /><Path className="st0" d="M18.7 13.7h-4v-4c0-.3-.2-.5-.5-.5s-.5.2-.5.5v4h-4c-.3 0-.5.2-.5.5s.2.5.5.5h4v4c0 .3.2.5.5.5s.5-.2.5-.5v-4h4c.3 0 .5-.2.5-.5s-.3-.5-.5-.5z" /></Svg>;

export default SvgDuplicate;