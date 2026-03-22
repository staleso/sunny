// ========== Norwegian Electric Car Database ==========
// Prices in NOK (approximate Norwegian market prices 2025/2026)
// Range: WLTP km | 0-100 km/h times | Power in hp
const CARS = [
    // ===== BMW =====
    {
        id: 1, make: "BMW", model: "iX1 xDrive30", year: 2025, price: 529900,
        type: "suv", hp: 313, kwh: 64.7, zeroToHundred: 5.6, seats: 5,
        drivetrain: "AWD", battery: "64.7 kWh", range: 440,
        length: 4500, width: 1845, height: 1616, weight: 2060,
        emoji: "⚡", color: "#1a1a2e", segment: "Compact SUV"
    },
    {
        id: 2, make: "BMW", model: "iX3", year: 2025, price: 599900,
        type: "suv", hp: 286, kwh: 80, zeroToHundred: 6.8, seats: 5,
        drivetrain: "RWD", battery: "80 kWh", range: 460,
        length: 4734, width: 1891, height: 1668, weight: 2185,
        emoji: "⚡", color: "#16213e", segment: "Mid-size SUV"
    },
    {
        id: 72, make: "BMW", model: "iX3 50 xDrive Fully Charged", year: 2026, price: 679900,
        type: "suv", hp: 463, kwh: 108, zeroToHundred: 4.9, seats: 5,
        drivetrain: "AWD", battery: "108 kWh", range: 805,
        length: 4734, width: 1920, height: 1660, weight: 2310,
        emoji: "⚡", color: "#16213e", segment: "Mid-size SUV"
    },
    {
        id: 73, make: "BMW", model: "iX3 50 xDrive M Sport", year: 2026, price: 749900,
        type: "suv", hp: 463, kwh: 108, zeroToHundred: 4.9, seats: 5,
        drivetrain: "AWD", battery: "108 kWh", range: 805,
        length: 4734, width: 1920, height: 1660, weight: 2310,
        emoji: "⚡", color: "#16213e", segment: "Mid-size SUV"
    },
    {
        id: 74, make: "BMW", model: "iX3 50 xDrive M Sport Pro", year: 2026, price: 892000,
        type: "suv", hp: 463, kwh: 108, zeroToHundred: 4.9, seats: 5,
        drivetrain: "AWD", battery: "108 kWh", range: 805,
        length: 4734, width: 1920, height: 1660, weight: 2310,
        emoji: "⚡", color: "#16213e", segment: "Mid-size SUV"
    },
    {
        id: 100, make: "BMW", model: "i3 50 xDrive Sedan", year: 2026, price: 579900,
        type: "sedan", hp: 469, kwh: 108, zeroToHundred: 4.0, seats: 5,
        drivetrain: "AWD", battery: "108 kWh", range: 900,
        length: 4760, width: 1865, height: 1480, weight: 2150,
        emoji: "⚡", color: "#2e1a1a", segment: "Mid-size Sedan"
    },
    {
        id: 3, make: "BMW", model: "iX xDrive40", year: 2025, price: 799900,
        type: "suv", hp: 326, kwh: 76.6, zeroToHundred: 6.1, seats: 5,
        drivetrain: "AWD", battery: "76.6 kWh", range: 425,
        length: 4953, width: 1967, height: 1696, weight: 2440,
        emoji: "⚡", color: "#1b2838", segment: "Large SUV"
    },
    {
        id: 4, make: "BMW", model: "iX xDrive50", year: 2025, price: 999900,
        type: "suv", hp: 523, kwh: 111.5, zeroToHundred: 4.6, seats: 5,
        drivetrain: "AWD", battery: "111.5 kWh", range: 630,
        length: 4953, width: 1967, height: 1696, weight: 2510,
        emoji: "⚡", color: "#1a2e2e", segment: "Large SUV"
    },
    {
        id: 5, make: "BMW", model: "i4 eDrive40", year: 2025, price: 569900,
        type: "sedan", hp: 340, kwh: 83.9, zeroToHundred: 5.7, seats: 5,
        drivetrain: "RWD", battery: "83.9 kWh", range: 590,
        length: 4783, width: 1852, height: 1448, weight: 2125,
        emoji: "⚡", color: "#1a1a2e", segment: "Mid-size Sedan"
    },
    {
        id: 6, make: "BMW", model: "i4 M50", year: 2025, price: 729900,
        type: "sedan", hp: 544, kwh: 83.9, zeroToHundred: 3.9, seats: 5,
        drivetrain: "AWD", battery: "83.9 kWh", range: 520,
        length: 4783, width: 1852, height: 1448, weight: 2215,
        emoji: "⚡", color: "#2d1b2e", segment: "Performance Sedan"
    },
    {
        id: 71, make: "BMW", model: "i4 M60", year: 2025, price: 849900,
        type: "sedan", hp: 619, kwh: 83.9, zeroToHundred: 3.5, seats: 5,
        drivetrain: "AWD", battery: "83.9 kWh", range: 490,
        length: 4783, width: 1852, height: 1448, weight: 2275,
        emoji: "⚡", color: "#2d1b2e", segment: "Performance Sedan"
    },
    {
        id: 7, make: "BMW", model: "i5 eDrive40", year: 2025, price: 659900,
        type: "sedan", hp: 340, kwh: 83.9, zeroToHundred: 6.0, seats: 5,
        drivetrain: "RWD", battery: "83.9 kWh", range: 580,
        length: 5060, width: 1900, height: 1505, weight: 2210,
        emoji: "⚡", color: "#1b2e1b", segment: "Executive Sedan"
    },
    {
        id: 8, make: "BMW", model: "i7 xDrive60", year: 2025, price: 1299900,
        type: "sedan", hp: 544, kwh: 101.7, zeroToHundred: 4.7, seats: 5,
        drivetrain: "AWD", battery: "101.7 kWh", range: 590,
        length: 5391, width: 1950, height: 1544, weight: 2640,
        emoji: "⚡", color: "#2e2e1a", segment: "Luxury Sedan"
    },

    // ===== AUDI =====
    {
        id: 9, make: "Audi", model: "Q4 e-tron 40", year: 2025, price: 479900,
        type: "suv", hp: 204, kwh: 77, zeroToHundred: 8.5, seats: 5,
        drivetrain: "RWD", battery: "77 kWh", range: 520,
        length: 4588, width: 1865, height: 1632, weight: 2060,
        emoji: "⚡", color: "#1a1a2e", segment: "Compact SUV"
    },
    {
        id: 10, make: "Audi", model: "Q4 e-tron 50 quattro", year: 2025, price: 559900,
        type: "suv", hp: 299, kwh: 77, zeroToHundred: 6.2, seats: 5,
        drivetrain: "AWD", battery: "77 kWh", range: 490,
        length: 4588, width: 1865, height: 1632, weight: 2135,
        emoji: "⚡", color: "#16213e", segment: "Compact SUV"
    },
    {
        id: 11, make: "Audi", model: "Q6 e-tron quattro", year: 2025, price: 699900,
        type: "suv", hp: 387, kwh: 100, zeroToHundred: 5.9, seats: 5,
        drivetrain: "AWD", battery: "100 kWh", range: 625,
        length: 4771, width: 1939, height: 1648, weight: 2325,
        emoji: "⚡", color: "#1b2838", segment: "Mid-size SUV"
    },
    {
        id: 12, make: "Audi", model: "Q8 e-tron 55 quattro", year: 2025, price: 849900,
        type: "suv", hp: 408, kwh: 114, zeroToHundred: 5.6, seats: 5,
        drivetrain: "AWD", battery: "114 kWh", range: 580,
        length: 4915, width: 1937, height: 1633, weight: 2595,
        emoji: "⚡", color: "#1a2e2e", segment: "Large SUV"
    },
    {
        id: 13, make: "Audi", model: "e-tron GT quattro", year: 2025, price: 1099900,
        type: "sedan", hp: 530, kwh: 97, zeroToHundred: 3.6, seats: 4,
        drivetrain: "AWD", battery: "97 kWh", range: 490,
        length: 4989, width: 1964, height: 1414, weight: 2340,
        emoji: "⚡", color: "#2d1b2e", segment: "Performance Sedan"
    },
    {
        id: 14, make: "Audi", model: "A6 e-tron", year: 2026, price: 649900,
        type: "sedan", hp: 381, kwh: 100, zeroToHundred: 5.4, seats: 5,
        drivetrain: "AWD", battery: "100 kWh", range: 700,
        length: 4928, width: 1923, height: 1527, weight: 2270,
        emoji: "⚡", color: "#1b2e1b", segment: "Executive Sedan"
    },

    // ===== MERCEDES-BENZ =====
    {
        id: 15, make: "Mercedes", model: "EQA 250+", year: 2025, price: 499900,
        type: "suv", hp: 190, kwh: 70.5, zeroToHundred: 8.6, seats: 5,
        drivetrain: "FWD", battery: "70.5 kWh", range: 528,
        length: 4463, width: 1834, height: 1620, weight: 2055,
        emoji: "⚡", color: "#1a1a2e", segment: "Compact SUV"
    },
    {
        id: 16, make: "Mercedes", model: "EQB 250+", year: 2025, price: 539900,
        type: "suv", hp: 190, kwh: 70.5, zeroToHundred: 8.9, seats: 7,
        drivetrain: "FWD", battery: "70.5 kWh", range: 505,
        length: 4684, width: 1834, height: 1701, weight: 2175,
        emoji: "⚡", color: "#16213e", segment: "Compact SUV"
    },
    {
        id: 17, make: "Mercedes", model: "EQC 400 4MATIC", year: 2025, price: 649900,
        type: "suv", hp: 408, kwh: 80, zeroToHundred: 5.1, seats: 5,
        drivetrain: "AWD", battery: "80 kWh", range: 430,
        length: 4762, width: 1884, height: 1624, weight: 2420,
        emoji: "⚡", color: "#1b2838", segment: "Mid-size SUV"
    },
    {
        id: 75, make: "Mercedes", model: "GLC 400 4MATIC", year: 2026, price: 699900,
        type: "suv", hp: 483, kwh: 94.4, zeroToHundred: 4.3, seats: 5,
        drivetrain: "AWD", battery: "94.4 kWh", range: 702,
        length: 4845, width: 1913, height: 1644, weight: 2430,
        emoji: "⚡", color: "#2e1a1a", segment: "Mid-size SUV"
    },
    {
        id: 18, make: "Mercedes", model: "EQE 350+", year: 2025, price: 749900,
        type: "sedan", hp: 292, kwh: 96, zeroToHundred: 6.4, seats: 5,
        drivetrain: "RWD", battery: "96 kWh", range: 620,
        length: 4946, width: 1906, height: 1503, weight: 2355,
        emoji: "⚡", color: "#1a2e2e", segment: "Executive Sedan"
    },
    {
        id: 19, make: "Mercedes", model: "EQE SUV 350+", year: 2025, price: 819900,
        type: "suv", hp: 292, kwh: 96, zeroToHundred: 6.6, seats: 5,
        drivetrain: "RWD", battery: "96 kWh", range: 590,
        length: 4863, width: 1940, height: 1686, weight: 2510,
        emoji: "⚡", color: "#2d1b2e", segment: "Large SUV"
    },
    {
        id: 20, make: "Mercedes", model: "EQS 450+", year: 2025, price: 1099900,
        type: "sedan", hp: 360, kwh: 118, zeroToHundred: 5.8, seats: 5,
        drivetrain: "RWD", battery: "118 kWh", range: 770,
        length: 5216, width: 1926, height: 1512, weight: 2480,
        emoji: "⚡", color: "#1b2e1b", segment: "Luxury Sedan"
    },
    {
        id: 21, make: "Mercedes", model: "EQS SUV 450+", year: 2025, price: 1199900,
        type: "suv", hp: 360, kwh: 118, zeroToHundred: 6.0, seats: 7,
        drivetrain: "RWD", battery: "118 kWh", range: 670,
        length: 5125, width: 1959, height: 1718, weight: 2710,
        emoji: "⚡", color: "#2e2e1a", segment: "Luxury SUV"
    },

    // ===== PORSCHE =====
    {
        id: 22, make: "Porsche", model: "Taycan", year: 2025, price: 899900,
        type: "sedan", hp: 408, kwh: 93.4, zeroToHundred: 4.8, seats: 4,
        drivetrain: "RWD", battery: "93.4 kWh", range: 590,
        length: 4963, width: 1966, height: 1381, weight: 2130,
        emoji: "⚡", color: "#2e1a1a", segment: "Performance Sedan"
    },
    {
        id: 23, make: "Porsche", model: "Taycan 4S", year: 2025, price: 1049900,
        type: "sedan", hp: 530, kwh: 93.4, zeroToHundred: 3.7, seats: 4,
        drivetrain: "AWD", battery: "93.4 kWh", range: 560,
        length: 4963, width: 1966, height: 1381, weight: 2215,
        emoji: "⚡", color: "#2d1b2e", segment: "Performance Sedan"
    },
    {
        id: 24, make: "Porsche", model: "Taycan Turbo", year: 2025, price: 1449900,
        type: "sedan", hp: 680, kwh: 97, zeroToHundred: 3.2, seats: 4,
        drivetrain: "AWD", battery: "97 kWh", range: 550,
        length: 4963, width: 1966, height: 1381, weight: 2290,
        emoji: "⚡", color: "#1a1a2e", segment: "Performance Sedan"
    },
    {
        id: 78, make: "Porsche", model: "Taycan Turbo S", year: 2025, price: 1749900,
        type: "sedan", hp: 775, kwh: 97, zeroToHundred: 2.4, seats: 4,
        drivetrain: "AWD", battery: "97 kWh", range: 630,
        length: 4963, width: 1966, height: 1381, weight: 2345,
        emoji: "⚡", color: "#2e1a1a", segment: "Performance Sedan"
    },
    {
        id: 79, make: "Porsche", model: "Taycan 4 Cross Turismo", year: 2025, price: 1049900,
        type: "wagon", hp: 408, kwh: 93.4, zeroToHundred: 4.7, seats: 4,
        drivetrain: "AWD", battery: "93.4 kWh", range: 490,
        length: 4974, width: 1967, height: 1395, weight: 2295,
        emoji: "⚡", color: "#1b2e1b", segment: "Performance Wagon"
    },
    {
        id: 80, make: "Porsche", model: "Taycan Turbo S Cross Turismo", year: 2025, price: 1799900,
        type: "wagon", hp: 775, kwh: 97, zeroToHundred: 2.5, seats: 4,
        drivetrain: "AWD", battery: "97 kWh", range: 500,
        length: 4974, width: 1967, height: 1395, weight: 2370,
        emoji: "⚡", color: "#2e2e1a", segment: "Performance Wagon"
    },
    {
        id: 81, make: "Porsche", model: "Taycan GTS Sport Turismo", year: 2025, price: 1596300,
        type: "wagon", hp: 690, kwh: 97, zeroToHundred: 3.1, seats: 4,
        drivetrain: "AWD", battery: "97 kWh", range: 570,
        length: 4963, width: 1966, height: 1395, weight: 2310,
        emoji: "⚡", color: "#16213e", segment: "Performance Wagon"
    },
    {
        id: 82, make: "Porsche", model: "Taycan Turbo S Sport Turismo", year: 2025, price: 1749900,
        type: "wagon", hp: 775, kwh: 97, zeroToHundred: 2.4, seats: 4,
        drivetrain: "AWD", battery: "97 kWh", range: 600,
        length: 4963, width: 1966, height: 1395, weight: 2350,
        emoji: "⚡", color: "#2d1b2e", segment: "Performance Wagon"
    },
    {
        id: 25, make: "Porsche", model: "Macan Electric", year: 2025, price: 849900,
        type: "suv", hp: 408, kwh: 100, zeroToHundred: 5.2, seats: 5,
        drivetrain: "AWD", battery: "100 kWh", range: 613,
        length: 4784, width: 1938, height: 1624, weight: 2405,
        emoji: "⚡", color: "#16213e", segment: "Mid-size SUV"
    },
    {
        id: 26, make: "Porsche", model: "Macan Electric 4S", year: 2025, price: 999900,
        type: "suv", hp: 516, kwh: 100, zeroToHundred: 4.1, seats: 5,
        drivetrain: "AWD", battery: "100 kWh", range: 590,
        length: 4784, width: 1938, height: 1624, weight: 2405,
        emoji: "⚡", color: "#1b2838", segment: "Performance SUV"
    },
    {
        id: 76, make: "Porsche", model: "Cayenne Electric", year: 2026, price: 1116400,
        type: "suv", hp: 408, kwh: 113, zeroToHundred: 4.5, seats: 5,
        drivetrain: "AWD", battery: "113 kWh", range: 643,
        length: 4985, width: 1980, height: 1674, weight: 2525,
        emoji: "⚡", color: "#2e2e1a", segment: "Large SUV"
    },
    {
        id: 77, make: "Porsche", model: "Cayenne Turbo Electric", year: 2026, price: 1767100,
        type: "suv", hp: 1156, kwh: 113, zeroToHundred: 2.5, seats: 5,
        drivetrain: "AWD", battery: "113 kWh", range: 600,
        length: 4985, width: 1980, height: 1674, weight: 2600,
        emoji: "⚡", color: "#1a1a2e", segment: "Performance SUV"
    },

    // ===== TESLA =====
    {
        id: 27, make: "Tesla", model: "Model 3 Long Range", year: 2025, price: 449900,
        type: "sedan", hp: 366, kwh: 75, zeroToHundred: 4.4, seats: 5,
        drivetrain: "AWD", battery: "75 kWh", range: 629,
        length: 4720, width: 1849, height: 1441, weight: 1830,
        emoji: "⚡", color: "#1a1a2e", segment: "Mid-size Sedan"
    },
    {
        id: 28, make: "Tesla", model: "Model 3 Performance", year: 2025, price: 529900,
        type: "sedan", hp: 460, kwh: 75, zeroToHundred: 3.1, seats: 5,
        drivetrain: "AWD", battery: "75 kWh", range: 528,
        length: 4720, width: 1849, height: 1441, weight: 1836,
        emoji: "⚡", color: "#2d1b2e", segment: "Performance Sedan"
    },
    {
        id: 29, make: "Tesla", model: "Model Y Long Range", year: 2025, price: 479900,
        type: "suv", hp: 366, kwh: 75, zeroToHundred: 5.0, seats: 5,
        drivetrain: "AWD", battery: "75 kWh", range: 533,
        length: 4751, width: 1921, height: 1624, weight: 1979,
        emoji: "⚡", color: "#16213e", segment: "Mid-size SUV"
    },
    {
        id: 30, make: "Tesla", model: "Model Y Performance", year: 2025, price: 559900,
        type: "suv", hp: 460, kwh: 75, zeroToHundred: 3.7, seats: 5,
        drivetrain: "AWD", battery: "75 kWh", range: 514,
        length: 4751, width: 1921, height: 1624, weight: 1979,
        emoji: "⚡", color: "#1b2838", segment: "Performance SUV"
    },
    {
        id: 31, make: "Tesla", model: "Model S Long Range", year: 2025, price: 899900,
        type: "sedan", hp: 670, kwh: 100, zeroToHundred: 3.2, seats: 5,
        drivetrain: "AWD", battery: "100 kWh", range: 634,
        length: 4970, width: 1964, height: 1445, weight: 2162,
        emoji: "⚡", color: "#1b2e1b", segment: "Luxury Sedan"
    },
    {
        id: 32, make: "Tesla", model: "Model X Long Range", year: 2025, price: 1049900,
        type: "suv", hp: 670, kwh: 100, zeroToHundred: 3.9, seats: 7,
        drivetrain: "AWD", battery: "100 kWh", range: 576,
        length: 5037, width: 1999, height: 1684, weight: 2352,
        emoji: "⚡", color: "#2e2e1a", segment: "Luxury SUV"
    },

    // ===== VOLKSWAGEN =====
    {
        id: 33, make: "Volkswagen", model: "ID.3 Pro S", year: 2025, price: 389900,
        type: "hatchback", hp: 204, kwh: 77, zeroToHundred: 7.9, seats: 5,
        drivetrain: "RWD", battery: "77 kWh", range: 560,
        length: 4261, width: 1809, height: 1568, weight: 1870,
        emoji: "⚡", color: "#1a1a2e", segment: "Compact"
    },
    {
        id: 34, make: "Volkswagen", model: "ID.4 Pro S", year: 2025, price: 469900,
        type: "suv", hp: 286, kwh: 77, zeroToHundred: 6.7, seats: 5,
        drivetrain: "RWD", battery: "77 kWh", range: 540,
        length: 4584, width: 1852, height: 1634, weight: 2124,
        emoji: "⚡", color: "#16213e", segment: "Compact SUV"
    },
    {
        id: 35, make: "Volkswagen", model: "ID.5 GTX", year: 2025, price: 549900,
        type: "suv", hp: 340, kwh: 77, zeroToHundred: 5.4, seats: 5,
        drivetrain: "AWD", battery: "77 kWh", range: 500,
        length: 4599, width: 1852, height: 1615, weight: 2173,
        emoji: "⚡", color: "#1b2838", segment: "Coupe SUV"
    },
    {
        id: 36, make: "Volkswagen", model: "ID.7 Pro S", year: 2025, price: 569900,
        type: "sedan", hp: 286, kwh: 86, zeroToHundred: 6.5, seats: 5,
        drivetrain: "RWD", battery: "86 kWh", range: 700,
        length: 4961, width: 1862, height: 1536, weight: 2160,
        emoji: "⚡", color: "#1a2e2e", segment: "Mid-size Sedan"
    },
    {
        id: 37, make: "Volkswagen", model: "ID. Buzz Pro", year: 2025, price: 599900,
        type: "van", hp: 286, kwh: 86, zeroToHundred: 7.9, seats: 7,
        drivetrain: "RWD", battery: "86 kWh", range: 460,
        length: 4712, width: 1985, height: 1927, weight: 2469,
        emoji: "⚡", color: "#2e2e1a", segment: "MPV"
    },

    // ===== VOLVO =====
    {
        id: 38, make: "Volvo", model: "EX30 Single Motor", year: 2025, price: 369900,
        type: "suv", hp: 272, kwh: 69, zeroToHundred: 5.3, seats: 5,
        drivetrain: "RWD", battery: "69 kWh", range: 476,
        length: 4233, width: 1837, height: 1550, weight: 1790,
        emoji: "⚡", color: "#1a1a2e", segment: "Small SUV"
    },
    {
        id: 39, make: "Volvo", model: "EX30 Twin Motor", year: 2025, price: 439900,
        type: "suv", hp: 428, kwh: 69, zeroToHundred: 3.6, seats: 5,
        drivetrain: "AWD", battery: "69 kWh", range: 450,
        length: 4233, width: 1837, height: 1550, weight: 1830,
        emoji: "⚡", color: "#16213e", segment: "Small SUV"
    },
    {
        id: 40, make: "Volvo", model: "EC40 Recharge", year: 2025, price: 499900,
        type: "suv", hp: 252, kwh: 78, zeroToHundred: 7.4, seats: 5,
        drivetrain: "RWD", battery: "78 kWh", range: 478,
        length: 4440, width: 1873, height: 1591, weight: 2110,
        emoji: "⚡", color: "#1b2838", segment: "Coupe SUV"
    },
    {
        id: 41, make: "Volvo", model: "EX40 Recharge", year: 2025, price: 479900,
        type: "suv", hp: 252, kwh: 78, zeroToHundred: 7.4, seats: 5,
        drivetrain: "RWD", battery: "78 kWh", range: 476,
        length: 4425, width: 1873, height: 1651, weight: 2100,
        emoji: "⚡", color: "#1a2e2e", segment: "Compact SUV"
    },
    {
        id: 42, make: "Volvo", model: "EX90 Twin Motor", year: 2025, price: 899900,
        type: "suv", hp: 408, kwh: 111, zeroToHundred: 5.9, seats: 7,
        drivetrain: "AWD", battery: "111 kWh", range: 580,
        length: 5037, width: 1964, height: 1744, weight: 2818,
        emoji: "⚡", color: "#1b2e1b", segment: "Large SUV"
    },

    // ===== HYUNDAI =====
    {
        id: 43, make: "Hyundai", model: "Kona Electric 65 kWh", year: 2025, price: 369900,
        type: "suv", hp: 218, kwh: 65.4, zeroToHundred: 7.8, seats: 5,
        drivetrain: "FWD", battery: "65.4 kWh", range: 490,
        length: 4355, width: 1825, height: 1575, weight: 1740,
        emoji: "⚡", color: "#1a1a2e", segment: "Small SUV"
    },
    {
        id: 44, make: "Hyundai", model: "IONIQ 5 Long Range AWD", year: 2025, price: 499900,
        type: "suv", hp: 325, kwh: 84, zeroToHundred: 5.1, seats: 5,
        drivetrain: "AWD", battery: "84 kWh", range: 507,
        length: 4635, width: 1890, height: 1605, weight: 2100,
        emoji: "⚡", color: "#16213e", segment: "Mid-size SUV"
    },
    {
        id: 45, make: "Hyundai", model: "IONIQ 6 Long Range AWD", year: 2025, price: 519900,
        type: "sedan", hp: 325, kwh: 77.4, zeroToHundred: 5.1, seats: 5,
        drivetrain: "AWD", battery: "77.4 kWh", range: 583,
        length: 4855, width: 1880, height: 1495, weight: 2060,
        emoji: "⚡", color: "#1b2838", segment: "Mid-size Sedan"
    },

    // ===== KIA =====
    {
        id: 46, make: "Kia", model: "Niro EV", year: 2025, price: 399900,
        type: "suv", hp: 204, kwh: 64.8, zeroToHundred: 7.8, seats: 5,
        drivetrain: "FWD", battery: "64.8 kWh", range: 463,
        length: 4420, width: 1825, height: 1570, weight: 1791,
        emoji: "⚡", color: "#1a1a2e", segment: "Compact SUV"
    },
    {
        id: 47, make: "Kia", model: "EV6 Long Range AWD", year: 2025, price: 529900,
        type: "suv", hp: 325, kwh: 77.4, zeroToHundred: 5.2, seats: 5,
        drivetrain: "AWD", battery: "77.4 kWh", range: 506,
        length: 4695, width: 1890, height: 1550, weight: 2090,
        emoji: "⚡", color: "#16213e", segment: "Mid-size SUV"
    },
    {
        id: 48, make: "Kia", model: "EV9 Long Range AWD", year: 2025, price: 699900,
        type: "suv", hp: 384, kwh: 99.8, zeroToHundred: 5.3, seats: 7,
        drivetrain: "AWD", battery: "99.8 kWh", range: 501,
        length: 5010, width: 1980, height: 1755, weight: 2614,
        emoji: "⚡", color: "#1b2838", segment: "Large SUV"
    },

    // ===== SKODA =====
    {
        id: 49, make: "Skoda", model: "Enyaq iV 80", year: 2025, price: 449900,
        type: "suv", hp: 204, kwh: 77, zeroToHundred: 8.5, seats: 5,
        drivetrain: "RWD", battery: "77 kWh", range: 545,
        length: 4649, width: 1879, height: 1616, weight: 2104,
        emoji: "⚡", color: "#1a2e2e", segment: "Compact SUV"
    },
    {
        id: 50, make: "Skoda", model: "Enyaq Coupe RS", year: 2025, price: 579900,
        type: "suv", hp: 340, kwh: 77, zeroToHundred: 5.5, seats: 5,
        drivetrain: "AWD", battery: "77 kWh", range: 505,
        length: 4653, width: 1879, height: 1607, weight: 2166,
        emoji: "⚡", color: "#2d1b2e", segment: "Coupe SUV"
    },

    // ===== POLESTAR =====
    {
        id: 51, make: "Polestar", model: "2 Long Range Dual Motor", year: 2025, price: 499900,
        type: "sedan", hp: 421, kwh: 78, zeroToHundred: 4.2, seats: 5,
        drivetrain: "AWD", battery: "78 kWh", range: 487,
        length: 4606, width: 1859, height: 1482, weight: 2113,
        emoji: "⚡", color: "#1a1a2e", segment: "Mid-size Sedan"
    },
    {
        id: 52, make: "Polestar", model: "3 Long Range Dual Motor", year: 2025, price: 799900,
        type: "suv", hp: 489, kwh: 111, zeroToHundred: 4.7, seats: 5,
        drivetrain: "AWD", battery: "111 kWh", range: 560,
        length: 4900, width: 2024, height: 1614, weight: 2584,
        emoji: "⚡", color: "#16213e", segment: "Large SUV"
    },
    {
        id: 53, make: "Polestar", model: "4 Long Range Dual Motor", year: 2025, price: 649900,
        type: "suv", hp: 544, kwh: 100, zeroToHundred: 3.8, seats: 5,
        drivetrain: "AWD", battery: "100 kWh", range: 560,
        length: 4839, width: 2008, height: 1544, weight: 2435,
        emoji: "⚡", color: "#1b2838", segment: "Coupe SUV"
    },

    // ===== NIO =====
    {
        id: 54, make: "NIO", model: "ET5 Touring", year: 2025, price: 449900,
        type: "wagon", hp: 490, kwh: 100, zeroToHundred: 4.0, seats: 5,
        drivetrain: "AWD", battery: "100 kWh", range: 560,
        length: 4790, width: 1960, height: 1499, weight: 2250,
        emoji: "⚡", color: "#1b2e1b", segment: "Mid-size Wagon"
    },
    {
        id: 55, make: "NIO", model: "EL6", year: 2025, price: 539900,
        type: "suv", hp: 490, kwh: 100, zeroToHundred: 4.5, seats: 5,
        drivetrain: "AWD", battery: "100 kWh", range: 510,
        length: 4854, width: 1995, height: 1703, weight: 2290,
        emoji: "⚡", color: "#2e2e1a", segment: "Mid-size SUV"
    },
    {
        id: 56, make: "NIO", model: "EL7", year: 2025, price: 639900,
        type: "suv", hp: 653, kwh: 100, zeroToHundred: 3.9, seats: 5,
        drivetrain: "AWD", battery: "100 kWh", range: 485,
        length: 4912, width: 1987, height: 1720, weight: 2379,
        emoji: "⚡", color: "#2e1a1a", segment: "Mid-size SUV"
    },

    // ===== TOYOTA =====
    {
        id: 57, make: "Toyota", model: "bZ4X AWD", year: 2025, price: 449900,
        type: "suv", hp: 218, kwh: 71.4, zeroToHundred: 6.9, seats: 5,
        drivetrain: "AWD", battery: "71.4 kWh", range: 411,
        length: 4690, width: 1860, height: 1650, weight: 2005,
        emoji: "⚡", color: "#1a1a2e", segment: "Mid-size SUV"
    },

    // ===== FORD =====
    {
        id: 58, make: "Ford", model: "Mustang Mach-E Extended AWD", year: 2025, price: 529900,
        type: "suv", hp: 351, kwh: 91, zeroToHundred: 5.4, seats: 5,
        drivetrain: "AWD", battery: "91 kWh", range: 540,
        length: 4739, width: 1881, height: 1624, weight: 2198,
        emoji: "⚡", color: "#2e1a1a", segment: "Mid-size SUV"
    },
    {
        id: 59, make: "Ford", model: "Explorer Electric AWD", year: 2025, price: 499900,
        type: "suv", hp: 340, kwh: 79, zeroToHundred: 5.3, seats: 5,
        drivetrain: "AWD", battery: "79 kWh", range: 530,
        length: 4468, width: 1872, height: 1637, weight: 2128,
        emoji: "⚡", color: "#1b2838", segment: "Mid-size SUV"
    },

    // ===== XPENG =====
    {
        id: 60, make: "Xpeng", model: "G6", year: 2025, price: 449900,
        type: "suv", hp: 296, kwh: 87.5, zeroToHundred: 5.9, seats: 5,
        drivetrain: "RWD", battery: "87.5 kWh", range: 570,
        length: 4753, width: 1920, height: 1650, weight: 2095,
        emoji: "⚡", color: "#1a2e2e", segment: "Mid-size SUV"
    },
    {
        id: 61, make: "Xpeng", model: "G9", year: 2025, price: 569900,
        type: "suv", hp: 551, kwh: 98, zeroToHundred: 3.9, seats: 5,
        drivetrain: "AWD", battery: "98 kWh", range: 520,
        length: 4891, width: 1937, height: 1680, weight: 2320,
        emoji: "⚡", color: "#2d1b2e", segment: "Large SUV"
    },

    // ===== BYD =====
    {
        id: 62, make: "BYD", model: "Atto 3", year: 2025, price: 349900,
        type: "suv", hp: 204, kwh: 60.5, zeroToHundred: 7.3, seats: 5,
        drivetrain: "FWD", battery: "60.5 kWh", range: 420,
        length: 4455, width: 1875, height: 1615, weight: 1750,
        emoji: "⚡", color: "#1a1a2e", segment: "Compact SUV"
    },
    {
        id: 63, make: "BYD", model: "Tang EV600", year: 2025, price: 569900,
        type: "suv", hp: 517, kwh: 108.8, zeroToHundred: 4.6, seats: 7,
        drivetrain: "AWD", battery: "108.8 kWh", range: 530,
        length: 4870, width: 1950, height: 1725, weight: 2489,
        emoji: "⚡", color: "#16213e", segment: "Large SUV"
    },
    {
        id: 64, make: "BYD", model: "Seal", year: 2025, price: 439900,
        type: "sedan", hp: 313, kwh: 82.5, zeroToHundred: 5.9, seats: 5,
        drivetrain: "RWD", battery: "82.5 kWh", range: 570,
        length: 4800, width: 1875, height: 1460, weight: 2150,
        emoji: "⚡", color: "#1b2838", segment: "Mid-size Sedan"
    },

    // ===== CUPRA =====
    {
        id: 65, make: "Cupra", model: "Born 77 kWh", year: 2025, price: 419900,
        type: "hatchback", hp: 231, kwh: 77, zeroToHundred: 7.0, seats: 5,
        drivetrain: "RWD", battery: "77 kWh", range: 540,
        length: 4322, width: 1809, height: 1540, weight: 1900,
        emoji: "⚡", color: "#2e1a1a", segment: "Compact"
    },
    {
        id: 66, make: "Cupra", model: "Tavascan VZ", year: 2025, price: 559900,
        type: "suv", hp: 340, kwh: 77, zeroToHundred: 5.5, seats: 5,
        drivetrain: "AWD", battery: "77 kWh", range: 500,
        length: 4644, width: 1861, height: 1597, weight: 2188,
        emoji: "⚡", color: "#2d1b2e", segment: "Coupe SUV"
    },

    // ===== RENAULT =====
    {
        id: 67, make: "Renault", model: "Megane E-Tech 60", year: 2025, price: 369900,
        type: "hatchback", hp: 220, kwh: 60, zeroToHundred: 7.4, seats: 5,
        drivetrain: "FWD", battery: "60 kWh", range: 450,
        length: 4200, width: 1768, height: 1505, weight: 1636,
        emoji: "⚡", color: "#1b2e1b", segment: "Compact"
    },
    {
        id: 68, make: "Renault", model: "Scenic E-Tech 87", year: 2025, price: 449900,
        type: "suv", hp: 220, kwh: 87, zeroToHundred: 7.9, seats: 5,
        drivetrain: "FWD", battery: "87 kWh", range: 620,
        length: 4470, width: 1863, height: 1571, weight: 1871,
        emoji: "⚡", color: "#2e2e1a", segment: "Compact SUV"
    },

    // ===== SMART =====
    {
        id: 69, make: "Smart", model: "#1 Pro+", year: 2025, price: 349900,
        type: "suv", hp: 272, kwh: 66, zeroToHundred: 6.7, seats: 5,
        drivetrain: "RWD", battery: "66 kWh", range: 420,
        length: 4270, width: 1822, height: 1636, weight: 1820,
        emoji: "⚡", color: "#1a1a2e", segment: "Small SUV"
    },
    {
        id: 70, make: "Smart", model: "#3 BRABUS", year: 2025, price: 469900,
        type: "suv", hp: 428, kwh: 66, zeroToHundred: 3.7, seats: 5,
        drivetrain: "AWD", battery: "66 kWh", range: 400,
        length: 4400, width: 1844, height: 1556, weight: 1910,
        emoji: "⚡", color: "#2e1a1a", segment: "Coupe SUV"
    },
    // ===== ELDRE MODELLER =====
    {
        id: 83, make: "Nissan", model: "Leaf e+ 62 kWh", year: 2022, price: 349900,
        type: "hatchback", hp: 217, kwh: 62, zeroToHundred: 6.9, seats: 5,
        drivetrain: "FWD", battery: "62 kWh", range: 385,
        length: 4490, width: 1788, height: 1530, weight: 1730,
        emoji: "⚡", color: "#c3002f", segment: "Compact"
    },
    {
        id: 84, make: "Volkswagen", model: "e-Golf", year: 2020, price: 329900,
        type: "hatchback", hp: 136, kwh: 35.8, zeroToHundred: 9.6, seats: 5,
        drivetrain: "FWD", battery: "35.8 kWh", range: 231,
        length: 4270, width: 1799, height: 1450, weight: 1615,
        emoji: "⚡", color: "#003399", segment: "Compact"
    },
    {
        id: 85, make: "Jaguar", model: "I-PACE EV400", year: 2023, price: 769900,
        type: "suv", hp: 400, kwh: 90, zeroToHundred: 4.8, seats: 5,
        drivetrain: "AWD", battery: "90 kWh", range: 470,
        length: 4682, width: 2011, height: 1565, weight: 2208,
        emoji: "⚡", color: "#1a472a", segment: "Mid-size SUV"
    },
    {
        id: 86, make: "BMW", model: "i3 120Ah", year: 2022, price: 349900,
        type: "hatchback", hp: 170, kwh: 42.2, zeroToHundred: 7.3, seats: 4,
        drivetrain: "RWD", battery: "42.2 kWh", range: 310,
        length: 4006, width: 1775, height: 1600, weight: 1345,
        emoji: "⚡", color: "#0066B1", segment: "City Car"
    },
    {
        id: 87, make: "Tesla", model: "Model 3 Standard Range Plus", year: 2021, price: 399900,
        type: "sedan", hp: 283, kwh: 60, zeroToHundred: 5.6, seats: 5,
        drivetrain: "RWD", battery: "60 kWh", range: 448,
        length: 4694, width: 1849, height: 1443, weight: 1745,
        emoji: "⚡", color: "#CC0000", segment: "Mid-size Sedan"
    },
    {
        id: 88, make: "Hyundai", model: "IONIQ Electric 38 kWh", year: 2022, price: 319900,
        type: "sedan", hp: 136, kwh: 38.3, zeroToHundred: 9.9, seats: 5,
        drivetrain: "FWD", battery: "38.3 kWh", range: 311,
        length: 4470, width: 1820, height: 1450, weight: 1575,
        emoji: "⚡", color: "#002C5F", segment: "Compact Sedan"
    },
    {
        id: 89, make: "Audi", model: "e-tron 55 quattro", year: 2023, price: 699900,
        type: "suv", hp: 408, kwh: 95, zeroToHundred: 5.7, seats: 5,
        drivetrain: "AWD", battery: "95 kWh", range: 441,
        length: 4901, width: 1935, height: 1629, weight: 2565,
        emoji: "⚡", color: "#BB0A30", segment: "Large SUV"
    },
    {
        id: 90, make: "MG", model: "ZS EV Long Range", year: 2023, price: 299900,
        type: "suv", hp: 177, kwh: 72.6, zeroToHundred: 8.2, seats: 5,
        drivetrain: "FWD", battery: "72.6 kWh", range: 440,
        length: 4323, width: 1809, height: 1649, weight: 1760,
        emoji: "⚡", color: "#D4171E", segment: "Compact SUV"
    },
    {
        id: 91, make: "Renault", model: "ZOE R135", year: 2022, price: 299900,
        type: "hatchback", hp: 135, kwh: 52, zeroToHundred: 9.5, seats: 5,
        drivetrain: "FWD", battery: "52 kWh", range: 395,
        length: 4087, width: 1787, height: 1562, weight: 1502,
        emoji: "⚡", color: "#FFCC00", segment: "City Car"
    },
    {
        id: 92, make: "Tesla", model: "Model S P100D", year: 2020, price: 899900,
        type: "sedan", hp: 762, kwh: 100, zeroToHundred: 2.6, seats: 5,
        drivetrain: "AWD", battery: "100 kWh", range: 555,
        length: 4979, width: 1964, height: 1445, weight: 2241,
        emoji: "⚡", color: "#CC0000", segment: "Luxury Sedan"
    },
    {
        id: 93, make: "Kia", model: "e-Niro 64 kWh", year: 2021, price: 379900,
        type: "suv", hp: 204, kwh: 64, zeroToHundred: 7.8, seats: 5,
        drivetrain: "FWD", battery: "64 kWh", range: 455,
        length: 4375, width: 1805, height: 1560, weight: 1791,
        emoji: "⚡", color: "#05141F", segment: "Compact SUV"
    },
    {
        id: 94, make: "Mercedes", model: "EQC 400 4MATIC", year: 2021, price: 649900,
        type: "suv", hp: 408, kwh: 80, zeroToHundred: 5.1, seats: 5,
        drivetrain: "AWD", battery: "80 kWh", range: 374,
        length: 4762, width: 1884, height: 1624, weight: 2495,
        emoji: "⚡", color: "#00ADEF", segment: "Mid-size SUV"
    },
    {
        id: 95, make: "Opel", model: "Mokka-e", year: 2023, price: 349900,
        type: "suv", hp: 136, kwh: 50, zeroToHundred: 9.0, seats: 5,
        drivetrain: "FWD", battery: "50 kWh", range: 338,
        length: 4151, width: 1791, height: 1531, weight: 1598,
        emoji: "⚡", color: "#000000", segment: "Small SUV"
    },
    {
        id: 96, make: "Fiat", model: "500e La Prima", year: 2023, price: 319900,
        type: "hatchback", hp: 118, kwh: 42, zeroToHundred: 9.0, seats: 4,
        drivetrain: "FWD", battery: "42 kWh", range: 321,
        length: 3631, width: 1773, height: 1527, weight: 1365,
        emoji: "⚡", color: "#8B0000", segment: "City Car"
    },
    {
        id: 97, make: "Volvo", model: "XC40 Recharge P8", year: 2022, price: 529900,
        type: "suv", hp: 408, kwh: 78, zeroToHundred: 4.9, seats: 5,
        drivetrain: "AWD", battery: "78 kWh", range: 418,
        length: 4425, width: 1873, height: 1651, weight: 2188,
        emoji: "⚡", color: "#003057", segment: "Compact SUV"
    },
    {
        id: 98, make: "Ford", model: "Mustang Mach-E Standard Range", year: 2022, price: 449900,
        type: "suv", hp: 269, kwh: 75.7, zeroToHundred: 6.2, seats: 5,
        drivetrain: "RWD", battery: "75.7 kWh", range: 440,
        length: 4739, width: 1881, height: 1624, weight: 2100,
        emoji: "⚡", color: "#003478", segment: "Mid-size SUV"
    },
    {
        id: 99, make: "Peugeot", model: "e-2008 GT", year: 2023, price: 379900,
        type: "suv", hp: 136, kwh: 50, zeroToHundred: 9.0, seats: 5,
        drivetrain: "FWD", battery: "50 kWh", range: 345,
        length: 4300, width: 1770, height: 1550, weight: 1623,
        emoji: "⚡", color: "#1A237E", segment: "Small SUV"
    }
];

// ========== Brand Colors ==========
const BRAND_COLORS = {
    "BMW":        { primary: "#0066B1", gradient: "linear-gradient(135deg, #0066B1, #003366)" },
    "Audi":       { primary: "#BB0A30", gradient: "linear-gradient(135deg, #BB0A30, #660018)" },
    "Mercedes":   { primary: "#00ADEF", gradient: "linear-gradient(135deg, #00ADEF, #005F7F)" },
    "Porsche":    { primary: "#C8102E", gradient: "linear-gradient(135deg, #C8102E, #6B0016)" },
    "Tesla":      { primary: "#CC0000", gradient: "linear-gradient(135deg, #CC0000, #660000)" },
    "Volkswagen": { primary: "#003399", gradient: "linear-gradient(135deg, #003399, #001A4D)" },
    "Volvo":      { primary: "#003057", gradient: "linear-gradient(135deg, #003057, #001A30)" },
    "Hyundai":    { primary: "#002C5F", gradient: "linear-gradient(135deg, #002C5F, #001633)" },
    "Kia":        { primary: "#05141F", gradient: "linear-gradient(135deg, #BB162B, #660D18)" },
    "Skoda":      { primary: "#4BA82E", gradient: "linear-gradient(135deg, #4BA82E, #2D6619)" },
    "Polestar":   { primary: "#D4AA00", gradient: "linear-gradient(135deg, #1A1A1A, #333333)" },
    "NIO":        { primary: "#0070C0", gradient: "linear-gradient(135deg, #0070C0, #003860)" },
    "Toyota":     { primary: "#EB0A1E", gradient: "linear-gradient(135deg, #EB0A1E, #7A050F)" },
    "Ford":       { primary: "#003478", gradient: "linear-gradient(135deg, #003478, #001A3C)" },
    "Xpeng":      { primary: "#FF6B00", gradient: "linear-gradient(135deg, #FF6B00, #993F00)" },
    "BYD":        { primary: "#C5002E", gradient: "linear-gradient(135deg, #C5002E, #660018)" },
    "Cupra":      { primary: "#95614C", gradient: "linear-gradient(135deg, #95614C, #4D3228)" },
    "Renault":    { primary: "#FFCC00", gradient: "linear-gradient(135deg, #1A1A1A, #333333)" },
    "Smart":      { primary: "#FF7900", gradient: "linear-gradient(135deg, #FF7900, #994800)" },
    "Nissan":     { primary: "#C3002F", gradient: "linear-gradient(135deg, #C3002F, #660018)" },
    "Jaguar":     { primary: "#1A472A", gradient: "linear-gradient(135deg, #1A472A, #0D2415)" },
    "MG":         { primary: "#D4171E", gradient: "linear-gradient(135deg, #D4171E, #6A0B0F)" },
    "Opel":       { primary: "#F7FF14", gradient: "linear-gradient(135deg, #1A1A1A, #333333)" },
    "Fiat":       { primary: "#8B0000", gradient: "linear-gradient(135deg, #8B0000, #450000)" },
    "Peugeot":    { primary: "#1A237E", gradient: "linear-gradient(135deg, #1A237E, #0D113F)" }
};

// ========== Brand Sources ==========
const BRAND_SOURCES = {
    "BMW":        { name: "bmw.no", url: "https://www.bmw.no/no/alle-modeller.html" },
    "Audi":       { name: "audi.no", url: "https://www.audi.no/no/web/no/modeller.html" },
    "Mercedes":   { name: "mercedes-benz.no", url: "https://www.mercedes-benz.no/passengercars.html" },
    "Porsche":    { name: "porsche.no", url: "https://www.porsche.com/norway/models/" },
    "Tesla":      { name: "tesla.com/no", url: "https://www.tesla.com/no_no" },
    "Volkswagen": { name: "volkswagen.no", url: "https://www.volkswagen.no/no/modeller.html" },
    "Volvo":      { name: "volvocars.com/no", url: "https://www.volvocars.com/no/cars/" },
    "Hyundai":    { name: "hyundai.no", url: "https://www.hyundai.com/no/modeller.html" },
    "Kia":        { name: "kia.com/no", url: "https://www.kia.com/no/modeller.html" },
    "Skoda":      { name: "skoda.no", url: "https://www.skoda.no/modeller" },
    "Polestar":   { name: "polestar.com/no", url: "https://www.polestar.com/no/" },
    "NIO":        { name: "nio.com/no", url: "https://www.nio.com/no_NO" },
    "Toyota":     { name: "toyota.no", url: "https://www.toyota.no/biler" },
    "Ford":       { name: "ford.no", url: "https://www.ford.no/elbiler" },
    "Xpeng":      { name: "xpeng.com/no", url: "https://www.xpeng.com/no" },
    "BYD":        { name: "byd.com/no", url: "https://www.byd.com/no" },
    "Cupra":      { name: "cupraofficial.no", url: "https://www.cupraofficial.no/modeller.html" },
    "Renault":    { name: "renault.no", url: "https://www.renault.no/elektriske-biler.html" },
    "Smart":      { name: "smart.com/no", url: "https://www.smart.com/no" },
    "Nissan":     { name: "nissan.no", url: "https://www.nissan.no/biler/elbiler.html" },
    "Jaguar":     { name: "jaguar.no", url: "https://www.jaguar.no/index.html" },
    "MG":         { name: "mg.no", url: "https://www.mg.no/modeller" },
    "Opel":       { name: "opel.no", url: "https://www.opel.no/biler/elbiler.html" },
    "Fiat":       { name: "fiat.no", url: "https://www.fiat.no/500e" },
    "Peugeot":    { name: "peugeot.no", url: "https://www.peugeot.no/elbiler.html" }
};

// ========== SVG Car Silhouettes ==========
function getCarSilhouette(type) {
    const color = "rgba(255,255,255,0.15)";
    const highlight = "rgba(255,255,255,0.25)";
    switch (type) {
        case "sedan":
            return `<svg viewBox="0 0 300 120" xmlns="http://www.w3.org/2000/svg" style="width:85%;max-width:260px;position:absolute;bottom:8px;">
                <path d="M30,85 L45,85 Q50,65 65,65 L95,65 Q100,40 130,30 L190,28 Q220,30 230,50 L240,65 L255,65 Q270,65 270,85 L280,85" fill="none" stroke="${color}" stroke-width="3"/>
                <path d="M130,30 L130,65" fill="none" stroke="${color}" stroke-width="1.5"/>
                <path d="M190,28 L195,65" fill="none" stroke="${color}" stroke-width="1.5"/>
                <ellipse cx="80" cy="88" rx="18" ry="18" fill="none" stroke="${highlight}" stroke-width="3"/>
                <ellipse cx="240" cy="88" rx="18" ry="18" fill="none" stroke="${highlight}" stroke-width="3"/>
                <line x1="100" y1="65" x2="235" y2="65" stroke="${color}" stroke-width="2"/>
            </svg>`;
        case "suv":
            return `<svg viewBox="0 0 300 130" xmlns="http://www.w3.org/2000/svg" style="width:85%;max-width:260px;position:absolute;bottom:5px;">
                <path d="M25,90 L45,90 Q50,65 65,65 L90,65 Q95,35 125,25 L200,23 Q225,25 235,45 L245,65 L260,65 Q275,65 275,90 L285,90" fill="none" stroke="${color}" stroke-width="3"/>
                <path d="M125,25 L120,65" fill="none" stroke="${color}" stroke-width="1.5"/>
                <path d="M200,23 L205,65" fill="none" stroke="${color}" stroke-width="1.5"/>
                <ellipse cx="78" cy="95" rx="20" ry="20" fill="none" stroke="${highlight}" stroke-width="3"/>
                <ellipse cx="248" cy="95" rx="20" ry="20" fill="none" stroke="${highlight}" stroke-width="3"/>
                <line x1="100" y1="65" x2="240" y2="65" stroke="${color}" stroke-width="2"/>
                <path d="M90,65 L90,90" fill="none" stroke="${color}" stroke-width="1.5" opacity="0.5"/>
                <path d="M260,65 L260,90" fill="none" stroke="${color}" stroke-width="1.5" opacity="0.5"/>
            </svg>`;
        case "hatchback":
            return `<svg viewBox="0 0 280 120" xmlns="http://www.w3.org/2000/svg" style="width:80%;max-width:240px;position:absolute;bottom:8px;">
                <path d="M30,85 L45,85 Q50,65 65,65 L90,65 Q95,40 125,30 L190,28 Q210,30 220,45 L230,65 L240,65 Q255,65 250,85 L260,85" fill="none" stroke="${color}" stroke-width="3"/>
                <path d="M125,30 L122,65" fill="none" stroke="${color}" stroke-width="1.5"/>
                <path d="M190,28 L220,65" fill="none" stroke="${color}" stroke-width="1.5"/>
                <ellipse cx="78" cy="88" rx="18" ry="18" fill="none" stroke="${highlight}" stroke-width="3"/>
                <ellipse cx="228" cy="88" rx="18" ry="18" fill="none" stroke="${highlight}" stroke-width="3"/>
                <line x1="96" y1="65" x2="225" y2="65" stroke="${color}" stroke-width="2"/>
            </svg>`;
        case "wagon":
            return `<svg viewBox="0 0 300 120" xmlns="http://www.w3.org/2000/svg" style="width:85%;max-width:260px;position:absolute;bottom:8px;">
                <path d="M25,85 L45,85 Q50,65 65,65 L90,65 Q95,40 125,30 L210,28 L240,28 L245,65 L260,65 Q275,65 275,85 L280,85" fill="none" stroke="${color}" stroke-width="3"/>
                <path d="M125,30 L122,65" fill="none" stroke="${color}" stroke-width="1.5"/>
                <path d="M210,28 L210,65" fill="none" stroke="${color}" stroke-width="1.5"/>
                <ellipse cx="78" cy="88" rx="18" ry="18" fill="none" stroke="${highlight}" stroke-width="3"/>
                <ellipse cx="248" cy="88" rx="18" ry="18" fill="none" stroke="${highlight}" stroke-width="3"/>
                <line x1="96" y1="65" x2="240" y2="65" stroke="${color}" stroke-width="2"/>
            </svg>`;
        case "van":
            return `<svg viewBox="0 0 300 130" xmlns="http://www.w3.org/2000/svg" style="width:85%;max-width:260px;position:absolute;bottom:5px;">
                <path d="M25,95 L40,95 Q45,70 60,70 L80,70 Q85,30 110,20 L220,18 L250,20 L255,70 L265,70 Q280,70 280,95 L285,95" fill="none" stroke="${color}" stroke-width="3"/>
                <path d="M110,20 L108,70" fill="none" stroke="${color}" stroke-width="1.5"/>
                <path d="M170,18 L170,70" fill="none" stroke="${color}" stroke-width="1.5"/>
                <path d="M220,18 L222,70" fill="none" stroke="${color}" stroke-width="1.5"/>
                <ellipse cx="75" cy="98" rx="20" ry="20" fill="none" stroke="${highlight}" stroke-width="3"/>
                <ellipse cx="252" cy="98" rx="20" ry="20" fill="none" stroke="${highlight}" stroke-width="3"/>
                <line x1="96" y1="70" x2="250" y2="70" stroke="${color}" stroke-width="2"/>
            </svg>`;
        default:
            return getCarSilhouette("suv");
    }
}

// ========== Brand Logo ==========
function getBrandLogo(make, compact) {
    const bc = BRAND_COLORS[make] || { primary: "#888" };
    if (compact) {
        return `<span style="position:absolute;bottom:2px;font-size:9px;font-weight:800;color:${bc.primary};letter-spacing:0.3px;text-transform:uppercase;opacity:0.8;">${make}</span>`;
    }
    return `<div style="position:absolute;top:10px;right:10px;background:rgba(0,0,0,0.5);backdrop-filter:blur(10px);-webkit-backdrop-filter:blur(10px);border-radius:8px;padding:4px 10px;">
        <span style="font-size:13px;font-weight:800;color:${bc.primary};letter-spacing:0.5px;text-transform:uppercase;">${make}</span>
    </div>`;
}

// ========== App State ==========
const state = {
    compareList: JSON.parse(localStorage.getItem("compareList") || "[]"),
    favorites: JSON.parse(localStorage.getItem("favorites") || "[]"),
    ratings: JSON.parse(localStorage.getItem("ratings") || "{}"),
    activeTab: "browse"
};

function saveState() {
    localStorage.setItem("compareList", JSON.stringify(state.compareList));
    localStorage.setItem("favorites", JSON.stringify(state.favorites));
    localStorage.setItem("ratings", JSON.stringify(state.ratings));
}

function getRating(carId) {
    return state.ratings[carId] || 0;
}

// Generate consistent community ratings per car (deterministic based on car properties)
function getCommunityRating(carId) {
    const car = getCarById(carId);
    if (!car) return { avg: 0, count: 0 };
    // Seeded pseudo-random based on car id
    const seed = carId * 2654435761 >>> 0;
    const baseScore = 3.2 + ((seed % 180) / 100); // 3.2 - 4.99
    // Bonus for good value (range/price ratio), performance
    const valueFactor = Math.min(car.range / (car.price / 100000), 1.5) * 0.15;
    const avg = Math.min(5.0, Math.max(2.5, baseScore + valueFactor));
    const count = 8 + (seed % 47); // 8-54 "votes"
    return { avg: Math.round(avg * 10) / 10, count };
}

function getAverageRating(carId) {
    const community = getCommunityRating(carId);
    const userRating = getRating(carId);
    if (userRating > 0) {
        const totalVotes = community.count + 1;
        const avg = (community.avg * community.count + userRating) / totalVotes;
        return { avg: Math.round(avg * 10) / 10, count: totalVotes, userRating };
    }
    return { avg: community.avg, count: community.count, userRating: 0 };
}

function setRating(carId, rating, e) {
    if (e) e.stopPropagation();
    state.ratings[carId] = rating;
    saveState();
    updateUI();
    showToast(`Du ga ${rating} av 5 stjerner`);
}

function renderStars(carId, size, showDetails) {
    const { avg, count, userRating } = getAverageRating(carId);
    const sz = size || 18;
    let html = `<div class="star-rating" style="font-size:${sz}px">`;
    for (let i = 1; i <= 5; i++) {
        const filled = i <= Math.round(avg);
        const cls = filled ? 'star star-filled' : 'star star-empty';
        html += `<span class="${cls}" onclick="setRating(${carId}, ${i}, event)">★</span>`;
    }
    html += `<span class="star-avg">${avg.toFixed(1)}</span>`;
    html += `<span class="star-count">(${count})</span>`;
    html += `</div>`;
    if (showDetails && userRating > 0) {
        html += `<div class="star-user-badge">Din: ${userRating}/5 ★</div>`;
    }
    return html;
}

// ========== News Links ==========
const NEWS_SITES = [
    { name: "elbil24.no", searchUrl: "https://elbil24.no/?s=" },
    { name: "tek.no", searchUrl: "https://www.tek.no/search?q=" },
    { name: "dinside.no", searchUrl: "https://www.dinside.no/sok?q=" },
    { name: "motor.no", searchUrl: "https://www.motor.no/sok?q=" }
];

function renderNewsLinks(car) {
    const query = encodeURIComponent(`${car.make} ${car.model}`);
    return NEWS_SITES.map(site =>
        `<a href="${site.searchUrl}${query}" target="_blank" rel="noopener" class="news-link">${site.name}</a>`
    ).join("");
}

// ========== Utility ==========
function formatPrice(price) {
    return price.toLocaleString("nb-NO") + " kr";
}

function getCarById(id) {
    return CARS.find(c => c.id === id);
}

function isInCompare(id) {
    return state.compareList.includes(id);
}

function isFavorite(id) {
    return state.favorites.includes(id);
}

function toggleCompare(id, e) {
    if (e) e.stopPropagation();
    const idx = state.compareList.indexOf(id);
    if (idx > -1) {
        state.compareList.splice(idx, 1);
    } else {
        if (state.compareList.length >= 10) {
            showToast("Maks 10 biler kan sammenlignes");
            return;
        }
        state.compareList.push(id);
    }
    saveState();
    updateUI();
}

function toggleFavorite(id, e) {
    if (e) e.stopPropagation();
    const idx = state.favorites.indexOf(id);
    if (idx > -1) {
        state.favorites.splice(idx, 1);
    } else {
        state.favorites.push(id);
    }
    saveState();
    updateUI();
}

// ========== Toast ==========
function showToast(msg) {
    let toast = document.getElementById("toast");
    if (!toast) {
        toast = document.createElement("div");
        toast.id = "toast";
        toast.style.cssText = `
            position: fixed; bottom: 80px; left: 50%; transform: translateX(-50%);
            background: #333; color: white; padding: 10px 20px; border-radius: 10px;
            font-size: 14px; font-weight: 600; z-index: 200; opacity: 0;
            transition: opacity 0.2s; pointer-events: none;
            font-family: -apple-system, sans-serif;
        `;
        document.body.appendChild(toast);
    }
    toast.textContent = msg;
    toast.style.opacity = "1";
    setTimeout(() => { toast.style.opacity = "0"; }, 1800);
}

// ========== SVG Icons ==========
const ICONS = {
    heart: `<svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round"><path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z"/></svg>`,
    heartFilled: `<svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z"/></svg>`,
    plus: `<svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round"><line x1="12" y1="5" x2="12" y2="19"/><line x1="5" y1="12" x2="19" y2="12"/></svg>`,
    check: `<svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="3" stroke-linecap="round" stroke-linejoin="round"><polyline points="20 6 9 17 4 12"/></svg>`,
    range: `<svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round"><path d="M13 2L3 14h9l-1 8 10-12h-9l1-8z"/></svg>`,
};

// ========== Render Car Card ==========
function renderCarCard(car) {
    const div = document.createElement("div");
    div.className = "car-card";
    div.onclick = () => openModal(car.id);

    const src = BRAND_SOURCES[car.make];
    const bc = BRAND_COLORS[car.make] || { primary: "#888", gradient: "linear-gradient(135deg, #888, #444)" };
    div.innerHTML = `
        <div class="car-card-accent" style="background:${bc.gradient}"></div>
        <div class="car-card-body">
            <div class="car-card-header">
                <div>
                    <div class="car-card-title">${car.make} ${car.model}</div>
                    <div class="car-card-year">${car.year}</div>
                </div>
                <div class="car-actions">
                    <button class="btn-icon ${isFavorite(car.id) ? 'active-fav' : ''}"
                            onclick="toggleFavorite(${car.id}, event)"
                            aria-label="Favoritt">
                        ${isFavorite(car.id) ? ICONS.heartFilled : ICONS.heart}
                    </button>
                    <button class="btn-icon ${isInCompare(car.id) ? 'active-compare' : ''}"
                            onclick="toggleCompare(${car.id}, event)"
                            aria-label="Sammenlign">
                        ${isInCompare(car.id) ? ICONS.check : ICONS.plus}
                    </button>
                </div>
            </div>
            <div class="car-card-specs">
                <span class="spec-pill">${ICONS.range}<span class="val">${car.range}</span> km</span>
                <span class="spec-pill"><span class="val">${car.hp}</span> hk</span>
                <span class="spec-pill"><span class="val">${car.zeroToHundred}s</span></span>
            </div>
            <div class="car-card-footer">
                <span class="car-price">${formatPrice(car.price)}</span>
                ${renderStars(car.id, 14)}
            </div>
        </div>
    `;
    return div;
}

// ========== Browse Tab ==========
function renderBrowse() {
    const list = document.getElementById("car-list");
    const search = document.getElementById("search-input").value.toLowerCase();
    const brandFilter = document.getElementById("filter-brand").value;
    const typeFilter = document.getElementById("filter-type").value;
    const sort = document.getElementById("filter-sort").value;
    const yearFilter = document.getElementById("filter-year").value;

    let cars = CARS.filter(car => {
        const matchSearch = `${car.make} ${car.model} ${car.year} ${car.segment}`.toLowerCase().includes(search);
        const matchBrand = brandFilter === "all" || car.make === brandFilter;
        const matchType = typeFilter === "all" || car.type === typeFilter;
        const matchYear = yearFilter === "all" || car.year === parseInt(yearFilter);
        return matchSearch && matchBrand && matchType && matchYear;
    });

    switch (sort) {
        case "price-low": cars.sort((a, b) => a.price - b.price); break;
        case "price-high": cars.sort((a, b) => b.price - a.price); break;
        case "range": cars.sort((a, b) => b.range - a.range); break;
        case "hp": cars.sort((a, b) => b.hp - a.hp); break;
        case "fast": cars.sort((a, b) => a.zeroToHundred - b.zeroToHundred); break;
        case "rating": cars.sort((a, b) => getAverageRating(b.id).avg - getAverageRating(a.id).avg); break;
        default: cars.sort((a, b) => `${a.make} ${a.model}`.localeCompare(`${b.make} ${b.model}`));
    }

    // Result count
    let countEl = document.getElementById("result-count");
    if (!countEl) {
        countEl = document.createElement("div");
        countEl.id = "result-count";
        countEl.className = "result-count";
        list.parentNode.insertBefore(countEl, list);
    }
    const hasFilter = search || brandFilter !== "all" || typeFilter !== "all" || yearFilter !== "all";
    countEl.textContent = hasFilter ? `${cars.length} biler funnet` : `${cars.length} biler`;
    countEl.style.display = "block";

    list.innerHTML = "";
    if (cars.length === 0) {
        list.innerHTML = '<div class="no-results">Ingen biler funnet</div>';
        return;
    }
    cars.forEach(car => list.appendChild(renderCarCard(car)));
}

// ========== Compare Tab ==========
function renderCompare() {
    const empty = document.getElementById("compare-empty");
    const view = document.getElementById("compare-view");
    const badge = document.getElementById("compare-count");

    if (state.compareList.length === 0) {
        empty.style.display = "block";
        view.style.display = "none";
        badge.style.display = "none";
        return;
    }

    empty.style.display = "none";
    view.style.display = "block";
    badge.style.display = "inline-flex";
    badge.textContent = state.compareList.length;

    const cars = state.compareList.map(getCarById).filter(Boolean);

    // Grouped specs
    const specGroups = [
        { title: "Ytelse", specs: [
            { label: "Pris", key: "price", format: v => formatPrice(v), best: "low" },
            { label: "Effekt", key: "hp", format: v => v + " hk", best: "high" },
            { label: "0-100 km/t", key: "zeroToHundred", format: v => v + "s", best: "low" },
            { label: "Drivlinje", key: "drivetrain", format: v => v, best: null },
        ]},
        { title: "Batteri & rekkevidde", specs: [
            { label: "Rekkevidde", key: "range", format: v => v + " km", best: "high" },
            { label: "Batteri", key: "kwh", format: v => v + " kWh", best: "high" },
            { label: "Forbruk", key: "_consumption", format: v => v, best: "low" },
        ]},
        { title: "Praktisk", specs: [
            { label: "Seter", key: "seats", format: v => v, best: null },
            { label: "Segment", key: "segment", format: v => v, best: null },
            { label: "Årstall", key: "year", format: v => v, best: null },
        ]},
        { title: "Dimensjoner", specs: [
            { label: "Lengde", key: "length", format: v => v ? (v / 1000).toFixed(2) + " m" : "—", best: null },
            { label: "Bredde", key: "width", format: v => v ? (v / 1000).toFixed(2) + " m" : "—", best: null },
            { label: "Høyde", key: "height", format: v => v ? (v / 1000).toFixed(2) + " m" : "—", best: null },
            { label: "Vekt", key: "weight", format: v => v ? v.toLocaleString("nb-NO") + " kg" : "—", best: "low" },
        ]}
    ];

    const table = document.getElementById("compare-table");

    // Header row with car names — with move buttons
    const headerCells = cars.map((car, idx) => {
        const bc = BRAND_COLORS[car.make] || { primary: "#888" };
        const leftBtn = idx > 0
            ? `<button class="compare-move-btn" onclick="moveCompare(${idx}, ${idx - 1})" aria-label="Flytt venstre">◀</button>`
            : `<span class="compare-move-btn placeholder"></span>`;
        const rightBtn = idx < cars.length - 1
            ? `<button class="compare-move-btn" onclick="moveCompare(${idx}, ${idx + 1})" aria-label="Flytt høyre">▶</button>`
            : `<span class="compare-move-btn placeholder"></span>`;
        return `<div class="compare-cell compare-header-cell">
            <div class="compare-move-row">${leftBtn}${rightBtn}</div>
            <div class="compare-car-name" style="color:${bc.primary}">${car.make}</div>
            <div class="compare-car-model">${car.model}</div>
            <div class="compare-car-year">${car.year}</div>
            <button class="chip-remove" onclick="toggleCompare(${car.id})">✕</button>
        </div>`;
    }).join("");

    // Sort buttons
    const sortBar = `<div class="compare-sort-bar">
        <span class="compare-sort-label">Sorter:</span>
        <button class="compare-sort-btn" onclick="sortCompareBy('price')">Pris</button>
        <button class="compare-sort-btn" onclick="sortCompareBy('range')">Rekkevidde</button>
        <button class="compare-sort-btn" onclick="sortCompareBy('hp')">Effekt</button>
        <button class="compare-sort-btn" onclick="sortCompareBy('zeroToHundred')">0-100</button>
        <button class="compare-sort-btn" onclick="sortCompareBy('weight')">Vekt</button>
    </div>`;

    const headerRow = `<div class="compare-row header-row">
        <div class="compare-cell label-cell" style="display:flex;align-items:center;font-size:11px;text-transform:uppercase;letter-spacing:0.8px;color:var(--accent)">Bil</div>
        ${headerCells}
    </div>`;

    // Build grouped rows
    let groupedRows = "";
    specGroups.forEach(group => {
        groupedRows += `<div class="compare-row section-row">
            <div class="compare-cell label-cell section-label">${group.title}</div>
            ${cars.map(() => '<div class="compare-cell"></div>').join("")}
        </div>`;

        group.specs.forEach((spec, i) => {
            let values;
            if (spec.key === "_consumption") {
                values = cars.map(c => parseFloat((c.kwh / c.range * 100).toFixed(1)));
            } else {
                values = cars.map(c => c[spec.key]);
            }
            let bestVal = null;
            if (spec.best === "high") bestVal = Math.max(...values.filter(v => typeof v === "number"));
            if (spec.best === "low") bestVal = Math.min(...values.filter(v => typeof v === "number"));

            const cells = cars.map((car, ci) => {
                const val = values[ci];
                const isBest = bestVal !== null && val === bestVal && cars.length > 1;
                const formatted = spec.key === "_consumption" ? val + " kWh/100km" : spec.format(val);
                return `<div class="compare-cell${i % 2 === 0 ? ' alt-row' : ''}">${isBest ? '<span class="best">' : ''}${formatted}${isBest ? '</span>' : ''}</div>`;
            }).join("");

            groupedRows += `<div class="compare-row">
                <div class="compare-cell label-cell${i % 2 === 0 ? ' alt-row' : ''}">${spec.label}</div>
                ${cells}
            </div>`;
        });
    });

    table.innerHTML = sortBar + headerRow + groupedRows;
}

// ========== Compare Sort ==========
function sortCompareBy(key) {
    const asc = ["price", "zeroToHundred", "weight"];
    state.compareList.sort((a, b) => {
        const ca = getCarById(a), cb = getCarById(b);
        if (!ca || !cb) return 0;
        return asc.includes(key) ? ca[key] - cb[key] : cb[key] - ca[key];
    });
    saveState();
    renderCompare();
}

// ========== Compare Move ==========
function moveCompare(fromIdx, toIdx) {
    const item = state.compareList.splice(fromIdx, 1)[0];
    state.compareList.splice(toIdx, 0, item);
    saveState();
    renderCompare();
}

// ========== Favorites Tab ==========
function renderFavorites() {
    const empty = document.getElementById("favorites-empty");
    const list = document.getElementById("favorites-list");

    if (state.favorites.length === 0) {
        empty.style.display = "block";
        list.innerHTML = "";
        return;
    }

    empty.style.display = "none";
    list.innerHTML = "";
    state.favorites.forEach(id => {
        const car = getCarById(id);
        if (car) list.appendChild(renderCarCard(car));
    });
}

// ========== Modal ==========
function openModal(id) {
    const car = getCarById(id);
    if (!car) return;

    const modal = document.getElementById("car-modal");
    const body = document.getElementById("modal-body");

    const src = BRAND_SOURCES[car.make];

    body.innerHTML = `
        <div class="modal-title">${car.make} ${car.model}</div>
        <div class="modal-year">${car.year} · ${car.segment}</div>
        <div class="modal-price">${formatPrice(car.price)}</div>
        ${src ? `<a href="${src.url}" target="_blank" rel="noopener" class="modal-source-link">Kilde: ${src.name}</a>` : ''}

        <div class="modal-section-title">Ytelse</div>
        <div class="modal-specs-grid">
            <div class="modal-spec">
                <div class="modal-spec-label">Effekt</div>
                <div class="modal-spec-value">${car.hp} hk</div>
            </div>
            <div class="modal-spec">
                <div class="modal-spec-label">0-100 km/t</div>
                <div class="modal-spec-value">${car.zeroToHundred}s</div>
            </div>
            <div class="modal-spec">
                <div class="modal-spec-label">Rekkevidde</div>
                <div class="modal-spec-value">${car.range} km</div>
            </div>
            <div class="modal-spec">
                <div class="modal-spec-label">Drivlinje</div>
                <div class="modal-spec-value">${car.drivetrain}</div>
            </div>
        </div>

        <div class="modal-section-title">Detaljer</div>
        <div class="modal-specs-grid">
            <div class="modal-spec">
                <div class="modal-spec-label">Batteri</div>
                <div class="modal-spec-value">${car.battery}</div>
            </div>
            <div class="modal-spec">
                <div class="modal-spec-label">Seter</div>
                <div class="modal-spec-value">${car.seats}</div>
            </div>
            <div class="modal-spec">
                <div class="modal-spec-label">Type</div>
                <div class="modal-spec-value" style="font-size:14px">${car.segment}</div>
            </div>
            <div class="modal-spec">
                <div class="modal-spec-label">Forbruk</div>
                <div class="modal-spec-value" style="font-size:14px">${(car.kwh / car.range * 100).toFixed(1)} kWh/100km</div>
            </div>
        </div>

        <div class="modal-section-title">Dimensjoner</div>
        <div class="modal-specs-grid">
            <div class="modal-spec">
                <div class="modal-spec-label">Lengde</div>
                <div class="modal-spec-value">${car.length} mm</div>
            </div>
            <div class="modal-spec">
                <div class="modal-spec-label">Bredde</div>
                <div class="modal-spec-value">${car.width} mm</div>
            </div>
            <div class="modal-spec">
                <div class="modal-spec-label">Høyde</div>
                <div class="modal-spec-value">${car.height} mm</div>
            </div>
            <div class="modal-spec">
                <div class="modal-spec-label">Vekt</div>
                <div class="modal-spec-value">${car.weight} kg</div>
            </div>
        </div>

        <div class="modal-section-title">Nyheter og tester</div>
        <div class="modal-news-links">
            ${renderNewsLinks(car)}
        </div>

        <div class="modal-rating">
            <div class="modal-section-title">Vurdering</div>
            ${renderStars(car.id, 28, true)}
        </div>

        <div class="modal-actions">
            <button class="modal-btn btn-compare ${isInCompare(car.id) ? 'added' : ''}"
                    onclick="toggleCompare(${car.id}); openModal(${car.id});">
                ${isInCompare(car.id) ? ICONS.check + ' Sammenlignes' : ICONS.plus + ' Sammenlign'}
            </button>
            <button class="modal-btn btn-fav ${isFavorite(car.id) ? 'favorited' : ''}"
                    onclick="toggleFavorite(${car.id}); openModal(${car.id});">
                ${isFavorite(car.id) ? ICONS.heartFilled + ' Favoritt' : ICONS.heart + ' Favoritt'}
            </button>
        </div>

        <div class="modal-disclaimer">
            Informasjonen er veiledende og kan inneholde feil. Priser og spesifikasjoner kan avvike fra faktiske verdier. Kontakt alltid forhandler for bekreftede opplysninger.
        </div>

        <div class="modal-ad-banner">
            <ins class="adsbygoogle"
                 style="display:block"
                 data-ad-client="ca-pub-4678480487049419"
                 data-ad-slot="2454031921"
                 data-ad-format="auto"
                 data-full-width-responsive="true"></ins>
        </div>
    `;

    modal.classList.add("open");

    try { (adsbygoogle = window.adsbygoogle || []).push({}); } catch(e) {}
}

function closeModal() {
    document.getElementById("car-modal").classList.remove("open");
}

// ========== Feedback ==========
function openFeedback() {
    document.getElementById("feedback-modal").classList.add("open");
}

function closeFeedback() {
    document.getElementById("feedback-modal").classList.remove("open");
}

function sendFeedback() {
    const type = document.getElementById("feedback-type").value;
    const text = document.getElementById("feedback-text").value.trim();
    if (!text) {
        showToast("Skriv en tilbakemelding først");
        return;
    }
    const subject = encodeURIComponent(`Tilbakemelding - ${type}`);
    const body = encodeURIComponent(`Type: ${type}\n\n${text}\n\n---\nSendt fra Elbil-appen`);
    window.open(`mailto:tilbakemelding@example.com?subject=${subject}&body=${body}`, "_self");
    showToast("Takk for tilbakemeldingen!");
    document.getElementById("feedback-text").value = "";
    closeFeedback();
}

document.getElementById("feedback-modal").addEventListener("click", function(e) {
    if (e.target === this) closeFeedback();
});

// ========== Tabs ==========
function switchTab(tab) {
    state.activeTab = tab;
    const tabs = document.querySelectorAll(".tab");
    const indicator = document.querySelector(".tab-indicator");
    tabs.forEach(t => t.classList.toggle("active", t.dataset.tab === tab));
    document.querySelectorAll(".tab-content").forEach(t => t.classList.toggle("active", t.id === tab + "-tab"));
    // Move indicator
    if (indicator) {
        const activeTab = document.querySelector(`.tab[data-tab="${tab}"]`);
        if (activeTab) {
            const bar = activeTab.parentElement;
            const barRect = bar.getBoundingClientRect();
            const tabRect = activeTab.getBoundingClientRect();
            indicator.style.left = (tabRect.left - barRect.left) + "px";
            indicator.style.width = tabRect.width + "px";
        }
    }
    updateUI();
}

// ========== Global Update ==========
function updateUI() {
    renderBrowse();
    renderCompare();
    renderFavorites();
}

// ========== Init ==========
document.addEventListener("DOMContentLoaded", () => {
    // Tab indicator
    const tabBar = document.querySelector(".tab-bar");
    const indicator = document.createElement("div");
    indicator.className = "tab-indicator";
    tabBar.appendChild(indicator);

    // Tab switching
    document.querySelectorAll(".tab").forEach(tab => {
        tab.addEventListener("click", () => switchTab(tab.dataset.tab));
    });

    // Position indicator on load
    requestAnimationFrame(() => switchTab(state.activeTab || "browse"));

    // Search & filter
    document.getElementById("search-input").addEventListener("input", renderBrowse);
    document.getElementById("filter-brand").addEventListener("change", renderBrowse);
    document.getElementById("filter-type").addEventListener("change", renderBrowse);
    document.getElementById("filter-sort").addEventListener("change", renderBrowse);
    document.getElementById("filter-year").addEventListener("change", renderBrowse);

    // Modal close
    document.getElementById("modal-back").addEventListener("click", closeModal);
    document.getElementById("car-modal").addEventListener("click", (e) => {
        if (e.target === e.currentTarget) closeModal();
    });

    // Swipe down to close modal
    let touchStartY = 0;
    const modalContent = document.querySelector(".modal-content");
    modalContent.addEventListener("touchstart", (e) => {
        touchStartY = e.touches[0].clientY;
    }, { passive: true });
    modalContent.addEventListener("touchend", (e) => {
        const diff = e.changedTouches[0].clientY - touchStartY;
        if (diff > 100 && modalContent.scrollTop <= 0) closeModal();
    }, { passive: true });

    updateUI();
});
