import { useState } from "react";
import { Card } from "./components/Card";
import { Hello } from "./components/Hello"
import { Textfield } from "./components/TextField";

const CARDS = [
  { id: 0, title: 'Card A', description: 'filho de A' },
  { id: 1, title: 'Card B', description: 'filho de B' },
  { id: 2, title: 'Card C', description: 'filho de C' },
]

const App = () => {
  const [count, setCount] = useState(0)
  const [name, setName] = useState ("")

  const inc = () => setCount(c => c + 1)

  const handleSubmit = event => {
    event.preventDefaut ()

    console.log({ name })
    // Enviar para API/banco de dados

    setName ('')
  }

  return (
    <main className="min-h-dvh grid place-items-center bg-amber-50">
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


      <a href="#" className="inline-block px-4 py-2 rounded-lg border houver:bg-slate-100 focus:ring-2 focus:ring-blue-500">
        Link com foco
      </a>

      <button
        className="inline-block px-4 py-2 rounded-lg border houver:bg-slate-300 focus:ring-2 focus:ring-blue-500 cursor-pointer"
        onClick={inc}
      >
        Contador: {count}
      </button>

      <Hello name="Bella" /> 
      <form onSubmit={handleSubmit}>
        <Textfield
        Label= "Digite seu nome completo"
        placeholder
        type="text"
        value= {name}
        onChange={event => setName(event.target.value)}
        />

        
      <button
      type="submit"
        className="inline-block px-4 py-2 w-full rounded-lg border houver:bg-slate-300 focus:ring-2 focus:ring-blue-500 cursor-pointer"
      >
        Enviar
      </button>
      </form>
    </main>
  );
}


export default App