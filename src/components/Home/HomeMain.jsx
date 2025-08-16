
import Navbar from '../Navbar/Navbar.jsx';
import HomeOne from './HomeOne.jsx';


const HomeMain = () => {
  return (
    <div className="relative">
      <div className={`transition-all duration-300 `}>
        <Navbar />
        <HomeOne />
      </div>
    </div>
  );
};

export default HomeMain;
