import React from 'react';

// import PhotoListItem from './components/PhotoListItem';
import './App.scss';
import PhotoList from 'components/PhotoList';
import TopicList from 'components/TopicList';
import TopNavigation from 'components/TopNavigationBar';





// Note: Rendering a single component to build components in isolation
const App = () => {

  
  
 
  return (
    <div className="App">
     <TopNavigation/>
      {/* <TopicList/>
      <PhotoList/> */}
     
    </div>
  );
};

export default App;
