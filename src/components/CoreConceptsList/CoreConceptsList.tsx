import CoreConcept from "../CoreConcept/CoreConcept";
import Section from "../Section/Section";

import { CORE_CONCEPTS } from "../../data";

function CoreConceptsList() {
  return (
    <Section id="core-concepts" title="Core Concepts">
      <ul>
        {CORE_CONCEPTS.map(({ title, description, image }, index) => (
          <li key={index}>
            <CoreConcept title={title} description={description} img={image} />
          </li>
        ))}
      </ul>
    </Section>
  );
}

export default CoreConceptsList;
