# Company
npx create-next-app --example with-tailwindcss web
cd web  
rm -rf .git  
git init  
git add -A && git commit -m "first commit"  
git push

# sanity 
npm install -g @sanity/cli  
sanity init --coupon sonny2022  

# Tailwind 
npx create-next-app web  
cd web  
npm install -D tailwindcss postcss autoprefixer  
npx tailwindcss init -p  

# 
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {},
  },
  plugins: [],
}

# 
@tailwind base;
@tailwind components;
@tailwind utilities;


cd web  
touch netlyfy.toml  
npm install -D @netlify/plugin-nextjs@latest  


...then add the plugin to your netlify.toml file:  
[[plugins]]  
package = "@netlify/plugin-nextjs"  

[build]  
publish = ".next"  

base:  
web

build:     
npm run build  

Publish directory:  
.next
# lighthouse-food-park
