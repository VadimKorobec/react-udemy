import { useState } from "react";
import CoreConcept from "./components/CoreConcept/CoreConcept";
import Header from "./components/Header/Header";
import TabButton from "./components/TabButton/TabButton";

import { CORE_CONCEPTS, EXAMPLES } from "./data";

function App() {
  const [selectedTopic, setSelectedTopic] = useState<string>(
    "Please click a button"
  );

  const handleSelect = (selectedButton: keyof typeof EXAMPLES) => {
    setSelectedTopic(selectedButton);
  };

  const isValidTopic = selectedTopic in EXAMPLES;

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
        <section id="examples">
          <h2>Examples</h2>
          <menu>
            <TabButton
              isSelected={selectedTopic === "components"}
              onSelect={() => handleSelect("components")}
            >
              Components
            </TabButton>
            <TabButton
              isSelected={selectedTopic === "jsx"}
              onSelect={() => handleSelect("jsx")}
            >
              JSX
            </TabButton>
            <TabButton
              isSelected={selectedTopic === "props"}
              onSelect={() => handleSelect("props")}
            >
              Props
            </TabButton>
            <TabButton
              isSelected={selectedTopic === "state"}
              onSelect={() => handleSelect("state")}
            >
              State
            </TabButton>
          </menu>
          {isValidTopic ? (
            <>
              <h3>{EXAMPLES[selectedTopic as keyof typeof EXAMPLES].title}</h3>
              <p>
                {EXAMPLES[selectedTopic as keyof typeof EXAMPLES].description}
              </p>
              <pre>
                <code>
                  {EXAMPLES[selectedTopic as keyof typeof EXAMPLES].code}
                </code>
              </pre>
            </>
          ) : (
            <p>Please select a topic to see details.</p>
          )}
        </section>
      </main>
    </div>
  );
}

export default App;
