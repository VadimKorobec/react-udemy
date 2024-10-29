import "./CoreConcept.css";

interface CoreConceptProps {
  title: string;
  description: string;
  img: string;
}

function CoreConcept({ title, description, img }: CoreConceptProps) {
  return (
    <div>
      <img src={img} alt={title} />
      <h3>{title}</h3>
      <p>{description}</p>
    </div>
  );
}

export default CoreConcept;
