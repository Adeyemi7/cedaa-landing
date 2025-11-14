import * as React from "react";

const DottedLine = (props: React.SVGProps<SVGSVGElement>) => (

  <svg
    width={157}
    height={1}
    viewBox="0 0 157 1"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <path d="M0 0.5H157" stroke="black" strokeDasharray="3 3" />
  </svg>
);
export default DottedLine