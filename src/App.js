import { useState } from 'react';
import Banner from './components/Banner';
import Form from './components/Form';
import Team from './components/Team';



function App() {

  const teams = [
    {
      name: 'Programação',
      color: '#57c278',
      secondColor: '#d9f7e9'
    },    {
      name: 'Front-End',
      color: '#82CFFA',
      secondColor: '#E8F8FF'
    },    {
      name: 'Data-Science',
      color: '#A6D157',
      secondColor: '#F0F8E2'
    },    {
      name: 'Devops',
      color: '#E06B69',
      secondColor: '#FDE7E8'
    },    {
      name: 'Ux e Design',
      color: '#D86EBF',
      secondColor: '#FAE5F5'
    },    {
      name: 'Mobile',
      color: '#FEBA05',
      secondColor: '#FFF5D9'
    },    {
      name: 'Inovação e Gestão',
      color: '#FF8A29',
      secondColor: '#FFEEDF'
    },
  ]

  const [workers, setWorkers] = useState([])

  const newRegisteredWorker = (worker) => {
    console.log(worker)
    setWorkers([...workers, worker])

  }
  return (
    <div className="App">
      <Banner/>
      <Form teams ={teams.map(team => team.name)} 
      newRegisteredWorker={worker => newRegisteredWorker(worker)}/>
      {teams.map(team => <Team 
      key={team.name}
      name={team.name}
      color={team.color}
      secondColor={team.secondColor}
      workers={workers.filter(worker => worker.team === team.name)}
      />)}
    </div>
  );
}

export default App;
