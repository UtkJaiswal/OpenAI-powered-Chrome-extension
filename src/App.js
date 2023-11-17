import React, { useEffect, useState } from 'react';
import Generator from './components/Generator';
import Profile from './components/Profile';
import { ROUTES } from './utils/routes';
import { loadData } from './utils/localStorage';

function App() {

  const [page, setPage] = useState();
  const [resume, setResume] = useState("resume defualt value")
  const [openAIKey, setOpenAIKey] = useState("key is here")

  useEffect(() => {

    const helper = async() => {
      const resume1 = await loadData("resume")
      const openAIKey1 = await loadData("openAIKey")
      setResume(resume1)
      setOpenAIKey(openAIKey1)
    }

    helper()
  
  }, [])
  

  switch (page) {
    case ROUTES.GENERATOR:
      return <Generator setPage = {setPage}/>
    
    case ROUTES.PROFILE:
      return <Profile setPage = {setPage} resume = {resume} setResume = {setResume} openAIKey = {openAIKey} setOpenAIKey = {setOpenAIKey}/>
  
    default:
      return <Generator setPage = {setPage}/>
  }
  
}

export default App;
