# -Personal-Finance-Tracker
Personal Finance Tracker will showcase my skills in backend development, database management, and front-end templating. Here's a breakdown of what I have include:

Core Features
✅ User Authentication – Sign up, login, and manage accounts (using Supabase Auth).
✅ Income & Expense Tracking – Add, edit, and delete transactions.
✅ Categories & Budgeting – Categorize expenses and set monthly budgets.
✅ Reports & Charts – Generate financial reports with visualizations (e.g., using Chart.js).
✅ Recurring Transactions – Automate fixed expenses/income (e.g., subscriptions, salaries).
✅ Export Data – Download reports as CSV/PDF for offline access.

Tech Stack
Backend: Node.js (Express.js)
Frontend: EJS (Embedded JavaScript templates)
Database: Supabase (PostgreSQL)
Architecture: MVC (Model-View-Controller)
Extras (for Bonus Points)
🔹 PWA Support – Make it work offline and installable.
🔹 Multi-Currency Support – Allow users to track finances in different currencies.
🔹 Dark Mode & UI Enhancements – Improve UX/UI to stand out.



personal-finance-tracker/
│── controllers/        # Handles business logic
│   ├── authController.js
│   ├── transactionController.js
│   ├── reportController.js
│
│── models/             # Database models
│   ├── userModel.js
│   ├── transactionModel.js
│
│── routes/             # Defines API routes
│   ├── authRoutes.js
│   ├── transactionRoutes.js
│   ├── reportRoutes.js
│
│── views/              # EJS templates for UI
│   ├── layouts/
│   ├── home.ejs
│   ├── dashboard.ejs
│   ├── login.ejs
│   ├── register.ejs
│
│── public/             # Static files (CSS, JS)
│   ├── css/
│   ├── js/
│
│── config/             # Supabase configuration
│   ├── supabaseClient.js
│
│── middleware/         # Authentication middleware
│── app.js              # Main entry point
│── package.json        # Dependencies
│── .env                # Environment variables
