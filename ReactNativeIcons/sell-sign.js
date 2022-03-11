import * as React from "react";
import Svg, { Path } from "react-native-svg";

const SvgSellSign = props => <Svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" style={{
  enableBackground: "new 0 0 24 24"
}} xmlSpace="preserve" width={24} height={24} {...props}><Path d="M23.5 0H.5C.2 0 0 .2 0 .5v23c0 .3.2.5.5.5s.5-.2.5-.5V1h3.1v1.9H2.9c-.3 0-.5.2-.5.5v14.4c0 .3.2.5.5.5h18.2c.3 0 .5-.2.5-.5V3.4c0-.3-.2-.5-.5-.5h-1.4V1h3.8c.3 0 .5-.2.5-.5s-.2-.5-.5-.5zm-2.9 3.8v13.4H3.4V3.8h17.2zM5 2.9V1h13.7v1.9H5z" /></Svg>;

export default SvgSellSign;