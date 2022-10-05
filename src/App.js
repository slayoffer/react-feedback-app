// import { useState } from 'react';
import {
  BrowserRouter as Router,
  Route,
  Routes,
  NavLink,
} from 'react-router-dom';
// import Card from './components/shared/Card';
import Header from './components/Header';
// import FeedbackItem from './components/FeedbackItem';
import FeedbackList from './components/FeedbackList';
import FeedbackStats from './components/FeedbackStats';
import FeedbackForm from './components/FeedbackForm';
// import FeedbackData from './data/FeedbackData';
import AboutPage from './pages/AboutPage';
import { FeedbackProvider } from './context/FeedbackContext';
import AboutIconLink from './components/AboutIconLink';
// import Post from './components/Post';

function App() {
  // const [feedback, setFeedback] = useState(FeedbackData);

  return (
    <FeedbackProvider>
      <Router>
        {/* <Header bgColor="red" textColor="blue" /> */}
        <Header />
        <div className="container">
          <Routes>
            <Route
              exact
              path="/"
              element={
                <>
                  <FeedbackForm />
                  <FeedbackStats />
                  <FeedbackList />
                </>
              }
            />
            <Route path="/about" element={<AboutPage />} />
            {/* <Route path="/post/:id/:name" element={<Post />} /> */}
            {/* <Route path=" /post/*" element={<Post />} /> */}
          </Routes>
        </div>
        {/* <Card>
        <NavLink to="/" activeClassName="active">
          Home
        </NavLink>
        <NavLink to="/about" activeClassName="active">
          About
        </NavLink>
      </Card> */}
        <AboutIconLink />
      </Router>
    </FeedbackProvider>
  );

  // const title = 'Blog post';
  // const body = 'This is my blog post';
  // const comments = [
  //   { id: 1, text: 'Comment One' },
  //   { id: 2, text: 'Comment Two' },
  //   { id: 3, text: 'Comment Three' },
  // ];

  // const loading = false;
  // const showComments = true;

  // if (loading) {
  //   return <h1>Loading...</h1>;
  // }

  // const commentBlock = (
  //   <div className="comments">
  //     <h3>Comments ({comments.length})</h3>
  //     <ul>
  //       {comments.map((comment, index) => (
  //         <li key={index}>{comment.text}</li>
  //       ))}
  //     </ul>
  //   </div>
  // );

  // return (
  //   <div className="container">
  //     <h1>{title.toLowerCase()}</h1>
  //     <p>{body}</p>
  //     {showComments && commentBlock}
  //   </div>
  // );
}

export default App;
