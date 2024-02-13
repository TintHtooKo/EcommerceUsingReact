import React from "react";
import "./DescBox.css";

export default function DescBox() {
  return (
    <div className="descbox">
      <div className="descbox-nav">
        <div className="descbox-nav-box">Description</div>
        <div className="descbox-nav-box fade">Review (122)</div>
      </div>
      <div className="descbox-desc">
        <p>
          Lorem Ipsum is simply dummy text of the printing and typesetting
          industry. Lorem Ipsum has been the industry's standard dummy text ever
          since the 1500s, when an unknown printer took a galley of type and
          scrambled it to make a type specimen book. It has survived not only
          five centuries
        </p>
        <p>
          Lorem Ipsum is simply dummy text of the printing and typesetting
          industry. Lorem Ipsum has been the industry's standard dummy text ever
          since the 1500s
        </p>
      </div>
    </div>
  );
}
