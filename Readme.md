# 🌍 RoamScape  
🔗[Live Demo](https://roam-scape.vercel.app/)

## 🏞️ Introduction  

**RoamScape** is a modern tour booking application designed to help users explore and book incredible travel experiences around the world. Whether you're looking for an adventure in the mountains, a relaxing beach retreat, or an urban exploration, RoamScape makes it easy to find and book your next journey.  

Built with a **scalable Node.js backend and a dynamic frontend**, RoamScape ensures a seamless user experience for travelers and tour providers alike.  

---

### 🧪Test Account
For a quick test drive, use the following credentials:

**Username**: laura@example.com

**Password**: test1234

---

## 📥 Installation  

Follow these steps to set up **RoamScape** on your local machine:  

### 1️⃣ Clone the Repository
```sh  
git clone https://github.com/Antovex/RoamScape.git
cd RoamScape
```

### 2️⃣ Install Dependencies  
```sh
npm install
```

### 3️⃣ Set Up Environment Variables  
Create a `.env` file in the root directory and configure the following variables:  

```sh
NODE_ENV=development
PORT=3000
DATABASE_URL=your_mongodb_connection_string
JWT_SECRET=your_secret_key
JWT_EXPIRES_IN=30d
EMAIL_USERNAME=your_email
EMAIL_PASSWORD=your_password
STRIPE_SECRET_KEY=your_stripe_secret_key
```

### 4️⃣ Start the Development Server  
```sh
npm run dev
```

The server will run at **[http://localhost:3000/](http://localhost:3000/)**  

---

## 🚀 Usage  

### 1️⃣ **User Registration & Login**  
- Sign up using an email and password  
- Log in to access your profile and book tours  

### 2️⃣ **Browse & Book Tours**  
- View available tours with detailed descriptions, locations, and prices  
- Book tours securely with **Stripe Payment Integration**  

### 3️⃣ **Manage Your Bookings**  
- View past and upcoming trips in your dashboard  
- Cancel or modify bookings (admin-controlled)  

### 4️⃣ **User Roles & Permissions**  
- **User:** Can browse and book tours  
- **Guide:** Can manage assigned tours  
- **Admin:** Full access to manage tours, users, and bookings  

---

## 🌟 Features  

✅ **Interactive Tour Listings** – Browse tours with images, descriptions, and pricing  
✅ **Secure Authentication** – User accounts with role-based access control  
✅ **Payment Integration** – Stripe-powered payments for a seamless booking experience  
✅ **Review System** – Leave ratings and reviews for tours  
✅ **Google Maps API Integration** – View tour locations on an interactive map  
✅ **Admin Dashboard** – Manage users, bookings, and tours  

---

## 💻 Technologies Used  

### **Frontend:**  
- HTML5, CSS3  
- JavaScript (Vanilla JS & ES6+)  
- Pug (Template Engine)  

### **Backend:**  
- Node.js, Express.js  
- RESTful API architecture  

### **Database:**  
- MongoDB (NoSQL database)  
- Mongoose (ODM for MongoDB)  

### **Authentication & Security:**  
- JSON Web Tokens (JWT) for authentication  
- Bcrypt.js for password hashing  
- Helmet & Rate Limiting for enhanced security   

---

## 🕸 API Documentation

For detailed information on the API endpoints, request/response structures, and example calls, please refer to the comprehensive API documentation available at:

📃[RoamScape API Documentation](https://documenter.getpostman.com/view/41013687/2sAYkLmGgL)

This documentation provides insights into the various endpoints available, including those for tours, users, reviews, and bookings.

---

## 🤝 Contributing  

We welcome contributions! If you'd like to improve **RoamScape**, follow these steps:  

1. **Fork** the repository  
2. **Create a new branch** (`feature-new-feature`)  
3. **Commit** your changes  
4. **Push** the branch and **submit a Pull Request**  

---

## 📧 Contact  

For any inquiries or suggestions, feel free to reach out:  
📩 **Email:** antaringhosal@gmail.com  
🐙 **GitHub:** [Antovex](https://github.com/Antovex)  

---

🎒 **RoamScape – Your Gateway to Adventure!** 🌎✨ 
