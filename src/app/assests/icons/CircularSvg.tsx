import * as React from "react";

const CircularSvg = (props: React.SVGProps<SVGSVGElement>) => (
  <svg
    width={550}
    height={550}
    viewBox="0 0 550 550"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <circle cx={275} cy={275} r={275} fill="#EB4922" />
  </svg>
);
export default CircularSvg;
