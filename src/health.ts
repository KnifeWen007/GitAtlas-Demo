export interface HealthSignal {
  id: string;
  severity: 'info' | 'warn' | 'critical';
  message: string;
}

export function score(signals: HealthSignal[]): number {
  return Math.max(0, 100 - signals.filter((signal) => signal.severity !== 'info').length * 12);
}
