import { useState } from 'react';
import Form from './components/Form';
import Team from './components/Team';



function App() {

  const teams = [
    {
      name: 'OP',
      color: '#FF0000',
      secondColor: '#FF7D7D'
    },    {
      name: 'Muito bom',
      color: '#FF5900',
      secondColor: '#FFA270'
    },    {
      name: 'Bom',
      color: '#ECFF00',
      secondColor: '#F4FF6D'
    },    {
      name: 'Ruim',
      color: '#8E8E8E',
      secondColor: '#4E4E4E'
    },    {
      name: 'Muito Ruim',
      color: '#4B2300',
      secondColor: '#4E3D2E'
    },    {
      name: 'Porque?',
      color: '#00FF42',
      secondColor: '#B5FFC8'
    }
  ]

  const [tiers, setTiers] = useState([])

  const newRegisteredTier = (tier) => {
    setTiers([...tiers, tier])

  }
  return (
    <div className="App">
    <Form teams ={teams.map(team => team.name)} 
      newRegisteredTier={tier => newRegisteredTier(tier)}/>
      {teams.map((team) => <Team 
      key={team.name}
      name={team.name}
      color={team.color}
      secondColor={team.secondColor}
      tiers={tiers.filter(tier => tier.team === team.name)}
      />)}
    </div>
  );
}

export default App;
