import React from "react";
import { Icon } from '@iconify/react';

export default function Process() {
  return (
    <div className="process" id="process">
      <h2>My Process</h2>
      <div className="processWrapper">
        <div className="processItem">
          <img src="assets/discover.svg" alt="" />
          <h3>Discovery</h3>
          <p>
            I conduct user research to identify the problem I want to solve.
          </p>
        </div>
        <div className="processItem">
          <img src="assets/define.svg" alt="" />
          <h3>Define</h3>
          <p>
            I conduct user research to identify the problem I want to solve.
          </p>
          <p>It results in understanding the need and scope of the required solution.</p>

        </div>
        
        <div className="processItem">
        <Icon  className="bottom"  icon="mdi:draw" color="#16CE51" width="30" height="30" />
          <h3>Ideate</h3>
          <p>
          I create wireframes using Figma and sketches of the product I’m about to design.
          </p>
        </div>
        <div className="processItem">
        <Icon  className="bottom"  icon="bx:code-alt" width="30" height="30" color="rgb(53, 53, 119" />
          <h3>Development</h3>
          <p>
            After designing i develop the website using the tools preferred by the client.
          </p>
        </div>
      </div>
    </div>
  );
}
