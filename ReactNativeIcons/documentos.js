import * as React from "react";
import Svg, { Path } from "react-native-svg";
/* SVGR has dropped some elements not supported by react-native-svg: style */

const SvgDocumentos = props => <Svg id="Capa_1" xmlns="http://www.w3.org/2000/svg" x={0} y={0} viewBox="0 0 24 24" style={{
  enableBackground: "new 0 0 24 24"
}} xmlSpace="preserve" width={24} height={24} {...props}><Path className="st0" d="m21 7.6-7-7c-.3-.3-.9-.6-1.4-.6H7.7C7 0 6.2.3 5.7.8s-.8 1.2-.8 2v15.8c0 .8.3 1.5.8 2s1.2.8 2 .8h11c.8 0 1.5-.3 2-.8s.8-1.2.8-2V9c.1-.5-.1-1-.5-1.4zm-1 .3h-5.2c-.3 0-.6-.1-.8-.3-.2-.2-.3-.5-.3-.8V1.6L20 7.9zm.7 10.8c0 .5-.2 1-.6 1.3-.3.3-.8.6-1.3.6h-11c-.5 0-1-.2-1.3-.6-.3-.3-.6-.8-.6-1.3V2.8c0-.5.2-1 .6-1.3S7.3.9 7.8.9h5.1v5.8c0 .5.2 1.1.6 1.4.4.4.9.6 1.4.6h5.8v10z" /><Path className="st0" d="M17.6 23H5.3c-.2 0-.5 0-.7-.1s-.4-.2-.6-.4c-.2-.2-.3-.4-.4-.6s-.1-.5-.1-.7v-17c0-.3-.2-.5-.5-.5s-.6.1-.6.4v17c0 .4 0 .7.2 1.1.1.3.3.7.6.9.3.3.6.5.9.6s.8.3 1.1.3h12.3c.3 0 .5-.2.5-.5s-.2-.5-.4-.5z" /></Svg>;

export default SvgDocumentos;