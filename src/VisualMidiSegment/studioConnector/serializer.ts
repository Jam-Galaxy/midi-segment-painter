import Song from "@/signalFamilyCommon/song/Song";
import Track from "@/signalFamilyCommon/track";
import type { ISerializedSong } from "./ISerializedSong";
import type { TrackEvent, TrackId } from "@/signalFamilyCommon/track";

export function deserialize(serializedSong: ISerializedSong): Song {
  const song = new Song();
  const track = new Track();
  track.id = 1 as TrackId;
  
  track.setEvents(serializedSong.tracks[1]._events.array as Array<TrackEvent>);
  
  song.addTrack(track);
  return song;
}