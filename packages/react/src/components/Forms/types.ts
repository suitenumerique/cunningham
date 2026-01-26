/**
 * Field variant determines how the label and placeholder are displayed.
 * - Floating: Label serves as placeholder when empty, animates above value when focused/filled (default)
 * - Classic: Label is always above the field, placeholder is native HTML placeholder
 */
export enum FieldVariant {
  Floating = "floating",
  Classic = "classic",
}
