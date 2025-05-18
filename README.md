# 📘 Fullstack Authentication

## 🔰 Deskripsi

Proyek ini merupakan implementasi sistem autentikasi **fullstack** yang mendukung:

* 🔐 Register & Login menggunakan **email + password**
* 🔑 Login menggunakan akun **Google (OAuth 2.0)**
* 🔗 Backend dengan **Express.js** dan **PostgreSQL**
* 🖼️ Frontend menggunakan **React.js**
* 🔒 Autentikasi menggunakan **JWT**

---

## 🧱 Struktur Proyek

```
project-root/
│
├── backend/              # Backend Express.js
│   ├── controllers/      # Logic autentikasi
│   ├── routes/           # Routing Express
│   ├── db/               # Koneksi PostgreSQL
│   └── server.js         # Entry point backend
│
└── frontend/             # Frontend React.js
    └── src/
        └── LoginPage.jsx # Halaman login
```

---

## 🔧 Teknologi & Library

### Backend:

* `express`
* `pg`
* `bcryptjs`
* `jsonwebtoken`
* `google-auth-library`
* `dotenv`
* `cors`

### Frontend:

* `axios`
* `@react-oauth/google`

---

## ⚙️ Backend Setup

### 1. Instalasi

```bash
cd backend
npm install express pg dotenv bcryptjs jsonwebtoken cors google-auth-library
```

### 2. Konfigurasi `.env`

```env
DATABASE_URL=postgres://username:password@localhost:5432/dbname
GOOGLE_CLIENT_ID=your_google_client_id.apps.googleusercontent.com
JWT_SECRET=your_secret_key
```

### 3. Struktur Database

```sql
CREATE TABLE users (
  id SERIAL PRIMARY KEY,
  username VARCHAR(100),
  email VARCHAR(255) UNIQUE,
  password TEXT,
  google_id VARCHAR(255),
  auth_type VARCHAR(20), -- 'local' atau 'google'
  created_at TIMESTAMP DEFAULT NOW()
);
```

---

## 📡 API Endpoint Backend

| Method | Endpoint             | Deskripsi                      |
| ------ | -------------------- | ------------------------------ |
| POST   | `/api/auth/register` | Register dengan email/password |
| POST   | `/api/auth/login`    | Login manual                   |
| POST   | `/api/auth/google`   | Login menggunakan Google       |

---

## 📤 Request Body

### 🔹 Register

```json
POST /api/auth/register
{
  "username": "john",
  "email": "john@mail.com",
  "password": "123456"
}
```

### 🔹 Login Manual

```json
POST /api/auth/login
{
  "email": "john@mail.com",
  "password": "123456"
}
```

### 🔹 Login Google

```json
POST /api/auth/google
{
  "token": "GOOGLE_ID_TOKEN"
}
```

---

## 💻 Frontend Setup

### 1. Instalasi

```bash
cd frontend
npx create-react-app .
npm install axios @react-oauth/google
```

### 2. Implementasi LoginPage

```jsx
// src/LoginPage.jsx
import React, { useState } from 'react';
import axios from 'axios';
import { GoogleLogin, GoogleOAuthProvider } from '@react-oauth/google';

function LoginPage() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const manualLogin = async () => {
    const res = await axios.post('http://localhost:5000/api/auth/login', { email, password });
    localStorage.setItem('token', res.data.token);
    alert("Login berhasil");
  };

  const handleGoogleLogin = async (credentialResponse) => {
    const res = await axios.post('http://localhost:5000/api/auth/google', {
      token: credentialResponse.credential,
    });
    localStorage.setItem('token', res.data.token);
    alert("Login Google berhasil");
  };

  return (
    <GoogleOAuthProvider clientId="YOUR_GOOGLE_CLIENT_ID">
      <div>
        <h2>Login Manual</h2>
        <input value={email} onChange={(e) => setEmail(e.target.value)} placeholder="Email" />
        <input value={password} type="password" onChange={(e) => setPassword(e.target.value)} placeholder="Password" />
        <button onClick={manualLogin}>Login</button>

        <h2>atau</h2>
        <GoogleLogin onSuccess={handleGoogleLogin} onError={() => alert('Login gagal')} />
      </div>
    </GoogleOAuthProvider>
  );
}

export default LoginPage;
```

---

## 🔒 Token dan Middleware Opsional

Untuk route yang membutuhkan login:

```js
// backend/middleware/auth.js
const jwt = require('jsonwebtoken');

function authMiddleware(req, res, next) {
  const authHeader = req.headers.authorization;
  if (!authHeader) return res.sendStatus(401);

  const token = authHeader.split(' ')[1];
  try {
    const user = jwt.verify(token, process.env.JWT_SECRET);
    req.user = user;
    next();
  } catch {
    res.sendStatus(403);
  }
}

module.exports = authMiddleware;
```

---

## ✅ Tips Pengembangan Lanjutan

* Gunakan **refresh token** untuk sesi lebih aman.
* Tambahkan fitur **logout**, **verifikasi email**, dan **reset password**.
* Implementasikan **middleware auth** untuk route yang dilindungi.
* Gunakan **Zod** atau **Joi** untuk validasi input user.

---

## 📌 Referensi

* [Google OAuth2 Client Library](https://github.com/googleapis/google-auth-library-nodejs)
* [JWT Documentation](https://jwt.io/)
* [React OAuth Guide](https://www.npmjs.com/package/@react-oauth/google)

---

## 📞 Kontak Pengembang

| Nama           | Email                                 | GitHub             |
| -------------- | ------------------------------------- | ------------------ |
| Yoga Alfa Risqi | [yogaalfarisqi4@mail.com] | github.com/YogaAlfaRisqi |
