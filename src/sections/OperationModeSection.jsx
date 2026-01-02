import { useState } from "react";
import { Button } from "../components/ui/button";
import { Label } from "../components/ui/label";

export const OperationModeSection = () => {
  const [origin, setOrigin] = useState("");
  const [destination, setDestination] = useState("");
  const [weight, setWeight] = useState("");

  const handleCheckPrice = () => {
    if (!origin || !destination || !weight) {
      alert("Please fill all fields");
      return;
    }

    // This part for make changes with API later
    const estimatedPrice = Number(weight) * 10;

    alert(
      `Estimated price from ${origin} to ${destination} is $${estimatedPrice}`
    );
  };

  return (
    <section className="w-full flex justify-center px-4 sm:px-6 lg:px-8">
      <div className="w-full max-w-6xl bg-white rounded-2xl shadow-md p-4 sm:p-6 lg:p-8">
        <div className="flex flex-col lg:flex-row gap-4 lg:gap-6 items-stretch">
          
          {/* Origin */}
          <div className="flex flex-col w-full">
            <Label className="mb-1 text-sm text-gray-600">Origin</Label>
            <input
              type="text"
              placeholder="Enter location"
              value={origin}
              onChange={(e) => setOrigin(e.target.value)}
              className="w-full h-12 px-4 border rounded-lg focus:outline-none focus:ring-2 focus:ring-simblue"
            />
          </div>

          {/* Destination */}
          <div className="flex flex-col w-full">
            <Label className="mb-1 text-sm text-gray-600">Destination</Label>
            <input
              type="text"
              placeholder="Enter location"
              value={destination}
              onChange={(e) => setDestination(e.target.value)}
              className="w-full h-12 px-4 border rounded-lg focus:outline-none focus:ring-2 focus:ring-simblue"
            />
          </div>

          {/* Weight */}
          <div className="flex flex-col w-full">
            <Label className="mb-1 text-sm text-gray-600">Weight (kg)</Label>
            <input
              type="number"
              placeholder="Weight"
              value={weight}
              onChange={(e) => setWeight(e.target.value)}
              className="w-full h-12 px-4 border rounded-lg focus:outline-none focus:ring-2 focus:ring-simblue"
            />
          </div>

          {/* Button */}
          <div className="flex items-end w-full lg:w-auto">
            <Button
              onClick={handleCheckPrice}
              className="w-full lg:w-[200px] h-12 bg-simblue hover:bg-simblue/90 text-white font-bold rounded-lg"
            >
              Check Price
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};
