import { useEffect, useState } from "react";
import stefan from "../assets/images/team/img1.jpeg";
import marko from "../assets/images/team/img2.jpeg";
import jovan from "../assets/images/team/img3.jpeg";

export function useImagePath(user: string): string {
  const [imagePath, setImagePath] = useState("");

  useEffect(() => {
    switch (user) {
      case "stefan":
        setImagePath(stefan);
        break;
      case "marko":
        setImagePath(marko);
        break;
      case "jovan":
        setImagePath(jovan);
        break;
      default:
        setImagePath("");
        break;
    }
  }, [user]);

  return imagePath;
}
