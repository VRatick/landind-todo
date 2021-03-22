import React, {useState} from 'react'
import AddForm from './src/components/AddForm';
import List from './src/components/List';
import Done from './src/components/Done';
import InProgress from './src/components/InProgress';
import Abandon from './src/components/Abandon';
import './src/styles/app.css';

const App = (props) => {
  const [work, setWork] = useState('')
  const [list, setList] = useState(props.list)
  const [inProgress, setInProgress] = useState(props.inProgress)
  const [abandon, setAbandon] = useState(props.abandon)
  const [done, setDone] = useState(props.done)  

  return (
    <div className='todo-container'>
      <AddForm 
        addToList={props.addToList}
        work={work}
        setWork={setWork}        
        list={list}
        setList={setList}
      />
      <List 
        removeFromList={props.removeFromList}
        addToInProgress={props.addToInProgress}
        inProgress={inProgress}
        setInProgress={setInProgress}
        list={list}
        setList={setList}
      />
      <InProgress 
        addToAbandon={props.addToAbandon}
        addToDone={props.addToDone}
        done={done}
        setDone={setDone}
        abandon={abandon}
        setAbandon={setAbandon}
        inProgress={inProgress}
        setInProgress={setInProgress}
      />
      <Abandon 
        abandon={abandon}
      />
      <Done 
        done={done}
      />    
    </div>
  );
}

export default App;
