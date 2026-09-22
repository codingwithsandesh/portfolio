import React, { useState } from 'react';
import { X, Search, Heart, Maximize2, ExternalLink, Image as ImageIcon, Sparkles } from 'lucide-react';

interface PixoraSandboxModalProps {
  isOpen: boolean;
  onClose: () => void;
}

interface MockImage {
  id: number;
  title: string;
  category: string;
  author: string;
  height: string;
  color: string;
  likes: number;
  description: string;
}

const SAMPLE_GALLERY: MockImage[] = [
  {
    id: 1,
    title: 'Modern Architectural Skyline',
    category: 'Architecture',
    author: 'VisualArts',
    height: 'h-64',
    color: 'from-blue-600 via-indigo-600 to-slate-800',
    likes: 342,
    description: 'High-contrast nocturnal skyline with reflective glass facades and clean architectural geometry.',
  },
  {
    id: 2,
    title: 'Minimalist Monolithic Core',
    category: 'Design',
    author: 'StudioAlpha',
    height: 'h-80',
    color: 'from-emerald-600 via-teal-700 to-slate-800',
    likes: 218,
    description: 'Geometric architectural abstraction captured in diffused morning fog.',
  },
  {
    id: 3,
    title: 'Kinetic Flow & Fluid Dynamics',
    category: 'Abstract',
    author: 'NeuroGraphics',
    height: 'h-52',
    color: 'from-purple-600 via-pink-600 to-slate-800',
    likes: 589,
    description: 'Procedural generative visual waves modeled with algorithmic velocity.',
  },
  {
    id: 4,
    title: 'Emerald Terraces & Topography',
    category: 'Nature',
    author: 'TerraExplorer',
    height: 'h-72',
    color: 'from-teal-600 via-emerald-600 to-slate-800',
    likes: 412,
    description: 'Contoured mountain agricultural ridges under soft morning illumination.',
  },
  {
    id: 5,
    title: 'Precision Micro-Architecture',
    category: 'Technology',
    author: 'SiliconLab',
    height: 'h-60',
    color: 'from-sky-600 via-blue-700 to-slate-800',
    likes: 195,
    description: 'Microscopic superconducting quantum waveguide matrix with thermal shielding.',
  },
  {
    id: 6,
    title: 'Solar Eclipse Horizon',
    category: 'Space',
    author: 'AstroLens',
    height: 'h-76',
    color: 'from-amber-600 via-orange-600 to-slate-800',
    likes: 671,
    description: 'Corona flares visible during totality across orbital observatory satellite.',
  },
];

export const PixoraSandboxModal: React.FC<PixoraSandboxModalProps> = ({ isOpen, onClose }) => {
  const [searchTerm, setSearchTerm] = useState('');
  const [activeCategory, setActiveCategory] = useState('All');
  const [selectedImage, setSelectedImage] = useState<MockImage | null>(null);

  if (!isOpen) return null;

  const categories = ['All', 'Architecture', 'Design', 'Abstract', 'Nature', 'Technology', 'Space'];

  const filteredImages = SAMPLE_GALLERY.filter((img) => {
    const matchesCategory = activeCategory === 'All' || img.category === activeCategory;
    const matchesSearch =
      img.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
      img.category.toLowerCase().includes(searchTerm.toLowerCase()) ||
      img.author.toLowerCase().includes(searchTerm.toLowerCase());
    return matchesCategory && matchesSearch;
  });

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-6 bg-slate-900/60 backdrop-blur-sm animate-in fade-in duration-200">
      <div className="relative w-full max-w-5xl max-h-[90vh] bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 rounded-2xl shadow-2xl flex flex-col overflow-hidden">
        
        {/* Modal Window Header */}
        <div className="flex items-center justify-between border-b border-slate-200 dark:border-slate-800 bg-slate-50 dark:bg-slate-950 px-5 py-3.5">
          <div className="flex items-center gap-3">
            <div className="flex items-center gap-1.5">
              <span className="h-3 w-3 rounded-full bg-rose-400"></span>
              <span className="h-3 w-3 rounded-full bg-amber-400"></span>
              <span className="h-3 w-3 rounded-full bg-emerald-400"></span>
            </div>
            <div className="h-4 w-[1px] bg-slate-200 dark:bg-slate-800 mx-1"></div>
            <div>
              <span className="text-sm font-bold text-slate-900 dark:text-slate-100 flex items-center gap-2">
                Pixora Interactive UI Sandbox Preview
              </span>
              <span className="text-xs text-blue-600 dark:text-blue-400 font-medium">
                HTML5 • CSS3 Flexbox/Grid • JavaScript DOM
              </span>
            </div>
          </div>
          <button
            onClick={onClose}
            className="p-1.5 rounded-lg border border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-900 text-slate-500 dark:text-slate-400 hover:text-slate-900 dark:hover:text-slate-100 hover:bg-slate-100 dark:hover:bg-slate-800 transition-colors cursor-pointer"
          >
            <X className="h-5 w-5" />
          </button>
        </div>

        {/* Sticky Pixora App Navigation Bar (as implemented in project) */}
        <div className="sticky top-0 z-10 bg-white dark:bg-slate-900 border-b border-slate-200 dark:border-slate-800 px-5 py-3 flex flex-wrap items-center justify-between gap-4">
          <div className="flex items-center gap-2">
            <div className="h-7 w-7 rounded-lg bg-blue-600 flex items-center justify-center text-white font-bold text-xs">
              PX
            </div>
            <span className="font-bold tracking-tight text-sm text-slate-900 dark:text-slate-100">Pixora</span>
            <span className="text-xs px-2 py-0.5 rounded-full bg-blue-50 dark:bg-blue-950/60 text-blue-700 dark:text-blue-300 border border-blue-200 dark:border-blue-800 font-medium hidden sm:inline">
              Sticky Navigation
            </span>
          </div>

          {/* Search bar feature */}
          <div className="relative flex-1 max-w-sm">
            <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-3.5 w-3.5 text-slate-400 dark:text-slate-500" />
            <input
              type="text"
              placeholder="Search images, categories, tags..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="w-full rounded-xl border border-slate-200 dark:border-slate-700 bg-slate-50 dark:bg-slate-800 pl-9 pr-3 py-1.5 text-xs text-slate-900 dark:text-slate-100 placeholder-slate-400 dark:placeholder-slate-500 focus:outline-none focus:border-blue-600 focus:bg-white dark:focus:bg-slate-800"
            />
          </div>

          {/* Category Filter Pills */}
          <div className="hidden lg:flex items-center gap-1 text-xs">
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => setActiveCategory(cat)}
                className={`px-3 py-1 rounded-lg font-medium transition-colors cursor-pointer ${
                  activeCategory === cat
                    ? 'bg-slate-900 dark:bg-blue-600 text-white'
                    : 'text-slate-600 dark:text-slate-400 hover:text-slate-900 dark:hover:text-slate-100 hover:bg-slate-100 dark:hover:bg-slate-800'
                }`}
              >
                {cat}
              </button>
            ))}
          </div>
        </div>

        {/* Scrollable Masonry Gallery Area */}
        <div className="flex-1 overflow-y-auto p-5 space-y-4 bg-slate-50/50 dark:bg-slate-950/60">
          <div className="flex items-center justify-between text-xs text-slate-500 dark:text-slate-400 font-medium">
            <span>Showing {filteredImages.length} curated visual cards</span>
            <span>Layout: CSS Columns / Masonry</span>
          </div>

          {/* Clean Masonry Layout Columns */}
          <div className="columns-1 sm:columns-2 lg:columns-3 gap-4 space-y-4">
            {filteredImages.map((img) => (
              <div
                key={img.id}
                onClick={() => setSelectedImage(img)}
                className="group relative break-inside-avoid rounded-2xl overflow-hidden border border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-900 shadow-sm hover:shadow-md hover:border-slate-300 dark:hover:border-slate-700 transition-all cursor-pointer"
              >
                {/* Visual Canvas Block */}
                <div
                  className={`w-full ${img.height} bg-gradient-to-br ${img.color} p-4 flex flex-col justify-between transition-transform duration-300 group-hover:scale-[1.02]`}
                >
                  <div className="flex justify-between items-start">
                    <span className="text-[11px] font-medium px-2.5 py-0.5 rounded-full bg-black/40 backdrop-blur-md text-white border border-white/20">
                      {img.category}
                    </span>
                    <button
                      onClick={(e) => {
                        e.stopPropagation();
                      }}
                      className="p-1.5 rounded-full bg-black/30 backdrop-blur-md text-white hover:text-rose-400 transition-colors"
                    >
                      <Heart className="h-3.5 w-3.5" />
                    </button>
                  </div>

                  <div className="space-y-1">
                    <h4 className="text-white font-semibold text-sm drop-shadow-md group-hover:text-blue-100 transition-colors">
                      {img.title}
                    </h4>
                    <p className="text-xs text-slate-200 drop-shadow flex items-center justify-between">
                      <span>by @{img.author}</span>
                      <span className="text-white font-medium flex items-center gap-1 text-[11px]">
                        <Maximize2 className="h-3 w-3" /> View Modal
                      </span>
                    </p>
                  </div>
                </div>

                {/* Details Bar */}
                <div className="px-3.5 py-2.5 bg-white dark:bg-slate-900 border-t border-slate-100 dark:border-slate-800 text-xs text-slate-500 dark:text-slate-400 flex items-center justify-between">
                  <span>Likes: {img.likes}</span>
                  <span className="text-blue-600 dark:text-blue-400 font-medium">Interactive Modal</span>
                </div>
              </div>
            ))}
          </div>

          {filteredImages.length === 0 && (
            <div className="py-16 text-center text-slate-500 dark:text-slate-400 space-y-2">
              <p className="text-sm">No images found matching "{searchTerm}"</p>
              <button
                onClick={() => {
                  setSearchTerm('');
                  setActiveCategory('All');
                }}
                className="text-xs text-blue-600 dark:text-blue-400 underline font-medium cursor-pointer"
              >
                Reset Search Filters
              </button>
            </div>
          )}
        </div>

        {/* Interactive Image Modal (Feature implemented in Pixora) */}
        {selectedImage && (
          <div
            className="absolute inset-0 z-30 bg-slate-900/60 backdrop-blur-sm flex items-center justify-center p-4"
            onClick={() => setSelectedImage(null)}
          >
            <div
              className="w-full max-w-xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 rounded-2xl overflow-hidden shadow-2xl space-y-4 p-6 relative animate-in zoom-in-95 duration-150"
              onClick={(e) => e.stopPropagation()}
            >
              <button
                onClick={() => setSelectedImage(null)}
                className="absolute top-4 right-4 p-1.5 rounded-lg bg-slate-100 dark:bg-slate-800 text-slate-600 dark:text-slate-400 hover:text-slate-900 dark:hover:text-slate-100 hover:bg-slate-200 dark:hover:bg-slate-700 cursor-pointer"
              >
                <X className="h-5 w-5" />
              </button>

              <div
                className={`w-full h-64 rounded-xl bg-gradient-to-br ${selectedImage.color} flex items-center justify-center p-6 text-center`}
              >
                <div className="space-y-2">
                  <ImageIcon className="w-12 h-12 text-white/80 mx-auto" />
                  <h3 className="text-xl font-bold text-white">{selectedImage.title}</h3>
                  <span className="inline-block text-xs font-medium px-2.5 py-0.5 rounded-full bg-black/40 text-white border border-white/20">
                    Category: {selectedImage.category}
                  </span>
                </div>
              </div>

              <div className="space-y-2 text-sm text-slate-700 dark:text-slate-300">
                <p>{selectedImage.description}</p>
                <div className="flex items-center justify-between text-xs text-slate-500 dark:text-slate-400 pt-2 border-t border-slate-100 dark:border-slate-800">
                  <span>Author: @{selectedImage.author}</span>
                  <span>Favorites: {selectedImage.likes}</span>
                </div>
              </div>

              <div className="pt-2 flex justify-end">
                <button
                  onClick={() => setSelectedImage(null)}
                  className="px-4 py-2 rounded-xl bg-slate-900 dark:bg-blue-600 hover:bg-slate-800 dark:hover:bg-blue-500 text-white text-xs font-medium cursor-pointer"
                >
                  Close Modal
                </button>
              </div>
            </div>
          </div>
        )}

        {/* Modal Window Footer */}
        <div className="border-t border-slate-200 dark:border-slate-800 bg-slate-50 dark:bg-slate-950 px-5 py-3 flex flex-wrap items-center justify-between text-xs text-slate-600 dark:text-slate-400">
          <div className="flex items-center gap-2">
            <Sparkles className="h-4 w-4 text-blue-600 dark:text-blue-400" />
            <span>Demonstrating Masonry Gallery, Hover Animations, Sticky Nav, and Modals</span>
          </div>
          <button
            onClick={onClose}
            className="px-3.5 py-1.5 rounded-lg border border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-900 hover:bg-slate-100 dark:hover:bg-slate-800 text-slate-700 dark:text-slate-300 text-xs font-medium cursor-pointer shadow-xs"
          >
            Exit Sandbox
          </button>
        </div>

      </div>
    </div>
  );
};
