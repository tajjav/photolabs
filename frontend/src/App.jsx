import React from 'react';

// import PhotoListItem from './components/PhotoListItem';
import './App.scss';
import PhotoList from 'components/PhotoList';
import TopicList from 'components/TopicList';





// Note: Rendering a single component to build components in isolation
const App = () => {

  
  
 
  return (
    <div className="App">
      {/* <PhotoList/> */}
      {/* <TopicListItem/> */}
      <TopicList/>
     
    </div>
  );
};

export default App;
