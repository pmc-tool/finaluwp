# Deployment Guide

This guide provides step-by-step instructions for deploying the UWP 2025 Manifesto website to various hosting platforms.

## Pre-Deployment Checklist

Before deploying, ensure you've completed the following:

- [ ] Test the production build locally (`npm run build`)
- [ ] Verify all images are in `public/images/`
- [ ] Update `metadataBase` URL in `app/layout.tsx`
- [ ] Update social media links in Footer and CTA components
- [ ] Update contact information in Footer
- [ ] Test all navigation links
- [ ] Review content for accuracy
- [ ] Test on mobile devices

## Building for Production

```bash
# 1. Install dependencies
npm install

# 2. Build the static site
npm run build

# 3. The output will be in the 'out/' directory
```

## Deployment Options

### Option 1: Netlify (Recommended)

**Via Drag & Drop:**
1. Run `npm run build`
2. Go to [app.netlify.com](https://app.netlify.com)
3. Drag the `out/` folder onto the Netlify dashboard
4. Your site is live!

**Via Git Integration:**
1. Push your code to GitHub/GitLab/Bitbucket
2. Connect your repository to Netlify
3. Configure build settings:
   - **Build command**: `npm run build`
   - **Publish directory**: `out`
4. Deploy

### Option 2: Vercel

**Via CLI:**
```bash
# Install Vercel CLI
npm install -g vercel

# Deploy
vercel --prod
```

**Via Git Integration:**
1. Push your code to GitHub
2. Go to [vercel.com](https://vercel.com)
3. Import your GitHub repository
4. Vercel auto-detects Next.js settings
5. Deploy

### Option 3: GitHub Pages

1. Build the site:
```bash
npm run build
```

2. Install gh-pages:
```bash
npm install --save-dev gh-pages
```

3. Add to `package.json`:
```json
{
  "scripts": {
    "deploy": "gh-pages -d out"
  }
}
```

4. Deploy:
```bash
npm run deploy
```

5. Enable GitHub Pages in repository settings

### Option 4: AWS S3 + CloudFront

1. Create an S3 bucket:
```bash
aws s3 mb s3://uwp-manifesto
```

2. Build the site:
```bash
npm run build
```

3. Upload to S3:
```bash
aws s3 sync out/ s3://uwp-manifesto --delete
```

4. Enable static website hosting
5. Set up CloudFront distribution for HTTPS

### Option 5: Traditional Web Hosting (cPanel)

1. Build the site:
```bash
npm run build
```

2. Compress the `out/` directory:
```bash
zip -r uwp-manifesto.zip out/
```

3. Upload via FTP or cPanel File Manager
4. Extract in public_html directory
5. Configure `.htaccess` if needed

## Post-Deployment

### Configure Domain

Point your domain to the deployment:
- **Netlify/Vercel**: Add custom domain in dashboard
- **GitHub Pages**: Configure CNAME file
- **AWS S3**: Configure Route 53
- **Traditional**: Update DNS A record

### SSL Certificate

- **Netlify/Vercel**: Auto-provisioned
- **GitHub Pages**: Auto-provisioned for github.io
- **AWS**: Use AWS Certificate Manager
- **Traditional**: Use Let's Encrypt or hosting provider's SSL

### Test Deployment

After deployment, verify:
- [ ] Homepage loads correctly
- [ ] All navigation links work
- [ ] Flipbook loads and functions
- [ ] Images display properly
- [ ] Mobile responsiveness
- [ ] Social media meta tags (use [opengraph.xyz](https://opengraph.xyz))
- [ ] Page load speed (use [PageSpeed Insights](https://pagespeed.web.dev))

## Environment-Specific Configuration

### Update Production URLs

In `app/layout.tsx`:
```typescript
export const metadata: Metadata = {
  metadataBase: new URL('https://your-production-domain.com'),
  // ...
}
```

### Update Social Links

In `app/components/Footer.tsx` and `app/components/CTA.tsx`:
- Facebook: https://facebook.com/uwpsaintlucia
- Twitter: https://twitter.com/uwpsaintlucia
- Instagram: https://instagram.com/uwpsaintlucia

### Update Contact Information

In `app/components/Footer.tsx`:
- Physical address
- Email: info@uwpsaintlucia.org
- Phone: +1 (758) 452-1234

## Performance Optimization

### Image Optimization

For even better performance:
1. Compress images using [TinyPNG](https://tinypng.com)
2. Convert to WebP format
3. Use responsive images

### CDN Configuration

- **Netlify/Vercel**: CDN included
- **CloudFlare**: Add CloudFlare in front of hosting
- **AWS**: Use CloudFront distribution

### Caching

Configure cache headers:
```
# .htaccess for Apache
<IfModule mod_headers.c>
  <FilesMatch "\\.(jpg|jpeg|png|gif|svg|js|css|pdf)$">
    Header set Cache-Control "max-age=31536000, public"
  </FilesMatch>
</IfModule>
```

## Monitoring

### Analytics

Add Google Analytics or similar:
1. Create analytics property
2. Add tracking code to `app/layout.tsx`

### Error Tracking

Consider adding:
- Sentry for error tracking
- LogRocket for session replay
- Hotjar for user behavior

## Maintenance

### Regular Updates

- Update dependencies monthly
- Review security advisories
- Update content as needed
- Test after updates

### Backup

- Keep source code in Git
- Export static site monthly
- Backup PDF and images

## Troubleshooting

### Build Fails

```bash
# Clear cache and rebuild
rm -rf .next node_modules
npm install
npm run build
```

### Images Not Loading

- Check image paths are relative to `public/`
- Verify images exist in correct location
- Check file permissions

### 404 Errors

- Ensure all links use hash navigation for single-page app
- Configure server redirects if needed

### Performance Issues

- Enable gzip compression
- Optimize images
- Use CDN
- Enable caching

## Support

For deployment issues:
- **Email**: info@uwpsaintlucia.org
- **Technical Support**: Check README.md

## Security

### Best Practices

- [ ] Enable HTTPS
- [ ] Set security headers
- [ ] Regular security updates
- [ ] Monitor for vulnerabilities

### Security Headers

```
# .htaccess
<IfModule mod_headers.c>
  Header set X-Frame-Options "SAMEORIGIN"
  Header set X-Content-Type-Options "nosniff"
  Header set X-XSS-Protection "1; mode=block"
  Header set Referrer-Policy "strict-origin-when-cross-origin"
</IfModule>
```

## Cost Estimates

- **Netlify**: Free tier available (100GB bandwidth)
- **Vercel**: Free tier available (100GB bandwidth)
- **GitHub Pages**: Free for public repositories
- **AWS S3 + CloudFront**: ~$5-10/month for low traffic
- **Traditional Hosting**: $5-20/month depending on provider

---

**Last Updated**: November 2025
**Deployment Target**: Static Export
**Framework**: Next.js 14.2.18
