import * as React from 'react';
import Svg, {Path} from 'react-native-svg';

const NotificationsIcon = ({color, size}) => (
  <Svg
    width={size}
    height={size}
    viewBox="0 0 19 22"
    fill="none"
    xmlns="http://www.w3.org/2000/svg">
    <Path
      d="M15.0033 7.40121C15.0033 5.96872 14.4342 4.5949 13.4213 3.58198C12.4084 2.56905 11.0345 2 9.60206 2C8.16957 2 6.79575 2.56905 5.78283 3.58198C4.7699 4.5949 4.20085 5.96872 4.20085 7.40121C4.20085 13.7026 1.50024 15.503 1.50024 15.503H17.7039C17.7039 15.503 15.0033 13.7026 15.0033 7.40121Z"
      stroke={color}
      strokeWidth="2.5"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <Path
      d="M11.1594 19.1037C11.0011 19.3763 10.7739 19.6026 10.5006 19.7599C10.2273 19.9172 9.91744 20 9.60203 20C9.28661 20 8.97674 19.9172 8.70342 19.7599C8.43011 19.6026 8.20294 19.3763 8.04468 19.1037"
      stroke={color}
      strokeWidth="2.5"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </Svg>
);

export default NotificationsIcon;
