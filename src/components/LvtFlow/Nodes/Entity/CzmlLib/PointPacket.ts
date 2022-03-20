import {
  updateNode,
  packageSpreadValue,
} from "../../../Core/CommFuc";
import { LvtNodeDef, LvtNode } from "../../../Core/LvtNode";

const PointPacket: LvtNodeDef = {
  _id: "PointPacket",
  ui: {
    title: "PointPacket",
    description: "Describes the graphical properties of a single Point in a scene.",
  },
  portsIn: [
    {
      name: "id",
      dataType: "String",
      ui:{
        description: "The ID of the object described by this packet. IDs do not need to be GUIDs, but they do need to uniquely identify a single object within a CZML source and any other CZML sources loaded into the same scope. If this property is not specified, the client will automatically generate a unique one. However, this prevents later packets from referring to this object in order to add more data to it."
      },
    },{
      name: "delete",
      dataType: "Boolean",
      ui:{
        description: "Whether the client should delete all existing data for this object, identified by ID. If true, all other properties in this packet will be ignored."
      },
    },{
      name: "name",
      dataType: "String",
      ui:{
        description: "The name of the object. It does not have to be unique and is intended for user consumption."
      },
    },{
      name: "parent",
      dataType: "String",
      ui:{
        description: "The ID of the parent object, if any."
      },
    },{
      name: "description",
      dataType: "String",
      ui:{
        description: "An HTML description of the object."
      },
    },{
      name: "availability",
      dataType: "TimeIntervalCollection",
      ui:{
        description: "The set of time intervals over which data for an object is available. The property can be a single string specifying a single interval, or an array of strings representing intervals. A later CZML packet can update this availability if it changes or is found to be incorrect. For example, an SGP4 propagator may initially report availability for all time, but then later the propagator throws an exception and the availability can be adjusted to end at that time. If this optional property is not present, the object is assumed to be available for all time. Availability is scoped to a particular CZML stream, so two different streams can list different availability for a single object. Within a single stream, the last availability stated for an object is the one in effect and any availabilities in previous packets are ignored. If an object is not available at a time, the client will not draw that object."
      },
    },{
      name: "properties",
      dataType: "CustomProperties",
      ui:{
        description: "A set of custom properties for this object."
      },
    },{
      name: "position",
      dataType: "Position",
      ui:{
        description: "The position of the object in the world. The position has no direct visual representation, but it is used to locate billboards, labels, and other graphical items attached to the object."
      },
    },{
      name: "viewFrom",
      dataType: "ViewFrom",
      ui:{
        description: "A suggested camera location when viewing this object. The property is specified as a Cartesian position in the East (x), North (y), Up (z) reference frame relative to the object's position."
      },
    },{
      name: "billboard",
      dataType: "Billboard",
      ui:{
        description: "A billboard, or viewport-aligned image, sometimes called a marker. The billboard is positioned in the scene by the `position` property."
      },
    },{
      name: "box",
      dataType: "Box",
      ui:{
        description: "A box, which is a closed rectangular cuboid. The box is positioned and oriented using the `position` and `orientation` properties."
      },
    },{
      name: "corridor",
      dataType: "Corridor",
      ui:{
        description: "A corridor, which is a shape defined by a centerline and width."
      },
    },{
      name: "cylinder",
      dataType: "Cylinder",
      ui:{
        description: "A cylinder, truncated cone, or cone defined by a length, top radius, and bottom radius. The cylinder is positioned and oriented using the `position` and `orientation` properties."
      },
    },{
      name: "ellipse",
      dataType: "Ellipse",
      ui:{
        description: "An ellipse, which is a closed curve on the surface of the Earth. The ellipse is positioned using the `position` property."
      },
    },{
      name: "ellipsoid",
      dataType: "Ellipsoid",
      ui:{
        description: "An ellipsoid, which is a closed quadric surface that is a three-dimensional analogue of an ellipse. The ellipsoid is positioned and oriented using the `position` and `orientation` properties."
      },
    },{
      name: "point",
      dataType: "Point",
      ui:{
        description: "A point, or viewport-aligned circle. The point is positioned in the scene by the `position` property."
      },
    },
  ],
  portsOut: [
    {
      name: "PointPacket",
      dataType: "PointPacket",
    },
  ],
  rule: (_id: any, _delete: any, _name: any, _parent: any, _description: any, _availability: any, _properties: any, _position: any, _viewFrom: any, _billboard: any, _box: any, _corridor: any, _cylinder: any, _ellipse: any, _ellipsoid: any, _point: any) => {
    return packageSpreadValue(
      { _id, _delete, _name, _parent, _description, _availability, _properties, _position, _viewFrom, _billboard, _box, _corridor, _cylinder, _ellipse, _ellipsoid, _point }
    );
  },
  update: (node: LvtNode) => {
    updateNode(node, "PointPacket", ["id", "delete", "name", "parent", "description", "availability", "properties", "position", "viewFrom", "billboard", "box", "corridor", "cylinder", "ellipse", "ellipsoid", "point"]);
    return node;
  },
};

export default PointPacket;