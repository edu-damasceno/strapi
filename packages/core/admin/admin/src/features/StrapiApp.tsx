import { createContext } from '../components/Context';
import { RBAC } from '../core/apis/rbac';

import type { StrapiApp } from '../StrapiApp';

/* -------------------------------------------------------------------------------------------------
 * StrapiApp
 * -----------------------------------------------------------------------------------------------*/
interface StrapiAppContextValue
  extends Pick<
    StrapiApp,
    | 'customFields'
    | 'menu'
    | 'getPlugin'
    | 'getAdminInjectedComponents'
    | 'plugins'
    | 'runHookParallel'
    | 'runHookSeries'
    | 'settings'
  > {
  components: StrapiApp['library']['components'];
  fields: StrapiApp['library']['fields'];
  rbac: RBAC;
  runHookWaterfall: <TData>(
    name: Parameters<StrapiApp['runHookWaterfall']>[0],
    initialValue: TData
  ) => TData;
}

const [StrapiAppProvider, useStrapiApp] = createContext<StrapiAppContextValue>('StrapiApp');

export { StrapiAppProvider, useStrapiApp };
export type { StrapiAppContextValue };