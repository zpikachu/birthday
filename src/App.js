// import Cake from "./components/Cake";
import Land from "./components/Land";
import Moon from "./components/Moon";
import BirthdayMsg from "./components/BirthdayMsg";
import Stars from "./components/Star";
function App() {
  return (
    <div className="App">
      <BirthdayMsg/>
      <Moon/>
      {/* <Cake/> */}
      <Land/>
      <Stars/>
    </div>
  );
}

export default App;
