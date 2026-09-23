/**
 * Central routing and path utilities for GitHub Pages base path support.
 */

// Normalized base path without trailing slash (e.g. '/personal-blog' or '')
export const basePath = import.meta.env.BASE_URL.replace(/\/$/, '');

/**
 * Resolves an internal path ensuring the base path prefix is applied cleanly without double slashes.
 * @param path Internal route or asset path (e.g. '/blog', 'blog', '/favicon.svg')
 * @returns Fully qualified relative path (e.g. '/personal-blog/blog', '/personal-blog/favicon.svg')
 */
export function resolveUrl(path: string = ''): string {
  if (!path || path === '/') {
    return `${basePath}/`;
  }
  const cleanPath = path.startsWith('/') ? path : `/${path}`;
  return `${basePath}${cleanPath}`;
}
