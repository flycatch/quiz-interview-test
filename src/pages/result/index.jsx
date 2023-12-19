import { Link, useLocation } from "react-router-dom";
import { useParams } from 'react-router-dom';


const Result = () => {
    const { search } = useLocation();
    const params = new URLSearchParams(search);
    const score = params.get('score');
    const total = params.get('total');
  
    return (
      <div>
        <h1>Quiz Result</h1>
        <p>Your score: {score}/{total}</p>
        <Link to='/'>Play Quiz</Link>
      </div>
    );
  };
export default Result;