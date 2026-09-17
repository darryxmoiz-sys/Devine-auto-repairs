export default function Loading() {
  return (
    <div className="mx-auto max-w-[1320px] px-5 py-16 md:px-10">
      <div className="grid grid-cols-1 gap-10 md:grid-cols-12">
        <div className="md:col-span-5">
          <div className="skeleton h-6 w-32 rounded-sm" />
          <div className="skeleton mt-6 h-14 w-full rounded-sm" />
          <div className="skeleton mt-3 h-14 w-4/5 rounded-sm" />
          <div className="skeleton mt-6 h-4 w-full rounded-sm" />
          <div className="skeleton mt-2 h-4 w-3/4 rounded-sm" />
          <div className="skeleton mt-8 h-12 w-44 rounded-sm" />
        </div>
        <div className="md:col-span-7">
          <div className="skeleton aspect-[4/3] w-full rounded-sm" />
        </div>
      </div>
    </div>
  );
}
