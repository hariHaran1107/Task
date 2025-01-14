import * as React from 'react';
import Svg, {Path} from 'react-native-svg';

const HomeworkIcon = ({color, size}) => (
  <Svg
    width={size}
    height={size}
    viewBox="0 0 18 22"
    fill="none"
    xmlns="http://www.w3.org/2000/svg">
    <Path
      d="M1.50024 17.75C1.50024 17.1533 1.7373 16.581 2.15925 16.159C2.58121 15.7371 3.15351 15.5 3.75024 15.5H15.9002"
      stroke={color}
      strokeWidth="2.5"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <Path
      d="M3.75024 2H15.9002V20H3.75024C3.15351 20 2.58121 19.7629 2.15925 19.341C1.7373 18.919 1.50024 18.3467 1.50024 17.75V4.25C1.50024 3.65326 1.7373 3.08097 2.15925 2.65901C2.58121 2.23705 3.15351 2 3.75024 2V2Z"
      stroke={color}
      strokeWidth="2.5"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </Svg>
);

export default HomeworkIcon;
