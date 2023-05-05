export interface Technician {
  name: string;
  email: string;
  role:string;
  avatar: string;
  shopImages: string[];
  description: string;
  shop: string;
  location: string;
}

export interface userAuth {
  name: string;
  userId: string;
  role: string;
}

export interface Customer {
  name: string;
  email: string;
  avatar: string;
  role:string;
  location: string;
}
