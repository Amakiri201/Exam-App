import { Link } from "react-router-dom";

export default function NotFound() {
  return (
    <>
      <h1>Oops!!! Page not Found</h1>

      <Link to="/">
        <a class="fancy" href="#">
          <span class="top-key"></span>
          <span class="text">Back To Home</span>
          <span class="bottom-key-1"></span>
          <span class="bottom-key-2"></span>
        </a>
      </Link>
    </>
  );
}
