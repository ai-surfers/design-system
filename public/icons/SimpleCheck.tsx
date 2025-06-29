import * as React from "react";

const SimpleCheck = (props: React.SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="16"
    height="16"
    viewBox="0 0 16 16"
    fill="none"
    {...props}
    style={{ display: "block", ...props.style }}
  >
    <path
      d="M13.3334 4L6.00008 11.3333L2.66675 8"
      stroke={props.color ?? "#818491"}
      strokeWidth="1.5"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>
);

export default SimpleCheck;
