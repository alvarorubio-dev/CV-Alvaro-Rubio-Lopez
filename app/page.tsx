"use client";

import Image from "next/image";
import {
  Briefcase,
  GraduationCap,
  Code,
  Server,
  Award,
  Mail,
  MessageCircle,
  FileDown,
  ExternalLink,
  Bot,
  Cpu,
  Zap,
  Database,
  Activity,
  ThermometerSnowflake,
  Network,
} from "lucide-react";

export default function CV() {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "Person",
    name: "Álvaro Rubio López",
    jobTitle: "CEO & Ingeniero de Sistemas",
    url: "https://sormenak.com",
    description:
      "Ingeniero de Sistemas Computacionales y Especialista en IA Empresarial con experiencia en dirección estratégica de operaciones logísticas.",
    knowsAbout: [
      "Inteligencia Artificial",
      "Desarrollo Web",
      "SEO Técnico",
      "Logística Internacional",
      "Metodologías Lean",
    ],
    worksFor: { "@type": "Organization", name: "Sormenak Solutions" },
    alumniOf: [
      { "@type": "CollegeOrUniversity", name: "Utel Universidad" },
      { "@type": "EducationalOrganization", name: "IES Tirso de Molina" },
    ],
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />

      <main className="min-h-screen bg-slate-50 py-10 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto bg-white shadow-2xl shadow-slate-200/50 rounded-3xl overflow-hidden border border-slate-100">
          {/* CABECERA */}
          <header className="bg-slate-900 text-white p-8 md:p-12 relative overflow-hidden">
            <div className="absolute top-0 right-0 -mt-20 -mr-20 w-80 h-80 bg-blue-500 rounded-full opacity-10 blur-3xl"></div>
            <div className="relative z-10 flex flex-col md:flex-row items-center md:items-start gap-8">
              <div className="flex-shrink-0 relative group">
                <div className="absolute inset-0 bg-blue-500 rounded-full opacity-20 blur-md group-hover:opacity-40 transition-opacity duration-300"></div>
                <Image
                  src="/perfil.jpg"
                  alt="Álvaro Rubio López"
                  width={180}
                  height={180}
                  priority
                  className="relative rounded-full border-4 border-slate-800 shadow-xl object-cover object-top w-40 h-40 md:w-48 md:h-48 transition-transform duration-300 group-hover:scale-[1.02]"
                />
              </div>

              <div className="text-center md:text-left flex-1 pt-2">
                <h1 className="text-4xl md:text-5xl font-extrabold tracking-tight mb-3">
                  Álvaro Rubio López
                </h1>
                <h2 className="text-xl md:text-2xl text-blue-400 font-medium mb-6 leading-snug">
                  Ingeniero de Sistemas Informáticos | CEO & Especialista en IA
                  Empresarial
                </h2>
                <div className="inline-flex items-center text-slate-300 bg-slate-800/50 px-4 py-2 rounded-full border border-slate-700/50 backdrop-blur-sm mb-6">
                  <Mail className="w-4 h-4 mr-2 text-blue-400" />
                  <span className="text-sm font-medium tracking-wide">
                    rubiolopezalvaro@gmail.com
                  </span>
                </div>
                <div className="flex flex-wrap justify-center md:justify-start gap-3">
                  <a
                    href="https://www.linkedin.com/in/alvarorubiolopez/"
                    target="_blank"
                    className="flex items-center gap-2 px-4 py-2 bg-[#0077b5] hover:bg-[#005582] text-white text-sm font-bold rounded-lg transition-all shadow-lg shadow-blue-500/30"
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="16"
                      height="16"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    >
                      <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"></path>
                      <rect x="2" y="9" width="4" height="12"></rect>
                      <circle cx="4" cy="4" r="2"></circle>
                    </svg>
                    LinkedIn
                  </a>
                  <a
                    href="https://wa.me/573197076707?text=Hola%20Álvaro,%20vi%20tu%20CV%20y%20me%20gustaría%20conectar%20contigo"
                    target="_blank"
                    className="flex items-center gap-2 px-4 py-2 bg-emerald-500 hover:bg-emerald-600 text-white text-sm font-bold rounded-lg transition-all shadow-lg shadow-emerald-500/30"
                  >
                    <MessageCircle className="w-4 h-4" /> WhatsApp
                  </a>
                  <button
                    onClick={() => window.print()}
                    className="flex items-center gap-2 px-4 py-2 bg-slate-700 hover:bg-slate-800 text-white text-sm font-bold rounded-lg transition-all"
                  >
                    <FileDown className="w-4 h-4" /> Descargar PDF
                  </button>
                </div>
              </div>
            </div>
          </header>

          <div className="p-8 md:p-12">
            {/* PERFIL */}
            <section className="mb-14">
              <div className="flex items-center mb-6">
                <div className="p-2 bg-blue-50 rounded-lg mr-4">
                  <Award className="w-6 h-6 text-blue-600" />
                </div>
                <h3 className="text-2xl font-bold text-slate-800 tracking-tight">
                  Perfil Profesional
                </h3>
              </div>
              <p className="text-slate-600 leading-relaxed text-lg text-justify italic">
                Ingeniero de Sistemas Computacionales con un Máster en curso en
                Inteligencia Artificial aplicada a la empresa. Trayectoria única
                que combina dirección estratégica de operaciones logísticas de
                alta exigencia con el despliegue de soluciones tecnológicas
                avanzadas y agentes de IA autónomos.
              </p>
            </section>

            <hr className="border-slate-100 mb-12" />

            {/* EXPERIENCIA - LÍNEA DE TIEMPO CONECTADA */}
            <section className="mb-14">
              <div className="flex items-center mb-8">
                <div className="p-2 bg-blue-50 rounded-lg mr-4">
                  <Briefcase className="w-6 h-6 text-blue-600" />
                </div>
                <h3 className="text-2xl font-bold text-slate-800 tracking-tight">
                  Experiencia Profesional
                </h3>
              </div>

              <div className="space-y-10 relative before:absolute before:inset-0 before:ml-5 before:-translate-x-px md:before:mx-auto md:before:translate-x-0 before:h-full before:w-0.5 before:bg-gradient-to-b before:from-transparent before:via-slate-200 before:to-transparent">
                <article className="relative flex items-center justify-between md:justify-normal md:odd:flex-row-reverse group">
                  <div className="flex items-center justify-center w-10 h-10 rounded-full border-4 border-white bg-blue-100 text-blue-600 shadow absolute left-0 md:left-1/2 -translate-x-1/2 z-10">
                    <div className="w-2 h-2 bg-blue-600 rounded-full"></div>
                  </div>
                  <div className="w-[calc(100%-4rem)] md:w-[calc(50%-2.5rem)] ml-12 md:ml-0 p-6 bg-white border border-slate-100 rounded-2xl shadow-sm hover:shadow-md transition-all">
                    <h4 className="text-xl font-bold text-slate-800 mb-1">
                      CEO & Fundador
                    </h4>
                    <p className="text-blue-600 font-medium text-sm mb-4">
                      Sormenak Solutions | Actualidad
                    </p>
                    <p className="text-slate-600 text-sm leading-relaxed mb-3">
                      Liderazgo técnico en despliegue de agentes de IA y
                      arquitectura de software para optimización empresarial
                      B2B.
                    </p>
                  </div>
                </article>

                <article className="relative flex items-center justify-between md:justify-normal md:odd:flex-row-reverse group">
                  <div className="flex items-center justify-center w-10 h-10 rounded-full border-4 border-white bg-slate-100 text-slate-500 shadow absolute left-0 md:left-1/2 -translate-x-1/2 z-10">
                    <div className="w-2 h-2 bg-slate-400 rounded-full"></div>
                  </div>
                  <div className="w-[calc(100%-4rem)] md:w-[calc(50%-2.5rem)] ml-12 md:ml-0 p-6 bg-white border border-slate-100 rounded-2xl shadow-sm hover:shadow-md transition-all">
                    <h4 className="text-xl font-bold text-slate-800 mb-1">
                      Ingeniero de Sistemas
                    </h4>
                    <p className="text-slate-500 font-medium text-sm mb-4">
                      Consultoría Técnica | Últimos 3 años
                    </p>
                    <p className="text-slate-600 text-sm leading-relaxed">
                      Gestión integral de soluciones de software empresarial y
                      optimización de infraestructuras críticas.
                    </p>
                  </div>
                </article>

                <article className="relative flex items-center justify-between md:justify-normal md:odd:flex-row-reverse group">
                  <div className="flex items-center justify-center w-10 h-10 rounded-full border-4 border-white bg-slate-100 text-slate-500 shadow absolute left-0 md:left-1/2 -translate-x-1/2 z-10">
                    <div className="w-2 h-2 bg-slate-400 rounded-full"></div>
                  </div>
                  <div className="w-[calc(100%-4rem)] md:w-[calc(50%-2.5rem)] ml-12 md:ml-0 p-6 bg-white border border-slate-100 rounded-2xl shadow-sm hover:shadow-md transition-all">
                    <h4 className="text-xl font-bold text-slate-800 mb-1">
                      Jefe de Operaciones
                    </h4>
                    <p className="text-slate-500 font-medium text-sm mb-4">
                      Multiservicios Aeroportuarios, S.A. | Madrid, España
                    </p>
                    <p className="text-slate-600 text-sm leading-relaxed">
                      Dirección estratégica de logística para aerolíneas
                      internacionales e implementación de metodologías Lean.
                    </p>
                  </div>
                </article>
              </div>
            </section>

            <hr className="border-slate-100 mb-12" />

            {/* SOLUCIONES DE IA */}
            <section className="mb-14">
              <div className="flex items-center mb-6">
                <div className="p-2 bg-blue-50 rounded-lg mr-4">
                  <Bot className="w-6 h-6 text-blue-600" />
                </div>
                <h3 className="text-2xl font-bold text-slate-800 tracking-tight">
                  Soluciones de IA & Agentes
                </h3>
              </div>
              <div className="flex flex-col gap-6">
                <div className="p-7 border border-slate-100 rounded-2xl bg-gradient-to-br from-white to-blue-50/30 hover:border-blue-300 hover:shadow-lg transition-all">
                  <div className="flex justify-between items-start mb-4">
                    <div className="flex items-center">
                      <Cpu className="w-6 h-6 text-blue-600 mr-3" />
                      <h4 className="font-bold text-slate-800 text-xl tracking-tight">
                        AI Enterprise Orchestrator
                      </h4>
                    </div>
                    <ExternalLink className="w-5 h-5 text-slate-300" />
                  </div>
                  <p className="text-slate-600 text-sm md:text-base leading-relaxed text-justify mb-4">
                    Arquitectura avanzada de agentes de IA autónomos programados
                    en Python, diseñados para integrarse en operaciones B2B
                    complejas. Utilizando LangChain y sistemas RAG
                    (Retrieval-Augmented Generation), estos agentes acceden a
                    bases de datos y documentación corporativa de forma segura
                    para resolver consultas técnicas, redactar informes y
                    automatizar flujos de trabajo logísticos. Esta orquestación
                    reduce la carga operativa manual en un 40%, permitiendo a
                    los equipos enfocarse en la toma de decisiones estratégicas.
                  </p>
                  <div className="flex gap-2">
                    <span className="px-3 py-1 bg-blue-600 text-white text-[11px] font-bold rounded-md uppercase">
                      RAG System
                    </span>
                    <span className="px-3 py-1 bg-slate-800 text-white text-[11px] font-bold rounded-md uppercase">
                      Python
                    </span>
                    <span className="px-3 py-1 bg-blue-100 text-blue-800 text-[11px] font-bold rounded-md uppercase border border-blue-200">
                      LangChain
                    </span>
                  </div>
                </div>

                <div className="p-7 border border-slate-100 rounded-2xl bg-gradient-to-br from-white to-slate-50 hover:border-amber-300 hover:shadow-lg transition-all">
                  <div className="flex justify-between items-start mb-4">
                    <div className="flex items-center">
                      <Zap className="w-6 h-6 text-amber-500 mr-3" />
                      <h4 className="font-bold text-slate-800 text-xl tracking-tight">
                        ProDigital Automation Hub
                      </h4>
                    </div>
                    <ExternalLink className="w-5 h-5 text-slate-300" />
                  </div>
                  <p className="text-slate-600 text-sm md:text-base leading-relaxed text-justify mb-4">
                    Plataforma integral B2B desarrollada con la última
                    arquitectura de Next.js 16, enfocada en la captación y
                    cualificación inteligente de leads. Implementa flujos de IA
                    generativa (LLM Ops) diseñados específicamente para
                    interactuar en tiempo real con clientes del sector de
                    logística térmica y contratistas en EE.UU. El sistema
                    automatiza el embudo de ventas, personaliza las propuestas
                    de servicio y se sincroniza con CRMs corporativos, mejorando
                    drásticamente las tasas de conversión.
                  </p>
                  <div className="flex gap-2">
                    <span className="px-3 py-1 bg-amber-500 text-white text-[11px] font-bold rounded-md uppercase">
                      LLM Ops
                    </span>
                    <span className="px-3 py-1 bg-slate-800 text-white text-[11px] font-bold rounded-md uppercase">
                      Next.js 16
                    </span>
                  </div>
                </div>
              </div>
            </section>

            <hr className="border-slate-100 mb-12" />

            {/* INGENIERÍA WEB & SEO TÉCNICO */}
            <section className="mb-14">
              <div className="flex items-center mb-6">
                <div className="p-2 bg-blue-50 rounded-lg mr-4">
                  <Database className="w-6 h-6 text-blue-600" />
                </div>
                <h3 className="text-2xl font-bold text-slate-800 tracking-tight">
                  Ingeniería Web & SEO Técnico
                </h3>
              </div>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="p-6 border border-slate-100 rounded-2xl bg-white hover:border-emerald-300 hover:shadow-lg transition-all">
                  <h4 className="font-bold text-slate-800 text-lg mb-2">
                    Beardiepedia: Arquitectura SEO de Silos
                  </h4>
                  <p className="text-slate-600 text-sm leading-relaxed text-justify">
                    Plataforma web hiper-nicho con arquitectura de silos.
                    Implementación de jerarquía semántica estricta, integración
                    con Knowledge Graph y marcado JSON-LD avanzado para dominar
                    las SERPs de Google.
                  </p>
                  <span className="px-2 py-0.5 bg-emerald-50 text-emerald-700 text-[10px] font-bold rounded border border-emerald-200">
                    SEMANTIC SEO
                  </span>
                </div>
                <div className="p-6 border border-slate-100 rounded-2xl bg-white hover:border-blue-300 hover:shadow-lg transition-all">
                  <h4 className="font-bold text-slate-800 text-lg mb-2">
                    EficienciaNow: Migración y Vitals
                  </h4>
                  <p className="text-slate-600 text-sm leading-relaxed text-justify">
                    Reingeniería Next.js para portal energético. Resolución de
                    deuda técnica, mapas de redirecciones complejas y
                    optimización extrema de Core Web Vitals (LCP, CLS, INP).
                  </p>
                  <span className="px-2 py-0.5 bg-blue-50 text-blue-700 text-[10px] font-bold rounded border border-blue-200">
                    TECHNICAL SEO
                  </span>
                </div>
                <div className="p-6 border border-slate-100 rounded-2xl bg-white hover:border-cyan-300 hover:shadow-lg transition-all">
                  <h4 className="font-bold text-slate-800 text-lg mb-2">
                    B2B Cold Chain & Thermal Logistics
                  </h4>
                  <p className="text-slate-600 text-sm leading-relaxed text-justify">
                    Estrategia SEO técnica para sector logístico térmico,
                    optimizando productos complejos y estructurando datos para
                    captación de leads cualificados internacionales.
                  </p>
                  <span className="px-2 py-0.5 bg-cyan-50 text-cyan-700 text-[10px] font-bold rounded border border-cyan-200">
                    LOGISTICS SEO
                  </span>
                </div>
                <div className="p-6 border border-slate-100 rounded-2xl bg-white hover:border-violet-300 hover:shadow-lg transition-all">
                  <h4 className="font-bold text-slate-800 text-lg mb-2">
                    Automated AI SEO Content Pipeline
                  </h4>
                  <p className="text-slate-600 text-sm leading-relaxed text-justify">
                    Flujos automatizados con IA para publicación continua vía
                    GitHub CI/CD. Orquestación de prompts para generación de
                    artículos Markdown optimizados.
                  </p>
                  <span className="px-2 py-0.5 bg-violet-50 text-violet-700 text-[10px] font-bold rounded border border-violet-200">
                    AI AUTOMATION
                  </span>
                </div>
              </div>
            </section>

            <hr className="border-slate-100 mb-12" />

            {/* HABILIDADES Y EDUCACIÓN ACTUALIZADA */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
              <section>
                <div className="flex items-center mb-6">
                  <div className="p-2 bg-blue-50 rounded-lg mr-4">
                    <Server className="w-6 h-6 text-blue-600" />
                  </div>
                  <h3 className="text-2xl font-bold text-slate-800 tracking-tight">
                    Habilidades
                  </h3>
                </div>
                <div className="flex flex-wrap gap-2">
                  {[
                    "Next.js",
                    "AI Agents",
                    "RAG",
                    "Python",
                    "Tailwind CSS",
                    "Lean Six Sigma",
                    "SEO Semántico",
                    "CI/CD",
                  ].map((skill) => (
                    <span
                      key={skill}
                      className="px-3 py-1 bg-white border border-slate-200 text-slate-600 text-sm rounded-full shadow-sm hover:border-blue-300 transition-colors"
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </section>

              <section>
                <div className="flex items-center mb-6">
                  <div className="p-2 bg-blue-50 rounded-lg mr-4">
                    <GraduationCap className="w-6 h-6 text-blue-600" />
                  </div>
                  <h3 className="text-2xl font-bold text-slate-800 tracking-tight">
                    Educación
                  </h3>
                </div>
                <div className="space-y-4 text-sm">
                  <div className="p-4 bg-slate-50 rounded-xl border border-slate-100">
                    <p className="font-bold text-slate-800">
                      Máster IA en la Empresa
                    </p>
                    <p className="text-blue-600 font-bold">En curso</p>
                  </div>
                  <div className="p-4 bg-slate-50 rounded-xl border border-slate-100">
                    <p className="font-bold text-slate-800">
                      Ingeniería en Sistemas
                    </p>
                    <p className="text-slate-500 font-medium">
                      Utel Universidad | 2017-2021
                    </p>
                  </div>
                  <div className="p-4 bg-slate-50 rounded-xl border border-slate-100">
                    <p className="font-bold text-slate-800">
                      Bachillerato / Educación Secundaria
                    </p>
                    <p className="text-slate-500 font-medium italic">
                      IES Tirso de Molina – Madrid, España
                    </p>
                  </div>
                </div>
              </section>
            </div>
          </div>
        </div>
      </main>
    </>
  );
}
