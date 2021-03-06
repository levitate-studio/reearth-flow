import { spreadData, updateNode } from "../../../Core/CommFuc";
import { LvtNodeDef, LvtNode } from "../../../Core/LvtNode";

const Select: LvtNodeDef = {
  _id: "Select",
  ui: {
    title: "Select",
    description: "",
  },
  portsIn: [
    {
      name: "data",
      dataType: "stringSpread",
    },
    {
      name: "index",
      dataType: "number",
      defaultValue: 0,
    },
  ],
  portsOut: [
    {
      name: "result",
      dataType: "stringSpread",
    },
  ],
  rule: (a: any, b: number) => {
    const _temp = [];
    const _a = spreadData(a);
    if (_a) {
      for (let i = 0; i < _a.length; i += 1) {
        _temp.push(_a[i][b]);
      }
    }
    return _temp;
  },
  update: (node: LvtNode) => {
    updateNode(node, "result", ["data", "index"]);
    return node;
  },
};

export default Select;
