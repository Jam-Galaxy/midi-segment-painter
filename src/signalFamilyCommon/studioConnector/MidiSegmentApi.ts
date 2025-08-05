// import { useConductorTrack } from "../hooks/useConductorTrack";
// import { usePlayer } from "../hooks/usePlayer";

export interface ConnectorEventEmitter {
  test: string
}

export interface MidiSegmentApi {
  changeTempo: (tempo: number) => void
}

export function useCreateSignalApi(): MidiSegmentApi {
  // const { position, setCurrentTempo } = usePlayer();
  // const { setTempo } = useConductorTrack();

  const changeTempoHelper = (tempo: number) => {
    // setTempo(tempo, position)
    // setCurrentTempo(tempo)
  }

  return {
    changeTempo: (tempo: number) => {
      changeTempoHelper(tempo);
    },
  }
}
