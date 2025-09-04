// src/libs/utils/params.ts
export const convertParamsToString = (params: Record<string, unknown>): Record<string, string> => {
  return Object.fromEntries(
    Object.entries(params).map(([key, value]) => [
      key,
      value !== null && value !== undefined ? String(value) : '',
    ])
  );
};
