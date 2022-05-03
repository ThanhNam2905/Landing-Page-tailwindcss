###### Setup Project For TailwindCSS

## Step 1: 
    npm init (created package.json)
## Step 2: 
    npm install -D tailwindcss@latest postcss@latest autoprefixer@latest
## Step 3: created floder src -> new files tailwind.css
## Step 4: 
    edit in file package.json
        "scripts": {
            "start": "tailwind build -i src/tailwind.css -o public/css/style.css --w"
        }
## Step 5:
    npm run start
