'use client';

import { useMemo, useState, useEffect } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { motion, AnimatePresence } from 'framer-motion';

import Search from '@/components/elements/search/Search';
import FilterItem from '@/components/elements/filterItem/FilterItem';
import { ButtonPurple } from '@/components/btns/ButtonPurple';
import { SLIDE_CARD_HOVER } from '@/lib/slideCardHover';
import { getFilterItemsFromProperties } from '@/lib/getPropertyFilters';
import { filterProperties, type FilterState } from '@/lib/filterProperties';
import { properties } from '@/lib/data/properties';
import type { PropertyInfo } from '@/lib/data/properties';

const BREAKPOINTS = [
  { width: 1280, limit: 18 },
  { width: 1024, limit: 12 },
  { width: 768, limit: 9 },
  { width: 640, limit: 6 },
  { width: 0, limit: 4 },
] as const;

function useBreakpointLimit(): number {
  const [limit, setLimit] = useState<number>(BREAKPOINTS[0].limit);

  useEffect(() => {
    const update = () => {
      const w = window.innerWidth;
      const next = BREAKPOINTS.find((b) => w >= b.width);
      setLimit(next?.limit ?? 4);
    };
    update();
    window.addEventListener('resize', update);
    return () => window.removeEventListener('resize', update);
  }, []);

  return limit;
}

const filterItems = getFilterItemsFromProperties();

const initialFilterState: FilterState = {
  searchQuery: '',
  location: null,
  propertyType: null,
  pricingRange: null,
  propertySize: null,
  buildYear: null,
};

function PropertyCard({ property }: { property: PropertyInfo }) {
  const { mainImage, tag, name, description, price, id } = property;
  const link = `/property/${id}`;
  return (
    <div
      className={`flex h-full flex-col justify-between rounded-[12px] border border-grey15 bg-grey08 p-[24px] xl:p-[30px] 2xl:p-[40px] ${SLIDE_CARD_HOVER}`}
    >
      <Link
        href={link}
        className="group/img relative block aspect-16/10 w-full overflow-hidden rounded-[10px] outline-none focus-visible:ring-2 focus-visible:ring-purple60/55"
        aria-label={`View property: ${name}`}
      >
        <Image
          src={mainImage}
          fill
          alt=""
          className="object-cover transition-transform duration-500 ease-[cubic-bezier(0.22,1,0.36,1)] group-hover/img:scale-[1.05]"
          sizes="(max-width: 768px) 100vw, (max-width: 1280px) 50vw, 33vw"
        />
      </Link>
      <div className="flex flex-col items-start gap-[16px] 2xl:gap-[20px] mt-[16px] xl:mt-[20px] 2xl:mt-[30px]">
        <span className="py-[6px] px-[12px] 2xl:py-[8px] 2xl:px-[14px] bg-grey10 border border-grey15 rounded-full text-[14px] 2xl:text-[18px] font-medium line-clamp-1">
          {tag}
        </span>
        <div className="flex flex-col gap-[6px]">
          <h4 className="text-[18px] xl:text-[20px] 2xl:text-[24px] font-semibold">{name}</h4>
          <div className="relative">
            {description.length > 80 ? (
              <p className="text-[14px] xl:text-[16px] 2xl:text-[18px] font-medium text-grey60">
                {description.slice(0, 75)}...
                <Link
                  href={link}
                  className="ml-[0.25rem] text-[14px] font-medium text-white underline decoration-white/40 underline-offset-2 transition-colors duration-300 hover:text-purple65 hover:decoration-purple65/50 xl:text-[16px] 2xl:text-[18px]"
                >
                  Read More
                </Link>
              </p>
            ) : (
              <p className="text-[14px] xl:text-[16px] 2xl:text-[18px] font-medium text-grey60">
                {description}
              </p>
            )}
          </div>
        </div>
      </div>
      <div className="flex items-center justify-between gap-[30px] xl:gap-[40px] 2xl:gap-[50px] mt-[20px] xl:mt-[24px] 2xl:mt-[30px]">
        <div className="flex flex-col 2xl:gap-[2px]">
          <span className="text-[14px] xl:text-[16px] 2xl:text-[18px] font-medium text-grey60">
            Price
          </span>
          <span className="text-[18px] xl:text-[20px] 2xl:text-[24px] font-semibold">{price}</span>
        </div>
        <ButtonPurple className="w-full max-w-[280px]" href={link}>
          View Property Details
        </ButtonPurple>
      </div>
    </div>
  );
}

function FilteredPropertyResults({
  limit,
  filtered,
}: {
  limit: number;
  filtered: PropertyInfo[];
}) {
  const [visibleCount, setVisibleCount] = useState(limit);
  const visibleItems = useMemo(() => filtered.slice(0, visibleCount), [filtered, visibleCount]);
  const hasMore = filtered.length > visibleCount;
  const viewMore = () => setVisibleCount((prev) => Math.min(prev + limit, filtered.length));

  return (
    <AnimatePresence mode="popLayout">
      {filtered.length === 0 ? (
        <motion.p
          key="no-results"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.2 }}
          className="text-center text-grey60 text-[16px] xl:text-[18px]"
        >
          No properties match your filters. Try changing search or filter options.
        </motion.p>
      ) : (
        <>
          <motion.div
            key="grid"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.15 }}
            className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-[20px] xl:gap-[24px] 2xl:gap-[30px]"
          >
            <AnimatePresence mode="popLayout">
              {visibleItems.map((property) => (
                <motion.div
                  key={property.id}
                  layout
                  initial={{ opacity: 0, y: 12 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, scale: 0.98 }}
                  transition={{ duration: 0.25, ease: 'easeOut' }}
                >
                  <PropertyCard property={property} />
                </motion.div>
              ))}
            </AnimatePresence>
          </motion.div>
          {hasMore && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              className="flex justify-center mt-[32px] xl:mt-[40px] 2xl:mt-[48px]"
            >
              <ButtonPurple
                type="button"
                onClick={viewMore}
                className="min-w-[200px] xl:min-w-[240px]"
              >
                View More
              </ButtonPurple>
            </motion.div>
          )}
        </>
      )}
    </AnimatePresence>
  );
}

export default function Filters() {
  const limit = useBreakpointLimit();
  const [searchQuery, setSearchQuery] = useState(initialFilterState.searchQuery);
  const [location, setLocation] = useState<string | null>(initialFilterState.location);
  const [propertyType, setPropertyType] = useState<string | null>(initialFilterState.propertyType);
  const [pricingRange, setPricingRange] = useState<string | null>(initialFilterState.pricingRange);
  const [propertySize, setPropertySize] = useState<string | null>(initialFilterState.propertySize);
  const [buildYear, setBuildYear] = useState<string | null>(initialFilterState.buildYear);

  const filterState: FilterState = useMemo(
    () => ({
      searchQuery,
      location,
      propertyType,
      pricingRange,
      propertySize,
      buildYear,
    }),
    [searchQuery, location, propertyType, pricingRange, propertySize, buildYear]
  );

  const filtered = useMemo(() => filterProperties(properties, filterState), [filterState]);

  const filterResultsKey = useMemo(
    () =>
      [
        searchQuery,
        location,
        propertyType,
        pricingRange,
        propertySize,
        buildYear,
        limit,
      ].join('|'),
    [
      searchQuery,
      location,
      propertyType,
      pricingRange,
      propertySize,
      buildYear,
      limit,
    ],
  );

  return (
    <div className="mt-[40px] xl:-mt-[40px]">
      <div className="container">
        <div className="flex flex-col justify-center items-center gap-[20px] md:gap-0">
          <Search
            className="lg:w-[81.25%]"
            value={searchQuery}
            onChange={setSearchQuery}
            onSubmit={() => {}}
          />
          <div className="w-full grid grid-cols-1 sm:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-[20px] p-[20px] md:p-[10px] rounded-[12px] bg-grey10">
            {filterItems.map((item) => (
              <FilterItem
                key={item.id}
                id={item.id}
                title={item.title}
                icon={item.icon}
                options={item.options}
                value={
                  item.id === 'location'
                    ? location
                    : item.id === 'propertyType'
                      ? propertyType
                      : item.id === 'pricingRange'
                        ? pricingRange
                        : item.id === 'propertySize'
                          ? propertySize
                          : item.id === 'buildYear'
                            ? buildYear
                            : undefined
                }
                onChange={
                  item.id === 'location'
                    ? setLocation
                    : item.id === 'propertyType'
                      ? setPropertyType
                      : item.id === 'pricingRange'
                        ? setPricingRange
                        : item.id === 'propertySize'
                          ? setPropertySize
                          : item.id === 'buildYear'
                            ? setBuildYear
                            : undefined
                }
              />
            ))}
          </div>
        </div>

        <div
          id="properties"
          className="pt-[40px] xl:pt-[60px] 2xl:pt-[75px] pb-[40px] xl:pb-[60px] 2xl:pb-[75px]"
        >
          <FilteredPropertyResults
            key={filterResultsKey}
            limit={limit}
            filtered={filtered}
          />
        </div>
      </div>
    </div>
  );
}
