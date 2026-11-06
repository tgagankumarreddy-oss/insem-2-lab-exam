import React from "react";
import { BrowserRouter, Routes, Route, Link } from "react-router-dom";

function Home() {
  return (
    <div>
      <h2>
        Home Page - Welcome!
        </h2>
      <p>
        Welcome to the home page of our React application. This is a simple
        example demonstrating routing using React Router.
      </p>
    </div>
  );
}

function Courses() {
  return (
    <div>
      <h3>
        Courses Page
        </h3>
      <ol>
        <li>
            CSE
        </li>
        <li>
            ECE
        </li>
        <li>
            EEE
        </li>
        <li>
            Mechanical
        </li>
        <li>
            Fluid Mechanics
        </li>
        <li>
            LLB
        </li>
        <li>
            BBA
        </li>
      </ol>
    </div>
  );
}

function NotFound() {
  return (
    <div>
      <h2>
        404 - Page Not Found
    </h2>
      <Link to="/">
      Return to Home Page
      </Link>
    </div>
  );
}

export default function App() {
  return (
    <BrowserRouter>
      <div>
        <h2>React Router Example</h2>

        <nav>
          <Link to="/">Home</Link>
      <br/>
          <Link to="/courses">Courses</Link>
        <br/>
          <Link to="/broken-url-123">Wrong URL</Link>
        </nav>

        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/courses" element={<Courses />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </div>
    </BrowserRouter>
  );
}