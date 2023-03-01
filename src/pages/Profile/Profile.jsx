import { Navigate } from 'react-router-dom';
import { useSelector } from 'react-redux';

export default function Profile() {
  const isLoggedIn = useSelector(state => state.auth.isLoggedIn);

  if (!isLoggedIn) {
    return <Navigate to="/" replace />;
  }
  return <div>Profile</div>;
}
