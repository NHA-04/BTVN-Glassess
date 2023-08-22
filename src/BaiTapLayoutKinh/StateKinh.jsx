import React, { useState } from "react";
import Kinh from "./Kinh";
import glassesData from "./dataGlasses.json";

export default function StateKinh() {
  const [selectedGlass, setSelectedGlass] = useState(glassesData[6]);
  const [selectedGlassInfo, setSelectedGlassInfo] = useState(null);

  const handleGlassSelect = (glass) => {
    setSelectedGlass(glass);
    setSelectedGlassInfo(glass);
  };

  return (
    <>
      <div className="state-kinh-container">
        <h1 className="text-center text-white">TRUY GLASSES APP ONLINE</h1>
      </div>
      <div className="text-center mt-5">
        <div className="model-container d-flex justify-content-center ">
          <div className="text-center model-container">
            <div className="model-wrapper">
              {selectedGlass && (
                <div className="glass-info" style={{ width: `310px` }}>
                  <h4>{selectedGlass.name}</h4>
                  <p>{selectedGlass.desc}</p>
                </div>
              )}
              <img
                src="./glassesImage/model.jpg"
                alt=""
                width="310px"
                className="me-5"
              />
              {selectedGlass && (
                <img
                  src={selectedGlass.url}
                  alt={selectedGlass.name}
                  width="177px"
                  className={`glass-image ${selectedGlass ? "dimmed" : ""}`}
                />
              )}
            </div>
          </div>
          <div>
            <img
              src="./glassesImage/model.jpg"
              alt=""
              width="310px"
              className="ms-5"
            />
          </div>
        </div>
        <div className="listGlassess ">
          <Kinh
            glasses={glassesData}
            selectedGlass={selectedGlass}
            onGlassSelect={handleGlassSelect}
          />
        </div>
      </div>
    </>
  );
}
