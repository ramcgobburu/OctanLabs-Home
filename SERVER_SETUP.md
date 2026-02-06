# Fix "Connection Failed" – Dev Server

## 1. Open terminal in project folder
```bash
cd /Users/ramgobburu/Documents/octanlabs-consolidated
```

## 2. Install dependencies (if needed)
```bash
npm install
```
Wait until it finishes (can take 1–2 minutes).

## 3. Start the dev server
```bash
npm run dev
```

Wait until you see something like:
```
▲ Next.js 15.x.x
- Local:        http://localhost:3000
✓ Ready in 2.5s
```

## 4. Open in browser
- Go to **http://localhost:3000**
- Prefer **http://localhost:3000** over **http://127.0.0.1:3000** if one fails

## If it still says "Connection failed"

**Port in use?**  
Stop whatever is on 3000, then start again:
```bash
# macOS/Linux – kill process on port 3000
lsof -ti:3000 | xargs kill -9

# Then start
npm run dev
```

**"next: command not found"?**  
Run with npx:
```bash
npx next dev --turbopack
```

**Node version?**  
Use Node 18 or 20:
```bash
node -v
```
If it’s old, install from https://nodejs.org or use `nvm`.

**Firewall / VPN?**  
Temporarily turn off VPN or allow Node/terminal in your firewall, then try again.

**Different port?**  
```bash
npx next dev --turbopack -p 3001
```
Then open **http://localhost:3001**.
