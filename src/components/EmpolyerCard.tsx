import { Star, Bolt, MapPin } from "lucide-react";
import { Card, CardContent } from "../components/ui/card";
import Image from "next/image";

interface joblistings {
  company: string;
  location: string;
  rating: number;
  imgUrl?: string;
}

export default function EmployerCard({
  company,
  location,
  rating,
  imgUrl,
}: joblistings) {
  return (
    <Card className="flex w-full items-center border bg-white p-4 transition duration-300 hover:shadow-lg">
      <div className="flex flex-col items-center">
        <Image
          src={imgUrl ?? "/images/logo.png"}
          alt={company}
          width={60}
          height={60}
          className="rounded-md"
        />
      </div>
      <CardContent className="flex flex-col p-2">
        <div className="flex items-center gap-1">
          {Array.from({ length: rating }).map((_, i) => (
            <Star key={i} size={16} className="text-yellow-500" fill="currentColor" />
          ))}
          {Array.from({ length: 5 - rating }).map((_, i) => (
            <Star key={i + rating} size={16} className="text-gray-300" />
          ))}
        </div>
        <div className="mt-1 flex items-center gap-1">
          <h2 className="text-lg font-semibold">{company}</h2>
          <Bolt size={18} className="text-blue-500" />
        </div>
        <div className="mt-1 flex items-center text-sm text-gray-500">
          <MapPin size={14} />
          <span className="ml-1">{location}</span>
        </div>
      </CardContent>
    </Card>

  );
}
