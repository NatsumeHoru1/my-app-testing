import './App.css';
import Header from './Header';
import { useState } from 'react';

function App() {
  const [answer, setAnswer] = useState('');
  const [alertType, setAlertType] = useState('');

  const handleSelect = (text, type) => {
    setAnswer(text);
    setAlertType(type);
  };
  
  const handleReset = () => {
    setAnswer('');
    setAlertType('');
  };

  return  (
    <div style={{ textAlign: 'center' }}>
      <Header title="Welcome to my website(Bootstrap 5 on React)" />

      <div className="container mt-5">
        <div className="row justify-content-center">
          <div className="col-md-6">
            <div className="card shadow-sm border-0">
              <div className="card-body text-center p-4">
                <h4 className="card-title text-primary mb-3">Welcome!</h4>
                <p className="card-text text-secondary">
                  Is this bootstrap actually worked?
                </p>

                <div className="d-flex justify-content-center gap-2 mb-3">
                  <button
                    className="btn btn-success"
                    onClick={() => handleSelect('You choose: Yes, it actually working :D!', 'success')}>
                  Yes
                  </button>
                  <button
                    className="btn btn-danger"
                    onClick={() => handleSelect('You choose: No, may be something need to fix ;-;!', 'danger')}>
                  No
                  </button>
                  {answer && (
                    <div className={`alert alert-${alertType} border-0 shadow-sm mt-3`} role="alert">
                      <p className="mb-2">{answer}</p>
                      <button
                        className="btn btn-sm btn-outline-dark"
                        onClick={handleReset}
                      >
                        Undo
                      </button>
                    </div>                         
                  )}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>  
    </div>
  );
}

export default App;