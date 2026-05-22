/** Theme system types */
export interface Theme {
  id: string;
  name: string;
  vars: Record<string, string>;
}
