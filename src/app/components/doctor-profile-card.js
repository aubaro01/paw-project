'use client';

import React, { useState } from "react";
import { Card } from "@/app/components/ui/card";
import { Avatar, AvatarFallback, AvatarImage } from "@/app/components/ui/avatar";
import { Button } from "@/app/components/ui/button";
import { MapPin, ChevronRight, ChevronLeft, ChevronDown, ChevronUp, Stethoscope, BadgeCheck } from "lucide-react";
import Rating from "@mui/material/Rating";
import dayjs from "dayjs";
import "dayjs/locale/pt";

export default function DoctorProfileCard() {
  // State to track the overall selected slot.
  // It is an object with properties "date" and "time", or null.
  const [selectedSlot, setSelectedSlot] = useState(null);
  const [currentPage, setCurrentPage] = useState(0);
  const [showMoreSlots, setShowMoreSlots] = useState(false);
  const pageSize = 4;
  // Default number of slots shown (before expanding)
  const defaultSlotsCount = 6;

  const doctor = {
    name: "Dr. José Armindo da Silva Armindo",
    specialty: "Psicólogo",
    verified: true,
    reviews: 127,
    rating: 4.5,
    city: "Porto",
    location: "Rua de Sá da Bandeira, 567, 1º andar",
    mapLink: "#",
    consultationType: "Primeira consulta Psicologia",
    price: "85 €",
    image: "/doctor-placeholder.jpg",
  };

  // Helper: Returns an array of slot objects.
  // Work hours: 09:00, 10:00, 11:00, 12:00, 14:00, 15:00, 16:00, 17:00, 18:00.
  // Lunch (13:00–14:00) is omitted.
  // For testing, mark 09:00, 11:00, 12:00, 16:00, and 17:00 as unavailable.
  // On Sundays, all slots are returned as unavailable (dash).
  function getAvailableSlots(dateObj) {
    const allSlots = ["09:00", "10:00", "11:00", "12:00", "14:00", "15:00", "16:00", "17:00", "18:00"];
    if (dateObj.day() === 0) {
      return allSlots.map(() => ({ time: "-", available: false }));
    }
    const notAvailable = ["09:00", "11:00", "12:00", "16:00", "17:00"];
    return allSlots.map(slot => ({
      time: slot,
      available: !notAvailable.includes(slot),
    }));
  }

  // Generate an array of dates (30 days starting from today)
  const totalDays = 30;
  const today = dayjs();
  const allDates = Array.from({ length: totalDays }, (_, i) => {
    const dateObj = today.add(i, "day");
    let label = "";
    if (i === 0) label = "Hoje";
    else if (i === 1) label = "Amanhã";
    else label = dateObj.format("ddd");
    return { label, formatted: dateObj.format("D MMM"), dateObj };
  });

  // Determine the current page's dates
  const paginatedDates = allDates.slice(currentPage * pageSize, (currentPage + 1) * pageSize);

  return (
    <Card className="max-w-4xl w-full mx-auto flex flex-col md:flex-row shadow-md border rounded-lg bg-white min-h-[300px] p-8">
      {/* Left Side – Doctor Info */}
      <div className="flex flex-col md:w-1/2">
        {/* Header Row: Avatar and Doctor Details */}
        <div className="flex items-center space-x-4 mb-2">
          <Avatar className="w-12 h-12 md:w-16 md:h-16">
            <AvatarImage src={doctor.image} alt={doctor.name} />
            <AvatarFallback>JA</AvatarFallback>
          </Avatar>
          <div>
            <div className="flex items-center space-x-2">
              <p className="text-lg font-bold">{doctor.name}</p>
              {doctor.verified && <BadgeCheck className="w-4 h-4 text-green-600" />}
            </div>
            <p className="text-gray-500">{doctor.specialty}</p>
            <div className="flex items-center space-x-2 mt-1">
              <Rating value={doctor.rating} precision={0.5} readOnly sx={{ color: "#16a34a" }} />
              <span className="text-sm text-gray-600">{doctor.reviews} opiniões</span>
            </div>
          </div>
        </div>
        {/* Location */}
        <div className="mt-5">
          <div className="flex items-center text-gray-700">
            <MapPin className="w-4 h-4 mr-2" />
            <span>
              {doctor.city} • <a href={doctor.mapLink} className="text-blue-600 hover:underline">Mapa</a>
            </span>
          </div>
          <div className="ml-6 text-gray-500">{doctor.location}</div>
        </div>
        {/* Consultation Type & Price */}
        <div className="flex justify-between items-center border-t mt-3 pt-3">
          <div className="flex items-center text-gray-600">
            <Stethoscope className="w-4 h-4 mr-2" />
            <p className="text-sm">{doctor.consultationType}</p>
          </div>
          <p className="font-semibold text-lg">{doctor.price}</p>
        </div>
      </div>

      {/* Vertical Divider (visible on md+) */}
      <div className="hidden md:block w-px bg-gray-300 mx-6" />

      {/* Right Side – Available Slots */}
      <div className="flex flex-col md:w-1/2 mt-6 md:mt-0">
        {/* Date Selection Row with Pagination Arrows */}
        <div className="flex items-center justify-between mb-2">
          {currentPage > 0 ? (
            <Button variant="ghost" onClick={() => setCurrentPage(currentPage - 1)} className="p-1">
              <ChevronLeft className="w-6 h-6" />
            </Button>
          ) : (
            <div className="w-6" />
          )}
          <div className="grid grid-cols-4 flex-grow h-12 text-center text-gray-600 font-semibold text-sm">
            {paginatedDates.map(({ label, formatted, dateObj }, index) => {
              // Use a unique key (full date string)
              const dateKey = dateObj.format("YYYY-MM-DD");
              return (
                <div key={dateKey} className="flex flex-col justify-center">
                  <span className="text-black">{label}</span>
                  <span className="text-xs text-gray-500">{formatted}</span>
                </div>
              );
            })}
          </div>
          {(currentPage + 1) * pageSize < allDates.length ? (
            <Button variant="ghost" onClick={() => setCurrentPage(currentPage + 1)} className="p-1">
              <ChevronRight className="w-6 h-6" />
            </Button>
          ) : (
            <div className="w-6" />
          )}
        </div>
        {/* Time Slots Grid Wrapper (smaller width) */}
        <div className="mx-7">
          <div className="grid grid-cols-4 gap-1 text-center">
            {paginatedDates.map(({ formatted, dateObj }, index) => {
              const dateKey = dateObj.format("YYYY-MM-DD");
              const slots = getAvailableSlots(dateObj);
              const displayedSlots = showMoreSlots ? slots : slots.slice(0, defaultSlotsCount);
              return (
                <div key={dateKey} className="flex flex-col items-center space-y-1">
                  {displayedSlots.map((slot, i) =>
                    slot.available ? (
                      <Button
                        key={i}
                        variant={selectedSlot && selectedSlot.date === dateKey && selectedSlot.time === slot.time ? "default" : "outline"}
                        onClick={() => setSelectedSlot({ date: dateKey, time: slot.time })}
                        className={`px-4 py-1 text-sm ${
                          selectedSlot && selectedSlot.date === dateKey && selectedSlot.time === slot.time
                            ? "bg-blue-500 text-white"
                            : "bg-blue-100 text-blue-700"
                        }`}
                      >
                        {slot.time}
                      </Button>
                    ) : slot.time !== "-" ? (
                      <p
                        key={i}
                        className="text-gray-400 text-sm line-through min-h-[28px] flex items-center justify-center"
                      >
                        {slot.time}
                      </p>
                    ) : (
                      <p
                        key={i}
                        className="text-gray-400 text-xs min-h-[28px] flex items-center justify-center"
                      >
                        {slot.time}
                      </p>
                    )
                  )}
                </div>
              );
            })}
          </div>
        </div>
        {/* "Mostrar mais horários" / "Ocultar horários" Link */}
        <div className="mt-2 text-center">
          <Button variant="link" onClick={() => setShowMoreSlots(!showMoreSlots)} className="text-blue-600 hover:underline">
            {showMoreSlots ? "Ocultar horários" : "Mostrar mais horários"}{" "}
            {showMoreSlots ? <ChevronUp className="w-4 h-4 inline" /> : <ChevronDown className="w-4 h-4 inline" />}
          </Button>
        </div>
      </div>
    </Card>
  );
}