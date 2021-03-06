import React, { useState } from "react";
import {minutesToDuration, secondsToDuration } from "../utils/duration";

function ActiveTimer({ session, curFocus, curBreak }) {
    return (<div>
        {/* TODO: This area should show only when there is an active focus or break - i.e. the session is running or is paused */
          session ? ( <React.Fragment>
        <div className="row mb-2">
          <div className="col">
            {/* TODO: Update message below to include current session (Focusing or On Break) total duration */}
            <h2 data-testid="session-title">
              {session.label} for {session.label !== "On Break" ? minutesToDuration(curFocus) : minutesToDuration(curBreak)} minutes
            </h2>
            {/* TODO: Update message below correctly format the time remaining in the current session */}
            <p className="lead" data-testid="session-sub-title">
              {secondsToDuration(session.timeRemaining)} remaining
            </p>
          </div>
        </div>
        <div className="row mb-2">
          <div className="col">
            <div className="progress" style={{ height: "20px" }}>
              <div
                className="progress-bar"
                role="progressbar"
                aria-valuemin="0"
                aria-valuemax="100"
                //Seperate Component
                  aria-valuenow={
		      session.label == "Focusing" ? (
			  Math.floor(100 * ((curFocus * 60 - session.timeRemaining) / (curFocus * 60))))
			  : Math.floor(100 * ((curBreak * 60 - session.timeRemaining) / (curBreak * 60)))
		  }
                style={{ width: Math.floor(100 * ((curFocus * 60 - session.timeRemaining) / (curFocus * 60)))}}
              />
            </div>
          </div>
              </div>
              </React.Fragment>) : null
          }
            </div>
	   )
}

export default ActiveTimer;
