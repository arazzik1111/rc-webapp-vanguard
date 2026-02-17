import * as React from 'react';

export type ResellerUserType = {
  id: number;
  email: string | null;
  created: string;
  last_login: string;
  external_id: string | null;
  status: string;
  reseller_alias: string;
  change_password: React.ReactNode;
};
