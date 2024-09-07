import React, { lazy, Suspense, useState, useEffect }  from "react";
import ReactDOM from "react-dom/client";

import "./index.css";


const UsersTestControl = lazy(() => import('users/UsersTestControl').catch(() => {
 return { default: () => <div className='error'>Component is not available!</div> };
})
);

const CardsTestControl = lazy(() => import('cards/CardsTestControl').catch(() => {
  return { default: () => <div className='error'>Component is not available!</div> };
})
);

const App = () => (
    <div className="container">
     <UsersTestControl></UsersTestControl>
     <CardsTestControl></CardsTestControl>
    </div>
);
const rootElement = document.getElementById("app")
if (!rootElement) throw new Error("Failed to find the root element")

const root = ReactDOM.createRoot(rootElement)

root.render(<App />)