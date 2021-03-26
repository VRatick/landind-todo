import React, {useState} from 'react'
import AddForm from './root/components/AddForm';
import List from './root/components/List';
import Done from './root/components/Done';
import InProgress from './root/components/InProgress';
import Abandon from './root/components/Abandon';
import './root/styles/app.css';
import { store } from './root/redux/store' 

const App = (props) => {
  const [task, setTask] = useState('')
  const [list, setList] = useState(props.list)
  const [inProgress, setInProgress] = useState(props.inProgress)
  const [abandon, setAbandon] = useState(props.abandon)
  const [done, setDone] = useState(props.done)    

  store.subscribe( () => {
    setList([...props.list])
    setInProgress([...props.inProgress])
    setDone([...props.done])
    setAbandon([...props.abandon])
  })

  return (
    <div className='todo-container'>
      <AddForm 
        addToList={props.addToList}
        task={task}
        setTask={setTask}        
        list={list}        
      />
      <List 
        removeFromList={props.removeFromList}
        addToInProgress={props.addToInProgress}
        inProgress={inProgress}        
        list={list}        
      />
      <InProgress 
        addToAbandon={props.addToAbandon}
        addToDone={props.addToDone}
        done={done}        
        abandon={abandon}        
        inProgress={inProgress}        
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
