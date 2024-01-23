import type { Plugin } from '@strapi/types';
import { controllers } from './controllers';
import { services } from './services';

/**
 * Check once if the feature is enabled (both license info & feature flag) before loading it,
 * so that we can assume it is enabled in the other files.
 */
const getFeature = (): Partial<Plugin.LoadedPlugin> => {
  // TODO: add license check here when it's ready on the license registry
  if (strapi.features.future.isEnabled('history')) {
    const register: Plugin.LoadedPlugin['register'] = async () => {
      // TODO: remove log once there are actual features
      console.log('registering history feature');
    };
    const bootstrap: Plugin.LoadedPlugin['bootstrap'] = async () => {};
    const destroy: Plugin.LoadedPlugin['destroy'] = async () => {};

    return {
      register,
      bootstrap,
      controllers,
      services,
      destroy,
    };
  }

  return {};
};

export default getFeature();
