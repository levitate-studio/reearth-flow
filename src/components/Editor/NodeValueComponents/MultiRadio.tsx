import { useState } from "react";

// let active: string;

const MultiRadio = ({ props }: any) => {
  const [active, setActive] = useState(props.port.value.v);
  let options = [];
  if (props.port.ui.componentOptions.radioSourceType) {
    switch (props.port.ui.componentOptions.radioSourceType) {
      case "self":
        options = props.port.ui.componentOptions.radioOptions;
        break;
      default:
        break;
    }
  }

  // active = port.value.v;
  const setValue = (value: string) => {
    setActive(value);
    // active = value;
    props.port.setValue(value);
    props.lvtFlow.reRenderUI(["currentElement"]);
    props.lvtFlow.updateNodesFromNode(props.node.id);
  };

  return (
    <div className="property-radios">
      {options.map((option: any, index: number) => (
        <div
          key={index}
          className={`radio ${active === option.value && "active"}`}
          onClick={() => {
            setValue(option.value);
          }}
        >
          {option.title}
        </div>
      ))}
      <div
        className="porperty-reset"
        onClick={() => {
          setValue(props.port.defaultValue);
        }}
      >
        R
      </div>
    </div>
  );
};

export default MultiRadio;
