import React from "react";
import { Route, Routes } from "react-router-dom";
import SignUp from "./components/auth/SignUp";
import Login from "./components/auth/Login";
import Layout from "./pages/Layout/Layout";
import ChatPage from "./components/chat/ChatPage";
import Chatproviders from "./components/chat/components/Chatproviders";

const App = () => {
  return (
    <Layout>
      <Routes>
        <Route path="/sign-up" element={<SignUp />} />
        <Route path="/login" element={<Login />} />
        <Route path="/chat-page" element={<ChatPage />} />
        <Route path="/chat" element={<Chatproviders/>}/>
      </Routes>
    </Layout>
  );
};

export default App;
