import { useMediaQuery } from 'react-responsive';

export const useDesktopMediaQuery = () =>
  useMediaQuery({ query: '(min-width: 1440px)' });

export const useTabletMediaQuery = () =>
  useMediaQuery({ query: '(min-width: 768px) and (max-width: 1440px)' });

export const useMobileMediaQuery = () =>
  useMediaQuery({ query: '(max-width: 768px)' });

export const useRetinaMediaQuery = () =>
  useMediaQuery({ query: '(min-resolution: 2dppx)' });
