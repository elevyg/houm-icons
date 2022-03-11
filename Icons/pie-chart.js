import * as React from "react";
import Svg, { Path } from "react-native-svg";

const SvgPieChart = props => <Svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" style={{
  enableBackground: "new 0 0 24 24"
}} xmlSpace="preserve" width={24} height={24} {...props}><Path d="M12.9 1.8h-.4V.5c0-.3-.2-.5-.5-.5C5.4 0 0 5.4 0 12c0 1.7.3 3.4 1.1 4.9.1.2.2.3.4.3h.2l.8-.4c.8 2 2.1 3.8 3.8 5.1 1.9 1.4 4.2 2.1 6.5 2.1C19 24 24 19 24 12.8c0-6-5-11-11.1-11zM1 12C1 6.1 5.7 1.2 11.5 1v10.7l-9.8 4.4C1.2 14.8 1 13.4 1 12zm11.9 11.1c-2.2 0-4.2-.7-6-2-1.6-1.2-2.8-2.8-3.5-4.7l8.8-3.9c.2-.1.3-.2.3-.4V2.8h.4C18.4 2.8 23 7.3 23 12.9s-4.5 10.2-10.1 10.2z" /></Svg>;

export default SvgPieChart;