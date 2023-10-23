import { useState } from "react";
import "./ErrorBoundary.css";

function ErrorTest() {
  const [hasError, setHasError] = useState(false);

  if (hasError) {
    throw new Error("Oh... wow, there is an error somewhere in the react tree");
  }
  return (
    <div>
      <h2>You can test our Error Boundary here</h2>
      <button class="button" onClick={() => setHasError(true)}>
        <div class="button__line"></div>
        <div class="button__line"></div>
        <span class="button__text">ErrorBoundary test</span>
        <div class="button__drow1"></div>
        <div class="button__drow2"></div>
      </button>
    </div>
  );
}

export default ErrorTest;
