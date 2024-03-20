import { useState, useEffect } from 'react';
import reactLogo from './assets/react.svg';
import viteLogo from '/vite.svg';
import './App.css';

function App() {
  const [currentTab, setCurrentTab] = useState('home');
  const [message, setMessage] = useState('');
  const [messages, setMessages] = useState([]);

  const handleMessageChange = (event) => {
    setMessage(event.target.value);
  };

  const handleSubmit = (event) => {
    event.preventDefault(); // 阻止表單默認提交行為
    if (!message.trim()) return; // 防止提交空訊息
    setMessages([...messages, message]); // 添加新訊息到訊息列表
    setMessage(''); // 清空輸入欄位
  };


  useEffect(() => {
    const handleHashChange = () => {
      const hash = window.location.hash.replace('#', '');
      setCurrentTab(hash || 'home');
    };

    window.addEventListener('hashchange', handleHashChange);

    handleHashChange();

    return () => {
      window.removeEventListener('hashchange', handleHashChange);
    };
  }, []);

  return (
    <>
      <div className="navbar">
          <a href="#home">Home</a>
          <a href="#about">About</a>
          <a href="#messages">Messages</a>
      </div>

      <div className="content" id="home" style={{ display: currentTab === 'home' ? 'block' : 'none' }}>
          <h1>歡迎頁面</h1>
          <p>歡迎來到R12921A14的首頁</p>
      </div>

      <div className="content" id="about" style={{ display: currentTab === 'about' ? 'block' : 'none' }}>
          <h1>About me</h1>
          <p>嗨！我是臺大的學生。</p>
          <p>目前就讀電機資安所碩一。</p>
          <p>這是我期中專案R12921A14的網頁。</p>
          <p>有任何問題請去留言板留言。</p>
      </div>

      <div className="content" id="messages" style={{ display: currentTab === 'messages' ? 'block' : 'none' }}>
        <h1>留言板</h1>
        <form onSubmit={handleSubmit}>
          <div>
            <input
            type="text"
            value={message}
            onChange={handleMessageChange}
            placeholder="Enter your message here..."
            />
          </div>
          <button type="submit">Post Message</button>
        </form>
        <ul>
          {messages.map((msg, index) => (
            <li key={index}>{msg}</li>
          ))}
        </ul>
      </div>
    </>
  )
}

export default App;
