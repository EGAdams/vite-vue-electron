/*
 *  interface ObjectView
 */
import IPropertyValuePair from "./IPropertyValuePair";

interface IObjectView {
  value: string;
  properties: Array<IPropertyValuePair>;
  subObjects: Array<IObjectView>;
  screen_html: string;
  leaf: boolean;
  expanded: boolean;
  construction_name: string;
}

export default IObjectView;
