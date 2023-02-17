import Card from './card/card';
import Header from './header/header';
import Title from './title/title';



function App() {
  return (
    <div className="App">
       <Header/>
       <Title/>
       <div className='card'>
        <Card/>

       </div>
      
    </div>
  );
}

export default App;
