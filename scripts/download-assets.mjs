#!/usr/bin/env node

/**
 * Asset downloader for LovingMyCurves.com migration
 * Downloads images and other assets to public/ directory
 */

import { writeFileSync, mkdirSync, existsSync } from 'fs';
import { dirname, join, basename } from 'path';
import { fileURLToPath } from 'url';

const __dirname = dirname(fileURLToPath(import.meta.url));
const PUBLIC_DIR = join(__dirname, '..', 'public');

// Asset lists from extraction
const assets = {
  images: [
    'https://www.lovingmycurves.com/wp-content/uploads/2018/08/My-Curves-Logo-2-Rivers-Mall.png',
    'https://www.lovingmycurves.com/wp-content/uploads/2020/09/Bras-1.jpg',
    'https://www.lovingmycurves.com/wp-content/uploads/2025/07/lovelace-black-1.jpg',
    'https://www.lovingmycurves.com/wp-content/uploads/2020/09/Sportswear-1.jpg',
    'https://www.lovingmycurves.com/wp-content/uploads/2022/11/Shapewear-1-scaled.jpg',
  ],
  heroSlides: [
    'https://www.lovingmycurves.com/wp-content/uploads/2024/09/D0308445-1-1.jpg',
    'https://www.lovingmycurves.com/wp-content/uploads/2024/09/D0308277-1-1.jpg',
    'https://www.lovingmycurves.com/wp-content/uploads/2024/09/D0308435.jpg',
    'https://www.lovingmycurves.com/wp-content/uploads/2023/11/D0304503.jpg',
    'https://www.lovingmycurves.com/wp-content/uploads/2023/11/D0304346.jpg',
    'https://www.lovingmycurves.com/wp-content/uploads/2023/11/Homepage-2.jpg',
  ],
  favicons: [
    'https://www.lovingmycurves.com/wp-content/uploads/2023/09/cropped-fav-curve-32x32.png',
    'https://www.lovingmycurves.com/wp-content/uploads/2023/09/cropped-fav-curve-192x192.png',
    'https://www.lovingmycurves.com/wp-content/uploads/2023/09/cropped-fav-curve-180x180.png',
  ],
};

async function downloadAsset(url, outputPath) {
  try {
    const response = await fetch(url);
    if (!response.ok) throw new Error(`HTTP ${response.status}`);
    
    const buffer = await response.arrayBuffer();
    const dir = dirname(outputPath);
    
    if (!existsSync(dir)) {
      mkdirSync(dir, { recursive: true });
    }
    
    writeFileSync(outputPath, Buffer.from(buffer));
    console.log(`✓ Downloaded: ${basename(outputPath)}`);
    return true;
  } catch (error) {
    console.error(`✗ Failed: ${basename(outputPath)} - ${error.message}`);
    return false;
  }
}

async function downloadBatch(urls, subdir, batchSize = 4) {
  const results = [];
  
  for (let i = 0; i < urls.length; i += batchSize) {
    const batch = urls.slice(i, i + batchSize);
    const promises = batch.map((url, idx) => {
      const filename = basename(new URL(url).pathname);
      const outputPath = join(PUBLIC_DIR, subdir, filename);
      return downloadAsset(url, outputPath);
    });
    
    const batchResults = await Promise.all(promises);
    results.push(...batchResults);
    
    // Brief pause between batches
    if (i + batchSize < urls.length) {
      await new Promise(resolve => setTimeout(resolve, 500));
    }
  }
  
  return results;
}

async function main() {
  console.log('Starting asset download for LovingMyCurves migration...\n');
  
  console.log('Downloading category images...');
  await downloadBatch(assets.images, 'images/categories');
  
  console.log('\nDownloading hero slider images...');
  await downloadBatch(assets.heroSlides, 'images/hero');
  
  console.log('\nDownloading favicons...');
  await downloadBatch(assets.favicons, 'seo');
  
  console.log('\n✓ Asset download complete!');
}

main().catch(console.error);
