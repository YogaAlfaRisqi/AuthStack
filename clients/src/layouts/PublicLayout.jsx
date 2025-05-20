import { Outlet, Link } from "react-router";

export default function PublicLayout() {
  return (
    <div>
      <header className="bg-blue-600 text-white p-4">
        <nav className="flex justify-between">
          <h1 className="text-xl font-bold">MyApp</h1>
          <div className="space-x-4">
            <Link to="/">Home</Link>
            <Link to="/about">About</Link>
            <Link to="/login">Login</Link>
          </div>
        </nav>
      </header>

      <main className="p-4">
        <Outlet />
      </main>

      <footer className="bg-gray-200 text-center p-4">© 2025 MyApp</footer>
    </div>
  );
}
