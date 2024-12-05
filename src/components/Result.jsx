import React from "react";

function Result({ score, total }) {
  return (
    <div>
      <h2>Quiz Completed!</h2>
      <p>
        You scored {score} out of {total}.
      </p>
      <button className="retry-button" onClick={() => window.location.reload()}>Retry</button>
    </div>
  );
}

export default Result;