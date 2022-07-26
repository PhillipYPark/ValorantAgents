import React from 'react';
import './App.css';
import Header from './Components/Header/Header';
import Agent from './Components/Agent/Agent';
import Modal from './Components/Modal/Modal';
import Carousel from './Components/Swiper/Carousel';
import { Swiper, SwiperSlide } from "swiper/react";

function App() {
  const [valorantAgents, setValorantAgents] = React.useState({});
  const [openModal, setModal] = React.useState(false);
  const [agent, setAgent] = React.useState({});
  const [title, setTitle] = React.useState("");
  const [swiper, setSwiper] = React.useState();
  // Fetchs Agent List
  React.useEffect(() => {
    fetch('https://valorant-api.com/v1/agents/?isPlayableCharacter=true')
    .then(res => res.json())
    .then(data => setValorantAgents(data))
  }, [])
  console.log(valorantAgents)

  // const setModalData = (modalData, agentData) => {
  //   setModal(modalData);
  //   setAgent(agentData)
  // }


  React.useEffect(() => {
    // setSwiper(document.querySelector("mySwiper").swiper)
  })



  return (
    <div className="App">
      <Header />
      <h1></h1>
      <Carousel agentList={valorantAgents} setName={setTitle} />
      {/* {openModal && <Modal setModal={setModal} currentAgent={agent} />} */}
      {/* <div className='agent--list'>
        {agents}
      </div> */}
    </div>
  );
}

export default App;
