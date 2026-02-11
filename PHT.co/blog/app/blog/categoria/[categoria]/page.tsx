import { getPostsByCategory, getAllCategories } from '@/lib/posts';
import Link from 'next/link';
import { notFound } from 'next/navigation';
import type { Metadata } from 'next';

interface Props {
  params: {
    categoria: string;
  };
}

export async function generateStaticParams() {
  const categories = getAllCategories();
  return categories.map((category) => ({
    categoria: category,
  }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const categoryName = params.categoria.replace(/-/g, ' ').toUpperCase();
  
  return {
    title: `${categoryName} | Blog PHT`,
    description: `Artigos sobre ${categoryName.toLowerCase()} para escritórios de advocacia`,
  };
}

export default function CategoryPage({ params }: Props) {
  const posts = getPostsByCategory(params.categoria);

  if (posts.length === 0) {
    notFound();
  }

  const categoryName = params.categoria.replace(/-/g, ' ').toUpperCase();

  return (
    <div className="min-h-screen bg-pht-dark pt-16 pb-16 px-4">
      <div className="max-w-6xl mx-auto">
        {/* Link de volta para site principal */}
        <div className="mb-8">
          <a 
            href={process.env.NEXT_PUBLIC_MAIN_SITE_URL || "../../../"}
            className="inline-flex items-center text-pht-gold hover:text-white transition-colors font-bold uppercase text-sm"
          >
            ← Voltar ao site
          </a>
        </div>
        
        {/* Breadcrumb */}
        <nav className="mb-8 text-sm">
          <Link href="/blog" className="text-gray-400 hover:text-pht-gold normal-case">
            Blog
          </Link>
          <span className="text-gray-600 mx-2">/</span>
          <span className="text-pht-gold uppercase">{categoryName}</span>
        </nav>

        <h1 className="text-4xl md:text-5xl font-extrabold text-pht-gold mb-4 uppercase">
          {categoryName}
        </h1>
        <p className="text-xl text-gray-300 mb-12 normal-case font-normal">
          {posts.length} {posts.length === 1 ? 'artigo' : 'artigos'} nesta categoria
        </p>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {posts.map((post) => (
            <article
              key={post.slug}
              className="bg-pht-black border border-gray-800 rounded-lg overflow-hidden hover:border-pht-gold transition-all duration-300 hover:-translate-y-2"
            >
              <Link href={`/blog/${post.slug}`}>
                <div className="h-48 bg-gray-700 flex items-center justify-center text-gray-500">
                  {post.image ? (
                    <img src={post.image} alt={post.title} className="w-full h-full object-cover" />
                  ) : (
                    '[IMAGEM]'
                  )}
                </div>
                <div className="p-6">
                  <div className="flex items-center justify-between mb-3">
                    <span className="text-xs text-pht-gold uppercase font-bold tracking-wider">
                      {post.category}
                    </span>
                    <span className="text-xs text-gray-500 normal-case">
                      {new Date(post.date).toLocaleDateString('pt-BR')}
                    </span>
                  </div>
                  <h2 className="text-xl font-bold text-white mb-3 uppercase leading-tight hover:text-pht-gold transition-colors">
                    {post.title}
                  </h2>
                  <p className="text-gray-400 text-sm normal-case font-normal leading-relaxed">
                    {post.excerpt}
                  </p>
                  <div className="mt-4 text-pht-gold text-sm font-bold uppercase tracking-wider hover:text-white transition-colors">
                    Ler mais →
                  </div>
                </div>
              </Link>
            </article>
          ))}
        </div>

        {/* Back to blog */}
        <div className="mt-12 text-center">
          <Link
            href="/blog"
            className="inline-block text-pht-gold hover:text-white uppercase font-bold transition-colors"
          >
            ← Voltar para o blog
          </Link>
        </div>
      </div>
    </div>
  );
}
