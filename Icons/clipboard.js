import * as React from "react";
import Svg, { Path } from "react-native-svg";

const SvgClipboard = props => <Svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" style={{
  enableBackground: "new 0 0 24 24"
}} xmlSpace="preserve" width={24} height={24} {...props}><Path d="M19.8 2.5c-.6-.6-1.3-.9-2.1-.9h-1.2c0-.9-.8-1.6-1.7-1.6H9.2c-1 0-1.7.7-1.8 1.6H6.2c-.8 0-1.5.3-2.1.9-.5.6-.8 1.3-.8 2.1V21c0 .8.3 1.5.9 2.1.5.6 1.3.9 2 .9h11.5c.8 0 1.5-.3 2.1-.9.5-.6.9-1.3.9-2.1V4.6c0-.8-.3-1.6-.9-2.1zM8.3 1.8c0-.4.4-.8.9-.8h5.5c.5 0 .9.4.9.9v.6c0 .5-.4.9-.9.9H9.2c-.5 0-.9-.4-.9-.9v-.7zM19.6 21c0 .5-.1 1-.5 1.4s-.9.6-1.4.6H6.2c-.5 0-1-.2-1.4-.6-.4-.4-.6-.9-.6-1.4V4.6c0-.5.2-1 .6-1.4.4-.4.9-.6 1.4-.6h1.2c.1.9.9 1.6 1.8 1.6h5.5c1 0 1.7-.7 1.8-1.6h1.2c.5 0 1 .2 1.4.6.4.4.6.9.6 1.4V21h-.1z"/></Svg>;

export default SvgClipboard;