const fs = require('fs');
const file = '/Users/bts/Documents/projects/rescate1-exam-quesitons/src/pages/Games/Games.page.tsx';
let content = fs.readFileSync(file, 'utf-8');

// Header changes: reduce py-12 to py-6, reduce h-24 w-24 to h-16 w-16, text-5xl to text-4xl
content = content.replace('py-12', 'py-6');
content = content.replace('mb-12', 'mb-6');
content = content.replace('h-24 w-24 mx-auto mb-6', 'h-16 w-16 mx-auto mb-3');
content = content.replace('text-5xl md:text-6xl font-bold text-white mb-4', 'text-4xl font-bold text-white mb-2');
content = content.replace('text-xl text-gray-300 max-w-2xl mx-auto', 'text-lg text-gray-300 max-w-2xl mx-auto mb-4');

// Card padding
content = content.replace(/p-8/g, 'p-4');

// Card icon container
content = content.replace(/w-20 h-20/g, 'w-12 h-12');
content = content.replace(/mb-4 group-hover:rotate-12/g, 'mb-2 group-hover:rotate-12');

// Text emojis inside icon container
content = content.replace(/text-5xl/g, 'text-3xl');

// React icons inside icon container
content = content.replace(/w-12 h-12/g, 'w-6 h-6');

// Titles
content = content.replace(/text-3xl font-bold text-white mb-3/g, 'text-xl font-bold text-white mb-1');

// Descriptions
content = content.replace(/text-gray-200 mb-4/g, 'text-gray-200 text-sm mb-2 line-clamp-2');

// Tags container
content = content.replace(/gap-2 justify-center mb-4/g, 'gap-1 justify-center');

// Tags
content = content.replace(/px-3 py-1 rounded-full text-sm/g, 'px-2 py-0.5 rounded-full text-xs');

// Games grid spacing
content = content.replace('gap-8', 'gap-4');
content = content.replace('grid md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4', 'grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5');

fs.writeFileSync(file, content);
console.log('Transformation complete!');
