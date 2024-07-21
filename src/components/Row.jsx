import { SongCard } from "./SongCard"

export const Row = (props) => {
  return (
    <div className="bg-slate-900 text-left text-slate-100 font-semibold font-Raleway mt-4 ">
        <div className="flex">
        <h4 className="ml-4 font">{props.title}</h4>
        <button className="text-slate-300 text-sm rounded-lg bg-slate-900 hover hover:underline-offset-2 hover:bg-slate-800 p-2" style={{marginLeft: "700px"}}>Show All</button>
        </div>
        <div className="flex">
            <SongCard imageUrl="https://imgs.search.brave.com/VUU_ezqHjGHCCir8mh-WIMLA1-AhMC8GGZJU8orEfL8/rs:fit:500:0:0:0/g:ce/aHR0cHM6Ly9hMTAu/Z2FhbmFjZG4uY29t/L2duX2ltZy9hbGJ1/bXMvUno0Vzh2S3hE/NS80Vzg3Nlh5djN4/L3NpemVfbS5qcGc"
            songName="Ek Tha Raja"
            artists="Badshah"/>
            <SongCard imageUrl="https://imgs.search.brave.com/VUU_ezqHjGHCCir8mh-WIMLA1-AhMC8GGZJU8orEfL8/rs:fit:500:0:0:0/g:ce/aHR0cHM6Ly9hMTAu/Z2FhbmFjZG4uY29t/L2duX2ltZy9hbGJ1/bXMvUno0Vzh2S3hE/NS80Vzg3Nlh5djN4/L3NpemVfbS5qcGc"
            songName="Ek Tha Raja"
            artists="Badshah"/>
            <SongCard imageUrl="https://imgs.search.brave.com/VUU_ezqHjGHCCir8mh-WIMLA1-AhMC8GGZJU8orEfL8/rs:fit:500:0:0:0/g:ce/aHR0cHM6Ly9hMTAu/Z2FhbmFjZG4uY29t/L2duX2ltZy9hbGJ1/bXMvUno0Vzh2S3hE/NS80Vzg3Nlh5djN4/L3NpemVfbS5qcGc"
            songName="Ek Tha Raja"
            artists="Badshah"/>
            <SongCard imageUrl="https://imgs.search.brave.com/VUU_ezqHjGHCCir8mh-WIMLA1-AhMC8GGZJU8orEfL8/rs:fit:500:0:0:0/g:ce/aHR0cHM6Ly9hMTAu/Z2FhbmFjZG4uY29t/L2duX2ltZy9hbGJ1/bXMvUno0Vzh2S3hE/NS80Vzg3Nlh5djN4/L3NpemVfbS5qcGc"
            songName="Ek Tha Raja"
            artists="Badshah"/>
            <SongCard imageUrl="https://imgs.search.brave.com/VUU_ezqHjGHCCir8mh-WIMLA1-AhMC8GGZJU8orEfL8/rs:fit:500:0:0:0/g:ce/aHR0cHM6Ly9hMTAu/Z2FhbmFjZG4uY29t/L2duX2ltZy9hbGJ1/bXMvUno0Vzh2S3hE/NS80Vzg3Nlh5djN4/L3NpemVfbS5qcGc"
            songName="Ek Tha Raja"
            artists="Badshah"/>
        </div>
    </div>
  )
}
