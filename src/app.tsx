import React, { PureComponent } from 'react';
import {Autowired, Consumer} from "coreact";


@Consumer
export class App extends PureComponent {
  render() {
    return <>
      Hello COREACT 3.3.6
    </>
  }
}
