import "./App.css";
import {Button} from './components/Button';

function App() {


  return (
    <div className="App">
      <section class="hero">
        <div class="hero-body">
          <p class="title">A React Task</p>
          <p class="subtitle">by Boom.dev</p>
        </div>
      </section>
      <div class="container is-fullhd">
        <div class="notification">
          Edit the <code>./src</code> folder to add components.
          <p>Find what are you looking for</p>
          <img src="images/illustrations/meditating-woman.png" alt="woman"/>
          
        </div>
          <Button variant="contained" color="transparent" border="1px solid #FFFFFF" >
            Skip
          </Button>
      </div>
    </div>
  );
}

export default App;
