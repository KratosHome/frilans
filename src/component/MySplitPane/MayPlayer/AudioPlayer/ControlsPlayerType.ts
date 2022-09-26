
export type ControlsPlayerType = {
    elemRef:any
    setIsPlaying: (value: boolean) => void
    isPlaying: boolean
    progressBar: number
    setProgress: (value: number) => void
    intervalRef? : any
    isReady: any
}