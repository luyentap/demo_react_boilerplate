/**
 *
 * Asynchronously loads the component for Game
 *
 */

import loadable from 'loadable-components';

export default loadable(() => import('./index'));
