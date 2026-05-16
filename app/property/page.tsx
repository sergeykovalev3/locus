import { redirect } from 'next/navigation';
import { properties } from '@/lib/data/properties';

export default function PropertyPage() {
  const first = properties[0];
  redirect(first ? `/property/${first.id}` : '/properties');
}
