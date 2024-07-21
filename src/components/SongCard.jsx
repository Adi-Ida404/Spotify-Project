export const SongCard = (props) => {
  return (
    <div className="p-4 text-left text-slate-100 font-Raleway rounded-md bg-slate-900 hover:bg-slate-800 song-card" style={{width: "12rem", height: "auto"}}>
        <a href={props.link}></a>
        <img className="rounded-md h-3/4 w-auto" src={props.imageUrl} alt=""/>
        <div className="flex">
          <div>
            <h4 className="mt-2 mb-px font-semibold">{props.songName}</h4>
            <h5 className="my-px text-slate-300 font-thin">{props.artists}</h5>
          </div>
          <div className="ml-6 mt-4">
            <button className="bg-green-500 text-black rounded-full p-2 drop-shadow-md song-card-button">
              <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="currentColor" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round"><polygon points="6 3 20 12 6 21 6 3"/></svg>
            </button>
          </div>
        </div>
    </div>
  )
}
