export enum FundamentalsEnum {
  ARTIFACTS = 'artifacts',
  VALUES = 'values',
  ROLES = 'roles'
}

export enum ArtifactsEnum {
  PRODUCT_BACKLOG = 'Product Backlog',
  SPRINT_BACKLOG = 'Sprint Backlog',
  PRODUCT_INCREMENT = 'Product Increment'
}

export interface Fundamentals {
  artifacts: Array<{ name: string; route: string }>;
  values: Array<{ name: string; route: string }>;
  roles: Array<{ name: string; route: string }>;
}
