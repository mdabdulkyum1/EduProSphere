# EduProSphere
# live link [EduProSphere](https://eduprosphere-fa7b8.web.app/)

# EduManage: Revolutionizing Education Management

## About EduManage

EduManage is a robust and user-friendly platform designed to revolutionize the way educational institutions, tutors, and students interact. Leveraging the power of the MERN stack (MongoDB, Express.js, React, and Node.js), EduManage aims to make skill learning and class management more efficient and accessible than ever before.

## Features
- **Seamless Class Management**: Manage schedules, track attendance, and share resources with ease.
- **Enhanced Student Experience**: Offer students a platform to access courses, assignments, and communicate with educators.
- **Tutor Empowerment**: Enable tutors to manage their classes, monitor progress, and connect with students effortlessly.
- **Secure Payment Integration**: Powered by Stripe for secure and reliable transactions.
- **Modern and Intuitive UI**: Built using React, Tailwind CSS, and DaisyUI for a visually appealing and user-friendly experience.
- **Advanced Data Handling**: Use of React Query for efficient server state management and Firebase for secure authentication.

## Tech Stack
- **Frontend**: React, React Router, React Hook Form, Swiper, SweetAlert2, and more.
- **Backend**: Node.js, Express.js
- **Database**: MongoDB
- **Authentication**: Firebase
- **Payment Integration**: Stripe
- **Styling**: Tailwind CSS, DaisyUI

## Installation

### Prerequisites
- Node.js (v16 or later)
- MongoDB
- Stripe API keys

### Steps
1. Clone the repository:
   ```bash
   git clone <repository-url>
   ```
2. Navigate to the project directory:
   ```bash
   cd edu-pro-sphere
   ```
3. Install dependencies:
   ```bash
   npm install
   ```
4. Configure environment variables:
   - Create a `.env.local` file in the root directory.
   - Add the following environment variables:
     ```env
     REACT_APP_FIREBASE_API_KEY=<your-firebase-api-key>
     REACT_APP_FIREBASE_AUTH_DOMAIN=<your-firebase-auth-domain>
     REACT_APP_STRIPE_PUBLIC_KEY=<your-stripe-public-key>
     ```
5. Run the development server:
   ```bash
   npm run dev
   ```
6. Access the application at `http://localhost:3000`.

## Scripts
- `npm run dev`: Start the development server using Vite.
- `npm run build`: Build the application for production.
- `npm run preview`: Preview the production build.
- `npm run lint`: Lint the codebase using ESLint.

## Dependencies
Key dependencies used in the project:
- `@stripe/react-stripe-js`: Stripe integration for payments.
- `react-hook-form`: Simplified form handling.
- `react-query`: Advanced data-fetching and state management.
- `firebase`: Secure authentication and user management.
- `tailwindcss` & `daisyui`: Modern styling utilities.

## Contribution
We welcome contributions! If you'd like to contribute:
1. Fork the repository.
2. Create a new branch for your feature or bug fix:
   ```bash
   git checkout -b feature/your-feature-name
   ```
3. Commit your changes:
   ```bash
   git commit -m "Add your feature description"
   ```
4. Push your branch and create a pull request.

## License
This project is licensed under the MIT License. See the `LICENSE` file for more details.

## Acknowledgments
- The MERN stack community for providing an incredible development ecosystem.
- Open-source contributors who make projects like this possible.

---

Start your EduManage journey today and transform education management for the better!