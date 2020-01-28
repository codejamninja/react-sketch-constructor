import reconciler from './reconciler';
import { Page } from './elements';
import { Options } from './types';

export function render(jsx: JSX.Element, _options: Options = {}) {
  const rootElement = new Page();
  rootElement.sketch.addPage(rootElement.node);
  const root = reconciler.createContainer(rootElement, false, false);
  reconciler.updateContainer(jsx, root, null, () => {});
  rootElement.sketch.build('example.sketch');
  return rootElement.node;
}
