export interface Technician {
  name: string;
  email: string;
  role:string;
  avatar: string;
  shopImages: string[];
  description: string;
  shop: string;
  location: Location;
  _id:string;
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

export type ResponseProfile= {
  success:boolean;
  user:Technician;

}
export type ResponseTechnicians= {
  success:boolean;
  technicians:Technician[];

}

export type ResponseTechnician = {
  success:boolean;
  user:Technician;
}


export type Location = {
  _id: string;
  name: string;
  lat: number;
  lon: number;
};