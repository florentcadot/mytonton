export function Header() {
  return (
    <header className="bg-gray-50">
      <div className="mx-auto max-w-screen-xl px-4 py-8 sm:px-6 sm:py-12 lg:px-8">
        <div>
          <img alt="Logo" src="mytonton-150x150.png" />
        </div>
        <div className="sm:flex sm:items-center sm:justify-between">
          <div className="text-center sm:text-left">
            <h1 className="text-2xl font-bold text-gray-900 sm:text-3xl">
              MyTonton
            </h1>
            <p className="mt-1.5 text-sm text-gray-500">
              Cagnotte pour cadeaux immatériels! 🎉
            </p>
          </div>
        </div>
      </div>
    </header>
  );
}
