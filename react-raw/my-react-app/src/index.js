import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import Posts, { loader as postLoader } from './routes/Posts/Posts';
import { RouterProvider, createBrowserRouter } from 'react-router-dom';
import reportWebVitals from './reportWebVitals';
import NewPost, { action as postAction } from './routes/NewPost/NewPost';
import { RootLayout } from './routes/RootLayout';
import { OpenModalProvider } from './context/OpenModalContext';
import PostDetails, { loader as PostDetailLoader } from './routes/PostDetail/PostDetail';

const router = createBrowserRouter([
  {
    path: '/',
    element: <RootLayout />,
    children: [
      {
        path: '/',
        element: <Posts />,
        loader: postLoader,
        children: [
          {
            path: '/create-post',
            element: <NewPost />,
            action: postAction
          },
          {
            path: ':postId',
            loader: PostDetailLoader,
            element: <PostDetails />,
          }
        ]
      }
    ]
  },
])

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <OpenModalProvider>
      <RouterProvider router={router} />
    </OpenModalProvider>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
