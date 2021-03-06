import { Page as SketchPage } from 'sketch-constructor';
import BaseElement from './BaseElement';
import { Props } from '../types';

export default class Page extends BaseElement {
  static propTypes: object;

  static defaultProps: Props;

  constructor(props: Props = {}) {
    const args = { ...props };
    delete args.children;
    const page = new SketchPage(args);
    super(page, props);
  }
}
