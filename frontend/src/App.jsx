import React from 'react';

// import PhotoListItem from './components/PhotoListItem';
import './App.scss';
import PhotoList from 'components/PhotoList';
import TopicList from 'components/TopicList';
import TopNavigation from 'components/TopNavigationBar';
import HomeRoute from 'routes/HomeRoute';





// Note: Rendering a single component to build components in isolation
const App = () => {

  
  
 
  return (
    <div className="App">
     {/* <TopNavigation/> */}
      <HomeRoute/>
     
    </div>
  );
};

export default App;
