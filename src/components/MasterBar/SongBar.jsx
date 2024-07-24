import React, { useEffect } from 'react';

export const SongBar = () => {
    // const {masterSong, isPlaying} = useSelector(state => state.masterSong, state => state.isPlaying);
    // useEffect(()=>{
    //     if(masterSong){
    //         if(isPlaying){

    //             masterSong?.mp3?.play();
    //         }else{
    //             masterSong?.mp3?.pause();
    //         }
    //     }
    // }, [masterSong, isPlaying])
    return(
        <div className = "w-full h-16 bg-gray-800 text-white flex items-center justify-between px-4">Song Bar</div>
    )

}

