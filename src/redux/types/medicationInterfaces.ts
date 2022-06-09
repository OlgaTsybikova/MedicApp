import { MedicationProps } from "../../components/Medication/Medication";

export interface IMedication {
  title: string;
  image: string;
  category: string;
  prospect?: string;
  description?: string;
  uses: string;
  dosis?: string;
  treatment: boolean;
  id: string;
  owner: string | undefined;
}

export interface MedicationListProps {
  medication: MedicationProps;
}

export interface MedicationList {
  medication: IMedication[];
}
export type MedicationState = IMedication[];
