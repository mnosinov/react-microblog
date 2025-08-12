import Container from 'react-bootstrap/Container';
import Stack from 'react-bootstrap/Stack';
import Header from './components/Hearder';
import Sidebar from './components/Sidebar'
import Posts from './components/Posts';
import Body from './components/Body';
import FeedPage from './pages/FeedPage';
import ExplorePage from './pages/ExplorePage';
import LoginPage from './pages/LoginPage';
import UserPage from './pages/UserPage';
import { BrowserRouter, Navigate, Route, Routes } from 'react-router-dom';

export default function App() {

  return (
    <Container fluid className="App">
      <BrowserRouter>
        <Header />
        <Routes>
          <Route path="/" element={<FeedPage />} />
          <Route path="/explore" element={<ExplorePage />} />
          <Route path="/user/:username" element={<UserPage />} />
          <Route path="/login" element={<LoginPage />} />
          <Route path="*" element={<Navigate to="/" />} />
        </Routes>
      </BrowserRouter>
    </Container>
  );
}