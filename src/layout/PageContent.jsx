export default function PageContent({ children }) {
  return (
    <main className="flex-1 w-full">
      <div className="w-full max-w-7xl mx-auto px-4 md:px-12 lg:px-24 py-6">
        {children}
      </div>
    </main>
  );
}
