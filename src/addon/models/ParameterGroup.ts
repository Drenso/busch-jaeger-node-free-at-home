/* generated using openapi-typescript-codegen -- do no edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

import type { Parameter } from './Parameter';
import type { TranslatedName } from './TranslatedName';

export type ParameterGroup = (TranslatedName & {
    name: string;
    multiple?: boolean;
    items: Record<string, Parameter>;
});

