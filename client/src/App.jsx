import React, { useState, lazy, Suspense, useEffect } from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import ProtectRoute from '../protectRoute';
import { HelmetProvider } from 'react-helmet-async';
import { LayoutLoader } from './components/Loaders';
import { useGetProfileQuery } from './redux/api/userSlice';
import { useDispatch, useSelector } from 'react-redux';
import { Toaster } from 'react-hot-toast';
import axios from 'axios';
import { reduxLogin } from './redux/reducers/auth';

const HomePage = lazy(() => import('./pages/Home'));
const AuthPage = lazy(() => import('./pages/auth/Auth'));
const ChatPage = lazy(() => import('./pages/chat/Chat'));
const GroupsPage = lazy(() => import('./pages/chat/Groups'));
const NotFound = lazy(() => import("./pages/NotFound"))
const AdminLogin = lazy(() => import("./admin/pages/AdminLogin"))

const App = () => {
  const [isFetching, setIsFetching] = useState(true);

  const user = useSelector((state) => state.auth.user);
  console.log("user")
  console.log(user)
  console.log("user")
  const dispatch = useDispatch();

  useEffect(() => {
    const fetchProfile = async () => {
      try {
        console.log("fetch profile runs");
        const res = await axios.get('http://localhost:3001/api/v1/user/me',{ withCredentials: true });
        console.log(res.data);
        dispatch(reduxLogin(res.data.user))
        // You can set the profile data here if needed
        setIsFetching(false);
      } catch (err) {
        console.error("Error fetching profile:", err);
        setIsFetching(false);
      }
    };
    fetchProfile();
  }, []);

  if (isFetching) {
    return <LayoutLoader />;
  }


  return (
    <>
      <Suspense fallback={<LayoutLoader />}>
        <HelmetProvider>
          {!isFetching && (
            <Router>
              <Routes>
                <Route element={<ProtectRoute user={user} />}>
                  <Route path="/" element={<HomePage />} />
                  <Route path="/chat/:id" element={<ChatPage />} />
                  <Route path="/groups" element={<GroupsPage />} />
                </Route>
                <Route path="/auth" element={<AuthPage />} />
                <Route path='/admin' element={<AdminLogin />} />
                <Route path="*" element={<NotFound />} />
              </Routes>
            </Router>
          )}
        </HelmetProvider>
      </Suspense>
      <Toaster position='top-right' />
    </>
  );
};

export default App;
