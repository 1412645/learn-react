import React, { useState } from "react";
import { ErrorBoundary } from "react-error-boundary";
import ErrorFallback from "./errorFallback";

function Bomb() {
  throw new Error("💥 CABOOM 💥");
}

const ErrorBoundaryPage = () => {
  const [count, setCount] = useState(0);

  return (
    <div>
      <ErrorBoundary FallbackComponent={ErrorFallback}>
        <button onClick={() => setCount((pre) => pre + 1)}>Count</button>
        {count === 5 ? <Bomb /> : <div>{count}</div>}
      </ErrorBoundary>
    </div>
  );
};

export default ErrorBoundaryPage;