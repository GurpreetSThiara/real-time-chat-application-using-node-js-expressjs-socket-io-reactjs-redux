import React, { useState, lazy } from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import ProtectRoute from '../protectRoute';

const HomePage = lazy(() => import('./pages/Home'));
const AuthPage = lazy(() => import('./pages/auth/Auth'));
const ChatPage = lazy(() => import('./pages/chat/Chat'));
const GroupsPage = lazy(() => import('./pages/chat/Groups'));
const NotFound = lazy(()=> import("./pages/NotFound"))
let user = true;
const App = () => {
  return (
    <Router>
      <Routes>
        <Route element={<ProtectRoute  user={user}/>}>
          <Route path="/" element={
            <HomePage />} />
      
          <Route path="/chat/:id" element={<ChatPage />} />
          <Route path="/groups" element={<GroupsPage />} />
        </Route>

        <Route path="/auth" element={<AuthPage />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </Router>
  );
};

export default App;
