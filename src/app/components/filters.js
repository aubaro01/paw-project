import { useState } from "react"
import { ChevronDown, Filter, Calendar, Shield, Star } from 'lucide-react'
import { cn } from "@/lib/utils"
import { Button } from "@/components/ui/button"
import { Popover, PopoverContent, PopoverTrigger } from "@/components/ui/popover"
import { Checkbox } from "@/components/ui/checkbox"
import { Label } from "@/components/ui/label"
import { Input } from "@/components/ui/input"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"

export default function Filters() {
  const [activeFilter, setActiveFilter] = useState<string | null>(null)
  
  const toggleFilter = (filter: string) => {
    setActiveFilter(activeFilter === filter ? null : filter)
  }

  return (
    <div className="w-full bg-white py-4 px-4 sm:px-6 shadow-sm rounded-lg">
      <div className="flex flex-wrap items-center justify-center sm:justify-start gap-3">
        <FilterButton 
          icon={<Calendar className="h-4 w-4" />}
          label="Datas disponíveis"
          isActive={activeFilter === "dates"}
          onClick={() => toggleFilter("dates")}
        >
          <DatesFilterContent />
        </FilterButton>
        
        <FilterButton 
          icon={<Shield className="h-4 w-4" />}
          label="Planos de saúde"
          isActive={activeFilter === "plans"}
          onClick={() => toggleFilter("plans")}
        >
          <PlansFilterContent />
        </FilterButton>
        
        <FilterButton 
          icon={<Filter className="h-4 w-4" />}
          label="Mais filtros"
          isActive={activeFilter === "more"}
          onClick={() => toggleFilter("more")}
        >
          <MoreFiltersContent />
        </FilterButton>
      </div>
    </div>
  )
}

interface FilterButtonProps {
  icon: React.ReactNode
  label: string
  isActive: boolean
  onClick: () => void
  children: React.ReactNode
}

function FilterButton({ icon, label, isActive, onClick, children }: FilterButtonProps) {
  return (
    <Popover>
      <PopoverTrigger asChild>
        <Button
          onClick={onClick}
          variant={isActive ? "default" : "outline"}
          className={cn(
            "flex items-center gap-2 px-4 py-2.5 rounded-full text-sm font-medium transition-all duration-200",
            isActive ? "bg-emerald-500 text-white hover:bg-emerald-600" : "hover:bg-emerald-50 hover:text-emerald-600"
          )}
        >
          {icon}
          <span>{label}</span>
          <ChevronDown className={cn(
            "h-4 w-4 transition-transform duration-200",
            isActive && "transform rotate-180"
          )} />
        </Button>
      </PopoverTrigger>
      <PopoverContent className="w-80 p-4">
        {children}
      </PopoverContent>
    </Popover>
  )
}

function DatesFilterContent() {
  return (
    <div className="space-y-4">
      <div className="space-y-2">
        <Label>Próximos dias</Label>
        <div className="flex flex-wrap gap-2">
          {["Hoje", "Amanhã", "Esta semana", "Próxima semana"].map((day) => (
            <Button 
              key={day}
              variant="outline"
              className="text-xs rounded-full hover:bg-emerald-50 hover:text-emerald-600"
            >
              {day}
            </Button>
          ))}
        </div>
      </div>
      <div className="space-y-2">
        <Label>Horários</Label>
        <div className="flex flex-wrap gap-2">
          {["Manhã", "Tarde", "Noite"].map((time) => (
            <Button 
              key={time}
              variant="outline"
              className="text-xs rounded-full hover:bg-emerald-50 hover:text-emerald-600"
            >
              {time}
            </Button>
          ))}
        </div>
      </div>
    </div>
  )
}

function PlansFilterContent() {
  const plans = ["Unimed", "Amil", "Bradesco Saúde", "SulAmérica", "Particular"]
  
  return (
    <div className="space-y-4">
      <div className="relative">
        <Input
          type="text"
          placeholder="Buscar plano de saúde..."
          className="pl-10"
        />
        <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
          <svg className="h-5 w-5 text-gray-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
          </svg>
        </div>
      </div>
      
      <div className="space-y-2">
        {plans.map((plan) => (
          <div key={plan} className="flex items-center space-x-2">
            <Checkbox id={`plan-${plan}`} />
            <Label htmlFor={`plan-${plan}`}>{plan}</Label>
          </div>
        ))}
      </div>
    </div>
  )
}

function MoreFiltersContent() {
  const [rating, setRating] = useState(0)

  return (
    <div className="space-y-4">
      <div className="space-y-2">
        <Label htmlFor="specialty">Especialidade</Label>
        <Select>
          <SelectTrigger id="specialty">
            <SelectValue placeholder="Todas as especialidades" />
          </SelectTrigger>
          <SelectContent>
            <SelectItem value="all">Todas as especialidades</SelectItem>
            <SelectItem value="psicologia">Psicologia</SelectItem>
            <SelectItem value="psiquiatria">Psiquiatria</SelectItem>
            <SelectItem value="neurologia">Neurologia</SelectItem>
          </SelectContent>
        </Select>
      </div>
      
      <div className="space-y-2">
        <Label>Avaliação mínima</Label>
        <div className="flex items-center gap-1">
          {[1, 2, 3, 4, 5].map((star) => (
            <Button
              key={star}
              variant="ghost"
              size="sm"
              className="p-0 hover:bg-transparent"
              onClick={() => setRating(star)}
            >
              <Star
                className={cn(
                  "h-6 w-6",
                  star <= rating ? "fill-yellow-400 text-yellow-400" : "text-gray-300"
                )}
              />
            </Button>
          ))}
          <span className="text-sm text-gray-500 ml-2">ou mais</span>
        </div>
      </div>
      
      <div className="space-y-2">
        <Label>Tipo de consulta</Label>
        <div className="flex gap-2">
          <Button variant="outline" className="rounded-full hover:bg-emerald-50 hover:text-emerald-600">
            Presencial
          </Button>
          <Button variant="outline" className="rounded-full hover:bg-emerald-50 hover:text-emerald-600">
            Online
          </Button>
        </div>
      </div>
    </div>
  )
}