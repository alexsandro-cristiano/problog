interface IUsersCompanyProps {
  id: number;
  name: string;
  catchPhrase: string;
  bs: string;
}
interface IGeoProps {
  lat: string;
  lng: string;
}

interface IAddressProps {
  street: string;
  suite: string;
  city: string;
  zipcode: string;
  geo: IGeoProps;
}
export interface IUsersProps {
  id: number;
  name: string;
  userName: string;
  email: string;
  phone: string;
  website: string;
  address?: IAddressProps;
  company?: IUsersCompanyProps;
}
