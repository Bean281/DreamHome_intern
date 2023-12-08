import React from "react";
import agent_1 from "../assets/agent/meet-1.jpg";
import agent_2 from "../assets/agent/meet-2.jpg";
import agent_3 from "../assets/agent/meet-3.jpg";

import "./Agent.scss";

const Agent = () => {
  return (
    <div className="agent-container">
      <div className="agent-dis">
        <h1 className="agent-header">Meet the agents</h1>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer vel
          lobortis justo
        </p>
      </div>

      <div className="agent-box-container">
        <div className="item-agent">
          <div className="item-agent-thumbnail">
            <div className="thumbnail-image">
              <img src={agent_1} alt="" />
            </div>
            <div className="thumbnail-logo">
              <i class="fa-brands fa-facebook-f"></i>
              <i class="fa-brands fa-twitter"></i>
              <i class="fa-brands fa-linkedin-in"></i>
              <i class="fa-brands fa-instagram"></i>
            </div>
          </div>

          <div className="item-agent-info">
            <div className="info-name">
              <div className="info-fullname">Wade Warren</div>
              <div className="info-job">Salesperson</div>
            </div>
            <div className="info-contact">
              <i class="fa-solid fa-phone"></i>
              <i class="fa-solid fa-envelope"></i>
            </div>
          </div>
        </div>

        <div className="item-agent">
          <div className="item-agent-thumbnail">
            <div className="thumbnail-image">
              <img src={agent_2} alt="" />
            </div>
            <div className="thumbnail-logo">
              <i class="fa-brands fa-facebook-f"></i>
              <i class="fa-brands fa-twitter"></i>
              <i class="fa-brands fa-linkedin-in"></i>
              <i class="fa-brands fa-instagram"></i>
            </div>
          </div>

          <div className="item-agent-info">
            <div className="info-name">
              <div className="info-fullname">Leslie Alexander</div>
              <div className="info-job">Commercial Broker</div>
            </div>
            <div className="info-contact">
              <i class="fa-solid fa-phone"></i>
              <i class="fa-solid fa-envelope"></i>
            </div>
          </div>
        </div>

        <div className="item-agent">
          <div className="item-agent-thumbnail">
            <div className="thumbnail-image">
              <img src={agent_3} alt="" />
            </div>
            <div className="thumbnail-logo">
              <i class="fa-brands fa-facebook-f"></i>
              <i class="fa-brands fa-twitter"></i>
              <i class="fa-brands fa-linkedin-in"></i>
              <i class="fa-brands fa-instagram"></i>
            </div>
          </div>

          <div className="item-agent-info">
            <div className="info-name">
              <div className="info-fullname">Darlene Robertson</div>
              <div className="info-job">Realtor</div>
            </div>
            <div className="info-contact">
              <i class="fa-solid fa-phone"></i>
              <i class="fa-solid fa-envelope"></i>
            </div>
          </div>
        </div>
      </div>

      <div className="agent-ads">
        <p>Become an agent and get the commission you deserve. <b>Contact us</b></p>
      </div>
    </div>
  );
};

export default Agent;
