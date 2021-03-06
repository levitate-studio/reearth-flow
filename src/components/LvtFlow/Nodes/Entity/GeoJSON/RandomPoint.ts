import { randomPoint } from "@turf/random";

import { LvtNodeDef, LvtNode } from "../../../Core/LvtNode";

const RandomPoint: LvtNodeDef = {
  _id: "RandomPoint",
  ui: {
    title: "RandomPoint",
    description: "http://turfjs.org/docs/#randomPoint",
  },
  portsIn: [
    {
      name: "count",
      dataType: "number",
      defaultValue: 1,
      ui: {
        description: "how many geometries will be generated",
      },
    },
    {
      name: "bbox",
      dataType: "numberSpread",
      ui: {
        description: "a bounding box inside of which geometries are placed",
      },
    },
  ],
  portsOut: [
    {
      name: "points",
      dataType: "object",
      defaultValue: randomPoint(1),
      ui: {
        description: "GeoJSON FeatureCollection of points",
      },
    },
  ],
  rule: randomPoint,
  update: (node: LvtNode) => {
    const count = node.getPortInByName("count")?.getValue();
    const bbox = node.getPortInByName("bbox")?.getValue();
    const options = bbox?.length > 0 ? { bbox } : undefined;
    node.getPortOutByName("points")?.setValue(node.rule(count, options));
  },
};

export default RandomPoint;
