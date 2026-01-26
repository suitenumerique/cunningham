# Proposal: Field Variant Classic

## Contexte

Actuellement, tous les champs de formulaire (Input, Select, TextArea, DatePicker) utilisent un pattern "floating label" : le label sert de placeholder quand le champ est vide, puis remonte au-dessus de la valeur quand l'utilisateur interagit avec le champ.

```
État vide:              État rempli:
┌─────────────────┐     ┌─────────────────┐
│ Your name       │     │ Your name       │ ← label (petit)
│                 │     │ Coucou          │ ← valeur
└─────────────────┘     └─────────────────┘
```

## Besoin

Ajouter une variante "classic" où :
- Le label est toujours positionné au-dessus du champ
- Le placeholder est un vrai placeholder HTML natif (séparé du label)

```
Your name              ← label externe (toujours visible)
┌─────────────────┐
│ Enter your name │    ← placeholder classique
└─────────────────┘
```

## Décisions

### Approche d'implémentation : A + D

- **API publique (A)** : Chaque composant expose une prop `variant`
- **Implémentation (D)** : La logique est centralisée dans `LabelledBox`

```tsx
<Input variant="classic" label="Name" placeholder="Enter your name" />
<Select variant="floating" label="Country" />
```

### Nommage des variantes

| Variante | Description |
|----------|-------------|
| `"floating"` | Label qui sert de placeholder et remonte au focus (comportement actuel) |
| `"classic"` | Label au-dessus, placeholder natif dans le champ |

### Variante par défaut

`"floating"` reste la variante par défaut pour assurer la rétrocompatibilité.

```tsx
// Équivalent :
<Input label="Name" />
<Input label="Name" variant="floating" />
```

### Comportement du placeholder

| Variante | Comportement |
|----------|--------------|
| `floating` | La prop `placeholder` est ignorée silencieusement (le label fait office de placeholder) |
| `classic` | La prop `placeholder` est utilisée comme placeholder HTML natif (optionnel) |

### Select en mode classic

Quand aucune option n'est sélectionnée, un placeholder stylisé est affiché (même apparence grisée qu'un placeholder natif). Ce placeholder est optionnel.

```
Country
┌─────────────────────────────┐
│ Select...                 ▼ │
└─────────────────────────────┘
```

## Composants concernés

- `Input`
- `TextArea`
- `Select` (mono et multi)
- `DatePicker`
- `DateRangePicker`

Note : Checkbox, Radio et Switch ont déjà un label externe, ils ne sont pas concernés.

## Non-objectifs

- Changer la variante par défaut (breaking change)
- Créer des composants séparés (ClassicInput, etc.)
- Ajouter un context/provider global pour la variante

## Impact technique

### LabelledBox

Le composant `LabelledBox` sera enrichi :

```tsx
interface Props {
  label?: string;
  variant?: "floating" | "classic";  // NOUVEAU
  labelAsPlaceholder?: boolean;      // Utilisé seulement si floating
  placeholder?: string;              // NOUVEAU - pour classic
  // ... autres props existantes
}
```

### CSS

Nouveau mode CSS dans `LabelledBox/_index.scss` pour la variante classic :
- Label toujours positionné au-dessus (pas de transition)
- Pas de padding-top pour l'espace du label flottant

### Chaque composant

Chaque composant devra :
1. Accepter la prop `variant`
2. La passer à `LabelledBox`
3. Gérer le placeholder selon la variante
