/* tslint:disable */
/* eslint-disable */
//  This file was automatically generated and should not be edited.

export type ProcessPaymentInput = {
  unit_id: string,
  total?: string | null,
  success_url?: string | null,
  cancel_url?: string | null,
};

export type CreateScreeningInput = {
  id?: string | null,
  user_email?: string | null,
  buyer_experience?: string | null,
  buyer_purpose?: string | null,
  num_bedrooms?: Array< number | null > | null,
  num_bathrooms?: Array< number | null > | null,
  budget?: Array< number | null > | null,
  unit_premium_interest?: Array< string | null > | null,
  _version?: number | null,
};

export type ModelScreeningConditionInput = {
  user_email?: ModelStringInput | null,
  buyer_experience?: ModelStringInput | null,
  buyer_purpose?: ModelStringInput | null,
  num_bedrooms?: ModelFloatInput | null,
  num_bathrooms?: ModelFloatInput | null,
  budget?: ModelIntInput | null,
  unit_premium_interest?: ModelStringInput | null,
  and?: Array< ModelScreeningConditionInput | null > | null,
  or?: Array< ModelScreeningConditionInput | null > | null,
  not?: ModelScreeningConditionInput | null,
};

export type ModelStringInput = {
  ne?: string | null,
  eq?: string | null,
  le?: string | null,
  lt?: string | null,
  ge?: string | null,
  gt?: string | null,
  contains?: string | null,
  notContains?: string | null,
  between?: Array< string | null > | null,
  beginsWith?: string | null,
  attributeExists?: boolean | null,
  attributeType?: ModelAttributeTypes | null,
  size?: ModelSizeInput | null,
};

export enum ModelAttributeTypes {
  binary = "binary",
  binarySet = "binarySet",
  bool = "bool",
  list = "list",
  map = "map",
  number = "number",
  numberSet = "numberSet",
  string = "string",
  stringSet = "stringSet",
  _null = "_null",
}


export type ModelSizeInput = {
  ne?: number | null,
  eq?: number | null,
  le?: number | null,
  lt?: number | null,
  ge?: number | null,
  gt?: number | null,
  between?: Array< number | null > | null,
};

export type ModelFloatInput = {
  ne?: number | null,
  eq?: number | null,
  le?: number | null,
  lt?: number | null,
  ge?: number | null,
  gt?: number | null,
  between?: Array< number | null > | null,
  attributeExists?: boolean | null,
  attributeType?: ModelAttributeTypes | null,
};

export type ModelIntInput = {
  ne?: number | null,
  eq?: number | null,
  le?: number | null,
  lt?: number | null,
  ge?: number | null,
  gt?: number | null,
  between?: Array< number | null > | null,
  attributeExists?: boolean | null,
  attributeType?: ModelAttributeTypes | null,
};

export type Screening = {
  __typename: "Screening",
  id: string,
  user_email?: string | null,
  buyer_experience?: string | null,
  buyer_purpose?: string | null,
  num_bedrooms?: Array< number | null > | null,
  num_bathrooms?: Array< number | null > | null,
  budget?: Array< number | null > | null,
  unit_premium_interest?: Array< string | null > | null,
  _version: number,
  _deleted?: boolean | null,
  _lastChangedAt: number,
  createdAt: string,
  updatedAt: string,
};

export type UpdateScreeningInput = {
  id: string,
  user_email?: string | null,
  buyer_experience?: string | null,
  buyer_purpose?: string | null,
  num_bedrooms?: Array< number | null > | null,
  num_bathrooms?: Array< number | null > | null,
  budget?: Array< number | null > | null,
  unit_premium_interest?: Array< string | null > | null,
  _version?: number | null,
};

export type DeleteScreeningInput = {
  id: string,
  _version?: number | null,
};

export type CreateUnitInput = {
  id?: string | null,
  unit_number?: number | null,
  beds?: number | null,
  price?: string | null,
  maintenance_fee?: number | null,
  baths?: number | null,
  starting_floor?: number | null,
  occupancy_date?: number | null,
  square_ft?: number | null,
  property_tax?: number | null,
  view?: string | null,
  utility_fee?: number | null,
  rendering_image?: string | null,
  maintenance_per_sq?: number | null,
  is_sold?: boolean | null,
  floor_plan?: string | null,
  deposit_dates?: Array< string | null > | null,
  _version?: number | null,
};

export type ModelUnitConditionInput = {
  unit_number?: ModelIntInput | null,
  beds?: ModelFloatInput | null,
  price?: ModelStringInput | null,
  maintenance_fee?: ModelFloatInput | null,
  baths?: ModelFloatInput | null,
  starting_floor?: ModelIntInput | null,
  occupancy_date?: ModelIntInput | null,
  square_ft?: ModelIntInput | null,
  property_tax?: ModelFloatInput | null,
  view?: ModelStringInput | null,
  utility_fee?: ModelFloatInput | null,
  rendering_image?: ModelStringInput | null,
  maintenance_per_sq?: ModelFloatInput | null,
  is_sold?: ModelBooleanInput | null,
  floor_plan?: ModelStringInput | null,
  deposit_dates?: ModelStringInput | null,
  and?: Array< ModelUnitConditionInput | null > | null,
  or?: Array< ModelUnitConditionInput | null > | null,
  not?: ModelUnitConditionInput | null,
};

export type ModelBooleanInput = {
  ne?: boolean | null,
  eq?: boolean | null,
  attributeExists?: boolean | null,
  attributeType?: ModelAttributeTypes | null,
};

export type Unit = {
  __typename: "Unit",
  id: string,
  unit_number?: number | null,
  beds?: number | null,
  price?: string | null,
  maintenance_fee?: number | null,
  baths?: number | null,
  starting_floor?: number | null,
  occupancy_date?: number | null,
  square_ft?: number | null,
  property_tax?: number | null,
  view?: string | null,
  utility_fee?: number | null,
  rendering_image?: string | null,
  maintenance_per_sq?: number | null,
  is_sold?: boolean | null,
  floor_plan?: string | null,
  deposit_dates?: Array< string | null > | null,
  _version: number,
  _deleted?: boolean | null,
  _lastChangedAt: number,
  createdAt: string,
  updatedAt: string,
};

export type UpdateUnitInput = {
  id: string,
  unit_number?: number | null,
  beds?: number | null,
  price?: string | null,
  maintenance_fee?: number | null,
  baths?: number | null,
  starting_floor?: number | null,
  occupancy_date?: number | null,
  square_ft?: number | null,
  property_tax?: number | null,
  view?: string | null,
  utility_fee?: number | null,
  rendering_image?: string | null,
  maintenance_per_sq?: number | null,
  is_sold?: boolean | null,
  floor_plan?: string | null,
  deposit_dates?: Array< string | null > | null,
  _version?: number | null,
};

export type DeleteUnitInput = {
  id: string,
  _version?: number | null,
};

export type CreatePurchaseInput = {
  id?: string | null,
  user_email?: string | null,
  unit_id?: string | null,
  _version?: number | null,
  purchaseUnitId?: string | null,
};

export type ModelPurchaseConditionInput = {
  user_email?: ModelStringInput | null,
  unit_id?: ModelIDInput | null,
  and?: Array< ModelPurchaseConditionInput | null > | null,
  or?: Array< ModelPurchaseConditionInput | null > | null,
  not?: ModelPurchaseConditionInput | null,
};

export type ModelIDInput = {
  ne?: string | null,
  eq?: string | null,
  le?: string | null,
  lt?: string | null,
  ge?: string | null,
  gt?: string | null,
  contains?: string | null,
  notContains?: string | null,
  between?: Array< string | null > | null,
  beginsWith?: string | null,
  attributeExists?: boolean | null,
  attributeType?: ModelAttributeTypes | null,
  size?: ModelSizeInput | null,
};

export type Purchase = {
  __typename: "Purchase",
  id: string,
  user_email?: string | null,
  Unit?: Unit | null,
  unit_id?: string | null,
  _version: number,
  _deleted?: boolean | null,
  _lastChangedAt: number,
  createdAt: string,
  updatedAt: string,
};

export type UpdatePurchaseInput = {
  id: string,
  user_email?: string | null,
  unit_id?: string | null,
  _version?: number | null,
  purchaseUnitId?: string | null,
};

export type DeletePurchaseInput = {
  id: string,
  _version?: number | null,
};

export type ModelScreeningFilterInput = {
  id?: ModelIDInput | null,
  user_email?: ModelStringInput | null,
  buyer_experience?: ModelStringInput | null,
  buyer_purpose?: ModelStringInput | null,
  num_bedrooms?: ModelFloatInput | null,
  num_bathrooms?: ModelFloatInput | null,
  budget?: ModelIntInput | null,
  unit_premium_interest?: ModelStringInput | null,
  and?: Array< ModelScreeningFilterInput | null > | null,
  or?: Array< ModelScreeningFilterInput | null > | null,
  not?: ModelScreeningFilterInput | null,
};

export type ModelScreeningConnection = {
  __typename: "ModelScreeningConnection",
  items:  Array<Screening >,
  nextToken?: string | null,
  startedAt?: number | null,
};

export type ModelUnitFilterInput = {
  id?: ModelIDInput | null,
  unit_number?: ModelIntInput | null,
  beds?: ModelFloatInput | null,
  price?: ModelStringInput | null,
  maintenance_fee?: ModelFloatInput | null,
  baths?: ModelFloatInput | null,
  starting_floor?: ModelIntInput | null,
  occupancy_date?: ModelIntInput | null,
  square_ft?: ModelIntInput | null,
  property_tax?: ModelFloatInput | null,
  view?: ModelStringInput | null,
  utility_fee?: ModelFloatInput | null,
  rendering_image?: ModelStringInput | null,
  maintenance_per_sq?: ModelFloatInput | null,
  is_sold?: ModelBooleanInput | null,
  floor_plan?: ModelStringInput | null,
  deposit_dates?: ModelStringInput | null,
  and?: Array< ModelUnitFilterInput | null > | null,
  or?: Array< ModelUnitFilterInput | null > | null,
  not?: ModelUnitFilterInput | null,
};

export type ModelUnitConnection = {
  __typename: "ModelUnitConnection",
  items:  Array<Unit >,
  nextToken?: string | null,
  startedAt?: number | null,
};

export type ModelPurchaseFilterInput = {
  id?: ModelIDInput | null,
  user_email?: ModelStringInput | null,
  unit_id?: ModelIDInput | null,
  and?: Array< ModelPurchaseFilterInput | null > | null,
  or?: Array< ModelPurchaseFilterInput | null > | null,
  not?: ModelPurchaseFilterInput | null,
};

export type ModelPurchaseConnection = {
  __typename: "ModelPurchaseConnection",
  items:  Array<Purchase >,
  nextToken?: string | null,
  startedAt?: number | null,
};

export type ProcessPaymentMutationVariables = {
  input: ProcessPaymentInput,
};

export type ProcessPaymentMutation = {
  processPayment?: string | null,
};

export type CreateScreeningMutationVariables = {
  input: CreateScreeningInput,
  condition?: ModelScreeningConditionInput | null,
};

export type CreateScreeningMutation = {
  createScreening?:  {
    __typename: "Screening",
    id: string,
    user_email?: string | null,
    buyer_experience?: string | null,
    buyer_purpose?: string | null,
    num_bedrooms?: Array< number | null > | null,
    num_bathrooms?: Array< number | null > | null,
    budget?: Array< number | null > | null,
    unit_premium_interest?: Array< string | null > | null,
    _version: number,
    _deleted?: boolean | null,
    _lastChangedAt: number,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type UpdateScreeningMutationVariables = {
  input: UpdateScreeningInput,
  condition?: ModelScreeningConditionInput | null,
};

export type UpdateScreeningMutation = {
  updateScreening?:  {
    __typename: "Screening",
    id: string,
    user_email?: string | null,
    buyer_experience?: string | null,
    buyer_purpose?: string | null,
    num_bedrooms?: Array< number | null > | null,
    num_bathrooms?: Array< number | null > | null,
    budget?: Array< number | null > | null,
    unit_premium_interest?: Array< string | null > | null,
    _version: number,
    _deleted?: boolean | null,
    _lastChangedAt: number,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type DeleteScreeningMutationVariables = {
  input: DeleteScreeningInput,
  condition?: ModelScreeningConditionInput | null,
};

export type DeleteScreeningMutation = {
  deleteScreening?:  {
    __typename: "Screening",
    id: string,
    user_email?: string | null,
    buyer_experience?: string | null,
    buyer_purpose?: string | null,
    num_bedrooms?: Array< number | null > | null,
    num_bathrooms?: Array< number | null > | null,
    budget?: Array< number | null > | null,
    unit_premium_interest?: Array< string | null > | null,
    _version: number,
    _deleted?: boolean | null,
    _lastChangedAt: number,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type CreateUnitMutationVariables = {
  input: CreateUnitInput,
  condition?: ModelUnitConditionInput | null,
};

export type CreateUnitMutation = {
  createUnit?:  {
    __typename: "Unit",
    id: string,
    unit_number?: number | null,
    beds?: number | null,
    price?: string | null,
    maintenance_fee?: number | null,
    baths?: number | null,
    starting_floor?: number | null,
    occupancy_date?: number | null,
    square_ft?: number | null,
    property_tax?: number | null,
    view?: string | null,
    utility_fee?: number | null,
    rendering_image?: string | null,
    maintenance_per_sq?: number | null,
    is_sold?: boolean | null,
    floor_plan?: string | null,
    deposit_dates?: Array< string | null > | null,
    _version: number,
    _deleted?: boolean | null,
    _lastChangedAt: number,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type UpdateUnitMutationVariables = {
  input: UpdateUnitInput,
  condition?: ModelUnitConditionInput | null,
};

export type UpdateUnitMutation = {
  updateUnit?:  {
    __typename: "Unit",
    id: string,
    unit_number?: number | null,
    beds?: number | null,
    price?: string | null,
    maintenance_fee?: number | null,
    baths?: number | null,
    starting_floor?: number | null,
    occupancy_date?: number | null,
    square_ft?: number | null,
    property_tax?: number | null,
    view?: string | null,
    utility_fee?: number | null,
    rendering_image?: string | null,
    maintenance_per_sq?: number | null,
    is_sold?: boolean | null,
    floor_plan?: string | null,
    deposit_dates?: Array< string | null > | null,
    _version: number,
    _deleted?: boolean | null,
    _lastChangedAt: number,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type DeleteUnitMutationVariables = {
  input: DeleteUnitInput,
  condition?: ModelUnitConditionInput | null,
};

export type DeleteUnitMutation = {
  deleteUnit?:  {
    __typename: "Unit",
    id: string,
    unit_number?: number | null,
    beds?: number | null,
    price?: string | null,
    maintenance_fee?: number | null,
    baths?: number | null,
    starting_floor?: number | null,
    occupancy_date?: number | null,
    square_ft?: number | null,
    property_tax?: number | null,
    view?: string | null,
    utility_fee?: number | null,
    rendering_image?: string | null,
    maintenance_per_sq?: number | null,
    is_sold?: boolean | null,
    floor_plan?: string | null,
    deposit_dates?: Array< string | null > | null,
    _version: number,
    _deleted?: boolean | null,
    _lastChangedAt: number,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type CreatePurchaseMutationVariables = {
  input: CreatePurchaseInput,
  condition?: ModelPurchaseConditionInput | null,
};

export type CreatePurchaseMutation = {
  createPurchase?:  {
    __typename: "Purchase",
    id: string,
    user_email?: string | null,
    Unit?:  {
      __typename: "Unit",
      id: string,
      unit_number?: number | null,
      beds?: number | null,
      price?: string | null,
      maintenance_fee?: number | null,
      baths?: number | null,
      starting_floor?: number | null,
      occupancy_date?: number | null,
      square_ft?: number | null,
      property_tax?: number | null,
      view?: string | null,
      utility_fee?: number | null,
      rendering_image?: string | null,
      maintenance_per_sq?: number | null,
      is_sold?: boolean | null,
      floor_plan?: string | null,
      deposit_dates?: Array< string | null > | null,
      _version: number,
      _deleted?: boolean | null,
      _lastChangedAt: number,
      createdAt: string,
      updatedAt: string,
    } | null,
    unit_id?: string | null,
    _version: number,
    _deleted?: boolean | null,
    _lastChangedAt: number,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type UpdatePurchaseMutationVariables = {
  input: UpdatePurchaseInput,
  condition?: ModelPurchaseConditionInput | null,
};

export type UpdatePurchaseMutation = {
  updatePurchase?:  {
    __typename: "Purchase",
    id: string,
    user_email?: string | null,
    Unit?:  {
      __typename: "Unit",
      id: string,
      unit_number?: number | null,
      beds?: number | null,
      price?: string | null,
      maintenance_fee?: number | null,
      baths?: number | null,
      starting_floor?: number | null,
      occupancy_date?: number | null,
      square_ft?: number | null,
      property_tax?: number | null,
      view?: string | null,
      utility_fee?: number | null,
      rendering_image?: string | null,
      maintenance_per_sq?: number | null,
      is_sold?: boolean | null,
      floor_plan?: string | null,
      deposit_dates?: Array< string | null > | null,
      _version: number,
      _deleted?: boolean | null,
      _lastChangedAt: number,
      createdAt: string,
      updatedAt: string,
    } | null,
    unit_id?: string | null,
    _version: number,
    _deleted?: boolean | null,
    _lastChangedAt: number,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type DeletePurchaseMutationVariables = {
  input: DeletePurchaseInput,
  condition?: ModelPurchaseConditionInput | null,
};

export type DeletePurchaseMutation = {
  deletePurchase?:  {
    __typename: "Purchase",
    id: string,
    user_email?: string | null,
    Unit?:  {
      __typename: "Unit",
      id: string,
      unit_number?: number | null,
      beds?: number | null,
      price?: string | null,
      maintenance_fee?: number | null,
      baths?: number | null,
      starting_floor?: number | null,
      occupancy_date?: number | null,
      square_ft?: number | null,
      property_tax?: number | null,
      view?: string | null,
      utility_fee?: number | null,
      rendering_image?: string | null,
      maintenance_per_sq?: number | null,
      is_sold?: boolean | null,
      floor_plan?: string | null,
      deposit_dates?: Array< string | null > | null,
      _version: number,
      _deleted?: boolean | null,
      _lastChangedAt: number,
      createdAt: string,
      updatedAt: string,
    } | null,
    unit_id?: string | null,
    _version: number,
    _deleted?: boolean | null,
    _lastChangedAt: number,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type SyncScreeningsQueryVariables = {
  filter?: ModelScreeningFilterInput | null,
  limit?: number | null,
  nextToken?: string | null,
  lastSync?: number | null,
};

export type SyncScreeningsQuery = {
  syncScreenings?:  {
    __typename: "ModelScreeningConnection",
    items:  Array< {
      __typename: "Screening",
      id: string,
      user_email?: string | null,
      buyer_experience?: string | null,
      buyer_purpose?: string | null,
      num_bedrooms?: Array< number | null > | null,
      num_bathrooms?: Array< number | null > | null,
      budget?: Array< number | null > | null,
      unit_premium_interest?: Array< string | null > | null,
      _version: number,
      _deleted?: boolean | null,
      _lastChangedAt: number,
      createdAt: string,
      updatedAt: string,
    } >,
    nextToken?: string | null,
    startedAt?: number | null,
  } | null,
};

export type GetScreeningQueryVariables = {
  id: string,
};

export type GetScreeningQuery = {
  getScreening?:  {
    __typename: "Screening",
    id: string,
    user_email?: string | null,
    buyer_experience?: string | null,
    buyer_purpose?: string | null,
    num_bedrooms?: Array< number | null > | null,
    num_bathrooms?: Array< number | null > | null,
    budget?: Array< number | null > | null,
    unit_premium_interest?: Array< string | null > | null,
    _version: number,
    _deleted?: boolean | null,
    _lastChangedAt: number,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type ListScreeningsQueryVariables = {
  filter?: ModelScreeningFilterInput | null,
  limit?: number | null,
  nextToken?: string | null,
};

export type ListScreeningsQuery = {
  listScreenings?:  {
    __typename: "ModelScreeningConnection",
    items:  Array< {
      __typename: "Screening",
      id: string,
      user_email?: string | null,
      buyer_experience?: string | null,
      buyer_purpose?: string | null,
      num_bedrooms?: Array< number | null > | null,
      num_bathrooms?: Array< number | null > | null,
      budget?: Array< number | null > | null,
      unit_premium_interest?: Array< string | null > | null,
      _version: number,
      _deleted?: boolean | null,
      _lastChangedAt: number,
      createdAt: string,
      updatedAt: string,
    } >,
    nextToken?: string | null,
    startedAt?: number | null,
  } | null,
};

export type SyncUnitsQueryVariables = {
  filter?: ModelUnitFilterInput | null,
  limit?: number | null,
  nextToken?: string | null,
  lastSync?: number | null,
};

export type SyncUnitsQuery = {
  syncUnits?:  {
    __typename: "ModelUnitConnection",
    items:  Array< {
      __typename: "Unit",
      id: string,
      unit_number?: number | null,
      beds?: number | null,
      price?: string | null,
      maintenance_fee?: number | null,
      baths?: number | null,
      starting_floor?: number | null,
      occupancy_date?: number | null,
      square_ft?: number | null,
      property_tax?: number | null,
      view?: string | null,
      utility_fee?: number | null,
      rendering_image?: string | null,
      maintenance_per_sq?: number | null,
      is_sold?: boolean | null,
      floor_plan?: string | null,
      deposit_dates?: Array< string | null > | null,
      _version: number,
      _deleted?: boolean | null,
      _lastChangedAt: number,
      createdAt: string,
      updatedAt: string,
    } >,
    nextToken?: string | null,
    startedAt?: number | null,
  } | null,
};

export type GetUnitQueryVariables = {
  id: string,
};

export type GetUnitQuery = {
  getUnit?:  {
    __typename: "Unit",
    id: string,
    unit_number?: number | null,
    beds?: number | null,
    price?: string | null,
    maintenance_fee?: number | null,
    baths?: number | null,
    starting_floor?: number | null,
    occupancy_date?: number | null,
    square_ft?: number | null,
    property_tax?: number | null,
    view?: string | null,
    utility_fee?: number | null,
    rendering_image?: string | null,
    maintenance_per_sq?: number | null,
    is_sold?: boolean | null,
    floor_plan?: string | null,
    deposit_dates?: Array< string | null > | null,
    _version: number,
    _deleted?: boolean | null,
    _lastChangedAt: number,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type ListUnitsQueryVariables = {
  filter?: ModelUnitFilterInput | null,
  limit?: number | null,
  nextToken?: string | null,
};

export type ListUnitsQuery = {
  listUnits?:  {
    __typename: "ModelUnitConnection",
    items:  Array< {
      __typename: "Unit",
      id: string,
      unit_number?: number | null,
      beds?: number | null,
      price?: string | null,
      maintenance_fee?: number | null,
      baths?: number | null,
      starting_floor?: number | null,
      occupancy_date?: number | null,
      square_ft?: number | null,
      property_tax?: number | null,
      view?: string | null,
      utility_fee?: number | null,
      rendering_image?: string | null,
      maintenance_per_sq?: number | null,
      is_sold?: boolean | null,
      floor_plan?: string | null,
      deposit_dates?: Array< string | null > | null,
      _version: number,
      _deleted?: boolean | null,
      _lastChangedAt: number,
      createdAt: string,
      updatedAt: string,
    } >,
    nextToken?: string | null,
    startedAt?: number | null,
  } | null,
};

export type GetPurchaseQueryVariables = {
  id: string,
};

export type GetPurchaseQuery = {
  getPurchase?:  {
    __typename: "Purchase",
    id: string,
    user_email?: string | null,
    Unit?:  {
      __typename: "Unit",
      id: string,
      unit_number?: number | null,
      beds?: number | null,
      price?: string | null,
      maintenance_fee?: number | null,
      baths?: number | null,
      starting_floor?: number | null,
      occupancy_date?: number | null,
      square_ft?: number | null,
      property_tax?: number | null,
      view?: string | null,
      utility_fee?: number | null,
      rendering_image?: string | null,
      maintenance_per_sq?: number | null,
      is_sold?: boolean | null,
      floor_plan?: string | null,
      deposit_dates?: Array< string | null > | null,
      _version: number,
      _deleted?: boolean | null,
      _lastChangedAt: number,
      createdAt: string,
      updatedAt: string,
    } | null,
    unit_id?: string | null,
    _version: number,
    _deleted?: boolean | null,
    _lastChangedAt: number,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type ListPurchasesQueryVariables = {
  filter?: ModelPurchaseFilterInput | null,
  limit?: number | null,
  nextToken?: string | null,
};

export type ListPurchasesQuery = {
  listPurchases?:  {
    __typename: "ModelPurchaseConnection",
    items:  Array< {
      __typename: "Purchase",
      id: string,
      user_email?: string | null,
      unit_id?: string | null,
      _version: number,
      _deleted?: boolean | null,
      _lastChangedAt: number,
      createdAt: string,
      updatedAt: string,
    } >,
    nextToken?: string | null,
    startedAt?: number | null,
  } | null,
};

export type SyncPurchasesQueryVariables = {
  filter?: ModelPurchaseFilterInput | null,
  limit?: number | null,
  nextToken?: string | null,
  lastSync?: number | null,
};

export type SyncPurchasesQuery = {
  syncPurchases?:  {
    __typename: "ModelPurchaseConnection",
    items:  Array< {
      __typename: "Purchase",
      id: string,
      user_email?: string | null,
      unit_id?: string | null,
      _version: number,
      _deleted?: boolean | null,
      _lastChangedAt: number,
      createdAt: string,
      updatedAt: string,
    } >,
    nextToken?: string | null,
    startedAt?: number | null,
  } | null,
};

export type OnCreateScreeningSubscription = {
  onCreateScreening?:  {
    __typename: "Screening",
    id: string,
    user_email?: string | null,
    buyer_experience?: string | null,
    buyer_purpose?: string | null,
    num_bedrooms?: Array< number | null > | null,
    num_bathrooms?: Array< number | null > | null,
    budget?: Array< number | null > | null,
    unit_premium_interest?: Array< string | null > | null,
    _version: number,
    _deleted?: boolean | null,
    _lastChangedAt: number,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type OnUpdateScreeningSubscription = {
  onUpdateScreening?:  {
    __typename: "Screening",
    id: string,
    user_email?: string | null,
    buyer_experience?: string | null,
    buyer_purpose?: string | null,
    num_bedrooms?: Array< number | null > | null,
    num_bathrooms?: Array< number | null > | null,
    budget?: Array< number | null > | null,
    unit_premium_interest?: Array< string | null > | null,
    _version: number,
    _deleted?: boolean | null,
    _lastChangedAt: number,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type OnDeleteScreeningSubscription = {
  onDeleteScreening?:  {
    __typename: "Screening",
    id: string,
    user_email?: string | null,
    buyer_experience?: string | null,
    buyer_purpose?: string | null,
    num_bedrooms?: Array< number | null > | null,
    num_bathrooms?: Array< number | null > | null,
    budget?: Array< number | null > | null,
    unit_premium_interest?: Array< string | null > | null,
    _version: number,
    _deleted?: boolean | null,
    _lastChangedAt: number,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type OnCreateUnitSubscription = {
  onCreateUnit?:  {
    __typename: "Unit",
    id: string,
    unit_number?: number | null,
    beds?: number | null,
    price?: string | null,
    maintenance_fee?: number | null,
    baths?: number | null,
    starting_floor?: number | null,
    occupancy_date?: number | null,
    square_ft?: number | null,
    property_tax?: number | null,
    view?: string | null,
    utility_fee?: number | null,
    rendering_image?: string | null,
    maintenance_per_sq?: number | null,
    is_sold?: boolean | null,
    floor_plan?: string | null,
    deposit_dates?: Array< string | null > | null,
    _version: number,
    _deleted?: boolean | null,
    _lastChangedAt: number,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type OnUpdateUnitSubscription = {
  onUpdateUnit?:  {
    __typename: "Unit",
    id: string,
    unit_number?: number | null,
    beds?: number | null,
    price?: string | null,
    maintenance_fee?: number | null,
    baths?: number | null,
    starting_floor?: number | null,
    occupancy_date?: number | null,
    square_ft?: number | null,
    property_tax?: number | null,
    view?: string | null,
    utility_fee?: number | null,
    rendering_image?: string | null,
    maintenance_per_sq?: number | null,
    is_sold?: boolean | null,
    floor_plan?: string | null,
    deposit_dates?: Array< string | null > | null,
    _version: number,
    _deleted?: boolean | null,
    _lastChangedAt: number,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type OnDeleteUnitSubscription = {
  onDeleteUnit?:  {
    __typename: "Unit",
    id: string,
    unit_number?: number | null,
    beds?: number | null,
    price?: string | null,
    maintenance_fee?: number | null,
    baths?: number | null,
    starting_floor?: number | null,
    occupancy_date?: number | null,
    square_ft?: number | null,
    property_tax?: number | null,
    view?: string | null,
    utility_fee?: number | null,
    rendering_image?: string | null,
    maintenance_per_sq?: number | null,
    is_sold?: boolean | null,
    floor_plan?: string | null,
    deposit_dates?: Array< string | null > | null,
    _version: number,
    _deleted?: boolean | null,
    _lastChangedAt: number,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type OnCreatePurchaseSubscription = {
  onCreatePurchase?:  {
    __typename: "Purchase",
    id: string,
    user_email?: string | null,
    Unit?:  {
      __typename: "Unit",
      id: string,
      unit_number?: number | null,
      beds?: number | null,
      price?: string | null,
      maintenance_fee?: number | null,
      baths?: number | null,
      starting_floor?: number | null,
      occupancy_date?: number | null,
      square_ft?: number | null,
      property_tax?: number | null,
      view?: string | null,
      utility_fee?: number | null,
      rendering_image?: string | null,
      maintenance_per_sq?: number | null,
      is_sold?: boolean | null,
      floor_plan?: string | null,
      deposit_dates?: Array< string | null > | null,
      _version: number,
      _deleted?: boolean | null,
      _lastChangedAt: number,
      createdAt: string,
      updatedAt: string,
    } | null,
    unit_id?: string | null,
    _version: number,
    _deleted?: boolean | null,
    _lastChangedAt: number,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type OnUpdatePurchaseSubscription = {
  onUpdatePurchase?:  {
    __typename: "Purchase",
    id: string,
    user_email?: string | null,
    Unit?:  {
      __typename: "Unit",
      id: string,
      unit_number?: number | null,
      beds?: number | null,
      price?: string | null,
      maintenance_fee?: number | null,
      baths?: number | null,
      starting_floor?: number | null,
      occupancy_date?: number | null,
      square_ft?: number | null,
      property_tax?: number | null,
      view?: string | null,
      utility_fee?: number | null,
      rendering_image?: string | null,
      maintenance_per_sq?: number | null,
      is_sold?: boolean | null,
      floor_plan?: string | null,
      deposit_dates?: Array< string | null > | null,
      _version: number,
      _deleted?: boolean | null,
      _lastChangedAt: number,
      createdAt: string,
      updatedAt: string,
    } | null,
    unit_id?: string | null,
    _version: number,
    _deleted?: boolean | null,
    _lastChangedAt: number,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type OnDeletePurchaseSubscription = {
  onDeletePurchase?:  {
    __typename: "Purchase",
    id: string,
    user_email?: string | null,
    Unit?:  {
      __typename: "Unit",
      id: string,
      unit_number?: number | null,
      beds?: number | null,
      price?: string | null,
      maintenance_fee?: number | null,
      baths?: number | null,
      starting_floor?: number | null,
      occupancy_date?: number | null,
      square_ft?: number | null,
      property_tax?: number | null,
      view?: string | null,
      utility_fee?: number | null,
      rendering_image?: string | null,
      maintenance_per_sq?: number | null,
      is_sold?: boolean | null,
      floor_plan?: string | null,
      deposit_dates?: Array< string | null > | null,
      _version: number,
      _deleted?: boolean | null,
      _lastChangedAt: number,
      createdAt: string,
      updatedAt: string,
    } | null,
    unit_id?: string | null,
    _version: number,
    _deleted?: boolean | null,
    _lastChangedAt: number,
    createdAt: string,
    updatedAt: string,
  } | null,
};
