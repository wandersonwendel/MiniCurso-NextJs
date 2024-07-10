const nome = "Wanderson";
let canal = "CFBCursos";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col justify-center items-center">
      <div>
        {/* Utilizando o Js dentro do HTML, para acessar variáveis */}
        <div>{nome}</div>
        <div>{canal}</div>

        <div>Minicurso de Next.js</div>
        <div>Next.js 14</div>
        <div>TypeScript</div>
        <div>React</div>
      </div>
    </main>
  );
}
