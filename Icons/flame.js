import * as React from "react";
import Svg, { Path } from "react-native-svg";

const SvgFlame = props => <Svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" style={{
  enableBackground: "new 0 0 24 24"
}} xmlSpace="preserve" width={24} height={24} {...props}><Path d="M9.4 0c-.2 0-.3.1-.4.2-.1.1-.1.3-.1.5.8 3.1-.8 5.6-2.6 8.2C5 11 3.6 13.1 3.6 15.5c0 2.3.9 4.4 2.5 6 1.6 1.6 3.7 2.5 6 2.5s4.4-.9 6-2.5c1.6-1.6 2.5-3.7 2.5-6C20.4 5.5 13.1 0 9.4 0zM9 18.2c0-1.5.5-2.6 1-3.6.4-1 .9-1.8.8-2.8 1.9.5 4.3 3.7 4.3 6.5 0 3.7-2.3 3.9-3 3.9-.8 0-3.1-.4-3.1-4zm8.3 2.6c-1.1 1.1-2.6 1.8-4.1 2.1 1.5-.5 2.8-1.8 2.8-4.7 0-3.5-3.1-7.6-5.8-7.6-.1 0-.3 0-.4.2-.1.1-.1.2-.1.4.2 1-.2 1.9-.7 2.9-.5 1.1-1.1 2.4-1.1 4 0 2.8 1.3 4.2 2.8 4.7-1.5-.2-3-1-4.1-2.1-1.4-1.4-2.2-3.3-2.2-5.3 0-2.1 1.3-4 2.6-6.1C8.6 6.7 10.4 4.1 9.8.9c3.4.6 9.4 5.6 9.4 14.5.3 2.1-.5 4-1.9 5.4z" /></Svg>;

export default SvgFlame;