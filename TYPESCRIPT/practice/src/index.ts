import IPerson from "./person/IPerson";
import { makePerson } from "./person/Person";

const testMakePerson = (): void => {
    let jane: IPerson = makePerson('Jane');
    let jack: IPerson = makePerson('Jack');
    console.log(jane, jack);
}
 
testMakePerson();