import NavLinks from './NavLinks';
import H1 from './ui/H1';

const Header = () => {
  return (
    <header className="bg-gray-800 text-gray-300 py-4">
      <div className="container mx-auto text-center flex justify-between items-center">
        <H1 className="text-white m-0 text-3xl">LOGO</H1>
        <div className="*:px-2">
          <NavLinks className="hover:text-blue-300 transition-colors duration-200" />
        </div>
      </div>
    </header>
  );
};

export default Header;
