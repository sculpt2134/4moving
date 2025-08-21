const express = require('express');
const cors = require('cors');
const path = require('path');
require('dotenv').config();

const app = express();
const PORT = process.env.PORT || 5000;

// 미들웨어
app.use(cors());
app.use(express.json());
app.use(express.static(path.join(__dirname, 'client/build')));

// API 라우트
app.get('/api/hello', (req, res) => {
  res.json({ message: 'Hello from Node.js backend!' });
});

app.get('/api/status', (req, res) => {
  res.json({ 
    status: 'running', 
    timestamp: new Date().toISOString(),
    environment: process.env.NODE_ENV || 'development'
  });
});

// React 앱을 위한 catch-all 핸들러
app.get('*', (req, res) => {
  res.sendFile(path.join(__dirname, 'client/build', 'index.html'));
});

app.listen(PORT, () => {
  console.log(`🚀 Server is running on port ${PORT}`);
  console.log(`📱 Frontend will be available at http://localhost:${PORT}`);
  console.log(`🔧 API endpoints available at http://localhost:${PORT}/api`);
});


