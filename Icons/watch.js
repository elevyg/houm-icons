import * as React from "react";
import Svg, { Path } from "react-native-svg";

const SvgWatch = props => <Svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" style={{
  enableBackground: "new 0 0 24 24"
}} xmlSpace="preserve" width={24} height={24} {...props}><Path d="M16.6 4.1V.9c0-.2-.1-.5-.2-.6-.2-.3-.4-.3-.6-.3H8.3c-.2 0-.5.1-.6.2s-.3.4-.3.7v3.3C5.6 4.4 4.1 6 4.1 7.9v8.2c0 1.9 1.4 3.5 3.3 3.8v3.3c0 .2.1.5.2.6.2.1.5.2.7.2h7.4c.2 0 .5-.1.6-.2.2-.2.2-.4.2-.6v-3.3c1.9-.2 3.3-1.8 3.3-3.8V7.8c.1-1.9-1.4-3.5-3.2-3.7zM15.7.9v3.2H8.3V.9h7.4zM8.3 23v-3.2h7.3V23H8.3zm10.6-6.9c0 1.5-1.3 2.8-2.8 2.8H7.9c-1.5 0-2.8-1.3-2.8-2.8V7.8C5 6.3 6.3 5 7.9 5h8.2c1.5 0 2.8 1.3 2.8 2.8v8.3z" style={{
    fill: "#263238"
  }} /></Svg>;

export default SvgWatch;