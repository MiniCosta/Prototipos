import { getAllPosts, getPostBySlug, getRelatedPosts } from '@/lib/posts';
import { notFound } from 'next/navigation';
import Link from 'next/link';
import { MDXRemote } from 'next-mdx-remote/rsc';
import type { Metadata } from 'next';

interface Props {
  params: {
    slug: string;
  };
}

export async function generateStaticParams() {
  const posts = getAllPosts();
  return posts.map((post) => ({
    slug: post.slug,
  }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const post = getPostBySlug(params.slug);
  
  if (!post) {
    return {
      title: 'Post não encontrado',
    };
  }

  return {
    title: `${post.title} | PHT Blog`,
    description: post.excerpt,
    openGraph: {
      title: post.title,
      description: post.excerpt,
      type: 'article',
      publishedTime: post.date,
      authors: [post.author],
    },
  };
}

export default function BlogPost({ params }: Props) {
  const post = getPostBySlug(params.slug);

  if (!post) {
    notFound();
  }

  const relatedPosts = getRelatedPosts(post.slug, post.category);

  // Schema markup para SEO
  const schema = {
    '@context': 'https://schema.org',
    '@type': 'BlogPosting',
    headline: post.title,
    author: {
      '@type': 'Person',
      name: post.author,
    },
    datePublished: post.date,
    description: post.excerpt,
    articleBody: post.content,
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
      />
      
      <article className="min-h-screen bg-pht-dark pt-16 pb-16 px-4">
        <div className="max-w-4xl mx-auto">
          {/* Link de volta para site principal */}
          <div className="mb-8">
            <a 
              href={process.env.NEXT_PUBLIC_MAIN_SITE_URL || "../../"}
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
            <Link 
              href={`/blog/categoria/${post.category}`} 
              className="text-gray-400 hover:text-pht-gold uppercase"
            >
              {post.category}
            </Link>
          </nav>

          {/* Header */}
          <header className="mb-12">
            <div className="flex items-center gap-4 mb-4">
              <Link
                href={`/blog/categoria/${post.category}`}
                className="text-xs text-pht-gold uppercase font-bold tracking-wider hover:text-white transition-colors"
              >
                {post.category}
              </Link>
              <span className="text-gray-600">•</span>
              <time className="text-sm text-gray-400 normal-case">
                {new Date(post.date).toLocaleDateString('pt-BR', {
                  day: 'numeric',
                  month: 'long',
                  year: 'numeric',
                })}
              </time>
            </div>
            <h1 className="text-4xl md:text-5xl font-extrabold text-white mb-6 uppercase leading-tight">
              {post.title}
            </h1>
            <p className="text-xl text-gray-300 mb-6 normal-case font-normal leading-relaxed">
              {post.excerpt}
            </p>
            <div className="flex items-center gap-3">
              <div className="w-12 h-12 bg-pht-gold rounded-full flex items-center justify-center text-pht-black font-bold text-xl">
                {post.author.charAt(0)}
              </div>
              <div>
                <p className="font-bold text-white normal-case">{post.author}</p>
                <p className="text-sm text-gray-400 normal-case">Especialista em Marketing Jurídico</p>
              </div>
            </div>
          </header>

          {/* Featured Image */}
          {post.image && (
            <div className="mb-12 rounded-lg overflow-hidden">
              <img src={post.image} alt={post.title} className="w-full h-auto" />
            </div>
          )}

          {/* Content */}
          <div className="prose prose-invert max-w-none">
            <MDXRemote source={post.content} />
          </div>

          {/* Tags */}
          {post.tags && post.tags.length > 0 && (
            <div className="mt-12 pt-8 border-t border-gray-800">
              <div className="flex flex-wrap gap-2">
                {post.tags.map((tag) => (
                  <span
                    key={tag}
                    className="px-4 py-2 bg-pht-black border border-pht-gold text-pht-gold text-xs uppercase font-bold rounded"
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </div>
          )}

          {/* Related Posts */}
          {relatedPosts.length > 0 && (
            <div className="mt-16 pt-12 border-t border-gray-800">
              <h2 className="text-2xl font-bold text-white mb-8 uppercase">
                Artigos Relacionados
              </h2>
              <div className="grid md:grid-cols-3 gap-6">
                {relatedPosts.map((relatedPost) => (
                  <Link
                    key={relatedPost.slug}
                    href={`/blog/${relatedPost.slug}`}
                    className="group"
                  >
                    <article className="bg-pht-black border border-gray-800 rounded-lg p-6 hover:border-pht-gold transition-all duration-300">
                      <h3 className="text-lg font-bold text-white mb-2 uppercase group-hover:text-pht-gold transition-colors">
                        {relatedPost.title}
                      </h3>
                      <p className="text-sm text-gray-400 normal-case font-normal">
                        {relatedPost.excerpt}
                      </p>
                    </article>
                  </Link>
                ))}
              </div>
            </div>
          )}

          {/* CTA */}
          <div className="mt-16 bg-pht-black border border-pht-gold rounded-lg p-8 text-center">
            <h3 className="text-2xl font-bold text-white mb-4 uppercase">
              Quer Resultados <span className="text-pht-gold">Previsíveis</span>?
            </h3>
            <p className="text-gray-300 mb-6 normal-case font-normal">
              Descubra como podemos ajudar seu escritório a crescer de forma sustentável.
            </p>
            <a
              href="https://wa.me/558496051854"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block bg-pht-gold text-pht-black px-8 py-4 font-bold uppercase text-sm tracking-wider hover:bg-white transition-colors"
            >
              FALAR COM ESPECIALISTA
            </a>
          </div>
        </div>
      </article>
    </>
  );
}
