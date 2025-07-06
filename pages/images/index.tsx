import fs from 'fs/promises';
import path from 'path';
import Image from 'next/image';
import Head from 'next/head';
import Header from '@/lib/components/header';
import Footer from '@/lib/components/footer';
import { GalleryItem, GalleryProps, ImagesGalleryPageProps } from "@/lib/interface";

const IMAGES_ROOT = path.join(process.cwd(), 'public', 'images');

async function getImages(dir = ''): Promise<GalleryItem[]> {
  const absDir = path.join(IMAGES_ROOT, dir);
  const entries = await fs.readdir(absDir, { withFileTypes: true });
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
    } else if (/\.(png|jpe?g|gif|webp|avif)$/i.test(entry.name)) {
      files.push({
        type: 'image',
        name: entry.name,
        path: path.join('/images', dir, entry.name).replace(/\\/g, '/'),
      });
    }
  }
  return files;
}

export async function getServerSideProps() {
  const images = await getImages();
  return { props: { images } };
}

function Gallery({ images, folder = '' }: GalleryProps) {
  return (
    <div className="mb-12">
      {folder && (
        <h2 className="text-2xl font-heading text-jade mb-4 mt-8">{folder}</h2>
      )}
      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-4">
        {images.map((item: GalleryItem) =>
          item.type === 'image' ? (
            <div key={item.path} className="bg-smoke rounded shadow hover:shadow-lg transition overflow-hidden">
              <Image
                src={item.path}
                alt={item.name}
                width={400}
                height={300}
                className="object-cover w-full h-40"
                loading="lazy"
              />
              <div className="p-2 text-xs text-dark truncate">{item.name}</div>
            </div>
          ) : (
            <div key={item.path} className="col-span-full">
              <Gallery images={item.children} folder={item.name} />
            </div>
          )
        )}
      </div>
    </div>
  );
}


export default function ImagesGalleryPage({ images }: ImagesGalleryPageProps) {
  return (
    <>
      <Head>
        <title>Медиа-галерея | Temple Five Dawns</title>
        <meta name="description" content="Галерея изображений сообщества Temple Five Dawns" />
      </Head>
      <div className="min-h-screen bg-smoke-dark flex flex-col">
        <Header />
        <main className="container mx-auto px-4 py-12 flex-1">
          <h1 className="text-4xl font-heading text-jade mb-8">МЕДИА-ГАЛЕРЕЯ</h1>
          <Gallery images={images} />
        </main>
        <Footer />
      </div>
    </>
  );
}
