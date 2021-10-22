import {HasFormatter} from "../interfaces/HasFormatter.js";

export class ListTemplate {
  constructor(private container: HTMLUListElement){}
  // 프라이빗으로 넣어주면 따로 class안에 프로퍼티를 선언하지 않아도 된다
  // 즉 접근제어자를 사용하면서 동시에 프로퍼티를 선언해주는 것이다

  render(item: HasFormatter, heading: string, pos: 'start' | 'end'){
    // 첫번재 인자가 어떤게 들어와도 HasFormatter를 implement하고 있어야한다.
    // 세번째인자는 스트링으로 'start' 아니면 'end'밖에 오지못한다.

    const li = document.createElement('li');

    const h4 = document.createElement('h4');
    h4.innerText = heading;
    li.append(h4);

    const p = document.createElement('p');
    p.innerText = item.format();
    li.append(p);

    if(pos === 'start') {
      this.container.prepend(li);
      // this.container는 맨위에 접근제어자를 주면서 자동으로 선언되어있기때문에 사용가능
    } else {
      this.container.append(li);
    }
  }
}

/**
 * 1. register a list container (ul) in the constructor
 * 2. create a render method to render a new 'li' to the container
 */