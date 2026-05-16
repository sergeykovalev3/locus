import { properties } from '@/lib/data/properties';

function slugify(s: string): string {
  return s
    .toLowerCase()
    .replace(/[^a-z0-9]+/g, '-')
    .replace(/^-|-$/g, '');
}

export type FormSelectOption = { value: string; label: string };

export function getFormSelectOptionsFromProperties(): {
  locations: FormSelectOption[];
  propertyTypes: FormSelectOption[];
  bathrooms: FormSelectOption[];
  bedrooms: FormSelectOption[];
  budget: FormSelectOption[];
} {
  const locations = [...new Set(properties.map((p) => p.adress))]
    .sort()
    .map((adress) => ({ value: slugify(adress), label: adress }));

  const propertyTypes = [...new Set(properties.map((p) => p.specifications.type))]
    .sort()
    .map((type) => ({ value: slugify(type), label: type }));

  const bathroomNumbers = [...new Set(properties.map((p) => p.specifications.bathrooms))].sort(
    (a, b) => a - b
  );
  const bathrooms: FormSelectOption[] = bathroomNumbers
    .filter((n) => n < 5)
    .map((n) => ({ value: String(n), label: String(n) }));
  if (bathroomNumbers.some((n) => n >= 5)) {
    bathrooms.push({ value: '5+', label: '5+' });
  }

  const bedroomNumbers = [...new Set(properties.map((p) => p.specifications.bedrooms))].sort(
    (a, b) => a - b
  );
  const bedrooms: FormSelectOption[] = bedroomNumbers
    .filter((n) => n < 6)
    .map((n) => ({ value: String(n), label: String(n) }));
  if (bedroomNumbers.some((n) => n >= 6)) {
    bedrooms.push({ value: '6+', label: '6+' });
  }

  const budget = [...new Set(properties.map((p) => p.price))]
    .sort((a, b) => {
      const numA = parseInt(a.replace(/[^0-9]/g, ''), 10) || 0;
      const numB = parseInt(b.replace(/[^0-9]/g, ''), 10) || 0;
      return numA - numB;
    })
    .map((price) => ({ value: price, label: price }));

  return {
    locations,
    propertyTypes,
    bathrooms,
    bedrooms,
    budget,
  };
}
