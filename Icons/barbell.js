import * as React from "react";
import Svg, { Path } from "react-native-svg";

const SvgBarbell = props => <Svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" style={{
  enableBackground: "new 0 0 24 24"
}} xmlSpace="preserve" width={24} height={24} {...props}><Path d="M23.1 8.2c-.5 0-.9.4-.9.9v2.4h-1.5V6.3c0-.7-.6-1.3-1.3-1.3s-1.3.6-1.3 1.3v5.3H6V6.3C6 5.5 5.4 5 4.7 5s-1.3.5-1.3 1.3v5.3H1.8V9.1c0-.5-.4-.9-.9-.9-.4 0-.9.4-.9.9v5.7c0 .5.4.9.9.9s.9-.4.9-.9v-2.4h1.5v5.3c0 .7.6 1.3 1.3 1.3s1.3-.6 1.3-1.3v-5.3h12.2v5.3c0 .7.6 1.3 1.3 1.3s1.3-.6 1.3-1.3v-5.3h1.5v2.4c0 .5.4.9.9.9s.9-.4.9-.9V9.1c0-.5-.4-.9-.9-.9zm-18.8-2c0-.2.1-.3.3-.3.3 0 .4.1.4.3v5.3h-.7V6.2zM5 17.7c0 .2-.1.3-.3.3-.2 0-.3-.1-.3-.3v-5.3H5v5.3zM19.1 6.2c0-.2.1-.3.3-.3s.3.1.3.3v5.3H19V6.2zm.7 11.5c0 .2-.1.3-.3.3s-.3-.1-.3-.3v-5.3h.7v5.3z"/></Svg>;

export default SvgBarbell;