export type UserRole = 'driver' | 'admin';

export interface User {
  id: string;
  name: string;
  role: UserRole;
  driverId?: string;
  avatar?: string;
  route?: string;
}

export interface Round {
  id: string;
  driverId: string;
  timestamp: string;
  route: string;
  amount: number; // usually 25
  status: 'validated' | 'pending' | 'flagged';
}

export interface Remittance {
  id: string;
  driverId: string;
  date: string;
  amount: number;
  status: 'paid' | 'pending' | 'overdue';
  transactionId: string;
}

export interface Anomaly {
  id: string;
  driverId: string;
  driverName: string;
  type: 'Excessive Arrears' | 'Peak Hour Inactivity' | 'Irregular Route Path';
  risk: 'critical' | 'moderate' | 'low';
  outstanding: number;
  lastActive: string;
}
