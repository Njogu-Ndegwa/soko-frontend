// constants/planConstants.ts
export interface PlanFormData {
  name: string;
  connectionType: string;
  price: string;
  speed: string;
  durationDays: string;
}

export interface PlanInterface {
  id: string;
  name: string;
  connectionType: string;
  price: number;
  speed: string;
  durationDays: number;
}