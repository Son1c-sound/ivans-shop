// import React from 'react';
// import { ArrowRight } from 'lucide-react';

// const CollectionsShowcase = () => {
//   const collections = [
//     {
//       id: 1,
//       title: "Beauty and Sleep",
//       image: "https://getsupplements.com/cdn/shop/files/1733411796843-generated-label-image-0.jpg?v=1733411814%201800w%22",
//     },
//     {
//       id: 2,
//       title: "Wellness",
//       image: "https://getsupplements.com/cdn/shop/files/1733411796843-generated-label-image-0.jpg?v=1733411814%201800w%22",
//     },
//     {
//       id: 3,
//       title: "Performance",
//       image: "https://getsupplements.com/cdn/shop/files/1733411796843-generated-label-image-0.jpg?v=1733411814%201800w%22",
//     }
//   ];

//   return (
//     <div className="w-full max-w-6xl mx-auto px-4 mt-10 mb-10">
//       <h1 className="text-4xl  mb-8">Explore Collections</h1>
      
//       <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
//         {collections.map((collection) => (
//           <div 
//             key={collection.id}
//             className="group cursor-pointer transition-transform duration-300 hover:-translate-y-2"
//           >
//             <div className="aspect-square rounded-lg overflow-hidden">
//               <img
//                 src={collection.image}
//                 alt={collection.title}
//                 className="w-full h-full object-cover"
//               />
//             </div>
            
//             <div className="mt-4 flex items-center justify-between">
//               <h3 className="text-xl font-semibold">{collection.title}</h3>
//               <ArrowRight className="w-5 h-5 transform group-hover:translate-x-1 transition-transform duration-300" />
//             </div>
//           </div>
//         ))}
//       </div>
//     </div>
//   );
// };

// export default CollectionsShowcase;