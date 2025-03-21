<p align="center">
  <img src="public/icons/logo.png" alt="Office Icon">
</p>

# 🏢 Manage Your Office

## 🌟 Overview

**Manage Your Office** is a powerful and intuitive office task management system designed for employees, managers, and CEOs to streamline office tasks, track progress, and enhance productivity. Built with **Next.js**, **Tailwind CSS**, **Prisma**, and **Redux Toolkit**, this application ensures a smooth and efficient workflow for organizations of all sizes.

## ⚡ Features

- ✅ **Task Management** - Assign, update, and track tasks efficiently.
- 📊 **Progress Tracking** - Monitor task status and completion progress.
- 🏢 **Role-Based Access** - Custom functionalities for employees, managers, and CEOs.
- 🔍 **Search & Filters** - Quickly find relevant tasks and projects.
- 📈 **Performance Insights** - Get reports on work progress and productivity.
- 🔄 **Real-time Updates** - Keep everyone updated with instant changes.
- 🔗 **Easy Integration** - Built with modern technologies for seamless scalability.

## 🛠 Tech Stack

- 🎨 **Frontend**: Next.js, Tailwind CSS
- ⚙️ **State Management**: Redux Toolkit
- 🗄 **Database**: Prisma (PostgreSQL, MySQL, or SQLite)
- 🚀 **Backend**: Next.js API Routes
- 🔑 **Authentication**: NextAuth.js (Optional)

## 🚀 Getting Started

### 1️⃣ Clone the Repository

```sh
git clone https://github.com/devrgd/manage-your-office.git
cd manage-your-office
```

### 2️⃣ Install Dependencies

```sh
npm install  # or npm install
```

### 3️⃣ Set Up Environment Variables

Create a `.env` file and configure your database and other required settings:

```env
DATABASE_URL=your_database_url
NEXTAUTH_SECRET=your_secret_key
```

### 4️⃣ Run Database Migrations

```sh
npx prisma migrate dev
```

### 5️⃣ Start the Development Server

```sh
npm run dev
```

## 🎯 Usage

1. 🔑 **Sign Up & Log In** - Users can register and log in based on their role.
2. 📝 **Create & Assign Tasks** - Managers can create and assign tasks to employees.
3. 📅 **Track Progress** - Employees update task status while managers & CEOs monitor progress.
4. 📊 **Dashboard & Reports** - CEOs and managers can access insights on productivity.

## 🤝 Contributing

We welcome contributions! Feel free to fork the repo and submit a pull request.

## 📜 License

This project is licensed under the **MIT License**.

---

💡 Made with ❤️ to simplify office management! 🚀
