import React, { useState } from "react";
import {minutesToDuration, secondsToDuration } from "../utils/duration";
import classNames from "../utils/class-names";

function MainComp({session, isTimerRunning, curFocus, curBreak, setCurFocus, setCurBreak, setSession, setIsTimerRunning, playPause}) {
    
    const handleRaiseFocus = (event) => {
	if (curFocus < 60) setCurFocus(curFocus + 5)
    }
    const handleLowerFocus = (event) => {
	if (curFocus > 5) setCurFocus(curFocus -5)
    }
    const handleRaiseBreak = (event) => {
	if (curBreak < 15) setCurBreak(curBreak + 1)
    }
    const handleLowerBreak = (event) => {
	if (curBreak > 1) setCurBreak(curBreak - 1)
    }
    const handleStop = (event) => {
      setSession(null)
      setIsTimerRunning(false)
    }
    return (
	<React.Fragment>
	<div className="row">
        <div className="col">
          <div className="input-group input-group-lg mb-2">
            <span className="input-group-text" data-testid="duration-focus">
		Focus Duration: {minutesToDuration(curFocus)}
            </span>
            <div className="input-group-append">
              
              <button
                type="button"
                className="btn btn-secondary"
                  data-testid="decrease-focus"
		  onClick={handleLowerFocus}
		  disabled={isTimerRunning}
              >
                <span className="oi oi-minus" />
              </button>
              <button
                type="button"
                className="btn btn-secondary"
                  data-testid="increase-focus"
		  onClick={handleRaiseFocus}
		  disabled ={isTimerRunning}
              >
                <span className="oi oi-plus" />
              </button>
            </div>
          </div>
        </div>
        <div className="col">
          <div className="float-right">
            <div className="input-group input-group-lg mb-2">
              <span className="input-group-text" data-testid="duration-break">
                  Break Duration: {minutesToDuration(curBreak)}
		  {/* update */}
              </span>
              <div className="input-group-append">
                <button
                  type="button"
                  className="btn btn-secondary"
                    data-testid="decrease-break"
		    onClick={handleLowerBreak}
		    disabled ={isTimerRunning}
                >
                  <span className="oi oi-minus" />
                </button>
                <button
                  type="button"
                  className="btn btn-secondary"
                    data-testid="increase-break"
		    onClick={handleRaiseBreak}
		    disabled ={isTimerRunning}
                >
                  <span className="oi oi-plus" />
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="row">
        <div className="col">
          <div
            className="btn-group btn-group-lg mb-2"
            role="group"
            aria-label="Timer controls"
          >
            <button
              type="button"
              className="btn btn-primary"
              data-testid="play-pause"
              title="Start or pause timer"
              onClick={playPause}
            >
              <span
                className={classNames({
                  oi: true,
                  "oi-media-play": !isTimerRunning,
                  "oi-media-pause": isTimerRunning,
                })}
              />
            </button>
            {/* TODO: Implement stopping the current focus or break session. and disable the stop button when there is no active session */}
            {/* TODO: Disable the stop button when there is no active session */}
            <button
              type="button"
              className="btn btn-secondary"
              data-testid="stop"
              title="Stop the session"
		disabled={!isTimerRunning}
              onClick={handleStop}
            >
              <span className="oi oi-media-stop" />
            </button>
          </div>
        </div>
      </div>
	</React.Fragment>
    )
}

export default MainComp;
