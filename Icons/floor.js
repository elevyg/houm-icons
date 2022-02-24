import * as React from "react";
import Svg, { Path } from "react-native-svg";

const SvgFloor = props => <Svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" style={{
  enableBackground: "new 0 0 24 24"
}} xmlSpace="preserve" width={24} height={24} {...props}><Path d="M20.8 0H3.2C1.7 0 .5 1.2.5 2.7v18.5c0 1.5 1.2 2.7 2.7 2.7h17.6c1.5 0 2.7-1.2 2.7-2.7V2.7c0-1.5-1.2-2.7-2.7-2.7zm1.7 2.7v4.6H8.6V1h12.1c1.1 0 1.8.8 1.8 1.7zm-7.1 12.7H8.6V8.3h6.8v7.1zM3.2 1h4.5v14.4H1.5V2.7C1.4 1.8 2.2 1 3.2 1zM1.4 21.3v-4.9h14V23H3.2c-1 0-1.8-.8-1.8-1.7zM20.8 23h-4.4V8.3h6.2v13c-.1.9-.8 1.7-1.8 1.7z"/></Svg>;

export default SvgFloor;