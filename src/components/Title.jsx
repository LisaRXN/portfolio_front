import { useNavigate } from 'react-router-dom';

export function Title({title, all}) {

  const href = title.split('-')[0]

  const navigate = useNavigate(); 




  return (
    <>
      <div className="titles">
        <div className="titles-container">
          <div>
            <h2><span>#</span>{title}{" "}</h2>
          </div>
          <hr></hr>
        </div>
        {all ?  <a onClick={() => navigate(`/${href}`)} className="titles-all"> :: View all ::</a> :""} 
      </div>
    </>
  );
}
