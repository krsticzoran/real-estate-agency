import { FC } from "react";
import "./svgLines.css";

const SvgLines: FC = () => (
  <div
    className=" w-100 h-100  svg-lines-height"
    style={{ overflow: "hidden", maxHeight: "500px" }}
  >
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 1000 600"
      style={{ minHeight: "1000px" }}
    >
      <path
        d="M302.7 2v249.8l-135.4 25.7-99-144.9V2"
        fill="none"
        stroke="#fff"
        strokeMiterlimit="10"
        style={{
          strokeDasharray: "694, 696",
          strokeDashoffset: 0,
          opacity: 0.35,
        }}
      />
      <path
        d="M496.8 139.8L4 191.9V2"
        fill="none"
        stroke="#fff"
        strokeMiterlimit="10"
        style={{
          strokeDasharray: "686, 688",
          strokeDashoffset: 0,
          opacity: 0.35,
        }}
      />
      <path
        d="M496.8 139.8l-262.9-13.3L4 143.2"
        fill="none"
        stroke="#fff"
        strokeMiterlimit="10"
        style={{
          strokeDasharray: "494, 496",
          strokeDashoffset: 0,
          opacity: 0.35,
        }}
      />
      <path
        d="M302.7 251.8l-169-118V2m33.6 275.5V81.2"
        fill="none"
        stroke="#fff"
        strokeMiterlimit="10"
        style={{
          strokeDasharray: "535, 537",
          strokeDashoffset: 0,
          opacity: 0.35,
        }}
      />
      <path
        d="M40.9 2v81.4l209.5-5"
        fill="none"
        stroke="#fff"
        strokeMiterlimit="10"
        style={{
          strokeDasharray: "291, 293",
          strokeDashoffset: 0,
          opacity: 0.35,
        }}
      />
      <path
        d="M250.4 2v227.4L211 232l-65.3-69.4V2"
        fill="none"
        stroke="#fff"
        strokeMiterlimit="10"
        style={{
          strokeDasharray: "523, 525",
          strokeDashoffset: 0,
          opacity: 0.35,
        }}
      />
      <path
        d="M250.4 229.4l-88.1-68.3V2m-16.6 160.6l16.6-1.5M211 232V2m22.9 124.5V2m7.3 76.6V2m255.7 195.1L357 148V2"
        fill="none"
        stroke="#fff"
        strokeMiterlimit="10"
        style={{
          strokeDasharray: "1013, 1015",
          strokeDashoffset: 0,
          opacity: 0.35,
        }}
      />
      <path
        d="M496.9 170.8l-90-21.5V2m0 147.3l-16.4-3.3V2M357 148l33.5-2"
        fill="none"
        stroke="#fff"
        strokeMiterlimit="10"
        style={{
          strokeDasharray: "435, 437",
          strokeDashoffset: 0,
          opacity: 0.35,
        }}
      />
    </svg>
  </div>
);

export default SvgLines;
