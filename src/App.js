import { useState } from 'react';
import Banner from './components/Banner';
import Form from './components/Form';



function App() {

  const [workers, setWorkers] = useState([])

  const newRegisteredWorker = (worker) => {
    console.log(worker)
    setWorkers([...workers, worker])

  }
  return (
    <div className="App">
      <Banner/>
      <Form forTheWorkerRegistered={worker => newRegisteredWorker(worker)}/>
    </div>
  );
}

export default App;
