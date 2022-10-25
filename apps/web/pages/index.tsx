import { renderTwoNumberSum } from "math-helpers";
import { Button } from "ui";

export default function Web() {
  return (
    <div>
      <h1>Web new {renderTwoNumberSum(222, 29)}</h1>
      <Button />
    </div>
  );
}
