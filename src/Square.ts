import {
  /* Field: The native "number" type in SnarkyJS. You can think of these as unsigned integers. 
    These are the most basic type in SnarkyJS and are what all other SnarkyJS-compatible types are built on top of. */
  Field,
  // SmartContract: The class that creates zkApp smart contracts. /
  SmartContract,
  // state: a convenience decorator used within zkApp smart contracts to create references to state stored on chain in a zkApp account.
  state,
  // State: a class used within zkApp smart contracts to create state stored on chain in a zkApp account.
  State,
  /* method: a convenience decorator used within zkApp smart contracts to create new smart contract methods (i.e. functions).
     Methods that uses this decorator are the end user's entry points to interacting with our smart contract. */
  method,
  /* DeployArgs: The type for arguments submitted to a newly deployed smart contract. 
    DeployArgs,*/
  /* Permissions: A collection of methods for manipulating zkApp smart contract permissions. 
    Permissions,*/
} from 'snarkyjs';

export class Square extends SmartContract {
  @state(Field) num = State<Field>();

  init() {
    super.init();
    this.num.set(Field(3));
  }

  @method update(square: Field) {
    const currentState = this.num.get();
    this.num.assertEquals(currentState);
    square.assertEquals(currentState.mul(currentState));
    this.num.set(square);
  }
}
