import * as React from "react";
import Svg, { Path } from "react-native-svg";

const SvgBatteryDead = props => <Svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" style={{
  enableBackground: "new 0 0 24 24"
}} xmlSpace="preserve" width={24} height={24} {...props}><Path d="M18.7 18.2H2.8C1.2 18.2 0 17 0 15.4V8.6C0 7 1.2 5.8 2.8 5.8h15.9c1.6 0 2.8 1.2 2.8 2.8v6.8c.1 1.6-1.2 2.8-2.8 2.8zM2.8 6.7c-1 0-1.8.8-1.8 1.9v6.8c0 1 .8 1.9 1.9 1.9h15.9c1 0 1.9-.8 1.9-1.9V8.6c0-1-.8-1.9-1.9-1.9h-16zm20.7 7.7c-.3 0-.5-.2-.5-.5v-3.8c0-.3.2-.5.5-.5s.5.2.5.5v3.8c0 .3-.2.5-.5.5z"/></Svg>;

export default SvgBatteryDead;