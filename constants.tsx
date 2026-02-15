
import { VisionCategory, VisionItem } from './types.ts';

export const VISION_DATA: VisionItem[] = [
  {
    id: 'purpose',
    category: VisionCategory.PURPOSE,
    title: 'Tujuan (Purpose)',
    items: [
      'Menjadi pribadi yang disiplin dalam segala hal',
      'Menjadi berkat dalam setiap perbuatan',
      'Menggunakan kemampuan yang dimiliki untuk melayani Tuhan'
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
      'Lulusan Terbaik di SMP Santa Ursula',
      'Masuk ke SMAN 3',
      'Tidak ada nilai di bawah 97',
      'Juara lomba di bidang sains tingkat nasional'
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
      'Melayani di Retreat NRG! sebagai pembimbing',
      'Punya anak PA',
      'Join pelayanan Multimedia di kelas 10'
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
      'Mempererat hubungan dengan NRG! sebelum masuk SMA',
      'Menginjili minimal satu anak Ursula sebelum lulus'
    ],
    color: 'yellow-400',
    gradient: 'candy-gradient-4',
    icon: '🤝'
  }
];

export const BIBLE_VERSE = {
  reference: 'Mazmur 37:3a TB2',
  text: 'Percayalah kepada TUHAN dan lakukanlah yang baik'
};

export const MOTIVATION_LYRICS = {
  title: 'Army Of God Worship',
  lyrics: [
    'We can do all things',
    'Through Christ who strengthens us',
    'Yes we are weak but',
    'Our mighty God is strong'
  ]
};
