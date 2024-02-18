import logo from './logo.svg';
import './App.css';
import RecipeList from './RecipeList';
// import Button from './Button'; // A default import
import {PlayButton,UploadButton} from './Button';
import Greeting from './Greeting';
import SculptGallery from './SculptGallery';
import Counter from './Counter';

function App() {

  return (
    <div className="App">
      <h1>hello</h1>
      <h2> React is hard </h2>
      <RecipeList className="left" />
      <div className='breakers'> <h2>Componentization trials</h2></div>
      <PlayButton movieName={"JJK"}/>
      <UploadButton/>
      <div className='breakers'> <h2>Learning useState</h2></div>
      <Greeting/>
      <div className='breakers'></div>
      <SculptGallery/>
      <div className='breakers'>Counter</div>
      <Counter/>


    </div>
  );
}

export default App;
