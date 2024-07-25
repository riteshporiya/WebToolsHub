interface UnitOption {
    unitType: string;
    shortCode: string;
    conversionFactor: number | { fromBase: (value: number) => number; toBase: (value: number) => number };
}


type AreaUnitConverter = {
    unitOption: UnitOption[];
};

type DataTransferRateUnitConverter = {
    unitOption: UnitOption[];
};

type DigitalStorageUnitConverter = {
    unitOption: UnitOption[];
};

type EnergyUnitConverter = {
    unitOption: UnitOption[];
};

type FrequencyUnitConverter = {
    unitOption: UnitOption[];
};

type FuelEconomicsUnitConverter = {
    unitOption: UnitOption[];
};

type LengthUnitConverter = {
    unitOption: UnitOption[];
};

type MassUnitConverter = {
    unitOption: UnitOption[];
};

type PlaneAngleUnitConverter = {
    unitOption: UnitOption[];
};

type PressureUnitConverter = {
    unitOption: UnitOption[];
};

type SpeedUnitConverter = {
    unitOption: UnitOption[];
};

type TemperatureUnitConverter = {
    unitOption: (UnitOption & { conversionFactor: { fromBase: (value: number) => number; toBase: (value: number) => number } })[];
};

type TimeUnitConverter = {
    unitOption: UnitOption[];
};

type VolumeUnitConverter = {
    unitOption: UnitOption[];
};

export type UnitConverters = {
    "area-unit-converter": AreaUnitConverter;
    "data-transfer-rate-unit-converter": DataTransferRateUnitConverter;
    "digital-storage-unit-converter": DigitalStorageUnitConverter;
    "energy-unit-converter": EnergyUnitConverter;
    "frequency-unit-converter": FrequencyUnitConverter;
    "fuel-economics-unit-converter": FuelEconomicsUnitConverter;
    "length-unit-converter": LengthUnitConverter;
    "mass-unit-converter": MassUnitConverter;
    "plane-angle-unit-converter": PlaneAngleUnitConverter;
    "pressure-unit-converter": PressureUnitConverter;
    "speed-unit-converter": SpeedUnitConverter;
    "temperature-unit-converter": TemperatureUnitConverter;
    "time-unit-converter": TimeUnitConverter;
    "volume-unit-converter": VolumeUnitConverter;
};
