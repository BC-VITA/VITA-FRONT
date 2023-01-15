import React from "react";
import {Link} from 'react-router-dom'

const Header = () => {
  return (
      <nav class="navbar navbar-expand-lg navbar-light bg-light">
        <Link class="navbar-brand" href="/home">헌혈하러 갈래?</Link>
        <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
          <span class="navbar-toggler-icon"></span>
        </button>
        <div class="collapse navbar-collapse" id="navbarNav">
          <ul class="navbar-nav">
            <li class="nav-item">
              <Link class="nav-link" href="/know">알아보자</Link>
            </li>
            <li class="nav-item">
              <Link class="nav-link" href="/blood">헌혈하자</Link>
            </li>
            <li class="nav-item">
              <Link class="nav-link" href="/talk">이야기하자</Link>
            </li>
            <li class="nav-item">
              <Link class="nav-link" href="/help">봉사</Link>
            </li>
            <li class="nav-item">
              <Link class="nav-link disabled" href="#" tabindex="-1" aria-disabled="true">Disabled</Link>
            </li>
        </ul>
      </div>
  </nav>
  );
};

export default Header