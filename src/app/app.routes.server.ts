import { RenderMode, ServerRoute } from '@angular/ssr';
import { inject } from '@angular/core';
import { ContentService } from './pages/content/content.service';

export const serverRoutes: ServerRoute[] = [
  {
    path: '',
    renderMode: RenderMode.Prerender,
  },
  {
    path: 'content/:id',
    renderMode: RenderMode.Prerender,
    async getPrerenderParams() {
      const contentService = inject(ContentService);
      const ids = contentService.getAllIds();
      return ids.map((id) => ({ id }));
    },
  },
];
