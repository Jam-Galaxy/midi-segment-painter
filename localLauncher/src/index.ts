import { start } from "midi-segment-painter";
// import Tone from "customized-tone";
import EventEmitter from "wavesurfer.js/dist/event-emitter.js";
import { ConnectorEventEmitter, ISerializedSong } from "./EventEmitter";
import { testSerializedSong1, testSerializedSong2 } from "./data/testData";
// const toneAudioContext = Tone.getContext();
// const audioContext = Tone.getContext().rawContext;
const eventEmitter: ConnectorEventEmitter = new EventEmitter();

function subscribeToEventsFromSignal() {
  eventEmitter.on("midi-segment-api-ready", ({midiSegmentApi}) => {
    console.log("eventEmitter on midi-segment-api-ready: midiSegmentApi=", midiSegmentApi);
    // midiSegmentApi.setSerializedSong(testSerializedSong1);

    midiSegmentApi.setSerializedSongDebounced(testSerializedSong1);
    midiSegmentApi.setSerializedSongDebounced(testSerializedSong2);

    // setTimeout(() => {
    //   midiSegmentApi.setSerializedSong(testSerializedSong2);
    // }, 2000);
  });
}
subscribeToEventsFromSignal();

const rootElement = document.getElementById("root")
if(!rootElement) throw new Error;
start(rootElement, eventEmitter);
