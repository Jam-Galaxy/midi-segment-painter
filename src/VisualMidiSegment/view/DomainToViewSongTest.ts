import { deserialize } from "../studioConnector/serializer";
import { testSerializedSong1, testSerializedSong2 } from "../data/testData";
// import { domainToView } from "./DomainToViewSongMapper";
import { IViewSong } from "./IViewSong";

export function domainToViewSongTest() {
  const song = deserialize(testSerializedSong1);

  // const songView: IViewSong = domainToView(song);
  // console.log("songView=", songView)
  // return songView;
}