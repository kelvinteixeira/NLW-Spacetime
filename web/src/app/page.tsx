import Image from "next/image";
import { User } from "lucide-react";
import nwlLogo from "../assets/nlw-spacetime-logo.svg";

export default function Home() {
  return (
    <main className="grid min-h-screen grid-cols-2">
      {/* left */}
      <div className="relative bg-[url(../assets/bg-stars.svg)] bg-cover flex flex-col items-start justify-between overflow-hidden px-28 py-16 border-r border-white/10">
        {/* Blur */}
        <div className="  rounded-full absolute right-0 top-1/2 h-[288px] w-[526px] bg-purple-700 blur-full opacity-50 translate-x-1/2 -translate-y-1/2"></div>
        {/* Stripes */}
        <div className="absolute right-2 top-0 bottom-0 w-2 bg-stripes "></div>

        {/* Singin */}
        <a
          href=""
          className="flex items-center gap-3 text-left hover:text-gray-50 transition-colors"
        >
          <div className="flex h-10 w-10 items-center justify-center rounded-full bg-gray-400">
            <User className="h-5 w-5 text-gray-500" />
          </div>

          <p className="text-sm leading-snug max-w-[140px]">
            <span className="underline ">Crie sua conta</span> e salve suas
            memórias!
          </p>
        </a>

        {/* Hero  */}
        <div className="space-y-5">
          <Image src={nwlLogo} alt="NLW logo" />

          <div className="max-w-[420px] space-y-1">
            <h1 className="text-5xl font-bold leading-tight text-gray-50">
              Sua cápsula do tempo
            </h1>
            <p className="text-lg leading-relaxed">
              Colecione momentos marcantes da sua jornada e compartulhe (se
              quiser) com o mundo!
            </p>
          </div>

          <a
            href=""
            className="inline-block rounded-full bg-green-500 px-5 py-3 font-alt text-sm uppercase leading-none text-black hover:bg-green-600"
          >
            CADASTRAR LEMBRANÇAS
          </a>
        </div>

        {/* Copyright */}

        <div className="text-sm leading-relaxed text-gray-200">
          Feito com 💜 no NLW da{' '} 
          <a
            target="_blank"
            rel="noreferrer"
            className="underline hover:text-gray-100"
            href="http://rockeatseat.com.br"
          >
            Rockeatset
          </a>
        </div>
      </div>

      {/* right */}
      <div className="flex flex-col p-16 bg-[url(../assets/bg-stars.svg)] bg-cover">
        <div className="flex flex-1 items-center justify-center">
          <p className="text-center leading-relaxed w-[360px]">
            Você ainda não registrou nenhuma lembrança, comece a{" "}
            <a
              className="underline hover:text-gray-50 transition-colors"
              href=""
            >
              criar agora
            </a>
            !
          </p>
        </div>
      </div>
    </main>
  );
}
