import { Geo } from "./geo.model";
import { Address } from "./address.model";
import { Company } from "./company.model";

export class User{
	id: number;
	name: string;
	username: string;
	email: string;
	address: Address;
	geo: Geo;
	phone: string; 
	website: string;
    company: Company;
}
