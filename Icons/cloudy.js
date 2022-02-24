import * as React from "react";
import Svg, { Path } from "react-native-svg";

const SvgCloudy = props => <Svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" style={{
  enableBackground: "new 0 0 24 24"
}} xmlSpace="preserve" width={24} height={24} {...props}><Path d="M17.7 20.2H5.4c-3.2 0-5.2-1.8-5.2-4.8s2.4-4.4 4.4-4.7c0 0 .1 0 .1-.1 0 0 0-.1.1-.1.6-4 3.5-6.7 7.2-6.7 3.4 0 5.6 2.3 6.4 4.5 0 0 0 .1.1.1h.1c3.2.5 5.2 2.8 5.2 5.9.1 3.4-2.6 5.9-6.1 5.9zM12 4.7c-3.2 0-5.7 2.4-6.3 6 0 .2-.1.5-.3.7-.2.2-.4.3-.7.3-1.7.3-3.6 1.5-3.6 3.8 0 2.4 1.6 3.8 4.3 3.8h12.4c3 0 5.2-2.1 5.2-4.9 0-3.1-2.3-4.6-4.5-4.9-.2 0-.4-.1-.6-.3-.2-.1-.3-.3-.4-.5-.7-1.9-2.5-4-5.5-4z"/></Svg>;

export default SvgCloudy;