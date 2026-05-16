import type { PropertyInfo } from '@/lib/data/properties';

export function slugify(s: string): string {
  return s
    .toLowerCase()
    .replace(/[^a-z0-9]+/g, '-')
    .replace(/^-|-$/g, '');
}

export type FilterState = {
  searchQuery: string;
  location: string | null;
  propertyType: string | null;
  pricingRange: string | null;
  propertySize: string | null;
  buildYear: string | null;
};

export function filterProperties(list: PropertyInfo[], state: FilterState): PropertyInfo[] {
  let result = list;

  const q = state.searchQuery.trim().toLowerCase();
  if (q) {
    result = result.filter(
      (p) =>
        p.name.toLowerCase().includes(q) ||
        p.description.toLowerCase().includes(q) ||
        p.tag.toLowerCase().includes(q) ||
        p.adress.toLowerCase().includes(q)
    );
  }

  if (state.location) {
    result = result.filter((p) => slugify(p.adress) === state.location);
  }

  if (state.propertyType) {
    result = result.filter((p) => slugify(p.specifications.type) === state.propertyType);
  }

  if (state.pricingRange) {
    result = result.filter((p) => p.price === state.pricingRange);
  }

  if (state.propertySize) {
    result = result.filter((p) => String(p.specifications.area) === state.propertySize);
  }

  return result;
}
