#!/usr/bin/env node

/**
 * Image Optimization Script for Vision5 Landing Page
 * 
 * This script helps identify and optimize large images that are causing performance issues.
 * 
 * CRITICAL ISSUES FOUND:
 * - app.jpg: 14MB (WAY TOO LARGE!)
 * - pexels-tima-miroshnichenko-7567561.jpg: 1.5MB
 * - microsoftLogo.jpg: 423KB
 * - analytics.jpg: 367KB
 * 
 * RECOMMENDATIONS:
 * 1. Compress app.jpg to under 200KB
 * 2. Convert all images to WebP format
 * 3. Use responsive images with multiple sizes
 * 4. Implement lazy loading for below-the-fold images
 */

const fs = require('fs');
const path = require('path');

const publicDir = path.join(__dirname, '../public');
const servicesDir = path.join(publicDir, 'services');

function getFileSizeInMB(filePath) {
  const stats = fs.statSync(filePath);
  return (stats.size / (1024 * 1024)).toFixed(2);
}

function analyzeImages() {
  console.log('🔍 Analyzing images for performance issues...\n');
  
  if (fs.existsSync(servicesDir)) {
    const files = fs.readdirSync(servicesDir);
    
    files.forEach(file => {
      const filePath = path.join(servicesDir, file);
      const size = getFileSizeInMB(filePath);
      
      if (size > 0.5) { // Files larger than 500KB
        console.log(`⚠️  ${file}: ${size}MB`);
        
        if (size > 1) {
          console.log(`   🚨 CRITICAL: This file is too large! Should be under 200KB`);
        }
      }
    });
  }
  
  console.log('\n📋 OPTIMIZATION CHECKLIST:');
  console.log('1. Compress app.jpg from 14MB to under 200KB');
  console.log('2. Convert all images to WebP format');
  console.log('3. Use Next.js Image component with proper sizing');
  console.log('4. Implement lazy loading for non-critical images');
  console.log('5. Add blur placeholders for better UX');
  console.log('6. Use responsive images with multiple breakpoints');
  
  console.log('\n🛠️  TOOLS TO USE:');
  console.log('- TinyPNG (https://tinypng.com) for compression');
  console.log('- Squoosh (https://squoosh.app) for WebP conversion');
  console.log('- Next.js Image component with sizes prop');
  console.log('- Image optimization services like Cloudinary or Imgix');
}

analyzeImages();
