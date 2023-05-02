import React, { useState, useEffect } from "react";
import { Player } from 'video-react';
function VideoStreams() {
  return (
    <Player
      playsInline
      poster="/assets/poster.png"
      src="https://192.168.1.7  "
    />
  );
}

export default VideoStreams;
