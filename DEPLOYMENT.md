# Deploying ShopZone E-Commerce Website Online

This guide shows you multiple ways to deploy your e-commerce website online.

## 🚀 Option 1: Vercel (Easiest - Free)

### 1. Install Vercel CLI
```bash
npm i -g vercel
```

### 2. Create vercel.json file
```json
{
  "version": 2,
  "builds": [
    {
      "src": "server.js",
      "use": "@vercel/node"
    },
    {
      "src": "public/**/*",
      "use": "@vercel/static"
    }
  ],
  "routes": [
    {
      "src": "/api/(.*)",
      "dest": "/server.js"
    },
    {
      "src": "/admin",
      "dest": "/public/admin.html"
    },
    {
      "src": "/shop",
      "dest": "/public/shop.html"
    },
    {
      "src": "/(.*)",
      "dest": "/public/index.html"
    }
  ],
  "env": {
    "MONGODB_URI": "@mongodb_uri",
    "JWT_SECRET": "@jwt_secret",
    "ADMIN_EMAIL": "@admin_email",
    "ADMIN_PASSWORD": "@admin_password"
  }
}
```

### 3. Deploy
```bash
# Login to Vercel
vercel login

# Deploy from your project directory
cd ecommerce-website
vercel

# Follow prompts to configure environment variables
```

## 🌐 Option 2: Railway (Easy with Database)

### 1. Create Railway Account
- Go to [railway.app](https://railway.app)
- Sign up with GitHub

### 2. Create railway.json
```json
{
  "build": {
    "builder": "NIXPACKS"
  },
  "deploy": {
    "startCommand": "npm start",
    "restartPolicyType": "ON_FAILURE",
    "restartPolicyMaxRetries": 10
  }
}
```

### 3. Deploy
```bash
# Install Railway CLI
npm install -g @railway/cli

# Login
railway login

# Initialize project
cd ecommerce-website
railway init

# Add MongoDB service
railway add mongodb

# Deploy
railway up
```

## ☁️ Option 3: Heroku (Free Tier Available)

### 1. Create Procfile
```
web: npm start
```

### 2. Install Heroku CLI
```bash
# Download from https://devcenter.heroku.com/articles/heroku-cli
```

### 3. Deploy
```bash
# Login to Heroku
heroku login

# Create app
heroku create your-ecommerce-app

# Add MongoDB addon (mLab or MongoAtlas)
heroku addons:create mongolab:sandbox

# Set environment variables
heroku config:set JWT_SECRET=your_secure_secret_here
heroku config:set ADMIN_EMAIL=admin@yourdomain.com
heroku config:set ADMIN_PASSWORD=secure_admin_password

# Deploy
git push heroku main
```

## 🔥 Option 4: Glitch (Free & Easy)

### 1. Create glither.json
```json
{
  "start": "npm start",
  "watch": {
    "include": [
      "**/*"
    ],
    "ignore": [
      "node_modules/**"
    ]
  },
  "env": {
    "PORT": "3000"
  }
}
```

### 2. Deploy
- Go to [glitch.com](https://glitch.com)
- Create new project
- Import your code
- Set environment variables in .env file

## 🐳 Option 5: Docker + Cloud (Most Professional)

### 1. Create Dockerfile
```dockerfile
FROM node:16-alpine

WORKDIR /app

# Copy package files
COPY package*.json ./

# Install dependencies
RUN npm ci --production

# Copy application code
COPY . .

# Create non-root user
RUN addgroup -g 1001 -S nodejs
RUN adduser -S nodejs -u 1001

# Change ownership of the app directory
RUN chown -R nodejs:nodejs /app
USER nodejs

EXPOSE 3000

CMD ["npm", "start"]
```

### 2. Create .dockerignore
```
node_modules
npm-debug.log
.git
.gitignore
README.md
.env
.nyc_output
coverage
```

### 3. Deploy to DigitalOcean/AWS/GCP
```bash
# Build Docker image
docker build -t shopzone-ecommerce .

# Run container
docker run -p 3000:3000 \
  -e MONGODB_URI=mongodb://your-mongo-uri \
  -e JWT_SECRET=your-jwt-secret \
  shopzone-ecommerce
```

## 🌟 Option 6: Netlify + MongoDB Atlas (Recommended Free Option)

### 1. Create netlify.toml
```toml
[build]
  base = "/"
  command = "echo 'No build needed for static files'"
  publish = "public"

[build.environment]
  NODE_VERSION = "16"

[[redirects]]
  from = "/api/*"
  to = "https://your-server-url.com/:splat"
  status = 200

[[redirects]]
  from = "/admin"
  to = "/admin.html"
  status = 200

[[redirects]]
  from = "/shop"
  to = "/shop.html"
  status = 200

[[redirects]]
  from = "/*"
  to = "/index.html"
  status = 200
```

## 🔧 Quick Setup for Vercel (Recommended)

### Step 1: Create vercel.json
```bash
cd ecommerce-website
cat > vercel.json << 'EOF'
{
  "version": 2,
  "builds": [
    {
      "src": "server.js",
      "use": "@vercel/node"
    },
    {
      "src": "public/**/*",
      "use": "@vercel/static"
    }
  ],
  "routes": [
    {
      "src": "/api/(.*)",
      "dest": "/server.js"
    },
    {
      "src": "/admin",
      "dest": "/public/admin.html"
    },
    {
      "src": "/shop",
      "dest": "/public/shop.html"
    },
    {
      "src": "/(.*)",
      "dest": "/public/index.html"
    }
  ]
}
EOF
```

### Step 2: Deploy to Vercel
```bash
# Install Vercel CLI
npm i -g vercel

# Login
vercel login

# Deploy
cd ecommerce-website
vercel --prod
```

### Step 3: Configure Environment
- Go to your Vercel dashboard
- Select your project
- Go to Settings → Environment Variables
- Add these variables:
  ```
  MONGODB_URI: mongodb+srv://username:password@cluster.mongodb.net/ecommerce
  JWT_SECRET: your_super_secret_jwt_key_here
  ADMIN_EMAIL: admin@yourdomain.com
  ADMIN_PASSWORD: your_secure_admin_password
  ```

## 🗄️ MongoDB Atlas Setup (Free)

1. Go to [MongoDB Atlas](https://cloud.mongodb.com)
2. Create free account
3. Create new cluster (free tier M0)
4. Create database user
5. Get connection string
6. Whitelist your IP (use 0.0.0.0/0 for all)

## 🌍 Getting Your Domain

### Option A: Free Domain
- Use the provided Vercel/Heroku subdomain
- Example: `your-app.vercel.app`

### Option B: Custom Domain
1. Buy a domain from Namecheap, GoDaddy, etc.
2. Point DNS to your deployment
3. Configure SSL (usually automatic)

## 📱 Testing Your Online Store

1. **Create Products**: Use admin panel to add products
2. **Test Registration**: Create a new user account
3. **Test Shopping**: Add items to cart and complete checkout
4. **Test Reviews**: Leave product reviews
5. **Test Coupons**: Create and apply discount codes
6. **Test Mobile**: Check responsiveness on phones

## 🔒 Security for Production

```bash
# Update .env for production
NODE_ENV=production
JWT_SECRET=your_very_long_secure_secret_key_here_min_32_chars
MONGODB_URI=mongodb+srv://user:pass@cluster.mongodb.net/ecommerce
PORT=3000
```

## 📊 Monitoring

Add monitoring for production:
```bash
# Add to package.json
"scripts": {
  "start": "node server.js",
  "logs": "vercel logs",
  "status": "vercel ls"
}
```

## 🚀 Fastest Way to Go Live

**For immediate deployment in 5 minutes:**

1. **Use Vercel** (free, no credit card needed)
2. **MongoDB Atlas** (free tier)
3. **Deploy with one command**: `vercel --prod`

Your store will be live at `https://your-app-name.vercel.app`

---

Choose the option that best fits your needs. **Vercel + MongoDB Atlas** is recommended for beginners!