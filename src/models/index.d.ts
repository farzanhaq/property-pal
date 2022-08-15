import { ModelInit, MutableModel, PersistentModelConstructor } from "@aws-amplify/datastore";





type PurchaseMetaData = {
  readOnlyFields: 'createdAt' | 'updatedAt';
}

type UnitMetaData = {
  readOnlyFields: 'createdAt' | 'updatedAt';
}

type ScreeningMetaData = {
  readOnlyFields: 'createdAt' | 'updatedAt';
}

export declare class Purchase {
  readonly id: string;
  readonly user_email?: string;
  readonly Unit?: Unit;
  readonly unit_id?: string;
  readonly createdAt?: string;
  readonly updatedAt?: string;
  constructor(init: ModelInit<Purchase, PurchaseMetaData>);
  static copyOf(source: Purchase, mutator: (draft: MutableModel<Purchase, PurchaseMetaData>) => MutableModel<Purchase, PurchaseMetaData> | void): Purchase;
}

export declare class Unit {
  readonly id: string;
  readonly unit_number?: number;
  readonly beds?: number;
  readonly price?: string;
  readonly maintenance_fee?: number;
  readonly baths?: number;
  readonly starting_floor?: number;
  readonly occupancy_date?: number;
  readonly square_ft?: number;
  readonly property_tax?: number;
  readonly view?: string;
  readonly utility_fee?: number;
  readonly rendering_image?: string;
  readonly maintenance_per_sq?: number;
  readonly is_sold?: boolean;
  readonly floor_plan?: string;
  readonly deposit_dates?: (string | null)[];
  readonly createdAt?: string;
  readonly updatedAt?: string;
  constructor(init: ModelInit<Unit, UnitMetaData>);
  static copyOf(source: Unit, mutator: (draft: MutableModel<Unit, UnitMetaData>) => MutableModel<Unit, UnitMetaData> | void): Unit;
}

export declare class Screening {
  readonly id: string;
  readonly user_email?: string;
  readonly buyer_experience?: string;
  readonly buyer_purpose?: string;
  readonly num_bedrooms?: (number | null)[];
  readonly num_bathrooms?: (number | null)[];
  readonly budget?: (number | null)[];
  readonly unit_premium_interest?: (string | null)[];
  readonly createdAt?: string;
  readonly updatedAt?: string;
  constructor(init: ModelInit<Screening, ScreeningMetaData>);
  static copyOf(source: Screening, mutator: (draft: MutableModel<Screening, ScreeningMetaData>) => MutableModel<Screening, ScreeningMetaData> | void): Screening;
}