export const menuList = [
  "Offices",
  "Shop/Showroom",
  " Warehouses",
  "Hotels/Guesthouse",
  " Catering",
  "Other",
];

export const location = [
  "Zvezdara",
  "Novi Beograd",
  "Savski venac",
  "Palilula",
  "Stari grad",
  "Vračar",
  "Mladenovac",
  "Voždovac",
  "Surčin",
];

interface Staff {
  user: string;
  name: string;
  language: string;
  email: string;
}

export const staff: Staff[] = [
  {
    user: "stefan",
    name: "Stefan Stefanovic",
    language: "English | Serbian",
    email: "stefan@gmail.com",
  },
  {
    user: "marko",
    name: "Marko Markovic",
    language: "English | Serbian | Spanish",
    email: "marko@gmail.com",
  },
  {
    user: "jovan",
    name: "Jovan Jovanovic",
    language: "English | Serbian | French",
    email: "jovan@gmail.com",
  },
];
