import path from 'path';
import fs from 'fs';
import { GalleryItem } from "@/lib/interface";

const IMAGES_ROOT = path.join(process.cwd(), 'public', 'images');

export async function getImages(dir = ''): Promise<GalleryItem[]> {
  const absDir = path.join(IMAGES_ROOT, dir);
  const entries = fs.readdirSync(absDir, { withFileTypes: true });
  let files: GalleryItem[] = [];
  for (const entry of entries) {
    if (entry.isDirectory()) {
      const subFiles = await getImages(path.join(dir, entry.name));
      files.push({
        type: 'folder',
        name: entry.name,
        path: path.join(dir, entry.name),
        children: subFiles,
      });
    } else if (/(\.png|jpe?g|gif|webp|avif)$/i.test(entry.name)) {
      files.push({
        type: 'image',
        name: entry.name,
        path: path.join('/images', dir, entry.name).replace(/\\/g, '/'),
      });
    }
  }
  return files;
}
