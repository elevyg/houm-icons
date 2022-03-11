import * as React from "react";
import Svg, { Path } from "react-native-svg";
/* SVGR has dropped some elements not supported by react-native-svg: style */

const SvgReader = props => <Svg id="Capa_1" xmlns="http://www.w3.org/2000/svg" x={0} y={0} viewBox="0 0 24 24" style={{
  enableBackground: "new 0 0 24 24"
}} xmlSpace="preserve" width={24} height={24} {...props}><Path className="st0" d="M18.2.1H5.8C4.1.1 2.7 1.5 2.7 3.2v17.7c0 1.7 1.4 3.1 3.1 3.1h12.4c1.7 0 3.1-1.4 3.1-3.1V3.2c0-1.7-1.4-3.1-3.1-3.1zm2.2 20.7c0 1.2-1 2.1-2.1 2.1H5.8c-1.2 0-2.1-1-2.1-2.1V3.2C3.7 2 4.6 1 5.8 1h12.4c1.2 0 2.2 1 2.2 2.1v17.7z" /><Path className="st0" d="M16.5 4.5H7.6c-.3 0-.5.2-.5.5s.2.5.5.5h8.8c.3 0 .5-.2.5-.5s-.2-.5-.4-.5zm0 4.4H7.6c-.3 0-.5.2-.5.5s.2.5.5.5h8.8c.3 0 .5-.2.5-.5s-.2-.5-.4-.5zM12 13.3H7.6c-.3 0-.5.2-.5.5s.2.5.5.5H12c.3 0 .5-.2.5-.5s-.2-.5-.5-.5z" /></Svg>;

export default SvgReader;