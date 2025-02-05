'use client';

import React, { useState } from "react";
import { Card } from "@/app/components/ui/card";
import { Avatar, AvatarFallback, AvatarImage } from "@/app/components/ui/avatar";
import { Button } from "@/app/components/ui/button";
import { MapPin, ChevronRight, Stethoscope, BadgeCheck } from "lucide-react";
import Rating from "@mui/material/Rating";
import dayjs from "dayjs";
import "dayjs/locale/pt";

export default function DoctorProfileCard() {
  const [selectedTime, setSelectedTime] = useState(null);
  const [selectedDate, setSelectedDate] = useState(dayjs().format("D MMM"));

  const doctor = {
    name: "Dr. José Armindo da Silva Armindo",
    specialty: "Psicólogo",
    verified: true,
    reviews: 127,
    rating: 4.5,
    location: "Rua de Sá da Bandeira, 567, 1º andar, Porto",
    mapLink: "#",
    consultationType: "Primeira consulta Psicologia",
    price: "85 €",
    image: "/doctor-placeholder.jpg",
    availableSlots: {
      [dayjs().format("D MMM")]: ["-", "-", "-", "-"],
      [dayjs().add(1, "day").format("D MMM")]: ["14:30", "15:30", "16:30", "17:30"],
      [dayjs().add(2, "day").format("D MMM")]: ["13:00", "15:00", "16:00"],
      [dayjs().add(3, "day").format("D MMM")]: ["-", "-", "-", "-"],
    },
  };

  // Generate dates dynamically (Today + 3 days)
  const today = dayjs();
  const formattedDates = [
    { label: "Hoje", date: today.format("D MMM") },
    { label: "Amanhã", date: today.add(1, "day").format("D MMM") },
    { label: today.add(2, "day").format("ddd"), date: today.add(2, "day").format("D MMM") },
    { label: today.add(3, "day").format("ddd"), date: today.add(3, "day").format("D MMM") },
  ];

  return (
    <Card className="max-w-5xl mx-auto flex flex-col md:flex-row shadow-md border rounded-lg bg-white min-h-[250px] p-6">
      {/* Left Side - Doctor Info (50%) */}
      <div className="flex flex-col md:w-[50%]">
        <div className="flex items-center space-x-4 mb-2">
          <Avatar className="w-16 h-16 md:w-20 md:h-20">
            <AvatarImage src={doctor.image} alt={doctor.name} />
            <AvatarFallback>JA</AvatarFallback>
          </Avatar>
          <div>
            <div className="flex items-center space-x-2">
              <p className="text-lg md:text-lg font-bold">{doctor.name}</p>
              {doctor.verified && (
                <BadgeCheck className="w-4 h-4 text-green-600" />
              )}
            </div>
            <p className="text-gray-500">{doctor.specialty}</p>
            <div className="flex items-center space-x-2 mt-1">
              <Rating value={doctor.rating} precision={0.5} readOnly sx={{ color: "#16a34a" }} />
              <span className="text-sm text-gray-600">{doctor.reviews} opiniões</span>
            </div>
          </div>
        </div>

        {/* Location (Now More Spaced from Name) */}
        <div className="flex items-center text-gray-700 mt-5">
          <MapPin className="w-4 h-4 mr-2 align-middle" />
          <span>
            {doctor.location} •{" "}
            <a href={doctor.mapLink} className="text-blue-600 hover:underline">
              Mapa
            </a>
          </span>
        </div>

        {/* Consultation Type & Price (Closer to Location) */}
        <div className="flex justify-between items-center border-t mt-3 pt-3">
          <div className="flex items-center text-gray-600">
            <Stethoscope className="w-4 h-4 mr-2 align-middle" />
            <p className="text-sm">{doctor.consultationType}</p>
          </div>
          <p className="font-semibold text-lg">{doctor.price}</p>
        </div>
      </div>

      {/* Vertical Divider */}
      <div className="hidden md:block w-[1px] bg-gray-300 mx-6"></div>

      {/* Right Side - Available Slots (50%) */}
      <div className="flex flex-col md:w-[50%]">
        {/* Date Selection Row */}
        <div className="grid grid-cols-4 text-center text-gray-600 font-semibold text-sm mb-2">
          {formattedDates.map(({ label, date }, index) => (
            <div key={index} className="flex flex-col">
              <span className="text-black">{label}</span>
              <span className="text-xs text-gray-500">{date}</span>
            </div>
          ))}
        </div>

        {/* Time Slots (Vertical, Under Each Date) */}
        <div className="grid grid-cols-4 gap-2 text-center">
          {formattedDates.map(({ date }, index) => {
            const slots = doctor.availableSlots[date] || ["-", "-", "-", "-"];

            return (
              <div key={index} className="flex flex-col items-center space-y-1">
                {slots.map((time, i) =>
                  time !== "-" ? (
                    <Button
                      key={i}
                      variant={selectedTime === time ? "default" : "outline"}
                      onClick={() => setSelectedTime(time)}
                      className={`w-full px-3 py-1 text-sm ${
                        selectedTime === time
                          ? "bg-blue-500 text-white"
                          : "text-blue-700"
                      }`}
                    >
                      {time}
                    </Button>
                  ) : (
                    <p key={i} className="text-gray-400 text-sm line-through">-</p>
                  )
                )}
              </div>
            );
          })}
        </div>

        {/* Pagination Button */}
        <div className="flex justify-end mt-4">
          <Button variant="ghost" className="hover:bg-gray-100 rounded-full p-1">
            <ChevronRight className="w-6 h-6" />
          </Button>
        </div>
      </div>
    </Card>
  );
}