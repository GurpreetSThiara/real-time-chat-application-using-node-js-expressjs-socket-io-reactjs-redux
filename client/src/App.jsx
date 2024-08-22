import React, { useState, lazy, Suspense, useEffect } from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import ProtectRoute from '../protectRoute';
import { HelmetProvider } from 'react-helmet-async';
import { LayoutLoader } from './components/Loaders';
import { useGetProfileQuery } from './redux/api/userSlice';
import { useSelector } from 'react-redux';
import { Toaster } from 'react-hot-toast';

const HomePage = lazy(() => import('./pages/Home'));
const AuthPage = lazy(() => import('./pages/auth/Auth'));
const ChatPage = lazy(() => import('./pages/chat/Chat'));
const GroupsPage = lazy(() => import('./pages/chat/Groups'));
const NotFound = lazy(()=> import("./pages/NotFound"))
const AdminLogin = lazy(()=> import("./admin/pages/AdminLogin"))
//let user = true;
const App = () => {
  const { data, isLoading, error } = useGetProfileQuery()
  const {user} = useSelector(state => state.auth)
  if(isLoading) return <LayoutLoader />
  if(!isLoading){
    console.log("User data", data)
    //user = true;
  }

  if(error){
    console.log(error)
  }
 

  
  return (
<>
<Suspense fallback={<LayoutLoader/>}>
      <HelmetProvider>
     <Router>
      <Routes>
        <Route element={<ProtectRoute  user={user}/>}>
          <Route path="/" element={
            <HomePage />} />
      
          <Route path="/chat/:id" element={<ChatPage />} />
          <Route path="/groups" element={<GroupsPage />} />
        </Route>

        <Route path="/auth" element={<AuthPage />} />
        <Route path='/admin' element={<AdminLogin/>}/>

        <Route path="*" element={<NotFound />} />
      </Routes>
    </Router>
   </HelmetProvider>
  </Suspense>
  <Toaster position='top-right' />
</>
  );
};

export default App;
