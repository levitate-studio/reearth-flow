const Input = ({ props }: any) => {
  return (
    <div className="property-value ">
      <input
        value={props.port.value.v === undefined ? "" : props.port.value.v}
        disabled={props.port.connected}
        onChange={(e) => {
          props.port.setValue(e.target.value);
          props.lvtFlow.reRenderUI(["currentElement"]);
        }}
        onBlur={() => {
          props.lvtFlow.updateNodesFromNode(props.node.id);
        }}
        onKeyDown={(e) => {
          if (e.code === "Enter") {
            (e.target as HTMLInputElement).blur();
          }
        }}
      />
      <div
        className="porperty-reset"
        onClick={() => {
          props.port.setValue(props.port.defaultValue);
          props.lvtFlow.reRenderUI(["currentElement"]);
          props.lvtFlow.updateNodesFromNode(props.node.id);
        }}
      >
        R
      </div>
    </div>
  );
};

export default Input;
