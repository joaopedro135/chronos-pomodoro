import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'

import App from: './App';

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <App />
      <div>
        <h1>Olá mundo!</h1>
        <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Sit minima dicta, culpa maiores fugit deserunt iste labore tempora necessitatibus qui facilis ipsum itaque aut quos repudiandae nostrum libero ut aliquam?</p>
      </div>
  </StrictMode>,
)
