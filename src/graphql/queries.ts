/* tslint:disable */
/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const syncScreenings = /* GraphQL */ `
  query SyncScreenings(
    $filter: ModelScreeningFilterInput
    $limit: Int
    $nextToken: String
    $lastSync: AWSTimestamp
  ) {
    syncScreenings(
      filter: $filter
      limit: $limit
      nextToken: $nextToken
      lastSync: $lastSync
    ) {
      items {
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
      nextToken
      startedAt
    }
  }
`;
export const getScreening = /* GraphQL */ `
  query GetScreening($id: ID!) {
    getScreening(id: $id) {
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
export const listScreenings = /* GraphQL */ `
  query ListScreenings(
    $filter: ModelScreeningFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listScreenings(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
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
      nextToken
      startedAt
    }
  }
`;
export const syncUnits = /* GraphQL */ `
  query SyncUnits(
    $filter: ModelUnitFilterInput
    $limit: Int
    $nextToken: String
    $lastSync: AWSTimestamp
  ) {
    syncUnits(
      filter: $filter
      limit: $limit
      nextToken: $nextToken
      lastSync: $lastSync
    ) {
      items {
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
      nextToken
      startedAt
    }
  }
`;
export const getUnit = /* GraphQL */ `
  query GetUnit($id: ID!) {
    getUnit(id: $id) {
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
export const listUnits = /* GraphQL */ `
  query ListUnits(
    $filter: ModelUnitFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listUnits(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
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
      nextToken
      startedAt
    }
  }
`;
export const getPurchase = /* GraphQL */ `
  query GetPurchase($id: ID!) {
    getPurchase(id: $id) {
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
export const listPurchases = /* GraphQL */ `
  query ListPurchases(
    $filter: ModelPurchaseFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listPurchases(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
        id
        user_email
        unit_id
        _version
        _deleted
        _lastChangedAt
        createdAt
        updatedAt
      }
      nextToken
      startedAt
    }
  }
`;
export const syncPurchases = /* GraphQL */ `
  query SyncPurchases(
    $filter: ModelPurchaseFilterInput
    $limit: Int
    $nextToken: String
    $lastSync: AWSTimestamp
  ) {
    syncPurchases(
      filter: $filter
      limit: $limit
      nextToken: $nextToken
      lastSync: $lastSync
    ) {
      items {
        id
        user_email
        unit_id
        _version
        _deleted
        _lastChangedAt
        createdAt
        updatedAt
      }
      nextToken
      startedAt
    }
  }
`;
