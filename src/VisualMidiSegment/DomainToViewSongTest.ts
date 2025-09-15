import { deserialize } from "./studioConnector/serializer";
import { testSerializedSong1, testSerializedSong2 } from "./data/testData";
// import { domainToView } from "./view/DomainToViewSongMapper";

export function domainToViewSongTest() {
  const song = deserialize(testSerializedSong1);

  // const songView = domainToView(song);
  // console.log("songView=", songView)
  // return songView;
}