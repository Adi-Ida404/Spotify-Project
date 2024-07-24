import { ArtistCard } from '../components/ArtistCard';
import { Footer } from '../components/Footer';
import { Header } from '../components/Header';
import { Row } from '../components/Row';
import { Sidebar } from '../components/Sidebar';
import { SongCard } from '../components/SongCard';
import songs from '../assets/songs'; // Ensure this is the correct path
import { SingUpBar } from '../components/SignupBar';
import { SongBar } from '../components/MasterBar/SongBar';

export const Homepage = () => {
  return (
    <>
      <div className='flex' style={{ height: "550px" }}>
        <Sidebar />
        <div className="bg-slate-950 pt-4 px-2" style={{ width: "950px" }}>
          <div className="bg-slate-900">
            <Header />
            <div className="overflow-y-auto text-white custom-scrollbar p-2" style={{ height: "450px" }}>
              <Row title="Latest Releases" songs={songs} />
              <Row title="Top Charts" songs={songs} />
              <Row title="Trending" songs={songs} />
              <Footer />
            </div>
          </div>
        </div>
      </div>
      <div style={{
        position: "absolute",
        zIndex: 10,
        width: "100%",
        background: "linear-gradient(90deg, rgba(209,81,215,1) 0%, rgba(177,23,169,1) 13%, rgba(129,74,192,1) 36%, rgba(129,74,192,1) 51%, rgba(0,212,255,1) 100%)"
      }}>
        <SongBar/>
        {/* <SingUpBar/> */}

      </div>
    </>
  );
};
