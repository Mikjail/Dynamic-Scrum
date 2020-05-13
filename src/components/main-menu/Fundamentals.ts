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
  artifacts: Array<SubItem>;
  values: Array<SubItem>;
  roles: Array<SubItem>;
}

export enum MssgeType {
  WELCOME = 'welcome',
  SCRUM = 'scrum',
  ARTIFACTS = 'artifacts',
  VALUES = 'values',
  ROLES = 'roles',
  ARTIFACT_PROD_BACKLOG = 'artifact_product-backlog',
  ARTIFACT_SPRINT_BACKLOG = 'artifact_sprint-backlog',
  ARTIFACT_INCREMENT = 'artifact_increment',
  VALUES_COMMITMENT = 'values_commitment',
  VALUES_COURAGE = 'values_courage',
  VALUES_OPENNES = 'values_opennes',
  VALUES_RESPECT = 'values_respect',
  VALUES_FOCUS = 'values_focus',
  ROLES_SCRUM_MASTER = 'roles_scrum-master',
  ROLES_PROD_OWNER = 'roles_product-owner',
  ROLES_DEV_TEAM = 'roles_dev-team'
}

export interface SubItem {
  name: MssgeType;
}

export enum HomeMenuType {
  SCRUM = 'scrum',
  ARTIFACTS = 'artifacts',
  VALUES = 'values',
  ROLES = 'roles'
}
