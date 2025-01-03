import homeImage from "./home-right-side-ilustration.jpeg";

export function Welcome() {
  return (
    <main className="flex items-center justify-center h-screen w-full max-w-7xl mx-auto">

      <div className="w-full flex flex-col gap-10">
        <header >
          <h1 className="text-4xl text-center text-terciary">Call of Cthulhu: O Ritual Perdido</h1>
        </header>
        <nav className="flex flex-col items-center justify-center gap-4">
{resources.map((resource) => (
          <a
            key={resource.href}
            href={resource.href}
            className="text-lg"
          >
            <div className="bg-secondary p-4 rounded w-60 flex items-center justify-center">
              <span>

              {resource.text}
              </span>
              </div>
          </a>
))}
        </nav>
      </div>
      <div className="w-full h-full">

      <img src={homeImage} alt="Home" className="h-full object-cover" />
      </div>
    </main>
  );
}

const resources = [
  {
    href: "/",
    text: "Novo Jogo",
  },
];
