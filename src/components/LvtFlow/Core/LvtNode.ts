import * as Nodes from "../Nodes";

import { idCreator } from "./CommFuc";
import { LvtPort, LvtPortDef } from "./LvtPort";

export interface LvtNodeOptions {
  nodeId: string;
  id?: string;
  data?: {
    portsIn?: Array<LvtPortDef>;
  };
  dataVersion?: number;
  doUpdate?: boolean;
}

export interface LvtNodeDef {
  _id: string;
  nodeId?: string;
  category?: string;
  isRenderer?: boolean;
  ui: {
    title: string;
    description?: string;
  };
  portsIn: Array<LvtPortDef>;
  portsOut: Array<LvtPortDef>;
  update?: any;
  rule?: any;
}

export class LvtNode {
  id: string | undefined;
  nodeId: string | undefined;
  category: string | undefined;
  ui: any;
  isRenderer?: boolean;
  data:
    | {
        portsIn: Array<LvtPort>;
        portsOut: Array<LvtPort>;
      }
    | undefined;
  update: any;
  rule: any;
  //
  dataVersion: number | undefined;

  //
  static createPorts({ portsDef, portType, portValue }: any) {
    const ports: Array<LvtPort> = [];
    portsDef.forEach((portDef: any) => {
      let importedValue;
      if (portValue) {
        const importedPort = portValue.find(
          (p: any) => p.name === portDef.name
        );
        if (importedPort) importedValue = importedPort.value;
      }
      ports.push(new LvtPort({ ...portDef, portType, importedValue }));
    });
    return ports;
  }

  constructor({ nodeId, id, data, dataVersion, doUpdate }: LvtNodeOptions) {
    const nodeDef = Nodes.nodeDefs[nodeId];
    if (!nodeDef) {
      console.warn("NodeDef not found: " + nodeId);
    } else {
      //
      this.id = id ? id : idCreator.getId().toString();
      this.nodeId = nodeDef.nodeId;
      this.category = nodeDef.category;
      //
      this.ui = {
        nodeType: "basicNode",
        ...nodeDef.ui,
      };
      //
      this.update = nodeDef.update;
      this.rule = nodeDef.rule;
      this.data = {
        portsIn: LvtNode.createPorts({
          portsDef: nodeDef.portsIn,
          portType: "input",
          portValue: data?.portsIn,
        }),
        portsOut: LvtNode.createPorts({
          portsDef: nodeDef.portsOut,
          portType: "output",
        }),
      };
      this.isRenderer = nodeDef.isRenderer;
      //
      if (doUpdate !== false) {
        this.update?.(this);
        this.dataVersion = dataVersion;
      }
    }
  }

  // =======================================
  // ports methods
  // =======================================
  getPortInByName(portName: string) {
    return this.data?.portsIn.find((p) => p.name === portName);
  }
  getPortOutByName(portName: string) {
    return this.data?.portsOut.find((p) => p.name === portName);
  }

  // =======================================
  // edges methods
  // =======================================
  getAllEdges() {
    const edges: any = [];
    this.data?.portsIn?.forEach((port) => {
      if (port.source) {
        edges.push({
          source: port.source.id,
          sourceHandle: port.source.portName,
          target: this.id,
          targetHandle: port.name,
        });
      }
    });
    this.data?.portsOut?.forEach((port) => {
      if (port.targets && port.targets.length > 0) {
        port.targets?.forEach((target) => {
          edges.push({
            source: this.id,
            sourceHandle: port.name,
            target: target.id,
            targetHandle: target.portName,
          });
        });
      }
    });
    return edges.length > 0 ? edges : null;
  }
}
