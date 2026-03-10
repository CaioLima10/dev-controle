import Image from "next/image";

export function Hero(){
  return(
    <div className="flex flex-col gap-4 items-center justify-center h-[calc(100vh-80px)]">
      <div className="flex flex-col items-center">
        <h2 className="text-xl">Gerencie sua empresa.</h2>
        <h1 className="font-bold text-3xl text-blue-500">Atendimento, Clientes</h1>
      </div>
      <Image 
        src="./hero.svg" 
        alt="hero" 
        width={600} 
        height={600} 
        className="max-w-sm md:max-w-xl"
      />
    </div>
  )
}