import { clickNumber } from "./actions/numbersClick/numbers.js";
import {
  allOperatorClick,
  calculate,
} from "./actions/operatorsClick/operator.js";
import { initialScreen } from "./screen/screen.js";
import { clearAll } from "./utils/utils.js";

document.addEventListener("DOMContentLoaded", () => {
  initialScreen();
  clickNumber();
  allOperatorClick();
  calculate();
  clearAll();
});
