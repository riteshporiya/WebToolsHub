import { UnitConverters } from "./@types";

export const unitOptionDataArray: UnitConverters = {
    "area-unit-converter": {
        unitOption: [
            {
                unitType: "Square kilometer",
                shortCode: "km²",
                conversionFactor: 1e6,
            },
            { unitType: "Square meter", shortCode: "m²", conversionFactor: 1 },
            {
                unitType: "Square mile",
                shortCode: "mi²",
                conversionFactor: 2589988.12,
            },
            {
                unitType: "Square yard",
                shortCode: "yd²",
                conversionFactor: 0.83612736,
            },
            {
                unitType: "Square foot",
                shortCode: "ft²",
                conversionFactor: 0.09290304,
            },
            {
                unitType: "Square inch",
                shortCode: "in²",
                conversionFactor: 0.00064516,
            },
            { unitType: "Hectare", shortCode: "ha", conversionFactor: 10000 },
            { unitType: "Acre", shortCode: "ac", conversionFactor: 4046.8564224 },
        ],
    },
    "data-transfer-rate-unit-converter": {
        unitOption: [
            { unitType: "Bit per second", shortCode: "bps", conversionFactor: 1 },
            {
                unitType: "Kilobit per second",
                shortCode: "kbps",
                conversionFactor: 1000,
            },
            {
                unitType: "Kilobyte per second",
                shortCode: "KB/s",
                conversionFactor: 8000,
            },
            {
                unitType: "Kibibit per second",
                shortCode: "Kibps",
                conversionFactor: 1024,
            },
            {
                unitType: "Megabit per second",
                shortCode: "Mbps",
                conversionFactor: 1000000,
            },
            {
                unitType: "Megabyte per second",
                shortCode: "MB/s",
                conversionFactor: 8000000,
            },
            {
                unitType: "Mebibit per second",
                shortCode: "Mib/s",
                conversionFactor: 1048580.74,
            },
            {
                unitType: "Gigabit per second",
                shortCode: "Gbps",
                conversionFactor: 1e9,
            },
            {
                unitType: "Gigabyte per second",
                shortCode: "GB/s",
                conversionFactor: 8e9,
            },
            {
                unitType: "Gibibit per second",
                shortCode: "Gib/s",
                conversionFactor: 1073741824,
            },
            {
                unitType: "Terabit per second",
                shortCode: "Tbpss",
                conversionFactor: 1e12,
            },
            {
                unitType: "Terabyte per second",
                shortCode: "TB/s",
                conversionFactor: 8e12,
            },
            {
                unitType: "Tebibit per second",
                shortCode: "Tib/s",
                conversionFactor: 1099511627776,
            },
        ],
    },
    "digital-storage-unit-converter": {
        unitOption: [
            { unitType: "Bit", shortCode: "b", conversionFactor: 0.125 },
            { unitType: "Kilobit", shortCode: "kb", conversionFactor: 125 },
            { unitType: "Kibibit", shortCode: "Kibit", conversionFactor: 128 },
            { unitType: "Megabit", shortCode: "Mb", conversionFactor: 125000 },
            { unitType: "Mebibit", shortCode: "Mibit", conversionFactor: 131072 },
            { unitType: "Gigabit", shortCode: "Gb", conversionFactor: 125000000 },
            {
                unitType: "Gibibit",
                shortCode: "Gibit",
                conversionFactor: 134217728,
            },
            {
                unitType: "Terabit",
                shortCode: "Tb",
                conversionFactor: 125000000000,
            },
            {
                unitType: "Tebibit",
                shortCode: "Tibit",
                conversionFactor: 137438953472,
            },
            {
                unitType: "Petabit",
                shortCode: "Pb",
                conversionFactor: 125000000000000,
            },
            {
                unitType: "Pebibit",
                shortCode: "Pibit",
                conversionFactor: 140737488355328,
            },
            { unitType: "Byte", shortCode: "B", conversionFactor: 1 },
            { unitType: "Kilobyte", shortCode: "kB", conversionFactor: 1000 },
            { unitType: "Kibibyte", shortCode: "KiB", conversionFactor: 1024 },
            { unitType: "Megabyte", shortCode: "MB", conversionFactor: 1e6 },
            { unitType: "Mebibyte", shortCode: "MiB", conversionFactor: 1048576 },
            { unitType: "Gigabyte", shortCode: "GB", conversionFactor: 1e9 },
            { unitType: "Gibibyte", shortCode: "GiB", conversionFactor: 1073741824 },
            { unitType: "Terabyte", shortCode: "TB", conversionFactor: 1e12 },
            {
                unitType: "Tebibyte",
                shortCode: "TiB",
                conversionFactor: 1099511627776,
            },
            { unitType: "Petabyte", shortCode: "PB", conversionFactor: 1e15 },
            {
                unitType: "Pebibyte",
                shortCode: "PiB",
                conversionFactor: 1125899906842624,
            },
        ],
    },
    "energy-unit-converter": {
        unitOption: [
            { unitType: "Joule", shortCode: "J", conversionFactor: 1 },
            { unitType: "Kilojoule", shortCode: "kJ", conversionFactor: 1000 },
            { unitType: "Gram calorie", shortCode: "cal", conversionFactor: 4.184 },
            { unitType: "Kilocalorie", shortCode: "kcal", conversionFactor: 4184 },
            { unitType: "Watt hour", shortCode: "Wh", conversionFactor: 3600 },
            {
                unitType: "Kilowatt hour",
                shortCode: "kWh",
                conversionFactor: 3600000,
            },
            {
                unitType: "Electronvolt",
                shortCode: "eV",
                conversionFactor: 1.602050624799744e-19,
            },
            {
                unitType: "British thermal unit",
                shortCode: "BTU",
                conversionFactor: 1055.06,
            },
            { unitType: "US therm", shortCode: "thm", conversionFactor: 105480400 },
            { unitType: "Foot-pound", shortCode: "ft-lb", conversionFactor: 1.3558 },
        ],
    },
    "frequency-unit-converter": {
        unitOption: [
            { unitType: "Hertz", shortCode: "Hz", conversionFactor: 1 },
            { unitType: "Kilohertz", shortCode: "kHz", conversionFactor: 1000 },
            { unitType: "Megahertz", shortCode: "MHz", conversionFactor: 1000000 },
            { unitType: "Gigahertz", shortCode: "GHz", conversionFactor: 1000000000 },
        ],
    },
    "fuel-economics-unit-converter": {
        unitOption: [
            {
                unitType: "Miles per gallon",
                shortCode: "mpg",
                conversionFactor: 0.425144,
            },
            {
                unitType: "Miles per gallon (Imperial)",
                shortCode: "mpgimp",
                conversionFactor: 0.354006,
            },
            {
                unitType: "Kilometer per liter",
                shortCode: "km/L",
                conversionFactor: 1,
            },
            {
                unitType: "Liter per 100 kilometers",
                shortCode: "L/100km",
                conversionFactor: 100,
            },
        ],
    },
    "length-unit-converter": {
        unitOption: [
            { unitType: "Kilometer", shortCode: "km", conversionFactor: 1000 },
            { unitType: "Meter", shortCode: "m", conversionFactor: 1 },
            { unitType: "Centimeter", shortCode: "cm", conversionFactor: 0.01 },
            { unitType: "Millimeter", shortCode: "mm", conversionFactor: 0.001 },
            { unitType: "Micrometers", shortCode: "um", conversionFactor: 0.000001 },
            {
                unitType: "Nanometer",
                shortCode: "nm",
                conversionFactor: 0.000000001,
            },
            { unitType: "Mile", shortCode: "mi", conversionFactor: 1609.34 },
            { unitType: "Yard", shortCode: "yd", conversionFactor: 0.9144 },
            { unitType: "Foot", shortCode: "ft", conversionFactor: 0.3048 },
            { unitType: "Inch", shortCode: "in", conversionFactor: 0.0254 },
            { unitType: "Nautical mile", shortCode: "nmi", conversionFactor: 1852 },
        ],
    },
    "mass-unit-converter": {
        unitOption: [
            { unitType: "Tonne", shortCode: "t", conversionFactor: 1000 },
            { unitType: "Kilogram", shortCode: "kg", conversionFactor: 1 },
            { unitType: "Gram", shortCode: "g", conversionFactor: 0.001 },
            { unitType: "Milligram", shortCode: "mg", conversionFactor: 0.000001 },
            {
                unitType: "Microgram",
                shortCode: "ug",
                conversionFactor: 0.000000001,
            },
            {
                unitType: "Imperial ton",
                shortCode: "long-ton",
                conversionFactor: 1016.0469088,
            },
            {
                unitType: "US ton",
                shortCode: "short-ton",
                conversionFactor: 907.18474,
            },
            { unitType: "Stone", shortCode: "st", conversionFactor: 6.35029 },
            { unitType: "Pound", shortCode: "lb", conversionFactor: 0.45359237 },
            { unitType: "Ounce", shortCode: "oz", conversionFactor: 0.028349523 },
        ],
    },
    "plane-angle-unit-converter": {
        unitOption: [
            {
                unitType: "Arcsecond",
                shortCode: "arcsec",
                conversionFactor: 1 / 3600,
            },
            { unitType: "Degree", shortCode: "°", conversionFactor: 1 },
            { unitType: "Gradian", shortCode: "grad", conversionFactor: 0.9 },
            {
                unitType: "Milliradian",
                shortCode: "mrad",
                conversionFactor: 0.057296,
            },
            {
                unitType: "Minute of arc",
                shortCode: "arcmin",
                conversionFactor: 1 / 60,
            },
            { unitType: "Radian", shortCode: "rad", conversionFactor: 57.2957795 },
        ],
    },
    "pressure-unit-converter": {
        unitOption: [
            { unitType: "Bar", shortCode: "Bar", conversionFactor: 100000 },
            { unitType: "Pascal", shortCode: "Pa", conversionFactor: 1 },
            {
                unitType: "Pound per square inch",
                shortCode: "psi",
                conversionFactor: 6894.76,
            },
            {
                unitType: "Standard atmosphere",
                shortCode: "atm",
                conversionFactor: 101325,
            },
            {
                unitType: "Torr",
                shortCode: "mmHg",
                conversionFactor: 133.322,
            },
        ],
    },
    "speed-unit-converter": {
        unitOption: [
            {
                unitType: "Mile per hour",
                shortCode: "mph",
                conversionFactor: 0.44704,
            },
            {
                unitType: "Foot per second",
                shortCode: "fps",
                conversionFactor: 0.3048,
            },
            { unitType: "Meter per second", shortCode: "m/s", conversionFactor: 1 },
            {
                unitType: "Kilometer per hour",
                shortCode: "km/h",
                conversionFactor: 0.27778,
            },
            { unitType: "Knot", shortCode: "kt", conversionFactor: 0.51444 },
        ],
    },
    "temperature-unit-converter": {
        unitOption: [
            {
                unitType: "Degree Celsius",
                shortCode: "C",
                conversionFactor: {
                    fromBase: (value: number) => value,
                    toBase: (value: number) => value,
                },
            },
            {
                unitType: "Fahrenheit",
                shortCode: "F",
                conversionFactor: {
                    fromBase: (value: number) => ((value - 32) * 5) / 9,
                    toBase: (value: number) => (value * 9) / 5 + 32,
                },
            },
            {
                unitType: "Kelvin",
                shortCode: "K",
                conversionFactor: {
                    fromBase: (value: number) => value - 273.15,
                    toBase: (value: number) => value + 273.15,
                },
            },
        ],
    },
    "time-unit-converter": {
        unitOption: [
            {
                unitType: "Nanosecond",
                shortCode: "ns",
                conversionFactor: 0.000000001,
            },
            { unitType: "Microsecond", shortCode: "us", conversionFactor: 0.000001 },
            { unitType: "Millisecond", shortCode: "ms", conversionFactor: 0.001 },
            { unitType: "Second", shortCode: "s", conversionFactor: 1 },
            { unitType: "Minute", shortCode: "min", conversionFactor: 60 },
            { unitType: "Hour", shortCode: "h", conversionFactor: 3600 },
            { unitType: "Day", shortCode: "d", conversionFactor: 86400 },
            { unitType: "Week", shortCode: "wk", conversionFactor: 604800 },
            { unitType: "Month", shortCode: "mo", conversionFactor: 2628000 },
            {
                unitType: "Calendar year",
                shortCode: "yr",
                conversionFactor: 31536000,
            },
            { unitType: "Decade", shortCode: "dec", conversionFactor: 315360000 },
            {
                unitType: "Century",
                shortCode: "cen",
                conversionFactor: 3153600000,
            },
        ],
    },
    "volume-unit-converter": {
        unitOption: [
            {
                unitType: "US liquid gallon",
                shortCode: "short-gal",
                conversionFactor: 3.78541,
            },
            {
                unitType: "US liquid quart",
                shortCode: "short-qt",
                conversionFactor: 0.946353,
            },
            {
                unitType: "US liquid pint",
                shortCode: "short-pt",
                conversionFactor: 0.473176,
            },
            { unitType: "US legal cup", shortCode: "UScp", conversionFactor: 0.24 },
            {
                unitType: "Fluid ounce",
                shortCode: "fl-oz",
                conversionFactor: 0.0295735,
            },
            {
                unitType: "US tablespoon",
                shortCode: "short-tbsp",
                conversionFactor: 0.0147868,
            },
            {
                unitType: "US teaspoon",
                shortCode: "short-tsp",
                conversionFactor: 0.00492892,
            },
            { unitType: "Cubic meter", shortCode: "m³", conversionFactor: 1000 },
            { unitType: "Liter", shortCode: "L", conversionFactor: 1 },
            { unitType: "Milliliter", shortCode: "mL", conversionFactor: 0.001 },
            {
                unitType: "Imperial gallon",
                shortCode: "long-gal",
                conversionFactor: 4.54609,
            },
            {
                unitType: "Imperial quart",
                shortCode: "long-qt",
                conversionFactor: 1.13652,
            },
            {
                unitType: "Imperial pint",
                shortCode: "long-pt",
                conversionFactor: 0.56826125,
            },
            {
                unitType: "Imperial cup",
                shortCode: "long-cp",
                conversionFactor: 0.284130625,
            },
            {
                unitType: "Imp. fluid ounce",
                shortCode: "long-oz",
                conversionFactor: 0.0284130625,
            },
            {
                unitType: "Imperial tablespoon",
                shortCode: "long-tbsp",
                conversionFactor: 0.0177581641,
            },
            {
                unitType: "Imperial teaspoon",
                shortCode: "long-tsp",
                conversionFactor: 0.00591938803,
            },
            {
                unitType: "Cubic foot",
                shortCode: "ft³",
                conversionFactor: 28.3168466,
            },
            {
                unitType: "Cubic inch",
                shortCode: "in³",
                conversionFactor: 0.016387064,
            },
        ],
    },
};
