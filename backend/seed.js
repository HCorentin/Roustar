import dotenv from 'dotenv';
import connectDB from './config/db.js';
import Lieu from './models/Lieu.js';

dotenv.config();
await connectDB();

const lieux = [
  { name: "Sifters Records", city: "Manchester", lat: 53.42138112101502, lng: -2.216884375490097, artist: "Oasis", description: "'Mister Sifters sold me songs when I was just sixteen, now he stops at traffic lights, but only when they're green.'", image: "/images/siftersrecords.jpg" },
  { name: "Fog Lane Park", city: "Manchester", lat: 53.423908950139946, lng: -2.222333587131816, artist: "Oasis", description: "Fog Lane Park était l'endroit où les Gallagher jouaient au football quand ils étaient enfants. Il apparaît aussi dans le clip de 'Shakermaker'.", image: "/images/foglane.webp" },
  { name: "Bonehead's house", city: "Manchester", lat: 53.42496985045789, lng: -2.2438099194437364, artist: "Oasis", description: "C'est là que la pochette emblématique de l'album Definitely Maybe a été prise.", image: "/images/DM.jpg" },

  { name: "Cavern Club", city: "Liverpool", lat: 53.40643946534472, lng: -2.987960637020384, artist: "The Beatles", description: "Le club où les Beatles ont donné de nombreux concerts au début de leur carrière et ont commencé à se faire connaître.", image: "/images/cavernclub.webp" },
  { name: "Penny Lane", city: "Liverpool", lat: 53.38684287557945, lng: -2.9193638239959556, artist: "The Beatles", description: "Rendue célèbre par la chanson 'Penny Lane', cette rue symbolise l'enfance et l'inspiration des Beatles.", image: "/images/pennylane.jpg" },
  { name: "Strawberry Field", city: "Liverpool", lat: 53.38051611525403, lng: -2.883224368723272, artist: "The Beatles", description: "L'orphelinat qui a inspiré la chanson 'Strawberry Fields Forever', lieu clé de l'enfance de John Lennon.", image: "/images/strawberry.jpg" },
];

const importData = async () => {
  try {
    await Lieu.deleteMany();
    await Lieu.insertMany(lieux);
    console.log("✅ Données importées ");
    process.exit();
  } catch (err) {
    console.error(err);
    process.exit(1);
  }
}

importData();
