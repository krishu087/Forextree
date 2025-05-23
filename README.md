# PortfolioPro - Forex Trading Platform

A full-stack TypeScript application for forex traders, featuring calculators, prop firm comparisons, and educational resources.

## 🌟 Features

- **Trading Calculators**
  - Position size calculator
  - Risk management tools
  - Profit/loss calculator
  - Margin calculator

- **Prop Firm Comparison**
  - Compare different prop trading firms
  - Detailed reviews and ratings
  - Funding program comparisons
  - Profit split analysis

- **Educational Resources**
  - Trading tutorials
  - Market analysis
  - Trading psychology articles
  - Risk management guides

- **Blog Platform**
  - User-generated content
  - Trading strategies
  - Market insights
  - Community discussions

- **Financial Tools**
  - Economic calendar
  - Market news
  - Technical analysis tools
  - Trading signals

## 🛠️ Tech Stack

### Frontend
- React with TypeScript
- Vite for build tooling
- Tailwind CSS for styling
- Shadcn/ui for components
- Framer Motion for animations
- Wouter for routing
- Axios for API calls

### Backend
- Node.js with Express
- TypeScript
- MongoDB for database
- Socket.IO for real-time features
- JWT for authentication
- CORS enabled

## 🚀 Getting Started

### Prerequisites
- Node.js (v18 or higher)
- MongoDB
- npm or yarn

### Installation

1. Clone the repository:
```bash
git clone https://github.com/yourusername/PortfolioPro.git
cd PortfolioPro
```

2. Install dependencies for both client and server:
```bash
# Install client dependencies
cd client
npm install

# Install server dependencies
cd ../server
npm install
```

3. Set up environment variables:

Create `.env.development` in the client directory:
```env
VITE_API_URL=http://localhost:5001/api
VITE_WS_URL=ws://localhost:5001
```

Create `.env` in the server directory:
```env
PORT=5001
MONGODB_URI=your_mongodb_uri
JWT_SECRET=your_jwt_secret
```

4. Start the development servers:

```bash
# Start the backend server
cd server
npm run dev

# Start the frontend development server
cd ../client
npm run dev
```

The application will be available at:
- Frontend: http://localhost:5173
- Backend API: http://localhost:5001

## 📁 Project Structure

```
PortfolioPro/
├── client/                 # Frontend React application
│   ├── public/            # Static files
│   │   ├── components/    # Reusable components
│   │   ├── contexts/      # React contexts
│   │   ├── lib/          # Utility functions
│   │   ├── pages/        # Page components
│   │   └── styles/       # Global styles
│   └── package.json
│
└── server/                # Backend Express application
    ├── src/
    │   ├── config/       # Configuration files
    │   ├── controllers/  # Route controllers
    │   ├── models/       # Database models
    │   ├── routes/       # API routes
    │   └── middleware/   # Custom middleware
    └── package.json
```

## 🔒 Authentication

The application uses JWT (JSON Web Tokens) for authentication. Protected routes require a valid token in the Authorization header.

## 📱 Responsive Design

The application is fully responsive and works on:
- Desktop browsers
- Tablets
- Mobile devices

## 🎨 Theme Support

- Light mode
- Dark mode
- System preference detection

## 🤝 Contributing

1. Fork the repository
2. Create your feature branch (`git checkout -b feature/AmazingFeature`)
3. Commit your changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

## 📝 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## 👥 Authors

- Krishna panjre - Initial work

## 🙏 Acknowledgments

- [Shadcn/ui](https://ui.shadcn.com/) for the component library
- [Tailwind CSS](https://tailwindcss.com/) for the styling framework
- [Framer Motion](https://www.framer.com/motion/) for animations
- [Lucide Icons](https://lucide.dev/) for the icon set 
