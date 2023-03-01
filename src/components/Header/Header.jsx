import { useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import { signOut } from 'firebase/auth';
import { auth } from 'firebase.js';
import { removeUser } from 'redux/auth/slice';

export default function Header() {
  const dispatch = useDispatch();
  const isLoggedIn = useSelector(state => state.auth.isLoggedIn);

  const singout = () => {
    signOut(auth)
      .then(() => {
        dispatch(removeUser());
      })
      .catch(err => alert(err));
  };

  return (
    <div>
      Header
      {isLoggedIn ? (
        <button onClick={singout}>Sign out</button>
      ) : (
        <Link to="/signin">Sign In</Link>
      )}
    </div>
  );
}
