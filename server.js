const express = require('express');
const bodyParser = require('body-parser');
const path = require('path');

const app = express();
const port = 3000;

app.use(bodyParser.json());
app.use(express.static(path.join(__dirname))); // 設置靜態文件目錄

app.post('/login', (req, res) => {
    // 這裡是你的登入邏輯
    if (req.body.email === 'test@example.com' && req.body.password === 'password') {
        res.json({ success: true });
    } else {
        res.json({ success: false, message: 'Invalid credentials' });
    }
});

app.listen(port, () => {
    console.log(`Server is running on http://localhost:${port}`);
});
