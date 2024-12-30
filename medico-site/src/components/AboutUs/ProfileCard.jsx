import {
  Card,
  CardHeader,
  CardBody,
  CardFooter,
  Typography,
  Tooltip,
} from "@material-tailwind/react";
import { color } from "framer-motion";

export function ProfileCard({ img, name, position }) {
  return (
    <Card className="w-40 sm:w-56 transform transition-transform duration-300 hover:translate-y-[-10px] mx-auto">
      <CardHeader floated={false} className="h-40 sm:h-52">
        <img
          src={img}
          alt="profile-picture"
          className="w-full h-full object-cover"
        />
      </CardHeader>
      <CardBody className="text-center">
        <Typography variant="h6" className="mb-2 sm:variant-h5">
          {name}
        </Typography>
        <Typography className="font-medium text-mainCyan">
          {position}
        </Typography>
      </CardBody>
    </Card>
  );
}
