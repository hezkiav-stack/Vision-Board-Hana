
import { VisionCategory, VisionItem } from './types';

export const VISION_DATA: VisionItem[] = [
  {
    id: 'purpose',
    category: VisionCategory.PURPOSE,
    title: 'Tujuan Hidup (Purpose)',
    items: [
      'Disiplin & Rapi',
      'Menjadi berkat dalam setiap perbuatan',
      'Mengembangkan diri (Gitar/Olahraga)'
    ],
    color: 'pink-400',
    gradient: 'candy-gradient-1',
    icon: '💖'
  },
  {
    id: 'study',
    category: VisionCategory.STUDY,
    title: 'Akademik (Study)',
    items: [
      'Excellent (Juara Umum, TKA Terbaik)',
      'Lulusan Terbaik',
      'Masuk ke SMAN 3',
      'Nyicil tugas & belajar tiap hari',
      'Tidak ada nilai di bawah 97',
      'Juara OSN'
    ],
    color: 'blue-400',
    gradient: 'candy-gradient-2',
    icon: '📚'
  },
  {
    id: 'ministry',
    category: VisionCategory.MINISTRY,
    title: 'Pelayanan (Ministry)',
    items: [
      'Melayani di Retreat',
      'Punya anak PA',
      'Mencoba Pelayanan MM'
    ],
    color: 'green-400',
    gradient: 'candy-gradient-3',
    icon: '✨'
  },
  {
    id: 'relationship',
    category: VisionCategory.RELATIONSHIP,
    title: 'Hubungan (Relationship)',
    items: [
      'Mempererat hubungan dengan NRG sebelum SMA',
      'Menginjili minimal satu anak Ursula sebelum lulus'
    ],
    color: 'yellow-400',
    gradient: 'candy-gradient-4',
    icon: '🤝'
  }
];

export const BIBLE_VERSE = {
  reference: 'Kejadian 32:26 b',
  text: '"Aku tidak akan membiarkan engkau pergi, jika engkau tidak memberkati aku."'
};

export const PLACEHOLDER_PHOTOS = [
  'https://images.unsplash.com/photo-1517462964-21fdcec3f25b?w=600&auto=format&fit=crop&q=80', // Purpose: Colorful Bow and Arrow setup
  'https://images.unsplash.com/photo-1522202176988-66273c2fd55f?w=600&auto=format&fit=crop&q=80', // Study: Aesthetic study desk with bright lighting
  'https://images.unsplash.com/photo-1444335031121-696956795493?w=600&auto=format&fit=crop&q=80', // Ministry: A beautiful, soft-lit aesthetic Bible
  'https://images.unsplash.com/photo-1491438590914-bc09fcaaf77a?w=600&auto=format&fit=crop&q=80', // Relationship: Happy friends sharing a moment
];

export const SOUNDS = {
  DOOR_OPEN: 'https://assets.mixkit.co/active_storage/sfx/2013/2013-preview.mp3',
  CANDY_POP: 'https://assets.mixkit.co/active_storage/sfx/2571/2571-preview.mp3',
  WINDOW_OPEN: 'https://assets.mixkit.co/active_storage/sfx/2000/2000-preview.mp3',
  CLOSE: 'https://assets.mixkit.co/active_storage/sfx/2568/2568-preview.mp3',
};
