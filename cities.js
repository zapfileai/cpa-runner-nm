const newMexicoCities = [
  "Abiquiu", "Alamogordo", "Albuquerque", "Alcalde", "Alto",
  "Angel Fire", "Animas", "Anthony", "Arroyo Hondo", "Artesia",
  "Aztec", "Bayard", "Belen", "Bent", "Bernalillo",
  "Blanco", "Bloomfield", "Bosque", "Bosque Farms", "Capitan",
  "Carlsbad", "Carrizozo", "Causey", "Cedar Crest", "Cerrillos",
  "Church Rock", "Claunch", "Clayton", "Cloudcroft", "Clovis",
  "Cochiti Lake", "Continental Divide", "Corona", "Corrales", "Coyote",
  "Crownpoint", "Cuba", "Deming", "Dixon", "Dona Ana",
  "Edgewood", "El Prado", "Elephant Butte", "Elida", "Embudo",
  "Espanola", "Estancia", "Eunice", "Farmington", "Faywood",
  "Fence Lake", "Flora Vista", "Fort Bayard", "Fruitland", "Gallup",
  "Glorieta", "Grants", "Hagerman", "Hernandez", "Hobbs",
  "House", "Hurley", "Ilfeld", "Isleta", "Jemez Springs",
  "Kenna", "Kirtland", "La Luz", "Lake Arthur", "Las Cruces",
  "Las Vegas", "Los Alamos", "Los Lunas", "Los Ojos", "Loving",
  "Lovington", "Malaga", "Melrose", "Mesilla", "Mesilla Park",
];

const BATCH_SIZE = 5;

const batches = {};
for (let i = 0; i < newMexicoCities.length; i++) {
  const batchNum = Math.floor(i / BATCH_SIZE) + 1;
  if (!batches[batchNum]) batches[batchNum] = [];
  batches[batchNum].push(newMexicoCities[i]);
}

module.exports = { batches };
