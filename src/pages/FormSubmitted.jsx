import { useNavigate } from 'react-router-dom';
import { useEffect, useState } from 'react';

export const FormSubmitted = () => {
  const navigate = useNavigate();
  const [countdown, setCountdown] = useState(() => 5);

  useEffect(() => {
    const timer = setTimeout(() => {
      navigate('/');
    }, 5000);
    return () => clearTimeout(timer);
  }, [navigate]);


  useEffect(() => {
    const timer = setInterval(() => {
      setCountdown((prevCountdown) => prevCountdown - 1);
    }, 1000);
    return () => clearInterval(timer);
  }, [countdown]);

  return (
    <div id="Form-Submited" className="Form-Wrapper py-4 py-lg-5" style={{height:'600px'}}>
        <div className="container h-100">
          <div className="row align-items-center h-100">
            <div className="col-12">
              <h1 className="text-dark text-center mb-4">Thank you for your submission!</h1>
              <h1 className="h1 text-dark text-center mb-4">Form Submit Successfully!</h1>
              <p className="p text-dark text-center">You will be <span style={{color: "#e8bd81dc" , fontWeight: "500"}}>Redirected To The Home Page</span> in {countdown} seconds.</p>
            </div>
          </div>
        </div>
    </div>

  );
};

