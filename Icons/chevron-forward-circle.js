import * as React from "react";
import Svg, { Path } from "react-native-svg";

const SvgChevronForwardCircle = props => <Svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" style={{
  enableBackground: "new 0 0 24 24"
}} xmlSpace="preserve" width={24} height={24} {...props}><Path d="M12 24C5.4 24 0 18.6 0 12S5.4 0 12 0s12 5.4 12 12-5.4 12-12 12zM12 .9C5.9.9.9 5.9.9 12s5 11.1 11.1 11.1 11.1-5 11.1-11.1S18.1.9 12 .9z" style={{
    fill: "#263238"
  }} /><Path d="M9.6 18.2c-.1 0-.2 0-.3-.1-.2-.2-.2-.5 0-.6l5.4-5.4-5.4-5.5c-.2-.2-.2-.5 0-.6s.5-.2.6 0l5.8 5.8c.1.1.1.2.1.3 0 .1 0 .2-.1.3l-5.8 5.8h-.3z" style={{
    fill: "#263238"
  }} /></Svg>;

export default SvgChevronForwardCircle;