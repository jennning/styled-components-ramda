import { path, pipe } from 'ramda';
import { px } from './helpers';

export const theme = (keys = []) => props => path(['theme', ...keys], props);

export const size = (keys = []) => theme(['size', ...keys]);

export const width = key => size(['width', key]);

export const height = key => size(['height', key]);

export const color = key => theme(['color', key]);

export const breakpoint = key => pipe(theme(['breakpoint', key]), px);

export const space = (multiplier = 1) =>
  pipe(theme(['space']), x => x * multiplier, px);

export const font = (keys = []) => theme(['font', ...keys]);

export const fontSize = key => pipe(font(['size', key]), px);

export const fontWeight = key => font(['weight', key]);

export const fontFamily = key => font(['family', key]);
