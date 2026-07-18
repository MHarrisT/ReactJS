import React from 'react';

function Card(props) {
  const title = props.title || "Modern Workspace";
  const description = props.description || "A clean and aesthetic environment designed to boost your productivity and help you focus on what matters most.";
  const imageUrl = props.imageUrl || "https://images.unsplash.com/photo-1522202176988-66273c2fd55f?q=80&w=1400&auto=format&fit=crop";

  return (
    <div className="max-w-sm rounded-2xl overflow-hidden shadow-2xl bg-white dark:bg-gray-800 border border-gray-100 dark:border-gray-700 transition-all duration-300 hover:-translate-y-2 hover:shadow-[0_20px_50px_rgba(8,_112,_184,_0.2)] mx-auto mt-8 group cursor-pointer">
      <div className="relative overflow-hidden">
        <img 
          className="w-full h-56 object-cover transition-transform duration-500 group-hover:scale-110" 
          src={imageUrl} 
          alt={title} 
        />
        <div className="absolute inset-0 bg-gradient-to-t from-gray-900/60 to-transparent"></div>
      </div>
      
      <div className="px-6 py-6 relative">
        <div className="font-bold text-2xl mb-3 text-gray-900 dark:text-white tracking-tight">
          {title}
        </div>
        <p className="text-gray-600 dark:text-gray-300 text-base leading-relaxed">
          {description}
        </p>
      </div>

      <div className="px-6 pt-2 pb-6 flex gap-2">
        <span className="inline-block bg-blue-50 dark:bg-blue-900/30 text-blue-600 dark:text-blue-400 rounded-full px-4 py-1 text-sm font-semibold transition-colors hover:bg-blue-100 dark:hover:bg-blue-900/50">
          #design
        </span>
        <span className="inline-block bg-purple-50 dark:bg-purple-900/30 text-purple-600 dark:text-purple-400 rounded-full px-4 py-1 text-sm font-semibold transition-colors hover:bg-purple-100 dark:hover:bg-purple-900/50">
          #focus
        </span>
      </div>
    </div>
  );
};

export default Card;
