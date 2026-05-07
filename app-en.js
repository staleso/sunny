// ========== Norwegian Electric Car Database ==========
// Prices in NOK (approximate Norwegian market prices 2025/2026)
// Range: WLTP km | 0-100 km/h times | Power in hp
const CARS = [
    // ===== BMW =====
    {
        id: 1, make: "BMW", model: "iX1 xDrive30", year: 2025, price: 529900,
        type: "suv", hp: 313, kwh: 64.7, zeroToHundred: 5.6, seats: 5,
        drivetrain: "AWD", battery: "64.7 kWh", range: 440,
        length: 4500, width: 1845, height: 1616, weight: 2060, trunk: 490,
        emoji: "⚡", color: "#1a1a2e", segment: "Compact SUV"
    },
    {
        id: 2, make: "BMW", model: "iX3", year: 2025, price: 599900,
        type: "suv", hp: 286, kwh: 80, zeroToHundred: 6.8, seats: 5,
        drivetrain: "RWD", battery: "80 kWh", range: 460,
        length: 4734, width: 1891, height: 1668, weight: 2185, trunk: 510,
        emoji: "⚡", color: "#16213e", segment: "Mid-size SUV"
    },
    {
        id: 72, make: "BMW", model: "iX3 50 xDrive Fully Charged", year: 2026, price: 679900,
        type: "suv", hp: 463, kwh: 108, zeroToHundred: 4.9, seats: 5,
        drivetrain: "AWD", battery: "108 kWh", range: 805,
        length: 4734, width: 1920, height: 1660, weight: 2310, trunk: 510,
        emoji: "⚡", color: "#16213e", segment: "Mid-size SUV"
    },
    {
        id: 73, make: "BMW", model: "iX3 50 xDrive M Sport", year: 2026, price: 749900,
        type: "suv", hp: 463, kwh: 108, zeroToHundred: 4.9, seats: 5,
        drivetrain: "AWD", battery: "108 kWh", range: 805,
        length: 4734, width: 1920, height: 1660, weight: 2310, trunk: 510,
        emoji: "⚡", color: "#16213e", segment: "Mid-size SUV"
    },
    {
        id: 74, make: "BMW", model: "iX3 50 xDrive M Sport Pro", year: 2026, price: 892000,
        type: "suv", hp: 463, kwh: 108, zeroToHundred: 4.9, seats: 5,
        drivetrain: "AWD", battery: "108 kWh", range: 805,
        length: 4734, width: 1920, height: 1660, weight: 2310, trunk: 510,
        emoji: "⚡", color: "#16213e", segment: "Mid-size SUV"
    },
    {
        id: 100, make: "BMW", model: "i3 50 xDrive Sedan", year: 2026, price: 579900,
        type: "sedan", hp: 469, kwh: 108, zeroToHundred: 4.0, seats: 5,
        drivetrain: "AWD", battery: "108 kWh", range: 900,
        length: 4760, width: 1865, height: 1480, weight: 2150, trunk: 480,
        emoji: "⚡", color: "#2e1a1a", segment: "Mid-size Sedan"
    },
    {
        id: 3, make: "BMW", model: "iX xDrive40", year: 2025, price: 799900,
        type: "suv", hp: 326, kwh: 76.6, zeroToHundred: 6.1, seats: 5,
        drivetrain: "AWD", battery: "76.6 kWh", range: 425,
        length: 4953, width: 1967, height: 1696, weight: 2440, trunk: 500,
        emoji: "⚡", color: "#1b2838", segment: "Large SUV"
    },
    {
        id: 4, make: "BMW", model: "iX xDrive50", year: 2025, price: 999900,
        type: "suv", hp: 523, kwh: 111.5, zeroToHundred: 4.6, seats: 5,
        drivetrain: "AWD", battery: "111.5 kWh", range: 630,
        length: 4953, width: 1967, height: 1696, weight: 2510, trunk: 500,
        emoji: "⚡", color: "#1a2e2e", segment: "Large SUV"
    },
    {
        id: 5, make: "BMW", model: "i4 eDrive40", year: 2025, price: 569900,
        type: "sedan", hp: 340, kwh: 83.9, zeroToHundred: 5.7, seats: 5,
        drivetrain: "RWD", battery: "83.9 kWh", range: 590,
        length: 4783, width: 1852, height: 1448, weight: 2125, trunk: 470,
        emoji: "⚡", color: "#1a1a2e", segment: "Mid-size Sedan"
    },
    {
        id: 6, make: "BMW", model: "i4 M50", year: 2025, price: 729900,
        type: "sedan", hp: 544, kwh: 83.9, zeroToHundred: 3.9, seats: 5,
        drivetrain: "AWD", battery: "83.9 kWh", range: 520,
        length: 4783, width: 1852, height: 1448, weight: 2215, trunk: 470,
        emoji: "⚡", color: "#2d1b2e", segment: "Performance Sedan"
    },
    {
        id: 71, make: "BMW", model: "i4 M60", year: 2025, price: 849900,
        type: "sedan", hp: 619, kwh: 83.9, zeroToHundred: 3.5, seats: 5,
        drivetrain: "AWD", battery: "83.9 kWh", range: 490,
        length: 4783, width: 1852, height: 1448, weight: 2275, trunk: 470,
        emoji: "⚡", color: "#2d1b2e", segment: "Performance Sedan"
    },
    {
        id: 7, make: "BMW", model: "i5 eDrive40", year: 2025, price: 659900,
        type: "sedan", hp: 340, kwh: 83.9, zeroToHundred: 6.0, seats: 5,
        drivetrain: "RWD", battery: "83.9 kWh", range: 580,
        length: 5060, width: 1900, height: 1505, weight: 2210, trunk: 490,
        emoji: "⚡", color: "#1b2e1b", segment: "Executive Sedan"
    },
    {
        id: 8, make: "BMW", model: "i7 xDrive60", year: 2025, price: 1299900,
        type: "sedan", hp: 544, kwh: 101.7, zeroToHundred: 4.7, seats: 5,
        drivetrain: "AWD", battery: "101.7 kWh", range: 590,
        length: 5391, width: 1950, height: 1544, weight: 2640, trunk: 500,
        emoji: "⚡", color: "#2e2e1a", segment: "Luxury Sedan"
    },

    // ===== AUDI =====
    {
        id: 9, make: "Audi", model: "Q4 e-tron 40", year: 2025, price: 479900,
        type: "suv", hp: 204, kwh: 77, zeroToHundred: 8.5, seats: 5,
        drivetrain: "RWD", battery: "77 kWh", range: 520,
        length: 4588, width: 1865, height: 1632, weight: 2060, trunk: 520,
        emoji: "⚡", color: "#1a1a2e", segment: "Compact SUV"
    },
    {
        id: 10, make: "Audi", model: "Q4 e-tron 50 quattro", year: 2025, price: 559900,
        type: "suv", hp: 299, kwh: 77, zeroToHundred: 6.2, seats: 5,
        drivetrain: "AWD", battery: "77 kWh", range: 490,
        length: 4588, width: 1865, height: 1632, weight: 2135, trunk: 520,
        emoji: "⚡", color: "#16213e", segment: "Compact SUV"
    },
    {
        id: 11, make: "Audi", model: "Q6 e-tron quattro", year: 2025, price: 699900,
        type: "suv", hp: 387, kwh: 100, zeroToHundred: 5.9, seats: 5,
        drivetrain: "AWD", battery: "100 kWh", range: 625,
        length: 4771, width: 1939, height: 1648, weight: 2325, trunk: 526,
        emoji: "⚡", color: "#1b2838", segment: "Mid-size SUV"
    },
    {
        id: 12, make: "Audi", model: "Q8 e-tron 55 quattro", year: 2025, price: 849900,
        type: "suv", hp: 408, kwh: 114, zeroToHundred: 5.6, seats: 5,
        drivetrain: "AWD", battery: "114 kWh", range: 580,
        length: 4915, width: 1937, height: 1633, weight: 2595, trunk: 569,
        emoji: "⚡", color: "#1a2e2e", segment: "Large SUV"
    },
    {
        id: 13, make: "Audi", model: "e-tron GT quattro", year: 2025, price: 1099900,
        type: "sedan", hp: 530, kwh: 97, zeroToHundred: 3.6, seats: 4,
        drivetrain: "AWD", battery: "97 kWh", range: 490,
        length: 4989, width: 1964, height: 1414, weight: 2340, trunk: 405,
        emoji: "⚡", color: "#2d1b2e", segment: "Performance Sedan"
    },
    {
        id: 14, make: "Audi", model: "A6 e-tron", year: 2026, price: 649900,
        type: "sedan", hp: 381, kwh: 100, zeroToHundred: 5.4, seats: 5,
        drivetrain: "AWD", battery: "100 kWh", range: 700,
        length: 4928, width: 1923, height: 1527, weight: 2270, trunk: 502,
        emoji: "⚡", color: "#1b2e1b", segment: "Executive Sedan"
    },

    // ===== MERCEDES-BENZ =====
    {
        id: 15, make: "Mercedes", model: "EQA 250+", year: 2025, price: 499900,
        type: "suv", hp: 190, kwh: 70.5, zeroToHundred: 8.6, seats: 5,
        drivetrain: "FWD", battery: "70.5 kWh", range: 528,
        length: 4463, width: 1834, height: 1620, weight: 2055, trunk: 340,
        emoji: "⚡", color: "#1a1a2e", segment: "Compact SUV"
    },
    {
        id: 16, make: "Mercedes", model: "EQB 250+", year: 2025, price: 539900,
        type: "suv", hp: 190, kwh: 70.5, zeroToHundred: 8.9, seats: 7,
        drivetrain: "FWD", battery: "70.5 kWh", range: 505,
        length: 4684, width: 1834, height: 1701, weight: 2175, trunk: 495,
        emoji: "⚡", color: "#16213e", segment: "Compact SUV"
    },
    {
        id: 17, make: "Mercedes", model: "EQC 400 4MATIC", year: 2025, price: 649900,
        type: "suv", hp: 408, kwh: 80, zeroToHundred: 5.1, seats: 5,
        drivetrain: "AWD", battery: "80 kWh", range: 430,
        length: 4762, width: 1884, height: 1624, weight: 2420, trunk: 500,
        emoji: "⚡", color: "#1b2838", segment: "Mid-size SUV"
    },
    {
        id: 75, make: "Mercedes", model: "GLC 400 4MATIC", year: 2026, price: 699900,
        type: "suv", hp: 483, kwh: 94.4, zeroToHundred: 4.3, seats: 5,
        drivetrain: "AWD", battery: "94.4 kWh", range: 702,
        length: 4845, width: 1913, height: 1644, weight: 2430, trunk: 520,
        emoji: "⚡", color: "#2e1a1a", segment: "Mid-size SUV"
    },
    {
        id: 18, make: "Mercedes", model: "EQE 350+", year: 2025, price: 749900,
        type: "sedan", hp: 292, kwh: 96, zeroToHundred: 6.4, seats: 5,
        drivetrain: "RWD", battery: "96 kWh", range: 620,
        length: 4946, width: 1906, height: 1503, weight: 2355, trunk: 430,
        emoji: "⚡", color: "#1a2e2e", segment: "Executive Sedan"
    },
    {
        id: 19, make: "Mercedes", model: "EQE SUV 350+", year: 2025, price: 819900,
        type: "suv", hp: 292, kwh: 96, zeroToHundred: 6.6, seats: 5,
        drivetrain: "RWD", battery: "96 kWh", range: 590,
        length: 4863, width: 1940, height: 1686, weight: 2510, trunk: 520,
        emoji: "⚡", color: "#2d1b2e", segment: "Large SUV"
    },
    {
        id: 20, make: "Mercedes", model: "EQS 450+", year: 2025, price: 1099900,
        type: "sedan", hp: 360, kwh: 118, zeroToHundred: 5.8, seats: 5,
        drivetrain: "RWD", battery: "118 kWh", range: 770,
        length: 5216, width: 1926, height: 1512, weight: 2480, trunk: 610,
        emoji: "⚡", color: "#1b2e1b", segment: "Luxury Sedan"
    },
    {
        id: 21, make: "Mercedes", model: "EQS SUV 450+", year: 2025, price: 1199900,
        type: "suv", hp: 360, kwh: 118, zeroToHundred: 6.0, seats: 7,
        drivetrain: "RWD", battery: "118 kWh", range: 670,
        length: 5125, width: 1959, height: 1718, weight: 2710, trunk: 565,
        emoji: "⚡", color: "#2e2e1a", segment: "Luxury SUV"
    },

    // ===== PORSCHE =====
    {
        id: 22, make: "Porsche", model: "Taycan", year: 2025, price: 899900,
        type: "sedan", hp: 408, kwh: 93.4, zeroToHundred: 4.8, seats: 4,
        drivetrain: "RWD", battery: "93.4 kWh", range: 590,
        length: 4963, width: 1966, height: 1381, weight: 2130, trunk: 407,
        emoji: "⚡", color: "#2e1a1a", segment: "Performance Sedan"
    },
    {
        id: 23, make: "Porsche", model: "Taycan 4S", year: 2025, price: 1049900,
        type: "sedan", hp: 530, kwh: 93.4, zeroToHundred: 3.7, seats: 4,
        drivetrain: "AWD", battery: "93.4 kWh", range: 560,
        length: 4963, width: 1966, height: 1381, weight: 2215, trunk: 407,
        emoji: "⚡", color: "#2d1b2e", segment: "Performance Sedan"
    },
    {
        id: 24, make: "Porsche", model: "Taycan Turbo", year: 2025, price: 1449900,
        type: "sedan", hp: 680, kwh: 97, zeroToHundred: 3.2, seats: 4,
        drivetrain: "AWD", battery: "97 kWh", range: 550,
        length: 4963, width: 1966, height: 1381, weight: 2290, trunk: 407,
        emoji: "⚡", color: "#1a1a2e", segment: "Performance Sedan"
    },
    {
        id: 78, make: "Porsche", model: "Taycan Turbo S", year: 2025, price: 1749900,
        type: "sedan", hp: 775, kwh: 97, zeroToHundred: 2.4, seats: 4,
        drivetrain: "AWD", battery: "97 kWh", range: 630,
        length: 4963, width: 1966, height: 1381, weight: 2345, trunk: 407,
        emoji: "⚡", color: "#2e1a1a", segment: "Performance Sedan"
    },
    {
        id: 79, make: "Porsche", model: "Taycan 4 Cross Turismo", year: 2025, price: 1049900,
        type: "wagon", hp: 408, kwh: 93.4, zeroToHundred: 4.7, seats: 4,
        drivetrain: "AWD", battery: "93.4 kWh", range: 490,
        length: 4974, width: 1967, height: 1395, weight: 2295, trunk: 446,
        emoji: "⚡", color: "#1b2e1b", segment: "Performance Wagon"
    },
    {
        id: 80, make: "Porsche", model: "Taycan Turbo S Cross Turismo", year: 2025, price: 1799900,
        type: "wagon", hp: 775, kwh: 97, zeroToHundred: 2.5, seats: 4,
        drivetrain: "AWD", battery: "97 kWh", range: 500,
        length: 4974, width: 1967, height: 1395, weight: 2370, trunk: 446,
        emoji: "⚡", color: "#2e2e1a", segment: "Performance Wagon"
    },
    {
        id: 81, make: "Porsche", model: "Taycan GTS Sport Turismo", year: 2025, price: 1596300,
        type: "wagon", hp: 690, kwh: 97, zeroToHundred: 3.1, seats: 4,
        drivetrain: "AWD", battery: "97 kWh", range: 570,
        length: 4963, width: 1966, height: 1395, weight: 2310, trunk: 446,
        emoji: "⚡", color: "#16213e", segment: "Performance Wagon"
    },
    {
        id: 82, make: "Porsche", model: "Taycan Turbo S Sport Turismo", year: 2025, price: 1749900,
        type: "wagon", hp: 775, kwh: 97, zeroToHundred: 2.4, seats: 4,
        drivetrain: "AWD", battery: "97 kWh", range: 600,
        length: 4963, width: 1966, height: 1395, weight: 2350, trunk: 446,
        emoji: "⚡", color: "#2d1b2e", segment: "Performance Wagon"
    },
    {
        id: 25, make: "Porsche", model: "Macan Electric", year: 2025, price: 849900,
        type: "suv", hp: 408, kwh: 100, zeroToHundred: 5.2, seats: 5,
        drivetrain: "AWD", battery: "100 kWh", range: 613,
        length: 4784, width: 1938, height: 1624, weight: 2405, trunk: 540,
        emoji: "⚡", color: "#16213e", segment: "Mid-size SUV"
    },
    {
        id: 26, make: "Porsche", model: "Macan Electric 4S", year: 2025, price: 999900,
        type: "suv", hp: 516, kwh: 100, zeroToHundred: 4.1, seats: 5,
        drivetrain: "AWD", battery: "100 kWh", range: 590,
        length: 4784, width: 1938, height: 1624, weight: 2405, trunk: 540,
        emoji: "⚡", color: "#1b2838", segment: "Performance SUV"
    },
    {
        id: 76, make: "Porsche", model: "Cayenne Electric", year: 2026, price: 1116400,
        type: "suv", hp: 408, kwh: 113, zeroToHundred: 4.5, seats: 5,
        drivetrain: "AWD", battery: "113 kWh", range: 643,
        length: 4985, width: 1980, height: 1674, weight: 2525, trunk: 621,
        emoji: "⚡", color: "#2e2e1a", segment: "Large SUV"
    },
    {
        id: 101, make: "Porsche", model: "Cayenne S Electric", year: 2026, price: 1389000,
        type: "suv", hp: 544, kwh: 113, zeroToHundred: 3.8, seats: 5,
        drivetrain: "AWD", battery: "113 kWh", range: 653,
        length: 4985, width: 1980, height: 1674, weight: 2565, trunk: 621,
        emoji: "⚡", color: "#2e2e1a", segment: "Large SUV"
    },
    {
        id: 77, make: "Porsche", model: "Cayenne Turbo Electric", year: 2026, price: 1767100,
        type: "suv", hp: 1156, kwh: 113, zeroToHundred: 2.5, seats: 5,
        drivetrain: "AWD", battery: "113 kWh", range: 623,
        length: 4985, width: 1980, height: 1674, weight: 2600, trunk: 621,
        emoji: "⚡", color: "#1a1a2e", segment: "Performance SUV"
    },

    // ===== TESLA =====
    {
        id: 27, make: "Tesla", model: "Model 3 Long Range", year: 2025, price: 449900,
        type: "sedan", hp: 366, kwh: 75, zeroToHundred: 4.4, seats: 5,
        drivetrain: "AWD", battery: "75 kWh", range: 629,
        length: 4720, width: 1849, height: 1441, weight: 1830, trunk: 594,
        emoji: "⚡", color: "#1a1a2e", segment: "Mid-size Sedan"
    },
    {
        id: 28, make: "Tesla", model: "Model 3 Performance", year: 2025, price: 529900,
        type: "sedan", hp: 460, kwh: 75, zeroToHundred: 3.1, seats: 5,
        drivetrain: "AWD", battery: "75 kWh", range: 528,
        length: 4720, width: 1849, height: 1441, weight: 1836, trunk: 594,
        emoji: "⚡", color: "#2d1b2e", segment: "Performance Sedan"
    },
    {
        id: 29, make: "Tesla", model: "Model Y Long Range", year: 2025, price: 479900,
        type: "suv", hp: 366, kwh: 75, zeroToHundred: 5.0, seats: 5,
        drivetrain: "AWD", battery: "75 kWh", range: 533,
        length: 4751, width: 1921, height: 1624, weight: 1979, trunk: 854,
        emoji: "⚡", color: "#16213e", segment: "Mid-size SUV"
    },
    {
        id: 30, make: "Tesla", model: "Model Y Performance", year: 2025, price: 559900,
        type: "suv", hp: 460, kwh: 75, zeroToHundred: 3.7, seats: 5,
        drivetrain: "AWD", battery: "75 kWh", range: 514,
        length: 4751, width: 1921, height: 1624, weight: 1979, trunk: 854,
        emoji: "⚡", color: "#1b2838", segment: "Performance SUV"
    },
    {
        id: 31, make: "Tesla", model: "Model S Long Range", year: 2025, price: 899900,
        type: "sedan", hp: 670, kwh: 100, zeroToHundred: 3.2, seats: 5,
        drivetrain: "AWD", battery: "100 kWh", range: 634,
        length: 4970, width: 1964, height: 1445, weight: 2162, trunk: 793,
        emoji: "⚡", color: "#1b2e1b", segment: "Luxury Sedan"
    },
    {
        id: 32, make: "Tesla", model: "Model X Long Range", year: 2025, price: 1049900,
        type: "suv", hp: 670, kwh: 100, zeroToHundred: 3.9, seats: 7,
        drivetrain: "AWD", battery: "100 kWh", range: 576,
        length: 5037, width: 1999, height: 1684, weight: 2352, trunk: 2158,
        emoji: "⚡", color: "#2e2e1a", segment: "Luxury SUV"
    },

    // ===== VOLKSWAGEN =====
    {
        id: 33, make: "Volkswagen", model: "ID.3 Pro S", year: 2025, price: 389900,
        type: "hatchback", hp: 204, kwh: 77, zeroToHundred: 7.9, seats: 5,
        drivetrain: "RWD", battery: "77 kWh", range: 560,
        length: 4261, width: 1809, height: 1568, weight: 1870, trunk: 385,
        emoji: "⚡", color: "#1a1a2e", segment: "Compact"
    },
    {
        id: 34, make: "Volkswagen", model: "ID.4 Pro S", year: 2025, price: 469900,
        type: "suv", hp: 286, kwh: 77, zeroToHundred: 6.7, seats: 5,
        drivetrain: "RWD", battery: "77 kWh", range: 540,
        length: 4584, width: 1852, height: 1634, weight: 2124, trunk: 543,
        emoji: "⚡", color: "#16213e", segment: "Compact SUV"
    },
    {
        id: 35, make: "Volkswagen", model: "ID.5 GTX", year: 2025, price: 549900,
        type: "suv", hp: 340, kwh: 77, zeroToHundred: 5.4, seats: 5,
        drivetrain: "AWD", battery: "77 kWh", range: 500,
        length: 4599, width: 1852, height: 1615, weight: 2173, trunk: 549,
        emoji: "⚡", color: "#1b2838", segment: "Coupe SUV"
    },
    {
        id: 36, make: "Volkswagen", model: "ID.7 Pro S", year: 2025, price: 569900,
        type: "sedan", hp: 286, kwh: 86, zeroToHundred: 6.5, seats: 5,
        drivetrain: "RWD", battery: "86 kWh", range: 700,
        length: 4961, width: 1862, height: 1536, weight: 2160, trunk: 532,
        emoji: "⚡", color: "#1a2e2e", segment: "Mid-size Sedan"
    },
    {
        id: 37, make: "Volkswagen", model: "ID. Buzz Pro", year: 2025, price: 599900,
        type: "van", hp: 286, kwh: 86, zeroToHundred: 7.9, seats: 7,
        drivetrain: "RWD", battery: "86 kWh", range: 460,
        length: 4712, width: 1985, height: 1927, weight: 2469, trunk: 1121,
        emoji: "⚡", color: "#2e2e1a", segment: "MPV"
    },

    // ===== VOLVO =====
    {
        id: 38, make: "Volvo", model: "EX30 Single Motor", year: 2025, price: 369900,
        type: "suv", hp: 272, kwh: 69, zeroToHundred: 5.3, seats: 5,
        drivetrain: "RWD", battery: "69 kWh", range: 476,
        length: 4233, width: 1837, height: 1550, weight: 1790, trunk: 318,
        emoji: "⚡", color: "#1a1a2e", segment: "Small SUV"
    },
    {
        id: 39, make: "Volvo", model: "EX30 Twin Motor", year: 2025, price: 439900,
        type: "suv", hp: 428, kwh: 69, zeroToHundred: 3.6, seats: 5,
        drivetrain: "AWD", battery: "69 kWh", range: 450,
        length: 4233, width: 1837, height: 1550, weight: 1830, trunk: 318,
        emoji: "⚡", color: "#16213e", segment: "Small SUV"
    },
    {
        id: 40, make: "Volvo", model: "EC40 Recharge", year: 2025, price: 499900,
        type: "suv", hp: 252, kwh: 78, zeroToHundred: 7.4, seats: 5,
        drivetrain: "RWD", battery: "78 kWh", range: 478,
        length: 4440, width: 1873, height: 1591, weight: 2110, trunk: 413,
        emoji: "⚡", color: "#1b2838", segment: "Coupe SUV"
    },
    {
        id: 41, make: "Volvo", model: "EX40 Recharge", year: 2025, price: 479900,
        type: "suv", hp: 252, kwh: 78, zeroToHundred: 7.4, seats: 5,
        drivetrain: "RWD", battery: "78 kWh", range: 476,
        length: 4425, width: 1873, height: 1651, weight: 2100, trunk: 452,
        emoji: "⚡", color: "#1a2e2e", segment: "Compact SUV"
    },
    {
        id: 42, make: "Volvo", model: "EX90 Twin Motor", year: 2025, price: 899900,
        type: "suv", hp: 408, kwh: 111, zeroToHundred: 5.9, seats: 7,
        drivetrain: "AWD", battery: "111 kWh", range: 580,
        length: 5037, width: 1964, height: 1744, weight: 2818, trunk: 655,
        emoji: "⚡", color: "#1b2e1b", segment: "Large SUV"
    },

    // ===== HYUNDAI =====
    {
        id: 43, make: "Hyundai", model: "Kona Electric 65 kWh", year: 2025, price: 369900,
        type: "suv", hp: 218, kwh: 65.4, zeroToHundred: 7.8, seats: 5,
        drivetrain: "FWD", battery: "65.4 kWh", range: 490,
        length: 4355, width: 1825, height: 1575, weight: 1740, trunk: 466,
        emoji: "⚡", color: "#1a1a2e", segment: "Small SUV"
    },
    {
        id: 44, make: "Hyundai", model: "IONIQ 5 Long Range AWD", year: 2025, price: 499900,
        type: "suv", hp: 325, kwh: 84, zeroToHundred: 5.1, seats: 5,
        drivetrain: "AWD", battery: "84 kWh", range: 507,
        length: 4635, width: 1890, height: 1605, weight: 2100, trunk: 527,
        emoji: "⚡", color: "#16213e", segment: "Mid-size SUV"
    },
    {
        id: 45, make: "Hyundai", model: "IONIQ 6 Long Range AWD", year: 2025, price: 519900,
        type: "sedan", hp: 325, kwh: 77.4, zeroToHundred: 5.1, seats: 5,
        drivetrain: "AWD", battery: "77.4 kWh", range: 583,
        length: 4855, width: 1880, height: 1495, weight: 2060, trunk: 401,
        emoji: "⚡", color: "#1b2838", segment: "Mid-size Sedan"
    },

    // ===== KIA =====
    {
        id: 46, make: "Kia", model: "Niro EV", year: 2025, price: 399900,
        type: "suv", hp: 204, kwh: 64.8, zeroToHundred: 7.8, seats: 5,
        drivetrain: "FWD", battery: "64.8 kWh", range: 463,
        length: 4420, width: 1825, height: 1570, weight: 1791, trunk: 475,
        emoji: "⚡", color: "#1a1a2e", segment: "Compact SUV"
    },
    {
        id: 47, make: "Kia", model: "EV6 Long Range AWD", year: 2025, price: 529900,
        type: "suv", hp: 325, kwh: 77.4, zeroToHundred: 5.2, seats: 5,
        drivetrain: "AWD", battery: "77.4 kWh", range: 506,
        length: 4695, width: 1890, height: 1550, weight: 2090, trunk: 490,
        emoji: "⚡", color: "#16213e", segment: "Mid-size SUV"
    },
    {
        id: 48, make: "Kia", model: "EV9 Long Range AWD", year: 2025, price: 699900,
        type: "suv", hp: 384, kwh: 99.8, zeroToHundred: 5.3, seats: 7,
        drivetrain: "AWD", battery: "99.8 kWh", range: 501,
        length: 5010, width: 1980, height: 1755, weight: 2614, trunk: 828,
        emoji: "⚡", color: "#1b2838", segment: "Large SUV"
    },

    // ===== SKODA =====
    {
        id: 49, make: "Skoda", model: "Enyaq iV 80", year: 2025, price: 449900,
        type: "suv", hp: 204, kwh: 77, zeroToHundred: 8.5, seats: 5,
        drivetrain: "RWD", battery: "77 kWh", range: 545,
        length: 4649, width: 1879, height: 1616, weight: 2104, trunk: 585,
        emoji: "⚡", color: "#1a2e2e", segment: "Compact SUV"
    },
    {
        id: 50, make: "Skoda", model: "Enyaq Coupe RS", year: 2025, price: 579900,
        type: "suv", hp: 340, kwh: 77, zeroToHundred: 5.5, seats: 5,
        drivetrain: "AWD", battery: "77 kWh", range: 505,
        length: 4653, width: 1879, height: 1607, weight: 2166, trunk: 570,
        emoji: "⚡", color: "#2d1b2e", segment: "Coupe SUV"
    },

    // ===== POLESTAR =====
    {
        id: 51, make: "Polestar", model: "2 Long Range Dual Motor", year: 2025, price: 499900,
        type: "sedan", hp: 421, kwh: 78, zeroToHundred: 4.2, seats: 5,
        drivetrain: "AWD", battery: "78 kWh", range: 487,
        length: 4606, width: 1859, height: 1482, weight: 2113, trunk: 405,
        emoji: "⚡", color: "#1a1a2e", segment: "Mid-size Sedan"
    },
    {
        id: 52, make: "Polestar", model: "3 Long Range Dual Motor", year: 2025, price: 799900,
        type: "suv", hp: 489, kwh: 111, zeroToHundred: 4.7, seats: 5,
        drivetrain: "AWD", battery: "111 kWh", range: 560,
        length: 4900, width: 2024, height: 1614, weight: 2584, trunk: 484,
        emoji: "⚡", color: "#16213e", segment: "Large SUV"
    },
    {
        id: 53, make: "Polestar", model: "4 Long Range Dual Motor", year: 2025, price: 649900,
        type: "suv", hp: 544, kwh: 100, zeroToHundred: 3.8, seats: 5,
        drivetrain: "AWD", battery: "100 kWh", range: 560,
        length: 4839, width: 2008, height: 1544, weight: 2435, trunk: 526,
        emoji: "⚡", color: "#1b2838", segment: "Coupe SUV"
    },

    // ===== NIO =====
    {
        id: 54, make: "NIO", model: "ET5 Touring", year: 2025, price: 449900,
        type: "wagon", hp: 490, kwh: 100, zeroToHundred: 4.0, seats: 5,
        drivetrain: "AWD", battery: "100 kWh", range: 560,
        length: 4790, width: 1960, height: 1499, weight: 2250, trunk: 450,
        emoji: "⚡", color: "#1b2e1b", segment: "Mid-size Wagon"
    },
    {
        id: 55, make: "NIO", model: "EL6", year: 2025, price: 539900,
        type: "suv", hp: 490, kwh: 100, zeroToHundred: 4.5, seats: 5,
        drivetrain: "AWD", battery: "100 kWh", range: 510,
        length: 4854, width: 1995, height: 1703, weight: 2290, trunk: 579,
        emoji: "⚡", color: "#2e2e1a", segment: "Mid-size SUV"
    },
    {
        id: 56, make: "NIO", model: "EL7", year: 2025, price: 639900,
        type: "suv", hp: 653, kwh: 100, zeroToHundred: 3.9, seats: 5,
        drivetrain: "AWD", battery: "100 kWh", range: 485,
        length: 4912, width: 1987, height: 1720, weight: 2379, trunk: 658,
        emoji: "⚡", color: "#2e1a1a", segment: "Mid-size SUV"
    },

    // ===== TOYOTA =====
    {
        id: 57, make: "Toyota", model: "bZ4X AWD", year: 2025, price: 449900,
        type: "suv", hp: 218, kwh: 71.4, zeroToHundred: 6.9, seats: 5,
        drivetrain: "AWD", battery: "71.4 kWh", range: 411,
        length: 4690, width: 1860, height: 1650, weight: 2005, trunk: 452,
        emoji: "⚡", color: "#1a1a2e", segment: "Mid-size SUV"
    },

    // ===== FORD =====
    {
        id: 58, make: "Ford", model: "Mustang Mach-E Extended AWD", year: 2025, price: 529900,
        type: "suv", hp: 351, kwh: 91, zeroToHundred: 5.4, seats: 5,
        drivetrain: "AWD", battery: "91 kWh", range: 540,
        length: 4739, width: 1881, height: 1624, weight: 2198, trunk: 402,
        emoji: "⚡", color: "#2e1a1a", segment: "Mid-size SUV"
    },
    {
        id: 59, make: "Ford", model: "Explorer Electric AWD", year: 2025, price: 499900,
        type: "suv", hp: 340, kwh: 79, zeroToHundred: 5.3, seats: 5,
        drivetrain: "AWD", battery: "79 kWh", range: 530,
        length: 4468, width: 1872, height: 1637, weight: 2128, trunk: 536,
        emoji: "⚡", color: "#1b2838", segment: "Mid-size SUV"
    },

    // ===== XPENG =====
    {
        id: 60, make: "Xpeng", model: "G6", year: 2025, price: 449900,
        type: "suv", hp: 296, kwh: 87.5, zeroToHundred: 5.9, seats: 5,
        drivetrain: "RWD", battery: "87.5 kWh", range: 570,
        length: 4753, width: 1920, height: 1650, weight: 2095, trunk: 571,
        emoji: "⚡", color: "#1a2e2e", segment: "Mid-size SUV"
    },
    {
        id: 61, make: "Xpeng", model: "G9", year: 2025, price: 569900,
        type: "suv", hp: 551, kwh: 98, zeroToHundred: 3.9, seats: 5,
        drivetrain: "AWD", battery: "98 kWh", range: 520,
        length: 4891, width: 1937, height: 1680, weight: 2320, trunk: 660,
        emoji: "⚡", color: "#2d1b2e", segment: "Large SUV"
    },

    // ===== BYD =====
    {
        id: 62, make: "BYD", model: "Atto 3", year: 2025, price: 349900,
        type: "suv", hp: 204, kwh: 60.5, zeroToHundred: 7.3, seats: 5,
        drivetrain: "FWD", battery: "60.5 kWh", range: 420,
        length: 4455, width: 1875, height: 1615, weight: 1750, trunk: 440,
        emoji: "⚡", color: "#1a1a2e", segment: "Compact SUV"
    },
    {
        id: 63, make: "BYD", model: "Tang EV600", year: 2025, price: 569900,
        type: "suv", hp: 517, kwh: 108.8, zeroToHundred: 4.6, seats: 7,
        drivetrain: "AWD", battery: "108.8 kWh", range: 530,
        length: 4870, width: 1950, height: 1725, weight: 2489, trunk: 580,
        emoji: "⚡", color: "#16213e", segment: "Large SUV"
    },
    {
        id: 64, make: "BYD", model: "Seal", year: 2025, price: 439900,
        type: "sedan", hp: 313, kwh: 82.5, zeroToHundred: 5.9, seats: 5,
        drivetrain: "RWD", battery: "82.5 kWh", range: 570,
        length: 4800, width: 1875, height: 1460, weight: 2150, trunk: 400,
        emoji: "⚡", color: "#1b2838", segment: "Mid-size Sedan"
    },

    // ===== CUPRA =====
    {
        id: 65, make: "Cupra", model: "Born 77 kWh", year: 2025, price: 419900,
        type: "hatchback", hp: 231, kwh: 77, zeroToHundred: 7.0, seats: 5,
        drivetrain: "RWD", battery: "77 kWh", range: 540,
        length: 4322, width: 1809, height: 1540, weight: 1900, trunk: 385,
        emoji: "⚡", color: "#2e1a1a", segment: "Compact"
    },
    {
        id: 66, make: "Cupra", model: "Tavascan VZ", year: 2025, price: 559900,
        type: "suv", hp: 340, kwh: 77, zeroToHundred: 5.5, seats: 5,
        drivetrain: "AWD", battery: "77 kWh", range: 500,
        length: 4644, width: 1861, height: 1597, weight: 2188, trunk: 540,
        emoji: "⚡", color: "#2d1b2e", segment: "Coupe SUV"
    },

    // ===== RENAULT =====
    {
        id: 67, make: "Renault", model: "Megane E-Tech 60", year: 2025, price: 369900,
        type: "hatchback", hp: 220, kwh: 60, zeroToHundred: 7.4, seats: 5,
        drivetrain: "FWD", battery: "60 kWh", range: 450,
        length: 4200, width: 1768, height: 1505, weight: 1636, trunk: 440,
        emoji: "⚡", color: "#1b2e1b", segment: "Compact"
    },
    {
        id: 68, make: "Renault", model: "Scenic E-Tech 87", year: 2025, price: 449900,
        type: "suv", hp: 220, kwh: 87, zeroToHundred: 7.9, seats: 5,
        drivetrain: "FWD", battery: "87 kWh", range: 620,
        length: 4470, width: 1863, height: 1571, weight: 1871, trunk: 545,
        emoji: "⚡", color: "#2e2e1a", segment: "Compact SUV"
    },

    // ===== SMART =====
    {
        id: 69, make: "Smart", model: "#1 Pro+", year: 2025, price: 349900,
        type: "suv", hp: 272, kwh: 66, zeroToHundred: 6.7, seats: 5,
        drivetrain: "RWD", battery: "66 kWh", range: 420,
        length: 4270, width: 1822, height: 1636, weight: 1820, trunk: 323,
        emoji: "⚡", color: "#1a1a2e", segment: "Small SUV"
    },
    {
        id: 70, make: "Smart", model: "#3 BRABUS", year: 2025, price: 469900,
        type: "suv", hp: 428, kwh: 66, zeroToHundred: 3.7, seats: 5,
        drivetrain: "AWD", battery: "66 kWh", range: 400,
        length: 4400, width: 1844, height: 1556, weight: 1910, trunk: 370,
        emoji: "⚡", color: "#2e1a1a", segment: "Coupe SUV"
    },
    // ===== ELDRE MODELLER =====
    {
        id: 83, make: "Nissan", model: "Leaf e+ 62 kWh", year: 2022, price: 349900,
        type: "hatchback", hp: 217, kwh: 62, zeroToHundred: 6.9, seats: 5,
        drivetrain: "FWD", battery: "62 kWh", range: 385,
        length: 4490, width: 1788, height: 1530, weight: 1730, trunk: 435,
        emoji: "⚡", color: "#c3002f", segment: "Compact"
    },
    {
        id: 84, make: "Volkswagen", model: "e-Golf", year: 2020, price: 329900,
        type: "hatchback", hp: 136, kwh: 35.8, zeroToHundred: 9.6, seats: 5,
        drivetrain: "FWD", battery: "35.8 kWh", range: 231,
        length: 4270, width: 1799, height: 1450, weight: 1615, trunk: 341,
        emoji: "⚡", color: "#003399", segment: "Compact"
    },
    {
        id: 85, make: "Jaguar", model: "I-PACE EV400", year: 2023, price: 769900,
        type: "suv", hp: 400, kwh: 90, zeroToHundred: 4.8, seats: 5,
        drivetrain: "AWD", battery: "90 kWh", range: 470,
        length: 4682, width: 2011, height: 1565, weight: 2208, trunk: 505,
        emoji: "⚡", color: "#1a472a", segment: "Mid-size SUV"
    },
    {
        id: 86, make: "BMW", model: "i3 120Ah", year: 2022, price: 349900,
        type: "hatchback", hp: 170, kwh: 42.2, zeroToHundred: 7.3, seats: 4,
        drivetrain: "RWD", battery: "42.2 kWh", range: 310,
        length: 4006, width: 1775, height: 1600, weight: 1345, trunk: 260,
        emoji: "⚡", color: "#0066B1", segment: "City Car"
    },
    {
        id: 87, make: "Tesla", model: "Model 3 Standard Range Plus", year: 2021, price: 399900,
        type: "sedan", hp: 283, kwh: 60, zeroToHundred: 5.6, seats: 5,
        drivetrain: "RWD", battery: "60 kWh", range: 448,
        length: 4694, width: 1849, height: 1443, weight: 1745, trunk: 425,
        emoji: "⚡", color: "#CC0000", segment: "Mid-size Sedan"
    },
    {
        id: 88, make: "Hyundai", model: "IONIQ Electric 38 kWh", year: 2022, price: 319900,
        type: "sedan", hp: 136, kwh: 38.3, zeroToHundred: 9.9, seats: 5,
        drivetrain: "FWD", battery: "38.3 kWh", range: 311,
        length: 4470, width: 1820, height: 1450, weight: 1575, trunk: 357,
        emoji: "⚡", color: "#002C5F", segment: "Compact Sedan"
    },
    {
        id: 89, make: "Audi", model: "e-tron 55 quattro", year: 2023, price: 699900,
        type: "suv", hp: 408, kwh: 95, zeroToHundred: 5.7, seats: 5,
        drivetrain: "AWD", battery: "95 kWh", range: 441,
        length: 4901, width: 1935, height: 1629, weight: 2565, trunk: 660,
        emoji: "⚡", color: "#BB0A30", segment: "Large SUV"
    },
    {
        id: 90, make: "MG", model: "ZS EV Long Range", year: 2023, price: 299900,
        type: "suv", hp: 177, kwh: 72.6, zeroToHundred: 8.2, seats: 5,
        drivetrain: "FWD", battery: "72.6 kWh", range: 440,
        length: 4323, width: 1809, height: 1649, weight: 1760, trunk: 448,
        emoji: "⚡", color: "#D4171E", segment: "Compact SUV"
    },
    {
        id: 91, make: "Renault", model: "ZOE R135", year: 2022, price: 299900,
        type: "hatchback", hp: 135, kwh: 52, zeroToHundred: 9.5, seats: 5,
        drivetrain: "FWD", battery: "52 kWh", range: 395,
        length: 4087, width: 1787, height: 1562, weight: 1502, trunk: 338,
        emoji: "⚡", color: "#FFCC00", segment: "City Car"
    },
    {
        id: 92, make: "Tesla", model: "Model S P100D", year: 2020, price: 899900,
        type: "sedan", hp: 762, kwh: 100, zeroToHundred: 2.6, seats: 5,
        drivetrain: "AWD", battery: "100 kWh", range: 555,
        length: 4979, width: 1964, height: 1445, weight: 2241, trunk: 793,
        emoji: "⚡", color: "#CC0000", segment: "Luxury Sedan"
    },
    {
        id: 93, make: "Kia", model: "e-Niro 64 kWh", year: 2021, price: 379900,
        type: "suv", hp: 204, kwh: 64, zeroToHundred: 7.8, seats: 5,
        drivetrain: "FWD", battery: "64 kWh", range: 455,
        length: 4375, width: 1805, height: 1560, weight: 1791, trunk: 451,
        emoji: "⚡", color: "#05141F", segment: "Compact SUV"
    },
    {
        id: 94, make: "Mercedes", model: "EQC 400 4MATIC", year: 2021, price: 649900,
        type: "suv", hp: 408, kwh: 80, zeroToHundred: 5.1, seats: 5,
        drivetrain: "AWD", battery: "80 kWh", range: 374,
        length: 4762, width: 1884, height: 1624, weight: 2495, trunk: 500,
        emoji: "⚡", color: "#00ADEF", segment: "Mid-size SUV"
    },
    {
        id: 95, make: "Opel", model: "Mokka-e", year: 2023, price: 349900,
        type: "suv", hp: 136, kwh: 50, zeroToHundred: 9.0, seats: 5,
        drivetrain: "FWD", battery: "50 kWh", range: 338,
        length: 4151, width: 1791, height: 1531, weight: 1598, trunk: 350,
        emoji: "⚡", color: "#000000", segment: "Small SUV"
    },
    {
        id: 96, make: "Fiat", model: "500e La Prima", year: 2023, price: 319900,
        type: "hatchback", hp: 118, kwh: 42, zeroToHundred: 9.0, seats: 4,
        drivetrain: "FWD", battery: "42 kWh", range: 321,
        length: 3631, width: 1773, height: 1527, weight: 1365, trunk: 185,
        emoji: "⚡", color: "#8B0000", segment: "City Car"
    },
    {
        id: 97, make: "Volvo", model: "XC40 Recharge P8", year: 2022, price: 529900,
        type: "suv", hp: 408, kwh: 78, zeroToHundred: 4.9, seats: 5,
        drivetrain: "AWD", battery: "78 kWh", range: 418,
        length: 4425, width: 1873, height: 1651, weight: 2188, trunk: 452,
        emoji: "⚡", color: "#003057", segment: "Compact SUV"
    },
    {
        id: 98, make: "Ford", model: "Mustang Mach-E Standard Range", year: 2022, price: 449900,
        type: "suv", hp: 269, kwh: 75.7, zeroToHundred: 6.2, seats: 5,
        drivetrain: "RWD", battery: "75.7 kWh", range: 440,
        length: 4739, width: 1881, height: 1624, weight: 2100, trunk: 402,
        emoji: "⚡", color: "#003478", segment: "Mid-size SUV"
    },
    {
        id: 99, make: "Peugeot", model: "e-2008 GT", year: 2023, price: 379900,
        type: "suv", hp: 136, kwh: 50, zeroToHundred: 9.0, seats: 5,
        drivetrain: "FWD", battery: "50 kWh", range: 345,
        length: 4300, width: 1770, height: 1550, weight: 1623, trunk: 434,
        emoji: "⚡", color: "#1A237E", segment: "Small SUV"
    }
];

// ========== Country of origin ==========
var BRAND_COUNTRY = {
    "BMW": "Germany", "Audi": "Germany", "Mercedes": "Germany", "Porsche": "Germany",
    "Volkswagen": "Germany", "Opel": "Germany",
    "Tesla": "USA", "Ford": "USA",
    "Volvo": "Sweden", "Polestar": "Sweden",
    "Hyundai": "South Korea", "Kia": "South Korea",
    "Skoda": "Czech Republic",
    "Toyota": "Japan", "Nissan": "Japan",
    "Renault": "France", "Peugeot": "France",
    "NIO": "China", "Xpeng": "China", "BYD": "China", "MG": "China", "Smart": "China",
    "Cupra": "Spain", "Jaguar": "United Kingdom", "Fiat": "Italy"
};
var COUNTRY_FLAGS = {
    "Germany": "\u{1F1E9}\u{1F1EA}", "USA": "\u{1F1FA}\u{1F1F8}", "Sweden": "\u{1F1F8}\u{1F1EA}",
    "South Korea": "\u{1F1F0}\u{1F1F7}", "Czech Republic": "\u{1F1E8}\u{1F1FF}", "Japan": "\u{1F1EF}\u{1F1F5}",
    "France": "\u{1F1EB}\u{1F1F7}", "China": "\u{1F1E8}\u{1F1F3}", "Spain": "\u{1F1EA}\u{1F1F8}",
    "United Kingdom": "\u{1F1EC}\u{1F1E7}", "Italy": "\u{1F1EE}\u{1F1F9}"
};
function getCarCountry(car) { return BRAND_COUNTRY[car.make] || ""; }
function getCarCountryFlag(car) { var c = getCarCountry(car); return (COUNTRY_FLAGS[c] || "") + " " + c; }

// ========== EV-spec estimates ==========
// Estimated DC max charging (kW) based on make/model patterns.
// These are approximations — use car.chargeSpeed field for precise override.
function getChargeSpeed(car) {
    if (typeof car.chargeSpeed === "number") return car.chargeSpeed;
    const m = car.make, model = (car.model || "").toLowerCase();
    if (m === "Lucid") return 300;
    if (m === "Porsche" && model.includes("taycan")) return 270;
    if (m === "Audi" && model.includes("e-tron gt")) return 270;
    if (m === "Audi" && (model.includes("q6") || model.includes("a6 e-tron"))) return 270;
    if ((m === "Hyundai" || m === "Kia" || m === "Genesis") &&
        /(ioniq [56]|ev6|ev9|gv60|niro ev)/.test(model)) return 235;
    if (m === "Tesla") {
        if (model.includes("model s") || model.includes("model x")) return 250;
        return 250;
    }
    if (m === "BMW" && model.includes("ix")) return 195;
    if (m === "Mercedes" && /(eqs|eqe|eqxx)/.test(model)) return 200;
    if (m === "Volvo" && (model.includes("ex90") || model.includes("ex30"))) return 175;
    if (m === "Polestar") return 205;
    if (m === "Volkswagen" && model.startsWith("id")) return 175;
    if (m === "Skoda" && model.includes("enyaq")) return 175;
    if (m === "Cupra" && model.includes("tavascan")) return 175;
    if (m === "Nio") return 180;
    if (m === "Xpeng") return 180;
    if (m === "BYD") return 150;
    if (m === "MG") return 140;
    if (m === "Renault") return 135;
    if (m === "Peugeot" || m === "Opel" || m === "Fiat") return 100;
    if (m === "Nissan") return 100;
    if (m === "Smart") return 130;
    if (m === "Toyota") return 150;
    return 130;
}

// Estimated 10-80% DC fast charge time in minutes (estimated curve)
function getChargeTime10to80(car) {
    if (typeof car.chargeTime10to80 === "number") return car.chargeTime10to80;
    const speed = getChargeSpeed(car);
    const usableKwh = car.kwh * 0.95;
    const kwhNeeded = usableKwh * 0.7;
    // Assume avg sustained ~55% of peak, add 3 min buffer for tapering
    const avgKw = speed * 0.55;
    return Math.round((kwhNeeded / avgKw) * 60 + 3);
}

// Winter range = range * 0.65 (rough Norwegian winter estimate)
function getWinterRange(car) {
    if (typeof car.winterRange === "number") return car.winterRange;
    return Math.round(car.range * 0.65);
}

// Heat pump presence (modern EVs 2022+ typically have it, budget brands may not)
function hasHeatPump(car) {
    if (typeof car.heatPump === "boolean") return car.heatPump;
    const noHeatPumpBrands = ["Dacia"];
    if (noHeatPumpBrands.includes(car.make)) return false;
    if (car.year >= 2022) return true;
    return false;
}

// Braked trailer capacity (kg) — rough per type/segment
function getTrailerBraked(car) {
    if (typeof car.trailerBraked === "number") return car.trailerBraked;
    const m = car.make, model = (car.model || "").toLowerCase();
    // Known high-capacity tow-rated EVs
    if (/(ix|ex90|q8 e-tron|ev9|id\.?buzz|ariya|model x|model y|eqs suv|eqe suv)/.test(model)) return 2000;
    if (car.type === "suv" && car.hp >= 300) return 1800;
    if (car.type === "suv") return 1500;
    if (car.type === "wagon") return 1500;
    if (car.type === "van") return 1500;
    if (car.type === "sedan" && car.hp >= 300) return 1500;
    if (car.type === "sedan") return 1000;
    if (car.type === "hatchback") return 750;
    return 750;
}

function getTrailerUnbraked(car) {
    if (typeof car.trailerUnbraked === "number") return car.trailerUnbraked;
    return 750; // most EVs standard
}

// ========== Car Descriptions ==========
// Objective, factual descriptions keyed by "Make Model" or "Make BaseModel".
// getCarDescription() falls back from exact model to base model.
const CAR_DESCRIPTIONS = {
    "Porsche Taycan": "The Porsche Taycan is the brand's first fully electric car, positioned in the luxury sports sedan segment. It is built on an 800-volt architecture that provides short DC charging times and enables repeated full-throttle accelerations without noticeable performance loss. Range is moderate compared to competitors such as the Mercedes EQS and Lucid Air, while driving dynamics, chassis balance, and consistency during spirited driving are considered the model's greatest strengths. Cargo space and rear seat room are limited due to the low, sporty body; the Sport Turismo and Cross Turismo variants offer somewhat more practical utility. (Text: AI-generated)",
    "Porsche Macan": "The Porsche Macan Electric is the fully electric version of the brand's best-selling SUV. It shares the 800-volt platform with the Taycan, offering fast DC charging up to 270 kW. Driving characteristics are among the best in the compact luxury SUV class, with a low center of gravity and adaptive air suspension as standard on several variants. Cargo space is on par with the predecessor, and the car is available with both rear-wheel drive and all-wheel drive. (Text: AI-generated)",
    "Porsche Cayenne": "The Porsche Cayenne Electric marks the transition to electric power for the brand's large SUV. The car is built on a new platform with 800-volt architecture and aims to combine Porsche's sportiness with the spaciousness and comfort level the Cayenne is known for. Expected range and performance place it in competition with the BMW iX and Mercedes EQS SUV. The car comes with air suspension and adaptive chassis as standard. (Text: AI-generated)",
    "BMW iX1": "The BMW iX1 is the brand's most compact electric SUV and is based on the FAAR platform. It offers a practical interior with generous space for passengers and luggage relative to its exterior dimensions. All-wheel drive is standard on the xDrive variant, and the range is sufficient for most daily needs. The car competes directly with the Audi Q4 e-tron and Mercedes EQA in the popular compact SUV segment. (Text: AI-generated)",
    "BMW iX3": "The BMW iX3 is a midsize electric SUV that combines BMW's driving dynamics with a spacious, family-friendly interior. Fifth-generation eDrive technology provides efficient power delivery, and the car offers fast charging at up to 180 kW DC. The cargo area is among the larger in its class. The car competes with models such as the Mercedes EQC and Audi Q6 e-tron. (Text: AI-generated)",
    "BMW iX": "The BMW iX is the brand's electric flagship SUV, built on a dedicated EV platform. It uses a carbon fiber-reinforced body to keep weight down and offers a minimalist interior with large screens and sustainable materials. Range is competitive in the luxury SUV segment, and DC charging is supported at up to 200 kW. Air suspension and adaptive chassis provide a comfortable driving experience. (Text: AI-generated)",
    "BMW i4": "The BMW i4 is an electric sedan in Gran Coupe format that shares its visual profile with the 4 Series. It comes with rear-wheel drive in the eDrive40 version and all-wheel drive in the M variants. Driving characteristics are among the sportiest in the EV segment, and range is competitive for its class. The M50 and M60 versions target enthusiasts with higher power output and a firmer suspension. (Text: AI-generated)",
    "BMW i5": "The BMW i5 is the electric version of the 5 Series and is positioned as a spacious executive sedan. The car offers a comfortable interior with generous rear seat space and a large cargo area. Technology includes BMW's latest iDrive system with a curved display. Range and charging performance make it suitable for longer journeys, and it competes directly with the Mercedes EQE and Audi A6 e-tron. (Text: AI-generated)",
    "BMW i7": "The BMW i7 is the brand's most luxurious EV and represents the top model in the 7 Series. It features an opulent interior with a Theatre Screen in the rear seat, massage seats, and a Bowers & Wilkins sound system as options. Range is good despite the car's size, and 195 kW DC charging provides acceptable charging stops. The car competes with the Mercedes EQS and is primarily aimed at comfort and executive transport. (Text: AI-generated)",
    "BMW i3 120Ah": "The BMW i3 was one of the earliest premium EVs on the market and was produced from 2013 to 2022. It has a compact, tall design with a carbon fiber body that kept weight down. The 42.2 kWh battery provides limited range by today's standards, but the car works well as a city car. The interior uses sustainable materials and has a distinctive, open design. (Text: AI-generated)",
    "BMW i3 50": "The new BMW i3 is a compact electric sedan based on the new Neue Klasse platform. It represents a generational shift in BMW's EV strategy with new battery cell technology and improved efficiency. The car offers a modern interior with a new operating system and a design that differs from its predecessor. Range and charging performance are significantly improved compared to older BMW EVs. (Text: AI-generated)",
    "Audi Q4": "The Audi Q4 e-tron is a compact electric SUV built on the Volkswagen Group's MEB platform. It offers a spacious interior relative to its exterior dimensions, with a cargo area of 520 liters. An augmented reality head-up display is available as an option. The car comes with both rear-wheel drive and quattro all-wheel drive, and a range of up to 520 km makes it competitive in its class. (Text: AI-generated)",
    "Audi Q6": "The Audi Q6 e-tron is based on the new PPE platform developed together with Porsche, with 800-volt architecture as standard. This enables DC charging up to 270 kW and short charging times from 10 to 80 percent. The interior features a new digital cockpit design with up to three screens. The car slots between the Q4 and Q8 in size and offers good space for family and luggage. (Text: AI-generated)",
    "Audi Q8": "The Audi Q8 e-tron is the brand's large electric SUV and represents an updated continuation of the original e-tron. It has a spacious interior with premium materials and air suspension as standard. The 114 kWh battery provides one of the longest ranges in its class. DC charging performance was improved in the Q8 upgrade to 170 kW, and the car is available in both SUV and Sportback form. (Text: AI-generated)",
    "Audi e-tron GT": "The Audi e-tron GT is a four-door Gran Turismo that shares the 800-volt platform with the Porsche Taycan. It combines sports car performance with Audi's comfort and quality standards. Quattro all-wheel drive is standard, and acceleration is among the fastest in the brand's history. Range is sufficient for longer trips, but cargo space is limited due to the low roofline. The RS version offers additional performance and a firmer suspension. (Text: AI-generated)",
    "Audi A6": "The Audi A6 e-tron is the brand's electric executive sedan built on the PPE platform. With 800-volt architecture and up to 270 kW DC charging, it is among the fastest to charge in its class. The elegant design has a very low drag coefficient that contributes to good range. The car competes directly with the BMW i5 and Mercedes EQE. (Text: AI-generated)",
    "Mercedes EQA": "The Mercedes EQA is the brand's compact electric SUV and the most accessible model in the EQ lineup. It is based on the GLA platform and offers a familiar Mercedes interior with MBUX infotainment. Range is sufficient for daily use, and the car is available with both front-wheel drive and 4MATIC all-wheel drive. Compact exterior dimensions make it easy to maneuver in urban environments. (Text: AI-generated)",
    "Mercedes EQB": "The Mercedes EQB stands out in the compact class with its seven-seat option, which is unusual among electric SUVs in this size. The car is based on the GLB platform and has a tall, boxy design that maximizes interior space. The third row is best suited for children but provides flexibility for families. Range and charging performance are in line with the segment average. (Text: AI-generated)",
    "Mercedes EQC": "The Mercedes EQC was the brand's first dedicated fully electric SUV when it launched. The car has a comfortable interior with good noise insulation and a well-crafted dashboard. All-wheel drive is standard, providing good traction in winter conditions. Range is moderate compared to newer competitors, but the car compensates with high comfort and ride quality. (Text: AI-generated)",
    "Mercedes GLC": "The Mercedes GLC Electric is the fully electric version of the brand's best-selling SUV model. It is built on a new platform optimized for electric propulsion, with improved space and efficiency. The interior follows Mercedes' latest design language with a large central screen. The car combines the practical format of the GLC with zero-emission driving and modern EV technology. (Text: AI-generated)",
    "Mercedes EQE": "The Mercedes EQE is an electric executive sedan based on the dedicated EVA2 platform. It has a streamlined design with one of the lowest drag coefficients in its class, contributing to good range. The interior is spacious with the Hyperscreen available as an option — a screen that spans the entire dashboard. The SUV variant offers additional ground clearance and a more practical body style. (Text: AI-generated)",
    "Mercedes EQS": "The Mercedes EQS is the brand's electric flagship and is positioned as one of the most luxurious EVs on the market. It has a range of up to 770 km (WLTP) and offers an exceptionally quiet interior with outstanding comfort. The Hyperscreen dashboard is available as an option. Air suspension and rear-axle steering are standard on most variants. The SUV version provides a third row of seats and higher ground clearance. (Text: AI-generated)",
    "Tesla Model 3": "The Tesla Model 3 is one of the world's best-selling EVs and has been a key model in the adoption of electric cars. It offers a minimalist interior with a single centrally placed touchscreen that controls most of the car's functions. The Supercharger network provides good charging access along major highways. The Long Range variant has competitive range, while the Performance variant targets those who prioritize acceleration and driving enjoyment. (Text: AI-generated)",
    "Tesla Model Y": "The Tesla Model Y is a compact SUV based on the Model 3 platform and is among the most popular EVs globally. It offers significantly more cargo space than the Model 3, with a flat load floor and the option for a tow hitch. The interior shares the same minimalist design as the Model 3, with a focus on simplicity. Over-the-air updates provide new features and improvements after purchase. (Text: AI-generated)",
    "Tesla Model S": "The Tesla Model S was among the first premium EVs on the market and has been continuously updated since launch. It offers long range, fast acceleration, and a large cargo area including a frunk. The interior features a yoke steering wheel in newer versions, which is controversial among users. The Supercharger network and good charging capability make it suitable for long-distance travel. Older versions have a conventional steering wheel and somewhat lower performance. (Text: AI-generated)",
    "Tesla Model X": "The Tesla Model X is Tesla's large SUV featuring the distinctive Falcon Wing rear doors. It offers up to seven seats and a spacious interior with a panoramic roof that creates an open feel. Performance is at sports car level despite the car's size and weight. The Falcon Wing doors are practical in tight parking spaces, but the mechanism is more complex than conventional doors. (Text: AI-generated)",
    "Volkswagen ID.3": "The Volkswagen ID.3 is the brand's electric compact car, intended as an affordable EV in the Golf class. It is built on the MEB platform with the battery in the floor, resulting in a flat and spacious interior. Rear-wheel drive is standard, which allows for good cabin space. Range varies with battery size, and the Pro S version with a 77 kWh battery offers up to 560 km. (Text: AI-generated)",
    "Volkswagen ID.4": "The Volkswagen ID.4 is an electric compact SUV that is among the best-selling EVs in its market. It offers a family-friendly interior with generous rear seat space and a cargo area of 543 liters. The MEB platform provides a low center of gravity and predictable handling. The car is available with rear-wheel drive and GTX all-wheel drive. (Text: AI-generated)",
    "Volkswagen ID.5": "The Volkswagen ID.5 is an SUV coupe based on the ID.4 platform, with a more streamlined roofline. The sloping roof results in marginally less cargo space than the ID.4, but better aerodynamics and slightly longer range. The GTX version has all-wheel drive and sportier performance. The interior is nearly identical to the ID.4. (Text: AI-generated)",
    "Volkswagen ID.7": "The Volkswagen ID.7 is the brand's electric full-size car and the first ID model in sedan format. With a streamlined design, it achieves a drag coefficient of just 0.23, contributing to long range. The interior is spacious with good rear seat room, and the cargo area is among the largest in its class. The car is positioned as an electric alternative to the Passat. (Text: AI-generated)",
    "Volkswagen ID. Buzz": "The Volkswagen ID. Buzz is the electric reincarnation of the iconic VW Bus. It features a retro-inspired design with modern technology and is built on the extended MEB platform. The interior is flexible with sliding rear seats and a large cargo area. The car appeals to buyers who value character and spaciousness, and it is available in both standard and long-wheelbase versions. (Text: AI-generated)",
    "Volkswagen e-Golf": "The Volkswagen e-Golf was the brand's first electric Golf and was produced based on the seventh-generation Golf. The 35.8 kWh battery provides limited range by today's standards, but the car remains popular on the used market. Driving characteristics are identical to a regular Golf, which many appreciate. DC charging is supported at up to 40 kW, which is significantly slower than newer EVs. (Text: AI-generated)",
    "Volvo EX30": "The Volvo EX30 is the brand's smallest and most affordable EV. Despite its compact exterior dimensions, it offers a surprisingly spacious interior with a minimalist design where most functions are controlled via a centrally placed screen. The car is available with rear-wheel drive and Twin Motor all-wheel drive. The EX30 uses recycled materials in the interior as part of Volvo's sustainability strategy, and the car is produced with a low carbon footprint. (Text: AI-generated)",
    "Volvo EC40": "The Volvo EC40 is an electric SUV coupe with Volvo's characteristic Scandinavian design. The sloping roof gives it a sporty profile but reduces cargo space somewhat compared to the EX40. The car is available exclusively with the Recharge powertrain, focusing on comfort and safety. Google-based infotainment is integrated with voice assistant and map navigation. (Text: AI-generated)",
    "Volvo EX40": "The Volvo EX40 is Volvo's electric compact SUV, previously known as the XC40 Recharge. It is built on the CMA platform and offers a familiar Volvo interior with a strong sense of safety. The car has a user-friendly Google-based infotainment system and is available with all-wheel drive. The cargo area is supplemented by a frunk under the hood for additional storage. (Text: AI-generated)",
    "Volvo EX90": "The Volvo EX90 is the brand's electric flagship SUV and replaces the XC90 as the top model. It has a spacious three-row interior with room for up to seven passengers. Safety equipment includes a lidar sensor and advanced driver assistance systems as standard. The 111 kWh battery provides good range, and the car supports bidirectional charging. The interior is characterized by Nordic minimalism with sustainable materials. (Text: AI-generated)",
    "Volvo XC40": "The Volvo XC40 Recharge was among the first fully electric Volvo models and shares its platform with the EC40/EX40. The car offers all-wheel drive and good ground clearance for varied road conditions. The interior has Volvo's well-known quality feel with a clear dashboard layout. Range is sufficient for daily use, and the car offers good space in the compact class. (Text: AI-generated)",
    "Hyundai Kona": "The Hyundai Kona Electric is a compact SUV that has been a best-seller in the EV market. It offers good range relative to its size and price, and the spacious interior works well for families with young children. The car has received a significant facelift with a more modern design. A heat pump is standard, contributing to better range in cold winter conditions. (Text: AI-generated)",
    "Hyundai IONIQ 5": "The Hyundai IONIQ 5 is a midsize crossover with a retro-futuristic design inspired by Hyundai's Pony from the 1970s. It is built on the E-GMP platform with 800-volt architecture, enabling very fast DC charging at up to 240 kW. The interior is spacious with a flat floor and sliding rear seats. The vehicle-to-load function allows the car's battery to be used as a power source for external devices. (Text: AI-generated)",
    "Hyundai IONIQ 6": "Hyundai IONIQ 6 er en elektrisk sedan med et strømlinjeformet design som gir en luftmotstandskoeffisient på bare 0,21. Det bidrar til lang rekkevidde som overgår mange konkurrenter i klassen. Bilen deler 800-volts E-GMP-plattform med IONIQ 5 og støtter rask DC-lading. Interiøret har et romslig baksete til tross for det kupéaktige designet, og bilen konkurrerer med Tesla Model 3 og BMW i4. (Tekst: AI-generert)",
    "Hyundai IONIQ Electric": "Hyundai IONIQ Electric var en av de første rimelige elbilene i Norge og bidro til å gjøre elektrisk kjøring tilgjengelig for mange. Batteriet på 38,3 kWh gir begrenset rekkevidde etter dagens standard, men bilen er effektiv og har lavt forbruk. Designet er konservativt og praktisk med et godt bagasjerom for klassen. Bilen er et rimelig bruktbilalternativ for dem som primært kjører kortere strekninger. (Tekst: AI-generert)",
    "Kia Niro": "Kia Niro EV er en kompakt crossover som kombinerer praktisk størrelse med god rekkevidde. Den har et oversiktlig og brukervennlig interiør med fysiske knapper for klimaanlegg. Bagasjerommet er blant de større i kompaktklassen. Bilen er tilgjengelig med varmepumpe, noe som er gunstig for rekkevidde i kalde norske vintre. Niro EV er en populær familiebil takket være balansen mellom pris, plass og rekkevidde. (Tekst: AI-generert)",
    "Kia EV6": "Kia EV6 er en mellomstor crossover bygget på E-GMP-plattformen med 800-volts arkitektur. Den kan lade fra 10 til 80 prosent på under 18 minutter under optimale forhold, noe som er blant de raskeste i markedet. Designet er markant og skiller seg fra tradisjonelle Kia-modeller. Bilen tilbyr god rekkevidde, romslig interiør og vehicle-to-load-funksjon som standard. GT-versjonen leverer sportslige ytelser med 585 hk. (Tekst: AI-generert)",
    "Kia EV9": "Kia EV9 er en stor treseter-SUV som konkurrerer i premiumsegmentet. Den har et kantete, robust design og tilbyr romslig plass til opptil syv passasjerer. 800-volts arkitektur gir rask lading, og det store batteriet sikrer god rekkevidde til tross for bilens størrelse. Interiøret har et moderne og luftig design med to store skjermer. Bilen er et alternativ til BMW iX og Mercedes EQS SUV, men til en lavere pris. (Tekst: AI-generert)",
    "Kia e-Niro": "Kia e-Niro var blant de mest populære elbilene i Norge da den ble lansert, kjent for god rekkevidde til en fornuftig pris. Batteriet på 64 kWh gir en rekkevidde som fortsatt er tilstrekkelig for de fleste daglige behov. Bilen har et praktisk interiør med godt bagasjerom og er enkel å kjøre. DC-lading støttes med opptil 77 kW, noe som er moderat etter dagens standard. (Tekst: AI-generert)",
    "Skoda Enyaq": "Skoda Enyaq iV er en romslig og praktisk elektrisk SUV bygget på Volkswagen-gruppens MEB-plattform. Den er kjent for å tilby mest plass per krone i sin klasse, med et generøst bagasjerom på 585 liter. Interiøret har en funksjonell, skandinavisk-inspirert stil med god materialkvalitet. Coupé-versjonen har et mer strømlinjeformet design med noe bedre rekkevidde, mens RS-varianten gir sportligere ytelse. (Tekst: AI-generert)",
    "Polestar 2": "Polestar 2 er en elektrisk sedan som konkurrerer direkte med Tesla Model 3. Den kombinerer skandinavisk design med Volvos sikkerhetstradisjoner og har et interiør med Google-basert infotainment som standard. Kjøreegenskapene er sportslige med presist styre og godt balansert chassis. Dual Motor-versjonen med firehjulsdrift er populær i Norge, og ytelsespakken Polestar Engineered gir justerbare Öhlins-dempere. (Tekst: AI-generert)",
    "Polestar 3": "Polestar 3 er merkets første SUV og er bygget på Volvos SPA2-plattform. Den har et elegant og aerodynamisk design med fokus på premiumkvalitet. Interiøret er romslig med bærekraftige materialer og avansert teknologi inkludert lidar-baserte sikkerhetssystemer. Bilen konkurrerer med BMW iX og Porsche Macan Electric i det voksende premium-elbil-SUV-segmentet. (Tekst: AI-generert)",
    "Polestar 4": "Polestar 4 er en elektrisk SUV-coupé uten tradisjonelt bakrute — i stedet brukes et kamera og skjerm for baksyn. Designet er lavt og strømlinjeformet for en SUV, noe som gir bedre aerodynamikk og lengre rekkevidde. Interiøret er romslig til tross for den kupéaktige profilen. Bilen posisjoneres mellom Polestar 2 og 3 i pris og størrelse. (Tekst: AI-generert)",
    "NIO ET5": "NIO ET5 Touring er en elektrisk stasjonsvogn fra den kinesiske produsenten NIO. Den skiller seg ut med støtte for batteribytteteknologi, som gjør det mulig å bytte hele batteripakken på få minutter ved NIO Power Swap-stasjoner. Designet er elegant og sportsorientert, og interiøret har en kvalitetsfølelse som utfordrer europeiske premium-merker. Bilen leveres med NOMIs AI-assistent integrert i dashbordet. (Tekst: AI-generert)",
    "NIO EL6": "NIO EL6 er en mellomstor elektrisk SUV som kombinerer god plass med NIOs batteribytteteknologi. Muligheten for å bytte batteri på under fem minutter gir et alternativ til tradisjonell lading, noe som er praktisk på lengre turer. Interiøret er romslig med gode materialer og avansert teknologi. Bilen har luftfjæring som standard og tilbyr komfortable kjøreegenskaper. (Tekst: AI-generert)",
    "NIO EL7": "NIO EL7 er NIOs store SUV og konkurrerer med BMW iX og Mercedes EQE SUV. Den har et romslig interiør med god plass på alle rader og et luftig kupédesign. Batteribytteteknologi er tilgjengelig som supplement til vanlig lading. Bilen har luftfjæring, og den høye sittestillingen gir god oversikt i trafikken. NIO tilbyr fleksible batteriabonnementer som kan redusere innkjøpsprisen. (Tekst: AI-generert)",
    "Toyota bZ4X": "Toyota bZ4X er merkets første dedikerte helelektriske SUV og markerer Toyotas inntreden i elbilmarkedet. Bilen er utviklet i samarbeid med Subaru og deler plattform med Subaru Solterra. Den har et karakteristisk design med lav panser og et romslig interiør med god plass i baksetet. Firehjulsdrift-varianten bruker en motor på hver aksel. Rekkevidden er konkurransedyktig i klassen, og bilen er rettet mot familier som ønsker en pålitelig og praktisk elbil. (Tekst: AI-generert)",
    "Ford Mustang": "Ford Mustang Mach-E er en elektrisk SUV som låner navn og designelementer fra den ikoniske Mustang-sportsbilen. Den har et sporty design med god bakkeklaring og et romslig interiør med en stor, stående berøringsskjerm. Bagasjerommet suppleres av en drenerbar frunk som kan brukes til oppbevaring. Extended Range-batteriet gir konkurransedyktig rekkevidde, og AWD-versjonen har god ytelse i norsk vinterklima. (Tekst: AI-generert)",
    "Ford Explorer": "Ford Explorer Electric er merkets europeisk-utviklede elbil bygget på Volkswagen-gruppens MEB-plattform. Den har et moderne design som skiller seg fra amerikanske Ford-modeller og tilbyr et ryddig, brukervennlig interiør. Rekkevidden er god for klassen, og bilen er tilgjengelig med bakhjulsdrift og firehjulsdrift. Explorer posisjoneres som et prisgunstig alternativ i kompakt-SUV-segmentet. (Tekst: AI-generert)",
    "Xpeng G6": "Xpeng G6 er en elektrisk SUV-coupé fra den kinesiske produsenten Xpeng. Den har 800-volts arkitektur som gir rask DC-lading på opptil 280 kW, blant de raskeste i sin prisklasse. Designet er strømlinjeformet og moderne, og interiøret har en stor sentralskjerm med avansert programvare. Bilen tilbyr god rekkevidde og konkurransedyktig pris sammenlignet med europeiske rivaler i mellomklassen. (Tekst: AI-generert)",
    "Xpeng G9": "Xpeng G9 er en stor, premium elektrisk SUV med 800-volts arkitektur og svært rask lading. Interiøret er romslig med gode materialer og et avansert infotainmentsystem med store skjermer. Bilen har luftfjæring og adaptivt understell som gir komfortabel kjøring. G9 posisjonerer seg som et kinesisk alternativ til BMW iX og Audi Q8 e-tron, med konkurransedyktig pris og utstyrsnivå. (Tekst: AI-generert)",
    "BYD Atto": "BYD Atto 3 er en kompakt elektrisk SUV fra den kinesiske produsenten BYD, som er verdens største produsent av elbiler. Bilen bruker BYDs egen Blade-batteriteknologi basert på litiumjernfosfat, som er kjent for god sikkerhet og lang levetid. Interiøret har et karakteristisk design med en roterbar sentralskjerm. Bilen tilbyr god plass og utstyrsverdi for prisen, og konkurrerer med Hyundai Kona og Kia Niro EV. (Tekst: AI-generert)",
    "BYD Tang": "BYD Tang EV600 er en stor elektrisk SUV med syv seter og firehjulsdrift. Den bruker BYDs Blade-batteriteknologi og tilbyr god rekkevidde for en bil i denne størrelsen. Interiøret er utstyrt med en stor roterbar sentralskjerm og generøst med standardutstyr. Bilen konkurrerer med Kia EV9 og NIO EL7, og er et av de mer prisgunstige alternativene for familier som trenger en stor syvseters elbil. (Tekst: AI-generert)",
    "BYD Seal": "BYD Seal er en elektrisk sedan som konkurrerer direkte med Tesla Model 3. Den har et strømlinjeformet design og bruker BYDs Cell-to-Body-teknologi der batteriet er integrert i karosseristrukturen for bedre stivhet og lavere vekt. Kjøreegenskapene er gode med lavt tyngdepunkt og balansert vektfordeling. Bilen tilbyr konkurransedyktig rekkevidde og ytelse til en pris som undergraver mange europeiske konkurrenter. (Tekst: AI-generert)",
    "Cupra Born": "Cupra Born er en sporty elektrisk kompaktbil basert på Volkswagen-gruppens MEB-plattform, og deler mye teknikk med Volkswagen ID.3. Den skiller seg ut med et mer dynamisk design, strammere understell og sportsseter. Kjøreegenskapene er blant de mest engasjerende i kompaktklassen for elbiler. Batteriet på 77 kWh gir god rekkevidde, og bilen er et godt alternativ for dem som ønsker noe mer kjøreglede enn ID.3 tilbyr. (Tekst: AI-generert)",
    "Cupra Tavascan": "Cupra Tavascan er en elektrisk SUV-coupé og merkets første dedikerte elbil. Den er bygget på MEB-plattformen og har et distinkt, sporty design med Cupras karakteristiske kobberdetaljer. VZ-versjonen har firehjulsdrift med to motorer og sportlig ytelse. Interiøret er førerfokusert med gode sportsseter og et oversiktlig digitalt cockpit. (Tekst: AI-generert)",
    "Renault Megane": "Renault Megane E-Tech er en kompakt elektrisk crossover med et moderne og karakteristisk design. Den er bygget på CMF-EV-plattformen og har et av de tynneste batteripakkene i klassen, noe som gir lavere gulv og mer innvendig plass. Interiøret har to sammenhengende skjermer i et L-formet oppsett. Bilen er smidig i bymiljø takket være kompakte ytre mål og god svingradius. (Tekst: AI-generert)",
    "Renault Scenic": "Renault Scenic E-Tech er en elektrisk kompakt-SUV som erstatter den tradisjonelle Scenic flerbruksbilen. Den har et romslig interiør med god plass i baksetet og et stort bagasjerom. Batteriet på 87 kWh gir en av de lengste rekkeviddene i kompaktklassen. Designet er moderne og robust, og bilen har fått gode sikkerhetsvurderinger i Euro NCAP-tester. (Tekst: AI-generert)",
    "Renault ZOE": "Renault ZOE var en pioner i det europeiske elbilmarkedet og har vært tilgjengelig siden 2012. R135-versjonen har et batteri på 52 kWh som gir tilstrekkelig rekkevidde for daglig bruk. Bilen er kompakt og enkel å manøvrere i bymiljø. Ladesystemet støtter AC-lading med opptil 22 kW og valgfri DC-lading med 50 kW. ZOE er et rimelig bruktbilalternativ som egner seg godt som bybil. (Tekst: AI-generert)",
    "Smart #1": "Smart #1 representerer en fullstendig nystart for Smart-merket, nå som en kompakt elektrisk SUV utviklet i samarbeid med Geely. Bilen er vesentlig større enn tidligere Smart-modeller og tilbyr et overraskende romslig interiør. Designet er moderne og lekent med en høy kvalitetsfølelse innvendig. BRABUS-versjonen tilbyr firehjulsdrift og sportslig ytelse. (Tekst: AI-generert)",
    "Smart #3": "Smart #3 er en kompakt elektrisk SUV-coupé som posisjoneres over #1 i Smarts modellrekke. Den har et strammere, mer sporty design med skrånende taklinje. BRABUS-versjonen har firehjulsdrift med to motorer og imponerende akselerasjon for klassen. Interiøret er godt utstyrt med en stor sentralskjerm og moderne materialer. (Tekst: AI-generert)",
    "Nissan Leaf": "Nissan Leaf var verdens første masseproduserte elbil og har vært en viktig modell for utviklingen av elbilmarkedet globalt. E+-versjonen med 62 kWh batteri gir vesentlig bedre rekkevidde enn standardmodellen. Bilen har et praktisk interiør med godt bagasjerom og e-Pedal-funksjon for regenerativ bremsing med én pedal. CHAdeMO-ladesystemet er mindre utbredt enn CCS, noe som kan begrense ladetilgangen noe. (Tekst: AI-generert)",
    "Jaguar I-PACE": "Jaguar I-PACE var en av de første premium-elbilene på markedet da den ble lansert i 2018, og vant flere priser som Årets Bil. Bilen har et distinkt sportsbildesign med lavt tyngdepunkt og god vektfordeling som gir engasjerende kjøreegenskaper. Firehjulsdrift er standard med en motor på hver aksel. Interiøret er luksuriøst med gode materialer, men infotainmentsystemet regnes som noe utdatert sammenlignet med nyere konkurrenter. (Tekst: AI-generert)",
    "MG ZS": "MG ZS EV er en av de mest prisgunstige elektriske SUV-ene på markedet og har gjort elbil tilgjengelig for mange. Long Range-versjonen har et batteri på 72,6 kWh som gir akseptabel rekkevidde. Bilen tilbyr et romslig interiør med god plass i baksetet og et bagasjerom på 448 liter. Utstyrsnivået er generøst for prisen, og bilen konkurrerer primært på verdi. (Tekst: AI-generert)",
    "Opel Mokka-e": "Opel Mokka-e er en kompakt elektrisk SUV med et moderne og distinkt design. Den deler plattform med Peugeot e-2008 og Citroën ë-C4 og har det nye Vizor-frontdesignet som kjennetegner nyere Opel-modeller. Interiøret har et digitalt cockpit kalt Pure Panel med to sammenhengende skjermer. Batteriet på 50 kWh gir en rekkevidde som passer godt til daglig bykjøring og pendling. (Tekst: AI-generert)",
    "Fiat 500e": "Fiat 500e er en helelektrisk versjon av den ikoniske Fiat 500 bybilen. Den har et sjarmerende retrodesign kombinert med moderne elbilteknologi. Kompakte ytre mål og kort svingradius gjør den ideell for bykjøring og parkering. Bilen er tilgjengelig som sedan og cabriolet, og La Prima-versjonen tilbyr ekstra utstyr og premiumdetaljer. Rekkevidden er begrenset, men tilstrekkelig for urban bruk. (Tekst: AI-generert)",
    "Peugeot e-2008": "Peugeot e-2008 er en kompakt elektrisk SUV med Peugeots karakteristiske i-Cockpit-design, der et lite ratt kombineres med et høytplassert instrumentpanel. Bilen deler plattform med Opel Mokka-e og tilbyr et stilfullt interiør med gode materialer. Rekkevidden er tilstrekkelig for daglig bruk, og bilen har et praktisk bagasjerom. GT-versjonen har ekstra utstyr og sportligere detaljer. (Tekst: AI-generert)",
    "Audi e-tron 55": "Audi e-tron 55 quattro var merkets første helelektriske SUV og markerte Audis inntreden i elbilmarkedet. Den har et komfortabelt og luksuriøst interiør med digital-speilkamera som tilvalg. Firehjulsdrift er standard med god trekkraft under alle forhold. Batteriet på 95 kWh gir god rekkevidde, og bilen har en stabil og komfortabel kjørefølelse som passer godt på langtur. (Tekst: AI-generert)",
    "Mercedes EQC 400": "Mercedes EQC 400 4MATIC var merkets første dedikerte elbil og ble lansert som en premium mellomklasse-SUV. Den eldre 2021-modellen har noe kortere rekkevidde enn den nyere versjonen, men tilbyr fortsatt et komfortabelt og stillegående interiør. Firehjulsdrift er standard, noe som gir godt veggrep under norske vinterforhold. Bilen er et solid bruktbilalternativ i premiumklassen. (Tekst: AI-generert)"
};

function getCarDescription(car) {
    if (!car) return null;
    const key = car.make + " " + car.model;
    if (CAR_DESCRIPTIONS[key]) return CAR_DESCRIPTIONS[key];
    const words = (car.model || "").split(/\s+/);
    if (words.length >= 2) {
        const mid = car.make + " " + words[0] + " " + words[1];
        if (CAR_DESCRIPTIONS[mid]) return CAR_DESCRIPTIONS[mid];
    }
    if (words[0]) {
        const base = CAR_DESCRIPTIONS[car.make + " " + words[0]];
        if (base) return base;
    }
    return null;
}

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
    ratings: JSON.parse(localStorage.getItem("ratings") || "{}"),
    activeTab: "browse"
};

function saveState() {
    localStorage.setItem("compareList", JSON.stringify(state.compareList));
    localStorage.setItem("ratings", JSON.stringify(state.ratings));
}

// ========== Analytics ==========
function trackEvent(name, params) {
    if (typeof gtag === "function") {
        try { gtag("event", name, params || {}); } catch (e) { /* ignore */ }
    }
}

// ========== Dark Mode ==========
function isDarkMode() {
    return document.documentElement.getAttribute("data-theme") === "dark";
}

function applyTheme(theme) {
    document.documentElement.setAttribute("data-theme", theme);
    const metaTheme = document.querySelector('meta[name="theme-color"]');
    if (metaTheme) metaTheme.content = theme === "dark" ? "#16161e" : "#f8f8fa";
}

function toggleTheme() {
    const next = isDarkMode() ? "light" : "dark";
    localStorage.setItem("theme", next);
    applyTheme(next);
    trackEvent("theme_toggle", { theme: next });
}

(function initTheme() {
    const saved = localStorage.getItem("theme");
    if (saved === "dark" || saved === "light") {
        applyTheme(saved);
    } else if (window.matchMedia && window.matchMedia("(prefers-color-scheme: dark)").matches) {
        applyTheme("dark");
    }
})();

// ========== Recently Viewed ==========
const RECENTLY_VIEWED_KEY = "recentlyViewed";
const RECENTLY_VIEWED_MAX = 8;

function addRecentlyViewed(id) {
    try {
        let list = JSON.parse(localStorage.getItem(RECENTLY_VIEWED_KEY) || "[]");
        list = [id, ...list.filter(x => x !== id)].slice(0, RECENTLY_VIEWED_MAX);
        localStorage.setItem(RECENTLY_VIEWED_KEY, JSON.stringify(list));
    } catch (e) { /* ignore */ }
}

function getRecentlyViewed() {
    try {
        return JSON.parse(localStorage.getItem(RECENTLY_VIEWED_KEY) || "[]");
    } catch (e) { return []; }
}

function renderRecentlyViewed() {
    const container = document.getElementById("recently-viewed");
    if (!container) return;
    const ids = getRecentlyViewed();
    const cars = ids.map(getCarById).filter(Boolean);
    if (cars.length === 0) {
        container.style.display = "none";
        return;
    }
    container.style.display = "";
    const listEl = container.querySelector(".recently-viewed-list");
    listEl.innerHTML = cars.map(car => {
        const bc = BRAND_COLORS[car.make] || { primary: "#888" };
        return `<a href="bil.html?id=${carSlug(car)}" class="recently-viewed-item" style="--brand-color:${bc.primary}" onclick="trackEvent('recently_viewed_click', { car_id: ${car.id} })">${car.make} ${car.model}</a>`;
    }).join("");
}

function getRating(carId) {
    if (window._fbReady && window._fbRatings) {
        const carData = window._fbRatings[String(carId)];
        if (carData && carData.votes && window._fbIPHash) {
            return carData.votes[window._fbIPHash] || 0;
        }
    }
    return 0;
}

function getCommunityRating(carId) {
    if (window._fbReady && window._fbRatings) {
        const carData = window._fbRatings[String(carId)];
        if (carData && carData.votes) {
            const votes = Object.values(carData.votes);
            if (votes.length > 0) {
                const sum = votes.reduce((a, b) => a + b, 0);
                return { avg: Math.round((sum / votes.length) * 10) / 10, count: votes.length };
            }
        }
    }
    return { avg: 0, count: 0 };
}

function getAverageRating(carId) {
    const community = getCommunityRating(carId);
    const userRating = getRating(carId);
    return { avg: community.avg, count: community.count, userRating };
}

function setRating(carId, rating, e) {
    if (e) e.stopPropagation();
    if (typeof window._fbSaveRating === "function") {
        window._fbSaveRating(carId, rating).then(() => {
            updateUI();
            showToast(`You gave ${rating} of 5 stars`);
        });
    }
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
    if (count > 0) {
        html += `<span class="star-avg">${avg.toFixed(1)}</span>`;
        html += `<span class="star-count">(${count})</span>`;
    } else {
        html += `<span class="star-count">No votes yet</span>`;
    }
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
    return price.toLocaleString("en") + " NOK";
}

function getCarById(id) {
    return CARS.find(c => c.id === id);
}

function isInCompare(id) {
    return state.compareList.includes(id);
}

function toggleCompare(id, e) {
    if (e) e.stopPropagation();
    const car = getCarById(id);
    const idx = state.compareList.indexOf(id);
    const adding = idx === -1;
    if (!adding) {
        state.compareList.splice(idx, 1);
    } else {
        if (state.compareList.length >= 10) {
            showToast("Maximum 10 cars can be compared");
            return;
        }
        state.compareList.push(id);
    }
    trackEvent(adding ? "compare_add" : "compare_remove", {
        car_id: id,
        car_make: car ? car.make : "",
        car_model: car ? car.model : "",
        compare_count: state.compareList.length
    });
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

// ========== Slug ==========
function carSlug(car) {
    return (car.make + '-' + car.model + '-' + car.year)
        .toLowerCase().replace(/[^a-z0-9]+/g, '-').replace(/-+/g, '-').replace(/^-|-$/g, '');
}

// ========== Car Image Placeholder ==========
// Placeholder with brand color + make/model initials. Safe (no licensing concerns).
function getCachedCarImage() { return null; }
function scheduleCarImageLoad() { /* no-op */ }

var CAR_SILHOUETTES = {
    suv: '<svg viewBox="0 0 200 80" fill="none"><path d="M20 58 C20 58 22 52 30 48 L55 46 C60 40 68 28 80 26 L130 24 C142 24 150 30 155 38 L168 46 C176 46 180 50 180 58" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round"/><circle cx="52" cy="58" r="10" stroke="currentColor" stroke-width="2.5"/><circle cx="52" cy="58" r="4" stroke="currentColor" stroke-width="1.5"/><circle cx="152" cy="58" r="10" stroke="currentColor" stroke-width="2.5"/><circle cx="152" cy="58" r="4" stroke="currentColor" stroke-width="1.5"/><line x1="20" y1="58" x2="42" y2="58" stroke="currentColor" stroke-width="2"/><line x1="62" y1="58" x2="142" y2="58" stroke="currentColor" stroke-width="2"/><line x1="162" y1="58" x2="180" y2="58" stroke="currentColor" stroke-width="2"/><path d="M68 46 L72 28 C73 26 75 25 80 25" stroke="currentColor" stroke-width="1.5" stroke-linecap="round"/><path d="M110 25 L110 46" stroke="currentColor" stroke-width="1.5" stroke-linecap="round"/><path d="M75 38 L105 38" stroke="currentColor" stroke-width="1" opacity="0.4"/><path d="M115 38 L150 40" stroke="currentColor" stroke-width="1" opacity="0.4"/><circle cx="174" cy="44" r="2.5" stroke="currentColor" stroke-width="1.5"/><circle cx="28" cy="50" r="2.5" stroke="currentColor" stroke-width="1.5"/></svg>',
    sedan: '<svg viewBox="0 0 200 80" fill="none"><path d="M18 56 C18 56 22 50 32 48 L60 46 C66 38 78 24 92 22 L125 20 C136 20 148 24 154 34 L165 46 C174 46 180 50 182 56" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round"/><circle cx="50" cy="56" r="10" stroke="currentColor" stroke-width="2.5"/><circle cx="50" cy="56" r="4" stroke="currentColor" stroke-width="1.5"/><circle cx="154" cy="56" r="10" stroke="currentColor" stroke-width="2.5"/><circle cx="154" cy="56" r="4" stroke="currentColor" stroke-width="1.5"/><line x1="18" y1="56" x2="40" y2="56" stroke="currentColor" stroke-width="2"/><line x1="60" y1="56" x2="144" y2="56" stroke="currentColor" stroke-width="2"/><line x1="164" y1="56" x2="182" y2="56" stroke="currentColor" stroke-width="2"/><path d="M72 46 L78 26 C79 23 82 22 86 22" stroke="currentColor" stroke-width="1.5" stroke-linecap="round"/><path d="M118 21 L116 46" stroke="currentColor" stroke-width="1.5" stroke-linecap="round"/><path d="M82 34 L112 33" stroke="currentColor" stroke-width="1" opacity="0.4"/><path d="M120 34 L152 38" stroke="currentColor" stroke-width="1" opacity="0.4"/><circle cx="178" cy="48" r="2.5" stroke="currentColor" stroke-width="1.5"/><circle cx="26" cy="50" r="2.5" stroke="currentColor" stroke-width="1.5"/></svg>',
    hatchback: '<svg viewBox="0 0 200 80" fill="none"><path d="M20 56 C20 56 24 50 34 48 L58 46 C64 38 76 26 90 24 L120 22 C130 22 140 26 148 38 L160 46 C168 46 174 48 176 56" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round"/><circle cx="50" cy="56" r="10" stroke="currentColor" stroke-width="2.5"/><circle cx="50" cy="56" r="4" stroke="currentColor" stroke-width="1.5"/><circle cx="150" cy="56" r="10" stroke="currentColor" stroke-width="2.5"/><circle cx="150" cy="56" r="4" stroke="currentColor" stroke-width="1.5"/><line x1="20" y1="56" x2="40" y2="56" stroke="currentColor" stroke-width="2"/><line x1="60" y1="56" x2="140" y2="56" stroke="currentColor" stroke-width="2"/><line x1="160" y1="56" x2="176" y2="56" stroke="currentColor" stroke-width="2"/><path d="M68 46 L74 28 C75 25 78 24 84 24" stroke="currentColor" stroke-width="1.5" stroke-linecap="round"/><path d="M112 23 L111 46" stroke="currentColor" stroke-width="1.5" stroke-linecap="round"/><path d="M148 38 L152 46" stroke="currentColor" stroke-width="1.5" stroke-linecap="round"/><path d="M80 35 L108 34" stroke="currentColor" stroke-width="1" opacity="0.4"/><circle cx="172" cy="48" r="2.5" stroke="currentColor" stroke-width="1.5"/><circle cx="26" cy="50" r="2.5" stroke="currentColor" stroke-width="1.5"/></svg>',
    wagon: '<svg viewBox="0 0 200 80" fill="none"><path d="M18 56 C18 56 22 50 32 48 L58 46 C64 38 76 24 90 22 L130 20 C140 20 150 20 158 22 L164 46 C172 46 178 50 180 56" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round"/><circle cx="50" cy="56" r="10" stroke="currentColor" stroke-width="2.5"/><circle cx="50" cy="56" r="4" stroke="currentColor" stroke-width="1.5"/><circle cx="154" cy="56" r="10" stroke="currentColor" stroke-width="2.5"/><circle cx="154" cy="56" r="4" stroke="currentColor" stroke-width="1.5"/><line x1="18" y1="56" x2="40" y2="56" stroke="currentColor" stroke-width="2"/><line x1="60" y1="56" x2="144" y2="56" stroke="currentColor" stroke-width="2"/><line x1="164" y1="56" x2="180" y2="56" stroke="currentColor" stroke-width="2"/><path d="M70 46 L76 26 C77 23 80 22 84 22" stroke="currentColor" stroke-width="1.5" stroke-linecap="round"/><path d="M116 21 L115 46" stroke="currentColor" stroke-width="1.5" stroke-linecap="round"/><path d="M158 22 L162 46" stroke="currentColor" stroke-width="1.5" stroke-linecap="round"/><path d="M80 34 L112 33" stroke="currentColor" stroke-width="1" opacity="0.4"/><path d="M120 33 L156 34" stroke="currentColor" stroke-width="1" opacity="0.4"/><circle cx="176" cy="48" r="2.5" stroke="currentColor" stroke-width="1.5"/><circle cx="24" cy="50" r="2.5" stroke="currentColor" stroke-width="1.5"/></svg>',
    van: '<svg viewBox="0 0 200 80" fill="none"><path d="M20 58 C20 58 22 52 30 48 L50 46 L52 22 C52 20 54 18 58 18 L140 18 C146 18 150 22 154 30 L166 46 C174 46 180 50 180 58" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round"/><circle cx="52" cy="58" r="10" stroke="currentColor" stroke-width="2.5"/><circle cx="52" cy="58" r="4" stroke="currentColor" stroke-width="1.5"/><circle cx="154" cy="58" r="10" stroke="currentColor" stroke-width="2.5"/><circle cx="154" cy="58" r="4" stroke="currentColor" stroke-width="1.5"/><line x1="20" y1="58" x2="42" y2="58" stroke="currentColor" stroke-width="2"/><line x1="62" y1="58" x2="144" y2="58" stroke="currentColor" stroke-width="2"/><line x1="164" y1="58" x2="180" y2="58" stroke="currentColor" stroke-width="2"/><path d="M90 18 L90 46" stroke="currentColor" stroke-width="1.5" stroke-linecap="round"/><path d="M130 18 L130 46" stroke="currentColor" stroke-width="1.5" stroke-linecap="round"/><path d="M60 32 L86 32" stroke="currentColor" stroke-width="1" opacity="0.4"/><path d="M94 32 L126 32" stroke="currentColor" stroke-width="1" opacity="0.4"/><circle cx="176" cy="48" r="2.5" stroke="currentColor" stroke-width="1.5"/><circle cx="26" cy="50" r="2.5" stroke="currentColor" stroke-width="1.5"/></svg>'
};

function renderCarImagePlaceholder(car) {
    var bc = (typeof BRAND_COLORS !== "undefined" && BRAND_COLORS[car.make]) || { primary: "#888" };
    var svg = CAR_SILHOUETTES[car.type] || CAR_SILHOUETTES['sedan'];
    return '<div class="car-img-placeholder" style="background:linear-gradient(135deg, ' + bc.primary + '1f, ' + bc.primary + '05)">'
        + '<div class="car-silhouette" style="color:' + bc.primary + '">' + svg + '</div>'
        + '<span class="car-img-placeholder-text" style="color:' + bc.primary + '">' + car.make + '</span>'
        + '</div>';
}

// ========== Render Car Card ==========
function renderCarCard(car) {
    const div = document.createElement("div");
    div.className = "car-card";
    div.onclick = () => { window.location.href = 'bil.html?id=' + carSlug(car); };

    const bc = BRAND_COLORS[car.make] || { primary: "#888", gradient: "linear-gradient(135deg, #888, #444)" };
    const efficiency = (car.kwh / car.range * 100).toFixed(1);

    div.innerHTML = `
        <div class="car-card-accent" style="background:${bc.primary}"></div>
        <div class="car-card-image">
            ${renderCarImagePlaceholder(car, "")}
        </div>
        <div class="car-card-body">
            <div class="car-card-top">
                <div class="car-card-info">
                    <div class="car-card-title">${car.make} ${car.model}</div>
                    <div class="car-card-subtitle">${car.year} · ${car.segment} · ${getCarCountryFlag(car)}</div>
                </div>
                <div class="car-card-price">${formatPrice(car.price)}</div>
            </div>
            <div class="car-card-specs">
                <div class="spec-item">
                    <span class="spec-value">${car.range}</span>
                    <span class="spec-unit">km</span>
                    <span class="spec-sub">vinter ~${getWinterRange(car)}</span>
                </div>
                <div class="spec-divider"></div>
                <div class="spec-item">
                    <span class="spec-value">${getChargeSpeed(car)}</span>
                    <span class="spec-unit">kW DC</span>
                    <span class="spec-sub">10-80% ~${getChargeTime10to80(car)} min</span>
                </div>
                <div class="spec-divider"></div>
                <div class="spec-item">
                    <span class="spec-value">${car.hp}</span>
                    <span class="spec-unit">hp</span>
                </div>
                <div class="spec-divider"></div>
                <div class="spec-item">
                    <span class="spec-value">${car.zeroToHundred}</span>
                    <span class="spec-unit">sec</span>
                </div>
                <div class="spec-divider"></div>
                <div class="spec-item">
                    <span class="spec-value">${car.kwh}</span>
                    <span class="spec-unit">kWh</span>
                </div>
                ${car.trunk ? `
                <div class="spec-divider"></div>
                <div class="spec-item">
                    <span class="spec-value">${car.trunk}</span>
                    <span class="spec-unit">liter</span>
                </div>` : ''}
            </div>
            <div class="car-card-bottom">
                <div class="car-card-tags">
                    <span class="car-tag">${car.drivetrain}</span>
                    <span class="car-tag">${car.seats} seter</span>
                    <span class="car-tag">${efficiency} kWh/100km</span>
                </div>
                <div class="car-card-actions">
                    ${renderStars(car.id, 16)}
                    <button class="btn-compare ${isInCompare(car.id) ? 'active-compare' : ''}"
                            onclick="toggleCompare(${car.id}, event)"
                            aria-label="${isInCompare(car.id) ? 'Remove from comparison' : 'Add to comparison'}">
                        <span class="btn-compare-icon">${isInCompare(car.id) ? ICONS.check : ICONS.plus}</span>
                        <span class="btn-compare-label">${isInCompare(car.id) ? 'Added' : 'Compare'}</span>
                    </button>
                </div>
            </div>
        </div>
    `;
    return div;
}

// ========== Slider filters ==========
const PRICE_MIN = 0, PRICE_MAX = 2000000, PRICE_STEP = 25000;

function formatPriceShort(v) {
    if (v >= 1000000) return (v / 1000000).toFixed(v % 1000000 === 0 ? 0 : 1).replace(".", ",") + " mill";
    if (v >= 1000) return Math.round(v / 1000) + "k";
    return String(v);
}

function getPriceFilter() {
    const minEl = document.getElementById("price-min");
    const maxEl = document.getElementById("price-max");
    if (!minEl || !maxEl) return { min: PRICE_MIN, max: PRICE_MAX, active: false };
    let lo = parseInt(minEl.value, 10);
    let hi = parseInt(maxEl.value, 10);
    if (lo > hi) { const t = lo; lo = hi; hi = t; }
    return { min: lo, max: hi, active: lo > PRICE_MIN || hi < PRICE_MAX };
}

function updateSliderUI() {
    const pf = getPriceFilter();
    const priceVal = document.getElementById("price-value");
    const priceFill = document.getElementById("price-fill");
    const priceWrap = priceVal && priceVal.closest(".slider-filter");
    if (priceVal) {
        if (!pf.active) priceVal.textContent = "Alle";
        else priceVal.textContent = formatPriceShort(pf.min) + " – " + formatPriceShort(pf.max);
    }
    if (priceWrap) priceWrap.classList.toggle("is-active", pf.active);
    const pLo = ((pf.min - PRICE_MIN) / (PRICE_MAX - PRICE_MIN)) * 100;
    const pHi = ((pf.max - PRICE_MIN) / (PRICE_MAX - PRICE_MIN)) * 100;
    if (priceFill) {
        priceFill.style.left = pLo + "%";
        priceFill.style.right = (100 - pHi) + "%";
    }
    const pMinBub = document.getElementById("price-min-bubble");
    const pMaxBub = document.getElementById("price-max-bubble");
    if (pMinBub) { pMinBub.style.left = pLo + "%"; pMinBub.textContent = formatPriceShort(pf.min); }
    if (pMaxBub) { pMaxBub.style.left = pHi + "%"; pMaxBub.textContent = formatPriceShort(pf.max); }
}

// ========== Browse Tab ==========
var browsePage = 1;
var CARS_PER_PAGE = 10;

function renderBrowse() {
    const list = document.getElementById("car-list");
    const search = document.getElementById("search-input").value.toLowerCase();
    const brandFilter = document.getElementById("filter-brand").value;
    const typeFilter = document.getElementById("filter-type").value;
    const sort = document.getElementById("filter-sort").value;
    const pf = getPriceFilter();
    updateSliderUI();

    let cars = CARS.filter(car => {
        const matchSearch = `${car.make} ${car.model} ${car.year} ${car.segment}`.toLowerCase().includes(search);
        const matchBrand = brandFilter === "all" || car.make === brandFilter;
        const matchType = typeFilter === "all" || car.type === typeFilter;
        const matchPrice = car.price >= pf.min && car.price <= pf.max;
        return matchSearch && matchBrand && matchType && matchPrice;
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

    var totalPages = Math.max(1, Math.ceil(cars.length / CARS_PER_PAGE));
    if (browsePage > totalPages) browsePage = totalPages;
    if (browsePage < 1) browsePage = 1;
    var startIdx = (browsePage - 1) * CARS_PER_PAGE;
    var pageCars = cars.slice(startIdx, startIdx + CARS_PER_PAGE);

    // Result count
    let countEl = document.getElementById("result-count");
    if (!countEl) {
        countEl = document.createElement("div");
        countEl.id = "result-count";
        countEl.className = "result-count";
        list.parentNode.insertBefore(countEl, list);
    }
    const hasFilter = search || brandFilter !== "all" || typeFilter !== "all" || pf.active;
    countEl.textContent = hasFilter ? `${cars.length} biler funnet` : `${cars.length} biler`;
    countEl.style.display = "block";

    list.innerHTML = "";
    if (cars.length === 0) {
        list.innerHTML = '<div class="no-results">No cars found</div>';
        removePagination();
        return;
    }
    var now = Date.now();
    var shouldRenderAds = !renderBrowse._lastAdRender || (now - renderBrowse._lastAdRender > 600);
    pageCars.forEach(function(car, i) {
        list.appendChild(renderCarCard(car));
        if (shouldRenderAds && (i + 1) % 5 === 0 && i < pageCars.length - 1) {
            var adWrap = document.createElement("div");
            adWrap.className = "ad-inline";
            adWrap.innerHTML =
                '<ins class="adsbygoogle" style="display:block" ' +
                'data-ad-client="ca-pub-4678480487049419" ' +
                'data-ad-slot="auto" data-ad-format="fluid" ' +
                'data-ad-layout-key="-6t+ed+2i-1n-4w" ' +
                'data-full-width-responsive="true"></ins>';
            list.appendChild(adWrap);
            try { (adsbygoogle = window.adsbygoogle || []).push({}); } catch (e) {}
        }
    });
    if (shouldRenderAds) renderBrowse._lastAdRender = now;

    renderPagination(totalPages, cars.length);
}

function renderPagination(totalPages, totalCars) {
    var existing = document.getElementById("pagination");
    if (existing) existing.remove();
    if (totalPages <= 1) return;

    var nav = document.createElement("nav");
    nav.id = "pagination";
    nav.className = "pagination";

    var prevBtn = document.createElement("button");
    prevBtn.className = "pagination-btn";
    prevBtn.textContent = "‹";
    prevBtn.disabled = browsePage <= 1;
    prevBtn.onclick = function() { goToPage(browsePage - 1); };
    nav.appendChild(prevBtn);

    var pages = getPaginationRange(browsePage, totalPages);
    pages.forEach(function(p) {
        if (p === "...") {
            var dots = document.createElement("span");
            dots.className = "pagination-dots";
            dots.textContent = "…";
            nav.appendChild(dots);
        } else {
            var btn = document.createElement("button");
            btn.className = "pagination-btn" + (p === browsePage ? " active" : "");
            btn.textContent = p;
            btn.onclick = function() { goToPage(p); };
            nav.appendChild(btn);
        }
    });

    var nextBtn = document.createElement("button");
    nextBtn.className = "pagination-btn";
    nextBtn.textContent = "›";
    nextBtn.disabled = browsePage >= totalPages;
    nextBtn.onclick = function() { goToPage(browsePage + 1); };
    nav.appendChild(nextBtn);

    var info = document.createElement("div");
    info.className = "pagination-info";
    var start = (browsePage - 1) * CARS_PER_PAGE + 1;
    var end = Math.min(browsePage * CARS_PER_PAGE, totalCars);
    info.textContent = start + "–" + end + " of " + totalCars;
    nav.appendChild(info);

    var list = document.getElementById("car-list");
    list.parentNode.insertBefore(nav, list.nextSibling);
}

function removePagination() {
    var el = document.getElementById("pagination");
    if (el) el.remove();
}

function getPaginationRange(current, total) {
    if (total <= 7) {
        var arr = [];
        for (var i = 1; i <= total; i++) arr.push(i);
        return arr;
    }
    var pages = [1];
    if (current > 3) pages.push("...");
    for (var i = Math.max(2, current - 1); i <= Math.min(total - 1, current + 1); i++) {
        pages.push(i);
    }
    if (current < total - 2) pages.push("...");
    pages.push(total);
    return pages;
}

function goToPage(page) {
    browsePage = page;
    renderBrowse();
    var stickyTop = document.querySelector(".sticky-top");
    if (stickyTop) {
        window.scrollTo({ top: 0, behavior: "smooth" });
    }
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
        { title: "Performance", specs: [
            { label: "Price", key: "price", format: v => formatPrice(v), best: "low" },
            { label: "Power", key: "hp", format: v => v + " hp", best: "high" },
            { label: "0-100 km/h", key: "zeroToHundred", format: v => v + "s", best: "low" },
            { label: "Drivetrain", key: "drivetrain", format: v => v, best: null },
        ]},
        { title: "Battery & range", specs: [
            { label: "Range", key: "range", format: v => v + " km", best: "high" },
            { label: "Battery", key: "kwh", format: v => v + " kWh", best: "high" },
            { label: "Consumption", key: "_consumption", format: v => v, best: "low" },
        ]},
        { title: "Practical", specs: [
            { label: "Seats", key: "seats", format: v => v, best: null },
            { label: "Trunk", key: "trunk", format: v => v ? v + " L" : "—", best: "high" },
            { label: "Segment", key: "segment", format: v => v, best: null },
            { label: "Year", key: "year", format: v => v, best: null },
        ]},
        { title: "Dimensions", specs: [
            { label: "Length", key: "length", format: v => v ? (v / 1000).toFixed(2) + " m" : "—", best: null },
            { label: "Width", key: "width", format: v => v ? (v / 1000).toFixed(2) + " m" : "—", best: null },
            { label: "Height", key: "height", format: v => v ? (v / 1000).toFixed(2) + " m" : "—", best: null },
            { label: "Weight", key: "weight", format: v => v ? v.toLocaleString("en") + " kg" : "—", best: "low" },
        ]}
    ];

    const table = document.getElementById("compare-table");

    // Header row with car names — with move buttons
    const headerCells = cars.map((car, idx) => {
        const bc = BRAND_COLORS[car.make] || { primary: "#888" };
        const leftBtn = idx > 0
            ? `<button class="compare-move-btn" onclick="moveCompare(${idx}, ${idx - 1})" aria-label="Move left">◀</button>`
            : `<span class="compare-move-btn placeholder"></span>`;
        const rightBtn = idx < cars.length - 1
            ? `<button class="compare-move-btn" onclick="moveCompare(${idx}, ${idx + 1})" aria-label="Move right">▶</button>`
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
        <span class="compare-sort-label">Sort:</span>
        <button class="compare-sort-btn" onclick="sortCompareBy('price')">Price</button>
        <button class="compare-sort-btn" onclick="sortCompareBy('range')">Range</button>
        <button class="compare-sort-btn" onclick="sortCompareBy('hp')">Power</button>
        <button class="compare-sort-btn" onclick="sortCompareBy('zeroToHundred')">0-100</button>
        <button class="compare-sort-btn" onclick="sortCompareBy('weight')">Weight</button>
    </div>`;

    const headerRow = `<div class="compare-row header-row">
        <div class="compare-cell label-cell" style="display:flex;align-items:center;font-size:11px;text-transform:uppercase;letter-spacing:0.8px;color:var(--accent)">Car</div>
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

// ========== Modal ==========
function openModal(id) {
    const car = getCarById(id);
    if (!car) return;

    const modal = document.getElementById("car-modal");
    const body = document.getElementById("modal-body");

    const src = BRAND_SOURCES[car.make];

    body.innerHTML = `
        <div class="modal-title">${car.make} ${car.model}</div>
        <div class="modal-year">${car.year} · ${car.segment} · ${getCarCountryFlag(car)}</div>
        <div class="modal-price">${formatPrice(car.price)}</div>
        ${src ? `<a href="${src.url}" target="_blank" rel="noopener" class="modal-source-link">Source: ${src.name}</a>` : ''}

        <div class="modal-ad-banner">
            <ins class="adsbygoogle"
                 style="display:block"
                 data-ad-client="ca-pub-4678480487049419"
                 data-ad-slot="auto"
                 data-ad-format="auto"
                 data-full-width-responsive="true"></ins>
        </div>

        <div class="modal-section-title">Performance</div>
        <div class="modal-specs-grid">
            <div class="modal-spec">
                <div class="modal-spec-label">Power</div>
                <div class="modal-spec-value">${car.hp} hp</div>
            </div>
            <div class="modal-spec">
                <div class="modal-spec-label">0-100 km/h</div>
                <div class="modal-spec-value">${car.zeroToHundred}s</div>
            </div>
            <div class="modal-spec">
                <div class="modal-spec-label">Range</div>
                <div class="modal-spec-value">${car.range} km</div>
            </div>
            <div class="modal-spec">
                <div class="modal-spec-label">Drivetrain</div>
                <div class="modal-spec-value">${car.drivetrain}</div>
            </div>
        </div>

        <div class="modal-section-title">Details</div>
        <div class="modal-specs-grid">
            <div class="modal-spec">
                <div class="modal-spec-label">Battery</div>
                <div class="modal-spec-value">${car.battery}</div>
            </div>
            <div class="modal-spec">
                <div class="modal-spec-label">Seats</div>
                <div class="modal-spec-value">${car.seats}</div>
            </div>
            <div class="modal-spec">
                <div class="modal-spec-label">Type</div>
                <div class="modal-spec-value" style="font-size:14px">${car.segment}</div>
            </div>
            <div class="modal-spec">
                <div class="modal-spec-label">Consumption</div>
                <div class="modal-spec-value" style="font-size:14px">${(car.kwh / car.range * 100).toFixed(1)} kWh/100km</div>
            </div>
            <div class="modal-spec">
                <div class="modal-spec-label">Trunk</div>
                <div class="modal-spec-value">${car.trunk ? car.trunk + ' L' : '—'}</div>
            </div>
        </div>

        <div class="modal-section-title">Dimensions</div>
        <div class="modal-specs-grid">
            <div class="modal-spec">
                <div class="modal-spec-label">Length</div>
                <div class="modal-spec-value">${car.length} mm</div>
            </div>
            <div class="modal-spec">
                <div class="modal-spec-label">Width</div>
                <div class="modal-spec-value">${car.width} mm</div>
            </div>
            <div class="modal-spec">
                <div class="modal-spec-label">Height</div>
                <div class="modal-spec-value">${car.height} mm</div>
            </div>
            <div class="modal-spec">
                <div class="modal-spec-label">Weight</div>
                <div class="modal-spec-value">${car.weight} kg</div>
            </div>
        </div>

        <div class="modal-section-title">News and reviews</div>
        <div class="modal-news-links">
            ${renderNewsLinks(car)}
        </div>

        <div class="modal-rating">
            <div class="modal-section-title">Rating</div>
            ${renderStars(car.id, 28, true)}
        </div>

        <div class="modal-actions">
            <button class="modal-btn btn-compare ${isInCompare(car.id) ? 'added' : ''}"
                    onclick="toggleCompare(${car.id}); openModal(${car.id});">
                ${isInCompare(car.id) ? ICONS.check + ' Comparing' : ICONS.plus + ' Compare'}
            </button>
        </div>

        <div class="modal-disclaimer">
            Information is for guidance only and may contain errors. Prices and specifications may differ from actual values. Always contact the dealer for confirmed details.
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

    try { (adsbygoogle = window.adsbygoogle || []).push({}); (adsbygoogle = window.adsbygoogle || []).push({}); } catch(e) {}
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
        showToast("Please write your feedback first");
        return;
    }
    const subject = encodeURIComponent(`Tilbakemelding - ${type}`);
    const body = encodeURIComponent(`Type: ${type}\n\n${text}\n\n---\nSendt fra Elbil-appen`);
    window.open(`mailto:tilbakemelding@example.com?subject=${subject}&body=${body}`, "_self");
    showToast("Thank you for your feedback!");
    document.getElementById("feedback-text").value = "";
    closeFeedback();
}

document.getElementById("feedback-modal").addEventListener("click", function(e) {
    if (e.target === this) closeFeedback();
});

// ========== Tabs ==========
function switchTab(tab) {
    if (state.activeTab !== tab) trackEvent("tab_switch", { tab: tab });
    state.activeTab = tab;
    document.body.className = "tab-" + tab;
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

// ========== Floating Compare Bar ==========
function renderCompareBar() {
    const bar = document.getElementById("compare-bar");
    if (!bar) return;
    const itemsEl = document.getElementById("compare-bar-items");
    const countEl = document.getElementById("compare-bar-count");
    const count = state.compareList.length;

    if (count === 0) {
        bar.style.display = "none";
        return;
    }
    bar.style.display = "block";
    countEl.textContent = count;

    const cars = state.compareList.map(getCarById).filter(Boolean);
    itemsEl.innerHTML = cars.map(car => {
        const bc = BRAND_COLORS[car.make] || { primary: "#888" };
        const initials = (car.make.charAt(0) + car.model.charAt(0)).toUpperCase();
        return `
        <div class="compare-bar-item" title="${car.make} ${car.model}">
            <div class="compare-bar-thumb">
                <div class="car-img-placeholder small" style="background:linear-gradient(135deg, ${bc.primary}22, ${bc.primary}08)"><span>${initials}</span></div>
                <button class="compare-bar-item-remove" onclick="toggleCompare(${car.id}, event)" aria-label="Remove">✕</button>
            </div>
            <div class="compare-bar-name">
                <span class="compare-bar-make">${car.make}</span>
                <span class="compare-bar-model">${car.model}</span>
            </div>
        </div>`;
    }).join("");
}

function clearCompare() {
    state.compareList = [];
    saveState();
    updateUI();
}

// ========== Global Update ==========
function updateUI() {
    renderBrowse();
    renderCompare();
    renderCompareBar();
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

    // Collapse top nav (brand/tabs + extra filters) on scroll — keep search visible.
    const stickyTop = document.querySelector(".sticky-top");
    if (stickyTop) {
        let ticking = false;
        const onScroll = () => {
            if (ticking) return;
            ticking = true;
            requestAnimationFrame(() => {
                const y = window.scrollY || document.documentElement.scrollTop;
                stickyTop.classList.toggle("is-scrolled", y > 24);
                ticking = false;
                // Keep tab indicator aligned after height change transitions
                if (typeof switchTab === "function" && state.activeTab) {
                    const indicator = document.querySelector(".tab-indicator");
                    const activeTab = document.querySelector('.tab[data-tab="' + state.activeTab + '"]');
                    if (indicator && activeTab) {
                        const bar = activeTab.parentElement;
                        const barRect = bar.getBoundingClientRect();
                        const tabRect = activeTab.getBoundingClientRect();
                        indicator.style.left = (tabRect.left - barRect.left) + "px";
                        indicator.style.width = tabRect.width + "px";
                    }
                }
            });
        };
        window.addEventListener("scroll", onScroll, { passive: true });
    }

    // Search & filter (search is debounced so typing doesn't rebuild DOM on every keystroke)
    function resetPageAndRender() { browsePage = 1; renderBrowse(); }
    const debouncedRender = (function() {
        let t = null;
        return function() {
            if (t) clearTimeout(t);
            t = setTimeout(function() { t = null; browsePage = 1; renderBrowse(); }, 180);
        };
    })();
    document.getElementById("search-input").addEventListener("input", debouncedRender);
    document.getElementById("filter-brand").addEventListener("change", resetPageAndRender);
    document.getElementById("filter-type").addEventListener("change", resetPageAndRender);
    document.getElementById("filter-sort").addEventListener("change", resetPageAndRender);

    // Slider filters
    const priceMin = document.getElementById("price-min");
    const priceMax = document.getElementById("price-max");

    // Helpers for bubble/thumb active states
    function setDragging(inputEl, bubbleId, dragging) {
        if (!inputEl) return;
        const wrap = inputEl.closest(".dual-slider, .single-slider");
        const bubble = bubbleId ? document.getElementById(bubbleId) : null;
        if (dragging) {
            if (wrap) wrap.classList.add("is-dragging");
            if (bubble) bubble.classList.add("is-active");
        } else {
            if (wrap) wrap.classList.remove("is-dragging");
            if (bubble) bubble.classList.remove("is-active");
        }
    }
    function wireSlider(inputEl, bubbleId, onInput) {
        if (!inputEl) return;
        inputEl.addEventListener("input", onInput);
        inputEl.addEventListener("pointerdown", () => setDragging(inputEl, bubbleId, true));
        inputEl.addEventListener("pointerup", () => setDragging(inputEl, bubbleId, false));
        inputEl.addEventListener("pointercancel", () => setDragging(inputEl, bubbleId, false));
        inputEl.addEventListener("focus", () => setDragging(inputEl, bubbleId, true));
        inputEl.addEventListener("blur", () => setDragging(inputEl, bubbleId, false));
    }

    if (priceMin && priceMax) {
        // Prevent handles from crossing, swap z-index based on drag target
        const clampPrice = () => {
            const lo = parseInt(priceMin.value, 10);
            const hi = parseInt(priceMax.value, 10);
            if (lo > hi - PRICE_STEP) {
                if (document.activeElement === priceMin) priceMin.value = hi - PRICE_STEP;
                else priceMax.value = lo + PRICE_STEP;
            }
            updateSliderUI();
        };
        wireSlider(priceMin, "price-min-bubble", clampPrice);
        wireSlider(priceMax, "price-max-bubble", clampPrice);
        priceMin.addEventListener("change", resetPageAndRender);
        priceMax.addEventListener("change", resetPageAndRender);
        // Raise the thumb being interacted with above the other
        priceMin.addEventListener("pointerdown", () => { priceMin.style.zIndex = 3; priceMax.style.zIndex = 1; });
        priceMax.addEventListener("pointerdown", () => { priceMax.style.zIndex = 3; priceMin.style.zIndex = 1; });
    }
    updateSliderUI();

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
