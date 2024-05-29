// Make sure to import the helper functions from the `ssr` entry point.
import { entryPointUriPathToPermissionKeys } from '@commercetools-frontend/application-shell/ssr';

export const entryPointUriPath = 'custom-seo';

export const PERMISSIONS = entryPointUriPathToPermissionKeys(entryPointUriPath);

export const apiBaseUrl= "https://ct-seo.onrender.com"

export const titlePattern = /(SEO Title:|Title:)\s*(.+)/;
export const descriptionPattern = /(SEO Description:|Description:)\s*(.+)/;

