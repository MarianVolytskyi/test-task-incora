import  { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const LoginForm = () => {
  const navigate = useNavigate();
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  const validateForm = () => {
    if (!username || !password) {
      alert('Please fill in all fields');
      return false;
    }
    return true;
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    if (validateForm()) {

      navigate('/main');
    }
  };
  console.log('sd')
  return (
    <section className="section section-login">
      <div className="container">
      <h2 className="title">Login</h2>
        <div className='login-form is-flex is-justify-content-center'>
        
        <form onSubmit={handleSubmit}>
          <div className="field">
            <label className="label">Username</label>
            <div className="control">
              <input
                className="input"
                type="text"
                placeholder="Username"
                value={username}
                onChange={(e) => setUsername(e.target.value)}
              />
            </div>
          </div>
          <div className="field">
            <label className="label">Password</label>
            <div className="control">
              <input
                className="input"
                type="password"
                placeholder="Password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
              />
            </div>
          </div>
          <div className="field">
            <div className="control">
              <button className="button is-primary" type="submit">
                Submit
              </button>
            </div>
          </div>
        </form>
        </div>
       
      </div>
    </section>
  );
};

export default LoginForm;
