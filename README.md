# ReWear - Sustainable Fashion Marketplace

A modern React-based marketplace for sustainable fashion where users can swap, buy, and sell clothing items using points or money. Built with TypeScript, Vite, and Supabase.

## 🌟 Features

- 🔐 **Authentication**: Secure user registration and login with Supabase Auth
- 🛍️ **Item Management**: Add, edit, and delete clothing items
- 💰 **Points System**: Earn and spend points for sustainable fashion
- 🔄 **Swapping**: Trade items with other users
- 📱 **Responsive Design**: Works seamlessly on desktop and mobile
- 🎨 **Modern UI**: Built with shadcn/ui components and Tailwind CSS
- 🛡️ **Protected Routes**: Secure access to user-specific features

## 🛠️ Tech Stack

- **Frontend**: React 18 + TypeScript + Vite
- **UI Components**: shadcn/ui + Tailwind CSS
- **Backend**: Supabase (PostgreSQL + Auth + Storage)
- **State Management**: React Context + TanStack Query
- **Routing**: React Router DOM
- **Authentication**: Supabase Auth with Row Level Security

## 🚀 Quick Start

### Prerequisites

- Node.js 18+ 
- npm, yarn, or bun
- Supabase account

### Installation

1. **Clone the repository**
   ```bash
   git clone <repository-url>
   cd rewear
   ```

2. **Install dependencies**
   ```bash
   npm install
   # or
   yarn install
   # or
   bun install
   ```

3. **Environment Setup**
   
   Create a `.env.local` file in the root directory:
   ```env
   VITE_SUPABASE_URL=your_supabase_project_url
   VITE_SUPABASE_ANON_KEY=your_supabase_anon_key
   ```

4. **Set up Supabase Database**

   a. Go to your [Supabase Dashboard](https://supabase.com/dashboard)
   b. Navigate to the **SQL Editor**
   c. Run the SQL commands from `supabase/schema.sql`
   d. This creates all necessary tables and security policies

5. **Start the development server**
   ```bash
   npm run dev
   # or
   yarn dev
   # or
   bun dev
   ```

6. **Open your browser**
   
   Navigate to `http://localhost:5173`

## 📊 Database Schema

### Tables

#### `user_profiles`
Extended user information beyond Supabase Auth:
- `id` (UUID, references auth.users)
- `full_name` (TEXT)
- `phone` (TEXT)
- `location` (TEXT)
- `points` (INTEGER, default: 0)

#### `items`
Clothing items available for sale/swap:
- `id` (UUID, primary key)
- `user_id` (UUID, references auth.users)
- `title` (TEXT)
- `description` (TEXT)
- `category` (TEXT)
- `condition` (TEXT)
- `size` (TEXT)
- `brand` (TEXT)
- `price` (DECIMAL)
- `points_required` (INTEGER)
- `images` (TEXT[])
- `status` (TEXT: available, pending, sold, removed)

#### `transactions`
Purchase and swap records:
- `id` (UUID, primary key)
- `item_id` (UUID, references items)
- `buyer_id` (UUID, references auth.users)
- `seller_id` (UUID, references auth.users)
- `transaction_type` (TEXT: swap, purchase, points)
- `status` (TEXT: pending, completed, cancelled)
- `points_exchanged` (INTEGER)
- `amount_paid` (DECIMAL)

## 🔐 Authentication Flow

1. **Registration**: Users sign up with email, password, and profile information
2. **Login**: Users authenticate with email and password
3. **Session Management**: Automatic session persistence with localStorage
4. **Protected Routes**: Dashboard and item management require authentication
5. **Row Level Security**: Database-level access control

## 🏗️ Project Structure

```
src/
├── components/          # Reusable UI components
│   ├── ui/            # shadcn/ui components
│   ├── Header.tsx     # Navigation header with auth
│   └── ProtectedRoute.tsx # Authentication protection
├── contexts/           # React contexts
│   └── UserContext.tsx # Authentication state management
├── hooks/             # Custom React hooks
├── integrations/      # External service integrations
│   └── supabase/      # Supabase client and types
├── pages/             # Page components
│   ├── Login.tsx      # Authentication page
│   ├── Signup.tsx     # Registration page
│   ├── Dashboard.tsx  # User dashboard
│   └── ...           # Other pages
├── services/          # API service functions
│   └── database.ts    # Database operations
└── lib/               # Utility functions
```

## 🔧 API Services

The application uses a comprehensive service layer for database operations:

### User Operations
- `getUserProfile()` - Fetch user profile data
- `updateUserProfile()` - Update user information

### Item Operations
- `getItems()` - Fetch items with optional filters
- `getItem()` - Get single item details
- `createItem()` - Add new items
- `updateItem()` - Modify existing items
- `deleteItem()` - Remove items

### Transaction Operations
- `createTransaction()` - Record new transactions
- `getTransactions()` - Fetch user's transaction history
- `updateTransaction()` - Update transaction status

## 🌐 Environment Variables

| Variable | Description | Required | Default |
|----------|-------------|----------|---------|
| `VITE_SUPABASE_URL` | Your Supabase project URL | Yes | - |
| `VITE_SUPABASE_ANON_KEY` | Your Supabase anonymous key | Yes | - |

## 🚀 Deployment

### Vercel (Recommended)

1. Connect your GitHub repository to Vercel
2. Add environment variables in Vercel dashboard
3. Deploy automatically on push to main branch

### Other Platforms

The app can be deployed to any static hosting platform:
- **Netlify**: Connect repository and add environment variables
- **GitHub Pages**: Use GitHub Actions for deployment
- **AWS S3 + CloudFront**: Manual deployment with environment variables
- **Firebase Hosting**: Connect with Firebase CLI

## 🧪 Testing

```bash
# Run linting
npm run lint

# Build for production
npm run build

# Preview production build
npm run preview
```

## 🤝 Contributing

1. Fork the repository
2. Create a feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'Add amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request



## 🆘 Support

- **Documentation**: Check the code comments and TypeScript types
- **Issues**: Open an issue in the GitHub repository
- **Discussions**: Use GitHub Discussions for questions
- **Email**: Contact the development team

## 🙏 Acknowledgments

- [Supabase](https://supabase.com) for the backend infrastructure
- [shadcn/ui](https://ui.shadcn.com) for the beautiful components
- [Tailwind CSS](https://tailwindcss.com) for the styling system
- [Vite](https://vitejs.dev) for the fast build tool

---


