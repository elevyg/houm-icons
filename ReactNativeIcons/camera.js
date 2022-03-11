import * as React from "react";
import Svg, { Path } from "react-native-svg";
/* SVGR has dropped some elements not supported by react-native-svg: style */

const SvgCamera = props => <Svg id="Capa_1" xmlns="http://www.w3.org/2000/svg" x={0} y={0} viewBox="0 0 24 24" style={{
  enableBackground: "new 0 0 24 24"
}} xmlSpace="preserve" width={24} height={24} {...props}><Path className="st0" d="M23.2 6.9c-.4-.4-1-.7-1.6-.7h-3.2c-.3 0-.6-.1-.9-.4l-1.4-2.3c-.4-.5-1-.8-1.6-.8h-5c-.6 0-1.2.3-1.6.8L6.4 5.8c-.2.3-.5.4-.8.4h-.4v-.8c0-.3-.2-.5-.5-.5H3.4c-.2 0-.4.2-.4.5v.9h-.7c-.6 0-1.1.2-1.6.7-.4.4-.7 1-.7 1.6V19c0 .6.2 1.1.7 1.6.4.4 1 .7 1.6.7h19.3c.6 0 1.1-.2 1.6-.7s.7-1 .7-1.6V8.5c0-.6-.3-1.2-.7-1.6zm-19.3-1h.4v.4h-.4v-.4zm19 13.1c0 .3-.1.7-.3.9-.2.2-.6.4-.9.4H2.3c-.3 0-.7-.1-.9-.4-.2-.2-.4-.5-.4-.9V8.5c0-.3.1-.7.4-.9s.6-.4.9-.4h3.3c.6 0 1.1-.3 1.5-.8l1.4-2.3c.2-.2.5-.4.8-.4h5c.3 0 .6.1.8.4l1.4 2.3c.4.5 1 .8 1.6.8h3.2c.3 0 .7.1.9.4s.4.6.4.9V19h.3z" /><Path className="st0" d="M12 8c-2.7 0-4.9 2.2-4.9 4.9s2.2 4.9 4.9 4.9 4.9-2.2 4.9-4.9S14.7 8 12 8zm0 8.8c-2.1 0-3.9-1.8-3.9-3.9S9.9 9 12 9s3.9 1.8 3.9 3.9-1.8 3.9-3.9 3.9z" /></Svg>;

export default SvgCamera;