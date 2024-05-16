export const Navbar: React.FunctionComponent = () => {
  return (
    <nav className="w-full absolute left-0 top-0 p-8">
      <ul className="w-full flex gap-4">
        <li>
          <a href="/">Home</a>
        </li>
        <li>
          <a href="/collections">Collections</a>
        </li>
        <li>
          <a href="/users">Users</a>
        </li>
      </ul>
    </nav>
  );
};
