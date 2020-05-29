export enum FundamentalsEnum {
  EVENTS = 'events',
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
  events: Array<SubItem>;
}

export enum MssgeType {
  WELCOME = 'welcome',
  SCRUM = 'scrum',
  ARTIFACTS = 'artifacts',
  EVENTS = 'events',
  VALUES = 'values',
  ROLES = 'roles',
  ARTIFACT_PROD_BACKLOG = 'artifact_product-backlog',
  ARTIFACT_SPRINT_BACKLOG = 'artifact_sprint-backlog',
  ARTIFACT_INCREMENT = 'artifact_increment',
  EVENTS_SPRINT_PLANNING = 'events_sprint-planning',
  EVENTS_DAILY_SCRUM = 'events_daily-scrum',
  EVENTS_SPRINT_REVIEW = 'events_sprint-review',
  EVENTS_SPRINT_RETROSPECTIVE = 'events_sprint-retro',
  VALUES_COMMITMENT = 'values_commitment',
  VALUES_COURAGE = 'values_courage',
  VALUES_OPENNESS = 'values_openness',
  VALUES_RESPECT = 'values_respect',
  VALUES_FOCUS = 'values_focus',
  ROLES_SCRUM_MASTER = 'roles_scrum-master',
  ROLES_PROD_OWNER = 'roles_product-owner',
  ROLES_DEV_TEAM = 'roles_dev-team'
}

export enum ImageSrc {
  ARTIFACT_PROD_BACKLOG = 'product_backlog',
  ARTIFACT_SPRINT_BACKLOG = 'sprint_backlog',
  ARTIFACT_INCREMENT = 'product_increment',
  EVENTS_SPRINT_PLANNING = 'sprint_planning',
  EVENTS_DAILY_SCRUM = 'daily_scrum',
  EVENTS_SPRINT_REVIEW = 'sprint_review',
  EVENTS_SPRINT_RETROSPECTIVE = 'sprint_retro',
  ROLES_SCRUM_MASTER = 'scrum-master',
  ROLES_PROD_OWNER = 'product-owner',
  ROLES_DEV_TEAM = 'dev-team',
  VALUES_COMMITMENT = 'values_commitment',
  VALUES_COURAGE = 'values_courage',
  VALUES_OPENNESS = 'values_openness',
  VALUES_RESPECT = 'values_respect',
  VALUES_FOCUS = 'values_focus'
}

export interface SubItem {
  name: MssgeType;
  imgSrc: string;
  routeSrc? : string;
  avatarMssg?: string;
}
