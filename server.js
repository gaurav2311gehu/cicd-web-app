const express = require('express');
const path = require('path');

const app = express();
const PORT = 3000;

// Middleware
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// Serve static files (frontend)
app.use(express.static(path.join(__dirname, 'public')));

// API route for contact form
app.post('/api/contact', (req, res) => {
  const { name, email, message } = req.body;

  console.log('New Contact Form Submission:');
  console.log({ name, email, message });

  // In production → save to DB or send email
  res.json({ success: true, message: 'Message received!' });
});

// Health check
app.get('/health', (req, res) => {
  res.json({ status: 'OK' });
});

app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});