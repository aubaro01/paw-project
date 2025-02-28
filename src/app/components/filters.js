"use client"

import { useEffect, useState, useRef } from "react"
import { useRouter, useSearchParams } from "next/navigation"
import { ChevronDown, Filter, Calendar, Shield, Star, X, Search, Check, Loader2 } from "lucide-react"
import { cn } from "@/lib/utils"
import { Button } from "@/app/components/ui/button"
import { Popover, PopoverContent, PopoverTrigger } from "@/app/components/ui/popover"
import { Checkbox } from "@/app/components/ui/checkbox"
import { Label } from "@/app/components/ui/label"
import { Input } from "@/app/components/ui/input"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/app/components/ui/select"
import { Badge } from "@/app/components/ui/badge"
import { motion, AnimatePresence } from "framer-motion"

export default function StickyFilterNav() {
  const router = useRouter()
  const searchParams = useSearchParams()
  const filterRef = useRef(null)

  // Get filter values from URL parameters
  const dateFilter = searchParams.get("date")
  const timeFilter = searchParams.get("time")
  const plansFilter = searchParams.get("plans")?.split(",").filter(Boolean) || []
  const specialtyFilter = searchParams.get("specialty")
  const ratingFilter = searchParams.get("rating") ? Number.parseInt(searchParams.get("rating") || "0") : 0
  const consultType = searchParams.get("consultType")

  const [activeFilter, setActiveFilter] = useState(null)
  const [loading, setLoading] = useState(false)
  const [showAppliedFilters, setShowAppliedFilters] = useState(false)

  // Count active filters
  const activeFiltersCount = [
    dateFilter,
    timeFilter,
    plansFilter.length > 0,
    specialtyFilter,
    ratingFilter > 0,
    consultType,
  ].filter(Boolean).length

  // Show applied filters after a short delay when filters are applied
  useEffect(() => {
    if (activeFiltersCount > 0) {
      const timer = setTimeout(() => {
        setShowAppliedFilters(true)
      }, 500)
      return () => clearTimeout(timer)
    } else {
      setShowAppliedFilters(false)
    }
  }, [activeFiltersCount])

  // Close popover when clicking outside
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (filterRef.current && !filterRef.current.contains(event.target)) {
        setActiveFilter(null)
      }
    }

    document.addEventListener("mousedown", handleClickOutside)
    return () => document.removeEventListener("mousedown", handleClickOutside)
  }, [])

  const toggleFilter = (filter) => {
    setActiveFilter(activeFilter === filter ? null : filter)
  }

  // Update URL with filter parameters
  const updateFilters = (params) => {
    setLoading(true)

    // Create a new URLSearchParams object from the current URL
    const newSearchParams = new URLSearchParams(searchParams.toString())

    // Update or remove parameters
    Object.entries(params).forEach(([key, value]) => {
      if (value === null) {
        newSearchParams.delete(key)
      } else {
        newSearchParams.set(key, value)
      }
    })

    // Update the URL
    router.push(`?${newSearchParams.toString()}`)

    // Simulate loading state for better UX
    setTimeout(() => setLoading(false), 500)
  }

  // Handle date selection
  const handleDateSelect = (date) => {
    updateFilters({ date: date === dateFilter ? null : date })
  }

  // Handle time selection
  const handleTimeSelect = (time) => {
    updateFilters({ time: time === timeFilter ? null : time })
  }

  // Handle health plan selection
  const handlePlanSelect = (plan) => {
    const newPlans = plansFilter.includes(plan) ? plansFilter.filter((p) => p !== plan) : [...plansFilter, plan]

    updateFilters({
      plans: newPlans.length > 0 ? newPlans.join(",") : null,
    })
  }

  // Handle specialty selection
  const handleSpecialtySelect = (specialty) => {
    updateFilters({
      specialty: specialty === "all" ? null : specialty,
    })
  }

  // Handle rating selection
  const handleRatingSelect = (rating) => {
    updateFilters({
      rating: rating === ratingFilter ? null : rating.toString(),
    })
  }

  // Handle consult type selection
  const handleConsultTypeSelect = (type) => {
    updateFilters({
      consultType: type === consultType ? null : type,
    })
  }

  // Clear all filters
  const clearAllFilters = () => {
    router.push(window.location.pathname)
    setActiveFilter(null)
  }

  return (
    <motion.div
      ref={filterRef}
      className={cn("w-full bg-white py-4 px-4 sm:px-6 shadow-sm z-50", "rounded-lg")}
      initial={{ y: -10, opacity: 0 }}
      animate={{
        y: 0,
        opacity: 1,
        boxShadow: "0 2px 8px rgba(0, 0, 0, 0.05)",
      }}
      transition={{
        duration: 0.3,
        ease: "easeOut",
      }}
    >
      <div className="max-w-6xl mx-auto">
        <div className="flex flex-wrap items-center justify-between gap-3">
          <div className="flex flex-wrap items-center gap-0">
            <FilterButton
              icon={<Calendar className="h-4 w-4" />}
              label="Datas disponíveis"
              isActive={activeFilter === "dates"}
              onClick={() => toggleFilter("dates")}
              badgeCount={dateFilter || timeFilter ? 1 : 0}
            >
              <DatesFilterContent
                selectedDate={dateFilter}
                selectedTime={timeFilter}
                onDateSelect={handleDateSelect}
                onTimeSelect={handleTimeSelect}
              />
            </FilterButton>

            <FilterButton
              icon={<Shield className="h-4 w-4" />}
              label="Planos de saúde"
              isActive={activeFilter === "plans"}
              onClick={() => toggleFilter("plans")}
              badgeCount={plansFilter.length}
            >
              <PlansFilterContent selectedPlans={plansFilter} onPlanSelect={handlePlanSelect} />
            </FilterButton>

            <FilterButton
              icon={<Filter className="h-4 w-4" />}
              label="Mais filtros"
              isActive={activeFilter === "more"}
              onClick={() => toggleFilter("more")}
              badgeCount={[specialtyFilter, ratingFilter > 0, consultType].filter(Boolean).length}
            >
              <MoreFiltersContent
                selectedSpecialty={specialtyFilter}
                selectedRating={ratingFilter}
                selectedConsultType={consultType}
                onSpecialtySelect={handleSpecialtySelect}
                onRatingSelect={handleRatingSelect}
                onConsultTypeSelect={handleConsultTypeSelect}
              />
            </FilterButton>
          </div>

          <div className="flex items-center gap-3">
            <AnimatePresence>
              {activeFiltersCount > 0 && (
                <motion.div
                  initial={{ opacity: 0, x: 20 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, x: 20 }}
                  transition={{ duration: 0.2 }}
                >
                  <Button
                    variant="ghost"
                    size="sm"
                    onClick={clearAllFilters}
                    className="text-sm text-gray-500 hover:text-gray-700 group"
                  >
                    <span>Limpar filtros</span>
                    <motion.div className="inline-flex ml-1" whileHover={{ rotate: 90 }} transition={{ duration: 0.2 }}>
                      <X className="h-3 w-3 group-hover:text-primary" />
                    </motion.div>
                  </Button>
                </motion.div>
              )}
            </AnimatePresence>

            <motion.div whileHover={{ scale: 1.03 }} whileTap={{ scale: 0.97 }} transition={{ duration: 0.2 }}>
              <Button className="bg-primary hover:bg-primary/90 text-primary-foreground shadow-sm hover:shadow-md transition-all">
                <Search className="h-4 w-4 mr-2" />
                Buscar
                {activeFiltersCount > 0 && (
                  <motion.div
                    initial={{ scale: 0.5, opacity: 0 }}
                    animate={{ scale: 1, opacity: 1 }}
                    transition={{ type: "spring", stiffness: 500, damping: 15 }}
                  >
                    <Badge className="ml-2 bg-white/20 text-white">{activeFiltersCount}</Badge>
                  </motion.div>
                )}
              </Button>
            </motion.div>
          </div>
        </div>

        {/* Applied filters tags */}
        <AnimatePresence>
          {showAppliedFilters && activeFiltersCount > 0 && (
            <motion.div
              className="flex flex-wrap gap-2 mt-3"
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: "auto" }}
              exit={{ opacity: 0, height: 0 }}
              transition={{ duration: 0.3 }}
            >
              {dateFilter && (
                <AppliedFilterTag label={`Data: ${dateFilter}`} onRemove={() => updateFilters({ date: null })} />
              )}
              {timeFilter && (
                <AppliedFilterTag label={`Horário: ${timeFilter}`} onRemove={() => updateFilters({ time: null })} />
              )}
              {plansFilter.map((plan) => (
                <AppliedFilterTag key={plan} label={`Plano: ${plan}`} onRemove={() => handlePlanSelect(plan)} />
              ))}
              {specialtyFilter && (
                <AppliedFilterTag
                  label={`Especialidade: ${specialtyFilter}`}
                  onRemove={() => updateFilters({ specialty: null })}
                />
              )}
              {ratingFilter > 0 && (
                <AppliedFilterTag
                  label={`${ratingFilter}+ estrelas`}
                  onRemove={() => updateFilters({ rating: null })}
                />
              )}
              {consultType && (
                <AppliedFilterTag
                  label={`Consulta: ${consultType}`}
                  onRemove={() => updateFilters({ consultType: null })}
                />
              )}
            </motion.div>
          )}
        </AnimatePresence>

        {/* Loading indicator */}
        <AnimatePresence>
          {loading && (
            <motion.div
              className="w-full mt-2"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.2 }}
            >
              <div className="h-1 w-full bg-primary/10 overflow-hidden rounded-full">
                <motion.div
                  className="h-full bg-primary"
                  initial={{ x: "-100%" }}
                  animate={{ x: "100%" }}
                  transition={{
                    repeat: Number.POSITIVE_INFINITY,
                    duration: 1.5,
                    ease: "easeInOut",
                  }}
                />
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </motion.div>
  )
}

function AppliedFilterTag({ label, onRemove }) {
  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.8 }}
      animate={{ opacity: 1, scale: 1 }}
      exit={{ opacity: 0, scale: 0.8 }}
      transition={{ duration: 0.2 }}
      className="inline-flex items-center gap-1 px-2 py-1 rounded-full bg-primary/10 text-primary text-xs"
    >
      {label}
      <button onClick={onRemove} className="ml-1 rounded-full hover:bg-primary/20 p-0.5 transition-colors">
        <X className="h-3 w-3" />
      </button>
    </motion.div>
  )
}

function FilterButton({ icon, label, isActive, onClick, children, badgeCount = 0 }) {
  return (
    <Popover open={isActive}>
      <PopoverTrigger asChild>
        <motion.button
          onClick={onClick}
          className={cn(
            "flex items-center gap-2 px-4 py-2.5 rounded-full text-sm font-medium transition-all",
            isActive
              ? "bg-primary text-primary-foreground hover:bg-primary/90"
              : "border border-gray-200 hover:border-primary/50 hover:bg-primary/5 hover:text-primary",
            badgeCount > 0 && !isActive && "border-primary/50 text-primary",
          )}
          whileHover={{ scale: 1.02 }}
          whileTap={{ scale: 0.98 }}
          transition={{ duration: 0.2 }}
        >
          <div>{icon}</div>
          <span>{label}</span>
          {badgeCount > 0 && (
            <Badge className={cn("ml-1 text-xs", isActive ? "bg-white text-primary" : "bg-primary/10 text-primary")}>
              {badgeCount}
            </Badge>
          )}
          <motion.div animate={{ rotate: isActive ? 180 : 0 }} transition={{ duration: 0.3 }}>
            <ChevronDown className="h-4 w-4" />
          </motion.div>
        </motion.button>
      </PopoverTrigger>
      <PopoverContent className="w-80 p-4 shadow-lg border border-gray-200 rounded-xl" sideOffset={8}>
        <motion.div initial={{ opacity: 0, y: -10 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.2 }}>
          {children}
        </motion.div>
      </PopoverContent>
    </Popover>
  )
}

function DatesFilterContent({ selectedDate, selectedTime, onDateSelect, onTimeSelect }) {
  const dates = ["Hoje", "Amanhã", "Esta semana", "Próxima semana"]
  const times = ["Manhã", "Tarde", "Noite"]

  return (
    <div className="space-y-4">
      <div className="space-y-2">
        <Label className="text-sm font-medium text-gray-700">Próximos dias</Label>
        <div className="flex flex-wrap gap-2">
          {dates.map((day) => (
            <motion.div
              key={day}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              transition={{ duration: 0.2 }}
            >
              <Button
                variant={selectedDate === day ? "default" : "outline"}
                className={cn(
                  "text-xs rounded-full relative overflow-hidden",
                  selectedDate === day
                    ? "bg-primary text-primary-foreground hover:bg-primary/90"
                    : "hover:bg-primary/10 hover:text-primary hover:border-primary/50",
                )}
                onClick={() => onDateSelect(day)}
              >
                {selectedDate === day && (
                  <motion.span
                    className="absolute inset-0 bg-primary/20"
                    initial={{ scale: 0, borderRadius: "100%" }}
                    animate={{ scale: 1.5, borderRadius: "100%" }}
                    transition={{ duration: 0.4 }}
                  />
                )}
                <span className="relative z-10">{day}</span>
                {selectedDate === day && (
                  <motion.span
                    className="relative z-10 ml-1"
                    initial={{ opacity: 0, scale: 0 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ delay: 0.1 }}
                  >
                    <Check className="h-3 w-3" />
                  </motion.span>
                )}
              </Button>
            </motion.div>
          ))}
        </div>
      </div>
      <div className="space-y-2">
        <Label className="text-sm font-medium text-gray-700">Horários</Label>
        <div className="flex flex-wrap gap-2">
          {times.map((time) => (
            <motion.div
              key={time}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              transition={{ duration: 0.2 }}
            >
              <Button
                variant={selectedTime === time ? "default" : "outline"}
                className={cn(
                  "text-xs rounded-full relative overflow-hidden",
                  selectedTime === time
                    ? "bg-primary text-primary-foreground hover:bg-primary/90"
                    : "hover:bg-primary/10 hover:text-primary hover:border-primary/50",
                )}
                onClick={() => onTimeSelect(time)}
              >
                {selectedTime === time && (
                  <motion.span
                    className="absolute inset-0 bg-primary/20"
                    initial={{ scale: 0, borderRadius: "100%" }}
                    animate={{ scale: 1.5, borderRadius: "100%" }}
                    transition={{ duration: 0.4 }}
                  />
                )}
                <span className="relative z-10">{time}</span>
                {selectedTime === time && (
                  <motion.span
                    className="relative z-10 ml-1"
                    initial={{ opacity: 0, scale: 0 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ delay: 0.1 }}
                  >
                    <Check className="h-3 w-3" />
                  </motion.span>
                )}
              </Button>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  )
}

function PlansFilterContent({ selectedPlans, onPlanSelect }) {
  const plans = ["Unimed", "Amil", "Bradesco Saúde", "SulAmérica", "Particular"]
  const [searchTerm, setSearchTerm] = useState("")
  const [isSearching, setIsSearching] = useState(false)

  const filteredPlans = plans.filter((plan) => plan.toLowerCase().includes(searchTerm.toLowerCase()))

  const handleSearchChange = (e) => {
    setIsSearching(true)
    setSearchTerm(e.target.value)
    setTimeout(() => setIsSearching(false), 300)
  }

  return (
    <div className="space-y-4">
      <div className="relative">
        <Input
          type="text"
          placeholder="Buscar plano de saúde..."
          className="pl-10 border-gray-200 focus:border-primary focus:ring-primary/20 transition-all"
          value={searchTerm}
          onChange={handleSearchChange}
        />
        <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
          <Search className="h-4 w-4 text-gray-400" />
        </div>
      </div>

      <div className="space-y-2 max-h-60 overflow-y-auto pr-1 custom-scrollbar">
        <AnimatePresence mode="wait">
          {isSearching ? (
            <motion.div
              key="searching"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="flex justify-center py-4"
            >
              <Loader2 className="h-5 w-5 text-primary animate-spin" />
            </motion.div>
          ) : filteredPlans.length > 0 ? (
            <motion.div
              key="results"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ staggerChildren: 0.05 }}
              className="space-y-2"
            >
              {filteredPlans.map((plan) => (
                <motion.div
                  key={plan}
                  className="flex items-center space-x-2 p-2 rounded-lg hover:bg-gray-50 transition-colors"
                  initial={{ opacity: 0, y: 5 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -5 }}
                  transition={{ duration: 0.2 }}
                  whileHover={{ x: 2 }}
                >
                  <Checkbox
                    id={`plan-${plan}`}
                    checked={selectedPlans.includes(plan)}
                    onCheckedChange={() => onPlanSelect(plan)}
                    className="data-[state=checked]:bg-primary data-[state=checked]:border-primary"
                  />
                  <Label htmlFor={`plan-${plan}`} className="cursor-pointer text-sm font-medium text-gray-700 flex-1">
                    {plan}
                  </Label>
                </motion.div>
              ))}
            </motion.div>
          ) : (
            <motion.div
              key="empty"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="text-center text-gray-500 py-6"
            >
              Nenhum plano encontrado
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </div>
  )
}

function MoreFiltersContent({
  selectedSpecialty,
  selectedRating,
  selectedConsultType,
  onSpecialtySelect,
  onRatingSelect,
  onConsultTypeSelect,
}) {
  const [hoveredRating, setHoveredRating] = useState(0)

  return (
    <div className="space-y-6">
      <div className="space-y-2">
        <Label htmlFor="specialty" className="text-sm font-medium text-gray-700">
          Especialidade
        </Label>
        <Select value={selectedSpecialty || "all"} onValueChange={onSpecialtySelect}>
          <SelectTrigger
            id="specialty"
            className="border-gray-200 focus:border-primary focus:ring-primary/20 transition-all"
          >
            <SelectValue placeholder="Todas as especialidades" />
          </SelectTrigger>
          <SelectContent className="border-gray-200">
            <SelectItem value="all">Todas as especialidades</SelectItem>
            <SelectItem value="psicologia">Psicologia</SelectItem>
            <SelectItem value="psiquiatria">Psiquiatria</SelectItem>
            <SelectItem value="neurologia">Neurologia</SelectItem>
          </SelectContent>
        </Select>
      </div>

      <div className="space-y-2">
        <Label className="text-sm font-medium text-gray-700">Avaliação mínima</Label>
        <div className="flex items-center gap-1">
          {[1, 2, 3, 4, 5].map((star) => (
            <motion.button
              key={star}
              whileHover={{ scale: 1.2 }}
              whileTap={{ scale: 0.9 }}
              transition={{ duration: 0.2 }}
              onClick={() => onRatingSelect(star)}
              onMouseEnter={() => setHoveredRating(star)}
              onMouseLeave={() => setHoveredRating(0)}
              className="p-1 focus:outline-none"
            >
              <Star
                className={cn(
                  "h-6 w-6 transition-all duration-200",
                  star <= selectedRating || (hoveredRating > 0 && star <= hoveredRating)
                    ? "fill-teal-300 text-teal-300"
                    : "text-gray-300 hover:text-teal-300",
                )}
              />
            </motion.button>
          ))}
          <span className="text-sm text-gray-500 ml-2">ou mais</span>
        </div>
      </div>

      <div className="space-y-2">
        <Label className="text-sm font-medium text-gray-700">Tipo de consulta</Label>
        <div className="flex gap-2">
          <motion.div whileHover={{ scale: 1.03 }} whileTap={{ scale: 0.97 }} transition={{ duration: 0.2 }}>
            <Button
              variant={selectedConsultType === "presencial" ? "default" : "outline"}
              className={cn(
                "rounded-full relative overflow-hidden",
                selectedConsultType === "presencial"
                  ? "bg-primary text-primary-foreground hover:bg-primary/90"
                  : "hover:bg-primary/10 hover:text-primary hover:border-primary/50",
              )}
              onClick={() => onConsultTypeSelect("presencial")}
            >
              {selectedConsultType === "presencial" && (
                <motion.span
                  className="absolute inset-0 bg-primary/20"
                  initial={{ scale: 0, borderRadius: "100%" }}
                  animate={{ scale: 1.5, borderRadius: "100%" }}
                  transition={{ duration: 0.4 }}
                />
              )}
              <span className="relative z-10">Presencial</span>
            </Button>
          </motion.div>
          <motion.div whileHover={{ scale: 1.03 }} whileTap={{ scale: 0.97 }} transition={{ duration: 0.2 }}>
            <Button
              variant={selectedConsultType === "online" ? "default" : "outline"}
              className={cn(
                "rounded-full relative overflow-hidden",
                selectedConsultType === "online"
                  ? "bg-primary text-primary-foreground hover:bg-primary/90"
                  : "hover:bg-primary/10 hover:text-primary hover:border-primary/50",
              )}
              onClick={() => onConsultTypeSelect("online")}
            >
              {selectedConsultType === "online" && (
                <motion.span
                  className="absolute inset-0 bg-primary/20"
                  initial={{ scale: 0, borderRadius: "100%" }}
                  animate={{ scale: 1.5, borderRadius: "100%" }}
                  transition={{ duration: 0.4 }}
                />
              )}
              <span className="relative z-10">Online</span>
            </Button>
          </motion.div>
        </div>
      </div>
    </div>
  )
}