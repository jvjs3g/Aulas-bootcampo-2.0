import React,{ useState }  from 'react';
import Header from './components/Header';

function App(){
  const [projects,setProjects ] = useState(['Back-End','Front-End']);

  function handleAddProject(){
   // projects.push(`novo Projeto ${Date.now()}`); *** isso nao respeita a imutabilidade


   setProjects([...projects,`novo Projeto ${Date.now()}`]);
    console.log(projects)
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