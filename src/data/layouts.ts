
import { Layout, LayoutType } from '@/types/cv';

export const layouts: Record<LayoutType, Layout> = {
  traditional: {
    name: { ar: 'تقليدي', en: 'Traditional' },
    id: 'traditional',
    description: { ar: 'تصميم تقليدي مع تخطيط عمودي واضح', en: 'Classic vertical layout with clear sections' }
  },
  sidebar: {
    name: { ar: 'شريط جانبي', en: 'Sidebar' },
    id: 'sidebar',
    description: { ar: 'تصميم مع شريط جانبي للمعلومات الشخصية', en: 'Layout with sidebar for personal information' }
  },
  timeline: {
    name: { ar: 'زمني', en: 'Timeline' },
    id: 'timeline',
    description: { ar: 'تصميم زمني يُظهر التطور المهني', en: 'Timeline design showing career progression' }
  },
  cards: {
    name: { ar: 'بطاقات', en: 'Cards' },
    id: 'cards',
    description: { ar: 'تصميم بطاقات منفصلة لكل قسم', en: 'Card-based design with separate sections' }
  },
  executive: {
    name: { ar: 'تنفيذي', en: 'Executive' },
    id: 'executive',
    description: { ar: 'تصميم راقي للمناصب التنفيذية', en: 'Premium design for executive positions' }
  }
};
