import React, { useState  , useEffect} from 'react';
import { AppLayout } from "./layout/AppLayout";
function App() {
  const [isLoading, setIsLoading] = useState(true);
  useEffect(() => {
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 3000);

    return () => clearTimeout(timer);
 }, []);
  return (
    <div> 
      {isLoading ? (
        <div className='loader-container'>
          <div className="spinner-box">
          <div className="blue-orbit leo">
          </div>

          <div className="green-orbit leo">
          </div>
          
          <div className="red-orbit leo">
          </div>
          
          <div className="white-orbit w1 leo">
          </div><div className="white-orbit w2 leo">
          </div><div className="white-orbit w3 leo">
          </div>
        </div>
        </div>
      ) : (
        <AppLayout />
      )}
    </div>
  );
}

export default App;
