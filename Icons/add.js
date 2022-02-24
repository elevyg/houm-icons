import * as React from "react";
import Svg, { Path } from "react-native-svg";

const SvgAdd = props => <Svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" style={{
  enableBackground: "new 0 0 24 24"
}} xmlSpace="preserve" width={24} height={24} {...props}><Path d="M23.5 11.5h-11V.5c0-.3-.2-.5-.5-.5s-.5.2-.5.5v11.1H.5c-.3-.1-.5.1-.5.4s.2.5.5.5h11.1v11.1c0 .3.2.5.5.5s.5-.2.5-.5V12.5h11.1c.3 0 .5-.2.5-.5s-.4-.5-.7-.5z"/></Svg>;

export default SvgAdd;