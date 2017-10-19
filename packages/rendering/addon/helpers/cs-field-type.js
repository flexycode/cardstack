import Ember from 'ember';
import metaForField from '../-private/meta-for-field';
import stripNamespace from '../-private/strip-namespace';

export function fieldType(content, fieldName) {
  let meta = metaForField(content, fieldName);
  if (!meta) {
    return;
  }

  // meta.options.fieldType is our convention for annotating models.
  let type = meta.options && meta.options.fieldType;
  // meta.type is the name of the transform that ember-data
  // is using, which we keep as a fallback.
  if (!type && meta.type) {
    // lift the default ember-data transform names into our core types
    type = `@cardstack/core-types::${meta.type}`;
  }

  if (type) {
    type = stripNamespace(type);
  }
  return type;
}

export default Ember.Helper.helper(fieldType);
