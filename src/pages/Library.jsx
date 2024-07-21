import { Profile } from "./../components/Profile";
import { SearchButton } from "./../components/SearchButton";
import { Playlist } from "./../components/Playlist";
import { Sidebar } from "../components/Sidebar";

export const Library = () => {
  const alertStyle = {
    backgroundColor: '#151515',
    borderWidth: '2.5px',
    borderColor: 'black',
    borderRadius: 0,
    borderRight: 'none',
    borderLeft: 'none',
    borderTop: 'none'
  };

  return (
    <div className="flex">
      <Sidebar />
      <div style={alertStyle} className="alert alert-light flex" role="alert">
        <h2 className="d-flex justify-content-between align-items-center">
          <div className="text-left">
            <Profile />
          </div>
          <div style={{ color: "white", fontFamily: "sans-serif" }} className="text-center">
            Your Library
          </div>
          <div className="text-right">
            <SearchButton />
          </div>
        </h2>
      </div>
      <div>
        <Playlist />
      </div>
    </div>
  );
};
