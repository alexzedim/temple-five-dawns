import Image from 'next/image';
import Head from 'next/head';
import Header from '@/lib/components/header';
import Footer from '@/lib/components/footer';
import { GalleryItem, GalleryProps, ImagesGalleryPageProps } from "@/lib/interface";
import { formatImageName } from "@/lib/utils";

function Gallery({ images, folder = '' }: GalleryProps) {
  return (
    <div className="mb-12">
      {folder && (
        <h2 className="text-4xl font-heading text-jade mb-4 mt-8 uppercase">{folder}</h2>
      )}
      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-4">
        {images.map((item: GalleryItem) =>
          item.type === 'image' ? (
            <div key={item.path} className="bg-smoke rounded shadow hover:shadow-lg transition overflow-hidden">
              <Image
                src={item.path}
                alt={formatImageName(item.name)}
                width={400}
                height={300}
                className="object-cover w-full h-40"
                loading="lazy"
              />
              <div className="p-2 text-xs text-dark truncate">{formatImageName(item.name)}</div>
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
          <p className="mb-8 text-base text-dark/80 max-w-2xl">
            В этой галерее собраны изображения, мемы и арты, связанные с сообществом Temple Five Dawns. Здесь вы найдете творческие работы участников, памятные моменты и атмосферу нашего пространства. Что-бы просмотреть любой файл в полном размере, просто откройте его в новой вкладке, нажав на картинку в выпадающем меню.
          </p>
          <Gallery images={images} />
        </main>
        <Footer />
      </div>
    </>
  );
}

export async function getStaticProps() {
  const { getImages } = await import("@/lib/images");
  const images = await getImages();
  return { props: { images } };
}
