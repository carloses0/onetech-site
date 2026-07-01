/**
 * Junta classes condicionais sem dependências externas.
 * Aceita strings, undefined, null e false (ignorados).
 */
export function cn(...classes: Array<string | false | null | undefined>): string {
  return classes.filter(Boolean).join(" ");
}
