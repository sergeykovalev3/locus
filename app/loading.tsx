function SkeletonBar({ className }: { className?: string }) {
  return (
    <div
      className={`rounded-lg bg-grey15/80 animate-pulse ${className ?? ""}`}
      aria-hidden
    />
  );
}

export default function Loading() {
  return (
    <div className="border-y border-grey15">
      <div className="container py-[40px] xl:py-[60px] 2xl:py-[80px]">
        <div className="flex min-h-[50vh] flex-col gap-[32px] xl:gap-[48px] 2xl:gap-[64px]">
          <div className="grid gap-[24px] md:grid-cols-[1fr_minmax(200px,42%)] md:items-start md:gap-[40px]">
            <div className="flex flex-col gap-[16px] xl:gap-[20px]">
              <SkeletonBar className="h-[14px] w-[120px]" />
              <SkeletonBar className="h-[clamp(2.5rem,8vw,3.5rem)] w-full max-w-[28rem]" />
              <SkeletonBar className="h-[18px] w-full max-w-[36rem]" />
              <SkeletonBar className="h-[18px] w-full max-w-[32rem]" />
              <div className="flex flex-wrap gap-[12px] pt-[8px]">
                <SkeletonBar className="h-[48px] w-[140px] rounded-lg" />
                <SkeletonBar className="h-[48px] w-[160px] rounded-lg" />
              </div>
            </div>
            <div className="relative aspect-[4/3] w-full overflow-hidden rounded-[12px] border border-grey15 bg-grey10">
              <SkeletonBar className="absolute inset-0 rounded-[12px] bg-grey15/60" />
            </div>
          </div>

          <div className="grid gap-[16px] sm:grid-cols-2 lg:grid-cols-3">
            {[0, 1, 2].map((i) => (
              <div
                key={i}
                className="flex flex-col gap-[14px] rounded-[12px] border border-grey15 bg-grey10 p-[20px] xl:p-[24px]"
              >
                <SkeletonBar className="aspect-[16/10] w-full rounded-[8px]" />
                <SkeletonBar className="h-[20px] w-3/4" />
                <SkeletonBar className="h-[14px] w-full" />
                <SkeletonBar className="h-[14px] w-5/6" />
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
