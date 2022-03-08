import React, {useState} from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { loginUser, logoutUser } from '../Store/AuthReducer/action';

export const Login = () => {

    const [data, setData] = useState({});

    const {loading, error, isLoggedIn} = useSelector(state => state.auth);

    const dispatch = useDispatch();

    const handelSubmit = (e) => {
        e.preventDefault();
        console.log(data);
        dispatch(loginUser(data));
    }

    const handelChange = (e) => {
        
        const {name, value} = e.currentTarget;
        setData({
            ...data,
            [name] : value
        });


    };

  return (
    <div>
        Email: eve.holt@reqres.in
        Password: cityslicka

        {
            isLoggedIn ? <button onClick={() => dispatch(logoutUser())} >Logout</button> :
        
        <form onSubmit={handelSubmit}>
            <input onChange={handelChange} type="email" placeholder="Enter Email" name='email' />
            <input onChange={handelChange} type="password" placeholder="Enter Password" name='password'/>
            <input type="submit" value={ loading ? "Loading..." : "LOGIN" } />
            {
                error && <p>Wrong Credentials</p>
            }
        </form>
        
        }
    </div>
  )
}
