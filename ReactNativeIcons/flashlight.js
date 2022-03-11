import * as React from "react";
import Svg, { Path } from "react-native-svg";
/* SVGR has dropped some elements not supported by react-native-svg: style */

const SvgFlashlight = props => <Svg id="Capa_1" xmlns="http://www.w3.org/2000/svg" x={0} y={0} viewBox="0 0 24 24" style={{
  enableBackground: "new 0 0 24 24"
}} xmlSpace="preserve" width={24} height={24} {...props}><Path className="st0" d="M23.4 6.5 17.5.6c-.5-.6-1-.7-1.6-.6-.5.1-1 .4-1.4.9l-.7.7C12.3 3.1 12.1 5 12 6.4v.1c0 .6-.5 1.3-.9 1.7L.7 18.6c-.5.5-.7 1.2-.7 1.9s.4 1.3.9 1.8l.7.7c.6.6 1.3 1 2.1 1 .6 0 1.2-.2 1.7-.7l10.5-10.5c.4-.4 1.2-.9 1.7-.9 1.3-.1 3.4-.2 4.9-1.8l.7-.7c.4-.4.7-.8.8-1.3.1-.6-.1-1.2-.6-1.6zM17.5 11c-.9 0-1.8.7-2.3 1.2L4.7 22.6c-.8.8-1.8.4-2.4-.2l-.7-.7c-.3-.4-.6-.8-.6-1.2 0-.4.1-.8.4-1.2L11.9 8.8c.5-.5 1.1-1.4 1.1-2.3v-.1c.1-1 .2-2.3.9-3.4l7 7c-1.1.8-2.5.9-3.4 1zM23 7.9c0 .3-.2.6-.6.9l-.7.7-7.2-7.3.7-.7c.3-.3.6-.5.9-.6h.1c.2 0 .4.1.6.3l5.9 5.9c.3.3.4.5.3.8z" /><Path className="st0" d="M10.3 12.6c-.6 0-1.1.5-1.1 1.1s.5 1.1 1.1 1.1 1.1-.5 1.1-1.1c0-.6-.5-1.1-1.1-1.1z" /></Svg>;

export default SvgFlashlight;