//
// Name: Atlas Rich Media Streaming Video Code
// Version: 1.1 [Flash 7.0/AS 2.0]
// Created: 12.5.2006
// Modified: 03.13.2007
// Copyright: Atlas Solutions | Atlas Rich Media [ http://www.atlasrichmedia.com ]

_global.videoIsPlaying = true;

//#################################################################################
//                         Video Percentage View Tracking
//#################################################################################

_global.ARM_checkVideoTime = function(ARM_video_stream:NetStream) {
	var ns_seconds:Number = ARM_video_stream.time;
	var ARM_seconds = Math.floor(ns_seconds);
	trace("[Video Time]: "+ARM_seconds+" (seconds)");
	//25% of video viewed
	if (ARM_seconds == Math.floor((ARM_totalVideoDur*0.25)) && ARM_timerEvent6 != true) {
		ARM_timerEvent6 = true;
		_root.conduit.event(6);
	}
	//50% of video viewed                            
	if (ARM_seconds == Math.floor((ARM_totalVideoDur*0.50)) && ARM_timerEvent7 != true) {
		ARM_timerEvent7 = true;
		_root.conduit.event(7);
	}
	//75% of video viewed                            
	if (ARM_seconds == Math.floor((ARM_totalVideoDur*0.75)) && ARM_timerEvent8 != true) {
		ARM_timerEvent8 = true;
		_root.conduit.event(8);
	}
	//Video Finished Playing                          
	if (ARM_videoFinished == true) {
		clearInterval(ARM_videoInt);
		ARM_onVideoComplete();
	}
};
//End Function

//set video timer interval
_global.ARM_setVideoInt = function() {
	ARM_videoInt = setInterval(ARM_checkVideoTime, 500, ARM_video_stream);
};

//################################################################################# 
//                         Start Streaming Code
//#################################################################################

//movie to play for local testing
local_video_source = _root.movie3;

//3 seconds is the maximum buffer size allowed by most publishers
ARM_buffer_size = 1;

//set true/false to enable/disable bandwidth detection.
ARM_bandwidthDetection = true;

// This function returns the status of the playing video stream
_global.ARM_getStreamStatus = function() {
	ARM_video_stream.onStatus = function(statusObject:Object) {
		trace("[Video Status]: "+"bufferlength = "+ARM_video_stream.bufferLength);
		for (var prop in statusObject) {
			trace("[Video Status]: "+prop+" = "+statusObject[prop]);
		}
		if (statusObject.code == "NetStream.Buffer.Empty") {
			ARM_videoFinished = true;
		}
	};
};
// End Function

//This function retuns the metadata of the FLV that is being streamed
_global.ARM_getMetaInfo = function() {
	ARM_video_stream.onMetaData = function(metaObject:Object) {
		for (var prop in metaObject) {
			trace("[Metadata]: "+prop+" = "+metaObject[prop]);
		}
		ARM_totalVideoDur = metaObject.duration;
		trace(ARM_totalVideoDur);
	};
};
// End Function

// This function executes any code that is defined in it once the video has finished playing
_global.ARM_onVideoComplete = function() {
	// Add the code you want to execute when the video is finished below.
	trace("[Trace Action]: Video Finished Playing");
	_root.conduit.event(4);
	_global.videoIsPlaying = false;
	gotoAndStop("video_finished");
};
// End Function

//This function plays the video in Atlas(online)
_global.ARM_playLiveStream = function() {
	// Detects users bandwidth
	ARM_stream_connection.onBWCheck = function() {
		return ++counter;
	};
	//Selects a video source based on users bandwidth
	ARM_stream_connection.onBWDone = function(bandwidthVal) {
		if (bandwidthVal<=56) {
			trace("[Connection Status]: Bandwidth Speed(Low) = "+bandwidthVal+"(kbps)");
			ARM_video_source = _root.movie1;
		} else if (bandwidthVal>56 && bandwidthVal<=384) {
			trace("[Connection Status]: Bandwidth Speed(Medium) = "+bandwidthVal+"(kbps)");
			ARM_video_source = _root.movie2;
		} else if (bandwidthVal>384) {
			trace("[Connection Status]: Bandwidth Speed(High) = "+bandwidthVal+"(kbps)");
			ARM_video_source = _root.movie3;
		} else if (bandwidthVal == undefined) {
			trace("[Connection Status]: Bandwidth Speed(Undefined) = "+bandwidthVal+"(kbps)");
			ARM_video_source = _root.movie3;
		}
		//Creates new NetStream object                                          
		ARM_video_stream = new NetStream(ARM_stream_connection);
		//Attaches the stream to the embedded video object (found on the "video object" layer above).
		ARM_videoObject.attachVideo(ARM_video_stream);
		//Sets buffer size defined on the bufferSize variable.
		ARM_video_stream.setBufferTime(ARM_buffer_size);
		//Plays FLV defines on the videoSource_local variable.
		ARM_video_stream.play(ARM_video_source);
		//Outputs the status of the video stream from the server.
		ARM_getStreamStatus();
		//Outputs the metadata for the FLV that is being played.
		ARM_getMetaInfo();
		//Set Video Timer Interval
		ARM_setVideoInt();
	};
};
// End Function

//This function plays the video in locally
_global.ARM_playLocalStream = function() {
	//Creates new NetStream object
	ARM_video_stream = new NetStream(ARM_stream_connection);
	//Attaches the stream to the embedded video object (found on the "video object" layer above).
	ARM_videoObject.attachVideo(ARM_video_stream);
	//Sets buffer size defined on the bufferSize variable.
	ARM_video_stream.setBufferTime(ARM_buffer_size);
	//Plays FLV defines on the videoSource_local variable.
	ARM_video_stream.play(local_video_source);
	//Outputs the status of the video stream from the server.
	ARM_getStreamStatus();
	//Outputs the metadata for the FLV that is being played.
	ARM_getMetaInfo();
	//Set Video Timer Interval
	ARM_setVideoInt();
};
// End Function

//This function make the connection to the video stream.
_global.ARM_streamConnect = function() {
	ARM_videoFinished = false;
	//Reset Video Timer
	ARM_timerEvent6 = false;
	ARM_timerEvent7 = false;
	ARM_timerEvent8 = false;
	//Creates New NetConnection object
	ARM_stream_connection = new NetConnection();
	//Atlas Streaming URL Variable. This is REQUIRED to stream video in Atlas!
	_root.streaming_url = null;
	//Tests & outputs connection status then calls either local or live streaming code to execute based on how the streaming_url variable is defined.
	ARM_stream_connection.onStatus = function(connStatusObject) {
		trace("[Trace Action]: Connected To: "+this.uri);
		for (var prop in connStatusObject) {
			trace("[Connection Status]: "+prop+" = "+connStatusObject[prop]);
		}
		if (connStatusObject.code == "NetConnection.Connect.Success" && _root.streaming_url == null) {
			ARM_playLocalStream();
		} else if (connStatusObject.code == "NetConnection.Connect.Success" && _root.streaming_url != null) {
			ARM_playLiveStream();
		}
	};
	// This makes the actual connection.
	ARM_stream_connection.connect(_root.streaming_url, ARM_bandwidthDetection);
};
// End Function

//################################################################################# 
//                         End Streaming Code
//#################################################################################


//################################################################################# 
//                         Video Stop Button Code
//#################################################################################

_root.ARM_stop.onRelease = function() {
	_root.conduit.event(3);
	//Stop Video Timer
	clearInterval(ARM_videoInt);
	ARM_video_stream.close();
	_global.videoIsPlaying = false;
	gotoAndStop("video_finished");
};

//################################################################################# 
//                         Video Toggle Button Code
//#################################################################################

_root.ARM_videoToggle.onRelease = function() {
	if (videoIsPlaying == true) {
		_root.conduit.event(1);
		//Stop Video Timer
		clearInterval(ARM_videoInt);
		ARM_video_stream.pause(true);
		_global.videoIsPlaying = false;
		ARM_videoToggle.gotoAndStop("pause");
	} else {
		_root.conduit.event(2);
		//Restart Video Timer
		ARM_setVideoInt();
		ARM_video_stream.pause(false);
		_global.videoIsPlaying = true;
		ARM_videoToggle.gotoAndStop("play");
	}
};

//################################################################################# 
//                         Audio Toggle Button Code
//#################################################################################

_root.ARM_audioToggle.onRelease = function() {
	ARM_audio = (ARM_global_sound.getVolume());
	if (ARM_audio == 0) {
		_root.conduit.event(10);
		ARM_global_sound.setVolume(100);
		ARM_audioToggle.gotoAndStop("on");
	} else if (ARM_audio == 100) {
		_root.conduit.event(9);
		ARM_global_sound.setVolume(0);
		ARM_audioToggle.gotoAndStop("off");
	}
};

//################################################################################# 
//                         Replay Button Code
//#################################################################################

ARM_replay.onRelease = function() {
	_root.conduit.event(5);
	gotoAndStop("video_start");
};

//################################################################################# 
//                         Starts video code
//#################################################################################
ARM_streamConnect();
