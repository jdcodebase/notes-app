const NoteCard = () => {
  return (
    <div className="grid gap-6 px-4 py-4 md:grid-cols-2 lg:grid-cols-3">
      <div className="flex flex-col justify-between rounded-lg border border-slate-700 bg-slate-800 p-5 shadow-md">
        <div>
          <h2 className="text-xl font-semibold">Learn React</h2>

          <p className="mt-3 text-slate-300">
            Lorem ipsum dolor sit amet, consectetur adipisicing elit.
            Accusantium, reprehenderit. Lorem ipsum dolor sit amet consectetur
            adipisicing elit. Lorem ipsum dolor sit amet consectetur adipisicing
            elit.
          </p>
        </div>

        <div className="mt-6">
          <hr className="border-slate-700" />

          <p className="mt-3 text-right text-sm text-slate-400">
            Last updated: 24 Jul 2026
          </p>

          <div className="mt-4 flex justify-between">
            <button className="cursor-pointer rounded-md bg-yellow-400 px-4 py-2 font-medium text-black transition-colors duration-200 hover:bg-yellow-500">
              Edit
            </button>

            <button className="cursor-pointer rounded-md bg-red-500 px-4 py-2 font-medium text-white transition-colors duration-200 hover:bg-red-600">
              Delete
            </button>
          </div>
        </div>
      </div>

      {/* Card 2 */}
      <div className="flex flex-col justify-between rounded-lg border border-slate-700 bg-slate-800 p-5 shadow-md">
        <div>
          <h2 className="text-xl font-semibold">Build MERN Project</h2>

          <p className="mt-3 text-slate-300">
            Lorem ipsum dolor sit amet, consectetur adipisicing elit.
            Accusantium, reprehenderit. Lorem ipsum dolor sit amet consectetur
            adipisicing elit. Lorem ipsum dolor sit amet consectetur adipisicing
            elit.
          </p>
        </div>

        <div className="mt-6">
          <hr className="border-slate-700" />

          <p className="mt-3 text-right text-sm text-slate-400">
            Last updated: 24 Jul 2026
          </p>

          <div className="mt-4 flex justify-between">
            <button className="cursor-pointer rounded-md bg-yellow-400 px-4 py-2 font-medium text-black transition-colors duration-200 hover:bg-yellow-500">
              Edit
            </button>

            <button className="cursor-pointer rounded-md bg-red-500 px-4 py-2 font-medium text-white transition-colors duration-200 hover:bg-red-600">
              Delete
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default NoteCard;
