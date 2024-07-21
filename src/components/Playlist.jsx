
export const Playlist = () => {
  return (
    <div className="card" style={{ borderRadius: 0, backgroundColor: 'black' }}>
      <div className="card-body" style={{ backgroundColor: 'black' }}>
        <div style={{ display: 'flex', alignItems: 'center' }}>
          <img 
            src="https://i.seadn.io/gae/mzoFMt1PjKuRV3wdudEeHB526Ce-GujYKz4DKtw3W_50xxlN93_MCxnLPlXBXwHRVN7ADXALAM2godNMYJ868t9srZzTVDplVYQoDg?auto=format&dpr=1&w=1000" 
            height={50} 
            width={50} 
            style={{ borderRadius: '50%' }} 
            alt="Thumbnail" 
          />
          <div style={{ marginLeft: '10px' }}>
            <h5 style={{ color: 'white' }}>Playlist</h5>
            <p style={{ color: 'whitesmoke' }}>Name of the Creator</p>
          </div>
        </div>
      </div>
    </div>
  );
}


