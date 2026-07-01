const newMexicoCities = [
  "Monument", "Mora", "Moriarty", "Mountainair", "Mule Creek",
  "Nogal", "Pecos", "Pena Blanca", "Penasco", "Peralta",
  "Petaca", "Placitas", "Playas", "Portales", "Questa",
  "Ranchos De Taos", "Raton", "Red River", "Rio Rancho", "Roswell",
  "Ruidoso", "Salem", "Sandia Park", "Santa Cruz", "Santa Fe",
  "Santa Teresa", "Sapello", "Sheep Springs", "Shiprock", "Silver City",
  "Socorro", "Springer", "Stanley", "Taos", "Tatum",
  "Tesuque", "Texico", "Tijeras", "Tinnie", "Tome",
  "Truth Or Consequences", "Tucumcari", "Vado", "Velarde", "Villanueva",
];

const BATCH_SIZE = 5;

const batches = {};
for (let i = 0; i < newMexicoCities.length; i++) {
  const batchNum = Math.floor(i / BATCH_SIZE) + 1;
  if (!batches[batchNum]) batches[batchNum] = [];
  batches[batchNum].push(newMexicoCities[i]);
}

module.exports = { batches };
