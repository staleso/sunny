const PROJECT_ID = 'elbilvalg';
const API_KEY = 'AIzaSyAxAbS7ohSJqcKHsRmsygGPfX36D2Upkqk';
const BASE_URL = `https://firestore.googleapis.com/v1/projects/${PROJECT_ID}/databases/(default)/documents`;

const CARS = [
    { id: 1,  make: "BMW", model: "iX1 xDrive30",                    year: 2025, price: 529900,  type: "suv",      hp: 313, kwh: 64.7,  zeroToHundred: 5.6, seats: 5, drivetrain: "AWD", battery: "64.7 kWh", range: 440, emoji: "⚡", color: "#1a1a2e", segment: "Compact SUV" },
    { id: 2,  make: "BMW", model: "iX3",                             year: 2025, price: 599900,  type: "suv",      hp: 286, kwh: 80,    zeroToHundred: 6.8, seats: 5, drivetrain: "RWD", battery: "80 kWh",   range: 460, emoji: "⚡", color: "#16213e", segment: "Mid-size SUV" },
    { id: 72, make: "BMW", model: "iX3 50 xDrive Fully Charged",     year: 2026, price: 679900,  type: "suv",      hp: 463, kwh: 108,   zeroToHundred: 4.9, seats: 5, drivetrain: "AWD", battery: "108 kWh",  range: 805, emoji: "⚡", color: "#16213e", segment: "Mid-size SUV" },
    { id: 73, make: "BMW", model: "iX3 50 xDrive M Sport",           year: 2026, price: 749900,  type: "suv",      hp: 463, kwh: 108,   zeroToHundred: 4.9, seats: 5, drivetrain: "AWD", battery: "108 kWh",  range: 805, emoji: "⚡", color: "#16213e", segment: "Mid-size SUV" },
    { id: 74, make: "BMW", model: "iX3 50 xDrive M Sport Pro",       year: 2026, price: 892000,  type: "suv",      hp: 463, kwh: 108,   zeroToHundred: 4.9, seats: 5, drivetrain: "AWD", battery: "108 kWh",  range: 805, emoji: "⚡", color: "#16213e", segment: "Mid-size SUV" },
    { id: 3,  make: "BMW", model: "iX xDrive40",                     year: 2025, price: 799900,  type: "suv",      hp: 326, kwh: 76.6,  zeroToHundred: 6.1, seats: 5, drivetrain: "AWD", battery: "76.6 kWh", range: 425, emoji: "⚡", color: "#1b2838", segment: "Large SUV" },
    { id: 4,  make: "BMW", model: "iX xDrive50",                     year: 2025, price: 999900,  type: "suv",      hp: 523, kwh: 111.5, zeroToHundred: 4.6, seats: 5, drivetrain: "AWD", battery: "111.5 kWh",range: 630, emoji: "⚡", color: "#1a2e2e", segment: "Large SUV" },
    { id: 5,  make: "BMW", model: "i4 eDrive40",                     year: 2025, price: 569900,  type: "sedan",    hp: 340, kwh: 83.9,  zeroToHundred: 5.7, seats: 5, drivetrain: "RWD", battery: "83.9 kWh", range: 590, emoji: "⚡", color: "#1a1a2e", segment: "Mid-size Sedan" },
    { id: 6,  make: "BMW", model: "i4 M50",                          year: 2025, price: 729900,  type: "sedan",    hp: 544, kwh: 83.9,  zeroToHundred: 3.9, seats: 5, drivetrain: "AWD", battery: "83.9 kWh", range: 520, emoji: "⚡", color: "#2d1b2e", segment: "Performance Sedan" },
    { id: 71, make: "BMW", model: "i4 M60",                          year: 2025, price: 849900,  type: "sedan",    hp: 619, kwh: 83.9,  zeroToHundred: 3.5, seats: 5, drivetrain: "AWD", battery: "83.9 kWh", range: 490, emoji: "⚡", color: "#2d1b2e", segment: "Performance Sedan" },
    { id: 7,  make: "BMW", model: "i5 eDrive40",                     year: 2025, price: 659900,  type: "sedan",    hp: 340, kwh: 83.9,  zeroToHundred: 6.0, seats: 5, drivetrain: "RWD", battery: "83.9 kWh", range: 580, emoji: "⚡", color: "#1b2e1b", segment: "Executive Sedan" },
    { id: 8,  make: "BMW", model: "i7 xDrive60",                     year: 2025, price: 1299900, type: "sedan",    hp: 544, kwh: 101.7, zeroToHundred: 4.7, seats: 5, drivetrain: "AWD", battery: "101.7 kWh",range: 590, emoji: "⚡", color: "#2e2e1a", segment: "Luxury Sedan" },
    { id: 9,  make: "Audi", model: "Q4 e-tron 40",                  year: 2025, price: 479900,  type: "suv",      hp: 204, kwh: 77,    zeroToHundred: 8.5, seats: 5, drivetrain: "RWD", battery: "77 kWh",   range: 520, emoji: "⚡", color: "#1a1a2e", segment: "Compact SUV" },
    { id: 10, make: "Audi", model: "Q4 e-tron 50 quattro",          year: 2025, price: 559900,  type: "suv",      hp: 299, kwh: 77,    zeroToHundred: 6.2, seats: 5, drivetrain: "AWD", battery: "77 kWh",   range: 490, emoji: "⚡", color: "#16213e", segment: "Compact SUV" },
    { id: 11, make: "Audi", model: "Q6 e-tron quattro",             year: 2025, price: 699900,  type: "suv",      hp: 387, kwh: 100,   zeroToHundred: 5.9, seats: 5, drivetrain: "AWD", battery: "100 kWh",  range: 625, emoji: "⚡", color: "#1b2838", segment: "Mid-size SUV" },
    { id: 12, make: "Audi", model: "Q8 e-tron 55 quattro",          year: 2025, price: 849900,  type: "suv",      hp: 408, kwh: 114,   zeroToHundred: 5.6, seats: 5, drivetrain: "AWD", battery: "114 kWh",  range: 580, emoji: "⚡", color: "#1a2e2e", segment: "Large SUV" },
    { id: 13, make: "Audi", model: "e-tron GT quattro",             year: 2025, price: 1099900, type: "sedan",    hp: 530, kwh: 97,    zeroToHundred: 3.6, seats: 4, drivetrain: "AWD", battery: "97 kWh",   range: 490, emoji: "⚡", color: "#2d1b2e", segment: "Performance Sedan" },
    { id: 14, make: "Audi", model: "A6 e-tron",                     year: 2026, price: 649900,  type: "sedan",    hp: 381, kwh: 100,   zeroToHundred: 5.4, seats: 5, drivetrain: "AWD", battery: "100 kWh",  range: 700, emoji: "⚡", color: "#1b2e1b", segment: "Executive Sedan" },
    { id: 15, make: "Mercedes", model: "EQA 250+",                  year: 2025, price: 499900,  type: "suv",      hp: 190, kwh: 70.5,  zeroToHundred: 8.6, seats: 5, drivetrain: "FWD", battery: "70.5 kWh", range: 528, emoji: "⚡", color: "#1a1a2e", segment: "Compact SUV" },
    { id: 16, make: "Mercedes", model: "EQB 250+",                  year: 2025, price: 539900,  type: "suv",      hp: 190, kwh: 70.5,  zeroToHundred: 8.9, seats: 7, drivetrain: "FWD", battery: "70.5 kWh", range: 505, emoji: "⚡", color: "#16213e", segment: "Compact SUV" },
    { id: 17, make: "Mercedes", model: "EQC 400 4MATIC",            year: 2025, price: 649900,  type: "suv",      hp: 408, kwh: 80,    zeroToHundred: 5.1, seats: 5, drivetrain: "AWD", battery: "80 kWh",   range: 430, emoji: "⚡", color: "#1b2838", segment: "Mid-size SUV" },
    { id: 18, make: "Mercedes", model: "EQE 350+",                  year: 2025, price: 749900,  type: "sedan",    hp: 292, kwh: 96,    zeroToHundred: 6.4, seats: 5, drivetrain: "RWD", battery: "96 kWh",   range: 620, emoji: "⚡", color: "#1a2e2e", segment: "Executive Sedan" },
    { id: 19, make: "Mercedes", model: "EQE SUV 350+",              year: 2025, price: 819900,  type: "suv",      hp: 292, kwh: 96,    zeroToHundred: 6.6, seats: 5, drivetrain: "RWD", battery: "96 kWh",   range: 590, emoji: "⚡", color: "#2d1b2e", segment: "Large SUV" },
    { id: 20, make: "Mercedes", model: "EQS 450+",                  year: 2025, price: 1099900, type: "sedan",    hp: 360, kwh: 118,   zeroToHundred: 5.8, seats: 5, drivetrain: "RWD", battery: "118 kWh",  range: 770, emoji: "⚡", color: "#1b2e1b", segment: "Luxury Sedan" },
    { id: 21, make: "Mercedes", model: "EQS SUV 450+",              year: 2025, price: 1199900, type: "suv",      hp: 360, kwh: 118,   zeroToHundred: 6.0, seats: 7, drivetrain: "RWD", battery: "118 kWh",  range: 670, emoji: "⚡", color: "#2e2e1a", segment: "Luxury SUV" },
    { id: 22, make: "Porsche", model: "Taycan",                     year: 2025, price: 899900,  type: "sedan",    hp: 408, kwh: 93.4,  zeroToHundred: 4.8, seats: 4, drivetrain: "RWD", battery: "93.4 kWh", range: 590, emoji: "⚡", color: "#2e1a1a", segment: "Performance Sedan" },
    { id: 23, make: "Porsche", model: "Taycan 4S",                  year: 2025, price: 1049900, type: "sedan",    hp: 530, kwh: 93.4,  zeroToHundred: 3.7, seats: 4, drivetrain: "AWD", battery: "93.4 kWh", range: 560, emoji: "⚡", color: "#2d1b2e", segment: "Performance Sedan" },
    { id: 24, make: "Porsche", model: "Taycan Turbo",               year: 2025, price: 1449900, type: "sedan",    hp: 680, kwh: 97,    zeroToHundred: 3.2, seats: 4, drivetrain: "AWD", battery: "97 kWh",   range: 550, emoji: "⚡", color: "#1a1a2e", segment: "Performance Sedan" },
    { id: 25, make: "Porsche", model: "Macan Electric",             year: 2025, price: 849900,  type: "suv",      hp: 408, kwh: 100,   zeroToHundred: 5.2, seats: 5, drivetrain: "AWD", battery: "100 kWh",  range: 613, emoji: "⚡", color: "#16213e", segment: "Mid-size SUV" },
    { id: 26, make: "Porsche", model: "Macan Electric 4S",          year: 2025, price: 999900,  type: "suv",      hp: 516, kwh: 100,   zeroToHundred: 4.1, seats: 5, drivetrain: "AWD", battery: "100 kWh",  range: 590, emoji: "⚡", color: "#1b2838", segment: "Performance SUV" },
    { id: 27, make: "Tesla", model: "Model 3 Long Range",           year: 2025, price: 449900,  type: "sedan",    hp: 366, kwh: 75,    zeroToHundred: 4.4, seats: 5, drivetrain: "AWD", battery: "75 kWh",   range: 629, emoji: "⚡", color: "#1a1a2e", segment: "Mid-size Sedan" },
    { id: 28, make: "Tesla", model: "Model 3 Performance",          year: 2025, price: 529900,  type: "sedan",    hp: 460, kwh: 75,    zeroToHundred: 3.1, seats: 5, drivetrain: "AWD", battery: "75 kWh",   range: 528, emoji: "⚡", color: "#2d1b2e", segment: "Performance Sedan" },
    { id: 29, make: "Tesla", model: "Model Y Long Range",           year: 2025, price: 479900,  type: "suv",      hp: 366, kwh: 75,    zeroToHundred: 5.0, seats: 5, drivetrain: "AWD", battery: "75 kWh",   range: 533, emoji: "⚡", color: "#16213e", segment: "Mid-size SUV" },
    { id: 30, make: "Tesla", model: "Model Y Performance",          year: 2025, price: 559900,  type: "suv",      hp: 460, kwh: 75,    zeroToHundred: 3.7, seats: 5, drivetrain: "AWD", battery: "75 kWh",   range: 514, emoji: "⚡", color: "#1b2838", segment: "Performance SUV" },
    { id: 31, make: "Tesla", model: "Model S Long Range",           year: 2025, price: 899900,  type: "sedan",    hp: 670, kwh: 100,   zeroToHundred: 3.2, seats: 5, drivetrain: "AWD", battery: "100 kWh",  range: 634, emoji: "⚡", color: "#1b2e1b", segment: "Luxury Sedan" },
    { id: 32, make: "Tesla", model: "Model X Long Range",           year: 2025, price: 1049900, type: "suv",      hp: 670, kwh: 100,   zeroToHundred: 3.9, seats: 7, drivetrain: "AWD", battery: "100 kWh",  range: 576, emoji: "⚡", color: "#2e2e1a", segment: "Luxury SUV" },
    { id: 33, make: "Volkswagen", model: "ID.3 Pro S",              year: 2025, price: 389900,  type: "hatchback",hp: 204, kwh: 77,    zeroToHundred: 7.9, seats: 5, drivetrain: "RWD", battery: "77 kWh",   range: 560, emoji: "⚡", color: "#1a1a2e", segment: "Compact" },
    { id: 34, make: "Volkswagen", model: "ID.4 Pro S",              year: 2025, price: 469900,  type: "suv",      hp: 286, kwh: 77,    zeroToHundred: 6.7, seats: 5, drivetrain: "RWD", battery: "77 kWh",   range: 540, emoji: "⚡", color: "#16213e", segment: "Compact SUV" },
    { id: 35, make: "Volkswagen", model: "ID.5 GTX",                year: 2025, price: 549900,  type: "suv",      hp: 340, kwh: 77,    zeroToHundred: 5.4, seats: 5, drivetrain: "AWD", battery: "77 kWh",   range: 500, emoji: "⚡", color: "#1b2838", segment: "Coupe SUV" },
    { id: 36, make: "Volkswagen", model: "ID.7 Pro S",              year: 2025, price: 569900,  type: "sedan",    hp: 286, kwh: 86,    zeroToHundred: 6.5, seats: 5, drivetrain: "RWD", battery: "86 kWh",   range: 700, emoji: "⚡", color: "#1a2e2e", segment: "Mid-size Sedan" },
    { id: 37, make: "Volkswagen", model: "ID. Buzz Pro",            year: 2025, price: 599900,  type: "van",      hp: 286, kwh: 86,    zeroToHundred: 7.9, seats: 7, drivetrain: "RWD", battery: "86 kWh",   range: 460, emoji: "⚡", color: "#2e2e1a", segment: "MPV" },
    { id: 38, make: "Volvo", model: "EX30 Single Motor",            year: 2025, price: 369900,  type: "suv",      hp: 272, kwh: 69,    zeroToHundred: 5.3, seats: 5, drivetrain: "RWD", battery: "69 kWh",   range: 476, emoji: "⚡", color: "#1a1a2e", segment: "Small SUV" },
    { id: 39, make: "Volvo", model: "EX30 Twin Motor",              year: 2025, price: 439900,  type: "suv",      hp: 428, kwh: 69,    zeroToHundred: 3.6, seats: 5, drivetrain: "AWD", battery: "69 kWh",   range: 450, emoji: "⚡", color: "#16213e", segment: "Small SUV" },
    { id: 40, make: "Volvo", model: "EC40 Recharge",                year: 2025, price: 499900,  type: "suv",      hp: 252, kwh: 78,    zeroToHundred: 7.4, seats: 5, drivetrain: "RWD", battery: "78 kWh",   range: 478, emoji: "⚡", color: "#1b2838", segment: "Coupe SUV" },
    { id: 41, make: "Volvo", model: "EX40 Recharge",                year: 2025, price: 479900,  type: "suv",      hp: 252, kwh: 78,    zeroToHundred: 7.4, seats: 5, drivetrain: "RWD", battery: "78 kWh",   range: 476, emoji: "⚡", color: "#1a2e2e", segment: "Compact SUV" },
    { id: 42, make: "Volvo", model: "EX90 Twin Motor",              year: 2025, price: 899900,  type: "suv",      hp: 408, kwh: 111,   zeroToHundred: 5.9, seats: 7, drivetrain: "AWD", battery: "111 kWh",  range: 580, emoji: "⚡", color: "#1b2e1b", segment: "Large SUV" },
    { id: 43, make: "Hyundai", model: "Kona Electric 65 kWh",       year: 2025, price: 369900,  type: "suv",      hp: 218, kwh: 65.4,  zeroToHundred: 7.8, seats: 5, drivetrain: "FWD", battery: "65.4 kWh", range: 490, emoji: "⚡", color: "#1a1a2e", segment: "Small SUV" },
    { id: 44, make: "Hyundai", model: "IONIQ 5 Long Range AWD",     year: 2025, price: 499900,  type: "suv",      hp: 325, kwh: 84,    zeroToHundred: 5.1, seats: 5, drivetrain: "AWD", battery: "84 kWh",   range: 507, emoji: "⚡", color: "#16213e", segment: "Mid-size SUV" },
    { id: 45, make: "Hyundai", model: "IONIQ 6 Long Range AWD",     year: 2025, price: 519900,  type: "sedan",    hp: 325, kwh: 77.4,  zeroToHundred: 5.1, seats: 5, drivetrain: "AWD", battery: "77.4 kWh", range: 583, emoji: "⚡", color: "#1b2838", segment: "Mid-size Sedan" },
    { id: 46, make: "Kia", model: "Niro EV",                        year: 2025, price: 399900,  type: "suv",      hp: 204, kwh: 64.8,  zeroToHundred: 7.8, seats: 5, drivetrain: "FWD", battery: "64.8 kWh", range: 463, emoji: "⚡", color: "#1a1a2e", segment: "Compact SUV" },
    { id: 47, make: "Kia", model: "EV6 Long Range AWD",             year: 2025, price: 529900,  type: "suv",      hp: 325, kwh: 77.4,  zeroToHundred: 5.2, seats: 5, drivetrain: "AWD", battery: "77.4 kWh", range: 506, emoji: "⚡", color: "#16213e", segment: "Mid-size SUV" },
    { id: 48, make: "Kia", model: "EV9 Long Range AWD",             year: 2025, price: 699900,  type: "suv",      hp: 384, kwh: 99.8,  zeroToHundred: 5.3, seats: 7, drivetrain: "AWD", battery: "99.8 kWh", range: 501, emoji: "⚡", color: "#1b2838", segment: "Large SUV" },
    { id: 49, make: "Skoda", model: "Enyaq iV 80",                  year: 2025, price: 449900,  type: "suv",      hp: 204, kwh: 77,    zeroToHundred: 8.5, seats: 5, drivetrain: "RWD", battery: "77 kWh",   range: 545, emoji: "⚡", color: "#1a2e2e", segment: "Compact SUV" },
    { id: 50, make: "Skoda", model: "Enyaq Coupe RS",               year: 2025, price: 579900,  type: "suv",      hp: 340, kwh: 77,    zeroToHundred: 5.5, seats: 5, drivetrain: "AWD", battery: "77 kWh",   range: 505, emoji: "⚡", color: "#2d1b2e", segment: "Coupe SUV" },
    { id: 51, make: "Polestar", model: "2 Long Range Dual Motor",   year: 2025, price: 499900,  type: "sedan",    hp: 421, kwh: 78,    zeroToHundred: 4.2, seats: 5, drivetrain: "AWD", battery: "78 kWh",   range: 487, emoji: "⚡", color: "#1a1a2e", segment: "Mid-size Sedan" },
    { id: 52, make: "Polestar", model: "3 Long Range Dual Motor",   year: 2025, price: 799900,  type: "suv",      hp: 489, kwh: 111,   zeroToHundred: 4.7, seats: 5, drivetrain: "AWD", battery: "111 kWh",  range: 560, emoji: "⚡", color: "#16213e", segment: "Large SUV" },
    { id: 53, make: "Polestar", model: "4 Long Range Dual Motor",   year: 2025, price: 649900,  type: "suv",      hp: 544, kwh: 100,   zeroToHundred: 3.8, seats: 5, drivetrain: "AWD", battery: "100 kWh",  range: 560, emoji: "⚡", color: "#1b2838", segment: "Coupe SUV" },
    { id: 54, make: "NIO", model: "ET5 Touring",                    year: 2025, price: 449900,  type: "wagon",    hp: 490, kwh: 100,   zeroToHundred: 4.0, seats: 5, drivetrain: "AWD", battery: "100 kWh",  range: 560, emoji: "⚡", color: "#1b2e1b", segment: "Mid-size Wagon" },
    { id: 55, make: "NIO", model: "EL6",                            year: 2025, price: 539900,  type: "suv",      hp: 490, kwh: 100,   zeroToHundred: 4.5, seats: 5, drivetrain: "AWD", battery: "100 kWh",  range: 510, emoji: "⚡", color: "#2e2e1a", segment: "Mid-size SUV" },
    { id: 56, make: "NIO", model: "EL7",                            year: 2025, price: 639900,  type: "suv",      hp: 653, kwh: 100,   zeroToHundred: 3.9, seats: 5, drivetrain: "AWD", battery: "100 kWh",  range: 485, emoji: "⚡", color: "#2e1a1a", segment: "Mid-size SUV" },
    { id: 57, make: "Toyota", model: "bZ4X AWD",                    year: 2025, price: 449900,  type: "suv",      hp: 218, kwh: 71.4,  zeroToHundred: 6.9, seats: 5, drivetrain: "AWD", battery: "71.4 kWh", range: 411, emoji: "⚡", color: "#1a1a2e", segment: "Mid-size SUV" },
    { id: 58, make: "Ford", model: "Mustang Mach-E Extended AWD",   year: 2025, price: 529900,  type: "suv",      hp: 351, kwh: 91,    zeroToHundred: 5.4, seats: 5, drivetrain: "AWD", battery: "91 kWh",   range: 540, emoji: "⚡", color: "#2e1a1a", segment: "Mid-size SUV" },
    { id: 59, make: "Ford", model: "Explorer Electric AWD",         year: 2025, price: 499900,  type: "suv",      hp: 340, kwh: 79,    zeroToHundred: 5.3, seats: 5, drivetrain: "AWD", battery: "79 kWh",   range: 530, emoji: "⚡", color: "#1b2838", segment: "Mid-size SUV" },
    { id: 60, make: "Xpeng", model: "G6",                           year: 2025, price: 449900,  type: "suv",      hp: 296, kwh: 87.5,  zeroToHundred: 5.9, seats: 5, drivetrain: "RWD", battery: "87.5 kWh", range: 570, emoji: "⚡", color: "#1a2e2e", segment: "Mid-size SUV" },
    { id: 61, make: "Xpeng", model: "G9",                           year: 2025, price: 569900,  type: "suv",      hp: 551, kwh: 98,    zeroToHundred: 3.9, seats: 5, drivetrain: "AWD", battery: "98 kWh",   range: 520, emoji: "⚡", color: "#2d1b2e", segment: "Large SUV" },
    { id: 62, make: "BYD", model: "Atto 3",                         year: 2025, price: 349900,  type: "suv",      hp: 204, kwh: 60.5,  zeroToHundred: 7.3, seats: 5, drivetrain: "FWD", battery: "60.5 kWh", range: 420, emoji: "⚡", color: "#1a1a2e", segment: "Compact SUV" },
    { id: 63, make: "BYD", model: "Tang EV600",                     year: 2025, price: 569900,  type: "suv",      hp: 517, kwh: 108.8, zeroToHundred: 4.6, seats: 7, drivetrain: "AWD", battery: "108.8 kWh",range: 530, emoji: "⚡", color: "#16213e", segment: "Large SUV" },
    { id: 64, make: "BYD", model: "Seal",                           year: 2025, price: 439900,  type: "sedan",    hp: 313, kwh: 82.5,  zeroToHundred: 5.9, seats: 5, drivetrain: "RWD", battery: "82.5 kWh", range: 570, emoji: "⚡", color: "#1b2838", segment: "Mid-size Sedan" },
    { id: 65, make: "Cupra", model: "Born 77 kWh",                  year: 2025, price: 419900,  type: "hatchback",hp: 231, kwh: 77,    zeroToHundred: 7.0, seats: 5, drivetrain: "RWD", battery: "77 kWh",   range: 540, emoji: "⚡", color: "#2e1a1a", segment: "Compact" },
    { id: 66, make: "Cupra", model: "Tavascan VZ",                  year: 2025, price: 559900,  type: "suv",      hp: 340, kwh: 77,    zeroToHundred: 5.5, seats: 5, drivetrain: "AWD", battery: "77 kWh",   range: 500, emoji: "⚡", color: "#2d1b2e", segment: "Coupe SUV" },
    { id: 67, make: "Renault", model: "Megane E-Tech 60",           year: 2025, price: 369900,  type: "hatchback",hp: 220, kwh: 60,    zeroToHundred: 7.4, seats: 5, drivetrain: "FWD", battery: "60 kWh",   range: 450, emoji: "⚡", color: "#1b2e1b", segment: "Compact" },
    { id: 68, make: "Renault", model: "Scenic E-Tech 87",           year: 2025, price: 449900,  type: "suv",      hp: 220, kwh: 87,    zeroToHundred: 7.9, seats: 5, drivetrain: "FWD", battery: "87 kWh",   range: 620, emoji: "⚡", color: "#2e2e1a", segment: "Compact SUV" },
    { id: 69, make: "Smart", model: "#1 Pro+",                      year: 2025, price: 349900,  type: "suv",      hp: 272, kwh: 66,    zeroToHundred: 6.7, seats: 5, drivetrain: "RWD", battery: "66 kWh",   range: 420, emoji: "⚡", color: "#1a1a2e", segment: "Small SUV" },
    { id: 70, make: "Smart", model: "#3 BRABUS",                    year: 2025, price: 469900,  type: "suv",      hp: 428, kwh: 66,    zeroToHundred: 3.7, seats: 5, drivetrain: "AWD", battery: "66 kWh",   range: 400, emoji: "⚡", color: "#2e1a1a", segment: "Coupe SUV" },
];

function toFirestoreFields(obj) {
    const fields = {};
    for (const [k, v] of Object.entries(obj)) {
        if (typeof v === 'string')          fields[k] = { stringValue: v };
        else if (typeof v === 'boolean')    fields[k] = { booleanValue: v };
        else if (Number.isInteger(v))       fields[k] = { integerValue: String(v) };
        else if (typeof v === 'number')     fields[k] = { doubleValue: v };
    }
    return fields;
}

const writes = CARS.map(car => ({
    update: {
        name: `projects/${PROJECT_ID}/databases/(default)/documents/cars/${car.id}`,
        fields: toFirestoreFields(car)
    }
}));

console.log(`Laster opp ${CARS.length} biler til Firestore...`);

const res = await fetch(
    `${BASE_URL}:batchWrite?key=${API_KEY}`,
    {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ writes })
    }
);

const result = await res.json();

if (!res.ok) {
    console.error('Feil:', JSON.stringify(result, null, 2));
    process.exit(1);
}

const errors = result.writeResults?.filter((_, i) => result.status?.[i]?.code);
if (errors?.length) {
    console.error('Noen feil:', errors);
} else {
    console.log(`✓ Alle ${CARS.length} biler er lastet opp til samlingen "cars" i Firestore!`);
}
