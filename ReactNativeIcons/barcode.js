import * as React from "react";
import Svg, { Path } from "react-native-svg";
/* SVGR has dropped some elements not supported by react-native-svg: style */

const SvgBarcode = props => <Svg id="Capa_1" xmlns="http://www.w3.org/2000/svg" x={0} y={0} viewBox="0 0 24 24" style={{
  enableBackground: "new 0 0 24 24"
}} xmlSpace="preserve" width={24} height={24} {...props}><Path className="st0" d="M23.2 3.7c-.4-.4-.9-.6-1.6-.7h-2.1c-.3 0-.5.2-.5.5 0 .2.2.5.5.5h2.1c.3 0 .7.1.9.4.2.2.4.5.4.9v13.6c0 .3-.1.7-.4.9-.3.1-.5.2-.9.2h-2.1c-.3 0-.5.2-.5.5s.2.5.5.5h2.1c.6 0 1.1-.2 1.5-.7s.6-.9.7-1.6V5.2c0-.6-.2-1.1-.6-1.5zM4.5 3H2.3C1.1 3 .2 4 .2 5.2v13.6c0 1.2.9 2.2 2.1 2.2h2.2c.3 0 .5-.2.5-.5s-.3-.5-.5-.5H2.3c-.7 0-1.1-.5-1.1-1.2V5.2C1.1 4.5 1.6 4 2.3 4h2.2c.3 0 .5-.2.5-.5-.1-.3-.3-.5-.5-.5z" /><Path className="st0" d="M19.6 16.3c.3 0 .5-.2.5-.5V8.2c0-.3-.2-.5-.5-.5s-.5.2-.5.5v7.6c0 .3.2.5.5.5zM15.8 5.9c-.3 0-.5.2-.5.5v11.4c0 .3.2.5.5.5s.5-.2.5-.5V6.3c0-.3-.2-.4-.5-.4zm-3.8.9c-.3 0-.5.2-.5.5v9.5c0 .3.2.5.5.5s.5-.2.5-.5V7.3c0-.3-.2-.5-.5-.5zm-3.8-.9c-.2 0-.4.1-.4.4v11.4c0 .3.2.5.5.5s.5-.2.5-.5V6.3c-.1-.3-.3-.4-.6-.4zM4.5 7.7c-.3 0-.5.2-.5.5v7.6c0 .3.2.5.5.5s.5-.2.5-.5V8.2c-.1-.3-.3-.5-.5-.5z" /></Svg>;

export default SvgBarcode;