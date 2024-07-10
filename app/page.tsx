export default function Home() {
  const nome = "Wanderson";
  let canal = "CFBCursos";

  function retName() {
    return nome;
  }

  return (
    <main className="flex min-h-screen flex-col justify-center items-center">
      <div>
        {/* Utilizando o Js dentro do HTML, para acessar variáveis */}
        <div>{retName()}</div>
        <div>{canal}</div>

        <div>Minicurso de Next.js</div>
        <div>Next.js 14</div>
        <div>TypeScript</div>
        <div>React</div>
      </div>
    </main>
  );
}
