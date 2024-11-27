import PropTypes from 'prop-types';


export function Card({image, iframe, stack, title, description, links, id}){

console.log(links)
return( <>
<div className="card">

<div className="card-img-container">
  { iframe ? <iframe src={iframe} id={`card-iframe-${id}`} width="100%" height="100%"  scrolling="no"></iframe> : <img src={image} alt="Example of a fullstack web project completed"/> }

</div>

<div className="card-body">
    <div className="card-stack">{stack}</div>
    
    <div className="card-links-container">
        <a href ="#projects" className="card-title">{title}</a>
        <p>{description}</p>

        {links.map( (link, index) => {
            return <a className="card-links" key = {index} href = {link.href} target="_blank" >  {link.label} {">>"} </a>
        })}
    </div>

</div>

</div>

</>
)
}



Card.propTypes = {
    image: PropTypes.string.isRequired, // URL de l'image
    stack: PropTypes.string.isRequired, 
    title: PropTypes.string.isRequired, // URL de l'image
    description: PropTypes.string.isRequired, 
    links: PropTypes.arrayOf(
        PropTypes.shape({
            href: PropTypes.string.isRequired, // URL du lien
            label: PropTypes.string.isRequired, // Texte du lien
        })
    ).isRequired,
};
