/* tslint:disable */
/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const processPayment = /* GraphQL */ `
  mutation ProcessPayment($input: ProcessPaymentInput!) {
    processPayment(input: $input)
  }
`;
export const createScreening = /* GraphQL */ `
  mutation CreateScreening(
    $input: CreateScreeningInput!
    $condition: ModelScreeningConditionInput
  ) {
    createScreening(input: $input, condition: $condition) {
      id
      user_email
      buyer_experience
      buyer_purpose
      num_bedrooms
      num_bathrooms
      budget
      unit_premium_interest
      _version
      _deleted
      _lastChangedAt
      createdAt
      updatedAt
    }
  }
`;
export const updateScreening = /* GraphQL */ `
  mutation UpdateScreening(
    $input: UpdateScreeningInput!
    $condition: ModelScreeningConditionInput
  ) {
    updateScreening(input: $input, condition: $condition) {
      id
      user_email
      buyer_experience
      buyer_purpose
      num_bedrooms
      num_bathrooms
      budget
      unit_premium_interest
      _version
      _deleted
      _lastChangedAt
      createdAt
      updatedAt
    }
  }
`;
export const deleteScreening = /* GraphQL */ `
  mutation DeleteScreening(
    $input: DeleteScreeningInput!
    $condition: ModelScreeningConditionInput
  ) {
    deleteScreening(input: $input, condition: $condition) {
      id
      user_email
      buyer_experience
      buyer_purpose
      num_bedrooms
      num_bathrooms
      budget
      unit_premium_interest
      _version
      _deleted
      _lastChangedAt
      createdAt
      updatedAt
    }
  }
`;
export const createUnit = /* GraphQL */ `
  mutation CreateUnit(
    $input: CreateUnitInput!
    $condition: ModelUnitConditionInput
  ) {
    createUnit(input: $input, condition: $condition) {
      id
      unit_number
      beds
      price
      maintenance_fee
      baths
      starting_floor
      occupancy_date
      square_ft
      property_tax
      view
      utility_fee
      rendering_image
      maintenance_per_sq
      is_sold
      floor_plan
      deposit_dates
      _version
      _deleted
      _lastChangedAt
      createdAt
      updatedAt
    }
  }
`;
export const updateUnit = /* GraphQL */ `
  mutation UpdateUnit(
    $input: UpdateUnitInput!
    $condition: ModelUnitConditionInput
  ) {
    updateUnit(input: $input, condition: $condition) {
      id
      unit_number
      beds
      price
      maintenance_fee
      baths
      starting_floor
      occupancy_date
      square_ft
      property_tax
      view
      utility_fee
      rendering_image
      maintenance_per_sq
      is_sold
      floor_plan
      deposit_dates
      _version
      _deleted
      _lastChangedAt
      createdAt
      updatedAt
    }
  }
`;
export const deleteUnit = /* GraphQL */ `
  mutation DeleteUnit(
    $input: DeleteUnitInput!
    $condition: ModelUnitConditionInput
  ) {
    deleteUnit(input: $input, condition: $condition) {
      id
      unit_number
      beds
      price
      maintenance_fee
      baths
      starting_floor
      occupancy_date
      square_ft
      property_tax
      view
      utility_fee
      rendering_image
      maintenance_per_sq
      is_sold
      floor_plan
      deposit_dates
      _version
      _deleted
      _lastChangedAt
      createdAt
      updatedAt
    }
  }
`;
export const createPurchase = /* GraphQL */ `
  mutation CreatePurchase(
    $input: CreatePurchaseInput!
    $condition: ModelPurchaseConditionInput
  ) {
    createPurchase(input: $input, condition: $condition) {
      id
      user_email
      Unit {
        id
        unit_number
        beds
        price
        maintenance_fee
        baths
        starting_floor
        occupancy_date
        square_ft
        property_tax
        view
        utility_fee
        rendering_image
        maintenance_per_sq
        is_sold
        floor_plan
        deposit_dates
        _version
        _deleted
        _lastChangedAt
        createdAt
        updatedAt
      }
      unit_id
      _version
      _deleted
      _lastChangedAt
      createdAt
      updatedAt
    }
  }
`;
export const updatePurchase = /* GraphQL */ `
  mutation UpdatePurchase(
    $input: UpdatePurchaseInput!
    $condition: ModelPurchaseConditionInput
  ) {
    updatePurchase(input: $input, condition: $condition) {
      id
      user_email
      Unit {
        id
        unit_number
        beds
        price
        maintenance_fee
        baths
        starting_floor
        occupancy_date
        square_ft
        property_tax
        view
        utility_fee
        rendering_image
        maintenance_per_sq
        is_sold
        floor_plan
        deposit_dates
        _version
        _deleted
        _lastChangedAt
        createdAt
        updatedAt
      }
      unit_id
      _version
      _deleted
      _lastChangedAt
      createdAt
      updatedAt
    }
  }
`;
export const deletePurchase = /* GraphQL */ `
  mutation DeletePurchase(
    $input: DeletePurchaseInput!
    $condition: ModelPurchaseConditionInput
  ) {
    deletePurchase(input: $input, condition: $condition) {
      id
      user_email
      Unit {
        id
        unit_number
        beds
        price
        maintenance_fee
        baths
        starting_floor
        occupancy_date
        square_ft
        property_tax
        view
        utility_fee
        rendering_image
        maintenance_per_sq
        is_sold
        floor_plan
        deposit_dates
        _version
        _deleted
        _lastChangedAt
        createdAt
        updatedAt
      }
      unit_id
      _version
      _deleted
      _lastChangedAt
      createdAt
      updatedAt
    }
  }
`;
