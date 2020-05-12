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
  artifacts: Array<Message>;
  values: Array<Message>;
  roles: Array<Message>;
}

export enum MssgeType {
  WELCOME = 'welcome',
  SCRUM = 'scrum',
  ARTIFACTS = 'artifacts',
  VALUES = 'values',
  ROLES = 'roles'
}

export interface Message {
  name: string;
  route: string;
}

export enum HomeMenuType {
  SCRUM = 'scrum',
  ARTIFACTS = 'artifacts',
  VALUES = 'values',
  ROLES = 'roles'
}
