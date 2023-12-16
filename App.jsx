import React from 'react';
import { Link } from 'react-router-dom';
import { Giris, ProjectList, SosyalMedyaButton} from './components/MainPageInfo';  
import "./App.css"


function App() {
//const mapProject=Project.map((Project,i)=><li key={i}>{Project}</li>)
const pageStyle = { backgroundColor: '#ECCCCE'}
  return(
    <><div style={pageStyle}>
      <hr />
      <Giris />
      <hr />
      <ProjectList />
      <hr />
      <SosyalMedyaButton/>  
      </div>
    </>   
  ) 
}
export default App
