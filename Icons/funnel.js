import * as React from "react";
import Svg, { Path } from "react-native-svg";

const SvgFunnel = props => <Svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" style={{
  enableBackground: "new 0 0 24 24"
}} xmlSpace="preserve" width={24} height={24} {...props}><Path d="M14.1 22.1h-.3l-4.1-1.3c-.2 0-.3-.2-.4-.3-.2-.3-.3-.5-.3-.7v-5.9s0-.1-.1-.2L.3 3.9 0 3.3c-.1-.2 0-.4.1-.7.1-.2.2-.4.4-.5.3-.1.5-.2.7-.2h21.6c.2 0 .4 0 .6.2.2.1.3.3.4.5.2.2.2.4.2.7 0 .2-.1.4-.3.6L15 13.7s-.1.1-.1.2v7.3c0 .1 0 .3-.1.4 0 .1-.1.2-.3.3 0 .1-.2.1-.4.2.1 0 0 0 0 0zm-4-2.3 4 1.2v-7.2c0-.3.1-.6.3-.9L23 3.2V3l-.1-.1H1.1C1 2.9 1 3 1 3v.2L9.7 13c.2.2.3.5.3.8.1.1.1 6 .1 6zm0 .1z" style={{
    fill: "#263238"
  }} /></Svg>;

export default SvgFunnel;