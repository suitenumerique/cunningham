## ADDED Requirements

### Requirement: Field variant prop

All form field components (Input, TextArea, Select, DatePicker, DateRangePicker) SHALL accept a `variant` prop with values `"floating"` or `"classic"`.

#### Scenario: Default variant is floating
- **WHEN** a field component is rendered without a `variant` prop
- **THEN** the component SHALL behave as `variant="floating"` (current behavior)

#### Scenario: Explicit floating variant
- **WHEN** a field component is rendered with `variant="floating"`
- **THEN** the component SHALL behave identically to without the prop

#### Scenario: Classic variant
- **WHEN** a field component is rendered with `variant="classic"`
- **THEN** the label SHALL be positioned above the field (static, no animation)
- **AND** the placeholder SHALL be displayed inside the field (native behavior)

### Requirement: Floating variant label behavior

In floating variant, the label SHALL serve as a placeholder when the field is empty and move above the value when focused or filled.

#### Scenario: Empty field with floating variant
- **WHEN** a field with `variant="floating"` is empty and not focused
- **THEN** the label SHALL be displayed inside the field as a placeholder (large font)

#### Scenario: Focused field with floating variant
- **WHEN** a field with `variant="floating"` receives focus
- **THEN** the label SHALL animate to a smaller size above the input area

#### Scenario: Filled field with floating variant
- **WHEN** a field with `variant="floating"` has a value
- **THEN** the label SHALL remain in the small position above the value

#### Scenario: Placeholder prop ignored in floating variant
- **WHEN** a field with `variant="floating"` receives a `placeholder` prop
- **THEN** the placeholder prop SHALL be ignored silently
- **AND** the label SHALL continue to serve as placeholder

### Requirement: Classic variant label behavior

In classic variant, the label SHALL always be positioned above the field (outside the bordered wrapper), with no animation.

#### Scenario: Empty field with classic variant
- **WHEN** a field with `variant="classic"` is empty
- **THEN** the label SHALL be displayed above the bordered field area (outside the border)
- **AND** the placeholder (if provided) SHALL be displayed inside the field

#### Scenario: Focused field with classic variant
- **WHEN** a field with `variant="classic"` receives focus
- **THEN** the label SHALL remain in the same position above the field
- **AND** the placeholder (if visible) SHALL remain visible until user types

#### Scenario: Classic variant without placeholder
- **WHEN** a field with `variant="classic"` has no `placeholder` prop
- **THEN** the label SHALL be displayed above the field
- **AND** the field input area SHALL be empty (no placeholder text)

### Requirement: Classic variant compact height

Fields in classic variant SHALL have a reduced height compared to floating variant.

#### Scenario: Classic variant field height
- **WHEN** a field is rendered with `variant="classic"`
- **THEN** the field wrapper height SHALL be 2.75rem (44px)
- **AND** the content SHALL be vertically centered within the wrapper

#### Scenario: Floating variant field height (unchanged)
- **WHEN** a field is rendered with `variant="floating"` or without variant prop
- **THEN** the field wrapper height SHALL remain 3.5rem (56px) as before

### Requirement: Select placeholder in classic variant

Select components in classic variant SHALL display a styled placeholder when no option is selected.

#### Scenario: Select with classic variant and no selection
- **WHEN** a Select with `variant="classic"` has no selected option
- **AND** a `placeholder` prop is provided
- **THEN** the placeholder text SHALL be displayed inside the select field
- **AND** the placeholder SHALL have a muted/gray appearance (same as native placeholder)

#### Scenario: Select with classic variant after selection
- **WHEN** a Select with `variant="classic"` has a selected option
- **THEN** the selected option label SHALL be displayed
- **AND** the placeholder SHALL not be visible

#### Scenario: Select classic without placeholder prop
- **WHEN** a Select with `variant="classic"` has no `placeholder` prop
- **AND** no option is selected
- **THEN** the select field SHALL appear empty (no placeholder text)

### Requirement: Backward compatibility

The addition of the `variant` prop SHALL NOT change the behavior of existing components without the prop.

#### Scenario: Existing code without variant prop
- **WHEN** existing code uses Input, TextArea, Select, or DatePicker without `variant` prop
- **THEN** the component SHALL render exactly as before (floating label behavior)
- **AND** no visual or functional changes SHALL occur
