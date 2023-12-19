import { Link } from 'react-router-dom';
import './index.css';
const Home = () => {
    return (
        <div className="home">
          <div>Welcome to Quiz</div>
          <Link to="question">
            <button>Start</button>
          </Link>
        </div>
      );
}

export default Home;