import React, { Component } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';

class login extends Component {
  state={
    form:{
      username:'',
      password:''
    }
  }

  render() {
    return (
      <div>
        <div className='form-group'>
          <label>DNI:</label>
          <br />
          <input type='text' className='form-control' name='username'/>
          <br/>
          <label>Contraseña: </label>
          <br />
          <input type='password' className='form-control' name='password'/>
          <br/>
          <button className='btn btn-primary'>Iniciar Sesion</button>
        </div>
      </div>
    );
  }
}

export default login;
