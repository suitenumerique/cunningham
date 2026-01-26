## Context

Le design system Cunningham utilise actuellement un pattern "floating label" pour tous les champs de formulaire. Ce pattern est implémenté via le composant `LabelledBox` qui est utilisé par Input, TextArea, Select et DatePicker.

Architecture actuelle :
```
Field (wrapper: state, text, fullWidth)
  └── LabelledBox (gère le label flottant)
        └── Composant natif (input, textarea, etc.)
```

Le `LabelledBox` gère :
- Le positionnement du label (absolu, avec transition)
- L'état `labelAsPlaceholder` (label en grand = placeholder, label petit = au-dessus)
- Le CSS des transitions

## Goals / Non-Goals

**Goals:**
- Ajouter une variante `classic` avec label externe et placeholder natif
- Maintenir la rétrocompatibilité (floating = défaut)
- Supporter la variante classic sur tous les composants concernés
- Avoir un champ plus compact en mode classic

**Non-Goals:**
- Changer le comportement par défaut des composants existants
- Créer des composants séparés (ClassicInput, etc.)
- Modifier Checkbox, Radio, Switch (déjà label externe)

## Decisions

### 1. Type `FieldVariant` partagé

Créer un type exporté dans `packages/react/src/components/Forms/types.ts` :

```typescript
export type FieldVariant = "floating" | "classic";
```

**Pourquoi** : Assure la cohérence du typage entre tous les composants.

### 2. Architecture en mode Classic

En mode classic, **le label est rendu EN DEHORS du wrapper bordé**, pas à l'intérieur :

```
Field (wrapper)
  └── label.c__input__label (EN DEHORS - nouveau)
  └── div.c__input__wrapper (wrapper bordé)
        └── Composant natif (input)
```

Vs mode floating (existant) :
```
Field (wrapper)
  └── div.c__input__wrapper (wrapper bordé)
        └── LabelledBox (gère le label flottant)
              └── Composant natif (input)
```

**Pourquoi** : Le label doit être visuellement au-dessus de la bordure du champ, pas à l'intérieur.

### 3. CSS pour la variante classic

Chaque composant a sa propre classe label et un modifier `--classic` sur le wrapper :

```scss
// Label externe
.c__input__label {
  display: block;
  font-size: var(--c--components--forms-labelledbox--classic-label-font-size);
  color: var(--c--components--forms-labelledbox--label-color--small);
  margin-bottom: var(--c--components--forms-labelledbox--classic-label-margin-bottom);
}

// Wrapper en mode classic
.c__input__wrapper--classic {
  align-items: center;  // Centrage vertical du contenu
  height: 2.75rem;      // Hauteur réduite (vs 3.5rem en floating)
}
```

Classes par composant :
- Input : `.c__input__label`, `.c__input__wrapper--classic`
- TextArea : `.c__textarea__label`, `.c__textarea__wrapper--classic`
- Select : `.c__select__label`, `.c__select--classic`
- DatePicker : `.c__date-picker__label`, `.c__date-picker--classic`

### 4. Gestion du placeholder par composant

Chaque composant gère son placeholder selon la variante :

**Input / TextArea** :
```typescript
// Si variant="classic", passer placeholder au <input>/<textarea>
// Si variant="floating", ne pas passer placeholder (ignoré)
<input placeholder={variant === "classic" ? placeholder : undefined} />
```

**Select** :
```typescript
// Si variant="classic" et pas de sélection, afficher placeholder stylisé
{variant === "classic" && !selectedItem && placeholder && (
  <span className="c__select__placeholder">{placeholder}</span>
)}
```

### 5. Props ajoutées sur chaque composant

```typescript
// Input, TextArea, Select, DatePicker, DateRangePicker
type Props = {
  variant?: FieldVariant;      // NOUVEAU - défaut: "floating"
  placeholder?: string;        // Existe peut-être déjà, à vérifier
  // ... props existantes
};
```

### 6. Design tokens

Tokens existants réutilisés dans `LabelledBox/tokens.ts` :

```typescript
"classic-label-margin-bottom": defaults.globals.spacings.xs,
"classic-label-font-size": defaults.globals.font.sizes.s,
```

Pour Select, token supplémentaire pour le placeholder :
```typescript
"placeholder-color": defaults.contextuals.content.semantic.neutral.tertiary,
```

### 7. DateRangePicker spécifique

DateRangePicker a deux labels (startLabel, endLabel) affichés côte à côte au-dessus du wrapper :

```
.c__date-picker__range__labels
  └── label (startLabel)
  └── spacer
  └── label (endLabel)
.c__date-picker__wrapper
  └── DateFieldBox (start)
  └── separator
  └── DateFieldBox (end)
```

## Risks / Trade-offs

**[Label externe vs LabelledBox]** → Duplication de la structure label. Mitigation : tokens CSS partagés pour la cohérence visuelle.

**[Hauteur réduite en classic]** → Les champs classic sont plus compacts (2.75rem vs 3.5rem). C'est intentionnel pour un look plus traditionnel.

**[Select placeholder vs Input placeholder]** → Le Select n'a pas de placeholder natif, on simule avec un span. Mitigation : même couleur via tokens.

## Migration Plan

Pas de migration nécessaire. Le changement est additif :
- Nouveau comportement opt-in via `variant="classic"`
- Comportement existant inchangé (floating par défaut)
- Aucun breaking change

## Open Questions

Résolues :
- ✅ Stories Storybook ajoutées pour chaque composant en mode classic
- ✅ Tokens dans LabelledBox/tokens.ts (réutilisés par tous les composants)
