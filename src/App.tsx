import CoreConcept from "./components/CoreConcept";
import Header from "./components/Header";

import { CORE_CONCEPTS } from "./data";

function App() {
  return (
    <div>
      <Header />
      <main>
        <section id="core-concepts">
          <h2>Core Concepts</h2>
          <ul>
            {CORE_CONCEPTS.map(({ title, description, image }, index) => (
              <li key={index}>
                <CoreConcept
                  title={title}
                  description={description}
                  img={image}
                />
              </li>
            ))}
          </ul>
        </section>
      </main>
    </div>
  );
}

export default App;
