using {issue as db} from '../db/_issue';


service main_service {

  entity Belege as projection on db.Belege;

};
