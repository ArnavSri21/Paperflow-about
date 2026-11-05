import express from 'express';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const app = express();
const PORT = process.env.PORT || 3000;
const HOST = '0.0.0.0';

// Serve static files from the root directory
app.use(express.static(__dirname));

// Route handlers for entry points
app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, 'about.html'));
});

app.get('/about', (req, res) => {
  res.sendFile(path.join(__dirname, 'about.html'));
});

// Fallback for any other route
app.use((req, res) => {
  res.sendFile(path.join(__dirname, 'about.html'));
});

app.listen(PORT, HOST, () => {
  console.log(`Server running on http://${HOST}:${PORT}`);
});
