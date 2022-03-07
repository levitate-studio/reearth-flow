import { useState } from "react";

import DataViewer from "./DataViewer";
// import ResiumMap from "./ResiumMap";

import "./df-output-panel.css";

const OutputPanel = ({ dataManager }: any) => {
  const [activeTab, setActiveTab] = useState("output");
  return (
    <div className="df-output-panel">
      <div className="df-block-title">
        <div
          className={`df-block-title-tab multi ${
            activeTab === "output" && "active"
          }`}
          onClick={() => {
            setActiveTab("output");
          }}
        >
          Output
        </div>
        <div
          className={`df-block-title-tab multi ${
            activeTab === "map" && "active"
          }`}
          onClick={() => {
            setActiveTab("map");
          }}
        >
          Map
        </div>
      </div>
      <div className="df-block-content">
        <div
          className={`df-block-tab-content ${
            activeTab === "output" && "active"
          }`}
        >
          <DataViewer data={dataManager.outputSource} />
        </div>
        <div
          className={`df-block-tab-content ${activeTab === "map" && "active"}`}
        >
          {/* <ResiumMap dataManager={dataManager} /> */}
        </div>
      </div>
    </div>
  );
};

export default OutputPanel;