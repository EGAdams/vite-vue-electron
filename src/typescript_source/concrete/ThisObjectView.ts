/*
 * ThisObjectView
 */
import IObjectView from "../abstract/IObjectView";
import IPropertyValuePair from "../abstract/IPropertyValuePair";

class ThisObjectView implements IObjectView {
  value = "";
  properties: IPropertyValuePair[] = [];
  subObjects: IObjectView[] = [];
  screen_html = "";
  leaf = false;
  expanded = false;
  construction_name = "";
}

export default ThisObjectView;
