export const desktopTargets = ['portable', 'installer'] as const;

export function dataDirectory(portable: boolean): string {
  return portable ? './data' : '%APPDATA%/GitAtlas/data';
}
