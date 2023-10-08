import React, { useEffect, useState } from 'react'
import { useSound } from 'use-sound'
import { AiFillPlayCircle, AiFillPauseCircle } from "react-icons/ai"; // icons for play and pause
import { BiSkipNext, BiSkipPrevious } from "react-icons/bi"; // icons for next and previous track
import four from "./the-four.mp3"; // importing the music
import { IconContext } from "react-icons"; // for customazing the icons

const AudioPlayer3 = ({src, label }) => {
    const [isPlaying, setIsPlaying] = useState(false);
    const [play, { pause, duration, sound }] = useSound(four);

  const playingButton = () => {
    if (isPlaying) {
      pause(); // this will pause the audio
      setIsPlaying(false);
    } else {
      play(); // this will play the audio
      setIsPlaying(true);
    }
  };

  const [currTime, setCurrTime] = useState({
    min: "",
    sec: "",
  }); // current position of the audio in minutes and seconds

  const [seconds, setSeconds] = useState(); // current position of the audio in seconds

    useEffect(() => {
  const sec = duration / 1000;
  const min = Math.floor(sec / 60);
  const secRemain = Math.floor(sec % 60);
  const time = {
    min: min,
    sec: secRemain
  };
    });


  useEffect(() => {
    const interval = setInterval(() => {
      if (sound) {
        setSeconds(sound.seek([])); // setting the seconds state with the current state
        const min = Math.floor(sound.seek([]) / 60);
        const sec = Math.floor(sound.seek([]) % 60);
        setCurrTime({
          min,
          sec,
        });
      }
    }, 1000);
    return () => clearInterval(interval);
  }, [sound]);


    return (
        <div>
            <li className="playlist-number d-block text-center justify-content-center align-items-center">
                <div className="song-info">
                    <h4>Melodi Song Track Two</h4>
                    <p><strong>Album</strong>: Title &nbsp;|&nbsp; <strong>Type</strong>: Rock &nbsp;|&nbsp; <strong>Singer</strong>: Dawn</p>
                </div>
                <div className="music-icon">
                    <button className="playButton">
                        <IconContext.Provider value={{ size: "3em", color: "#0000ff" }}>
                            <BiSkipPrevious />
                        </IconContext.Provider>
                    </button>
                    {!isPlaying ? (
                    <button className="playButton" onClick={playingButton}>
                        <IconContext.Provider value={{ size: "3em", color: "#0000ff" }}>
                            <AiFillPlayCircle />
                        </IconContext.Provider>
                    </button>
                    ) : (
                    <button className="playButton" onClick={playingButton}>
                        <IconContext.Provider value={{ size: "3em", color: "#0000ff" }}>
                            <AiFillPauseCircle />
                        </IconContext.Provider>
                    </button>
                    )}
                    <button className="playButton">
                        <IconContext.Provider value={{ size: "3em", color: "#0000ff" }}>
                            <BiSkipNext />
                        </IconContext.Provider>
                    </button>
                </div>
                <div className="clearfix"></div>
                <div>
                    <div className="time">
                        <p>
                            {currTime.min}:{currTime.sec}
                        </p>
                        <p>
                            {/*{time.min}:{time.sec}*/}
                        </p>
                    </div>
                    <input
                        type="range"
                        min="0"
                        max={duration / 1000}
                        default="0"
                        value={seconds}
                        className="timeline"
                        onChange={(e) => {
                            sound.seek([e.target.value]);
                        }}
                    />
                </div>
                                
            </li>

        </div>
    )
}

export default AudioPlayer3;