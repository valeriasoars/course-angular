import { ApplicationConfig, provideBrowserGlobalErrorListeners } from '@angular/core';
import { provideRouter } from '@angular/router';

import { routes } from './app.routes';
// import { TasksService } from './tasks/tasks.service';

// export const appConfig: ApplicationConfig = {
//   providers: [
//     provideBrowserGlobalErrorListeners(),
//     provideRouter(routes),

//     // Prefira @Injectable('root') no serviço (melhor performance/tree-shaking). 
//     // Use o appConfig apenas quando precisar sobrescrever a injeção padrão usando useClass, useValue ou useFactory.
//     TasksService
//   ]
// };


export const appConfig: ApplicationConfig = {
  providers: [
    provideBrowserGlobalErrorListeners(),
    provideRouter(routes),

  ]
};