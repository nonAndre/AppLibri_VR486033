import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { createBrowserRouter , RouterProvider} from 'react-router-dom'
import './style.css'
import HomePage from './HomePage.tsx'
import AddBookPage from './AddBookPage.tsx'
import AuthPage from './AuthPage.tsx'
import SignUp from './SignUp.tsx'
import { QueryClient, QueryClientProvider } from '@tanstack/react-query'
import ModifyBookPage from './ModifyBookPage.tsx'

const queryClient = new QueryClient();

const router = createBrowserRouter([
  {
     path: '/',
     element: <AuthPage/>,
  },
  {
     path:'/home',
     element:<HomePage/>
  },
  {
     path:'/signUp',
     element:<SignUp/>
  },
  {
    path:'/home/addBook',
    element:<AddBookPage/>
  },
  {
    path:'/home/modifyBook',
    element:<ModifyBookPage/>
  },
]);

createRoot(document.getElementById('root')!).render(
  <StrictMode>
   <QueryClientProvider client={queryClient}>
        <RouterProvider router={router}/>
    </QueryClientProvider>
  </StrictMode>,
)
