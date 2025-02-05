import DoctorProfileCard from "@/app/components/doctor-profile-card";

export default function ComponentTesting() {
    return (
      <div className="min-h-screen bg-gray-100 p-8">
        <h1 className="text-3xl font-bold text-center mb-8">Component Testing Page</h1>
        
        <section>
          <DoctorProfileCard />
        </section>

      </div>
    );
}
  