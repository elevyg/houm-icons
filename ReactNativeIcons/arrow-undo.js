import * as React from "react";
import Svg, { Path } from "react-native-svg";

const SvgArrowUndo = props => <Svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" style={{
  enableBackground: "new 0 0 24 24"
}} xmlSpace="preserve" width={24} height={24} {...props}><Path d="M23.5 22.6c-.1 0-.3 0-.4-.2-2.9-3.7-5.4-5.5-11.6-5.6v5.3c0 .2-.1.4-.3.4-.2.1-.4 0-.5-.1L.1 12.3c-.1-.1-.1-.2-.1-.3s0-.2.1-.3L10.7 1.6c.1-.1.3-.2.5-.1s.3.2.3.4v5.3c8.2.2 12.5 5.3 12.5 14.9 0 .2-.1.4-.3.4-.1.1-.1.1-.2.1zM1.2 12l9.4 9v-4.7c0-.3.2-.5.5-.5 6.3 0 9.2 1.6 12 4.8-.4-8.3-4.4-12.5-12-12.5-.3 0-.5-.2-.5-.5V3l-9.4 9z" /></Svg>;

export default SvgArrowUndo;