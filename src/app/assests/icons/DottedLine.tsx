import * as React from "react";

const DottedLine = (props: React.SVGProps<SVGSVGElement>) => (
  <svg
    width={1223}
    height={1}
    viewBox="0 0 1223 1"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <path d="M0 0.5H1222.5" stroke="white" strokeDasharray="6 6" />
  </svg>
);
export default DottedLine;
