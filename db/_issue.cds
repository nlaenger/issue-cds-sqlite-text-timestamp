namespace issue;

using {
    cuid,
    managed,
    Country,
    Currency,
    sap.common.CodeList
} from '@sap/cds/common';
using from '@sap/cds-common-content';


entity Status : CodeList, {
    key code : String(20);
}

entity Belege : cuid, managed {

    // cuid => Entity bekommt GUID key Feld mit dem Namen ID!
    descr  : String(100);
    amount : Decimal(10, 2);
    status : Association to one Status;
    waehrs : Currency;
    land   : Country;
}
