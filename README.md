# 🔗 URL Shortener

A full-stack URL shortener built with Next.js, Node.js, MongoDB, focusing on performance, scalability, and real-world backend practices.

---

## 🚀 Features

- Convert long URLs into short links  
- Redirect short URLs to original URLs  
- Store URLs in database  
- Basic click tracking  
- Fast API response time (~120–200ms)
- Click tracking (analytics)
- API testing using Vitest
- Load testing using k6

---

## 🏗️ Tech Stack

- **Frontend:** Next.js  
- **Backend:** Node.js + Express  
- **Database:** MongoDB
- **Testing**: Vitest + Supertest
- **Load Testing**: k6

---

## 📂 Project Structure

```
url-shortener/
frontend/ → Next.js app
backend/ → Express API
```

---

## ⚙️ How It Works

### 1. Shorten URL

- User enters a long URL  
- Backend generates a short code  
- URL is stored in database  
- Short URL is returned  

---

### 2. Redirect

- User opens short URL  
- Backend finds original URL  
- Redirects user to original link  

---

## 🧪 API Performance

- API is optimized for speed
- Optimized URL creation API to achieve ~100–120ms response time
- Implemented high-speed redirection with ~10–50ms latency 
- Designed to support multiple users efficiently  

---

## 🛠️ Setup

### 1. Clone Project

```
git clone <your-repo>
cd url-shortener
```

---

### 2. Backend Setup

```
cd backend
npm install
npm run dev
```

---

### 3. Frontend Setup

```
cd frontend
npm install
npm run dev
```

---

### 4. Environment Variables

Create a `.env` file in backend:
```
MONGODB_URI=your_mongo_db_connection
REDIS_HOST_URL=redishost
REDIS_PASSWORD_URL=password
```

---

## 🧪 Testing

### 🔹 Vitest (API Testing)

Used for testing backend routes:

- Create short URL  
- Redirect functionality  
- Error handling  

Run tests:
```
npx vitest
```

---

### 🚀 Load Testing (k6)

Used to simulate multiple users hitting the API.

Example:

```
k6 run --vus 50 --duration 20s load-test.js
```
---

## 📊 Results (After Optimization)

- ~100 requests/sec  
- Median latency ~200ms  
- No failed requests  

---

## 📌 Observations

- System performs well under moderate load  
- Latency increases under heavy load due to database limits  
- Backend logic is optimized; bottleneck shifts to infrastructure  

---

## 🎯 Goal

This project is built to understand:

- Backend API development  
- Database integration  
- Full-stack application flow  

---


## ⚠️ Current Limitations

- No user authentication (sign in / sign up)
- Analytics are not user-scoped
- No dashboard for individual URL tracking

This decision was intentional to prioritize:
- Backend performance
- API design
- Scalability fundamentals

Future improvements may include authentication and user-specific analytics dashboards.
