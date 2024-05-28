const Navbar = () => {
  return ( 
    <nav className="navbar">
      <div className="flex flex-row">
        <h1 className="text-6xl py-4 basis-1/2">Shoeyy</h1>
        <div className="links py-4 mt-1 basis-1/4">
          <a className="px-2" href="/">Home</a>
          <a className="px-2" href="/create">Create</a>
        </div>
      </div>
      
    </nav>
  );
}
 
export default Navbar;