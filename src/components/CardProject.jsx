export function CardProject({ title, text, stack, links }) {
  return (
    <>
      <div className="project-card">
        
        <div className="project-description">
          <p className="project-description-title">{title}</p>
          <p className="project-description-text">{text}</p>
        </div>

        <div className="project-card-body">
          <p>{stack}</p>
          <div className="project-card-links">
            {links.map((link, index) => {
              return (
                <a key={`project-${index}`} href={link.href} target="_blank" rel="noopener noreferrer">
                  {" "}
                  {link.label} {">>"}{" "}
                </a>
              );
            })}
          </div>
        </div>

      </div>
    </>
  );
}
