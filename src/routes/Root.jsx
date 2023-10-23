import { Link, useNavigate } from "react-router-dom";
import ErrorTest from "../ErrorTest";
import { ErrorBoundary } from "react-error-boundary";
import ErrorBoundaryText from "./ErrorboundaryTest";

export default function Root() {
  const navigate = useNavigate();
  return (
    <>
      <ErrorBoundary fallback={<ErrorBoundaryText />}>
        <h1>Jungle View...</h1>

        <button className="btn" onClick={() => navigate("/counter")}>
          <div>Counter App</div>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="25px"
            height="25px"
            viewBox="0 0 24 24"
            fill="none"
          >
            <path
              d="M11.6801 14.62L14.2401 12.06L11.6801 9.5"
              stroke="black"
              stroke-width="2"
              stroke-miterlimit="10"
              stroke-linecap="round"
              stroke-linejoin="round"
            ></path>
            <path
              d="M4 12.0601H14.17"
              stroke="black"
              stroke-width="2"
              stroke-miterlimit="10"
              stroke-linecap="round"
              stroke-linejoin="round"
            ></path>
            <path
              d="M12 4C16.42 4 20 7 20 12C20 17 16.42 20 12 20"
              stroke="black"
              stroke-width="2"
              stroke-miterlimit="10"
              stroke-linecap="round"
              stroke-linejoin="round"
            ></path>
          </svg>
        </button>
        <ErrorTest />
        <p>
          You can also check out our 404 page by clicking on this link that
          directs you to an invalid path 404 Page
        </p>

        <Link to="djklsnkldnklsjnkljd"> Try out the 404 Page</Link>
      </ErrorBoundary>
    </>
  );
}
