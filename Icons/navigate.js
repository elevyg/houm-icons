import * as React from "react";
import Svg, { Path } from "react-native-svg";

const SvgNavigate = props => <Svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" style={{
  enableBackground: "new 0 0 24 24"
}} xmlSpace="preserve" width={24} height={24} {...props}><Path d="M13 22.8c-.1 0-.1 0 0 0-.3 0-.5-.2-.5-.5V11.6H.5c-.2 0-.4-.1-.5-.4 0-.2.1-.4.3-.5l23.1-9.5c.2-.1.4 0 .5.1s.1.4.1.5L13.4 22.6c-.1.1-.3.2-.4.2zM2.9 10.7h9.7c.2 0 .5.1.7.2.2.2.3.4.3.7v8.8l9.1-17.8-19.8 8.1z"  /></Svg>;

export default SvgNavigate;