import bootstrap from '../node_modules/swayer/index.js';
import './preload.js';

bootstrap({
  path: './pages/index.js',
  base: import.meta.url,
});
