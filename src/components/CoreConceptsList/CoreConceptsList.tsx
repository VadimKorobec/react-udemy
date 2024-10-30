import CoreConcept from "../CoreConcept/CoreConcept";

import { CORE_CONCEPTS } from "../../data";

function CoreConceptsList() {
  return (
    <section id="core-concepts">
      <h2>Core Concepts</h2>
      <ul>
        {CORE_CONCEPTS.map(({ title, description, image }, index) => (
          <li key={index}>
            <CoreConcept title={title} description={description} img={image} />
          </li>
        ))}
      </ul>
    </section>
  );
}

export default CoreConceptsList;
