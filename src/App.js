import React, { useState} from 'react';
import RenderData from './component/RenderData';
import './App.css';

function App() {

let [ activeTab , SetactiveTab ] = useState("");

const handleTabClick = (tabname) =>{
  if(tabname===activeTab)
  {
    SetactiveTab("");
  }
  else{
  SetactiveTab(tabname);
  }
}



  return (
   <>
   <div className='navbar'>
    <button
    className={activeTab === 'Love' ? "active":""}
    onClick={()=>handleTabClick("Love")}>
      <i className='bn31'><span className='bn31span'>Love</span></i>
    </button>
    <button
    className={activeTab === 'Wisdom' ? "active":""}
    onClick={()=>handleTabClick("Wisdom")}>
      <i className='bn31'><span className='bn31span'>Wisdom</span></i>
    </button>
    <button
    className={activeTab === 'Motivation' ? "active":""}
    onClick={()=>handleTabClick("Motivation")}>
      <i className='bn31'><span className='bn31span'>Motivation</span></i>
    </button>
    <button
    className={activeTab === 'Philosophy' ? "active":""}
    onClick={()=>handleTabClick("Philosophy")}>
      <i className='bn31'><span className='bn31span'>Philosophy</span></i>
    </button>
    <button
    className={activeTab === 'Hate' ? "active":""}
    onClick={()=>handleTabClick("Hate")}>
      <i className='bn31'><span className='bn31span'>Hate</span></i>
    </button>
   </div>

   {activeTab === "Love" && <RenderData  text="Love"/>}
   {activeTab === "Wisdom" && <RenderData text="Wisdom"/>}
   {activeTab === "Motivation" && <RenderData text="motivational"/>}
   {activeTab === "Philosophy" && <RenderData text="Philosophy"/>}
   {activeTab === "Hate" && <RenderData text="Hate"/>}
   {activeTab === "" && <RenderData text=""/>}


   </>
  );
}

export default App;
