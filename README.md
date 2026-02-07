# ShopZone E-Commerce Website

A complete, full-featured e-commerce website with user and admin authentication, built with Node.js/Express and MongoDB.

## 🚀 Features

### Core E-Commerce Features
- **Product Management**: Browse, search, filter products by category
- **Shopping Cart**: Add/remove items, quantity control, real-time updates
- **Order Processing**: Complete checkout flow with address management
- **Product Reviews**: 5-star rating system with user feedback
- **Wishlist/Favorites**: Save favorite products for later
- **Search & Filtering**: Advanced product search with category filters

### Authentication & Authorization
- **User Authentication**: Secure login/signup with JWT tokens
- **Admin Panel**: Separate admin dashboard with full management capabilities
- **Role-Based Access**: User and admin roles with appropriate permissions
- **Session Management**: Secure token-based authentication

### Advanced Features
- **Coupon System**: 
  - Auto-generated coupon codes for new users
  - Percentage and fixed amount discounts
  - Usage limits and expiry tracking
  - Milestone rewards (10 uses = bonus coins)
  
- **Coins & Rewards**:
  - Earn coins on purchases (10 coins per ₹100 spent)
  - 100 coins per successful referral
  - Redeem coins for discounts
  - Transaction history tracking

- **Admin Dashboard**:
  - Real-time statistics and analytics
  - Product CRUD operations
  - Order management and status updates
  - User management
  - Review moderation
  - Coupon management
  - Contact message handling

### Technical Features
- **Responsive Design**: Mobile-first approach, works on all devices
- **Real-time Updates**: Live cart updates, notifications
- **Data Validation**: Comprehensive input validation and sanitization
- **Error Handling**: Robust error handling throughout the application
- **Security**: Password hashing, JWT authentication, input sanitization

## 🛠 Tech Stack

### Backend
- **Node.js** - Runtime environment
- **Express.js** - Web framework
- **MongoDB** - Database with Mongoose ODM
- **JWT** - Authentication tokens
- **bcryptjs** - Password hashing
- **Express Validator** - Input validation

### Frontend
- **HTML5** - Semantic markup
- **CSS3** - Modern styling with Flexbox/Grid
- **JavaScript (ES6+)** - Dynamic functionality
- **Responsive Design** - Mobile-friendly interface

### Database Schemas
- **Users**: Authentication, profile, coins tracking
- **Products**: Catalog with categories, images, variants
- **Orders**: Order management, status tracking
- **Reviews**: Product reviews and ratings
- **Cart**: User shopping carts
- **Favourites**: User wishlists
- **Coupons**: Discount codes and tracking
- **Coin Transactions**: Coins earning/spending history
- **Contact Messages**: Customer inquiries

## 📦 Installation & Setup

### Prerequisites
- Node.js (v14 or higher)
- MongoDB (v4.4 or higher)
- Git

### 1. Clone the Repository
```bash
git clone <repository-url>
cd ecommerce-website
```

### 2. Install Dependencies
```bash
npm install
```

### 3. Environment Configuration
Create a `.env` file in the root directory:
```env
PORT=3000
MONGODB_URI=mongodb://localhost:27017/ecommerce
JWT_SECRET=your_super_secret_jwt_key_here_change_in_production
ADMIN_EMAIL=admin@shop.com
ADMIN_PASSWORD=admin123
```

### 4. Start MongoDB
Ensure MongoDB is running on your system:
```bash
# On Windows (if installed as service)
net start MongoDB

# On macOS (using Homebrew)
brew services start mongodb-community

# On Linux
sudo systemctl start mongod
```

### 5. Seed Sample Data (Optional)
To populate the database with sample products and users:
```bash
node seedData.js
```

### 6. Start the Application
```bash
# For development
npm run dev

# For production
npm start
```

The application will be available at `http://localhost:3000`

## 🔐 Default Login Credentials

After seeding sample data, you can use these credentials:

**Admin Access:**
- Email: `admin@shop.com`
- Password: `admin123`

**Sample Users:**
- Username: `johndoe` / Password: `password123`
- Username: `janesmith` / Password: `password123`
- Username: `mikejohnson` / Password: `password123`
- Username: `sarahwilliams` / Password: `password123`

## 📱 Pages & Features

### User-Facing Pages
1. **Home** (`/`) - Landing page with featured products and promotions
2. **Shop** (`/shop`) - Product catalog with filtering and search
3. **Product Details** (`/product/:id`) - Individual product pages with reviews
4. **Cart** (`/cart`) - Shopping cart with checkout process
5. **Favorites** (`/favourites`) - User wishlist
6. **Reviews** (`/reviews`) - All product reviews with filtering
7. **About Us** (`/about`) - Company information and contact details
8. **Contact Us** (`/contact`) - Contact form and information

### Admin Panel (`/admin`)
- **Dashboard**: Statistics and recent orders
- **Products**: Add/edit/delete products
- **Orders**: Manage orders and update status
- **Users**: View and manage user accounts
- **Reviews**: Moderate product reviews
- **Coupons**: Create and manage discount codes
- **Contact Messages**: Handle customer inquiries

## 🎯 Key Functionality

### Shopping Flow
1. Browse products with advanced filtering
2. View detailed product information and reviews
3. Add items to cart with quantity control
4. Apply coupon codes and redeem coins
5. Enter delivery information
6. Complete checkout with order confirmation
7. Track order status (admin-controlled)

### Reward System
- **New Users**: Automatically receive a welcome coupon
- **Referrals**: 100 coins for each successful referral
- **Purchases**: 10 coins per ₹100 spent
- **Coupon Milestones**: 500 coins when coupon reaches 10 uses
- **Coin Redemption**: Use coins for order discounts

### Admin Operations
- Real-time dashboard with key metrics
- Bulk product management
- Order processing and fulfillment
- Customer service via contact messages
- Promotional campaigns with coupons

## 🔧 API Endpoints

### Authentication
- `POST /api/auth/register` - User registration
- `POST /api/auth/login` - User login
- `GET /api/auth/profile` - Get user profile

### Products
- `GET /api/products` - Get all products
- `GET /api/products/:id` - Get single product
- `POST /api/products` - Create product (admin)
- `PUT /api/products/:id` - Update product (admin)
- `DELETE /api/products/:id` - Delete product (admin)

### Cart
- `GET /api/cart` - Get user cart
- `POST /api/cart/add` - Add item to cart
- `PUT /api/cart/update` - Update cart quantity
- `DELETE /api/cart/remove/:productId` - Remove item from cart

### Orders
- `GET /api/orders` - Get user orders
- `POST /api/orders` - Create new order
- `PUT /api/orders/:id/status` - Update order status (admin)

### Reviews
- `GET /api/reviews` - Get all reviews
- `POST /api/reviews` - Create review
- `PUT /api/reviews/:id` - Update review
- `DELETE /api/reviews/:id` - Delete review

### Coupons & Coins
- `GET /api/coupons/my-coupons` - Get user coupons
- `POST /api/coupons/validate` - Validate coupon
- `GET /api/coupons/coins` - Get user coins
- `POST /api/coupons/coins/redeem` - Redeem coins

### Admin
- `GET /api/admin/stats` - Get dashboard statistics
- `GET /api/admin/users` - Get all users
- `GET /api/admin/orders` - Get all orders
- `GET /api/admin/reviews` - Get all reviews
- `DELETE /api/admin/users/:id` - Delete user (admin)

## 🚀 Deployment

### Environment Setup
1. Set up MongoDB server (MongoDB Atlas recommended for production)
2. Configure production environment variables
3. Set up reverse proxy (Nginx recommended)
4. Configure SSL certificate

### Production Build
```bash
# Install production dependencies only
npm ci --production

# Set NODE_ENV to production
export NODE_ENV=production

# Start the application
npm start
```

### Docker Deployment
```dockerfile
FROM node:16-alpine
WORKDIR /app
COPY package*.json ./
RUN npm ci --production
COPY . .
EXPOSE 3000
CMD ["npm", "start"]
```

## 🔒 Security Considerations

- JWT tokens with expiration
- Password hashing with bcrypt
- Input validation and sanitization
- Rate limiting considerations (implement as needed)
- HTTPS in production
- Environment variable protection
- Database connection security

## 🤝 Contributing

1. Fork the repository
2. Create a feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'Add amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

## 📄 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## 🆘 Support

For support, please contact:
- Email: support@shopzone.com
- Phone: 1800-123-4567

---

**Built with ❤️ by the ShopZone Team**