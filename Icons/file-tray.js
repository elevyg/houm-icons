import * as React from "react";
import Svg, { Path } from "react-native-svg";

const SvgFileTray = props => <Svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" style={{
  enableBackground: "new 0 0 24 24"
}} xmlSpace="preserve" width={24} height={24} {...props}><Path d="m24 12.8-1.8-8.4c-.3-1.7-1.4-2.6-3.1-2.6H4.9c-1.7 0-2.8 1-3.1 2.6L0 12.8v6.3c0 .8.3 1.6.9 2.2s1.4.9 2.2.9h17.8c.8 0 1.6-.3 2.2-.9.6-.6.9-1.4.9-2.2v-6.3c0 .1 0 0 0 0zM2.7 4.6c.2-1.2 1-1.8 2.2-1.8h14.2c1.2 0 2 .6 2.2 1.8l1.6 7.8h-7.4c-.3 0-.5.2-.5.5 0 .8-.3 1.6-.9 2.2s-1.3.9-2.1.9-1.6-.3-2.2-.9-.9-1.3-.9-2.2c0-.3-.2-.5-.5-.5H1.1l1.6-7.8zm19.7 16.1c-.4.4-1 .6-1.5.6H3.1c-.6 0-1.2-.2-1.5-.6-.4-.4-.6-1-.6-1.5v-5.8h7c.1.9.5 1.7 1.2 2.4.8.8 1.8 1.2 2.8 1.2s2.1-.4 2.8-1.2c.6-.6 1.1-1.5 1.2-2.4h7v5.7c0 .6-.2 1.1-.6 1.6z" style={{
    fill: "#263238"
  }} /></Svg>;

export default SvgFileTray;