/* tslint:disable */
/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const onCreateScreening = /* GraphQL */ `
  subscription OnCreateScreening {
    onCreateScreening {
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
export const onUpdateScreening = /* GraphQL */ `
  subscription OnUpdateScreening {
    onUpdateScreening {
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
export const onDeleteScreening = /* GraphQL */ `
  subscription OnDeleteScreening {
    onDeleteScreening {
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
export const onCreateUnit = /* GraphQL */ `
  subscription OnCreateUnit {
    onCreateUnit {
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
export const onUpdateUnit = /* GraphQL */ `
  subscription OnUpdateUnit {
    onUpdateUnit {
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
export const onDeleteUnit = /* GraphQL */ `
  subscription OnDeleteUnit {
    onDeleteUnit {
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
export const onCreatePurchase = /* GraphQL */ `
  subscription OnCreatePurchase {
    onCreatePurchase {
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
export const onUpdatePurchase = /* GraphQL */ `
  subscription OnUpdatePurchase {
    onUpdatePurchase {
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
export const onDeletePurchase = /* GraphQL */ `
  subscription OnDeletePurchase {
    onDeletePurchase {
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
