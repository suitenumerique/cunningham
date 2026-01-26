## 1. Foundation

- [x] 1.1 Create `FieldVariant` type in `packages/react/src/components/Forms/types.ts`
- [x] 1.2 Add design tokens for classic variant in `LabelledBox/tokens.ts`

## 2. LabelledBox Core

- [x] 2.1 Add `variant` prop to `LabelledBox` component interface
- [x] 2.2 Update `LabelledBox` render logic to handle `variant="classic"` (ignore `labelAsPlaceholder`)
- [x] 2.3 Add `.labelled-box--classic` CSS styles in `LabelledBox/_index.scss`
- [x] 2.4 Add unit tests for `LabelledBox` with both variants

## 3. Input Component

- [x] 3.1 Add `variant` prop to `Input` component
- [x] 3.2 Pass `variant` to `LabelledBox`
- [x] 3.3 Handle `placeholder` prop based on variant (pass to native input only if classic)
- [x] 3.4 Add unit tests for Input with classic variant
- [x] 3.5 Add Storybook story for Input classic variant

## 4. TextArea Component

- [x] 4.1 Add `variant` prop to `TextArea` component
- [x] 4.2 Pass `variant` to `LabelledBox`
- [x] 4.3 Handle `placeholder` prop based on variant
- [x] 4.4 Add unit tests for TextArea with classic variant
- [x] 4.5 Add Storybook story for TextArea classic variant

## 5. Select Component

- [x] 5.1 Add `variant` and `placeholder` props to `Select` component interface
- [x] 5.2 Pass `variant` to `LabelledBox` in `SelectMonoAux` and multi equivalents
- [x] 5.3 Add styled placeholder rendering for classic variant when no selection
- [x] 5.4 Add CSS for `.c__select__placeholder` (muted gray style)
- [x] 5.5 Add unit tests for Select mono with classic variant
- [x] 5.6 Add unit tests for Select multi with classic variant
- [x] 5.7 Add Storybook stories for Select classic variant

## 6. DatePicker Components

- [x] 6.1 Add `variant` and `placeholder` props to `DatePicker` component
- [x] 6.2 Pass `variant` to underlying field components
- [x] 6.3 Handle placeholder in classic variant
- [x] 6.4 Add unit tests for DatePicker with classic variant
- [x] 6.5 Repeat for `DateRangePicker`
- [x] 6.6 Add Storybook stories for DatePicker/DateRangePicker classic variant

## 7. Documentation & Finalization

- [x] 7.1 Update existing component documentation with variant prop
- [x] 7.2 Run full test suite to ensure no regressions
- [x] 7.3 Visual review of all components in both variants in Storybook
