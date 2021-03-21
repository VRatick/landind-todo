import AddForm from './scr/components/AddForm';
import List from './scr/components/List';
import Done from './scr/components/Done';
import InProgress from './scr/components/InProgress';
import Abandon from './scr/components/Abandon';
import '.src/styles/app.css';

function App(props) {
  return (
    <AddForm 
      addToList={addToList}
    />
    <List 
      removeFromList={removeFromList}
      addToInProgress={addToInProgress}
      list={list}
    />
    <InProgress 
      addToAbandon={addToAbandon}
      addToDone={addToDone}
      inProgress={inProgress}
    />
    <Abandon 
      abandon={abandon}
    />
    <Done 
      done={done}
    />    
  );
}

export default App;
