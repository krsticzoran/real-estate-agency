import stefan from "../images/team/img1.jpeg";
import marko from "../images/team/img2.jpeg";
import jovan from "../images/team/img3.jpeg";

interface Staff {
  user: string;
  name: string;
  language: string;
  email: string;
  overview: string;
}

export const staff: Staff[] = [
  {
    user: "stefan",
    name: "Stefan Stefanovic",
    language: "English | Serbian",
    email: "stefan@gmail.com",
    overview:
      "A fully qualified lawyer, joining the company from his advisory role in the local construction industry, Stefan joined the company just before the Pandemic exploded and took advantage of the lul in the market. Finishing as one of the top agents in his first year, he went on to solidy his position as one of the top commercial letting specilaists in the city. The following year, he cemented his place as one of the top professionals in his field closing a record amount in a calendar year for the company.",
  },
  {
    user: "marko",
    name: "Marko Markovic",
    language: "English | Serbian | Spanish",
    email: "marko@gmail.com",
    overview:
      "Marko originally started his real estate journey working in residential letting but quickly and seemlessly made the transition to commercial real estate. With a huge knowledge of the local market, being consistently the top listing agent for the last four years. Marko has a name for being an agent with a great understanding of his clients needs. Over the years, he has closed a vast array of properties, mainly offices, catering establishments, retail outlets and even warehouses.",
  },
  {
    user: "jovan",
    name: "Jovan Jovanovic",
    language: "English | Serbian | French",
    email: "jovan@gmail.com",
    overview:
      "Jovan has made a name for himself over the last two years becoming an expert renting out Warehousing Space. His rentals span over a vast amount of industries, for example, industrial companies such as mechanics and woodworks, the warehousing for the marijuana industry, warehousing thats converted to office space and much more.",
  },
];

export function getImagePath(user: string): string {
  switch (user) {
    case "stefan":
      return stefan;
    case "marko":
      return marko;
    case "jovan":
      return jovan;
    default:
      return "";
  }
}
