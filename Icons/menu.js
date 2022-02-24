import * as React from "react";
import Svg, { Path } from "react-native-svg";

const SvgMenu = props => <Svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" style={{
  enableBackground: "new 0 0 24 24"
}} xmlSpace="preserve" width={24} height={24} {...props}><Path d="M23.5 6.2H.5C.2 6.2 0 6 0 5.7s.2-.5.5-.5h23c.3 0 .5.2.5.5s-.2.5-.5.5zm0 6.3H.5c-.3 0-.5-.2-.5-.5s.2-.5.5-.5h23c.3 0 .5.2.5.5s-.2.5-.5.5zm0 6.3H.5c-.3 0-.5-.2-.5-.5s.2-.5.5-.5h23c.3 0 .5.2.5.5s-.2.5-.5.5z"/></Svg>;

export default SvgMenu;