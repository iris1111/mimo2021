import React, { useEffect, useState } from "react";
import "./App.css";

function App() {
  return (
    <div className="App">
      <a href="/newbie">Страница нового сотрудника</a>
      <a href="/mentor">Страница наставника</a>
      <a href="/leader">Страница руководителя</a>
      <a href="#">Скринкаст</a>
    </div>
  );
}

export default App;
