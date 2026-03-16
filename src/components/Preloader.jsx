const Preloader = () => {
  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-background">
      <div className="h-12 w-12 rounded-full border-4 border-gray-300 border-t-accent animate-spin" />
    </div>
  );
};

export default Preloader;
