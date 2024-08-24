import "./Header.css";
const Header = () => {
  return (
    <>
      <div className="header">
        <div className="logo">School Dashboard</div>
        <div className="search-widget">
          <input type="text" placeholder="search a widget" />
        </div>
      </div>
    </>
  );
};
export default Header;
