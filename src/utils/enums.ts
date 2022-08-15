export enum ScreeningKind {
  BUYER_EXPERIENCE = 0,
  BUYER_PURPOSE = 1,
  UNIT_TYPE = 2,
  PREMIUMS = 3,
  BUDGET = 4,
  CONFIRMATION = 5,
}

export enum FormActionKind {
  ADD_BUYER_EXPERIENCE = "ADD_BUYER_EXPERIENCE",
  ADD_BUYER_PURPOSE = "ADD_BUYER_PURPOSE",
  ADD_NUM_BEDROOMS = "ADD_NUM_BEDROOMS",
  ADD_NUM_BATHROOMS = "ADD_NUM_BATHROOMS",
  ADD_PREMIUMS = "ADD_PREMIUMS",
  ADD_BUDGET = "ADD_BUDGET",
}

export enum BuyerExperienceKind {
  FIRST_TIME = "FIRST_TIME",
  EXPERIENCED = "EXPERIENCED",
}

export enum BuyerPurposeKind {
  OWNER = "OWNER",
  INVESTOR = "INVESTOR",
}

export enum BedroomsKind {
  BACHELOR = 0,
  ONE_BED = 1,
  ONE_BED_PLUS_DEN = 1.5,
  TWO_BED = 2,
  TWO_BED_PLUS_DEN = 2.5,
}

export enum BathroomsKind {
  ONE_BATH = 1,
  TWO_BATH = 2,
  THREE_BATH = 3,
}

export enum PremiumsKind {
  BALCONY = "Balcony",
  TERRACE = "Terrace",
  VIEW = "View",
  HIGH_FLOOR = "High Floor",
}

export enum BudgetKind {
  ZERO = 0,
  ONE_MILLION = 1000000,
  TWO_MILLION = 2000000,
  THREE_MILLION = 3000000,
  FOUR_MILLION = 4000000,
}

export enum SqftKind {
  ZERO = 0,
  ONE_THOUSAND = 1000,
  TWO_THOUSAND = 2000,
  THREE_THOUSAND = 3000,
  FOUR_THOUSAND = 4000,
}

export enum OccupancyKind {
  TWO_THOUSAND_AND_TWENTY_TWO = 2022,
  TWO_THOUSAND_AND_TWENTY_THREE = 2023,
  TWO_THOUSAND_AND_TWENTY_FOUR = 2024,
}

export enum BookingKind {
  IDENTIFICATION = 0,
  CONTRACT = 1,
  PAYMENT = 2,
}