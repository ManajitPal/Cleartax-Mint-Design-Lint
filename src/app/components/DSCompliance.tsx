import * as React from "react";

function DSCompliance(props) {
  let totalFrameCount = determineFrameCount(props.frameArray);

  let totalErrorCount = determineErrorCount(props.errorArray);

  let compliance = 100 - (totalErrorCount / totalFrameCount) * 100;

  function determineFrameCount(array) {
    let count = 1;
    if (array.length < 0) count = -1;
    else count = array.length;

    return count;
  }

  function determineErrorCount(array) {
    let count = 0;

    array.forEach(arrayItem => {
      if (arrayItem.errors) {
        count = count + arrayItem.errors.length;
      }
    });

    return count;
  }

  return (
    <React.Fragment>
      <div className="compliance-row">
        You are
        {compliance < 100 ? (
          <span className="compliance-error"> &nbsp;{compliance}% &nbsp;</span>
        ) : (
          <span className="compliance-success">
            {" "}
            &nbsp;{compliance}% &nbsp;
          </span>
        )}
        compliant to 🌿 Mint Design System
      </div>
    </React.Fragment>
  );
}

export default DSCompliance;
