function Searchbar() {
  return (
    <div className="parent">
      <div className="div1">
        <input className="SearchBar" placeholder="Search"></input>
      </div>
      <div className="div2 parentt">
          <div className='div1t'>
              <h4>
              Mateo Cordoba
              </h4>
              <p>Investor - Cordoba Ventures</p>
            
          </div>

        <img className = "Profilepic" src={require('./images/Cordabo.png')} />
      </div>
    </div>
  );
}

export default Searchbar;
