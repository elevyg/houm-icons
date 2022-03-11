import * as React from "react";
import Svg, { Path } from "react-native-svg";

const SvgWine = props => <Svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" style={{
  enableBackground: "new 0 0 24 24"
}} xmlSpace="preserve" width={24} height={24} {...props}><Path d="M21.8 1.6v-1c0-.3-.2-.5-.5-.5H2.7c-.3 0-.5.2-.5.5v1c-.1.5-.7 5.6 2.3 9 1.6 1.9 4 2.8 7 2.9V23H5.7c-.3 0-.5.2-.5.5s.2.5.5.5h12.5c.3 0 .5-.2.5-.5s-.2-.5-.4-.5h-5.8v-9.4c3-.1 5.4-1.1 7-2.9 2.9-3.5 2.4-8.6 2.3-9.1zm-18.6.1V1h17.6v.6s.2 1.6 0 3.6H3.2c-.2-1.9 0-3.5 0-3.5zM18.8 10c-1.5 1.7-3.8 2.6-6.8 2.6s-5.2-.9-6.8-2.6c-1-1.1-1.5-2.5-1.8-3.7h17.1c-.2 1.2-.8 2.5-1.7 3.7z" /></Svg>;

export default SvgWine;