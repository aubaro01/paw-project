// "use client"

// import * as React from "react"
// import { ChevronDown } from "lucide-react"

// import { Button } from "@/components/ui/button"
// import { RadioGroup, RadioItem } from "@/components/ui/radio-group"

// export function DateFilter() {
//   const [open, setOpen] = React.useState(false)
//   const [selectedDate, setSelectedDate] = React.useState("any")
//   const ref = React.useRef<HTMLDivElement>(null)

//   // Close dropdown when clicking outside
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
//       <Button
//         variant="outline"
//         className="w-full md:w-auto bg-primary text-primary-foreground hover:bg-primary/90"
//         onClick={() => setOpen(!open)}
//       >
//         Datas disponíveis
//         <ChevronDown className="h-4 w-4" />
//       </Button>

//       {open && (
//         <div className="absolute left-0 top-full mt-1 w-64 rounded-md border bg-white shadow-lg z-10">
//           <RadioGroup value={selectedDate} onValueChange={setSelectedDate} className="p-2">
//             <div className="flex items-center space-x-2 p-2">
//               <RadioItem value="today" id="today" />
//               <label htmlFor="today" className="text-base">
//                 Hoje
//               </label>
//             </div>
//             <div className="flex items-center space-x-2 p-2">
//               <RadioItem value="next3days" id="next3days" />
//               <label htmlFor="next3days" className="text-base">
//                 Próximos 3 dias
//               </label>
//             </div>
//             <div className="flex items-center space-x-2 p-2">
//               <RadioItem value="any" id="any" />
//               <label htmlFor="any" className="text-base">
//                 Qualquer data
//               </label>
//             </div>
//           </RadioGroup>

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

