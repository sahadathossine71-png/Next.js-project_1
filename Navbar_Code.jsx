<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <title>Responsive Navbar</title>
    <link rel="stylesheet" href="style.css">
</head>
<body>

<nav>
    <div class="container">
        <h1>logo</h1>

        <ul class="nav-links">
            <li>Home</li>
            <li>Tools</li>
            <li>About</li>
            <li>Contact us</li>
        </ul>

        <button class="btn">Upgrade</button>

        <!-- hamburger -->
        <div class="menu">
            ☰
        </div>
    </div>
</nav>

</body>
</html>


<!-- 
"use client";

import { useState } from "react";

export default function Navbar() {
  const [open, setOpen] = useState(false);

  return (
    <nav>
      <div className="container">
        <h1 className="logo">logo</h1>

        <ul className={`nav-links ${open ? "show" : ""}`}>
          <li>Home</li>
          <li>Tools</li>
          <li>About</li>
          <li>Contact</li>
        </ul>

        <button className="btn">Upgrade</button>

        <div className="menu" onClick={() => setOpen(!open)}>
          ☰
        </div>
      </div>
    </nav>
  );
} -->
