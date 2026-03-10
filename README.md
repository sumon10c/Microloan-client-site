# 💸 LoanLink | Microloan Approval & Management System

**LoanLink** is a modern Fintech platform designed to streamline the microloan application and tracking process. It provides a seamless interface for users to apply for financial assistance while allowing administrators to manage and review applications efficiently.



## 🚀 Core Features

-   **Intuitive User Dashboard:** A clean interface for users to browse various loan categories and check their application status.
-   **Dynamic Loan Application:** A comprehensive form system with real-time validation and secure data handling.
-   **Dark Mode Support:** Fully compatible with Light and Dark themes using DaisyUI and Tailwind CSS for a premium user experience.
-   **Real-time Tracking:** Users can monitor their loan lifecycle from "Pending" to "Approved" or "Rejected."
-   **Secure Authentication:** Integration with Firebase for robust user login, registration, and social authentication.
-   **Financial Insights (Blog):** A dedicated section for financial education, featuring tips on micro-investments and debt management.

## 🛠 Tech Stack

| Category | Technologies Used |
| :--- | :--- |
| **Frontend** | React.js (Vite), Tailwind CSS, DaisyUI, Framer Motion |
| **Backend** | Node.js, Express.js |
| **Database** | MongoDB |
| **Auth & Security** | Firebase Auth, JSON Web Tokens (JWT), Axios Secure |
| **Alerts** | SweetAlert2 |

## 📦 Local Installation

To get a local copy up and running, follow these simple steps:

1.  **Clone the Repository:**
    ```bash
    git clone [https://github.com/your-username/loanlink-client.git](https://github.com/your-username/loanlink-client.git)
    ```

2.  **Install Dependencies:**
    ```bash
    cd loanlink-client
    npm install
    ```

3.  **Environment Setup:**
    Create a `.env.local` file in the root directory and add your Firebase and API credentials:
    ```env
    VITE_apiKey=your_firebase_api_key
    VITE_authDomain=your_auth_domain
    VITE_projectId=your_project_id
    VITE_storageBucket=your_storage_bucket
    VITE_messagingSenderId=your_sender_id
    VITE_appId=your_app_id
    VITE_apiUrl=http://localhost:5000
    ```

4.  **Run the Application:**
    ```bash
    npm run dev
    ```

## 🛡 API Security
LoanLink uses **JWT (JSON Web Tokens)** to secure private routes. The frontend utilizes a custom `useAxiosSecure` hook to intercept requests and attach authorization headers, ensuring that user data remains private and protected.



## 🤝 Contributing
Contributions make the open-source community an amazing place to learn, inspire, and create.
1. Fork the Project
2. Create your Feature Branch (`git checkout -b feature/AmazingFeature`)
3. Commit your Changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the Branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

## 📄 License
Distributed under the MIT License. See `LICENSE` for more information.

---
