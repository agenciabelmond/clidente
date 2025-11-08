import Image from "next/image"
import Link from "next/link"
import WhatsAppButton from "@/components/WhatsAppButton"


export default function Home() {
  return (
    <div className="min-h-screen flex flex-col">
      {/* Header */}
      <header className="bg-[#102d7c] px-4 py-4 flex items-center justify-center gap-2.5">
        <Image
          src="/clidente_simbolo_branco.png"
          alt="Clidente Logo"
          width={60}
          height={60}
          className="h-10 md:h-[60px] w-auto object-contain"
        />
        <h1 className="text-white text-2xl md:text-[2rem] font-normal tracking-tight">Clidente</h1>
      </header>

      {/* Main Content */}
      <main className="flex-1 bg-[#bcc7e0] flex flex-col items-center justify-center px-8 py-12 text-center">
        <p className="text-[#102d7c] text-lg md:text-[1.3rem] font-normal mb-8 opacity-95">
          Conecte-se agora com a equipe da Clidente e<br className="hidden sm:block" /> continue seu agendamento com
          segurança.
        </p>

        <h2 className="text-[#102d7c] text-[1.75rem] md:text-[2.8rem] font-bold leading-tight mb-10 max-w-[800px]">
          Clique no botão abaixo para prosseguir seu atendimento
        </h2>

          <WhatsAppButton />

      </main>

      {/* Footer */}
      <footer className="bg-white text-[#333] px-8 py-8 flex items-center justify-center gap-2 text-sm">
        <Image
          src="/clidente_simbolo_preto.png"
          alt="Clidente Logo"
          width={27}
          height={26}
          className="h-[26px] w-[27px]"
        />
        <span>Clidente ® Todos direitos reservados.</span>
      </footer>
    </div>
  )
}