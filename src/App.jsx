import { Card } from "./components/Card";
import { Hello } from "./components/Hello"

const CARDS = [
  { id: 0, title: 'Card A', description: 'filho de A' },
  { id: 0, title: 'Card B', description: 'filho de B' },
  { id: 0, title: 'Card C', description: 'filho de C' },
]

const App = () => {
  return (
    <main className="min-h-dvh bg-amber-50">
      <h1 className="text-3xl font-bold text-slate-800">
        Hello Tailwind + React!
      </h1>

      <div className="container mx-auto p-6 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {CARDS.map(item => (
          <Card key={item.id} title={item.title}>
            <p>{item.description}</p>
          </Card>
        ))}
      </div>


      <a href="a" className="inline-block px-4 py-2 rounded-lg border houver:bg-slate-100 focus:ring-2 focust:ring-blue-500">
        Link com foco
      </a>
      <Hello name="Bella" />
    </main>
  );
}


export default App