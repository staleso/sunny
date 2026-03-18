// ========== Norwegian Electric Car Database ==========
// Prices in NOK (approximate Norwegian market prices 2025/2026)
// Range: WLTP km | 0-100 km/h times | Power in hp
const CARS = [
    // ===== BMW =====
    {
        id: 1, make: "BMW", model: "iX1 xDrive30", year: 2025, price: 529900,
        type: "suv", hp: 313, kwh: 64.7, zeroToHundred: 5.6, seats: 5,
        drivetrain: "AWD", battery: "64.7 kWh", range: 440,
        emoji: "⚡", color: "#1a1a2e", segment: "Compact SUV"
    },
    {
        id: 2, make: "BMW", model: "iX3", year: 2025, price: 599900,
        type: "suv", hp: 286, kwh: 80, zeroToHundred: 6.8, seats: 5,
        drivetrain: "RWD", battery: "80 kWh", range: 460,
        emoji: "⚡", color: "#16213e", segment: "Mid-size SUV"
    },
    {
        id: 72, make: "BMW", model: "iX3 50 xDrive Fully Charged", year: 2026, price: 679900,
        type: "suv", hp: 463, kwh: 108, zeroToHundred: 4.9, seats: 5,
        drivetrain: "AWD", battery: "108 kWh", range: 805,
        emoji: "⚡", color: "#16213e", segment: "Mid-size SUV"
    },
    {
        id: 73, make: "BMW", model: "iX3 50 xDrive M Sport", year: 2026, price: 749900,
        type: "suv", hp: 463, kwh: 108, zeroToHundred: 4.9, seats: 5,
        drivetrain: "AWD", battery: "108 kWh", range: 805,
        emoji: "⚡", color: "#16213e", segment: "Mid-size SUV"
    },
    {
        id: 74, make: "BMW", model: "iX3 50 xDrive M Sport Pro", year: 2026, price: 892000,
        type: "suv", hp: 463, kwh: 108, zeroToHundred: 4.9, seats: 5,
        drivetrain: "AWD", battery: "108 kWh", range: 805,
        emoji: "⚡", color: "#16213e", segment: "Mid-size SUV"
    },
    {
        id: 3, make: "BMW", model: "iX xDrive40", year: 2025, price: 799900,
        type: "suv", hp: 326, kwh: 76.6, zeroToHundred: 6.1, seats: 5,
        drivetrain: "AWD", battery: "76.6 kWh", range: 425,
        emoji: "⚡", color: "#1b2838", segment: "Large SUV"
    },
    {
        id: 4, make: "BMW", model: "iX xDrive50", year: 2025, price: 999900,
        type: "suv", hp: 523, kwh: 111.5, zeroToHundred: 4.6, seats: 5,
        drivetrain: "AWD", battery: "111.5 kWh", range: 630,
        emoji: "⚡", color: "#1a2e2e", segment: "Large SUV"
    },
    {
        id: 5, make: "BMW", model: "i4 eDrive40", year: 2025, price: 569900,
        type: "sedan", hp: 340, kwh: 83.9, zeroToHundred: 5.7, seats: 5,
        drivetrain: "RWD", battery: "83.9 kWh", range: 590,
        emoji: "⚡", color: "#1a1a2e", segment: "Mid-size Sedan"
    },
    {
        id: 6, make: "BMW", model: "i4 M50", year: 2025, price: 729900,
        type: "sedan", hp: 544, kwh: 83.9, zeroToHundred: 3.9, seats: 5,
        drivetrain: "AWD", battery: "83.9 kWh", range: 520,
        emoji: "⚡", color: "#2d1b2e", segment: "Performance Sedan"
    },
    {
        id: 71, make: "BMW", model: "i4 M60", year: 2025, price: 849900,
        type: "sedan", hp: 619, kwh: 83.9, zeroToHundred: 3.5, seats: 5,
        drivetrain: "AWD", battery: "83.9 kWh", range: 490,
        emoji: "⚡", color: "#2d1b2e", segment: "Performance Sedan"
    },
    {
        id: 7, make: "BMW", model: "i5 eDrive40", year: 2025, price: 659900,
        type: "sedan", hp: 340, kwh: 83.9, zeroToHundred: 6.0, seats: 5,
        drivetrain: "RWD", battery: "83.9 kWh", range: 580,
        emoji: "⚡", color: "#1b2e1b", segment: "Executive Sedan"
    },
    {
        id: 8, make: "BMW", model: "i7 xDrive60", year: 2025, price: 1299900,
        type: "sedan", hp: 544, kwh: 101.7, zeroToHundred: 4.7, seats: 5,
        drivetrain: "AWD", battery: "101.7 kWh", range: 590,
        emoji: "⚡", color: "#2e2e1a", segment: "Luxury Sedan"
    },

    // ===== AUDI =====
    {
        id: 9, make: "Audi", model: "Q4 e-tron 40", year: 2025, price: 479900,
        type: "suv", hp: 204, kwh: 77, zeroToHundred: 8.5, seats: 5,
        drivetrain: "RWD", battery: "77 kWh", range: 520,
        emoji: "⚡", color: "#1a1a2e", segment: "Compact SUV"
    },
    {
        id: 10, make: "Audi", model: "Q4 e-tron 50 quattro", year: 2025, price: 559900,
        type: "suv", hp: 299, kwh: 77, zeroToHundred: 6.2, seats: 5,
        drivetrain: "AWD", battery: "77 kWh", range: 490,
        emoji: "⚡", color: "#16213e", segment: "Compact SUV"
    },
    {
        id: 11, make: "Audi", model: "Q6 e-tron quattro", year: 2025, price: 699900,
        type: "suv", hp: 387, kwh: 100, zeroToHundred: 5.9, seats: 5,
        drivetrain: "AWD", battery: "100 kWh", range: 625,
        emoji: "⚡", color: "#1b2838", segment: "Mid-size SUV"
    },
    {
        id: 12, make: "Audi", model: "Q8 e-tron 55 quattro", year: 2025, price: 849900,
        type: "suv", hp: 408, kwh: 114, zeroToHundred: 5.6, seats: 5,
        drivetrain: "AWD", battery: "114 kWh", range: 580,
        emoji: "⚡", color: "#1a2e2e", segment: "Large SUV"
    },
    {
        id: 13, make: "Audi", model: "e-tron GT quattro", year: 2025, price: 1099900,
        type: "sedan", hp: 530, kwh: 97, zeroToHundred: 3.6, seats: 4,
        drivetrain: "AWD", battery: "97 kWh", range: 490,
        emoji: "⚡", color: "#2d1b2e", segment: "Performance Sedan"
    },
    {
        id: 14, make: "Audi", model: "A6 e-tron", year: 2026, price: 649900,
        type: "sedan", hp: 381, kwh: 100, zeroToHundred: 5.4, seats: 5,
        drivetrain: "AWD", battery: "100 kWh", range: 700,
        emoji: "⚡", color: "#1b2e1b", segment: "Executive Sedan"
    },

    // ===== MERCEDES-BENZ =====
    {
        id: 15, make: "Mercedes", model: "EQA 250+", year: 2025, price: 499900,
        type: "suv", hp: 190, kwh: 70.5, zeroToHundred: 8.6, seats: 5,
        drivetrain: "FWD", battery: "70.5 kWh", range: 528,
        emoji: "⚡", color: "#1a1a2e", segment: "Compact SUV"
    },
    {
        id: 16, make: "Mercedes", model: "EQB 250+", year: 2025, price: 539900,
        type: "suv", hp: 190, kwh: 70.5, zeroToHundred: 8.9, seats: 7,
        drivetrain: "FWD", battery: "70.5 kWh", range: 505,
        emoji: "⚡", color: "#16213e", segment: "Compact SUV"
    },
    {
        id: 17, make: "Mercedes", model: "EQC 400 4MATIC", year: 2025, price: 649900,
        type: "suv", hp: 408, kwh: 80, zeroToHundred: 5.1, seats: 5,
        drivetrain: "AWD", battery: "80 kWh", range: 430,
        emoji: "⚡", color: "#1b2838", segment: "Mid-size SUV"
    },
    {
        id: 18, make: "Mercedes", model: "EQE 350+", year: 2025, price: 749900,
        type: "sedan", hp: 292, kwh: 96, zeroToHundred: 6.4, seats: 5,
        drivetrain: "RWD", battery: "96 kWh", range: 620,
        emoji: "⚡", color: "#1a2e2e", segment: "Executive Sedan"
    },
    {
        id: 19, make: "Mercedes", model: "EQE SUV 350+", year: 2025, price: 819900,
        type: "suv", hp: 292, kwh: 96, zeroToHundred: 6.6, seats: 5,
        drivetrain: "RWD", battery: "96 kWh", range: 590,
        emoji: "⚡", color: "#2d1b2e", segment: "Large SUV"
    },
    {
        id: 20, make: "Mercedes", model: "EQS 450+", year: 2025, price: 1099900,
        type: "sedan", hp: 360, kwh: 118, zeroToHundred: 5.8, seats: 5,
        drivetrain: "RWD", battery: "118 kWh", range: 770,
        emoji: "⚡", color: "#1b2e1b", segment: "Luxury Sedan"
    },
    {
        id: 21, make: "Mercedes", model: "EQS SUV 450+", year: 2025, price: 1199900,
        type: "suv", hp: 360, kwh: 118, zeroToHundred: 6.0, seats: 7,
        drivetrain: "RWD", battery: "118 kWh", range: 670,
        emoji: "⚡", color: "#2e2e1a", segment: "Luxury SUV"
    },

    // ===== PORSCHE =====
    {
        id: 22, make: "Porsche", model: "Taycan", year: 2025, price: 899900,
        type: "sedan", hp: 408, kwh: 93.4, zeroToHundred: 4.8, seats: 4,
        drivetrain: "RWD", battery: "93.4 kWh", range: 590,
        emoji: "⚡", color: "#2e1a1a", segment: "Performance Sedan"
    },
    {
        id: 23, make: "Porsche", model: "Taycan 4S", year: 2025, price: 1049900,
        type: "sedan", hp: 530, kwh: 93.4, zeroToHundred: 3.7, seats: 4,
        drivetrain: "AWD", battery: "93.4 kWh", range: 560,
        emoji: "⚡", color: "#2d1b2e", segment: "Performance Sedan"
    },
    {
        id: 24, make: "Porsche", model: "Taycan Turbo", year: 2025, price: 1449900,
        type: "sedan", hp: 680, kwh: 97, zeroToHundred: 3.2, seats: 4,
        drivetrain: "AWD", battery: "97 kWh", range: 550,
        emoji: "⚡", color: "#1a1a2e", segment: "Performance Sedan"
    },
    {
        id: 25, make: "Porsche", model: "Macan Electric", year: 2025, price: 849900,
        type: "suv", hp: 408, kwh: 100, zeroToHundred: 5.2, seats: 5,
        drivetrain: "AWD", battery: "100 kWh", range: 613,
        emoji: "⚡", color: "#16213e", segment: "Mid-size SUV"
    },
    {
        id: 26, make: "Porsche", model: "Macan Electric 4S", year: 2025, price: 999900,
        type: "suv", hp: 516, kwh: 100, zeroToHundred: 4.1, seats: 5,
        drivetrain: "AWD", battery: "100 kWh", range: 590,
        emoji: "⚡", color: "#1b2838", segment: "Performance SUV"
    },

    // ===== TESLA =====
    {
        id: 27, make: "Tesla", model: "Model 3 Long Range", year: 2025, price: 449900,
        type: "sedan", hp: 366, kwh: 75, zeroToHundred: 4.4, seats: 5,
        drivetrain: "AWD", battery: "75 kWh", range: 629,
        emoji: "⚡", color: "#1a1a2e", segment: "Mid-size Sedan"
    },
    {
        id: 28, make: "Tesla", model: "Model 3 Performance", year: 2025, price: 529900,
        type: "sedan", hp: 460, kwh: 75, zeroToHundred: 3.1, seats: 5,
        drivetrain: "AWD", battery: "75 kWh", range: 528,
        emoji: "⚡", color: "#2d1b2e", segment: "Performance Sedan"
    },
    {
        id: 29, make: "Tesla", model: "Model Y Long Range", year: 2025, price: 479900,
        type: "suv", hp: 366, kwh: 75, zeroToHundred: 5.0, seats: 5,
        drivetrain: "AWD", battery: "75 kWh", range: 533,
        emoji: "⚡", color: "#16213e", segment: "Mid-size SUV"
    },
    {
        id: 30, make: "Tesla", model: "Model Y Performance", year: 2025, price: 559900,
        type: "suv", hp: 460, kwh: 75, zeroToHundred: 3.7, seats: 5,
        drivetrain: "AWD", battery: "75 kWh", range: 514,
        emoji: "⚡", color: "#1b2838", segment: "Performance SUV"
    },
    {
        id: 31, make: "Tesla", model: "Model S Long Range", year: 2025, price: 899900,
        type: "sedan", hp: 670, kwh: 100, zeroToHundred: 3.2, seats: 5,
        drivetrain: "AWD", battery: "100 kWh", range: 634,
        emoji: "⚡", color: "#1b2e1b", segment: "Luxury Sedan"
    },
    {
        id: 32, make: "Tesla", model: "Model X Long Range", year: 2025, price: 1049900,
        type: "suv", hp: 670, kwh: 100, zeroToHundred: 3.9, seats: 7,
        drivetrain: "AWD", battery: "100 kWh", range: 576,
        emoji: "⚡", color: "#2e2e1a", segment: "Luxury SUV"
    },

    // ===== VOLKSWAGEN =====
    {
        id: 33, make: "Volkswagen", model: "ID.3 Pro S", year: 2025, price: 389900,
        type: "hatchback", hp: 204, kwh: 77, zeroToHundred: 7.9, seats: 5,
        drivetrain: "RWD", battery: "77 kWh", range: 560,
        emoji: "⚡", color: "#1a1a2e", segment: "Compact"
    },
    {
        id: 34, make: "Volkswagen", model: "ID.4 Pro S", year: 2025, price: 469900,
        type: "suv", hp: 286, kwh: 77, zeroToHundred: 6.7, seats: 5,
        drivetrain: "RWD", battery: "77 kWh", range: 540,
        emoji: "⚡", color: "#16213e", segment: "Compact SUV"
    },
    {
        id: 35, make: "Volkswagen", model: "ID.5 GTX", year: 2025, price: 549900,
        type: "suv", hp: 340, kwh: 77, zeroToHundred: 5.4, seats: 5,
        drivetrain: "AWD", battery: "77 kWh", range: 500,
        emoji: "⚡", color: "#1b2838", segment: "Coupe SUV"
    },
    {
        id: 36, make: "Volkswagen", model: "ID.7 Pro S", year: 2025, price: 569900,
        type: "sedan", hp: 286, kwh: 86, zeroToHundred: 6.5, seats: 5,
        drivetrain: "RWD", battery: "86 kWh", range: 700,
        emoji: "⚡", color: "#1a2e2e", segment: "Mid-size Sedan"
    },
    {
        id: 37, make: "Volkswagen", model: "ID. Buzz Pro", year: 2025, price: 599900,
        type: "van", hp: 286, kwh: 86, zeroToHundred: 7.9, seats: 7,
        drivetrain: "RWD", battery: "86 kWh", range: 460,
        emoji: "⚡", color: "#2e2e1a", segment: "MPV"
    },

    // ===== VOLVO =====
    {
        id: 38, make: "Volvo", model: "EX30 Single Motor", year: 2025, price: 369900,
        type: "suv", hp: 272, kwh: 69, zeroToHundred: 5.3, seats: 5,
        drivetrain: "RWD", battery: "69 kWh", range: 476,
        emoji: "⚡", color: "#1a1a2e", segment: "Small SUV"
    },
    {
        id: 39, make: "Volvo", model: "EX30 Twin Motor", year: 2025, price: 439900,
        type: "suv", hp: 428, kwh: 69, zeroToHundred: 3.6, seats: 5,
        drivetrain: "AWD", battery: "69 kWh", range: 450,
        emoji: "⚡", color: "#16213e", segment: "Small SUV"
    },
    {
        id: 40, make: "Volvo", model: "EC40 Recharge", year: 2025, price: 499900,
        type: "suv", hp: 252, kwh: 78, zeroToHundred: 7.4, seats: 5,
        drivetrain: "RWD", battery: "78 kWh", range: 478,
        emoji: "⚡", color: "#1b2838", segment: "Coupe SUV"
    },
    {
        id: 41, make: "Volvo", model: "EX40 Recharge", year: 2025, price: 479900,
        type: "suv", hp: 252, kwh: 78, zeroToHundred: 7.4, seats: 5,
        drivetrain: "RWD", battery: "78 kWh", range: 476,
        emoji: "⚡", color: "#1a2e2e", segment: "Compact SUV"
    },
    {
        id: 42, make: "Volvo", model: "EX90 Twin Motor", year: 2025, price: 899900,
        type: "suv", hp: 408, kwh: 111, zeroToHundred: 5.9, seats: 7,
        drivetrain: "AWD", battery: "111 kWh", range: 580,
        emoji: "⚡", color: "#1b2e1b", segment: "Large SUV"
    },

    // ===== HYUNDAI =====
    {
        id: 43, make: "Hyundai", model: "Kona Electric 65 kWh", year: 2025, price: 369900,
        type: "suv", hp: 218, kwh: 65.4, zeroToHundred: 7.8, seats: 5,
        drivetrain: "FWD", battery: "65.4 kWh", range: 490,
        emoji: "⚡", color: "#1a1a2e", segment: "Small SUV"
    },
    {
        id: 44, make: "Hyundai", model: "IONIQ 5 Long Range AWD", year: 2025, price: 499900,
        type: "suv", hp: 325, kwh: 84, zeroToHundred: 5.1, seats: 5,
        drivetrain: "AWD", battery: "84 kWh", range: 507,
        emoji: "⚡", color: "#16213e", segment: "Mid-size SUV"
    },
    {
        id: 45, make: "Hyundai", model: "IONIQ 6 Long Range AWD", year: 2025, price: 519900,
        type: "sedan", hp: 325, kwh: 77.4, zeroToHundred: 5.1, seats: 5,
        drivetrain: "AWD", battery: "77.4 kWh", range: 583,
        emoji: "⚡", color: "#1b2838", segment: "Mid-size Sedan"
    },

    // ===== KIA =====
    {
        id: 46, make: "Kia", model: "Niro EV", year: 2025, price: 399900,
        type: "suv", hp: 204, kwh: 64.8, zeroToHundred: 7.8, seats: 5,
        drivetrain: "FWD", battery: "64.8 kWh", range: 463,
        emoji: "⚡", color: "#1a1a2e", segment: "Compact SUV"
    },
    {
        id: 47, make: "Kia", model: "EV6 Long Range AWD", year: 2025, price: 529900,
        type: "suv", hp: 325, kwh: 77.4, zeroToHundred: 5.2, seats: 5,
        drivetrain: "AWD", battery: "77.4 kWh", range: 506,
        emoji: "⚡", color: "#16213e", segment: "Mid-size SUV"
    },
    {
        id: 48, make: "Kia", model: "EV9 Long Range AWD", year: 2025, price: 699900,
        type: "suv", hp: 384, kwh: 99.8, zeroToHundred: 5.3, seats: 7,
        drivetrain: "AWD", battery: "99.8 kWh", range: 501,
        emoji: "⚡", color: "#1b2838", segment: "Large SUV"
    },

    // ===== SKODA =====
    {
        id: 49, make: "Skoda", model: "Enyaq iV 80", year: 2025, price: 449900,
        type: "suv", hp: 204, kwh: 77, zeroToHundred: 8.5, seats: 5,
        drivetrain: "RWD", battery: "77 kWh", range: 545,
        emoji: "⚡", color: "#1a2e2e", segment: "Compact SUV"
    },
    {
        id: 50, make: "Skoda", model: "Enyaq Coupe RS", year: 2025, price: 579900,
        type: "suv", hp: 340, kwh: 77, zeroToHundred: 5.5, seats: 5,
        drivetrain: "AWD", battery: "77 kWh", range: 505,
        emoji: "⚡", color: "#2d1b2e", segment: "Coupe SUV"
    },

    // ===== POLESTAR =====
    {
        id: 51, make: "Polestar", model: "2 Long Range Dual Motor", year: 2025, price: 499900,
        type: "sedan", hp: 421, kwh: 78, zeroToHundred: 4.2, seats: 5,
        drivetrain: "AWD", battery: "78 kWh", range: 487,
        emoji: "⚡", color: "#1a1a2e", segment: "Mid-size Sedan"
    },
    {
        id: 52, make: "Polestar", model: "3 Long Range Dual Motor", year: 2025, price: 799900,
        type: "suv", hp: 489, kwh: 111, zeroToHundred: 4.7, seats: 5,
        drivetrain: "AWD", battery: "111 kWh", range: 560,
        emoji: "⚡", color: "#16213e", segment: "Large SUV"
    },
    {
        id: 53, make: "Polestar", model: "4 Long Range Dual Motor", year: 2025, price: 649900,
        type: "suv", hp: 544, kwh: 100, zeroToHundred: 3.8, seats: 5,
        drivetrain: "AWD", battery: "100 kWh", range: 560,
        emoji: "⚡", color: "#1b2838", segment: "Coupe SUV"
    },

    // ===== NIO =====
    {
        id: 54, make: "NIO", model: "ET5 Touring", year: 2025, price: 449900,
        type: "wagon", hp: 490, kwh: 100, zeroToHundred: 4.0, seats: 5,
        drivetrain: "AWD", battery: "100 kWh", range: 560,
        emoji: "⚡", color: "#1b2e1b", segment: "Mid-size Wagon"
    },
    {
        id: 55, make: "NIO", model: "EL6", year: 2025, price: 539900,
        type: "suv", hp: 490, kwh: 100, zeroToHundred: 4.5, seats: 5,
        drivetrain: "AWD", battery: "100 kWh", range: 510,
        emoji: "⚡", color: "#2e2e1a", segment: "Mid-size SUV"
    },
    {
        id: 56, make: "NIO", model: "EL7", year: 2025, price: 639900,
        type: "suv", hp: 653, kwh: 100, zeroToHundred: 3.9, seats: 5,
        drivetrain: "AWD", battery: "100 kWh", range: 485,
        emoji: "⚡", color: "#2e1a1a", segment: "Mid-size SUV"
    },

    // ===== TOYOTA =====
    {
        id: 57, make: "Toyota", model: "bZ4X AWD", year: 2025, price: 449900,
        type: "suv", hp: 218, kwh: 71.4, zeroToHundred: 6.9, seats: 5,
        drivetrain: "AWD", battery: "71.4 kWh", range: 411,
        emoji: "⚡", color: "#1a1a2e", segment: "Mid-size SUV"
    },

    // ===== FORD =====
    {
        id: 58, make: "Ford", model: "Mustang Mach-E Extended AWD", year: 2025, price: 529900,
        type: "suv", hp: 351, kwh: 91, zeroToHundred: 5.4, seats: 5,
        drivetrain: "AWD", battery: "91 kWh", range: 540,
        emoji: "⚡", color: "#2e1a1a", segment: "Mid-size SUV"
    },
    {
        id: 59, make: "Ford", model: "Explorer Electric AWD", year: 2025, price: 499900,
        type: "suv", hp: 340, kwh: 79, zeroToHundred: 5.3, seats: 5,
        drivetrain: "AWD", battery: "79 kWh", range: 530,
        emoji: "⚡", color: "#1b2838", segment: "Mid-size SUV"
    },

    // ===== XPENG =====
    {
        id: 60, make: "Xpeng", model: "G6", year: 2025, price: 449900,
        type: "suv", hp: 296, kwh: 87.5, zeroToHundred: 5.9, seats: 5,
        drivetrain: "RWD", battery: "87.5 kWh", range: 570,
        emoji: "⚡", color: "#1a2e2e", segment: "Mid-size SUV"
    },
    {
        id: 61, make: "Xpeng", model: "G9", year: 2025, price: 569900,
        type: "suv", hp: 551, kwh: 98, zeroToHundred: 3.9, seats: 5,
        drivetrain: "AWD", battery: "98 kWh", range: 520,
        emoji: "⚡", color: "#2d1b2e", segment: "Large SUV"
    },

    // ===== BYD =====
    {
        id: 62, make: "BYD", model: "Atto 3", year: 2025, price: 349900,
        type: "suv", hp: 204, kwh: 60.5, zeroToHundred: 7.3, seats: 5,
        drivetrain: "FWD", battery: "60.5 kWh", range: 420,
        emoji: "⚡", color: "#1a1a2e", segment: "Compact SUV"
    },
    {
        id: 63, make: "BYD", model: "Tang EV600", year: 2025, price: 569900,
        type: "suv", hp: 517, kwh: 108.8, zeroToHundred: 4.6, seats: 7,
        drivetrain: "AWD", battery: "108.8 kWh", range: 530,
        emoji: "⚡", color: "#16213e", segment: "Large SUV"
    },
    {
        id: 64, make: "BYD", model: "Seal", year: 2025, price: 439900,
        type: "sedan", hp: 313, kwh: 82.5, zeroToHundred: 5.9, seats: 5,
        drivetrain: "RWD", battery: "82.5 kWh", range: 570,
        emoji: "⚡", color: "#1b2838", segment: "Mid-size Sedan"
    },

    // ===== CUPRA =====
    {
        id: 65, make: "Cupra", model: "Born 77 kWh", year: 2025, price: 419900,
        type: "hatchback", hp: 231, kwh: 77, zeroToHundred: 7.0, seats: 5,
        drivetrain: "RWD", battery: "77 kWh", range: 540,
        emoji: "⚡", color: "#2e1a1a", segment: "Compact"
    },
    {
        id: 66, make: "Cupra", model: "Tavascan VZ", year: 2025, price: 559900,
        type: "suv", hp: 340, kwh: 77, zeroToHundred: 5.5, seats: 5,
        drivetrain: "AWD", battery: "77 kWh", range: 500,
        emoji: "⚡", color: "#2d1b2e", segment: "Coupe SUV"
    },

    // ===== RENAULT =====
    {
        id: 67, make: "Renault", model: "Megane E-Tech 60", year: 2025, price: 369900,
        type: "hatchback", hp: 220, kwh: 60, zeroToHundred: 7.4, seats: 5,
        drivetrain: "FWD", battery: "60 kWh", range: 450,
        emoji: "⚡", color: "#1b2e1b", segment: "Compact"
    },
    {
        id: 68, make: "Renault", model: "Scenic E-Tech 87", year: 2025, price: 449900,
        type: "suv", hp: 220, kwh: 87, zeroToHundred: 7.9, seats: 5,
        drivetrain: "FWD", battery: "87 kWh", range: 620,
        emoji: "⚡", color: "#2e2e1a", segment: "Compact SUV"
    },

    // ===== SMART =====
    {
        id: 69, make: "Smart", model: "#1 Pro+", year: 2025, price: 349900,
        type: "suv", hp: 272, kwh: 66, zeroToHundred: 6.7, seats: 5,
        drivetrain: "RWD", battery: "66 kWh", range: 420,
        emoji: "⚡", color: "#1a1a2e", segment: "Small SUV"
    },
    {
        id: 70, make: "Smart", model: "#3 BRABUS", year: 2025, price: 469900,
        type: "suv", hp: 428, kwh: 66, zeroToHundred: 3.7, seats: 5,
        drivetrain: "AWD", battery: "66 kWh", range: 400,
        emoji: "⚡", color: "#2e1a1a", segment: "Coupe SUV"
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
    "Smart":      { primary: "#FF7900", gradient: "linear-gradient(135deg, #FF7900, #994800)" }
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
    "Smart":      { name: "smart.com/no", url: "https://www.smart.com/no" }
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

function setRating(carId, rating, e) {
    if (e) e.stopPropagation();
    state.ratings[carId] = rating;
    saveState();
    updateUI();
    showToast(`Du ga ${rating} av 5 stjerner`);
}

function renderStars(carId, size) {
    const current = getRating(carId);
    const sz = size || 18;
    let html = `<div class="star-rating" style="font-size:${sz}px">`;
    for (let i = 1; i <= 5; i++) {
        const isSelected = i === current;
        const cls = isSelected ? 'star star-selected' : 'star star-empty';
        html += `<span class="${cls}" onclick="setRating(${carId}, ${i}, event)">★</span>`;
    }
    if (current > 0) {
        html += `<span class="star-label">${current}/5</span>`;
    }
    html += `</div>`;
    return html;
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
        if (state.compareList.length >= 4) {
            showToast("Maks 4 biler kan sammenlignes");
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

// ========== Render Car Card ==========
function renderCarCard(car) {
    const div = document.createElement("div");
    div.className = "car-card";
    div.onclick = () => openModal(car.id);

    const src = BRAND_SOURCES[car.make];
    div.innerHTML = `
        <div class="car-card-body">
            <div class="car-card-title">${car.make} ${car.model}</div>
            <div class="car-card-year">${car.year}${src ? ` · <a href="${src.url}" target="_blank" rel="noopener" class="source-link" onclick="event.stopPropagation()">Kilde: ${src.name}</a>` : ''}</div>
            <div class="car-card-specs">
                <span class="spec-pill"><span class="val">${car.range}</span> km</span>
                <span class="spec-pill"><span class="val">${car.hp}</span> hk</span>
                <span class="spec-pill"><span class="val">${car.zeroToHundred}s</span> 0-100</span>
            </div>
            <div class="car-card-footer">
                <span class="car-price">${formatPrice(car.price)}</span>
                <div class="car-actions">
                    <button class="btn-icon ${isFavorite(car.id) ? 'active-fav' : ''}"
                            onclick="toggleFavorite(${car.id}, event)"
                            aria-label="Favoritt">
                        ${isFavorite(car.id) ? '❤️' : '🤍'}
                    </button>
                    <button class="btn-icon ${isInCompare(car.id) ? 'active-compare' : ''}"
                            onclick="toggleCompare(${car.id}, event)"
                            aria-label="Sammenlign">
                        ${isInCompare(car.id) ? '✓' : '+'}
                    </button>
                </div>
            </div>
            ${renderStars(car.id, 16)}
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

    let cars = CARS.filter(car => {
        const matchSearch = `${car.make} ${car.model} ${car.year} ${car.segment}`.toLowerCase().includes(search);
        const matchBrand = brandFilter === "all" || car.make === brandFilter;
        const matchType = typeFilter === "all" || car.type === typeFilter;
        return matchSearch && matchBrand && matchType;
    });

    switch (sort) {
        case "price-low": cars.sort((a, b) => a.price - b.price); break;
        case "price-high": cars.sort((a, b) => b.price - a.price); break;
        case "range": cars.sort((a, b) => b.range - a.range); break;
        case "hp": cars.sort((a, b) => b.hp - a.hp); break;
        case "fast": cars.sort((a, b) => a.zeroToHundred - b.zeroToHundred); break;
        case "rating": cars.sort((a, b) => getRating(b.id) - getRating(a.id)); break;
        default: cars.sort((a, b) => `${a.make} ${a.model}`.localeCompare(`${b.make} ${b.model}`));
    }

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

    // Header chips
    const headerRow = document.getElementById("compare-header-row");
    headerRow.innerHTML = cars.map(car => {
        const bc = BRAND_COLORS[car.make] || { primary: "#888" };
        return `
        <div class="compare-car-chip">
            <span class="chip-emoji" style="color:${bc.primary};font-size:16px;font-weight:800;">${car.make.substring(0,3).toUpperCase()}</span>
            <div class="chip-info">
                <div class="chip-name">${car.make} ${car.model}</div>
                <div class="chip-price">${formatPrice(car.price)}</div>
            </div>
            <button class="chip-remove" onclick="toggleCompare(${car.id})">✕</button>
        </div>
    `;
    }).join("");

    // Comparison rows
    const specs = [
        { label: "Pris", key: "price", format: v => formatPrice(v), best: "low" },
        { label: "Rekkevidde", key: "range", format: v => v + " km", best: "high" },
        { label: "Effekt", key: "hp", format: v => v + " hk", best: "high" },
        { label: "0-100 km/t", key: "zeroToHundred", format: v => v + "s", best: "low" },
        { label: "Batteri", key: "kwh", format: v => v + " kWh", best: "high" },
        { label: "Seter", key: "seats", format: v => v, best: null },
        { label: "Drivlinje", key: "drivetrain", format: v => v, best: null },
        { label: "Segment", key: "segment", format: v => v, best: null }
    ];

    const table = document.getElementById("compare-table");
    table.innerHTML = specs.map(spec => {
        const values = cars.map(c => c[spec.key]);
        let bestVal = null;
        if (spec.best === "high") bestVal = Math.max(...values);
        if (spec.best === "low") bestVal = Math.min(...values);

        const cells = cars.map(car => {
            const val = car[spec.key];
            const isBest = bestVal !== null && val === bestVal && cars.length > 1;
            return `<div class="compare-cell">${isBest ? '<span class="best">' : ''}${spec.format(val)}${isBest ? '</span>' : ''}</div>`;
        }).join("");

        return `
            <div class="compare-row">
                <div class="compare-cell label-cell">${spec.label}</div>
                ${cells}
            </div>
        `;
    }).join("");
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
                <div class="modal-spec-label">Pris/km</div>
                <div class="modal-spec-value" style="font-size:14px">${(car.price / car.range).toFixed(0)} kr</div>
            </div>
        </div>

        <div class="modal-rating">
            <div class="modal-section-title">Din vurdering</div>
            ${renderStars(car.id, 28)}
        </div>

        <div class="modal-actions">
            <button class="modal-btn btn-compare ${isInCompare(car.id) ? 'added' : ''}"
                    onclick="toggleCompare(${car.id}); openModal(${car.id});">
                ${isInCompare(car.id) ? '✓ Sammenlignes' : '+ Sammenlign'}
            </button>
            <button class="modal-btn btn-fav ${isFavorite(car.id) ? 'favorited' : ''}"
                    onclick="toggleFavorite(${car.id}); openModal(${car.id});">
                ${isFavorite(car.id) ? '❤️ Favoritt' : '🤍 Favoritt'}
            </button>
        </div>
    `;

    modal.classList.add("open");
}

function closeModal() {
    document.getElementById("car-modal").classList.remove("open");
}

// ========== Tabs ==========
function switchTab(tab) {
    state.activeTab = tab;
    document.querySelectorAll(".tab").forEach(t => t.classList.toggle("active", t.dataset.tab === tab));
    document.querySelectorAll(".tab-content").forEach(t => t.classList.toggle("active", t.id === tab + "-tab"));
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
    // Tab switching
    document.querySelectorAll(".tab").forEach(tab => {
        tab.addEventListener("click", () => switchTab(tab.dataset.tab));
    });

    // Search & filter
    document.getElementById("search-input").addEventListener("input", renderBrowse);
    document.getElementById("filter-brand").addEventListener("change", renderBrowse);
    document.getElementById("filter-type").addEventListener("change", renderBrowse);
    document.getElementById("filter-sort").addEventListener("change", renderBrowse);

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
