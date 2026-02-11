import { getAllPosts } from '@/lib/posts';
import Link from 'next/link';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Blog | PHT - Marketing Jurídico',
  description: 'Artigos sobre marketing jurídico, captação de clientes e crescimento de escritórios de advocacia.',
  openGraph: {
    title: 'Blog PHT',
    description: 'Aprenda estratégias de marketing jurídico com especialistas',
  },
};

export default function BlogPage() {
  const posts = getAllPosts();

  return (
    <div className="min-h-screen bg-white pt-16 pb-16 px-4">
      <div className="max-w-6xl mx-auto">
        {/* Link de volta para site principal */}
        <div className="mb-8">
          <a 
            href={process.env.NEXT_PUBLIC_MAIN_SITE_URL || "../"}
            className="inline-flex items-center text-pht-gold hover:text-pht-black transition-colors font-bold uppercase text-sm"
          >
            ← Voltar ao site
          </a>
        </div>
        
        {/* Header do Blog */}
        <div className="mb-16 text-center">
          <h1 className="text-5xl md:text-6xl font-extrabold text-pht-black mb-6">
            BLOG PHT
          </h1>
        </div>

        {/* Featured Post (primeiro post) */}
        {posts.length > 0 && (
          <div className="mb-16">
            <Link href={`/blog/${posts[0].slug}`}>
              <article className="group bg-gray-50 border-2 border-gray-200 rounded-lg overflow-hidden hover:border-pht-gold transition-all duration-300 hover:shadow-xl">
                <div className="grid md:grid-cols-2 gap-8">
                  <div className="h-80 bg-gray-300 flex items-center justify-center text-gray-500">
                    {posts[0].image ? (
                      <img src={posts[0].image} alt={posts[0].title} className="w-full h-full object-cover" />
                    ) : (
                      <span className="text-lg font-bold">IMAGEM DESTAQUE</span>
                    )}
                  </div>
                  <div className="p-8 flex flex-col justify-center">
                    <div className="flex items-center gap-4 mb-4">
                      <span className="px-4 py-2 bg-pht-gold text-pht-black text-xs font-bold uppercase tracking-wider">
                        Destaque
                      </span>
                      <span className="text-sm text-gray-500 normal-case">
                        {new Date(posts[0].date).toLocaleDateString('pt-BR', {
                          day: 'numeric',
                          month: 'long',
                          year: 'numeric'
                        })}
                      </span>
                    </div>
                    <h2 className="text-3xl font-black text-pht-black mb-4 uppercase leading-tight group-hover:text-pht-gold transition-colors">
                      {posts[0].title}
                    </h2>
                    <p className="text-gray-600 text-base normal-case font-normal leading-relaxed mb-6">
                      {posts[0].excerpt}
                    </p>
                    <div className="flex items-center gap-3">
                      <div className="w-10 h-10 bg-pht-gold rounded-full flex items-center justify-center text-pht-black font-bold">
                        {posts[0].author.charAt(0)}
                      </div>
                      <div>
                        <p className="font-bold text-pht-black normal-case text-sm">{posts[0].author}</p>
                        <p className="text-xs text-gray-500 normal-case">Especialista em Marketing Jurídico</p>
                      </div>
                    </div>
                  </div>
                </div>
              </article>
            </Link>
          </div>
        )}

        {/* Posts Grid */}
        {posts.length === 0 ? (
          <div className="text-center py-20">
            <p className="text-2xl text-gray-400 normal-case">
              Nenhum post publicado ainda. Em breve teremos conteúdo exclusivo para você!
            </p>
          </div>
        ) : (
          <>
            <h2 className="text-3xl font-bold text-pht-black mb-8 uppercase">
              Todos os Artigos
            </h2>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
              {posts.slice(1).map((post) => (
                <article
                  key={post.slug}
                  className="group bg-white border-2 border-gray-200 rounded-lg overflow-hidden hover:border-pht-gold transition-all duration-300 hover:shadow-lg"
                >
                  <Link href={`/blog/${post.slug}`}>
                    <div className="h-48 bg-gray-200 flex items-center justify-center text-gray-400">
                      {post.image ? (
                        <img src={post.image} alt={post.title} className="w-full h-full object-cover" />
                      ) : (
                        <span className="text-sm">IMAGEM</span>
                      )}
                    </div>
                    <div className="p-6">
                      <div className="flex items-center justify-between mb-3">
                        <span className="px-3 py-1 bg-gray-100 text-pht-gold text-xs font-bold uppercase tracking-wider">
                          {post.category.replace(/-/g, ' ')}
                        </span>
                        <span className="text-xs text-gray-400 normal-case">
                          {new Date(post.date).toLocaleDateString('pt-BR', {
                            day: '2-digit',
                            month: 'short'
                          })}
                        </span>
                      </div>
                      <h3 className="text-lg font-bold text-pht-black mb-3 uppercase leading-tight group-hover:text-pht-gold transition-colors line-clamp-2">
                        {post.title}
                      </h3>
                      <p className="text-gray-600 text-sm normal-case font-normal leading-relaxed line-clamp-3">
                        {post.excerpt}
                      </p>
                      <div className="mt-4 flex items-center gap-2">
                        <div className="w-8 h-8 bg-pht-gold rounded-full flex items-center justify-center text-pht-black text-xs font-bold">
                          {post.author.charAt(0)}
                        </div>
                        <span className="text-xs text-gray-500 normal-case font-medium">{post.author}</span>
                      </div>
                    </div>
                  </Link>
                </article>
              ))}
            </div>
          </>
        )}

        {/* Categories Sidebar */}
        <div className="bg-gray-50 border-2 border-gray-200 rounded-lg p-8">
          <h2 className="text-2xl font-bold text-pht-black mb-6 uppercase">
            Categorias
          </h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-4">
            <Link
              href="/blog/categoria/marketing-juridico"
              className="group px-6 py-4 bg-white border-2 border-gray-200 rounded-lg hover:border-pht-gold hover:shadow-md transition-all duration-300"
            >
              <h3 className="font-bold text-pht-black uppercase text-sm group-hover:text-pht-gold transition-colors">
                Marketing Jurídico
              </h3>
              <p className="text-xs text-gray-500 normal-case mt-1">Estratégias e táticas</p>
            </Link>
            <Link
              href="/blog/categoria/captacao-clientes"
              className="group px-6 py-4 bg-white border-2 border-gray-200 rounded-lg hover:border-pht-gold hover:shadow-md transition-all duration-300"
            >
              <h3 className="font-bold text-pht-black uppercase text-sm group-hover:text-pht-gold transition-colors">
                Captação
              </h3>
              <p className="text-xs text-gray-500 normal-case mt-1">Atração de clientes</p>
            </Link>
            <Link
              href="/blog/categoria/gestao-escritorio"
              className="group px-6 py-4 bg-white border-2 border-gray-200 rounded-lg hover:border-pht-gold hover:shadow-md transition-all duration-300"
            >
              <h3 className="font-bold text-pht-black uppercase text-sm group-hover:text-pht-gold transition-colors">
                Gestão
              </h3>
              <p className="text-xs text-gray-500 normal-case mt-1">Processos e organização</p>
            </Link>
            <Link
              href="/blog/categoria/redes-sociais"
              className="group px-6 py-4 bg-white border-2 border-gray-200 rounded-lg hover:border-pht-gold hover:shadow-md transition-all duration-300"
            >
              <h3 className="font-bold text-pht-black uppercase text-sm group-hover:text-pht-gold transition-colors">
                Redes Sociais
              </h3>
              <p className="text-xs text-gray-500 normal-case mt-1">Instagram, LinkedIn e mais</p>
            </Link>
          </div>
        </div>

        {/* Newsletter CTA */}
        <div className="mt-16 bg-pht-black text-white rounded-lg p-12 text-center">
          <h2 className="text-3xl font-bold mb-4 uppercase">
            Receba Conteúdo Exclusivo
          </h2>
          <p className="text-gray-300 mb-8 normal-case font-normal max-w-2xl mx-auto">
            Cadastre-se para receber nossos melhores artigos, dicas e estratégias 
            direto no seu e-mail. Sem spam, apenas conteúdo de valor.
          </p>
          <a
            href="https://wa.me/558496051854?text=Quero%20receber%20conte%C3%BAdo%20exclusivo%20do%20blog"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block bg-pht-gold text-pht-black px-8 py-4 font-bold uppercase text-sm tracking-wider hover:bg-white transition-colors"
          >
            Falar com Especialista
          </a>
        </div>
      </div>
    </div>
  );
}
