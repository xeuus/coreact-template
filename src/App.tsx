import React, { PureComponent } from 'react';
import {Autowired, Consumer} from "coreact";
import {Networking} from "Services/Networking";


@Consumer
export class App extends PureComponent {
  net = Autowired(Networking, this);
  render() {
    return <>
      Hello Coreact
    </>
  }
}
