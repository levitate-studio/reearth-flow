import Any from "./Any";
import BooleanSpread from "./BooleanSpread";
import Color from "./Color";
// import Number from "./Number";
import NumberSpread from "./NumberSpread";
import ObjectSpread from "./ObjectSpread";
// import String from "./String";
import StringSpread from "./StringSpread";

export default {
  _id: "Ops",
  children: [
    BooleanSpread,
    // Number,
    NumberSpread,
    // String,
    StringSpread,
    ObjectSpread,
    Color,
    Any,
  ],
};
