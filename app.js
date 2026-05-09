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
        groundClearance: 170,
        emoji: "⚡", color: "#1a1a2e", segment: "Compact SUV"
    },
    {
        id: 2, make: "BMW", model: "iX3", year: 2025, price: 599900,
        type: "suv", hp: 286, kwh: 80, zeroToHundred: 6.8, seats: 5,
        drivetrain: "RWD", battery: "80 kWh", range: 460,
        length: 4734, width: 1891, height: 1668, weight: 2185, trunk: 510,
        groundClearance: 179,
        emoji: "⚡", color: "#16213e", segment: "Mid-size SUV"
    },
    {
        id: 72, make: "BMW", model: "iX3 50 xDrive Fully Charged", year: 2026, price: 679900,
        type: "suv", hp: 463, kwh: 108, zeroToHundred: 4.9, seats: 5,
        drivetrain: "AWD", battery: "108 kWh", range: 805,
        length: 4734, width: 1920, height: 1660, weight: 2310, trunk: 510,
        groundClearance: 180,
        emoji: "⚡", color: "#16213e", segment: "Mid-size SUV"
    },
    {
        id: 73, make: "BMW", model: "iX3 50 xDrive M Sport", year: 2026, price: 749900,
        type: "suv", hp: 463, kwh: 108, zeroToHundred: 4.9, seats: 5,
        drivetrain: "AWD", battery: "108 kWh", range: 805,
        length: 4734, width: 1920, height: 1660, weight: 2310, trunk: 510,
        groundClearance: 180,
        emoji: "⚡", color: "#16213e", segment: "Mid-size SUV"
    },
    {
        id: 74, make: "BMW", model: "iX3 50 xDrive M Sport Pro", year: 2026, price: 892000,
        type: "suv", hp: 463, kwh: 108, zeroToHundred: 4.9, seats: 5,
        drivetrain: "AWD", battery: "108 kWh", range: 805,
        length: 4734, width: 1920, height: 1660, weight: 2310, trunk: 510,
        groundClearance: 180,
        emoji: "⚡", color: "#16213e", segment: "Mid-size SUV"
    },
    {
        id: 100, make: "BMW", model: "i3 50 xDrive Sedan", year: 2026, price: 579900,
        type: "sedan", hp: 469, kwh: 108, zeroToHundred: 4.0, seats: 5,
        drivetrain: "AWD", battery: "108 kWh", range: 900,
        length: 4760, width: 1865, height: 1480, weight: 2150, trunk: 480,
        groundClearance: 140,
        emoji: "⚡", color: "#2e1a1a", segment: "Mid-size Sedan"
    },
    {
        id: 3, make: "BMW", model: "iX xDrive40", year: 2025, price: 799900,
        type: "suv", hp: 326, kwh: 76.6, zeroToHundred: 6.1, seats: 5,
        drivetrain: "AWD", battery: "76.6 kWh", range: 425,
        length: 4953, width: 1967, height: 1696, weight: 2440, trunk: 500,
        groundClearance: 202,
        emoji: "⚡", color: "#1b2838", segment: "Large SUV"
    },
    {
        id: 4, make: "BMW", model: "iX xDrive50", year: 2025, price: 999900,
        type: "suv", hp: 523, kwh: 111.5, zeroToHundred: 4.6, seats: 5,
        drivetrain: "AWD", battery: "111.5 kWh", range: 630,
        length: 4953, width: 1967, height: 1696, weight: 2510, trunk: 500,
        groundClearance: 203,
        emoji: "⚡", color: "#1a2e2e", segment: "Large SUV"
    },
    {
        id: 5, make: "BMW", model: "i4 eDrive40", year: 2025, price: 569900,
        type: "sedan", hp: 340, kwh: 83.9, zeroToHundred: 5.7, seats: 5,
        drivetrain: "RWD", battery: "83.9 kWh", range: 590,
        length: 4783, width: 1852, height: 1448, weight: 2125, trunk: 470,
        groundClearance: 125,
        emoji: "⚡", color: "#1a1a2e", segment: "Mid-size Sedan"
    },
    {
        id: 6, make: "BMW", model: "i4 M50", year: 2025, price: 729900,
        type: "sedan", hp: 544, kwh: 83.9, zeroToHundred: 3.9, seats: 5,
        drivetrain: "AWD", battery: "83.9 kWh", range: 520,
        length: 4783, width: 1852, height: 1448, weight: 2215, trunk: 470,
        groundClearance: 125,
        emoji: "⚡", color: "#2d1b2e", segment: "Performance Sedan"
    },
    {
        id: 71, make: "BMW", model: "i4 M60", year: 2025, price: 849900,
        type: "sedan", hp: 619, kwh: 83.9, zeroToHundred: 3.5, seats: 5,
        drivetrain: "AWD", battery: "83.9 kWh", range: 490,
        length: 4783, width: 1852, height: 1448, weight: 2275, trunk: 470,
        groundClearance: 125,
        emoji: "⚡", color: "#2d1b2e", segment: "Performance Sedan"
    },
    {
        id: 7, make: "BMW", model: "i5 eDrive40", year: 2025, price: 659900,
        type: "sedan", hp: 340, kwh: 83.9, zeroToHundred: 6.0, seats: 5,
        drivetrain: "RWD", battery: "83.9 kWh", range: 580,
        length: 5060, width: 1900, height: 1505, weight: 2210, trunk: 490,
        groundClearance: 147,
        emoji: "⚡", color: "#1b2e1b", segment: "Executive Sedan"
    },
    {
        id: 8, make: "BMW", model: "i7 xDrive60", year: 2025, price: 1299900,
        type: "sedan", hp: 544, kwh: 101.7, zeroToHundred: 4.7, seats: 5,
        drivetrain: "AWD", battery: "101.7 kWh", range: 590,
        length: 5391, width: 1950, height: 1544, weight: 2640, trunk: 500,
        groundClearance: 136,
        emoji: "⚡", color: "#2e2e1a", segment: "Luxury Sedan"
    },

    // ===== AUDI =====
    {
        id: 9, make: "Audi", model: "Q4 e-tron 40", year: 2025, price: 479900,
        type: "suv", hp: 204, kwh: 77, zeroToHundred: 8.5, seats: 5,
        drivetrain: "RWD", battery: "77 kWh", range: 520,
        length: 4588, width: 1865, height: 1632, weight: 2060, trunk: 520,
        groundClearance: 180,
        emoji: "⚡", color: "#1a1a2e", segment: "Compact SUV"
    },
    {
        id: 10, make: "Audi", model: "Q4 e-tron 50 quattro", year: 2025, price: 559900,
        type: "suv", hp: 299, kwh: 77, zeroToHundred: 6.2, seats: 5,
        drivetrain: "AWD", battery: "77 kWh", range: 490,
        length: 4588, width: 1865, height: 1632, weight: 2135, trunk: 520,
        groundClearance: 180,
        emoji: "⚡", color: "#16213e", segment: "Compact SUV"
    },
    {
        id: 11, make: "Audi", model: "Q6 e-tron quattro", year: 2025, price: 699900,
        type: "suv", hp: 387, kwh: 100, zeroToHundred: 5.9, seats: 5,
        drivetrain: "AWD", battery: "100 kWh", range: 625,
        length: 4771, width: 1939, height: 1648, weight: 2325, trunk: 526,
        groundClearance: 184,
        emoji: "⚡", color: "#1b2838", segment: "Mid-size SUV"
    },
    {
        id: 12, make: "Audi", model: "Q8 e-tron 55 quattro", year: 2025, price: 849900,
        type: "suv", hp: 408, kwh: 114, zeroToHundred: 5.6, seats: 5,
        drivetrain: "AWD", battery: "114 kWh", range: 580,
        length: 4915, width: 1937, height: 1633, weight: 2595, trunk: 569,
        groundClearance: 176,
        emoji: "⚡", color: "#1a2e2e", segment: "Large SUV"
    },
    {
        id: 13, make: "Audi", model: "e-tron GT quattro", year: 2025, price: 1099900,
        type: "sedan", hp: 530, kwh: 97, zeroToHundred: 3.6, seats: 4,
        drivetrain: "AWD", battery: "97 kWh", range: 490,
        length: 4989, width: 1964, height: 1414, weight: 2340, trunk: 405,
        groundClearance: 125,
        emoji: "⚡", color: "#2d1b2e", segment: "Performance Sedan"
    },
    {
        id: 14, make: "Audi", model: "A6 e-tron", year: 2026, price: 649900,
        type: "sedan", hp: 381, kwh: 100, zeroToHundred: 5.4, seats: 5,
        drivetrain: "AWD", battery: "100 kWh", range: 700,
        length: 4928, width: 1923, height: 1527, weight: 2270, trunk: 502,
        groundClearance: 143,
        emoji: "⚡", color: "#1b2e1b", segment: "Executive Sedan"
    },

    // ===== MERCEDES-BENZ =====
    {
        id: 15, make: "Mercedes", model: "EQA 250+", year: 2025, price: 499900,
        type: "suv", hp: 190, kwh: 70.5, zeroToHundred: 8.6, seats: 5,
        drivetrain: "FWD", battery: "70.5 kWh", range: 528,
        length: 4463, width: 1834, height: 1620, weight: 2055, trunk: 340,
        groundClearance: 154,
        emoji: "⚡", color: "#1a1a2e", segment: "Compact SUV"
    },
    {
        id: 16, make: "Mercedes", model: "EQB 250+", year: 2025, price: 539900,
        type: "suv", hp: 190, kwh: 70.5, zeroToHundred: 8.9, seats: 7,
        drivetrain: "FWD", battery: "70.5 kWh", range: 505,
        length: 4684, width: 1834, height: 1701, weight: 2175, trunk: 495,
        groundClearance: 154,
        emoji: "⚡", color: "#16213e", segment: "Compact SUV"
    },
    {
        id: 17, make: "Mercedes", model: "EQC 400 4MATIC", year: 2025, price: 649900,
        type: "suv", hp: 408, kwh: 80, zeroToHundred: 5.1, seats: 5,
        drivetrain: "AWD", battery: "80 kWh", range: 430,
        length: 4762, width: 1884, height: 1624, weight: 2420, trunk: 500,
        groundClearance: 142,
        emoji: "⚡", color: "#1b2838", segment: "Mid-size SUV"
    },
    {
        id: 75, make: "Mercedes", model: "GLC 400 4MATIC", year: 2026, price: 699900,
        type: "suv", hp: 483, kwh: 94.4, zeroToHundred: 4.3, seats: 5,
        drivetrain: "AWD", battery: "94.4 kWh", range: 702,
        length: 4845, width: 1913, height: 1644, weight: 2430, trunk: 520,
        groundClearance: 180,
        emoji: "⚡", color: "#2e1a1a", segment: "Mid-size SUV"
    },
    {
        id: 18, make: "Mercedes", model: "EQE 350+", year: 2025, price: 749900,
        type: "sedan", hp: 292, kwh: 96, zeroToHundred: 6.4, seats: 5,
        drivetrain: "RWD", battery: "96 kWh", range: 620,
        length: 4946, width: 1906, height: 1503, weight: 2355, trunk: 430,
        groundClearance: 134,
        emoji: "⚡", color: "#1a2e2e", segment: "Executive Sedan"
    },
    {
        id: 19, make: "Mercedes", model: "EQE SUV 350+", year: 2025, price: 819900,
        type: "suv", hp: 292, kwh: 96, zeroToHundred: 6.6, seats: 5,
        drivetrain: "RWD", battery: "96 kWh", range: 590,
        length: 4863, width: 1940, height: 1686, weight: 2510, trunk: 520,
        groundClearance: 180,
        emoji: "⚡", color: "#2d1b2e", segment: "Large SUV"
    },
    {
        id: 20, make: "Mercedes", model: "EQS 450+", year: 2025, price: 1099900,
        type: "sedan", hp: 360, kwh: 118, zeroToHundred: 5.8, seats: 5,
        drivetrain: "RWD", battery: "118 kWh", range: 770,
        length: 5216, width: 1926, height: 1512, weight: 2480, trunk: 610,
        groundClearance: 134,
        emoji: "⚡", color: "#1b2e1b", segment: "Luxury Sedan"
    },
    {
        id: 21, make: "Mercedes", model: "EQS SUV 450+", year: 2025, price: 1199900,
        type: "suv", hp: 360, kwh: 118, zeroToHundred: 6.0, seats: 7,
        drivetrain: "RWD", battery: "118 kWh", range: 670,
        length: 5125, width: 1959, height: 1718, weight: 2710, trunk: 565,
        groundClearance: 181,
        emoji: "⚡", color: "#2e2e1a", segment: "Luxury SUV"
    },

    // ===== PORSCHE =====
    {
        id: 22, make: "Porsche", model: "Taycan", year: 2025, price: 899900,
        type: "sedan", hp: 408, kwh: 93.4, zeroToHundred: 4.8, seats: 4,
        drivetrain: "RWD", battery: "93.4 kWh", range: 590,
        length: 4963, width: 1966, height: 1381, weight: 2130, trunk: 407,
        groundClearance: 127,
        emoji: "⚡", color: "#2e1a1a", segment: "Performance Sedan"
    },
    {
        id: 23, make: "Porsche", model: "Taycan 4S", year: 2025, price: 1049900,
        type: "sedan", hp: 530, kwh: 93.4, zeroToHundred: 3.7, seats: 4,
        drivetrain: "AWD", battery: "93.4 kWh", range: 560,
        length: 4963, width: 1966, height: 1381, weight: 2215, trunk: 407,
        groundClearance: 127,
        emoji: "⚡", color: "#2d1b2e", segment: "Performance Sedan"
    },
    {
        id: 24, make: "Porsche", model: "Taycan Turbo", year: 2025, price: 1449900,
        type: "sedan", hp: 680, kwh: 97, zeroToHundred: 3.2, seats: 4,
        drivetrain: "AWD", battery: "97 kWh", range: 550,
        length: 4963, width: 1966, height: 1381, weight: 2290, trunk: 407,
        groundClearance: 127,
        emoji: "⚡", color: "#1a1a2e", segment: "Performance Sedan"
    },
    {
        id: 78, make: "Porsche", model: "Taycan Turbo S", year: 2025, price: 1749900,
        type: "sedan", hp: 775, kwh: 97, zeroToHundred: 2.4, seats: 4,
        drivetrain: "AWD", battery: "97 kWh", range: 630,
        length: 4963, width: 1966, height: 1381, weight: 2345, trunk: 407,
        groundClearance: 127,
        emoji: "⚡", color: "#2e1a1a", segment: "Performance Sedan"
    },
    {
        id: 79, make: "Porsche", model: "Taycan 4 Cross Turismo", year: 2025, price: 1049900,
        type: "wagon", hp: 408, kwh: 93.4, zeroToHundred: 4.7, seats: 4,
        drivetrain: "AWD", battery: "93.4 kWh", range: 490,
        length: 4974, width: 1967, height: 1395, weight: 2295, trunk: 446,
        groundClearance: 147,
        emoji: "⚡", color: "#1b2e1b", segment: "Performance Wagon"
    },
    {
        id: 80, make: "Porsche", model: "Taycan Turbo S Cross Turismo", year: 2025, price: 1799900,
        type: "wagon", hp: 775, kwh: 97, zeroToHundred: 2.5, seats: 4,
        drivetrain: "AWD", battery: "97 kWh", range: 500,
        length: 4974, width: 1967, height: 1395, weight: 2370, trunk: 446,
        groundClearance: 147,
        emoji: "⚡", color: "#2e2e1a", segment: "Performance Wagon"
    },
    {
        id: 81, make: "Porsche", model: "Taycan GTS Sport Turismo", year: 2025, price: 1596300,
        type: "wagon", hp: 690, kwh: 97, zeroToHundred: 3.1, seats: 4,
        drivetrain: "AWD", battery: "97 kWh", range: 570,
        length: 4963, width: 1966, height: 1395, weight: 2310, trunk: 446,
        groundClearance: 147,
        emoji: "⚡", color: "#16213e", segment: "Performance Wagon"
    },
    {
        id: 82, make: "Porsche", model: "Taycan Turbo S Sport Turismo", year: 2025, price: 1749900,
        type: "wagon", hp: 775, kwh: 97, zeroToHundred: 2.4, seats: 4,
        drivetrain: "AWD", battery: "97 kWh", range: 600,
        length: 4963, width: 1966, height: 1395, weight: 2350, trunk: 446,
        groundClearance: 147,
        emoji: "⚡", color: "#2d1b2e", segment: "Performance Wagon"
    },
    {
        id: 25, make: "Porsche", model: "Macan Electric", year: 2025, price: 849900,
        type: "suv", hp: 408, kwh: 100, zeroToHundred: 5.2, seats: 5,
        drivetrain: "AWD", battery: "100 kWh", range: 613,
        length: 4784, width: 1938, height: 1624, weight: 2405, trunk: 540,
        groundClearance: 185,
        emoji: "⚡", color: "#16213e", segment: "Mid-size SUV"
    },
    {
        id: 26, make: "Porsche", model: "Macan Electric 4S", year: 2025, price: 999900,
        type: "suv", hp: 516, kwh: 100, zeroToHundred: 4.1, seats: 5,
        drivetrain: "AWD", battery: "100 kWh", range: 590,
        length: 4784, width: 1938, height: 1624, weight: 2405, trunk: 540,
        groundClearance: 185,
        emoji: "⚡", color: "#1b2838", segment: "Performance SUV"
    },
    {
        id: 76, make: "Porsche", model: "Cayenne Electric", year: 2026, price: 1116400,
        type: "suv", hp: 408, kwh: 113, zeroToHundred: 4.5, seats: 5,
        drivetrain: "AWD", battery: "113 kWh", range: 643,
        length: 4985, width: 1980, height: 1674, weight: 2525, trunk: 621,
        groundClearance: 210,
        emoji: "⚡", color: "#2e2e1a", segment: "Large SUV"
    },
    {
        id: 101, make: "Porsche", model: "Cayenne S Electric", year: 2026, price: 1389000,
        type: "suv", hp: 544, kwh: 113, zeroToHundred: 3.8, seats: 5,
        drivetrain: "AWD", battery: "113 kWh", range: 653,
        length: 4985, width: 1980, height: 1674, weight: 2565, trunk: 621,
        groundClearance: 210,
        emoji: "⚡", color: "#2e2e1a", segment: "Large SUV"
    },
    {
        id: 77, make: "Porsche", model: "Cayenne Turbo Electric", year: 2026, price: 1767100,
        type: "suv", hp: 1156, kwh: 113, zeroToHundred: 2.5, seats: 5,
        drivetrain: "AWD", battery: "113 kWh", range: 623,
        length: 4985, width: 1980, height: 1674, weight: 2600, trunk: 621,
        groundClearance: 210,
        emoji: "⚡", color: "#1a1a2e", segment: "Performance SUV"
    },

    // ===== TESLA =====
    {
        id: 27, make: "Tesla", model: "Model 3 Long Range", year: 2025, price: 449900,
        type: "sedan", hp: 366, kwh: 75, zeroToHundred: 4.4, seats: 5,
        drivetrain: "AWD", battery: "75 kWh", range: 629,
        length: 4720, width: 1849, height: 1441, weight: 1830, trunk: 594,
        groundClearance: 138,
        emoji: "⚡", color: "#1a1a2e", segment: "Mid-size Sedan"
    },
    {
        id: 28, make: "Tesla", model: "Model 3 Performance", year: 2025, price: 529900,
        type: "sedan", hp: 460, kwh: 75, zeroToHundred: 3.1, seats: 5,
        drivetrain: "AWD", battery: "75 kWh", range: 528,
        length: 4720, width: 1849, height: 1441, weight: 1836, trunk: 594,
        groundClearance: 138,
        emoji: "⚡", color: "#2d1b2e", segment: "Performance Sedan"
    },
    {
        id: 29, make: "Tesla", model: "Model Y Long Range", year: 2025, price: 479900,
        type: "suv", hp: 366, kwh: 75, zeroToHundred: 5.0, seats: 5,
        drivetrain: "AWD", battery: "75 kWh", range: 533,
        length: 4751, width: 1921, height: 1624, weight: 1979, trunk: 854,
        groundClearance: 167,
        emoji: "⚡", color: "#16213e", segment: "Mid-size SUV"
    },
    {
        id: 30, make: "Tesla", model: "Model Y Performance", year: 2025, price: 559900,
        type: "suv", hp: 460, kwh: 75, zeroToHundred: 3.7, seats: 5,
        drivetrain: "AWD", battery: "75 kWh", range: 514,
        length: 4751, width: 1921, height: 1624, weight: 1979, trunk: 854,
        groundClearance: 162,
        emoji: "⚡", color: "#1b2838", segment: "Performance SUV"
    },
    {
        id: 31, make: "Tesla", model: "Model S Long Range", year: 2025, price: 899900,
        type: "sedan", hp: 670, kwh: 100, zeroToHundred: 3.2, seats: 5,
        drivetrain: "AWD", battery: "100 kWh", range: 634,
        length: 4970, width: 1964, height: 1445, weight: 2162, trunk: 793,
        groundClearance: 117,
        emoji: "⚡", color: "#1b2e1b", segment: "Luxury Sedan"
    },
    {
        id: 32, make: "Tesla", model: "Model X Long Range", year: 2025, price: 1049900,
        type: "suv", hp: 670, kwh: 100, zeroToHundred: 3.9, seats: 7,
        drivetrain: "AWD", battery: "100 kWh", range: 576,
        length: 5037, width: 1999, height: 1684, weight: 2352, trunk: 2158,
        groundClearance: 166,
        emoji: "⚡", color: "#2e2e1a", segment: "Luxury SUV"
    },

    // ===== VOLKSWAGEN =====
    {
        id: 33, make: "Volkswagen", model: "ID.3 Pro S", year: 2025, price: 389900,
        type: "hatchback", hp: 204, kwh: 77, zeroToHundred: 7.9, seats: 5,
        drivetrain: "RWD", battery: "77 kWh", range: 560,
        length: 4261, width: 1809, height: 1568, weight: 1870, trunk: 385,
        groundClearance: 150,
        emoji: "⚡", color: "#1a1a2e", segment: "Compact"
    },
    {
        id: 34, make: "Volkswagen", model: "ID.4 Pro S", year: 2025, price: 469900,
        type: "suv", hp: 286, kwh: 77, zeroToHundred: 6.7, seats: 5,
        drivetrain: "RWD", battery: "77 kWh", range: 540,
        length: 4584, width: 1852, height: 1634, weight: 2124, trunk: 543,
        groundClearance: 170,
        emoji: "⚡", color: "#16213e", segment: "Compact SUV"
    },
    {
        id: 35, make: "Volkswagen", model: "ID.5 GTX", year: 2025, price: 549900,
        type: "suv", hp: 340, kwh: 77, zeroToHundred: 5.4, seats: 5,
        drivetrain: "AWD", battery: "77 kWh", range: 500,
        length: 4599, width: 1852, height: 1615, weight: 2173, trunk: 549,
        groundClearance: 163,
        emoji: "⚡", color: "#1b2838", segment: "Coupe SUV"
    },
    {
        id: 36, make: "Volkswagen", model: "ID.7 Pro S", year: 2025, price: 569900,
        type: "sedan", hp: 286, kwh: 86, zeroToHundred: 6.5, seats: 5,
        drivetrain: "RWD", battery: "86 kWh", range: 700,
        length: 4961, width: 1862, height: 1536, weight: 2160, trunk: 532,
        groundClearance: 149,
        emoji: "⚡", color: "#1a2e2e", segment: "Mid-size Sedan"
    },
    {
        id: 37, make: "Volkswagen", model: "ID. Buzz Pro", year: 2025, price: 599900,
        type: "van", hp: 286, kwh: 86, zeroToHundred: 7.9, seats: 7,
        drivetrain: "RWD", battery: "86 kWh", range: 460,
        length: 4712, width: 1985, height: 1927, weight: 2469, trunk: 1121,
        groundClearance: 161,
        emoji: "⚡", color: "#2e2e1a", segment: "MPV"
    },

    // ===== VOLVO =====
    {
        id: 38, make: "Volvo", model: "EX30 Single Motor", year: 2025, price: 349900,
        type: "suv", hp: 272, kwh: 69, zeroToHundred: 5.3, seats: 5,
        drivetrain: "RWD", battery: "69 kWh", range: 476,
        length: 4233, width: 1837, height: 1550, weight: 1790, trunk: 318,
        groundClearance: 175,
        emoji: "⚡", color: "#1a1a2e", segment: "Small SUV"
    },
    {
        id: 39, make: "Volvo", model: "EX30 Twin Motor", year: 2025, price: 468900,
        type: "suv", hp: 428, kwh: 69, zeroToHundred: 3.6, seats: 5,
        drivetrain: "AWD", battery: "69 kWh", range: 450,
        length: 4233, width: 1837, height: 1550, weight: 1830, trunk: 318,
        groundClearance: 175,
        emoji: "⚡", color: "#16213e", segment: "Small SUV"
    },
    {
        id: 40, make: "Volvo", model: "EC40 Recharge", year: 2025, price: 499900,
        type: "suv", hp: 252, kwh: 78, zeroToHundred: 7.4, seats: 5,
        drivetrain: "RWD", battery: "78 kWh", range: 478,
        length: 4440, width: 1873, height: 1591, weight: 2110, trunk: 413,
        groundClearance: 175,
        emoji: "⚡", color: "#1b2838", segment: "Coupe SUV"
    },
    {
        id: 41, make: "Volvo", model: "EX40 Recharge", year: 2025, price: 479900,
        type: "suv", hp: 252, kwh: 78, zeroToHundred: 7.4, seats: 5,
        drivetrain: "RWD", battery: "78 kWh", range: 476,
        length: 4425, width: 1873, height: 1651, weight: 2100, trunk: 452,
        groundClearance: 175,
        emoji: "⚡", color: "#1a2e2e", segment: "Compact SUV"
    },
    {
        id: 42, make: "Volvo", model: "EX90 Twin Motor", year: 2025, price: 899900,
        type: "suv", hp: 408, kwh: 111, zeroToHundred: 5.9, seats: 7,
        drivetrain: "AWD", battery: "111 kWh", range: 580,
        length: 5037, width: 1964, height: 1744, weight: 2818, trunk: 655,
        groundClearance: 212,
        emoji: "⚡", color: "#1b2e1b", segment: "Large SUV"
    },

    // ===== HYUNDAI =====
    {
        id: 43, make: "Hyundai", model: "Kona Electric 65 kWh", year: 2025, price: 369900,
        type: "suv", hp: 218, kwh: 65.4, zeroToHundred: 7.8, seats: 5,
        drivetrain: "FWD", battery: "65.4 kWh", range: 490,
        length: 4355, width: 1825, height: 1575, weight: 1740, trunk: 466,
        groundClearance: 170,
        emoji: "⚡", color: "#1a1a2e", segment: "Small SUV"
    },
    {
        id: 44, make: "Hyundai", model: "IONIQ 5 Long Range AWD", year: 2025, price: 449900,
        type: "suv", hp: 325, kwh: 84, zeroToHundred: 5.1, seats: 5,
        drivetrain: "AWD", battery: "84 kWh", range: 507,
        length: 4635, width: 1890, height: 1605, weight: 2100, trunk: 527,
        groundClearance: 178,
        emoji: "⚡", color: "#16213e", segment: "Mid-size SUV"
    },
    {
        id: 45, make: "Hyundai", model: "IONIQ 6 Long Range AWD", year: 2025, price: 519900,
        type: "sedan", hp: 325, kwh: 77.4, zeroToHundred: 5.1, seats: 5,
        drivetrain: "AWD", battery: "77.4 kWh", range: 583,
        length: 4855, width: 1880, height: 1495, weight: 2060, trunk: 401,
        groundClearance: 141,
        emoji: "⚡", color: "#1b2838", segment: "Mid-size Sedan"
    },

    // ===== KIA =====
    {
        id: 46, make: "Kia", model: "Niro EV", year: 2025, price: 399900,
        type: "suv", hp: 204, kwh: 64.8, zeroToHundred: 7.8, seats: 5,
        drivetrain: "FWD", battery: "64.8 kWh", range: 463,
        length: 4420, width: 1825, height: 1570, weight: 1791, trunk: 475,
        groundClearance: 160,
        emoji: "⚡", color: "#1a1a2e", segment: "Compact SUV"
    },
    {
        id: 47, make: "Kia", model: "EV6 Long Range AWD", year: 2025, price: 519000,
        type: "suv", hp: 325, kwh: 77.4, zeroToHundred: 5.2, seats: 5,
        drivetrain: "AWD", battery: "77.4 kWh", range: 506,
        length: 4695, width: 1890, height: 1550, weight: 2090, trunk: 490,
        groundClearance: 160,
        emoji: "⚡", color: "#16213e", segment: "Mid-size SUV"
    },
    {
        id: 48, make: "Kia", model: "EV9 Long Range AWD", year: 2025, price: 759900,
        type: "suv", hp: 384, kwh: 99.8, zeroToHundred: 5.3, seats: 7,
        drivetrain: "AWD", battery: "99.8 kWh", range: 501,
        length: 5010, width: 1980, height: 1755, weight: 2614, trunk: 828,
        groundClearance: 177,
        emoji: "⚡", color: "#1b2838", segment: "Large SUV"
    },

    // ===== SKODA =====
    {
        id: 49, make: "Skoda", model: "Enyaq iV 80", year: 2025, price: 449900,
        type: "suv", hp: 204, kwh: 77, zeroToHundred: 8.5, seats: 5,
        drivetrain: "RWD", battery: "77 kWh", range: 545,
        length: 4649, width: 1879, height: 1616, weight: 2104, trunk: 585,
        groundClearance: 186,
        emoji: "⚡", color: "#1a2e2e", segment: "Compact SUV"
    },
    {
        id: 50, make: "Skoda", model: "Enyaq Coupe RS", year: 2025, price: 579900,
        type: "suv", hp: 340, kwh: 77, zeroToHundred: 5.5, seats: 5,
        drivetrain: "AWD", battery: "77 kWh", range: 505,
        length: 4653, width: 1879, height: 1607, weight: 2166, trunk: 570,
        groundClearance: 173,
        emoji: "⚡", color: "#2d1b2e", segment: "Coupe SUV"
    },

    // ===== POLESTAR =====
    {
        id: 51, make: "Polestar", model: "2 Long Range Dual Motor", year: 2025, price: 472500,
        type: "sedan", hp: 421, kwh: 78, zeroToHundred: 4.2, seats: 5,
        drivetrain: "AWD", battery: "78 kWh", range: 487,
        length: 4606, width: 1859, height: 1482, weight: 2113, trunk: 405,
        groundClearance: 151,
        emoji: "⚡", color: "#1a1a2e", segment: "Mid-size Sedan"
    },
    {
        id: 52, make: "Polestar", model: "3 Long Range Dual Motor", year: 2025, price: 799900,
        type: "suv", hp: 489, kwh: 111, zeroToHundred: 4.7, seats: 5,
        drivetrain: "AWD", battery: "111 kWh", range: 560,
        length: 4900, width: 2024, height: 1614, weight: 2584, trunk: 484,
        groundClearance: 201,
        emoji: "⚡", color: "#16213e", segment: "Large SUV"
    },
    {
        id: 53, make: "Polestar", model: "4 Long Range Dual Motor", year: 2025, price: 649900,
        type: "suv", hp: 544, kwh: 100, zeroToHundred: 3.8, seats: 5,
        drivetrain: "AWD", battery: "100 kWh", range: 560,
        length: 4839, width: 2008, height: 1544, weight: 2435, trunk: 526,
        groundClearance: 166,
        emoji: "⚡", color: "#1b2838", segment: "Coupe SUV"
    },

    // ===== NIO =====
    {
        id: 54, make: "NIO", model: "ET5 Touring", year: 2025, price: 449900,
        type: "wagon", hp: 490, kwh: 100, zeroToHundred: 4.0, seats: 5,
        drivetrain: "AWD", battery: "100 kWh", range: 560,
        length: 4790, width: 1960, height: 1499, weight: 2250, trunk: 450,
        groundClearance: 135,
        emoji: "⚡", color: "#1b2e1b", segment: "Mid-size Wagon"
    },
    {
        id: 55, make: "NIO", model: "EL6", year: 2025, price: 539900,
        type: "suv", hp: 490, kwh: 100, zeroToHundred: 4.5, seats: 5,
        drivetrain: "AWD", battery: "100 kWh", range: 510,
        length: 4854, width: 1995, height: 1703, weight: 2290, trunk: 579,
        groundClearance: 170,
        emoji: "⚡", color: "#2e2e1a", segment: "Mid-size SUV"
    },
    {
        id: 56, make: "NIO", model: "EL7", year: 2025, price: 639900,
        type: "suv", hp: 653, kwh: 100, zeroToHundred: 3.9, seats: 5,
        drivetrain: "AWD", battery: "100 kWh", range: 485,
        length: 4912, width: 1987, height: 1720, weight: 2379, trunk: 658,
        groundClearance: 170,
        emoji: "⚡", color: "#2e1a1a", segment: "Mid-size SUV"
    },

    // ===== TOYOTA =====
    {
        id: 57, make: "Toyota", model: "bZ4X AWD", year: 2025, price: 449900,
        type: "suv", hp: 218, kwh: 71.4, zeroToHundred: 6.9, seats: 5,
        drivetrain: "AWD", battery: "71.4 kWh", range: 411,
        length: 4690, width: 1860, height: 1650, weight: 2005, trunk: 452,
        groundClearance: 177,
        emoji: "⚡", color: "#1a1a2e", segment: "Mid-size SUV"
    },

    // ===== FORD =====
    {
        id: 58, make: "Ford", model: "Mustang Mach-E Extended AWD", year: 2025, price: 529900,
        type: "suv", hp: 351, kwh: 91, zeroToHundred: 5.4, seats: 5,
        drivetrain: "AWD", battery: "91 kWh", range: 540,
        length: 4739, width: 1881, height: 1624, weight: 2198, trunk: 402,
        groundClearance: 145,
        emoji: "⚡", color: "#2e1a1a", segment: "Mid-size SUV"
    },
    {
        id: 59, make: "Ford", model: "Explorer Electric AWD", year: 2025, price: 479900,
        type: "suv", hp: 340, kwh: 79, zeroToHundred: 5.3, seats: 5,
        drivetrain: "AWD", battery: "79 kWh", range: 530,
        length: 4468, width: 1872, height: 1637, weight: 2128, trunk: 536,
        groundClearance: 141,
        emoji: "⚡", color: "#1b2838", segment: "Mid-size SUV"
    },

    // ===== XPENG =====
    {
        id: 60, make: "Xpeng", model: "G6", year: 2025, price: 399900,
        type: "suv", hp: 296, kwh: 87.5, zeroToHundred: 5.9, seats: 5,
        drivetrain: "RWD", battery: "87.5 kWh", range: 570,
        length: 4753, width: 1920, height: 1650, weight: 2095, trunk: 571,
        groundClearance: 160,
        emoji: "⚡", color: "#1a2e2e", segment: "Mid-size SUV"
    },
    {
        id: 61, make: "Xpeng", model: "G9", year: 2025, price: 569900,
        type: "suv", hp: 551, kwh: 98, zeroToHundred: 3.9, seats: 5,
        drivetrain: "AWD", battery: "98 kWh", range: 520,
        length: 4891, width: 1937, height: 1680, weight: 2320, trunk: 660,
        groundClearance: 195,
        emoji: "⚡", color: "#2d1b2e", segment: "Large SUV"
    },

    // ===== BYD =====
    {
        id: 62, make: "BYD", model: "Atto 3", year: 2025, price: 349900,
        type: "suv", hp: 204, kwh: 60.5, zeroToHundred: 7.3, seats: 5,
        drivetrain: "FWD", battery: "60.5 kWh", range: 420,
        length: 4455, width: 1875, height: 1615, weight: 1750, trunk: 440,
        groundClearance: 175,
        emoji: "⚡", color: "#1a1a2e", segment: "Compact SUV"
    },
    {
        id: 63, make: "BYD", model: "Tang EV600", year: 2025, price: 569900,
        type: "suv", hp: 517, kwh: 108.8, zeroToHundred: 4.6, seats: 7,
        drivetrain: "AWD", battery: "108.8 kWh", range: 530,
        length: 4870, width: 1950, height: 1725, weight: 2489, trunk: 580,
        groundClearance: 150,
        emoji: "⚡", color: "#16213e", segment: "Large SUV"
    },
    {
        id: 64, make: "BYD", model: "Seal", year: 2025, price: 439900,
        type: "sedan", hp: 313, kwh: 82.5, zeroToHundred: 5.9, seats: 5,
        drivetrain: "RWD", battery: "82.5 kWh", range: 570,
        length: 4800, width: 1875, height: 1460, weight: 2150, trunk: 400,
        groundClearance: 150,
        emoji: "⚡", color: "#1b2838", segment: "Mid-size Sedan"
    },

    // ===== CUPRA =====
    {
        id: 65, make: "Cupra", model: "Born 77 kWh", year: 2025, price: 419900,
        type: "hatchback", hp: 231, kwh: 77, zeroToHundred: 7.0, seats: 5,
        drivetrain: "RWD", battery: "77 kWh", range: 540,
        length: 4322, width: 1809, height: 1540, weight: 1900, trunk: 385,
        groundClearance: 150,
        emoji: "⚡", color: "#2e1a1a", segment: "Compact"
    },
    {
        id: 66, make: "Cupra", model: "Tavascan VZ", year: 2025, price: 539900,
        type: "suv", hp: 340, kwh: 77, zeroToHundred: 5.5, seats: 5,
        drivetrain: "AWD", battery: "77 kWh", range: 500,
        length: 4644, width: 1861, height: 1597, weight: 2188, trunk: 540,
        groundClearance: 154,
        emoji: "⚡", color: "#2d1b2e", segment: "Coupe SUV"
    },

    // ===== RENAULT =====
    {
        id: 67, make: "Renault", model: "Megane E-Tech 60", year: 2025, price: 299900,
        type: "hatchback", hp: 220, kwh: 60, zeroToHundred: 7.4, seats: 5,
        drivetrain: "FWD", battery: "60 kWh", range: 450,
        length: 4200, width: 1768, height: 1505, weight: 1636, trunk: 440,
        groundClearance: 135,
        emoji: "⚡", color: "#1b2e1b", segment: "Compact"
    },
    {
        id: 68, make: "Renault", model: "Scenic E-Tech 87", year: 2025, price: 389900,
        type: "suv", hp: 220, kwh: 87, zeroToHundred: 7.9, seats: 5,
        drivetrain: "FWD", battery: "87 kWh", range: 620,
        length: 4470, width: 1863, height: 1571, weight: 1871, trunk: 545,
        groundClearance: 180,
        emoji: "⚡", color: "#2e2e1a", segment: "Compact SUV"
    },

    // ===== SMART =====
    {
        id: 69, make: "Smart", model: "#1 Pro+", year: 2025, price: 399900,
        type: "suv", hp: 272, kwh: 66, zeroToHundred: 6.7, seats: 5,
        drivetrain: "RWD", battery: "66 kWh", range: 420,
        length: 4270, width: 1822, height: 1636, weight: 1820, trunk: 323,
        groundClearance: 182,
        emoji: "⚡", color: "#1a1a2e", segment: "Small SUV"
    },
    {
        id: 70, make: "Smart", model: "#3 BRABUS", year: 2025, price: 539900,
        type: "suv", hp: 428, kwh: 66, zeroToHundred: 3.7, seats: 5,
        drivetrain: "AWD", battery: "66 kWh", range: 400,
        length: 4400, width: 1844, height: 1556, weight: 1910, trunk: 370,
        groundClearance: 175,
        emoji: "⚡", color: "#2e1a1a", segment: "Coupe SUV"
    },
    // ===== ELDRE MODELLER =====
    {
        id: 83, make: "Nissan", model: "Leaf e+ 62 kWh", year: 2022, price: 349900,
        type: "hatchback", hp: 217, kwh: 62, zeroToHundred: 6.9, seats: 5,
        drivetrain: "FWD", battery: "62 kWh", range: 385,
        length: 4490, width: 1788, height: 1530, weight: 1730, trunk: 435,
        groundClearance: 150,
        emoji: "⚡", color: "#c3002f", segment: "Compact"
    },
    {
        id: 84, make: "Volkswagen", model: "e-Golf", year: 2020, price: 329900,
        type: "hatchback", hp: 136, kwh: 35.8, zeroToHundred: 9.6, seats: 5,
        drivetrain: "FWD", battery: "35.8 kWh", range: 231,
        length: 4270, width: 1799, height: 1450, weight: 1615, trunk: 341,
        groundClearance: 127,
        emoji: "⚡", color: "#003399", segment: "Compact"
    },
    {
        id: 85, make: "Jaguar", model: "I-PACE EV400", year: 2023, price: 769900,
        type: "suv", hp: 400, kwh: 90, zeroToHundred: 4.8, seats: 5,
        drivetrain: "AWD", battery: "90 kWh", range: 470,
        length: 4682, width: 2011, height: 1565, weight: 2208, trunk: 505,
        groundClearance: 174,
        emoji: "⚡", color: "#1a472a", segment: "Mid-size SUV"
    },
    {
        id: 86, make: "BMW", model: "i3 120Ah", year: 2022, price: 349900,
        type: "hatchback", hp: 170, kwh: 42.2, zeroToHundred: 7.3, seats: 4,
        drivetrain: "RWD", battery: "42.2 kWh", range: 310,
        length: 4006, width: 1775, height: 1600, weight: 1345, trunk: 260,
        groundClearance: 139,
        emoji: "⚡", color: "#0066B1", segment: "City Car"
    },
    {
        id: 87, make: "Tesla", model: "Model 3 Standard Range Plus", year: 2021, price: 399900,
        type: "sedan", hp: 283, kwh: 60, zeroToHundred: 5.6, seats: 5,
        drivetrain: "RWD", battery: "60 kWh", range: 448,
        length: 4694, width: 1849, height: 1443, weight: 1745, trunk: 425,
        groundClearance: 140,
        emoji: "⚡", color: "#CC0000", segment: "Mid-size Sedan"
    },
    {
        id: 88, make: "Hyundai", model: "IONIQ Electric 38 kWh", year: 2022, price: 319900,
        type: "sedan", hp: 136, kwh: 38.3, zeroToHundred: 9.9, seats: 5,
        drivetrain: "FWD", battery: "38.3 kWh", range: 311,
        length: 4470, width: 1820, height: 1450, weight: 1575, trunk: 357,
        groundClearance: 140,
        emoji: "⚡", color: "#002C5F", segment: "Compact Sedan"
    },
    {
        id: 89, make: "Audi", model: "e-tron 55 quattro", year: 2023, price: 699900,
        type: "suv", hp: 408, kwh: 95, zeroToHundred: 5.7, seats: 5,
        drivetrain: "AWD", battery: "95 kWh", range: 441,
        length: 4901, width: 1935, height: 1629, weight: 2565, trunk: 660,
        groundClearance: 176,
        emoji: "⚡", color: "#BB0A30", segment: "Large SUV"
    },
    {
        id: 90, make: "MG", model: "ZS EV Long Range", year: 2023, price: 299900,
        type: "suv", hp: 177, kwh: 72.6, zeroToHundred: 8.2, seats: 5,
        drivetrain: "FWD", battery: "72.6 kWh", range: 440,
        length: 4323, width: 1809, height: 1649, weight: 1760, trunk: 448,
        groundClearance: 161,
        emoji: "⚡", color: "#D4171E", segment: "Compact SUV"
    },
    {
        id: 91, make: "Renault", model: "ZOE R135", year: 2022, price: 299900,
        type: "hatchback", hp: 135, kwh: 52, zeroToHundred: 9.5, seats: 5,
        drivetrain: "FWD", battery: "52 kWh", range: 395,
        length: 4087, width: 1787, height: 1562, weight: 1502, trunk: 338,
        groundClearance: 120,
        emoji: "⚡", color: "#FFCC00", segment: "City Car"
    },
    {
        id: 92, make: "Tesla", model: "Model S P100D", year: 2020, price: 899900,
        type: "sedan", hp: 762, kwh: 100, zeroToHundred: 2.6, seats: 5,
        drivetrain: "AWD", battery: "100 kWh", range: 555,
        length: 4979, width: 1964, height: 1445, weight: 2241, trunk: 793,
        groundClearance: 117,
        emoji: "⚡", color: "#CC0000", segment: "Luxury Sedan"
    },
    {
        id: 93, make: "Kia", model: "e-Niro 64 kWh", year: 2021, price: 379900,
        type: "suv", hp: 204, kwh: 64, zeroToHundred: 7.8, seats: 5,
        drivetrain: "FWD", battery: "64 kWh", range: 455,
        length: 4375, width: 1805, height: 1560, weight: 1791, trunk: 451,
        groundClearance: 155,
        emoji: "⚡", color: "#05141F", segment: "Compact SUV"
    },
    {
        id: 94, make: "Mercedes", model: "EQC 400 4MATIC", year: 2021, price: 649900,
        type: "suv", hp: 408, kwh: 80, zeroToHundred: 5.1, seats: 5,
        drivetrain: "AWD", battery: "80 kWh", range: 374,
        length: 4762, width: 1884, height: 1624, weight: 2495, trunk: 500,
        groundClearance: 142,
        emoji: "⚡", color: "#00ADEF", segment: "Mid-size SUV"
    },
    {
        id: 95, make: "Opel", model: "Mokka-e", year: 2023, price: 349900,
        type: "suv", hp: 136, kwh: 50, zeroToHundred: 9.0, seats: 5,
        drivetrain: "FWD", battery: "50 kWh", range: 338,
        length: 4151, width: 1791, height: 1531, weight: 1598, trunk: 350,
        groundClearance: 164,
        emoji: "⚡", color: "#000000", segment: "Small SUV"
    },
    {
        id: 96, make: "Fiat", model: "500e La Prima", year: 2023, price: 319900,
        type: "hatchback", hp: 118, kwh: 42, zeroToHundred: 9.0, seats: 4,
        drivetrain: "FWD", battery: "42 kWh", range: 321,
        length: 3631, width: 1773, height: 1527, weight: 1365, trunk: 185,
        groundClearance: 130,
        emoji: "⚡", color: "#8B0000", segment: "City Car"
    },
    {
        id: 97, make: "Volvo", model: "XC40 Recharge P8", year: 2022, price: 529900,
        type: "suv", hp: 408, kwh: 78, zeroToHundred: 4.9, seats: 5,
        drivetrain: "AWD", battery: "78 kWh", range: 418,
        length: 4425, width: 1873, height: 1651, weight: 2188, trunk: 452,
        groundClearance: 175,
        emoji: "⚡", color: "#003057", segment: "Compact SUV"
    },
    {
        id: 98, make: "Ford", model: "Mustang Mach-E Standard Range", year: 2022, price: 449900,
        type: "suv", hp: 269, kwh: 75.7, zeroToHundred: 6.2, seats: 5,
        drivetrain: "RWD", battery: "75.7 kWh", range: 440,
        length: 4739, width: 1881, height: 1624, weight: 2100, trunk: 402,
        groundClearance: 145,
        emoji: "⚡", color: "#003478", segment: "Mid-size SUV"
    },
    {
        id: 99, make: "Peugeot", model: "e-2008 GT", year: 2023, price: 379900,
        type: "suv", hp: 136, kwh: 50, zeroToHundred: 9.0, seats: 5,
        drivetrain: "FWD", battery: "50 kWh", range: 345,
        length: 4300, width: 1770, height: 1550, weight: 1623, trunk: 434,
        groundClearance: 174,
        emoji: "⚡", color: "#1A237E", segment: "Small SUV"
    }
];

// ========== Country of origin ==========
var BRAND_COUNTRY = {
    "BMW": "Tyskland", "Audi": "Tyskland", "Mercedes": "Tyskland", "Porsche": "Tyskland",
    "Volkswagen": "Tyskland", "Opel": "Tyskland",
    "Tesla": "USA", "Ford": "USA",
    "Volvo": "Sverige", "Polestar": "Sverige",
    "Hyundai": "Sør-Korea", "Kia": "Sør-Korea",
    "Skoda": "Tsjekkia",
    "Toyota": "Japan", "Nissan": "Japan",
    "Renault": "Frankrike", "Peugeot": "Frankrike",
    "NIO": "Kina", "Xpeng": "Kina", "BYD": "Kina", "MG": "Kina", "Smart": "Kina",
    "Cupra": "Spania", "Jaguar": "Storbritannia", "Fiat": "Italia"
};
var COUNTRY_FLAGS = {
    "Tyskland": "\u{1F1E9}\u{1F1EA}", "USA": "\u{1F1FA}\u{1F1F8}", "Sverige": "\u{1F1F8}\u{1F1EA}",
    "Sør-Korea": "\u{1F1F0}\u{1F1F7}", "Tsjekkia": "\u{1F1E8}\u{1F1FF}", "Japan": "\u{1F1EF}\u{1F1F5}",
    "Frankrike": "\u{1F1EB}\u{1F1F7}", "Kina": "\u{1F1E8}\u{1F1F3}", "Spania": "\u{1F1EA}\u{1F1F8}",
    "Storbritannia": "\u{1F1EC}\u{1F1E7}", "Italia": "\u{1F1EE}\u{1F1F9}"
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
    "Porsche Taycan": "Porsche Taycan er merkets første helelektriske bil og posisjoneres i segmentet for luksus-sportssedaner. Den er bygget på en 800-volts arkitektur som gir kort DC-ladetid og muliggjør gjentatte fullgass-akselerasjoner uten merkbar ytelsestap. Rekkevidden er moderat sammenlignet med konkurrenter som Mercedes EQS og Lucid Air, mens kjøredynamikk, chassisbalanse og konsistens ved sporty kjøring regnes som modellens sterkeste sider. Bagasjeromsplass og plass i baksetet er begrenset grunnet det lave, sportslige karosseriet; Sport Turismo- og Cross Turismo-variantene tilbyr noe mer praktisk nytte. (Tekst: AI-generert)",
    "Porsche Macan": "Porsche Macan Electric er den helelektriske versjonen av merkets bestselgende SUV. Den deler 800-volts plattform med Taycan og tilbyr dermed rask DC-lading opp mot 270 kW. Kjøreegenskapene er blant de beste i klassen for kompakte luksus-SUV-er, med lavt tyngdepunkt og adaptivt luftfjæring som standard på flere varianter. Bagasjerommet er på nivå med forgjengeren, og bilen er tilgjengelig med både bakhjulsdrift og firehjulsdrift. (Tekst: AI-generert)",
    "Porsche Cayenne": "Porsche Cayenne Electric markerer overgangen til elektrisk drift for merkets store SUV. Bilen bygger på en ny plattform med 800-volts arkitektur og skal kombinere Porsches sportslighet med det romslighets- og komfortnivået Cayenne er kjent for. Forventet rekkevidde og ytelse plasserer den i konkurranse med BMW iX og Mercedes EQS SUV. Bilen får luftfjæring og adaptivt understell som standard. (Tekst: AI-generert)",
    "BMW iX1": "BMW iX1 er merkets mest kompakte elektriske SUV og baseres på FAAR-plattformen. Den tilbyr et praktisk interiør med godt med plass til passasjerer og bagasje i forhold til sine ytre mål. Firehjulsdrift er standard på xDrive-varianten, og rekkevidden er tilstrekkelig for de fleste daglige behov. Bilen konkurrerer direkte mot Audi Q4 e-tron og Mercedes EQA i det populære kompakt-SUV-segmentet. (Tekst: AI-generert)",
    "BMW iX3": "BMW iX3 er en mellomklasse elektrisk SUV som kombinerer BMWs kjøredynamikk med et romslig og familievennlig interiør. Femte generasjon eDrive-teknologi gir effektiv kraftoverføring, og bilen tilbyr hurtiglading med opptil 180 kW DC. Bagasjerommet er blant de større i klassen. Bilen konkurrerer med modeller som Mercedes EQC og Audi Q6 e-tron. (Tekst: AI-generert)",
    "BMW iX": "BMW iX er merkets elektriske flaggskip-SUV, bygget på en dedikert elbilplattform. Den bruker karbonfiberforsterket karosseri for å holde vekten nede, og tilbyr et minimalistisk interiør med store skjermer og bærekraftige materialer. Rekkevidden er konkurransedyktig i luksus-SUV-segmentet, og DC-lading støttes med opptil 200 kW. Luftfjæring og adaptivt understell gir en komfortabel kjøreopplevelse. (Tekst: AI-generert)",
    "BMW i4": "BMW i4 er en elektrisk sedan i Gran Coupé-format som deler visuell profil med 4-serien. Den leveres med bakhjulsdrift i eDrive40-versjonen og firehjulsdrift i M-variantene. Kjøreegenskapene er blant de mest sporty i elbilsegmentet, og rekkevidden er konkurransedyktig for klassen. M50- og M60-versjonene retter seg mot entusiaster med høyere effekt og strammere understell. (Tekst: AI-generert)",
    "BMW i5": "BMW i5 er den elektriske versjonen av 5-serien og posisjoneres som en romslig eksekutivsedaner. Bilen tilbyr et komfortabelt interiør med god plass i baksetet og et stort bagasjerom. Teknologien inkluderer BMWs nyeste iDrive-system med buet skjermflate. Rekkevidden og ladeytelsen gjør den egnet for lengre reiser, og den konkurrerer direkte med Mercedes EQE og Audi A6 e-tron. (Tekst: AI-generert)",
    "BMW i7": "BMW i7 er merkets mest luksuriøse elbil og representerer toppmodellen i 7-serien. Den har et overdådig interiør med Theatre Screen i baksetet, massasjeseter og Bowers & Wilkins-lydanlegg som tilvalg. Rekkevidden er god til tross for bilens størrelse, og 195 kW DC-lading gir akseptable ladestopp. Bilen konkurrerer med Mercedes EQS og er primært rettet mot komfort og representasjon. (Tekst: AI-generert)",
    "BMW i3 120Ah": "BMW i3 var en av de tidligste premium-elbilene på markedet og ble produsert fra 2013 til 2022. Den har et kompakt, høyreist design med karbonfiber-karosseri som holdt vekten nede. Batteriet på 42,2 kWh gir begrenset rekkevidde etter dagens standard, men bilen fungerer godt som bybil. Interiøret bruker bærekraftige materialer og har et karakteristisk, åpent design. (Tekst: AI-generert)",
    "BMW i3 50": "Nye BMW i3 er en kompakt elektrisk sedan basert på den nye Neue Klasse-plattformen. Den representerer et generasjonsskifte i BMWs elbilstrategi med ny battericelletegnologi og forbedret effektivitet. Bilen tilbyr et moderne interiør med nytt operativsystem og et design som skiller seg fra forgjengeren. Rekkevidden og ladeytelsen er vesentlig forbedret sammenlignet med eldre BMW-elbiler. (Tekst: AI-generert)",
    "Audi Q4": "Audi Q4 e-tron er en kompakt elektrisk SUV bygget på Volkswagen-gruppens MEB-plattform. Den tilbyr et romslig interiør i forhold til ytre dimensjoner, med et bagasjerom på 520 liter. Augmented reality head-up-display er tilgjengelig som tilvalg. Bilen leveres med både bakhjulsdrift og quattro firehjulsdrift, og rekkevidden på opptil 520 km gjør den konkurransedyktig i klassen. (Tekst: AI-generert)",
    "Audi Q6": "Audi Q6 e-tron er basert på den nye PPE-plattformen utviklet sammen med Porsche, med 800-volts arkitektur som standard. Det gir DC-lading opp mot 270 kW og kort ladetid fra 10 til 80 prosent. Interiøret har et nytt digitalt cockpit-design med opptil tre skjermer. Bilen plasseres mellom Q4 og Q8 i størrelse og tilbyr god plass til familie og bagasje. (Tekst: AI-generert)",
    "Audi Q8": "Audi Q8 e-tron er merkets store elektriske SUV og representerer en oppdatert videreføring av den opprinnelige e-tron. Den har et romslig interiør med premiummaterialer og luftfjæring som standard. Batteriet på 114 kWh gir en av de lengste rekkeviddene i klassen. DC-ladeytelsen ble forbedret i Q8-oppgraderingen til 170 kW, og bilen er tilgjengelig i både SUV- og Sportback-form. (Tekst: AI-generert)",
    "Audi e-tron GT": "Audi e-tron GT er en firedørs Gran Turismo som deler 800-volts plattform med Porsche Taycan. Den kombinerer sportsbilytelse med Audis komfort- og kvalitetsnivå. Quattro firehjulsdrift er standard, og akselerasjonen er blant de raskeste i merkets historie. Rekkevidden er tilstrekkelig for lengre turer, men bagasjerommet er begrenset grunnet det lave taket. RS-versjonen tilbyr ytterligere ytelse og et strammere understell. (Tekst: AI-generert)",
    "Audi A6": "Audi A6 e-tron er merkets kommende elektriske eksekutivsedaner bygget på PPE-plattformen. Med 800-volts arkitektur og opptil 270 kW DC-lading er den blant de raskeste til å lade i klassen. Det elegante designet har en svært lav luftmotstandskoeffisient som bidrar til god rekkevidde. Bilen konkurrerer direkte med BMW i5 og Mercedes EQE. (Tekst: AI-generert)",
    "Mercedes EQA": "Mercedes EQA er merkets kompakte elektriske SUV og den mest tilgjengelige modellen i EQ-serien. Den baseres på GLA-plattformen og tilbyr et velkjent Mercedes-interiør med MBUX-infotainment. Rekkevidden er tilstrekkelig for daglig bruk, og bilen er tilgjengelig med både forhjulsdrift og 4MATIC firehjulsdrift. Kompakte ytre mål gjør den enkel å manøvrere i bymiljø. (Tekst: AI-generert)",
    "Mercedes EQB": "Mercedes EQB skiller seg ut i kompaktklassen med sitt sjuseteralternativ, noe som er uvanlig blant elektriske SUV-er i denne størrelsen. Bilen er basert på GLB-plattformen og har et høyreist, kasseformet design som maksimerer innvendig plass. Tredje seterad passer best for barn, men gir fleksibilitet for familier. Rekkevidden og ladeytelsen er i tråd med segmentets gjennomsnitt. (Tekst: AI-generert)",
    "Mercedes EQC": "Mercedes EQC var merkets første dedikerte helelektriske SUV da den ble lansert. Bilen har et komfortabelt interiør med god støyisolering og et pent utført dashbord. Firehjulsdrift er standard, noe som gir godt veggrep under norske vinterforhold. Rekkevidden er moderat sammenlignet med nyere konkurrenter, men bilen kompenserer med høy komfort og kjørekvalitet. (Tekst: AI-generert)",
    "Mercedes GLC": "Mercedes GLC Electric er den helelektriske versjonen av merkets bestselgende SUV-modell. Den bygger på en ny plattform som er optimalisert for elektrisk drift, med forbedret plass og effektivitet. Interiøret følger Mercedes' nyeste designspråk med stor sentralskjerm. Bilen kombinerer det praktiske formatet til GLC med utslippsfri drift og moderne elbilteknologi. (Tekst: AI-generert)",
    "Mercedes EQE": "Mercedes EQE er en elektrisk eksekutivsedaner basert på den dedikerte EVA2-plattformen. Den har et strømlinjeformet design med en av de laveste luftmotstandskoeffisientene i klassen, noe som bidrar til god rekkevidde. Interiøret er romslig med Hyperscreen som tilvalg — en skjerm som dekker hele dashbordet. SUV-varianten tilbyr ekstra bakkeklaring og et mer praktisk karosseri. (Tekst: AI-generert)",
    "Mercedes EQS": "Mercedes EQS er merkets elektriske flaggskip og posisjoneres som en av de mest luksuriøse elbilene på markedet. Den har en rekkevidde på opptil 770 km (WLTP) og tilbyr et svært stillegående interiør med fremragende komfort. Hyperscreen-dashbordet er tilgjengelig som tilvalg. Luftfjæring og bakhjulsstyring er standard på de fleste varianter. SUV-versjonen gir tredje seterad og høyere bakkeklaring. (Tekst: AI-generert)",
    "Tesla Model 3": "Tesla Model 3 er en av verdens mest solgte elbiler og har vært en viktig modell for utbredelsen av elektriske biler i Norge. Den tilbyr et minimalistisk interiør med én sentralt plassert berøringsskjerm som styrer det meste av bilens funksjoner. Supercharger-nettverket gir god ladetilgang langs norske hovedveier. Long Range-varianten har konkurransedyktig rekkevidde, mens Performance-varianten retter seg mot dem som prioriterer akselerasjon og kjøreglede. (Tekst: AI-generert)",
    "Tesla Model Y": "Tesla Model Y er en kompakt SUV basert på Model 3-plattformen og er blant de mest populære elbilene i Norge. Den tilbyr vesentlig mer bagasjeplass enn Model 3, med et flatt lastegulv og mulighet for tilhengerfeste. Interiøret har samme minimalistiske design som Model 3, med fokus på enkelhet. Over-the-air-oppdateringer gir nye funksjoner og forbedringer etter kjøp. (Tekst: AI-generert)",
    "Tesla Model S": "Tesla Model S var blant de første premium-elbilene på markedet og har blitt kontinuerlig oppdatert siden lanseringen. Den tilbyr lang rekkevidde, rask akselerasjon og et stort bagasjerom inkludert frunk. Interiøret har et yoke-ratt i nyere versjoner, som er kontroversielt blant brukere. Supercharger-nettverket og god ladevydde gjør den egnet for langtur. Eldre utgaver har tradisjonelt ratt og noe lavere ytelse. (Tekst: AI-generert)",
    "Tesla Model X": "Tesla Model X er Teslas store SUV med de karakteristiske Falcon Wing-dørene bak. Den tilbyr opp til syv seter og et romslig interiør med et panoramatak som gir åpen følelse. Ytelsen er på sportsbilnivå til tross for bilens størrelse og vekt. Falcon Wing-dørene er praktiske på trange parkeringsplasser, men mekanismen er mer kompleks enn tradisjonelle dører. (Tekst: AI-generert)",
    "Volkswagen ID.3": "Volkswagen ID.3 er merkets elektriske kompaktbil og er ment som en folkelig elbil i Golf-klassen. Den er bygget på MEB-plattformen med batteriet i gulvet, noe som gir et flatt og romslig interiør. Bakhjulsdrift er standard, noe som gir god plass i kupeen. Rekkevidden varierer med batteristørrelse, og Pro S-versjonen med 77 kWh batteri tilbyr opptil 560 km. (Tekst: AI-generert)",
    "Volkswagen ID.4": "Volkswagen ID.4 er en elektrisk kompakt-SUV som er blant Norges mest solgte elbiler. Den tilbyr et familievennlig interiør med godt med plass i baksetet og et bagasjerom på 543 liter. MEB-plattformen gir et lavt tyngdepunkt og forutsigbare kjøreegenskaper. Bilen er tilgjengelig med bakhjulsdrift og GTX firehjulsdrift. (Tekst: AI-generert)",
    "Volkswagen ID.5": "Volkswagen ID.5 er en SUV-coupé basert på ID.4-plattformen, med en mer strømlinjeformet taklinje. Det skrånende taket gir marginalt mindre bagasjerom enn ID.4, men bedre aerodynamikk og noe lengre rekkevidde. GTX-versjonen har firehjulsdrift og sportligere ytelse. Interiøret er tilnærmet identisk med ID.4. (Tekst: AI-generert)",
    "Volkswagen ID.7": "Volkswagen ID.7 er merkets elektriske storbil og den første ID-modellen i sedanformat. Med et strømlinjeformet design oppnår den en luftmotstandskoeffisient på bare 0,23, noe som bidrar til lang rekkevidde. Interiøret er romslig med god plass i baksetet, og bagasjerommet er blant de største i klassen. Bilen posisjoneres som et elektrisk alternativ til Passat. (Tekst: AI-generert)",
    "Volkswagen ID. Buzz": "Volkswagen ID. Buzz er den elektriske nyversjonen av den ikoniske VW-bussen. Den har et retro-inspirert design med moderne teknologi og er bygget på den forlengede MEB-plattformen. Interiøret er fleksibelt med skyvebare bakseter og et stort bagasjerom. Bilen tiltrekker seg kjøpere som verdsetter karakter og romlighet, og den er tilgjengelig i både standard- og langversjon. (Tekst: AI-generert)",
    "Volkswagen e-Golf": "Volkswagen e-Golf var merkets første elektriske Golf og ble produsert basert på syvende generasjon Golf. Batteriet på 35,8 kWh gir en begrenset rekkevidde etter dagens standard, men bilen er fortsatt populær på bruktmarkedet. Kjøreegenskapene er identiske med en vanlig Golf, noe mange setter pris på. DC-lading støttes med opptil 40 kW, som er vesentlig saktere enn nyere elbiler. (Tekst: AI-generert)",
    "Volvo EX30": "Volvo EX30 er merkets minste og mest prisgunstige elbil. Til tross for kompakte ytre mål tilbyr den et overraskende romslig interiør med et minimalistisk design der det meste styres via en sentralt plassert skjerm. Bilen er tilgjengelig med bakhjulsdrift og Twin Motor firehjulsdrift. EX30 bruker resirkulerte materialer i interiøret som del av Volvos bærekraftstrategi, og bilen er produsert med lavt karbonavtrykk. (Tekst: AI-generert)",
    "Volvo EC40": "Volvo EC40 er en elektrisk SUV-coupé med Volvos karakteristiske skandinaviske design. Det skrånende taket gir en sporty profil, men reduserer bagasjerommet noe sammenlignet med EX40. Bilen har Recharge som eneste drivlinje, med fokus på komfort og sikkerhet. Google-basert infotainment er integrert med stemmeassistent og kartnavigasjon. (Tekst: AI-generert)",
    "Volvo EX40": "Volvo EX40 er Volvos elektriske kompakt-SUV, tidligere kjent som XC40 Recharge. Den bygger på CMAs plattform og tilbyr et kjent Volvo-interiør med høy sikkerhetsfølelse. Bilen har et brukervennlig Google-basert infotainmentsystem og er tilgjengelig med firehjulsdrift. Bagasjerommet suppleres med en frunk under panseret for ekstra oppbevaring. (Tekst: AI-generert)",
    "Volvo EX90": "Volvo EX90 er merkets elektriske flaggskip-SUV og erstatter XC90 som toppmodellen. Den har et romslig treseterad interiør med plass til inntil syv passasjerer. Sikkerhetsutrusning inkluderer lidar-sensor og avanserte førerassistentsystemer som standard. Batteriet på 111 kWh gir god rekkevidde, og bilen støtter toveis lading. Interiøret er preget av nordisk minimalisme med bærekraftige materialer. (Tekst: AI-generert)",
    "Volvo XC40": "Volvo XC40 Recharge var blant de første helelektriske Volvo-modellene og deler plattform med EC40/EX40. Bilen tilbyr firehjulsdrift og god bakkeklaring for norske veier. Interiøret har Volvos kjente kvalitetsfølelse med et oversiktlig dashbord. Rekkevidden er tilstrekkelig for daglig bruk, og bilen har god plass i kompaktklassen. (Tekst: AI-generert)",
    "Hyundai Kona": "Hyundai Kona Electric er en kompakt SUV som har vært en bestselger i det norske elbilmarkedet. Den tilbyr god rekkevidde i forhold til sin størrelse og pris, og det romslige interiøret fungerer godt for småbarnsfamilier. Bilen har fått et betydelig ansiktsløft med et mer moderne design. Varmepumpe er standard, noe som bidrar til bedre rekkevidde under norske vinterforhold. (Tekst: AI-generert)",
    "Hyundai IONIQ 5": "Hyundai IONIQ 5 er en mellomstor crossover med et retro-futuristisk design inspirert av Hyundais Pony fra 1970-tallet. Den er bygget på E-GMP-plattformen med 800-volts arkitektur, noe som gir svært rask DC-lading på opptil 240 kW. Interiøret er romslig med flat gulvflate og skyvebare bakseter. Vehicle-to-load-funksjonen gjør det mulig å bruke bilens batteri som strømkilde for eksterne enheter. (Tekst: AI-generert)",
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
            showToast(`Du ga ${rating} av 5 stjerner`);
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
        html += `<span class="star-count">Ingen stemmer ennå</span>`;
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
    return price.toLocaleString("nb-NO") + " kr";
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
            showToast("Maks 10 biler kan sammenlignes");
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

    var silhouette = CAR_SILHOUETTES[car.type] || CAR_SILHOUETTES['sedan'];
    div.innerHTML = `
        <div class="car-card-header" style="background:linear-gradient(135deg, ${bc.primary}14, ${bc.primary}08)">
            <div class="car-card-header-icon" style="color:${bc.primary}">${silhouette}</div>
            <div class="car-card-header-brand" style="color:${bc.primary}">${car.make}</div>
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
                    <span class="spec-unit">hk</span>
                </div>
                <div class="spec-divider"></div>
                <div class="spec-item">
                    <span class="spec-value">${car.zeroToHundred}</span>
                    <span class="spec-unit">sek</span>
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
                            aria-label="${isInCompare(car.id) ? 'Fjern fra sammenligning' : 'Legg til sammenligning'}">
                        <span class="btn-compare-icon">${isInCompare(car.id) ? ICONS.check : ICONS.plus}</span>
                        <span class="btn-compare-label">${isInCompare(car.id) ? 'Lagt til' : 'Sammenlign'}</span>
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
        list.innerHTML = '<div class="no-results">Ingen biler funnet</div>';
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
    info.textContent = start + "–" + end + " av " + totalCars;
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
    var carList = document.getElementById("car-list");
    if (carList) {
        var stickyTop = document.querySelector(".sticky-top");
        var offset = stickyTop ? stickyTop.offsetHeight : 0;
        var top = carList.getBoundingClientRect().top + window.scrollY - offset;
        window.scrollTo({ top: top, behavior: "smooth" });
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
            { label: "Bagasjerom", key: "trunk", format: v => v ? v + " L" : "—", best: "high" },
            { label: "Segment", key: "segment", format: v => v, best: null },
            { label: "Årstall", key: "year", format: v => v, best: null },
        ]},
        { title: "Dimensjoner", specs: [
            { label: "Lengde", key: "length", format: v => v ? (v / 1000).toFixed(2) + " m" : "—", best: null },
            { label: "Bredde", key: "width", format: v => v ? (v / 1000).toFixed(2) + " m" : "—", best: null },
            { label: "Høyde", key: "height", format: v => v ? (v / 1000).toFixed(2) + " m" : "—", best: null },
            { label: "Vekt", key: "weight", format: v => v ? v.toLocaleString("nb-NO") + " kg" : "—", best: "low" },
            { label: "Bakkeklaring", key: "groundClearance", format: v => v ? v + " mm" : "—", best: "high" },
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
        ${src ? `<a href="${src.url}" target="_blank" rel="noopener" class="modal-source-link">Kilde: ${src.name}</a>` : ''}

        <div class="modal-ad-banner">
            <ins class="adsbygoogle"
                 style="display:block"
                 data-ad-client="ca-pub-4678480487049419"
                 data-ad-slot="auto"
                 data-ad-format="auto"
                 data-full-width-responsive="true"></ins>
        </div>

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
            <div class="modal-spec">
                <div class="modal-spec-label">Bagasjerom</div>
                <div class="modal-spec-value">${car.trunk ? car.trunk + ' L' : '—'}</div>
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
            <div class="modal-spec">
                <div class="modal-spec-label">Bakkeklaring</div>
                <div class="modal-spec-value">${car.groundClearance ? car.groundClearance + ' mm' : '—'}</div>
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
    if (state.activeTab !== tab) trackEvent("tab_switch", { tab: tab });
    state.activeTab = tab;
    document.body.className = "tab-" + tab;
    const tabs = document.querySelectorAll(".tab");
    tabs.forEach(t => t.classList.toggle("active", t.dataset.tab === tab));
    document.querySelectorAll(".tab-content").forEach(t => t.classList.toggle("active", t.id === tab + "-tab"));
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
                <button class="compare-bar-item-remove" onclick="toggleCompare(${car.id}, event)" aria-label="Fjern">✕</button>
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
    // Tab switching
    document.querySelectorAll(".tab").forEach(tab => {
        tab.addEventListener("click", () => switchTab(tab.dataset.tab));
    });

    // Position indicator on load
    var initTab = window.location.hash === "#compare" ? "compare" : (state.activeTab || "browse");
    requestAnimationFrame(() => switchTab(initTab));

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
