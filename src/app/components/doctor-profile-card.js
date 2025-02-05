'use client';

import React, { useState } from "react";
import { Card, CardContent } from "@/app/components/ui/card";
import { Avatar, AvatarFallback, AvatarImage } from "@/app/components/ui/avatar";
import { Button } from "@/app/components/ui/button";
import { Tabs, TabsList, TabsTrigger } from "@/app/components/ui/tabs";
import { CheckCircle, MapPin, ChevronRight, Stethoscope } from "lucide-react";
import Rating from "@mui/material/Rating";
import { LocalizationProvider, DatePicker } from "@mui/x-date-pickers";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import dayjs from "dayjs";
import "dayjs/locale/pt";

export default function DoctorProfileCard() {
  const [selectedDate, setSelectedDate] = useState(dayjs());
  const [selectedTime, setSelectedTime] = useState(null);

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
      "6 Fev": ["14:30", "15:30"],
      "7 Fev": ["15:00"],
    },
  };

  // Get today's date and next three days
  const today = dayjs();
  const formattedDates = [
    { label: "Hoje", date: today },
    { label: "Amanhã", date: today.add(1, "day") },
    { label: today.add(2, "day").format("ddd"), date: today.add(2, "day") },
    { label: today.add(3, "day").format("ddd"), date: today.add(3, "day") },
  ];

  return (
    <Card className="max-w-5xl mx-auto flex flex-col md:flex-row p-4 shadow-md border rounded-lg bg-white">
      {/* Left Side - Doctor Info (65%) */}
      <div className="flex flex-col md:w-[50%] space-y-4 p-4">
        <div className="flex items-center space-x-4">
          <Avatar className="w-16 h-16 md:w-20 md:h-20">
            <AvatarImage src={doctor.image} alt={doctor.name} />
            <AvatarFallback>JA</AvatarFallback>
          </Avatar>
          <div>
            <p className="text-md md:text-xl font-bold">{doctor.name}</p>
            <p className="text-gray-500">{doctor.specialty}</p>
            {doctor.verified && (
              <div className="flex items-center text-green-600 text-sm">
                <CheckCircle className="w-4 h-4 mr-1" />
                Verificado
              </div>
            )}
          </div>
        </div>

        {/* Rating & Reviews */}
        <div className="flex items-center space-x-2">
          <Rating value={doctor.rating} precision={0.5} readOnly sx={{ color: "#16a34a" }} />
          <span className="text-sm text-gray-600">{doctor.reviews} opiniões</span>
        </div>

        {/* Location */}
        <div className="flex items-center text-gray-700">
          <MapPin className="w-5 h-5 mr-1" />
          <span>
            {doctor.location} •{" "}
            <a href={doctor.mapLink} className="text-blue-600 hover:underline">
              Mapa
            </a>
          </span>
        </div>

        {/* Consultation Type & Price */}
        <div className="flex justify-between items-center border-t pt-2">
          <div className="flex items-center text-gray-600">
            <Stethoscope className="w-5 h-5 mr-2" />
            <p className="text-sm">{doctor.consultationType}</p>
          </div>
          <p className="font-semibold text-lg">{doctor.price}</p>
        </div>
      </div>

      {/* Vertical Divider (Now Positioned Correctly) */}
      <div className="hidden md:block w-[1px] bg-gray-300 mx-6"></div>

      <div className="flex flex-col md:w-[50%] p-4">
        <h3 className="text-lg font-semibold mb-2">Selecione uma data</h3>
        <LocalizationProvider dateAdapter={AdapterDayjs} adapterLocale="pt">
          <DatePicker
            value={selectedDate}
            onChange={(newValue) => setSelectedDate(newValue)}
            format="D MMM"
            sx={{ width: "100%" }}
          />
        </LocalizationProvider>

        {/* Available Slots with Correct Date Format */}
        <h3 className="text-lg font-semibold mt-4">Horários Disponíveis</h3>
        <Tabs className="mt-2">
          <TabsList className="flex justify-start">
            {formattedDates.map(({ label, date }, index) => (
              <TabsTrigger
                key={index}
                value={date.format("D MMM")}
                className={`px-3 py-1 text-sm ${
                  selectedDate.isSame(date, "day") ? "bg-blue-500 text-white" : "bg-gray-100 text-gray-700"
                }`}
                onClick={() => setSelectedDate(date)}
              >
                {label}
              </TabsTrigger>
            ))}
          </TabsList>
        </Tabs>

        <div className="grid grid-cols-4 gap-2 mt-4">
          {doctor.availableSlots[selectedDate.format("D MMM")]
            ? doctor.availableSlots[selectedDate.format("D MMM")].map((time, index) => (
                <Button
                  key={index}
                  variant={selectedTime === time ? "default" : "outline"}
                  onClick={() => setSelectedTime(time)}
                  className={selectedTime === time ? "bg-blue-500 text-white" : "bg-blue-100 text-blue-700"}
                >
                  {time}
                </Button>
              ))
            : <p className="text-gray-500 col-span-4 text-center">Nenhum horário disponível</p>}
        </div>

        {/* Pagination */}
        <div className="flex justify-end mt-4">
          <Button variant="ghost" className="hover:bg-gray-100 rounded-full p-1">
            <ChevronRight className="w-6 h-6" />
          </Button>
        </div>
      </div>
    </Card>
  );
}