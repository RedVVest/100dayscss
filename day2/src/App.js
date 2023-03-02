import React, {useState} from 'react';
import "./style.css"

function App() {

    const [status, setStatus] = useState(false)

    const handleClick = () => {
        setStatus(prevState => !prevState)
    }

  return (
      <div className="app">
        <div className={status ? "center active": "center inactive"} onClick={handleClick}>
            <span className="spanOne"></span>
            <span className="spanTwo"></span>
            <span className="spanThree"></span>
        </div>
      </div>
  );
}

export default App;
