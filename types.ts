
export enum VisionCategory {
  PURPOSE = 'Purpose',
  STUDY = 'Study',
  MINISTRY = 'Ministry',
  RELATIONSHIP = 'Relationship'
}

export interface VisionItem {
  id: string;
  category: VisionCategory;
  title: string;
  items: string[];
  color: string;
  gradient: string;
  icon: string;
}

export interface AppState {
  isDoorOpen: boolean;
  activeVision: VisionCategory | null;
}
