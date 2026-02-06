# Deploying to Vercel

## Quick Deploy

### Option 1: Deploy via Vercel Dashboard (Recommended)

1. **Push your code to GitHub/GitLab/Bitbucket**
   ```bash
   git init
   git add .
   git commit -m "Initial commit"
   git remote add origin <your-repo-url>
   git push -u origin main
   ```

2. **Go to Vercel Dashboard**
   - Visit https://vercel.com
   - Sign in with your GitHub account
   - Click "Add New Project"
   - Import your repository

3. **Configure Project**
   - Framework Preset: **Next.js** (auto-detected)
   - Root Directory: `./` (default)
   - Build Command: `npm run build` (default)
   - Output Directory: `.next` (default)
   - Install Command: `npm install` (default)

4. **Deploy**
   - Click "Deploy"
   - Vercel will automatically build and deploy your site

### Option 2: Deploy via Vercel CLI

1. **Install Vercel CLI**
   ```bash
   npm i -g vercel
   ```

2. **Deploy**
   ```bash
   cd /Users/ramgobburu/Documents/octanlabs-consolidated
   vercel
   ```

3. **Follow the prompts**
   - Link to existing project or create new
   - Confirm settings
   - Deploy

## Environment Variables

If you need any environment variables, add them in:
- Vercel Dashboard → Project Settings → Environment Variables

## Build Settings

The project is configured with:
- **Framework**: Next.js 15.5.3
- **Node Version**: Auto-detected (recommended: 18.x or higher)
- **Build Command**: `npm run build`
- **Output Directory**: `.next` (auto-detected)

## Post-Deployment

After deployment:
1. Your site will be available at `https://your-project.vercel.app`
2. You can add a custom domain in Project Settings → Domains
3. Automatic deployments happen on every push to main branch

## Troubleshooting

If build fails:
- Check build logs in Vercel Dashboard
- Ensure all dependencies are in `package.json`
- Verify Node.js version compatibility (18.x+)
