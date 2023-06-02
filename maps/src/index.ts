import { User } from './user';
import { Company} from './company';
import { CustomMap } from "./customMap";

const user1 = new User();
const company1 = new Company();
const customMap1 = new CustomMap('map');

customMap1.addMarker(user1);
customMap1.addMarker(company1);


 