import Image from "next/image";
import React from "react";
import ellipseBottomBright from "~/assets/images/ellipse-bottom-bright.png";
import ellipseBottomDark from "~/assets/images/ellipse-bottom-dark.png";
import ellipseTopBright from "~/assets/images/ellipse-top-bright.png";
import ellipseTopDark from "~/assets/images/ellipse-top-dark.png";
import lineBottom from "~/assets/images/line-bottom.png";
import lineTop from "~/assets/images/line-top.png";

export function AbsoluteImages() {
  return (
    <>
      <Image
        src={ellipseBottomDark}
        alt={"Ellipse bottom dark"}
        style={{ position: "absolute", bottom: 0, right: 0 }}
      />
      <Image
        src={ellipseBottomBright}
        alt={"Ellipse bottom bright"}
        style={{ position: "absolute", bottom: 0, right: 0 }}
      />
      <Image
        src={ellipseTopDark}
        alt={"Ellipse top dark"}
        priority
        style={{ position: "absolute", top: 0, left: 0 }}
      />
      <Image
        src={ellipseTopBright}
        alt={"Ellipse top bright"}
        style={{ position: "absolute", top: 0, left: 0 }}
      />
      <Image
        src={lineBottom}
        alt={"Line bottom"}
        style={{ position: "absolute", bottom: 0, right: 0 }}
      />
      <Image
        src={lineTop}
        alt={"Line top"}
        style={{ position: "absolute", top: 0, left: 0 }}
      />
    </>
  );
}