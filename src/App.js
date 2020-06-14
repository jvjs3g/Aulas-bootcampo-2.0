import React,{ useState, useEffect }  from 'react';
import Header from './components/Header';
import './App.css';
import api from './services/api';

function App(){
  const [projects,setProjects ] = useState(['teste','teste']);

  useEffect(() =>{
    api.get('projects').then(response =>{
      setProjects(response.data);
    })
  });

  async function handleAddProject(){
   // projects.push(`novo Projeto ${Date.now()}`); *** isso nao respeita a imutabilidade

   const response = await api.post('projects',{
     title:'novo Projeto ${Date.now()}',
     owner:'Diego fernandes'
   });

   const project = response.data;

   setProjects([...projects,project]);
  }
  return (
    <>
    <Header title="Projects"/>
      <ul>
        {projects.map(project => <li key={project}>{project}</li>)}
      </ul>
      <button type="button" onClick={handleAddProject}>Adicionar projeto</button>
    </>
  );
}

export default App;