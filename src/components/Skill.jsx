export function Skill({ title, text }) {
  return (
    <>
      <div className="skill-card">
        <div className="skill-card-title">{title}</div>
        <div className="skill-card-text">{text}</div>
      </div>
    </>
  );
}
