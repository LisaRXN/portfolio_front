import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';


export function Card({image, iframe, stack, title, description, links, id}){

console.log(links)
return( <>
<div className="card">


  { iframe ? <Link to="/projects" className="card-ifram-container"><iframe src={iframe} id={`card-iframe-${id}`} width="100%" height="100%"  scrolling="no"></iframe></Link> : <Link to="/projects"  className="card-img-container"><img src={image} alt="Example of a fullstack web project completed"/></Link> }



<div className="card-body">
    <div className="card-stack">{stack}</div>
    
    <div className="card-links-container">
        {/* <a href ="#projects" className="card-title">{title}</a> */}
        <div>
        <Link to="/projects" className="card-title">{title}</Link>
        <p>{description}</p>
        </div>
        <div className='card-container-links'>
        {links.map( (link, index) => {
            return <a className="card-links" key = {index} href = {link.href} target="_blank" >  {link.label} {">>"} </a>
        })}
        </div>
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
