import Header from "./components/Header/Header";
import CoreConceptsList from "./components/CoreConceptsList/CoreConceptsList";
import Examples from "./components/Examples/Examples";

function App() {
  return (
    <div>
      <Header />
      <main>
        <CoreConceptsList />
        <Examples />
      </main>
    </div>
  );
}

export default App;
