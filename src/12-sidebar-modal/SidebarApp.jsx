import React from 'react';
import Modal from './Modal';
import Sidebar from './Sidebar';
import Home from './Home';
import './SidebarApp.css';



const SidebarApp = () => {
  return (
    <>
      <Home />
      <Modal />
      <Sidebar />
    </>
  )
}

export default SidebarApp