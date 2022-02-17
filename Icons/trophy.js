import * as React from "react";
import Svg, { Path } from "react-native-svg";

const SvgTrophy = props => <Svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" style={{
  enableBackground: "new 0 0 24 24"
}} xmlSpace="preserve" width={24} height={24} {...props}><Path d="M23.5 2.7h-3.9V1.4c0-.3-.1-.7-.4-1s-.7-.4-1-.4H5.8c-.4 0-.7.1-1 .4s-.3.6-.3 1v1.3h-4c-.3 0-.5.2-.5.4V4c0 3.1 1.8 6.3 4.5 6.7.3 3.5 4.4 5.9 7 6.2V23H7.6c-.3 0-.5.2-.5.5s.2.5.5.5h8.9c.3 0 .5-.2.5-.5s-.2-.5-.5-.5h-3.9v-6.1c2.6-.3 6.7-2.7 7-6.2C22.2 10.4 24 7.1 24 4v-.9c0-.2-.2-.4-.5-.4zM1 4v-.4h3.4v6.1C2.3 9.3 1 6.5 1 4zm11 11.9c-2.2 0-6.6-2.4-6.6-5.7V1.4c0-.1 0-.2.1-.3.1-.1.2-.1.2-.1h12.4c.1 0 .2 0 .3.1.1.1.1.2.1.3v8.9c.1 3.2-4.3 5.6-6.5 5.6zM23 4c0 2.5-1.4 5.3-3.4 5.7V3.6H23V4z" style={{
    fill: "#263238"
  }} /></Svg>;

export default SvgTrophy;