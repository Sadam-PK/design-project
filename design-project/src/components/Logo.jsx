import { Link } from "react-router-dom";

export default function Logo() {
  return (
    <div className="py-10 text-3xl font-extrabold text-white font-fatface">
      <Link to="/design-project/">
        <h1>Hepta</h1>
      </Link>
    </div>
  );
}
