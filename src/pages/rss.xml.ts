import rss from '@astrojs/rss';
import { getCollection } from 'astro:content';
import type { APIContext } from 'astro';

export async function GET(context: APIContext) {
  const posts = (await getCollection('posts')).sort(
    (a, b) => b.data.publishDate.valueOf() - a.data.publishDate.valueOf()
  );

  const site = context.site 
    ? new URL('/personal-blog/', context.site).toString() 
    : 'https://diegoriveraestefano.github.io/personal-blog/';

  return rss({
    title: 'Diego Rivera | Dev Blog - Arquitectura & Rendimiento',
    description: 'Artículos técnicos, tutoriales profundos y análisis sobre desarrollo backend, Python, Django, optimización algorítmica y sistemas de alto rendimiento.',
    site: site,
    items: posts.map((post) => ({
      title: post.data.title,
      pubDate: post.data.publishDate,
      description: post.data.description,
      categories: post.data.tags,
      author: post.data.author || 'Diego Rivera',
      link: `/personal-blog/blog/${post.data.slug}/`,
    })),
    customData: `<language>es-ES</language>`,
  });
}
