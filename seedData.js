const mongoose = require('mongoose');
const Product = require('./models/Product');
const User = require('./models/User');
const Review = require('./models/Review');
const Coupon = require('./models/Coupon');
require('dotenv').config();

mongoose.connect(process.env.MONGODB_URI || 'mongodb://localhost:27017/ecommerce', {
    useNewUrlParser: true,
    useUnifiedTopology: true,
}).then(() => {
    console.log('Connected to MongoDB');
    seedData();
}).catch((error) => {
    console.error('MongoDB connection error:', error);
});

async function seedData() {
    try {
        console.log('Starting to seed sample data...');
        
        // Clear existing data (except admin users)
        await Product.deleteMany({});
        await Review.deleteMany({});
        await Coupon.deleteMany({});
        await User.deleteMany({ role: 'user' });
        
        console.log('Cleared existing sample data');
        
        // Create sample products
        const sampleProducts = [
            {
                name: 'Wireless Bluetooth Headphones',
                price: 2999,
                description: 'Premium noise-cancelling wireless headphones with 30-hour battery life, superior sound quality, and comfortable over-ear design. Perfect for music lovers and professionals.',
                category: 'electronics',
                subCategory: 'Audio',
                images: [
                    'https://picsum.photos/seed/headphones1/400/400.jpg',
                    'https://picsum.photos/seed/headphones2/400/400.jpg'
                ],
                colors: ['Black', 'Silver', 'Blue'],
                stock: 50,
                trending: true,
                newLaunch: false,
                mostSelling: true
            },
            {
                name: 'Smart Fitness Watch',
                price: 4999,
                description: 'Advanced fitness tracking watch with heart rate monitor, GPS, water resistance, and 7-day battery life. Track your health and fitness goals with precision.',
                category: 'electronics',
                subCategory: 'Wearables',
                images: [
                    'https://picsum.photos/seed/smartwatch1/400/400.jpg',
                    'https://picsum.photos/seed/smartwatch2/400/400.jpg'
                ],
                colors: ['Black', 'Rose Gold', 'Silver'],
                stock: 30,
                trending: true,
                newLaunch: true,
                mostSelling: false
            },
            {
                name: 'Organic Cotton T-Shirt',
                price: 499,
                description: 'Comfortable and sustainable organic cotton t-shirt. Breathable fabric perfect for everyday wear. Available in multiple colors and sizes.',
                category: 'clothing',
                subCategory: 'Casual Wear',
                images: [
                    'https://picsum.photos/seed/tshirt1/400/400.jpg',
                    'https://picsum.photos/seed/tshirt2/400/400.jpg'
                ],
                colors: ['White', 'Black', 'Gray', 'Navy'],
                stock: 100,
                trending: false,
                newLaunch: false,
                mostSelling: true
            },
            {
                name: 'Stainless Steel Water Bottle',
                price: 799,
                description: 'Double-wall insulated stainless steel water bottle keeps drinks cold for 24 hours or hot for 12 hours. BPA-free and eco-friendly.',
                category: 'home',
                subCategory: 'Kitchen',
                images: [
                    'https://picsum.photos/seed/bottle1/400/400.jpg',
                    'https://picsum.photos/seed/bottle2/400/400.jpg'
                ],
                colors: ['Silver', 'Black', 'Blue', 'Red'],
                stock: 75,
                trending: true,
                newLaunch: false,
                mostSelling: false
            },
            {
                name: 'Programming Guide Book',
                price: 899,
                description: 'Comprehensive guide to modern programming practices and patterns. Essential resource for developers at all levels.',
                category: 'books',
                subCategory: 'Technology',
                images: [
                    'https://picsum.photos/seed/book1/400/400.jpg',
                    'https://picsum.photos/seed/book2/400/400.jpg'
                ],
                colors: [],
                stock: 40,
                trending: false,
                newLaunch: true,
                mostSelling: false
            },
            {
                name: 'Educational Building Blocks Set',
                price: 1299,
                description: 'Creative building blocks set for children and adults. Develops spatial awareness and creativity. 500+ pieces included.',
                category: 'toys',
                subCategory: 'Educational',
                images: [
                    'https://picsum.photos/seed/blocks1/400/400.jpg',
                    'https://picsum.photos/seed/blocks2/400/400.jpg'
                ],
                colors: ['Multicolor'],
                stock: 60,
                trending: false,
                newLaunch: false,
                mostSelling: true
            },
            {
                name: 'Professional Yoga Mat',
                price: 1499,
                description: 'High-quality non-slip yoga mat with extra cushioning for joint protection. Eco-friendly materials and easy to clean.',
                category: 'sports',
                subCategory: 'Fitness',
                images: [
                    'https://picsum.photos/seed/yogamat1/400/400.jpg',
                    'https://picsum.photos/seed/yogamat2/400/400.jpg'
                ],
                colors: ['Purple', 'Blue', 'Green', 'Pink'],
                stock: 45,
                trending: true,
                newLaunch: false,
                mostSelling: false
            },
            {
                name: 'Natural Face Cream',
                price: 699,
                description: 'Organic face cream with natural ingredients for all skin types. Hydrating and anti-aging properties. Dermatologically tested.',
                category: 'beauty',
                subCategory: 'Skincare',
                images: [
                    'https://picsum.photos/seed/cream1/400/400.jpg',
                    'https://picsum.photos/seed/cream2/400/400.jpg'
                ],
                colors: [],
                stock: 80,
                trending: false,
                newLaunch: true,
                mostSelling: false
            },
            {
                name: 'Premium Coffee Beans',
                price: 899,
                description: 'Premium arabica coffee beans from high-altitude farms. Rich flavor profile with notes of chocolate and caramel. 1kg pack.',
                category: 'food',
                subCategory: 'Beverages',
                images: [
                    'https://picsum.photos/seed/coffee1/400/400.jpg',
                    'https://picsum.photos/seed/coffee2/400/400.jpg'
                ],
                colors: [],
                stock: 55,
                trending: true,
                newLaunch: false,
                mostSelling: true
            },
            {
                name: 'Wireless Charging Pad',
                price: 1999,
                description: 'Fast wireless charging pad compatible with all Qi-enabled devices. Sleek design with LED indicator and overcharge protection.',
                category: 'electronics',
                subCategory: 'Accessories',
                images: [
                    'https://picsum.photos/seed/charger1/400/400.jpg',
                    'https://picsum.photos/seed/charger2/400/400.jpg'
                ],
                colors: ['Black', 'White'],
                stock: 70,
                trending: false,
                newLaunch: true,
                mostSelling: false
            },
            {
                name: 'Denim Jeans',
                price: 1299,
                description: 'Classic fit denim jeans with premium quality fabric. Comfortable stretch material and stylish design available in multiple sizes.',
                category: 'clothing',
                subCategory: 'Bottoms',
                images: [
                    'https://picsum.photos/seed/jeans1/400/400.jpg',
                    'https://picsum.photos/seed/jeans2/400/400.jpg'
                ],
                colors: ['Blue', 'Black', 'Gray'],
                stock: 85,
                trending: false,
                newLaunch: false,
                mostSelling: true
            },
            {
                name: 'Ceramic Dinner Set',
                price: 2499,
                description: 'Elegant 24-piece ceramic dinner set for 6 people. Microwave and dishwasher safe. Perfect for modern homes.',
                category: 'home',
                subCategory: 'Dining',
                images: [
                    'https://picsum.photos/seed/dinner1/400/400.jpg',
                    'https://picsum.photos/seed/dinner2/400/400.jpg'
                ],
                colors: ['White', 'Blue'],
                stock: 25,
                trending: false,
                newLaunch: true,
                mostSelling: false
            },
            {
                name: 'Mystery Novel Collection',
                price: 799,
                description: 'Collection of bestselling mystery novels from renowned authors. Perfect for thriller and mystery enthusiasts.',
                category: 'books',
                subCategory: 'Fiction',
                images: [
                    'https://picsum.photos/seed/mystery1/400/400.jpg',
                    'https://picsum.photos/seed/mystery2/400/400.jpg'
                ],
                colors: [],
                stock: 35,
                trending: true,
                newLaunch: false,
                mostSelling: false
            },
            {
                name: 'Remote Control Car',
                price: 1899,
                description: 'High-speed remote control car with rechargeable battery. All-terrain tires and LED lights. 2.4GHz remote control.',
                category: 'toys',
                subCategory: 'Vehicles',
                images: [
                    'https://picsum.photos/seed/rccar1/400/400.jpg',
                    'https://picsum.photos/seed/rccar2/400/400.jpg'
                ],
                colors: ['Red', 'Blue', 'Black'],
                stock: 40,
                trending: true,
                newLaunch: false,
                mostSelling: true
            },
            {
                name: 'Tennis Racket',
                price: 3999,
                description: 'Professional-grade tennis racket with carbon fiber frame. Perfect balance and power for intermediate to advanced players.',
                category: 'sports',
                subCategory: 'Racket Sports',
                images: [
                    'https://picsum.photos/seed/tennis1/400/400.jpg',
                    'https://picsum.photos/seed/tennis2/400/400.jpg'
                ],
                colors: ['Black', 'White'],
                stock: 30,
                trending: false,
                newLaunch: true,
                mostSelling: false
            }
        ];

        const insertedProducts = await Product.insertMany(sampleProducts);
        console.log(`Created ${insertedProducts.length} sample products`);

        // Create sample users
        const sampleUsers = [
            {
                name: 'John Doe',
                contactNumber: '9876543210',
                username: 'johndoe',
                email: 'john@example.com',
                password: '$2a$12$LQv3c1yqBWVHxkd0LHAkCOYz6TtxMQJqhN8/LewdBPj6ukx.LrUpm', // password123
                role: 'user',
                coins: 250,
                isFirstTime: false
            },
            {
                name: 'Jane Smith',
                contactNumber: '9876543211',
                username: 'janesmith',
                email: 'jane@example.com',
                password: '$2a$12$LQv3c1yqBWVHxkd0LHAkCOYz6TtxMQJqhN8/LewdBPj6ukx.LrUpm', // password123
                role: 'user',
                coins: 150,
                isFirstTime: false
            },
            {
                name: 'Mike Johnson',
                contactNumber: '9876543212',
                username: 'mikejohnson',
                email: 'mike@example.com',
                password: '$2a$12$LQv3c1yqBWVHxkd0LHAkCOYz6TtxMQJqhN8/LewdBPj6ukx.LrUpm', // password123
                role: 'user',
                coins: 500,
                isFirstTime: false
            },
            {
                name: 'Sarah Williams',
                contactNumber: '9876543213',
                username: 'sarahwilliams',
                email: 'sarah@example.com',
                password: '$2a$12$LQv3c1yqBWVHxkd0LHAkCOYz6TtxMQJqhN8/LewdBPj6ukx.LrUpm', // password123
                role: 'user',
                coins: 75,
                isFirstTime: false
            }
        ];

        const insertedUsers = await User.insertMany(sampleUsers);
        console.log(`Created ${insertedUsers.length} sample users`);

        // Create sample reviews
        const sampleReviews = [];
        const reviewTexts = [
            'Excellent product! Exceeded my expectations in quality and performance.',
            'Good value for money. Would definitely recommend to others.',
            'Amazing quality! Fast delivery and great customer service.',
            'Product is exactly as described. Very satisfied with my purchase.',
            'Outstanding! This is my second purchase and I\'m very happy.',
            'Great product! Works perfectly and looks even better in person.',
            'Highly recommend! Best purchase I\'ve made this year.',
            'Fantastic quality and design. Worth every penny!',
            'Perfect! Exactly what I was looking for. Thank you!',
            'Excellent experience! Product quality is superb.'
        ];

        for (let i = 0; i < 10; i++) {
            const product = insertedProducts[Math.floor(Math.random() * insertedProducts.length)];
            const user = insertedUsers[Math.floor(Math.random() * insertedUsers.length)];
            const rating = Math.floor(Math.random() * 2) + 4; // 4 or 5 stars
            
            sampleReviews.push({
                user: user._id,
                product: product._id,
                rating,
                comment: reviewTexts[i]
            });
        }

        const insertedReviews = await Review.insertMany(sampleReviews);
        console.log(`Created ${insertedReviews.length} sample reviews`);

        // Create sample coupons
        const sampleCoupons = [
            {
                code: 'WELCOME10',
                owner: insertedUsers[0]._id,
                discount: 10,
                discountType: 'percentage',
                maxUses: 10,
                currentUses: 3,
                isActive: true
            },
            {
                code: 'SUMMER20',
                owner: insertedUsers[1]._id,
                discount: 20,
                discountType: 'percentage',
                maxUses: 15,
                currentUses: 7,
                isActive: true
            },
            {
                code: 'SPECIAL500',
                owner: insertedUsers[2]._id,
                discount: 500,
                discountType: 'fixed',
                maxUses: 5,
                currentUses: 2,
                isActive: true
            }
        ];

        const insertedCoupons = await Coupon.insertMany(sampleCoupons);
        console.log(`Created ${insertedCoupons.length} sample coupons`);

        console.log('\n🎉 Sample data seeding completed successfully!');
        console.log('\n📝 Login Credentials for Testing:');
        console.log('Admin: admin@shop.com / admin123');
        console.log('Users:');
        sampleUsers.forEach((user, index) => {
            console.log(`  ${index + 1}. ${user.username} / password123`);
        });
        console.log('\n🔗 Access the application at: http://localhost:3000');
        console.log('👑 Admin panel at: http://localhost:3000/admin');
        
        process.exit(0);
        
    } catch (error) {
        console.error('Error seeding data:', error);
        process.exit(1);
    }
}