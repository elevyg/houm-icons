import * as React from "react";
import Svg, { Path } from "react-native-svg";

const SvgFlask = props => <Svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" style={{
  enableBackground: "new 0 0 24 24"
}} xmlSpace="preserve" width={24} height={24} {...props}><Path d="M22.5 18.2 15.6 7.3c-.3-.5-.5-1.1-.5-1.6V1h1.3c.3 0 .5-.2.5-.5s-.2-.5-.5-.5H7.6c-.3 0-.5.2-.5.5s.2.5.5.5h1.3v4.7c0 .6-.1 1.2-.5 1.6L1.5 18.2c-.7 1.2-.8 2.6-.1 3.8s1.9 1.9 3.3 1.9h14.7c1.4 0 2.6-.7 3.3-1.9.6-1.2.5-2.6-.2-3.8zM9.2 7.8c.4-.6.6-1.4.6-2.2V1h4.3v4.7c0 .8.2 1.5.6 2.2l4 6.3H5.2l4-6.4zm12.6 13.8c-.5.9-1.4 1.4-2.4 1.4H4.7c-1 0-1.9-.5-2.4-1.4s-.5-2 .1-2.8l2.3-3.6h14.8l2.3 3.6c.4.8.4 1.9 0 2.8z" style={{
    fill: "#263238"
  }} /></Svg>;

export default SvgFlask;