// "use client"

// import * as React from "react"
// import { ChevronDown, Search } from "lucide-react"

// import { Button } from "@/components/ui/button"
// import { Checkbox } from "@/components/ui/checkbox"
// import { Input } from "@/components/ui/input"

// // Lista de planos de saúde
// const healthPlans = [
//   "ACE",
//   "ACP",
//   "AdvanceCare",
//   "AIG",
//   "Allianz",
//   "ASEFA",
//   "Axa",
//   "Açoreana",
//   "CA Seguros",
//   "Cardif",
//   "Cofidis",
// ]

// export function HealthPlanFilter() {
//   const [open, setOpen] = React.useState(false)
//   const [searchTerm, setSearchTerm] = React.useState("")
//   const [selectedPlans, setSelectedPlans] = React.useState<string[]>([])
//   const ref = React.useRef<HTMLDivElement>(null)

//   // Filtrar planos com base na pesquisa
//   const filteredPlans = healthPlans.filter((plan) => plan.toLowerCase().includes(searchTerm.toLowerCase()))

//   // Alternar seleção de plano
//   const togglePlan = (plan: string) => {
//     setSelectedPlans((prev) => (prev.includes(plan) ? prev.filter((p) => p !== plan) : [...prev, plan]))
//   }

//   // Fechar dropdown ao clicar fora
//   React.useEffect(() => {
//     const handleClickOutside = (event: MouseEvent) => {
//       if (ref.current && !ref.current.contains(event.target as Node)) {
//         setOpen(false)
//       }
//     }

//     document.addEventListener("mousedown", handleClickOutside)
//     return () => {
//       document.removeEventListener("mousedown", handleClickOutside)
//     }
//   }, [])

//   // Função para mostrar resultados e fechar dropdown
//   const handleShowResults = () => {
//     // Aqui você pode adicionar lógica para filtrar resultados
//     setOpen(false)
//   }

//   return (
//     <div className="relative" ref={ref}>
//       <Button variant="outline" className="w-full md:w-auto" onClick={() => setOpen(!open)}>
//         Planos de saúde
//         <ChevronDown className="h-4 w-4" />
//       </Button>

//       {open && (
//         <div className="absolute left-0 top-full mt-1 w-64 rounded-md border bg-white shadow-lg z-10">
//           <div className="p-2 border-b">
//             <div className="relative">
//               <Search className="absolute left-2 top-1/2 h-4 w-4 -translate-y-1/2 text-gray-500" />
//               <Input
//                 placeholder="Pesquisar"
//                 className="pl-8"
//                 value={searchTerm}
//                 onChange={(e) => setSearchTerm(e.target.value)}
//               />
//             </div>
//           </div>

//           <div className="max-h-60 overflow-y-auto p-2">
//             {filteredPlans.map((plan) => (
//               <div key={plan} className="flex items-center space-x-2 p-2">
//                 <Checkbox id={plan} checked={selectedPlans.includes(plan)} onCheckedChange={() => togglePlan(plan)} />
//                 <label htmlFor={plan} className="text-base cursor-pointer">
//                   {plan}
//                 </label>
//               </div>
//             ))}
//           </div>

//           {/* Botão de mostrar resultados */}
//           <div className="p-2 border-t">
//             <Button
//               className="w-full bg-primary text-primary-foreground hover:bg-primary/90"
//               onClick={handleShowResults}
//             >
//               Mostrar 1842 resultados
//             </Button>
//           </div>
//         </div>
//       )}
//     </div>
//   )
// }

