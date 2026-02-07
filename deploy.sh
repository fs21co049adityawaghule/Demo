#!/bin/bash

echo "🚀 DEPLOYING YOUR E-COMMERCE WEBSITE TO VERCEL"
echo "================================================"

# Check if we're in the right directory
if [ ! -f "server.js" ]; then
    echo "❌ Error: Please run this script from the ecommerce-website directory"
    exit 1
fi

echo "✅ Project directory confirmed"

# Install dependencies if not already installed
echo "📦 Installing dependencies..."
npm install

echo "🌐 Starting Vercel deployment..."
echo "📋 Follow these steps:"
echo ""
echo "1. A browser window will open"
echo "2. Login to Vercel or create a free account"
echo "3. Authorize the deployment"
echo "4. Set these 4 environment variables:"
echo "   - MONGODB_URI: mongodb+srv://user:pass@cluster.mongodb.net/ecommerce"
echo "   - JWT_SECRET: your_super_secret_jwt_key_at_least_32_chars"
echo "   - ADMIN_EMAIL: admin@shop.com"
echo "   - ADMIN_PASSWORD: admin123"
echo ""

# Deploy to Vercel
npx vercel --prod

echo ""
echo "🎉 DEPLOYMENT COMPLETE!"
echo "📱 Your website is now live!"
echo ""
echo "🔗 Next steps:"
echo "1. Copy your Vercel URL from above"
echo "2. Visit your live website"
echo "3. Go to [your-url].vercel.app/admin for admin panel"
echo "4. Login with admin@shop.com / admin123"
echo ""
echo "🌟 Your e-commerce store is ready for customers!"