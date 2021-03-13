function App() {
  const HelloWorld = () => {
    return (
      <div className="flex items-center justify-center h-screen">
        <h1 className="text-8xl font-bold font-serif animate-pulse text-blue-600">
          Hello World
        </h1>
      </div>
    );
  };
  return (
    <div className="max-h-screen bg-blue-50">
      <HelloWorld />
    </div>
  );
}

export default App;
