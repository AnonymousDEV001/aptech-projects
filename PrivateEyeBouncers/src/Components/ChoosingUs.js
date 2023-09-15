import React from "react";
import ChoosingUsCss from "./css/ChoosingUs.module.css";
import indexCss from "../index.module.css"

export default function ChoosingUs() {
  return (
    <div className={ChoosingUsCss.chooseUs}>
      <div className="heading">
        <p className={indexCss.grey}>WHY CHOOSE US</p>
        <h3>What Sets Us Apart</h3>
      </div>
      <div className={ChoosingUsCss.chooseInnerContainer}>
        <div className={ChoosingUsCss.chooseLeft}>
          <img loading="lazy" src="cartoon.webp" />
        </div>
        <div className={ChoosingUsCss.chooseRight}>
          <div className={ChoosingUsCss.chooseCards}>
            <div className={ChoosingUsCss.chooseCard}>
              <span class={indexCss.materialSymbolsOutlined}>schedule</span>
              <h3>Perfection Anytime</h3>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit
                tellus, luctus nec ullamcorper mattis, pulvinar dapibus leo.
              </p>
            </div>
            <div className={ChoosingUsCss.chooseCard}>
            <span class={indexCss.materialSymbolsOutlined}>chat</span>
              <h3>24 / 7 Communication</h3>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit
                tellus, luctus nec ullamcorper mattis, pulvinar dapibus leo.
              </p>
            </div>
            <div className={ChoosingUsCss.chooseCard}>
            <span class={indexCss.materialSymbolsOutlined}>electric_bolt</span>
              <h3>24 / 7 Communication</h3>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit
                tellus, luctus nec ullamcorper mattis, pulvinar dapibus leo.
              </p>
            </div>
            <div className={ChoosingUsCss.chooseCard}>
            <span class={indexCss.materialSymbolsOutlined}>person</span>
              <h3>Licensed Officer</h3>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit
                tellus, luctus nec ullamcorper mattis, pulvinar dapibus leo.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
