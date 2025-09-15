import { start } from "@jam-galaxy/midi-segment-painter";
// import Tone from "customized-tone";
import EventEmitter from "wavesurfer.js/dist/event-emitter.js";
import { ConnectorEventEmitter } from "./EventEmitter";
import { testSerializedSong1, testSerializedSong2, testSegment } from "./data/testData";
// const toneAudioContext = Tone.getContext();
// const audioContext = Tone.getContext().rawContext;
const eventEmitter: ConnectorEventEmitter = new EventEmitter();

function subscribeToEventsFromSignal() {
  eventEmitter.on("midi-segment-api-ready", ({midiSegmentApi}) => {
    console.log("eventEmitter on midi-segment-api-ready: midiSegmentApi=", midiSegmentApi);
    // midiSegmentApi.setSerializedSong(testSerializedSong1);

    // midiSegmentApi.setSerializedSongDebounced(testSerializedSong1);
    // midiSegmentApi.setSerializedSongDebounced(testSerializedSong2);

    const segmentHeight = 500; //px

    midiSegmentApi.setTransforms({
      segmentHeight: segmentHeight,
      pixelsPerTick: 0.01,
    });

    midiSegmentApi.setSegment(testSegment);
    midiSegmentApi.setWidth(500);
    midiSegmentApi.setHeight(segmentHeight);

    setTimeout(() => {
    midiSegmentApi.setTransforms({
      segmentHeight: 100,
      pixelsPerTick: 0.1,
    });
    }, 3000);

    // setTimeout(() => {
    //   midiSegmentApi.setSerializedSong(testSerializedSong2);
      // midiSegmentApi.setHeight(400);
  // }, 2000);
  });
}
subscribeToEventsFromSignal();

const rootElement = document.getElementById("root")
if(!rootElement) throw new Error;
start(rootElement, eventEmitter);
