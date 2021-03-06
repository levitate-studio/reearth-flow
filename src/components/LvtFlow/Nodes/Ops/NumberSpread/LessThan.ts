import { updateNode } from "../../../Core/CommFuc";
import { LvtNodeDef, LvtNode } from "../../../Core/LvtNode";

const LessThan: LvtNodeDef = {
  _id: "LessThan",
  ui: {
    title: "<",
    description: "",
  },
  portsIn: [
    {
      name: "input0",
      dataType: "number",
      defaultValue: 0,
    },
    {
      name: "input1",
      dataType: "number",
      defaultValue: 0,
    },
  ],
  portsOut: [
    {
      name: "result",
      dataType: "booleanSpread",
    },
  ],
  rule: (a: number, b: number) => {
    const _a = typeof a === "object" ? a : [a];
    const _b = typeof b === "object" ? b : [b];
    const max = Math.max(_a.length, _b.length);
    const result = [];
    for (let i = 0; i < max; i += 1) {
      result.push(_a[i % _a.length] < _b[i % _b.length]);
    }
    return result;
  },
  update: (node: LvtNode) => {
    updateNode(node, "result", ["input0", "input1"]);
    return node;
  },
};

export default LessThan;
