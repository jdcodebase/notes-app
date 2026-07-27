const NotesSkeleton = () => {
  return (
    <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
      {[...Array(6)].map((_, index) => (
        <div
          key={index}
          className="animate-pulse rounded-lg border border-slate-700 bg-slate-800 p-5"
        >
          <div className="mb-4 h-6 w-3/4 rounded bg-slate-700"></div>

          <div className="space-y-2">
            <div className="h-4 rounded bg-slate-700"></div>
            <div className="h-4 rounded bg-slate-700"></div>
            <div className="h-4 w-5/6 rounded bg-slate-700"></div>
          </div>

          <div className="mt-6 border-t border-slate-700 pt-4">
            <div className="mb-4 ml-auto h-3 w-24 rounded bg-slate-700"></div>

            <div className="flex justify-between">
              <div className="h-10 w-20 rounded bg-slate-700"></div>
              <div className="h-10 w-20 rounded bg-slate-700"></div>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default NotesSkeleton;
