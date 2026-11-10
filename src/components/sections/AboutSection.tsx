import { Brain } from 'lucide-react'
import { siteConfig } from '../../config/siteConfig'

export const AboutSection = () => {
  return (
    <section id="sobre" className="py-12 sm:py-16 lg:py-20 bg-[#FAF9F6] text-[#28332C] relative overflow-hidden w-full border-t border-[#E8E4DC]">
      <div className="w-full flex flex-col lg:flex-row items-center lg:items-center gap-8 lg:gap-12 xl:gap-20">
        
        {/* Left Column: Fixed-dimension Photo container preventing stretch/zoom (Desktop only) */}
        <div className="hidden lg:block w-full lg:w-[40vw] xl:w-[38vw] shrink-0 px-6 sm:px-10 lg:px-0">
          <div className="relative w-full h-[420px] lg:h-[460px] xl:h-[490px] rounded-[24px] lg:rounded-l-none lg:rounded-r-[32px] overflow-hidden shadow-xs bg-white border border-[#D8DFD7] lg:border-l-0">
            <img
              src="/sobremim.jpg"
              alt="Dra. Jéssica Stacciarini Psiquiatra"
              loading="lazy"
              decoding="async"
              width={800}
              height={835}
              className="w-full h-full object-cover object-top"
            />
          </div>
        </div>

        {/* Right Column: Editorial Content Block with controlled max-width */}
        <div className="w-full flex-1 flex flex-col justify-center px-6 sm:px-10 lg:pl-4 lg:pr-10 xl:pl-6 xl:pr-20 max-w-2xl lg:max-w-2xl xl:max-w-3xl mx-auto lg:mx-0 py-2 text-center lg:text-left items-center lg:items-start">
          
          {/* Símbolo no Celular */}
          <div className="lg:hidden w-10 h-10 rounded-full bg-[#EBF1EB] flex items-center justify-center mb-3 border border-[#D8DFD7] p-2 text-[#2E4237]">
            <Brain className="w-5 h-5 stroke-[1.5]" />
          </div>

          {/* Category Tag */}
          <span className="text-[11px] uppercase tracking-[0.25em] text-[#66796E] font-semibold mb-1">
            SOBRE MIM
          </span>

          {/* Name Heading in Andrea Bellarosa Signature */}
          <h2 className="font-signature text-4xl sm:text-5xl lg:text-6xl text-[#28332C] font-normal leading-tight pb-1 mb-2">
            Jessica Stacciarini
          </h2>

          {/* Professional Subhead com respiro para evitar sobreposição */}
          <div className="text-[11px] uppercase tracking-[0.2em] font-bold text-[#28332C] mt-0.5">
            MÉDICA PSIQUIATRA
          </div>
          <div className="text-[11px] text-[#66796E] tracking-wider uppercase mb-4 mt-0.5 font-medium">
            {siteConfig.doctor.crm} • {siteConfig.doctor.rqe}
          </div>

          {/* Mobile Photo (Shown only on mobile below PSIQUIATRA / CRM) */}
          <div className="w-full lg:hidden my-3 sm:my-4 max-w-sm mx-auto">
            <div className="relative w-full h-[270px] sm:h-[330px] rounded-[20px] overflow-hidden shadow-xs bg-white border border-[#D8DFD7]">
              <img
                src="/sobremim.jpg"
                alt="Dra. Jéssica Stacciarini Psiquiatra"
                loading="lazy"
                decoding="async"
                width={800}
                height={835}
                className="w-full h-full object-cover object-top"
              />
            </div>
          </div>

          {/* Thin Divider Line */}
          <div className="w-10 h-[1px] bg-[#D8DFD7] mb-5" />

          {/* Main Lead Paragraph in Serif */}
          <p className="font-serif text-xl sm:text-2xl text-[#28332C] leading-snug font-normal mb-3.5">
            Muito prazer, sou a Jéssica.
          </p>

          {/* Body Description */}
          <div className="space-y-3 text-xs sm:text-[14px] text-[#4F5A55] leading-relaxed max-w-xl text-center lg:text-left">
            <p>
              Sou Jéssica Stacciarini, médica psiquiatra, com 10 anos de experiência na área. Ao longo da minha trajetória, construí uma atuação pautada na prática clínica, na escuta atenta e no cuidado integral à saúde mental.
            </p>
            <p>
              Minha experiência profissional inclui uma importante trajetória no serviço público de saúde, especialmente no SUS, com atuação em diferentes contextos de atenção à saúde mental, incluindo situações de urgência e emergência psiquiátrica.
            </p>
            <p>
              Também mantenho minha atuação ambulatorial, buscando oferecer um atendimento individualizado, ético e humanizado, considerando a história, as necessidades e as particularidades de cada paciente.
            </p>
            <p>
              Atualmente, ofereço atendimentos psiquiátricos presenciais e online, com o propósito de proporcionar cuidado especializado, acompanhamento responsável e uma relação médico-paciente baseada na confiança, no acolhimento e na ciência.
            </p>
          </div>

        </div>

      </div>
    </section>
  )
}
