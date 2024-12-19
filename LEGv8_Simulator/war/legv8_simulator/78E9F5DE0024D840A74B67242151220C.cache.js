var $wnd = $wnd || window.parent;
var __gwtModuleFunction = $wnd.legv8_simulator;
var $sendStats = __gwtModuleFunction.__sendStats;
$sendStats('moduleStartup', 'moduleEvalStart');
var $gwt_version = "2.7.0";
var $strongName = '78E9F5DE0024D840A74B67242151220C';
var $gwt = {};
var $doc = $wnd.document;
var $moduleName, $moduleBase;
function __gwtStartLoadingFragment(frag) {
var fragFile = 'deferredjs/' + $strongName + '/' + frag + '.cache.js';
return __gwtModuleFunction.__startLoadingFragment(fragFile);
}
function __gwtInstallCode(code) {return __gwtModuleFunction.__installRunAsyncCode(code);}
function __gwt_isKnownPropertyValue(propName, propValue) {
return __gwtModuleFunction.__gwt_isKnownPropertyValue(propName, propValue);
}
function __gwt_getMetaProperty(name) {
return __gwtModuleFunction.__gwt_getMetaProperty(name);
}
var $stats = $wnd.__gwtStatsEvent ? function(a) {
return $wnd.__gwtStatsEvent && $wnd.__gwtStatsEvent(a);
} : null;
var $sessionId = $wnd.__gwtStatsSessionId ? $wnd.__gwtStatsSessionId : null;
var $intern_0 = {25:1, 21:1, 24:1, 23:1, 26:1, 20:1, 19:1}, $intern_1 = {25:1, 21:1, 24:1, 57:1, 35:1, 122:1, 92:1, 123:1, 23:1, 41:1, 49:1, 18:1, 53:1, 54:1, 67:1, 68:1, 26:1, 40:1, 20:1, 19:1, 22:1}, $intern_2 = {3:1}, $intern_3 = 4194303, $intern_4 = {81:1, 55:1}, $intern_5 = {3:1, 6:1, 4:1}, $intern_6 = {3:1, 6:1, 52:1, 7:1, 4:1, 32:1}, $intern_7 = {3:1, 4:1}, $intern_8 = 1048575, $intern_9 = {3:1, 6:1, 7:1, 4:1}, $intern_10 = {3:1, 13:1}, $intern_11 = {5:1, 3:1, 9:1, 8:1}, $intern_12 = {106:1, 43:1, 3:1, 9:1, 8:1}, $intern_13 = {64:1, 3:1, 13:1}, $intern_14 = 524288, $intern_15 = 32768, $intern_16 = {25:1, 21:1, 24:1, 35:1, 23:1, 41:1, 49:1, 53:1, 54:1, 67:1, 68:1, 26:1, 40:1, 20:1, 19:1, 22:1}, $intern_17 = {25:1, 21:1, 24:1, 92:1, 23:1, 26:1, 20:1, 19:1}, $intern_18 = {25:1, 21:1, 24:1, 35:1, 23:1, 41:1, 49:1, 53:1, 54:1, 67:1, 68:1, 26:1, 40:1, 87:1, 20:1, 19:1, 22:1}, $intern_19 = {3:1, 6:1, 7:1, 262:1, 4:1}, $intern_20 = {22:1, 91:1}, $intern_21 = {38:1}, $intern_22 = {3:1, 22:1, 50:1};
var _, initFnList_0, prototypesByTypeId_0 = {}, permutationId = -1;
function typeMarkerFn(){
}

function portableObjCreate(obj){
  function F(){
  }

  ;
  F.prototype = obj || {};
  return new F;
}

function modernizeBrowser(){
  !Array.isArray && (Array.isArray = function(vArg){
    return Object.prototype.toString.call(vArg) === '[object Array]';
  }
  );
}

function maybeGetClassLiteralFromPlaceHolder_0(entry){
  return entry instanceof Array?entry[0]:null;
}

function emptyMethod(){
}

function defineClass(typeId, superTypeId, castableTypeMap){
  var prototypesByTypeId = prototypesByTypeId_0;
  var createSubclassPrototype = createSubclassPrototype_0;
  var maybeGetClassLiteralFromPlaceHolder = maybeGetClassLiteralFromPlaceHolder_0;
  var prototype_0 = prototypesByTypeId[typeId];
  var clazz = maybeGetClassLiteralFromPlaceHolder(prototype_0);
  if (prototype_0 && !clazz) {
    _ = prototype_0;
  }
   else {
    _ = prototypesByTypeId[typeId] = !superTypeId?{}:createSubclassPrototype(superTypeId);
    _.castableTypeMap$ = castableTypeMap;
    _.constructor = _;
    !superTypeId && (_.typeMarker$ = typeMarkerFn);
  }
  for (var i = 3; i < arguments.length; ++i) {
    arguments[i].prototype = _;
  }
  clazz && (_.___clazz$ = clazz);
}

function createSubclassPrototype_0(superTypeId){
  var prototypesByTypeId = prototypesByTypeId_0;
  return portableObjCreate(prototypesByTypeId[superTypeId]);
}

function setGwtProperty(propertyName, propertyValue){
  typeof window === 'object' && typeof window['$gwt'] === 'object' && (window['$gwt'][propertyName] = propertyValue);
}

function registerEntry(){
  return entry_0;
}

function gwtOnLoad_0(errFn, modName, modBase, softPermutationId){
  ensureModuleInit();
  var initFnList = initFnList_0;
  $moduleName = modName;
  $moduleBase = modBase;
  permutationId = softPermutationId;
  function initializeModules(){
    for (var i = 0; i < initFnList.length; i++) {
      initFnList[i]();
    }
  }

  if (errFn) {
    try {
      $entry(initializeModules)();
    }
     catch (e) {
      errFn(modName, e);
    }
  }
   else {
    $entry(initializeModules)();
  }
}

function ensureModuleInit(){
  initFnList_0 == null && (initFnList_0 = []);
}

function addInitFunctions(){
  ensureModuleInit();
  var initFnList = initFnList_0;
  for (var i = 0; i < arguments.length; i++) {
    initFnList.push(arguments[i]);
  }
}

function Object_0(){
}

function equals_Ljava_lang_Object__Z__devirtual$(this$static, other){
  return isJavaString(this$static)?$equals(this$static, other):hasJavaObjectVirtualDispatch(this$static)?this$static.equals$(other):isJavaArray(this$static)?this$static === other:this$static === other;
}

function getClass__Ljava_lang_Class___devirtual$(this$static){
  return isJavaString(this$static)?Ljava_lang_String_2_classLit:hasJavaObjectVirtualDispatch(this$static)?this$static.___clazz$:isJavaArray(this$static)?this$static.___clazz$:Lcom_google_gwt_core_client_JavaScriptObject_2_classLit;
}

function hashCode__I__devirtual$(this$static){
  return isJavaString(this$static)?getHashCode_0(this$static):hasJavaObjectVirtualDispatch(this$static)?this$static.hashCode$():isJavaArray(this$static)?getHashCode(this$static):getHashCode(this$static);
}

defineClass(1, null, {}, Object_0);
_.equals$ = function equals(other){
  return this === other;
}
;
_.getClass$ = function getClass_0(){
  return this.___clazz$;
}
;
_.hashCode$ = function hashCode_0(){
  return getHashCode(this);
}
;
_.toString$ = function toString_0(){
  return $getName(getClass__Ljava_lang_Class___devirtual$(this)) + '@' + toUnsignedRadixString(hashCode__I__devirtual$(this), 16);
}
;
_.toString = function(){
  return this.toString$();
}
;
stringCastMap = {3:1, 261:1, 9:1, 2:1};
modernizeBrowser();
function canCast(src_0, dstId){
  return isJavaString(src_0) && !!stringCastMap[dstId] || src_0.castableTypeMap$ && !!src_0.castableTypeMap$[dstId];
}

function dynamicCast(src_0, dstId){
  if (src_0 != null && !canCast(src_0, dstId)) {
    throw new ClassCastException;
  }
  return src_0;
}

function dynamicCastJso(src_0){
  if (src_0 != null && !(!isJavaString(src_0) && !hasTypeMarker(src_0))) {
    throw new ClassCastException;
  }
  return src_0;
}

function dynamicCastToString(src_0){
  if (src_0 != null && !isJavaString(src_0)) {
    throw new ClassCastException;
  }
  return src_0;
}

function hasJavaObjectVirtualDispatch(src_0){
  return !instanceofArray(src_0) && hasTypeMarker(src_0);
}

function instanceOf(src_0, dstId){
  return src_0 != null && canCast(src_0, dstId);
}

function instanceOfJso(src_0){
  return src_0 != null && !isJavaString(src_0) && !hasTypeMarker(src_0);
}

function instanceofArray(src_0){
  return Array.isArray(src_0);
}

function isJavaArray(src_0){
  return instanceofArray(src_0) && hasTypeMarker(src_0);
}

function isJavaString(src_0){
  return typeof src_0 === 'string';
}

function maskUndefined(src_0){
  return src_0 == null?null:src_0;
}

function round_int(x_0){
  return ~~Math.max(Math.min(x_0, 2147483647), -2147483648);
}

function throwClassCastExceptionUnlessNull(o){
  if (o != null) {
    throw new ClassCastException;
  }
  return null;
}

var stringCastMap;
function $ensureNamesAreInitialized(this$static){
  if (this$static.typeName != null) {
    return;
  }
  initializeNames(this$static);
}

function $getName(this$static){
  $ensureNamesAreInitialized(this$static);
  return this$static.typeName;
}

function Class(){
  ++nextSequentialId;
  this.typeName = null;
  this.simpleName = null;
  this.packageName = null;
  this.compoundName = null;
  this.canonicalName = null;
  this.typeId = null;
  this.arrayLiterals = null;
}

function createClassObject(packageName, compoundClassName){
  var clazz;
  clazz = new Class;
  clazz.packageName = packageName;
  clazz.compoundName = compoundClassName;
  return clazz;
}

function createForClass(packageName, compoundClassName, typeId){
  var clazz;
  clazz = createClassObject(packageName, compoundClassName);
  maybeSetClassLiteral(typeId, clazz);
  return clazz;
}

function createForEnum(packageName, compoundClassName, typeId, enumConstantsFunc){
  var clazz;
  clazz = createClassObject(packageName, compoundClassName);
  maybeSetClassLiteral(typeId, clazz);
  clazz.modifiers = enumConstantsFunc?8:0;
  return clazz;
}

function createForInterface(packageName, compoundClassName){
  var clazz;
  clazz = createClassObject(packageName, compoundClassName);
  clazz.modifiers = 2;
  return clazz;
}

function createForPrimitive(className, primitiveTypeId){
  var clazz;
  clazz = createClassObject('', className);
  clazz.typeId = primitiveTypeId;
  clazz.modifiers = 1;
  return clazz;
}

function getClassLiteralForArray_0(leafClass, dimensions){
  var arrayLiterals = leafClass.arrayLiterals = leafClass.arrayLiterals || [];
  return arrayLiterals[dimensions] || (arrayLiterals[dimensions] = leafClass.createClassLiteralForArray(dimensions));
}

function getPrototypeForClass(clazz){
  if (clazz.isPrimitive()) {
    return null;
  }
  var typeId = clazz.typeId;
  var prototype_0 = prototypesByTypeId_0[typeId];
  return prototype_0;
}

function initializeNames(clazz){
  if (clazz.isArray_0()) {
    var componentType = clazz.componentType;
    componentType.isPrimitive()?(clazz.typeName = '[' + componentType.typeId):!componentType.isArray_0()?(clazz.typeName = '[L' + componentType.getName() + ';'):(clazz.typeName = '[' + componentType.getName());
    clazz.canonicalName = componentType.getCanonicalName() + '[]';
    clazz.simpleName = componentType.getSimpleName() + '[]';
    return;
  }
  var packageName = clazz.packageName;
  var compoundName = clazz.compoundName;
  compoundName = compoundName.split('/');
  clazz.typeName = join_1('.', [packageName, join_1('$', compoundName)]);
  clazz.canonicalName = join_1('.', [packageName, join_1('.', compoundName)]);
  clazz.simpleName = compoundName[compoundName.length - 1];
}

function join_1(separator, strings){
  var i = 0;
  while (!strings[i] || strings[i] == '') {
    i++;
  }
  var result = strings[i++];
  for (; i < strings.length; i++) {
    if (!strings[i] || strings[i] == '') {
      continue;
    }
    result += separator + strings[i];
  }
  return result;
}

function maybeSetClassLiteral(typeId, clazz){
  var proto;
  if (!typeId) {
    return;
  }
  clazz.typeId = typeId;
  var prototype_0 = getPrototypeForClass(clazz);
  if (!prototype_0) {
    prototypesByTypeId_0[typeId] = [clazz];
    return;
  }
  prototype_0.___clazz$ = clazz;
}

defineClass(110, 1, {}, Class);
_.createClassLiteralForArray = function createClassLiteralForArray(dimensions){
  var clazz;
  clazz = new Class;
  clazz.modifiers = 4;
  dimensions > 1?(clazz.componentType = getClassLiteralForArray_0(this, dimensions - 1)):(clazz.componentType = this);
  return clazz;
}
;
_.getCanonicalName = function getCanonicalName(){
  $ensureNamesAreInitialized(this);
  return this.canonicalName;
}
;
_.getName = function getName_0(){
  return $getName(this);
}
;
_.getSimpleName = function getSimpleName(){
  $ensureNamesAreInitialized(this);
  return this.simpleName;
}
;
_.isArray_0 = function isArray(){
  return (this.modifiers & 4) != 0;
}
;
_.isPrimitive = function isPrimitive(){
  return (this.modifiers & 1) != 0;
}
;
_.toString$ = function toString_17(){
  return ((this.modifiers & 2) != 0?'interface ':(this.modifiers & 1) != 0?'':'class ') + ($ensureNamesAreInitialized(this) , this.typeName);
}
;
_.modifiers = 0;
var nextSequentialId = 1;
var Ljava_lang_Object_2_classLit = createForClass('java.lang', 'Object', 1), Lcom_google_gwt_core_client_JavaScriptObject_2_classLit = createForClass('com.google.gwt.core.client', 'JavaScriptObject$', 0), Ljava_lang_Class_2_classLit = createForClass('java.lang', 'Class', 110);
function $addStyleName(this$static, style){
  setStyleName(this$static.element, style, true);
}

function $removeStyleName(this$static, style){
  setStyleName(this$static.element, style, false);
}

function $replaceNode(node, newNode){
  var p = node.parentNode;
  if (!p) {
    return;
  }
  p.insertBefore(newNode, node);
  p.removeChild(node);
}

function $resolvePotentialElement(){
  throw new UnsupportedOperationException;
}

function $setElement(this$static, elem){
  this$static.element = elem;
}

function $setHeight(this$static, height){
  $setPropertyImpl(this$static.element.style, 'height', height);
}

function $setSize(this$static){
  $setPropertyImpl(this$static.element.style, 'width', '100%');
  $setPropertyImpl(this$static.element.style, 'height', '100%');
}

function $setStyleName(this$static, style){
  $setClassName(this$static.element, style);
}

function $setStyleName_0(this$static, style, add_0){
  setStyleName(this$static.element, style, add_0);
}

function $setWidth(this$static, width_0){
  $setPropertyImpl(this$static.element.style, 'width', width_0);
}

function setStyleName(elem, style, add_0){
  if (!elem) {
    throw new RuntimeException_0('Null widget handle. If you are creating a composite, ensure that initWidget() has been called.');
  }
  style = $trim(style);
  if (style.length == 0) {
    throw new IllegalArgumentException('Style names cannot be empty');
  }
  add_0?$addClassName(elem, style):$removeClassName(elem, style);
}

defineClass(20, 1, {23:1, 20:1});
_.resolvePotentialElement = function resolvePotentialElement(){
  return $resolvePotentialElement();
}
;
_.toString$ = function toString_1(){
  if (!this.element) {
    return '(null handle)';
  }
  return this.element.outerHTML;
}
;
var Lcom_google_gwt_user_client_ui_UIObject_2_classLit = createForClass('com.google.gwt.user.client.ui', 'UIObject', 20);
function $addDomHandler(this$static, handler, type_0){
  var typeInt;
  typeInt = $eventGetTypeInt(type_0.name_0);
  typeInt == -1?this$static.element:this$static.eventsToSink == -1?$sinkEvents_0(this$static.element, typeInt | $getEventsSunk(this$static.element)):(this$static.eventsToSink |= typeInt);
  return $addHandler(!this$static.handlerManager?(this$static.handlerManager = new HandlerManager(this$static)):this$static.handlerManager, type_0, handler);
}

function $fireEvent(this$static, event_0){
  !!this$static.handlerManager && $fireEvent_0(this$static.handlerManager, event_0);
}

function $onAttach(this$static){
  var bitsToAdd;
  if (this$static.isAttached()) {
    throw new IllegalStateException("Should only call onAttach when the widget is detached from the browser's document");
  }
  this$static.attached = true;
  setEventListener(this$static.element, this$static);
  bitsToAdd = this$static.eventsToSink;
  this$static.eventsToSink = -1;
  bitsToAdd > 0 && (this$static.eventsToSink == -1?$sinkEvents_0(this$static.element, bitsToAdd | $getEventsSunk(this$static.element)):(this$static.eventsToSink |= bitsToAdd));
  this$static.doAttachChildren();
  this$static.onLoad();
}

function $onBrowserEvent(this$static, event_0){
  var related;
  switch ($eventGetTypeInt(event_0.type)) {
    case 16:
    case 32:
      related = event_0.relatedTarget || (event_0.type == 'mouseout'?event_0.toElement:event_0.fromElement);
      if (!!related && isOrHasChildImpl(this$static.element, related)) {
        return;
      }

  }
  fireNativeEvent(event_0, this$static, this$static.element);
}

function $onDetach(this$static){
  if (!this$static.isAttached()) {
    throw new IllegalStateException("Should only call onDetach when the widget is attached to the browser's document");
  }
  try {
    this$static.doDetachChildren();
  }
   finally {
    setEventListener(this$static.element, null);
    this$static.attached = false;
  }
}

function $removeFromParent(this$static){
  if (!this$static.parent_0) {
    $clinit_RootPanel();
    $contains_0(widgetsToDetach, this$static) && detachNow(this$static);
  }
   else if (instanceOf(this$static.parent_0, 41)) {
    dynamicCast(this$static.parent_0, 41).remove(this$static);
  }
   else if (this$static.parent_0) {
    throw new IllegalStateException("This widget's parent does not implement HasWidgets");
  }
}

function $replaceElement(this$static, elem){
  this$static.attached && setEventListener(this$static.element, null);
  !!this$static.element && $replaceNode(this$static.element, elem);
  this$static.element = elem;
  this$static.attached && setEventListener(this$static.element, this$static);
}

function $setParent(this$static, parent_0){
  var oldParent;
  oldParent = this$static.parent_0;
  if (!parent_0) {
    try {
      !!oldParent && oldParent.isAttached() && this$static.onDetach();
    }
     finally {
      this$static.parent_0 = null;
    }
  }
   else {
    if (oldParent) {
      throw new IllegalStateException('Cannot set a new parent without first clearing the old parent');
    }
    this$static.parent_0 = parent_0;
    parent_0.isAttached() && this$static.onAttach();
  }
}

function $sinkEvents(this$static, eventBitsToAdd){
  this$static.eventsToSink == -1?$sinkEvents_0(this$static.element, eventBitsToAdd | $getEventsSunk(this$static.element)):(this$static.eventsToSink |= eventBitsToAdd);
}

defineClass(19, 20, $intern_0);
_.doAttachChildren = function doAttachChildren(){
}
;
_.doDetachChildren = function doDetachChildren(){
}
;
_.isAttached = function isAttached(){
  return this.attached;
}
;
_.onAttach = function onAttach(){
  $onAttach(this);
}
;
_.onBrowserEvent = function onBrowserEvent(event_0){
  $onBrowserEvent(this, event_0);
}
;
_.onDetach = function onDetach(){
  $onDetach(this);
}
;
_.onLoad = function onLoad(){
}
;
_.attached = false;
_.eventsToSink = 0;
var Lcom_google_gwt_user_client_ui_Widget_2_classLit = createForClass('com.google.gwt.user.client.ui', 'Widget', 19);
defineClass(40, 19, {25:1, 21:1, 24:1, 23:1, 41:1, 49:1, 26:1, 40:1, 20:1, 19:1, 22:1});
_.doAttachChildren = function doAttachChildren_0(){
  tryCommand(this, ($clinit_AttachDetachException() , attachCommand));
}
;
_.doDetachChildren = function doDetachChildren_0(){
  tryCommand(this, ($clinit_AttachDetachException() , detachCommand));
}
;
var Lcom_google_gwt_user_client_ui_Panel_2_classLit = createForClass('com.google.gwt.user.client.ui', 'Panel', 40);
function $add(this$static, child, container){
  $removeFromParent(child);
  $add_3(this$static.children, child);
  $appendChild(container, resolve(child.element));
  $setParent(child, this$static);
}

function $remove(this$static, w){
  var elem;
  if (w.parent_0 != this$static) {
    return false;
  }
  try {
    $setParent(w, null);
  }
   finally {
    elem = w.element;
    $removeChild($getParentElement(elem), elem);
    $remove_2(this$static.children, w);
  }
  return true;
}

function ComplexPanel(){
  this.children = new WidgetCollection;
}

defineClass(35, 40, {25:1, 21:1, 24:1, 35:1, 23:1, 41:1, 49:1, 53:1, 54:1, 26:1, 40:1, 20:1, 19:1, 22:1});
_.iterator = function iterator_0(){
  return new WidgetCollection$WidgetIterator(this.children);
}
;
_.remove = function remove(w){
  return $remove(this, w);
}
;
var Lcom_google_gwt_user_client_ui_ComplexPanel_2_classLit = createForClass('com.google.gwt.user.client.ui', 'ComplexPanel', 35);
function $setCellVerticalAlignment(td, align_0){
  $setPropertyImpl(td.style, 'verticalAlign', align_0.verticalAlignString);
}

function $setCellVerticalAlignment_0(td, align_0){
  $setPropertyImpl(td.style, 'verticalAlign', align_0.verticalAlignString);
}

function CellPanel(){
  ComplexPanel.call(this);
  this.table = $createElement($doc, 'table');
  this.body_0 = $createElement($doc, 'tbody');
  $appendChild(this.table, resolve(this.body_0));
  $setElement(this, this.table);
}

defineClass(57, 35, {25:1, 21:1, 24:1, 57:1, 35:1, 23:1, 41:1, 49:1, 53:1, 54:1, 26:1, 40:1, 20:1, 19:1, 22:1});
var Lcom_google_gwt_user_client_ui_CellPanel_2_classLit = createForClass('com.google.gwt.user.client.ui', 'CellPanel', 57);
function $add_0(this$static, w){
  var td, td_0;
  td = (td_0 = $createElement($doc, 'td') , $setPropertyString(td_0, 'align', this$static.horzAlign.textAlignString) , $setCellVerticalAlignment_0(td_0, this$static.vertAlign) , td_0);
  $appendChild(this$static.tableRow, resolve(td));
  $add(this$static, w, td);
}

function $setHorizontalAlignment(this$static, align_0){
  this$static.horzAlign = align_0;
}

function $setVerticalAlignment(this$static, align_0){
  this$static.vertAlign = align_0;
}

function HorizontalPanel(){
  CellPanel.call(this);
  this.horzAlign = ($clinit_HasHorizontalAlignment() , ALIGN_DEFAULT);
  this.vertAlign = ($clinit_HasVerticalAlignment() , ALIGN_TOP);
  this.tableRow = $createElement($doc, 'tr');
  $appendChild(this.body_0, resolve(this.tableRow));
  $setPropertyString(this.table, 'cellSpacing', '0');
  $setPropertyString(this.table, 'cellPadding', '0');
}

defineClass(18, 57, $intern_1, HorizontalPanel);
_.remove = function remove_0(w){
  var removed, td;
  td = $getParentElement(w.element);
  removed = $remove(this, w);
  removed && $removeChild(this.tableRow, td);
  return removed;
}
;
var Lcom_google_gwt_user_client_ui_HorizontalPanel_2_classLit = createForClass('com.google.gwt.user.client.ui', 'HorizontalPanel', 18);
function $reset(this$static){
  this$static.zFlag = false;
  $setText(this$static.zValue, '0');
  $removeStyleName(this$static.zPanel, 'active');
  $addStyleName(this$static.zPanel, 'inactive');
  this$static.nFlag = false;
  $setText(this$static.nValue, '0');
  $removeStyleName(this$static.nPanel, 'active');
  $addStyleName(this$static.nPanel, 'inactive');
  this$static.cFlag = false;
  $setText(this$static.cValue, '0');
  $removeStyleName(this$static.cPanel, 'active');
  $addStyleName(this$static.cPanel, 'inactive');
  this$static.vFlag = false;
  $setText(this$static.vValue, '0');
  $removeStyleName(this$static.vPanel, 'active');
  $addStyleName(this$static.vPanel, 'inactive');
}

function $update(this$static, z_0, n, c, v){
  $updateZPanel(this$static, z_0);
  $updateNPanel(this$static, n);
  $updateCPanel(this$static, c);
  $updateVPanel(this$static, v);
}

function $updateCPanel(this$static, c){
  if (this$static.cFlag == c) {
    $removeStyleName(this$static.cPanel, 'active');
    $addStyleName(this$static.cPanel, 'inactive');
  }
   else {
    this$static.cFlag = c;
    $setText(this$static.cValue, this$static.cFlag?'1':'0');
    $removeStyleName(this$static.cPanel, 'inactive');
    $addStyleName(this$static.cPanel, 'active');
  }
}

function $updateNPanel(this$static, n){
  if (this$static.nFlag == n) {
    $removeStyleName(this$static.nPanel, 'active');
    $addStyleName(this$static.nPanel, 'inactive');
  }
   else {
    this$static.nFlag = n;
    $setText(this$static.nValue, this$static.nFlag?'1':'0');
    $removeStyleName(this$static.nPanel, 'inactive');
    $addStyleName(this$static.nPanel, 'active');
  }
}

function $updateVPanel(this$static, v){
  if (this$static.vFlag == v) {
    $removeStyleName(this$static.vPanel, 'active');
    $addStyleName(this$static.vPanel, 'inactive');
  }
   else {
    this$static.vFlag = v;
    $setText(this$static.vValue, this$static.vFlag?'1':'0');
    $removeStyleName(this$static.vPanel, 'inactive');
    $addStyleName(this$static.vPanel, 'active');
  }
}

function $updateZPanel(this$static, z_0){
  if (this$static.zFlag == z_0) {
    $removeStyleName(this$static.zPanel, 'active');
    $addStyleName(this$static.zPanel, 'inactive');
  }
   else {
    this$static.zFlag = z_0;
    $setText(this$static.zValue, this$static.zFlag?'1':'0');
    $removeStyleName(this$static.zPanel, 'inactive');
    $addStyleName(this$static.zPanel, 'active');
  }
}

function CPSRPanel(){
  var zValuePanel, nValuePanel, cValuePanel, vValuePanel;
  HorizontalPanel.call(this);
  $setPropertyImpl(this.element.style, 'width', '250px');
  $setHorizontalAlignment(this, ($clinit_HasHorizontalAlignment() , ALIGN_CENTER));
  $setVerticalAlignment(this, ($clinit_HasVerticalAlignment() , ALIGN_MIDDLE));
  this.zPanel = new HorizontalPanel;
  $setHorizontalAlignment(this.zPanel, ALIGN_CENTER);
  $add_0(this.zPanel, new Label('Z'));
  $addStyleName(this.zPanel, 'inactive');
  $setWidth(this.zPanel, '30px');
  this.zValue = new Label('0');
  zValuePanel = new HorizontalPanel;
  $setHorizontalAlignment(zValuePanel, ALIGN_CENTER);
  $add_0(zValuePanel, this.zValue);
  $setPropertyImpl(zValuePanel.element.style, 'width', '30px');
  $add_0(this, this.zPanel);
  $add_0(this, zValuePanel);
  this.nPanel = new HorizontalPanel;
  $setHorizontalAlignment(this.nPanel, ALIGN_CENTER);
  $add_0(this.nPanel, new Label('N'));
  $addStyleName(this.nPanel, 'inactive');
  $setWidth(this.nPanel, '30px');
  this.nValue = new Label('0');
  nValuePanel = new HorizontalPanel;
  $setHorizontalAlignment(nValuePanel, ALIGN_CENTER);
  $add_0(nValuePanel, this.nValue);
  $setPropertyImpl(nValuePanel.element.style, 'width', '30px');
  $add_0(this, this.nPanel);
  $add_0(this, nValuePanel);
  this.cPanel = new HorizontalPanel;
  $setHorizontalAlignment(this.cPanel, ALIGN_CENTER);
  $add_0(this.cPanel, new Label('C'));
  $addStyleName(this.cPanel, 'inactive');
  $setWidth(this.cPanel, '30px');
  this.cValue = new Label('0');
  cValuePanel = new HorizontalPanel;
  $setHorizontalAlignment(cValuePanel, ALIGN_CENTER);
  $add_0(cValuePanel, this.cValue);
  $setPropertyImpl(cValuePanel.element.style, 'width', '30px');
  $add_0(this, this.cPanel);
  $add_0(this, cValuePanel);
  this.vPanel = new HorizontalPanel;
  $setHorizontalAlignment(this.vPanel, ALIGN_CENTER);
  $add_0(this.vPanel, new Label('V'));
  $addStyleName(this.vPanel, 'inactive');
  $setWidth(this.vPanel, '30px');
  this.vValue = new Label('0');
  vValuePanel = new HorizontalPanel;
  $setHorizontalAlignment(vValuePanel, ALIGN_CENTER);
  $add_0(vValuePanel, this.vValue);
  $setPropertyImpl(vValuePanel.element.style, 'width', '30px');
  $add_0(this, this.vPanel);
  $add_0(this, vValuePanel);
}

defineClass(133, 18, $intern_1, CPSRPanel);
_.cFlag = false;
_.nFlag = false;
_.vFlag = false;
_.zFlag = false;
var Lcom_arm_legv8simulator_client_CPSRPanel_2_classLit = createForClass('com.arm.legv8simulator.client', 'CPSRPanel', 133);
function $clinit_DatapathGraphics(){
  $clinit_DatapathGraphics = emptyMethod;
}

function drawALU(highlight){
  $clinit_DatapathGraphics();
  highlight?null.nullMethod():null.nullMethod();
  null.nullMethod();
  null.nullMethod();
  null.nullMethod();
  null.nullMethod();
  null.nullMethod();
  null.nullMethod();
  null.nullMethod();
  null.nullMethod();
  null.nullMethod();
  null.nullMethod();
  null.nullMethod();
  null.nullMethod();
  null.nullMethod();
  null.nullMethod();
}

function drawAndGateHorizontal(){
  $clinit_DatapathGraphics();
  null.nullMethod();
  null.nullMethod();
  null.nullMethod();
  null.nullMethod();
  null.nullMethod();
  null.nullMethod();
  null.nullMethod();
  null.nullMethod();
  null.nullMethod();
  null.nullMethod();
  null.nullMethod();
  null.nullMethod();
}

function drawAndGateVertical(){
  $clinit_DatapathGraphics();
  null.nullMethod();
  null.nullMethod();
  null.nullMethod();
  null.nullMethod();
  null.nullMethod();
  null.nullMethod();
  null.nullMethod();
  null.nullMethod();
  null.nullMethod();
  null.nullMethod();
  null.nullMethod();
  null.nullMethod();
  null.nullMethod();
}

function drawCompRect(){
  $clinit_DatapathGraphics();
  null.nullMethod();
  null.nullMethod();
  null.nullMethod();
  null.nullMethod();
  null.nullMethod();
}

function drawCompRect_0(highlightLeft, highlightRight){
  $clinit_DatapathGraphics();
  null.nullMethod();
  null.nullMethod();
  highlightLeft?null.nullMethod():null.nullMethod();
  null.nullMethod();
  highlightRight?null.nullMethod():null.nullMethod();
  null.nullMethod();
  null.nullMethod();
}

function drawDiagSlash(){
  $clinit_DatapathGraphics();
  null.nullMethod();
  null.nullMethod();
  null.nullMethod();
  null.nullMethod();
  null.nullMethod();
  null.nullMethod();
  null.nullMethod();
}

function drawEllipse(){
  $clinit_DatapathGraphics();
  null.nullMethod();
  null.nullMethod();
  null.nullMethod();
  null.nullMethod();
  null.nullMethod();
  null.nullMethod();
  null.nullMethod();
  null.nullMethod();
  null.nullMethod();
  null.nullMethod();
  null.nullMethod();
  null.nullMethod();
}

function drawHorizontalSegment(joinLeft, joinRight){
  $clinit_DatapathGraphics();
  null.nullMethod();
  null.nullMethod();
  if (joinLeft) {
    null.nullMethod();
    null.nullMethod();
    null.nullMethod();
    null.nullMethod();
  }
  if (joinRight) {
    null.nullMethod();
    null.nullMethod();
    null.nullMethod();
    null.nullMethod();
  }
  null.nullMethod();
}

function drawLeftArrow(){
  $clinit_DatapathGraphics();
  null.nullMethod();
  null.nullMethod();
  null.nullMethod();
  null.nullMethod();
  null.nullMethod();
  null.nullMethod();
  null.nullMethod();
  null.nullMethod();
  null.nullMethod();
  null.nullMethod();
}

function drawMux(highlightTop, highlightBottom){
  $clinit_DatapathGraphics();
  null.nullMethod();
  null.nullMethod();
  null.nullMethod();
  null.nullMethod();
  null.nullMethod();
  null.nullMethod();
  null.nullMethod();
  highlightTop?null.nullMethod():null.nullMethod();
  null.nullMethod();
  null.nullMethod();
  null.nullMethod();
  null.nullMethod();
  null.nullMethod();
  null.nullMethod();
  null.nullMethod();
  null.nullMethod();
  highlightBottom?null.nullMethod():null.nullMethod();
  null.nullMethod();
  null.nullMethod();
  null.nullMethod();
}

function drawOrGateHorizontal(x_0, height){
  $clinit_DatapathGraphics();
  null.nullMethod();
  null.nullMethod();
  null.nullMethod();
  null.nullMethod();
  null.nullMethod();
  null.nullMethod();
  null.nullMethod();
  null.nullMethod();
  null.nullMethod();
  null.nullMethod(x_0 - sqrt_0(3) * height / 2);
  null.nullMethod();
  null.nullMethod();
  null.nullMethod();
}

function drawOrGateVertical(y_0, width_0, height){
  $clinit_DatapathGraphics();
  null.nullMethod();
  null.nullMethod();
  null.nullMethod();
  null.nullMethod();
  null.nullMethod();
  null.nullMethod();
  null.nullMethod();
  null.nullMethod();
  null.nullMethod(y_0 + height + sqrt_0(3) * width_0 / 2);
  null.nullMethod();
  null.nullMethod();
  null.nullMethod();
  null.nullMethod();
}

function drawRightArrow(join_0){
  $clinit_DatapathGraphics();
  null.nullMethod();
  null.nullMethod();
  if (join_0) {
    null.nullMethod();
    null.nullMethod();
    null.nullMethod();
    null.nullMethod();
  }
  null.nullMethod();
  null.nullMethod();
  null.nullMethod();
  null.nullMethod();
  null.nullMethod();
  null.nullMethod();
  null.nullMethod();
  null.nullMethod();
}

function drawUpArrow(){
  $clinit_DatapathGraphics();
  null.nullMethod();
  null.nullMethod();
  null.nullMethod();
  null.nullMethod();
  null.nullMethod();
  null.nullMethod();
  null.nullMethod();
  null.nullMethod();
  null.nullMethod();
  null.nullMethod();
}

function drawVerticalSegment(joinBot, joinTop){
  $clinit_DatapathGraphics();
  null.nullMethod();
  null.nullMethod();
  if (joinBot) {
    null.nullMethod();
    null.nullMethod();
    null.nullMethod();
    null.nullMethod();
  }
  if (joinTop) {
    null.nullMethod();
    null.nullMethod();
    null.nullMethod();
    null.nullMethod();
  }
  null.nullMethod();
}

function Error_0(errorMsg, lineNumber){
  this.errorMsg = errorMsg;
  this.lineNumber = lineNumber;
}

defineClass(45, 1, {45:1}, Error_0);
_.lineNumber = 0;
var Lcom_arm_legv8simulator_client_Error_2_classLit = createForClass('com.arm.legv8simulator.client', 'Error', 45);
function $clinit_PipelineVis(){
  $clinit_PipelineVis = emptyMethod;
  MUX_PC_DIMENSIONS = initValues(getClassLiteralForArray(D_classLit, 1), $intern_2, 0, 7, [20, 60]);
  MUX_PC_COORDS = initValues(getClassLiteralForArray(D_classLit, 1), $intern_2, 0, 7, [25, 360]);
  PC_DIMENSIONS = initValues(getClassLiteralForArray(D_classLit, 1), $intern_2, 0, 7, [25, 40]);
  PC_COORDS = initValues(getClassLiteralForArray(D_classLit, 1), $intern_2, 0, 7, [MUX_PC_COORDS[0] + MUX_PC_DIMENSIONS[0] + 15, MUX_PC_COORDS[1] + MUX_PC_DIMENSIONS[1] / 2 - PC_DIMENSIONS[1] / 2]);
  INS_MEM_DIMENSIONS = initValues(getClassLiteralForArray(D_classLit, 1), $intern_2, 0, 7, [80, 120]);
  INS_MEM_COORDS = initValues(getClassLiteralForArray(D_classLit, 1), $intern_2, 0, 7, [PC_COORDS[0] + PC_DIMENSIONS[0] + 25, PC_COORDS[1] + PC_DIMENSIONS[1] / 2 - INS_MEM_DIMENSIONS[1] / 10]);
  ALU_PC_DIMENSIONS = initValues(getClassLiteralForArray(D_classLit, 1), $intern_2, 0, 7, [40, 65]);
  ALU_PC_COORDS = initValues(getClassLiteralForArray(D_classLit, 1), $intern_2, 0, 7, [INS_MEM_COORDS[0] + INS_MEM_DIMENSIONS[0] / 2 - ALU_PC_DIMENSIONS[0] / 2, INS_MEM_COORDS[1] - 1.25 * INS_MEM_DIMENSIONS[1]]);
  IFID_REG_DIMENSIONS = initValues(getClassLiteralForArray(D_classLit, 1), $intern_2, 0, 7, [15, 400]);
  IFID_REG_COORDS = initValues(getClassLiteralForArray(D_classLit, 1), $intern_2, 0, 7, [INS_MEM_COORDS[0] + INS_MEM_DIMENSIONS[0] + 15, INS_MEM_COORDS[1] + INS_MEM_DIMENSIONS[1] / 2 - IFID_REG_DIMENSIONS[1] / 2]);
  REG_FILE_DIMENSIONS = initValues(getClassLiteralForArray(D_classLit, 1), $intern_2, 0, 7, [110, 140]);
  REG_FILE_COORDS = initValues(getClassLiteralForArray(D_classLit, 1), $intern_2, 0, 7, [330, 340]);
  FLAGS_DIMENSIONS = initValues(getClassLiteralForArray(D_classLit, 1), $intern_2, 0, 7, [88, 20]);
  FLAGS_COORDS = initValues(getClassLiteralForArray(D_classLit, 1), $intern_2, 0, 7, [REG_FILE_COORDS[0] + REG_FILE_DIMENSIONS[0] / 2 - FLAGS_DIMENSIONS[0] / 2, REG_FILE_COORDS[1] + REG_FILE_DIMENSIONS[1] + 10]);
  MUX_REG2LOC_DIMENSIONS = initValues(getClassLiteralForArray(D_classLit, 1), $intern_2, 0, 7, [20, 60]);
  MUX_REG2LOC_COORDS = initValues(getClassLiteralForArray(D_classLit, 1), $intern_2, 0, 7, [IFID_REG_COORDS[0] + IFID_REG_DIMENSIONS[0] + 32.5, REG_FILE_COORDS[1] + 4 * REG_FILE_DIMENSIONS[1] / 10 - MUX_REG2LOC_DIMENSIONS[1] / 2]);
  ALU_BRANCH_DIMENSIONS = initValues(getClassLiteralForArray(D_classLit, 1), $intern_2, 0, 7, [40, 65]);
  ALU_BRANCH_COORDS = initValues(getClassLiteralForArray(D_classLit, 1), $intern_2, 0, 7, [REG_FILE_COORDS[0], ALU_PC_COORDS[1] + ALU_PC_DIMENSIONS[1] / 2 - 13 * ALU_BRANCH_DIMENSIONS[1] / 16]);
  SIGN_EXTEND_DIMENSIONS = initValues(getClassLiteralForArray(D_classLit, 1), $intern_2, 0, 7, [52.5, 60]);
  SIGN_EXTEND_COORDS = initValues(getClassLiteralForArray(D_classLit, 1), $intern_2, 0, 7, [FLAGS_COORDS[0] - 3 * SIGN_EXTEND_DIMENSIONS[0] / 4, FLAGS_COORDS[1] + FLAGS_DIMENSIONS[1] + 15]);
  SHIFT_LEFT2_DIMENSIONS = initValues(getClassLiteralForArray(D_classLit, 1), $intern_2, 0, 7, [45, 50]);
  SHIFT_LEFT2_COORDS = initValues(getClassLiteralForArray(D_classLit, 1), $intern_2, 0, 7, [REG_FILE_COORDS[0] - SHIFT_LEFT2_DIMENSIONS[0], REG_FILE_COORDS[1] - SHIFT_LEFT2_DIMENSIONS[1]]);
  ZERO_TEST_DIMENSIONS = initValues(getClassLiteralForArray(D_classLit, 1), $intern_2, 0, 7, [20, 30]);
  ZERO_TEST_COORDS = initValues(getClassLiteralForArray(D_classLit, 1), $intern_2, 0, 7, [REG_FILE_COORDS[0] + REG_FILE_DIMENSIONS[0] + 5, REG_FILE_COORDS[1] + REG_FILE_DIMENSIONS[1] / 2 - ZERO_TEST_DIMENSIONS[1]]);
  BRANCH_OR_DIMENSIONS = initValues(getClassLiteralForArray(D_classLit, 1), $intern_2, 0, 7, [25, 30]);
  BRANCH_OR_COORDS = initValues(getClassLiteralForArray(D_classLit, 1), $intern_2, 0, 7, [425, 10]);
  ZERO_AND_COORDS = initValues(getClassLiteralForArray(D_classLit, 1), $intern_2, 0, 7, [412, BRANCH_OR_COORDS[1] + 100]);
  IDEX_REG_DIMENSIONS = initValues(getClassLiteralForArray(D_classLit, 1), $intern_2, 0, 7, [15, 400]);
  IDEX_REG_COORDS = initValues(getClassLiteralForArray(D_classLit, 1), $intern_2, 0, 7, [ZERO_TEST_COORDS[0] + ZERO_TEST_DIMENSIONS[0] + 15, IFID_REG_COORDS[1]]);
  IDEX_EX_DIMENSIONS = initValues(getClassLiteralForArray(D_classLit, 1), $intern_2, 0, 7, [15, 30]);
  IDEX_EX_COORDS = initValues(getClassLiteralForArray(D_classLit, 1), $intern_2, 0, 7, [IDEX_REG_COORDS[0], IDEX_REG_COORDS[1] - IDEX_EX_DIMENSIONS[1]]);
  IDEX_M_DIMENSIONS = initValues(getClassLiteralForArray(D_classLit, 1), $intern_2, 0, 7, [15, 30]);
  IDEX_M_COORDS = initValues(getClassLiteralForArray(D_classLit, 1), $intern_2, 0, 7, [IDEX_REG_COORDS[0], IDEX_EX_COORDS[1] - IDEX_M_DIMENSIONS[1]]);
  IDEX_WB_DIMENSIONS = initValues(getClassLiteralForArray(D_classLit, 1), $intern_2, 0, 7, [15, 30]);
  IDEX_WB_COORDS = initValues(getClassLiteralForArray(D_classLit, 1), $intern_2, 0, 7, [IDEX_REG_COORDS[0], IDEX_M_COORDS[1] - IDEX_WB_DIMENSIONS[1]]);
  CONTROL_DIMENSIONS = initValues(getClassLiteralForArray(D_classLit, 1), $intern_2, 0, 7, [60, 100]);
  CONTROL_COORDS = initValues(getClassLiteralForArray(D_classLit, 1), $intern_2, 0, 7, [MUX_REG2LOC_COORDS[0], 125]);
  HAZARD_DETECT_DIMENSIONS = initValues(getClassLiteralForArray(D_classLit, 1), $intern_2, 0, 7, [1.2 * CONTROL_DIMENSIONS[0], 40]);
  HAZARD_DETECT_COORDS = initValues(getClassLiteralForArray(D_classLit, 1), $intern_2, 0, 7, [CONTROL_COORDS[0] - 5, CONTROL_COORDS[1] - 50]);
  MUX_CONTROL_DIMENSIONS = initValues(getClassLiteralForArray(D_classLit, 1), $intern_2, 0, 7, [20, 60]);
  MUX_CONTROL_COORDS = initValues(getClassLiteralForArray(D_classLit, 1), $intern_2, 0, 7, [ZERO_AND_COORDS[0] - MUX_CONTROL_DIMENSIONS[0], IDEX_M_COORDS[1] - 10]);
  MUX_FORWARD_A_DIMENSIONS = initValues(getClassLiteralForArray(D_classLit, 1), $intern_2, 0, 7, [20, 60]);
  MUX_FORWARD_A_COORDS = initValues(getClassLiteralForArray(D_classLit, 1), $intern_2, 0, 7, [IDEX_REG_COORDS[0] + IDEX_REG_DIMENSIONS[0] + 50, REG_FILE_COORDS[1] + REG_FILE_DIMENSIONS[1] / 5 - MUX_FORWARD_A_DIMENSIONS[0] / 2]);
  ALU_MAIN_DIMENSIONS = initValues(getClassLiteralForArray(D_classLit, 1), $intern_2, 0, 7, [50, 135]);
  ALU_MAIN_COORDS = initValues(getClassLiteralForArray(D_classLit, 1), $intern_2, 0, 7, [650, MUX_FORWARD_A_COORDS[1] + MUX_FORWARD_A_DIMENSIONS[1] / 2 - 3 * ALU_MAIN_DIMENSIONS[1] / 16]);
  MUX_READ_REG_DIMENSIONS = initValues(getClassLiteralForArray(D_classLit, 1), $intern_2, 0, 7, [20, 60]);
  MUX_READ_REG_COORDS = initValues(getClassLiteralForArray(D_classLit, 1), $intern_2, 0, 7, [ALU_MAIN_COORDS[0] - 40, ALU_MAIN_COORDS[1] + 13 * ALU_MAIN_DIMENSIONS[1] / 16 - MUX_READ_REG_DIMENSIONS[1] / 2]);
  MUX_FORWARD_B_DIMENSIONS = initValues(getClassLiteralForArray(D_classLit, 1), $intern_2, 0, 7, [20, 60]);
  MUX_FORWARD_B_COORDS = initValues(getClassLiteralForArray(D_classLit, 1), $intern_2, 0, 7, [MUX_FORWARD_A_COORDS[0], MUX_READ_REG_COORDS[1] + MUX_READ_REG_DIMENSIONS[0] / 2 - MUX_FORWARD_B_DIMENSIONS[1] / 2]);
  ALU_CONTROL_DIMENSIONS = initValues(getClassLiteralForArray(D_classLit, 1), $intern_2, 0, 7, [55, 70]);
  ALU_CONTROL_COORDS = initValues(getClassLiteralForArray(D_classLit, 1), $intern_2, 0, 7, [MUX_READ_REG_COORDS[0], SIGN_EXTEND_COORDS[1] + SIGN_EXTEND_DIMENSIONS[1] / 2 - ALU_CONTROL_DIMENSIONS[1] / 2]);
  FORWARD_UNIT_DIMENSIONS = initValues(getClassLiteralForArray(D_classLit, 1), $intern_2, 0, 7, [1.2 * CONTROL_DIMENSIONS[0], 35]);
  FORWARD_UNIT_COORDS = initValues(getClassLiteralForArray(D_classLit, 1), $intern_2, 0, 7, [ALU_CONTROL_COORDS[0] - 20, ALU_CONTROL_COORDS[1] + 1.7 * ALU_CONTROL_DIMENSIONS[1]]);
  EXMEM_REG_DIMENSIONS = initValues(getClassLiteralForArray(D_classLit, 1), $intern_2, 0, 7, [15, 400]);
  EXMEM_REG_COORDS = initValues(getClassLiteralForArray(D_classLit, 1), $intern_2, 0, 7, [ALU_MAIN_COORDS[0] + ALU_MAIN_DIMENSIONS[0] + 20, IFID_REG_COORDS[1]]);
  EXMEM_M_DIMENSIONS = initValues(getClassLiteralForArray(D_classLit, 1), $intern_2, 0, 7, [15, 30]);
  EXMEM_M_COORDS = initValues(getClassLiteralForArray(D_classLit, 1), $intern_2, 0, 7, [EXMEM_REG_COORDS[0], EXMEM_REG_COORDS[1] - EXMEM_M_DIMENSIONS[1]]);
  EXMEM_WB_DIMENSIONS = initValues(getClassLiteralForArray(D_classLit, 1), $intern_2, 0, 7, [15, 30]);
  EXMEM_WB_COORDS = initValues(getClassLiteralForArray(D_classLit, 1), $intern_2, 0, 7, [EXMEM_REG_COORDS[0], EXMEM_M_COORDS[1] - EXMEM_WB_DIMENSIONS[1]]);
  DATA_MEM_DIMENSIONS = initValues(getClassLiteralForArray(D_classLit, 1), $intern_2, 0, 7, [90, 130]);
  DATA_MEM_COORDS = initValues(getClassLiteralForArray(D_classLit, 1), $intern_2, 0, 7, [EXMEM_REG_COORDS[0] + EXMEM_REG_DIMENSIONS[0] + 40, 400]);
  MEMWB_REG_DIMENSIONS = initValues(getClassLiteralForArray(D_classLit, 1), $intern_2, 0, 7, [15, 400]);
  MEMWB_REG_COORDS = initValues(getClassLiteralForArray(D_classLit, 1), $intern_2, 0, 7, [DATA_MEM_COORDS[0] + DATA_MEM_DIMENSIONS[0] + 25, IFID_REG_COORDS[1]]);
  MEMWB_WB_DIMENSIONS = initValues(getClassLiteralForArray(D_classLit, 1), $intern_2, 0, 7, [15, 30]);
  MEMWB_WB_COORDS = initValues(getClassLiteralForArray(D_classLit, 1), $intern_2, 0, 7, [MEMWB_REG_COORDS[0], MEMWB_REG_COORDS[1] - MEMWB_WB_DIMENSIONS[1]]);
  MUX_READ_DATA_MEM_DIMENSIONS = initValues(getClassLiteralForArray(D_classLit, 1), $intern_2, 0, 7, [20, 60]);
  MUX_READ_DATA_MEM_COORDS = initValues(getClassLiteralForArray(D_classLit, 1), $intern_2, 0, 7, [MEMWB_REG_COORDS[0] + MEMWB_REG_DIMENSIONS[0] + 25, MEMWB_REG_COORDS[1] + MEMWB_REG_DIMENSIONS[1] / 2 - MUX_READ_DATA_MEM_DIMENSIONS[1] / 2]);
}

function $draw4_ALUPC(){
  drawRightArrow(false);
}

function $drawALUBranch_MuxPC(){
  $clinit_DatapathGraphics();
  drawHorizontalSegment(false, false);
  drawVerticalSegment(false, false);
  drawHorizontalSegment(false, false);
  drawVerticalSegment(false, false);
  drawRightArrow(false);
}

function $drawALUControl_ALUMain(){
  $clinit_DatapathGraphics();
  drawHorizontalSegment(false, false);
  drawVerticalSegment(false, false);
}

function $drawALUControl_IDEXEX(){
  $clinit_DatapathGraphics();
  drawVerticalSegment(false, false);
  drawHorizontalSegment(false, false);
  drawVerticalSegment(false, false);
  drawHorizontalSegment(false, false);
}

function $drawALUMain_EXMEM1(){
  drawRightArrow(false);
}

function $drawALUMain_EXMEM2(){
  $clinit_DatapathGraphics();
  drawVerticalSegment(false, false);
  drawRightArrow(false);
}

function $drawALUPC_IFIDReg(){
  drawRightArrow(false);
}

function $drawALUPC_MuxPC(){
  $clinit_DatapathGraphics();
  drawHorizontalSegment(false, false);
  drawVerticalSegment(true, false);
  drawHorizontalSegment(false, false);
  drawVerticalSegment(false, false);
  drawRightArrow(false);
}

function $drawBranchOR_MuxPC(){
  $clinit_DatapathGraphics();
  drawVerticalSegment(false, false);
  drawHorizontalSegment(false, false);
  drawVerticalSegment(false, false);
}

function $drawComponentsInit(){
  drawCompRect_0(false, false);
  drawCompRect_0(false, false);
  drawCompRect_0(false, false);
  drawALU(false);
  drawMux(false, false);
  drawCompRect_0(false, false);
  drawCompRect($clinit_DatapathGraphics());
  drawCompRect($clinit_DatapathGraphics());
  drawCompRect($clinit_DatapathGraphics());
  drawCompRect_0(false, false);
  drawMux(false, false);
  drawALU(false);
  drawEllipse();
  drawEllipse();
  drawEllipse();
  drawCompRect_0(false, false);
  drawCompRect_0(false, false);
  drawCompRect_0(false, false);
  drawCompRect_0(false, false);
  drawCompRect_0(false, false);
  drawCompRect($clinit_DatapathGraphics());
  drawCompRect($clinit_DatapathGraphics());
  drawALU(false);
  drawMux(false, false);
  drawMux(false, false);
  drawMux(false, false);
  drawCompRect_0(false, false);
  drawCompRect($clinit_DatapathGraphics());
  drawCompRect_0(false, false);
  drawMux(false, false);
  drawAndGateVertical($clinit_DatapathGraphics());
  drawAndGateVertical($clinit_DatapathGraphics());
  drawOrGateVertical(BRANCH_OR_COORDS[1], BRANCH_OR_DIMENSIONS[0], BRANCH_OR_DIMENSIONS[1], $clinit_DatapathGraphics());
  drawEllipse($clinit_DatapathGraphics());
  drawMux(false, false);
  drawCompRect($clinit_DatapathGraphics());
  drawCompRect($clinit_DatapathGraphics());
  drawEllipse($clinit_DatapathGraphics());
}

function $drawControlSignals(){
  $drawControl_IFID($clinit_DatapathGraphics());
  $drawBranchOR_MuxPC($clinit_DatapathGraphics());
  $drawHazardDetect_PC($clinit_DatapathGraphics());
  $drawHazardDetect_IFID($clinit_DatapathGraphics());
  $drawControl_MuxControl($clinit_DatapathGraphics());
  $drawHazardDetect_MuxControl($clinit_DatapathGraphics());
  $drawHazardDetect_IDEXM($clinit_DatapathGraphics());
  $drawRegFile_MEMWBWB($clinit_DatapathGraphics());
  $drawRegFile_MuxControl($clinit_DatapathGraphics());
  $drawMuxControl_IDEXM($clinit_DatapathGraphics());
  $drawMuxControl_IDEXEX($clinit_DatapathGraphics());
  $drawMuxControl_IDEXWB($clinit_DatapathGraphics());
  $drawZero_ZeroAND($clinit_DatapathGraphics());
  $drawZeroAND_MuxControl($clinit_DatapathGraphics());
  $drawZeroAND_BranchOR($clinit_DatapathGraphics());
  $drawMuxControl_BranchOR($clinit_DatapathGraphics());
  $drawFlagAND_MuxControl($clinit_DatapathGraphics());
  $drawFlags_FlagAND($clinit_DatapathGraphics());
  $drawFlagAND_BranchOR($clinit_DatapathGraphics());
  $drawIDEXWB_EXMEMWB($clinit_DatapathGraphics());
  $drawIDEXM_EXMEMM($clinit_DatapathGraphics());
  $drawIDEXEX_MuxReadRegData($clinit_DatapathGraphics());
  $drawForwardUnit_MuxForwardA($clinit_DatapathGraphics());
  $drawForwardUnit_MuxForwardB($clinit_DatapathGraphics());
  $drawALUControl_ALUMain($clinit_DatapathGraphics());
  $drawALUControl_IDEXEX($clinit_DatapathGraphics());
  $drawEXMEMWB_MEMWBWB($clinit_DatapathGraphics());
  $drawEXMEMWB_ForwardUnit($clinit_DatapathGraphics());
  $drawEXMEMM_DataMemBottom($clinit_DatapathGraphics());
  $drawEXMEMM_DataMemTop($clinit_DatapathGraphics());
  $drawMEMWBWB_MuxReadDataMem($clinit_DatapathGraphics());
  $drawMEMWBWB_ForwardUnit($clinit_DatapathGraphics());
}

function $drawControl_IFID(){
  $clinit_DatapathGraphics();
  drawHorizontalSegment(false, false);
  drawVerticalSegment(false, false);
  drawHorizontalSegment(false, false);
  drawVerticalSegment(false, false);
  drawHorizontalSegment(false, false);
}

function $drawControl_MuxControl(){
  drawRightArrow(false);
}

function $drawDataMem_MEMWB(){
  drawRightArrow(false);
}

function $drawDataWiresInit(){
  $drawMuxPC_PC($clinit_DatapathGraphics());
  $draw4_ALUPC($clinit_DatapathGraphics());
  $drawPC_InsMem($clinit_DatapathGraphics());
  $drawPC_ALUPC($clinit_DatapathGraphics());
  $drawALUPC_MuxPC($clinit_DatapathGraphics());
  $drawALUPC_IFIDReg($clinit_DatapathGraphics());
  $drawInsMem_IFID($clinit_DatapathGraphics());
  $drawIFID_ALUBranch($clinit_DatapathGraphics());
  $drawIFID_Control($clinit_DatapathGraphics());
  $drawIFID_RegFileRead($clinit_DatapathGraphics());
  $drawIFID_MuxReg2Loc2($clinit_DatapathGraphics());
  $drawIFID_MuxReg2Loc1($clinit_DatapathGraphics());
  $drawIFID_MuxReg2LocSel($clinit_DatapathGraphics());
  $drawIFID_SignExtend($clinit_DatapathGraphics());
  $drawIFID_HAZARDDETECT($clinit_DatapathGraphics());
  $drawIFID_IDEX1($clinit_DatapathGraphics());
  $drawIFID_IDEX2($clinit_DatapathGraphics());
  $drawShiftLeft2_ALUBranch($clinit_DatapathGraphics());
  $drawMuxReg2Loc_RegFileRead2($clinit_DatapathGraphics());
  $drawMuxReg2Loc_IDEX($clinit_DatapathGraphics());
  $drawSignExtend_IDEX($clinit_DatapathGraphics());
  $drawSignExtend_ShiftLeft2($clinit_DatapathGraphics());
  $drawALUBranch_MuxPC($clinit_DatapathGraphics());
  $drawRegFile_IDEX1($clinit_DatapathGraphics());
  $drawRegFile_ZeroTest($clinit_DatapathGraphics());
  $drawRegFile_IDEX2($clinit_DatapathGraphics());
  $drawIDEX_EXMEM($clinit_DatapathGraphics());
  $drawIDEX_HAZARDDETECT($clinit_DatapathGraphics());
  $drawEXMEM_MEMWB2($clinit_DatapathGraphics());
  $drawEXMEM_MEMWB3($clinit_DatapathGraphics());
  $drawEXMEM_FORWARDINGUNIT($clinit_DatapathGraphics());
  $drawMEMWB_FORWARDINGUNIT($clinit_DatapathGraphics());
  $drawIDEX_MuxForwardA($clinit_DatapathGraphics());
  $drawIDEX_MuxForwardB($clinit_DatapathGraphics());
  $drawIDEX_ALUControl($clinit_DatapathGraphics());
  $drawIDEX_MuxReadRegData($clinit_DatapathGraphics());
  $drawIDEX_ForwardingUnit1($clinit_DatapathGraphics());
  $drawIDEX_ForwardingUnit2($clinit_DatapathGraphics());
  $drawMuxForwardA_ALUMain($clinit_DatapathGraphics());
  $drawMuxForwardB_MuxReadRegData($clinit_DatapathGraphics());
  $drawMuxForwardB_EXMEM($clinit_DatapathGraphics());
  $drawMuxReadRegData_ALUMain($clinit_DatapathGraphics());
  $drawALUMain_EXMEM1($clinit_DatapathGraphics());
  $drawALUMain_EXMEM2($clinit_DatapathGraphics());
  $drawEXMEM_DataMem1($clinit_DatapathGraphics());
  $drawEXMEM_DataMem2($clinit_DatapathGraphics());
  $drawEXMEM_MEMWB1($clinit_DatapathGraphics());
  $drawEXMEM_MuxForwardA($clinit_DatapathGraphics());
  $drawEXMEM_MuxForwardB($clinit_DatapathGraphics());
  $drawDataMem_MEMWB($clinit_DatapathGraphics());
  $drawMEMWB_MuxReadDataMem1($clinit_DatapathGraphics());
  $drawMEMWB_MuxReadDataMem2($clinit_DatapathGraphics());
  $drawMuxReadDataMem_WriteData($clinit_DatapathGraphics());
  $drawMEMWB_Flags($clinit_DatapathGraphics());
  $drawMEMWB_WriteReg($clinit_DatapathGraphics());
  $drawMuxReadDataMem_MuxForwardA($clinit_DatapathGraphics());
  $drawMuxReadDataMem_MuxForwardB($clinit_DatapathGraphics());
}

function $drawEXMEMM_DataMemBottom(){
  $clinit_DatapathGraphics();
  drawVerticalSegment(false, false);
  drawHorizontalSegment(false, false);
  drawVerticalSegment(false, false);
  drawHorizontalSegment(false, false);
}

function $drawEXMEMM_DataMemTop(){
  $clinit_DatapathGraphics();
  drawHorizontalSegment(false, false);
  drawVerticalSegment(false, false);
}

function $drawEXMEMWB_ForwardUnit(){
  $clinit_DatapathGraphics();
  drawVerticalSegment(false, true);
  drawHorizontalSegment(false, false);
}

function $drawEXMEMWB_MEMWBWB(){
  $clinit_DatapathGraphics();
  drawHorizontalSegment(false, false);
  drawVerticalSegment(false, false);
  drawHorizontalSegment(false, false);
}

function $drawEXMEM_DataMem1(){
  drawRightArrow(false);
}

function $drawEXMEM_DataMem2(){
  drawRightArrow(false);
}

function $drawEXMEM_FORWARDINGUNIT(){
  $clinit_DatapathGraphics();
  drawVerticalSegment(false, true);
  drawLeftArrow();
}

function $drawEXMEM_MEMWB1(){
  $clinit_DatapathGraphics();
  drawVerticalSegment(false, true);
  drawRightArrow(false);
}

function $drawEXMEM_MEMWB2(){
  drawRightArrow(false);
}

function $drawEXMEM_MEMWB3(){
  drawRightArrow(false);
}

function $drawEXMEM_MuxForwardA(){
  $clinit_DatapathGraphics();
  drawVerticalSegment(false, true);
  drawHorizontalSegment(false, false);
  drawVerticalSegment(false, false);
  drawRightArrow(false);
}

function $drawEXMEM_MuxForwardB(){
  drawRightArrow(true);
}

function $drawEXMWB_TXT(coord, dim){
  null.nullMethod();
  null.nullMethod(coord[0] + dim[0] / 2 - null.nullMethod() / 2);
}

function $drawFlagAND_BranchOR(){
  $clinit_DatapathGraphics();
  drawVerticalSegment(false, false);
  drawHorizontalSegment(false, false);
  drawVerticalSegment(false, false);
}

function $drawFlagAND_MuxControl(){
  $clinit_DatapathGraphics();
  drawVerticalSegment(true, false);
}

function $drawFlags_FlagAND(){
  $clinit_DatapathGraphics();
  drawVerticalSegment(false, false);
  drawHorizontalSegment(false, false);
  drawVerticalSegment(false, false);
  drawHorizontalSegment(false, false);
}

function $drawForwardUnit_MuxForwardA(){
  $clinit_DatapathGraphics();
  drawHorizontalSegment(false, false);
  drawVerticalSegment(false, false);
  drawHorizontalSegment(false, false);
}

function $drawForwardUnit_MuxForwardB(){
  $clinit_DatapathGraphics();
  drawVerticalSegment(false, false);
  drawHorizontalSegment(false, false);
}

function $drawHazardDetect_IDEXM(){
  $clinit_DatapathGraphics();
  drawHorizontalSegment(false, false);
  drawVerticalSegment(true, false);
}

function $drawHazardDetect_IFID(){
  $clinit_DatapathGraphics();
  drawHorizontalSegment(false, false);
  drawVerticalSegment(false, false);
}

function $drawHazardDetect_MuxControl(){
  $clinit_DatapathGraphics();
  drawHorizontalSegment(false, false);
  drawVerticalSegment(false, false);
}

function $drawHazardDetect_PC(){
  $clinit_DatapathGraphics();
  drawHorizontalSegment(false, false);
  drawVerticalSegment(false, false);
}

function $drawIDEXEX_MuxReadRegData(){
  $clinit_DatapathGraphics();
  drawHorizontalSegment(false, false);
  drawVerticalSegment(false, false);
}

function $drawIDEXM_EXMEMM(){
  $clinit_DatapathGraphics();
  drawHorizontalSegment(false, false);
  drawVerticalSegment(false, false);
  drawHorizontalSegment(false, false);
}

function $drawIDEXWB_EXMEMWB(){
  $clinit_DatapathGraphics();
  drawHorizontalSegment(false, false);
  drawVerticalSegment(false, false);
  drawHorizontalSegment(false, false);
}

function $drawIDEX_ALUControl(){
  drawRightArrow(false);
}

function $drawIDEX_EXMEM(){
  drawRightArrow(false);
}

function $drawIDEX_ForwardingUnit1(){
  $clinit_DatapathGraphics();
  drawHorizontalSegment(false, false);
  drawVerticalSegment(false, false);
  drawRightArrow(false);
}

function $drawIDEX_ForwardingUnit2(){
  $clinit_DatapathGraphics();
  drawHorizontalSegment(false, false);
  drawVerticalSegment(false, false);
  drawRightArrow(false);
}

function $drawIDEX_HAZARDDETECT(){
  $clinit_DatapathGraphics();
  drawVerticalSegment(false, true);
  drawHorizontalSegment(false, false);
  drawVerticalSegment(false, false);
  drawHorizontalSegment(false, false);
  drawVerticalSegment(false, false);
  drawRightArrow(false);
}

function $drawIDEX_MuxForwardA(){
  drawRightArrow(false);
}

function $drawIDEX_MuxForwardB(){
  drawRightArrow(false);
}

function $drawIDEX_MuxReadRegData(){
  $clinit_DatapathGraphics();
  drawHorizontalSegment(false, true);
  drawVerticalSegment(false, false);
  drawRightArrow(false);
}

function $drawIFID_ALUBranch(){
  drawRightArrow(false);
}

function $drawIFID_Control(){
  $clinit_DatapathGraphics();
  drawHorizontalSegment(false, true);
  drawVerticalSegment(false, true);
  drawRightArrow(false);
}

function $drawIFID_HAZARDDETECT(){
  $clinit_DatapathGraphics();
  drawVerticalSegment(false, false);
  drawRightArrow(false);
}

function $drawIFID_IDEX1(){
  $clinit_DatapathGraphics();
  drawHorizontalSegment(false, true);
  drawVerticalSegment(false, true);
  drawHorizontalSegment(false, true);
  drawVerticalSegment(false, false);
  drawRightArrow(false);
}

function $drawIFID_IDEX2(){
  $clinit_DatapathGraphics();
  drawHorizontalSegment(false, true);
  drawVerticalSegment(false, false);
  drawRightArrow(false);
}

function $drawIFID_MuxReg2Loc1(){
  $clinit_DatapathGraphics();
  drawHorizontalSegment(false, true);
  drawVerticalSegment(false, true);
  drawRightArrow(false);
}

function $drawIFID_MuxReg2Loc2(){
  $clinit_DatapathGraphics();
  drawHorizontalSegment(false, true);
  drawVerticalSegment(false, true);
  drawRightArrow(false);
}

function $drawIFID_MuxReg2LocSel(){
  $clinit_DatapathGraphics();
  drawHorizontalSegment(true, false);
  drawVerticalSegment(false, false);
}

function $drawIFID_RegFileRead(){
  $clinit_DatapathGraphics();
  drawHorizontalSegment(false, true);
  drawVerticalSegment(false, true);
  drawRightArrow(false);
}

function $drawIFID_SignExtend(){
  $clinit_DatapathGraphics();
  drawHorizontalSegment(false, true);
  drawVerticalSegment(false, true);
  drawRightArrow(true);
}

function $drawInsMem_IFID(){
  drawRightArrow(false);
}

function $drawMEMWBWB_ForwardUnit(){
  $clinit_DatapathGraphics();
  drawVerticalSegment(false, true);
  drawHorizontalSegment(false, false);
}

function $drawMEMWBWB_MuxReadDataMem(){
  $clinit_DatapathGraphics();
  drawHorizontalSegment(false, false);
  drawVerticalSegment(false, false);
}

function $drawMEMWB_FORWARDINGUNIT(){
  $clinit_DatapathGraphics();
  drawHorizontalSegment(false, false);
  drawVerticalSegment(false, false);
  drawLeftArrow();
}

function $drawMEMWB_Flags(){
  $clinit_DatapathGraphics();
  drawHorizontalSegment(false, false);
  drawVerticalSegment(false, false);
  drawHorizontalSegment(false, false);
  drawUpArrow();
}

function $drawMEMWB_MuxReadDataMem1(){
  drawRightArrow(false);
}

function $drawMEMWB_MuxReadDataMem2(){
  $clinit_DatapathGraphics();
  drawHorizontalSegment(false, false);
  drawVerticalSegment(false, false);
  drawRightArrow(false);
}

function $drawMEMWB_WriteReg(){
  $clinit_DatapathGraphics();
  drawVerticalSegment(false, true);
  drawHorizontalSegment(false, false);
  drawVerticalSegment(false, false);
  drawRightArrow(false);
}

function $drawMuxControl_BranchOR(){
  $clinit_DatapathGraphics();
  drawVerticalSegment(true, false);
}

function $drawMuxControl_IDEXEX(){
  $clinit_DatapathGraphics();
  drawVerticalSegment(false, true);
  drawRightArrow(false);
}

function $drawMuxControl_IDEXM(){
  drawRightArrow(false);
}

function $drawMuxControl_IDEXWB(){
  $clinit_DatapathGraphics();
  drawVerticalSegment(true, false);
  drawRightArrow(false);
}

function $drawMuxForwardA_ALUMain(){
  drawRightArrow(false);
}

function $drawMuxForwardB_EXMEM(){
  $clinit_DatapathGraphics();
  drawVerticalSegment(false, true);
  drawRightArrow(false);
}

function $drawMuxForwardB_MuxReadRegData(){
  drawRightArrow(false);
}

function $drawMuxPC_PC(){
  drawRightArrow(false);
}

function $drawMuxReadDataMem_MuxForwardA(){
  $clinit_DatapathGraphics();
  drawVerticalSegment(true, false);
  drawRightArrow(false);
}

function $drawMuxReadDataMem_MuxForwardB(){
  drawRightArrow(true);
}

function $drawMuxReadDataMem_WriteData(){
  $clinit_DatapathGraphics();
  drawHorizontalSegment(false, false);
  drawVerticalSegment(false, false);
  drawHorizontalSegment(false, false);
  drawVerticalSegment(false, false);
  drawRightArrow(false);
}

function $drawMuxReadRegData_ALUMain(){
  drawRightArrow(false);
}

function $drawMuxReg2Loc_IDEX(){
  $clinit_DatapathGraphics();
  drawHorizontalSegment(false, true);
  drawVerticalSegment(false, false);
  drawRightArrow(false);
}

function $drawMuxReg2Loc_RegFileRead2(){
  drawRightArrow(false);
}

function $drawMux_TXT(muxCoords, muxDimensions){
  null.nullMethod();
  null.nullMethod(muxCoords[0] + muxDimensions[0] / 2 - null.nullMethod() / 2);
  null.nullMethod();
  null.nullMethod(muxCoords[0] + muxDimensions[0] / 2 - null.nullMethod() / 2);
  null.nullMethod();
  null.nullMethod(muxCoords[0] + muxDimensions[0] / 2 - null.nullMethod() / 2);
  null.nullMethod();
  null.nullMethod();
  null.nullMethod(muxCoords[0] + muxDimensions[0] / 2 - null.nullMethod() / 2);
  null.nullMethod();
  null.nullMethod(muxCoords[0] + muxDimensions[0] / 2 - null.nullMethod() / 2);
  null.nullMethod();
}

function $drawPC_ALUPC(){
  drawRightArrow(false);
  $clinit_DatapathGraphics();
  drawHorizontalSegment(false, true);
  drawVerticalSegment(true, false);
}

function $drawPC_InsMem(){
  drawRightArrow(false);
}

function $drawRegFile_IDEX1(){
  drawRightArrow(false);
}

function $drawRegFile_IDEX2(){
  drawRightArrow(false);
}

function $drawRegFile_MEMWBWB(){
  $clinit_DatapathGraphics();
  drawVerticalSegment(false, false);
  drawHorizontalSegment(false, false);
  drawVerticalSegment(false, false);
  drawHorizontalSegment(false, false);
}

function $drawRegFile_MuxControl(){
  drawRightArrow(true);
}

function $drawRegFile_ZeroTest(){
  $clinit_DatapathGraphics();
  drawHorizontalSegment(false, true);
  drawUpArrow();
}

function $drawShiftLeft2_ALUBranch(){
  $clinit_DatapathGraphics();
  drawVerticalSegment(false, false);
  drawRightArrow(false);
}

function $drawSignExtend_IDEX(){
  drawRightArrow(false);
}

function $drawSignExtend_ShiftLeft2(){
  $clinit_DatapathGraphics();
  drawHorizontalSegment(false, true);
  drawVerticalSegment(false, false);
  drawHorizontalSegment(false, false);
  drawUpArrow();
}

function $drawStringsInit(){
  null.nullMethod($clinit_DatapathGraphics());
  null.nullMethod();
  null.nullMethod();
  null.nullMethod(PC_COORDS[0] + PC_DIMENSIONS[0] / 2 - null.nullMethod() / 2);
  null.nullMethod();
  null.nullMethod(ALU_PC_COORDS[0] + 3 * ALU_PC_DIMENSIONS[0] / 5 - null.nullMethod() / 2);
  null.nullMethod();
  null.nullMethod(INS_MEM_COORDS[0] + INS_MEM_DIMENSIONS[0] / 2 - null.nullMethod() / 2);
  null.nullMethod();
  null.nullMethod(INS_MEM_COORDS[0] + INS_MEM_DIMENSIONS[0] / 2 - null.nullMethod() / 2);
  $drawMux_TXT(MUX_REG2LOC_COORDS, MUX_REG2LOC_DIMENSIONS);
  null.nullMethod();
  null.nullMethod(REG_FILE_COORDS[0] + 2 * REG_FILE_DIMENSIONS[0] / 3 - null.nullMethod() / 2);
  null.nullMethod();
  null.nullMethod(SIGN_EXTEND_COORDS[0] + SIGN_EXTEND_DIMENSIONS[0] / 2 - null.nullMethod() / 2);
  null.nullMethod();
  null.nullMethod(SIGN_EXTEND_COORDS[0] + SIGN_EXTEND_DIMENSIONS[0] / 2 - null.nullMethod() / 2);
  null.nullMethod();
  null.nullMethod(SHIFT_LEFT2_COORDS[0] + SHIFT_LEFT2_DIMENSIONS[0] / 2 - null.nullMethod() / 2);
  null.nullMethod();
  null.nullMethod(SHIFT_LEFT2_COORDS[0] + SHIFT_LEFT2_DIMENSIONS[0] / 2 - null.nullMethod() / 2);
  $drawMux_TXT(MUX_READ_REG_COORDS, MUX_READ_REG_DIMENSIONS);
  null.nullMethod();
  null.nullMethod(ALU_MAIN_COORDS[0] + 3 * ALU_MAIN_DIMENSIONS[0] / 5 - null.nullMethod() / 2);
  null.nullMethod();
  null.nullMethod(FLAGS_COORDS[0] + FLAGS_DIMENSIONS[0] / 8 - null.nullMethod() / 2);
  null.nullMethod();
  null.nullMethod(FLAGS_COORDS[0] + 3 * FLAGS_DIMENSIONS[0] / 8 - null.nullMethod() / 2);
  null.nullMethod();
  null.nullMethod(FLAGS_COORDS[0] + 5 * FLAGS_DIMENSIONS[0] / 8 - null.nullMethod() / 2);
  null.nullMethod();
  null.nullMethod(FLAGS_COORDS[0] + 7 * FLAGS_DIMENSIONS[0] / 8 - null.nullMethod() / 2);
  null.nullMethod();
  null.nullMethod(ALU_BRANCH_COORDS[0] + 3 * ALU_BRANCH_DIMENSIONS[0] / 5 - null.nullMethod() / 2);
  null.nullMethod();
  null.nullMethod(DATA_MEM_COORDS[0] + 6.5 * DATA_MEM_DIMENSIONS[0] / 10 - null.nullMethod() / 2);
  null.nullMethod();
  null.nullMethod(DATA_MEM_COORDS[0] + 6.5 * DATA_MEM_DIMENSIONS[0] / 10 - null.nullMethod() / 2);
  $drawMux_TXT(MUX_READ_DATA_MEM_COORDS, MUX_READ_DATA_MEM_DIMENSIONS);
  $drawMux_TXT(MUX_PC_COORDS, MUX_PC_DIMENSIONS);
  $drawMux_TXT(MUX_CONTROL_COORDS, MUX_CONTROL_DIMENSIONS);
  $drawMux_TXT(MUX_FORWARD_A_COORDS, MUX_FORWARD_A_DIMENSIONS);
  $drawMux_TXT(MUX_FORWARD_B_COORDS, MUX_FORWARD_B_DIMENSIONS);
  null.nullMethod();
  null.nullMethod(ZERO_TEST_COORDS[0] + ZERO_TEST_DIMENSIONS[0] / 2 - null.nullMethod() / 2);
  null.nullMethod();
  null.nullMethod();
  null.nullMethod(INS_MEM_COORDS[0] - 7.5 - null.nullMethod() / 2);
  null.nullMethod();
  null.nullMethod(SIGN_EXTEND_COORDS[0] - 10 - null.nullMethod() / 2);
  null.nullMethod();
  null.nullMethod(SIGN_EXTEND_COORDS[0] + SIGN_EXTEND_DIMENSIONS[0] + 10 - null.nullMethod() / 2);
  null.nullMethod();
  null.nullMethod();
  null.nullMethod();
  null.nullMethod();
  null.nullMethod();
  null.nullMethod();
  null.nullMethod();
  null.nullMethod();
  null.nullMethod();
  null.nullMethod();
  null.nullMethod();
  null.nullMethod();
  null.nullMethod(REG_FILE_COORDS[0] + REG_FILE_DIMENSIONS[0] - 4 - null.nullMethod());
  null.nullMethod();
  null.nullMethod(REG_FILE_COORDS[0] + REG_FILE_DIMENSIONS[0] - 4 - null.nullMethod());
  null.nullMethod();
  null.nullMethod(REG_FILE_COORDS[0] + REG_FILE_DIMENSIONS[0] - 4 - null.nullMethod());
  null.nullMethod();
  null.nullMethod(REG_FILE_COORDS[0] + REG_FILE_DIMENSIONS[0] - 4 - null.nullMethod());
  null.nullMethod();
  null.nullMethod();
  null.nullMethod();
  null.nullMethod();
  null.nullMethod(DATA_MEM_COORDS[0] + DATA_MEM_DIMENSIONS[0] - 4 - null.nullMethod());
  null.nullMethod();
  null.nullMethod(DATA_MEM_COORDS[0] + DATA_MEM_DIMENSIONS[0] - 4 - null.nullMethod());
  null.nullMethod($clinit_DatapathGraphics());
  null.nullMethod();
  $drawEXMWB_TXT(IDEX_EX_COORDS, IDEX_EX_DIMENSIONS);
  $drawEXMWB_TXT(IDEX_M_COORDS, IDEX_M_DIMENSIONS);
  $drawEXMWB_TXT(IDEX_WB_COORDS, IDEX_WB_DIMENSIONS);
  $drawEXMWB_TXT(EXMEM_M_COORDS, EXMEM_M_DIMENSIONS);
  $drawEXMWB_TXT(EXMEM_WB_COORDS, EXMEM_WB_DIMENSIONS);
  $drawEXMWB_TXT(MEMWB_WB_COORDS, MEMWB_WB_DIMENSIONS);
  null.nullMethod();
  null.nullMethod();
  null.nullMethod(CONTROL_COORDS[0] + CONTROL_DIMENSIONS[0] / 2 - null.nullMethod() / 2);
  null.nullMethod();
  null.nullMethod(ALU_CONTROL_COORDS[0] + ALU_CONTROL_DIMENSIONS[0] / 2 - null.nullMethod() / 2);
  null.nullMethod();
  null.nullMethod(ALU_CONTROL_COORDS[0] + ALU_CONTROL_DIMENSIONS[0] / 2 - null.nullMethod() / 2);
  null.nullMethod();
  null.nullMethod();
  null.nullMethod(HAZARD_DETECT_COORDS[0] + HAZARD_DETECT_DIMENSIONS[0] / 2 - null.nullMethod() / 2);
  null.nullMethod();
  null.nullMethod(HAZARD_DETECT_COORDS[0] + HAZARD_DETECT_DIMENSIONS[0] / 2 - null.nullMethod() / 2);
  null.nullMethod();
  null.nullMethod(HAZARD_DETECT_COORDS[0] + HAZARD_DETECT_DIMENSIONS[0] / 2 - null.nullMethod() / 2);
  null.nullMethod();
  null.nullMethod(FORWARD_UNIT_COORDS[0] + FORWARD_UNIT_DIMENSIONS[0] / 2 - null.nullMethod() / 2);
  null.nullMethod();
  null.nullMethod(FORWARD_UNIT_COORDS[0] + FORWARD_UNIT_DIMENSIONS[0] / 2 - null.nullMethod() / 2);
}

function $drawZeroAND_BranchOR(){
  $clinit_DatapathGraphics();
  drawVerticalSegment(false, false);
  drawHorizontalSegment(false, false);
  drawVerticalSegment(false, false);
}

function $drawZeroAND_MuxControl(){
  $clinit_DatapathGraphics();
  drawVerticalSegment(true, false);
}

function $drawZero_ZeroAND(){
  $clinit_DatapathGraphics();
  drawVerticalSegment(false, false);
  drawHorizontalSegment(false, false);
  drawVerticalSegment(false, false);
}

function PipelineVis(canvasWidth, canvasHeight){
  $clinit_PipelineVis();
  this.canvas = (!detector && (detector = new Canvas$CanvasElementSupportDetectedNo) , null);
  this.canvasWidth = canvasWidth;
  this.canvasHeight = canvasHeight;
  null.nullMethod();
  null.nullMethod();
  null.nullMethod(round_int(this.canvasWidth));
  null.nullMethod(round_int(this.canvasHeight));
  null.nullMethod().nullMethod();
  null.nullMethod();
  null.nullMethod();
  $drawDataWiresInit();
  $drawControlSignals();
  $drawComponentsInit();
  $drawStringsInit();
}

defineClass(109, 1, {}, PipelineVis);
_.canvasHeight = 0;
_.canvasWidth = 0;
var ALU_BRANCH_COORDS, ALU_BRANCH_DIMENSIONS, ALU_CONTROL_COORDS, ALU_CONTROL_DIMENSIONS, ALU_MAIN_COORDS, ALU_MAIN_DIMENSIONS, ALU_PC_COORDS, ALU_PC_DIMENSIONS, BRANCH_OR_COORDS, BRANCH_OR_DIMENSIONS, CONTROL_COORDS, CONTROL_DIMENSIONS, DATA_MEM_COORDS, DATA_MEM_DIMENSIONS, EXMEM_M_COORDS, EXMEM_M_DIMENSIONS, EXMEM_REG_COORDS, EXMEM_REG_DIMENSIONS, EXMEM_WB_COORDS, EXMEM_WB_DIMENSIONS, FLAGS_COORDS, FLAGS_DIMENSIONS, FORWARD_UNIT_COORDS, FORWARD_UNIT_DIMENSIONS, HAZARD_DETECT_COORDS, HAZARD_DETECT_DIMENSIONS, IDEX_EX_COORDS, IDEX_EX_DIMENSIONS, IDEX_M_COORDS, IDEX_M_DIMENSIONS, IDEX_REG_COORDS, IDEX_REG_DIMENSIONS, IDEX_WB_COORDS, IDEX_WB_DIMENSIONS, IFID_REG_COORDS, IFID_REG_DIMENSIONS, INS_MEM_COORDS, INS_MEM_DIMENSIONS, MEMWB_REG_COORDS, MEMWB_REG_DIMENSIONS, MEMWB_WB_COORDS, MEMWB_WB_DIMENSIONS, MUX_CONTROL_COORDS, MUX_CONTROL_DIMENSIONS, MUX_FORWARD_A_COORDS, MUX_FORWARD_A_DIMENSIONS, MUX_FORWARD_B_COORDS, MUX_FORWARD_B_DIMENSIONS, MUX_PC_COORDS, MUX_PC_DIMENSIONS, MUX_READ_DATA_MEM_COORDS, MUX_READ_DATA_MEM_DIMENSIONS, MUX_READ_REG_COORDS, MUX_READ_REG_DIMENSIONS, MUX_REG2LOC_COORDS, MUX_REG2LOC_DIMENSIONS, PC_COORDS, PC_DIMENSIONS, REG_FILE_COORDS, REG_FILE_DIMENSIONS, SHIFT_LEFT2_COORDS, SHIFT_LEFT2_DIMENSIONS, SIGN_EXTEND_COORDS, SIGN_EXTEND_DIMENSIONS, ZERO_AND_COORDS, ZERO_TEST_COORDS, ZERO_TEST_DIMENSIONS;
var Lcom_arm_legv8simulator_client_PipelineVis_2_classLit = createForClass('com.arm.legv8simulator.client', 'PipelineVis', 109);
function $convertToHex(this$static){
  var lower4Bytes;
  if (gte_0(this$static.regValue, {l:0, m:0, h:0})) {
    return '0x' + toPowerOfTwoUnsignedString(this$static.regValue);
  }
   else {
    lower4Bytes = toPowerOfTwoUnsignedString(and(this$static.regValue, {l:$intern_3, m:1023, h:0}));
    if (lower4Bytes.length < 8) {
      while (lower4Bytes.length < 8) {
        lower4Bytes = '0' + lower4Bytes;
      }
    }
    return '0x' + toPowerOfTwoUnsignedString(shru(this$static.regValue, 32)) + lower4Bytes;
  }
}

function $getRegStr(reg){
  switch (reg) {
    case 29:
      return 'FP';
    case 28:
      return 'SP';
    case 30:
      return 'LR';
    case 31:
      return 'XZR';
    case -1:
      return 'PC';
    default:return 'X' + reg;
  }
}

function $reset_0(this$static, reg){
  reg == 28?(this$static.regValue = decode_0('0x7ffffffffc').value_0):reg == -1?(this$static.regValue = decode_0('0x400000').value_0):(this$static.regValue = {l:0, m:0, h:0});
  $setStyleName_0(this$static.registerPanel, 'active', false);
  $setStyleName_0(this$static.registerPanel, 'inactive', true);
  this$static.hex?$setText(this$static.valueLab, $convertToHex(this$static)):$setText(this$static.valueLab, '' + toString_10(this$static.regValue));
}

function $update_0(this$static, newVal){
  if (eq(this$static.regValue, newVal)) {
    $setStyleName_0(this$static.registerPanel, 'active', false);
    $setStyleName_0(this$static.registerPanel, 'inactive', true);
  }
   else {
    this$static.regValue = newVal;
    this$static.hex?$setText(this$static.valueLab, $convertToHex(this$static)):$setText(this$static.valueLab, '' + toString_10(this$static.regValue));
    $setStyleName_0(this$static.registerPanel, 'inactive', false);
    $setStyleName_0(this$static.registerPanel, 'active', true);
  }
}

function RegisterPanel(reg){
  HorizontalPanel.call(this);
  $setPropertyImpl(this.element.style, 'height', '20px');
  $setPropertyImpl(this.element.style, 'width', '250px');
  reg == 28?(this.regValue = {l:4194300, m:131071, h:0}):reg == -1?(this.regValue = {l:0, m:1, h:0}):(this.regValue = {l:0, m:0, h:0});
  this.hex = true;
  this.registerPanel = new HorizontalPanel;
  $setHorizontalAlignment(this.registerPanel, ($clinit_HasHorizontalAlignment() , ALIGN_CENTER));
  $add_0(this.registerPanel, new Label($getRegStr(reg)));
  $setStyleName_0(this.registerPanel, 'inactive', true);
  $setWidth(this.registerPanel, '30px');
  $add_0(this, this.registerPanel);
  this.valueLab = new Label($convertToHex(this));
  this.regValuePanel = new HorizontalPanel;
  $setHorizontalAlignment(this.regValuePanel, ALIGN_CENTER);
  $add_0(this.regValuePanel, this.valueLab);
  $setWidth(this.regValuePanel, '150px');
  $add_0(this, this.regValuePanel);
  this.hexButt = new Button('Hex');
  $setWidth(this.hexButt, '35px');
  $setStyleName_0(this.hexButt, 'gwt-Button', false);
  $setStyleName_0(this.hexButt, 'active', true);
  $addDomHandler(this.hexButt, new RegisterPanel$1(this), ($clinit_ClickEvent() , $clinit_ClickEvent() , TYPE_0));
  $add_0(this, this.hexButt);
  this.decButt = new Button('Dec');
  $setWidth(this.decButt, '35px');
  $setStyleName_0(this.decButt, 'gwt-Button', false);
  $setStyleName_0(this.decButt, 'inactive', true);
  $addDomHandler(this.decButt, new RegisterPanel$2(this), (null , TYPE_0));
  $add_0(this, this.decButt);
}

defineClass(79, 18, {79:1, 25:1, 21:1, 24:1, 57:1, 35:1, 122:1, 92:1, 123:1, 23:1, 41:1, 49:1, 18:1, 53:1, 54:1, 67:1, 68:1, 26:1, 40:1, 20:1, 19:1, 22:1}, RegisterPanel);
_.hex = false;
_.regValue = {l:0, m:0, h:0};
var Lcom_arm_legv8simulator_client_RegisterPanel_2_classLit = createForClass('com.arm.legv8simulator.client', 'RegisterPanel', 79);
function RegisterPanel$1(this$0){
  this.this$01 = this$0;
}

defineClass(151, 1, $intern_4, RegisterPanel$1);
_.onClick = function onClick(event_0){
  this.this$01.hex = true;
  $setText(this.this$01.valueLab, $convertToHex(this.this$01));
  $setStyleName_0(this.this$01.hexButt, 'inactive', false);
  $setStyleName_0(this.this$01.hexButt, 'active', true);
  $setStyleName_0(this.this$01.decButt, 'active', false);
  $setStyleName_0(this.this$01.decButt, 'inactive', true);
}
;
var Lcom_arm_legv8simulator_client_RegisterPanel$1_2_classLit = createForClass('com.arm.legv8simulator.client', 'RegisterPanel/1', 151);
function RegisterPanel$2(this$0){
  this.this$01 = this$0;
}

defineClass(152, 1, $intern_4, RegisterPanel$2);
_.onClick = function onClick_0(event_0){
  this.this$01.hex = false;
  $setText(this.this$01.valueLab, '' + toString_10(this.this$01.regValue));
  $setStyleName_0(this.this$01.decButt, 'inactive', false);
  $setStyleName_0(this.this$01.decButt, 'active', true);
  $setStyleName_0(this.this$01.hexButt, 'active', false);
  $setStyleName_0(this.this$01.hexButt, 'inactive', true);
}
;
var Lcom_arm_legv8simulator_client_RegisterPanel$2_2_classLit = createForClass('com.arm.legv8simulator.client', 'RegisterPanel/2', 152);
function $clinit_SingleCycleVis(){
  $clinit_SingleCycleVis = emptyMethod;
  INS_MEM_DIMENSIONS_0 = initValues(getClassLiteralForArray(D_classLit, 1), $intern_2, 0, 7, [80, 120]);
  INS_MEM_COORDS_0 = initValues(getClassLiteralForArray(D_classLit, 1), $intern_2, 0, 7, [80, 335]);
  PC_DIMENSIONS_0 = initValues(getClassLiteralForArray(D_classLit, 1), $intern_2, 0, 7, [30, 60]);
  PC_COORDS_0 = initValues(getClassLiteralForArray(D_classLit, 1), $intern_2, 0, 7, [20, INS_MEM_COORDS_0[1] + INS_MEM_DIMENSIONS_0[1] / 10 - PC_DIMENSIONS_0[1] / 2]);
  REG_FILE_DIMENSIONS_0 = initValues(getClassLiteralForArray(D_classLit, 1), $intern_2, 0, 7, [110, 140]);
  REG_FILE_COORDS_0 = initValues(getClassLiteralForArray(D_classLit, 1), $intern_2, 0, 7, [335, 325]);
  DATA_MEM_DIMENSIONS_0 = initValues(getClassLiteralForArray(D_classLit, 1), $intern_2, 0, 7, [90, 130]);
  DATA_MEM_COORDS_0 = initValues(getClassLiteralForArray(D_classLit, 1), $intern_2, 0, 7, [715, 385]);
  ALU_PC_DIMENSIONS_0 = initValues(getClassLiteralForArray(D_classLit, 1), $intern_2, 0, 7, [45, 75]);
  ALU_PC_COORDS_0 = initValues(getClassLiteralForArray(D_classLit, 1), $intern_2, 0, 7, [150, 20]);
  ALU_MAIN_DIMENSIONS_0 = initValues(getClassLiteralForArray(D_classLit, 1), $intern_2, 0, 7, [75, 110]);
  ALU_MAIN_COORDS_0 = initValues(getClassLiteralForArray(D_classLit, 1), $intern_2, 0, 7, [540, 340]);
  MUX_PC_DIMENSIONS_0 = initValues(getClassLiteralForArray(D_classLit, 1), $intern_2, 0, 7, [25, 80]);
  MUX_PC_COORDS_0 = initValues(getClassLiteralForArray(D_classLit, 1), $intern_2, 0, 7, [800, ALU_PC_COORDS_0[1] + ALU_PC_DIMENSIONS_0[1] / 2 - MUX_PC_DIMENSIONS_0[0] / 2]);
  MUX_REG2LOC_DIMENSIONS_0 = initValues(getClassLiteralForArray(D_classLit, 1), $intern_2, 0, 7, [25, 65]);
  MUX_REG2LOC_COORDS_0 = initValues(getClassLiteralForArray(D_classLit, 1), $intern_2, 0, 7, [295, REG_FILE_COORDS_0[1] + 4 * REG_FILE_DIMENSIONS_0[1] / 10 - MUX_REG2LOC_DIMENSIONS_0[1] / 2]);
  MUX_READ_REG_DIMENSIONS_0 = initValues(getClassLiteralForArray(D_classLit, 1), $intern_2, 0, 7, [25, 65]);
  MUX_READ_REG_COORDS_0 = initValues(getClassLiteralForArray(D_classLit, 1), $intern_2, 0, 7, [495, ALU_MAIN_COORDS_0[1] + 13 * ALU_MAIN_DIMENSIONS_0[1] / 16 - MUX_READ_REG_DIMENSIONS_0[1] / 2]);
  MUX_READ_DATA_MEM_DIMENSIONS_0 = initValues(getClassLiteralForArray(D_classLit, 1), $intern_2, 0, 7, [25, 65]);
  MUX_READ_DATA_MEM_COORDS_0 = initValues(getClassLiteralForArray(D_classLit, 1), $intern_2, 0, 7, [835, 420]);
  ALU_BRANCH_DIMENSIONS_0 = initValues(getClassLiteralForArray(D_classLit, 1), $intern_2, 0, 7, [70, 90]);
  ALU_BRANCH_COORDS_0 = initValues(getClassLiteralForArray(D_classLit, 1), $intern_2, 0, 7, [595, MUX_PC_COORDS_0[1] + MUX_PC_DIMENSIONS_0[1] - MUX_PC_DIMENSIONS_0[0] / 2 - ALU_BRANCH_DIMENSIONS_0[1] / 2]);
  CONTROL_DIMENSIONS_0 = initValues(getClassLiteralForArray(D_classLit, 1), $intern_2, 0, 7, [60, 160]);
  CONTROL_COORDS_0 = initValues(getClassLiteralForArray(D_classLit, 1), $intern_2, 0, 7, [290, 155]);
  ALU_CONTROL_DIMENSIONS_0 = initValues(getClassLiteralForArray(D_classLit, 1), $intern_2, 0, 7, [55, 70]);
  ALU_CONTROL_COORDS_0 = initValues(getClassLiteralForArray(D_classLit, 1), $intern_2, 0, 7, [510, 515]);
  SIGN_EXTEND_DIMENSIONS_0 = initValues(getClassLiteralForArray(D_classLit, 1), $intern_2, 0, 7, [55, 70]);
  SIGN_EXTEND_COORDS_0 = initValues(getClassLiteralForArray(D_classLit, 1), $intern_2, 0, 7, [375, 500]);
  SHIFT_LEFT2_DIMENSIONS_0 = initValues(getClassLiteralForArray(D_classLit, 1), $intern_2, 0, 7, [45, 50]);
  SHIFT_LEFT2_COORDS_0 = initValues(getClassLiteralForArray(D_classLit, 1), $intern_2, 0, 7, [525, ALU_BRANCH_COORDS_0[1] + 13 * ALU_BRANCH_DIMENSIONS_0[1] / 16 - SHIFT_LEFT2_DIMENSIONS_0[1] / 2]);
  FLAGS_DIMENSIONS_0 = initValues(getClassLiteralForArray(D_classLit, 1), $intern_2, 0, 7, [88, 20]);
  FLAGS_COORDS_0 = initValues(getClassLiteralForArray(D_classLit, 1), $intern_2, 0, 7, [535, 310]);
  FLAG_AND_DIMENSIONS = initValues(getClassLiteralForArray(D_classLit, 1), $intern_2, 0, 7, [20, 20]);
  FLAG_AND_COORDS = initValues(getClassLiteralForArray(D_classLit, 1), $intern_2, 0, 7, [645, FLAGS_COORDS_0[1] + FLAGS_DIMENSIONS_0[1] / 2 - 4 * FLAG_AND_DIMENSIONS[1] / 5]);
  ZERO_AND_DIMENSIONS = initValues(getClassLiteralForArray(D_classLit, 1), $intern_2, 0, 7, [20, 20]);
  ZERO_AND_COORDS_0 = initValues(getClassLiteralForArray(D_classLit, 1), $intern_2, 0, 7, [715, FLAGS_COORDS_0[1] + FLAGS_DIMENSIONS_0[1] / 2 - 4 * ZERO_AND_DIMENSIONS[1] / 5]);
  CONTROL_PADDING = (CONTROL_DIMENSIONS_0[1] - 5) / 10;
  BRANCH_OR_DIMENSIONS_0 = initValues(getClassLiteralForArray(D_classLit, 1), $intern_2, 0, 7, [30, 25]);
  BRANCH_OR_COORDS_0 = initValues(getClassLiteralForArray(D_classLit, 1), $intern_2, 0, 7, [765, CONTROL_COORDS_0[1] + 2.5 + CONTROL_PADDING - BRANCH_OR_DIMENSIONS_0[1] / 5]);
  PC_PCALU_VERTICAL_X = PC_COORDS_0[0] + PC_DIMENSIONS_0[0] + (INS_MEM_COORDS_0[0] - PC_COORDS_0[0] - PC_DIMENSIONS_0[0]) / 3;
  INSTRUCTION_TEXT_COORDS = initValues(getClassLiteralForArray(D_classLit, 1), $intern_2, 0, 7, [PC_COORDS_0[0], ALU_CONTROL_COORDS_0[1] + ALU_CONTROL_DIMENSIONS_0[1]]);
}

function $draw4_ALUPC_0(){
  drawRightArrow(false);
}

function $drawALUBranch_MuxPC_0(){
  drawRightArrow(false);
}

function $drawALUControl_ALUMain_0(){
  drawHorizontalSegment(false, false);
  drawVerticalSegment(false, false);
}

function $drawALUControl_TXT(){
  null.nullMethod();
  null.nullMethod(ALU_CONTROL_COORDS_0[0] + ALU_CONTROL_DIMENSIONS_0[0] / 2 - null.nullMethod() / 2);
  null.nullMethod();
  null.nullMethod(ALU_CONTROL_COORDS_0[0] + ALU_CONTROL_DIMENSIONS_0[0] / 2 - null.nullMethod() / 2);
}

function $drawALUMain_DataMem(){
  drawRightArrow(false);
}

function $drawALUMain_Flags(){
  drawUpArrow();
}

function $drawALUMain_MuxReadMemData(){
  $clinit_DatapathGraphics();
  drawHorizontalSegment(false, true);
  drawVerticalSegment(false, true);
  drawHorizontalSegment(false, false);
  drawVerticalSegment(false, false);
  drawRightArrow(false);
}

function $drawALUMain_ZeroAnd(){
  $clinit_DatapathGraphics();
  drawHorizontalSegment(false, false);
  drawVerticalSegment(false, false);
  drawHorizontalSegment(false, false);
}

function $drawALUOp(){
  drawHorizontalSegment(($getEllipseXIntersect(CONTROL_COORDS_0[0], CONTROL_COORDS_0[1] + CONTROL_DIMENSIONS_0[1] / 2 - CONTROL_COORDS_0[1] - 2.5 - 9 * CONTROL_PADDING, CONTROL_DIMENSIONS_0[0] / 2, CONTROL_DIMENSIONS_0[1] / 2) , false), false);
  drawVerticalSegment(false, false);
  drawHorizontalSegment(false, false);
  drawVerticalSegment(false, false);
}

function $drawALUPC_MuxPC_0(){
  $clinit_DatapathGraphics();
  drawHorizontalSegment(false, false);
  drawVerticalSegment(false, false);
  drawRightArrow(false);
}

function $drawALUSrc(){
  $clinit_DatapathGraphics();
  drawHorizontalSegment(($getEllipseXIntersect(CONTROL_COORDS_0[0], CONTROL_COORDS_0[1] + CONTROL_DIMENSIONS_0[1] / 2 - CONTROL_COORDS_0[1] - 2.5 - 8 * CONTROL_PADDING, CONTROL_DIMENSIONS_0[0] / 2, CONTROL_DIMENSIONS_0[1] / 2) , false), false);
  drawVerticalSegment(false, false);
}

function $drawALUZero_TXT(zero){
  if (zero) {
    null.nullMethod();
    null.nullMethod(ALU_MAIN_COORDS_0[0] + ALU_MAIN_DIMENSIONS_0[0] - 4 - null.nullMethod());
  }
   else {
    null.nullMethod();
    null.nullMethod(ALU_MAIN_COORDS_0[0] + ALU_MAIN_DIMENSIONS_0[0] - 4 - null.nullMethod());
  }
}

function $drawBranchOr_MuxPC(){
  $clinit_DatapathGraphics();
  drawHorizontalSegment(false, false);
  drawVerticalSegment(false, false);
}

function $drawComponentsInit_0(){
  drawCompRect_0(false, false);
  drawCompRect_0(false, false);
  drawCompRect_0(false, false);
  drawCompRect_0(false, false);
  drawALU(false);
  drawALU(false);
  drawALU(false);
  drawMux(false, false);
  drawMux(false, false);
  drawMux(false, false);
  drawMux(false, false);
  $clinit_DatapathGraphics();
  drawEllipse();
  drawEllipse();
  $drawFlags(false, false);
  drawAndGateHorizontal($clinit_DatapathGraphics());
  drawAndGateHorizontal($clinit_DatapathGraphics());
  drawOrGateHorizontal(BRANCH_OR_COORDS_0[0], BRANCH_OR_DIMENSIONS_0[1], $clinit_DatapathGraphics());
  drawEllipse($clinit_DatapathGraphics());
  drawEllipse($clinit_DatapathGraphics());
}

function $drawControlSignalVals(c){
  null.nullMethod();
  null.nullMethod($clinit_DatapathGraphics());
  null.nullMethod();
  null.nullMethod(toString_3(c.reg2Loc), MUX_REG2LOC_COORDS_0[0] + MUX_REG2LOC_DIMENSIONS_0[0] / 2 - null.nullMethod() - 1);
  null.nullMethod(toString_3(c.uncondBranch));
  null.nullMethod(toString_3(c.flagBranch), FLAG_AND_COORDS[0] - null.nullMethod() - 2);
  null.nullMethod(toString_3(c.zeroBranch), ZERO_AND_COORDS_0[0] - null.nullMethod() - 2);
  null.nullMethod(toString_3(c.memRead), DATA_MEM_COORDS_0[0] + DATA_MEM_DIMENSIONS_0[0] / 2 - null.nullMethod() - 1);
  null.nullMethod(toString_3(c.memToReg), MUX_READ_DATA_MEM_COORDS_0[0] + MUX_READ_DATA_MEM_DIMENSIONS_0[0] / 2 - null.nullMethod() - 1);
  null.nullMethod(toString_3(c.memWrite), DATA_MEM_COORDS_0[0] + DATA_MEM_DIMENSIONS_0[0] / 2 - null.nullMethod() - 1);
  null.nullMethod(toString_3(c.flagWrite), FLAGS_COORDS_0[0] + FLAGS_DIMENSIONS_0[0] / 2 - null.nullMethod() - 1);
  null.nullMethod(toString_3(c.aluSrc), MUX_READ_REG_COORDS_0[0] + MUX_READ_REG_DIMENSIONS_0[0] / 2 - null.nullMethod() - 1);
  null.nullMethod(toString_3(c.regWrite));
  null.nullMethod(FLAG_AND_COORDS[0] - null.nullMethod() - 2);
  null.nullMethod();
  null.nullMethod(ZERO_AND_COORDS_0[0] - null.nullMethod() - 2);
  null.nullMethod();
  null.nullMethod(MUX_PC_COORDS_0[0] + MUX_PC_DIMENSIONS_0[0] / 2 - null.nullMethod() - 1);
  null.nullMethod(toString_4(c.aluOp));
  null.nullMethod(toString_4(c.aluOp), ALU_CONTROL_COORDS_0[0] + ALU_CONTROL_DIMENSIONS_0[0] / 2 - null.nullMethod() - 3);
  null.nullMethod();
}

function $drawControlSignals_0(){
  $drawReg2Loc($clinit_DatapathGraphics());
  $drawUnconditionalBranch($clinit_DatapathGraphics());
  $drawZeroBranch($clinit_DatapathGraphics());
  $drawFlagBranch($clinit_DatapathGraphics());
  $drawMemRead($clinit_DatapathGraphics());
  $drawMemToReg($clinit_DatapathGraphics());
  $drawMemWrite($clinit_DatapathGraphics());
  $drawFlagWrite($clinit_DatapathGraphics());
  $drawALUSrc($clinit_DatapathGraphics());
  $drawALUOp($clinit_DatapathGraphics());
  $drawRegWrite($clinit_DatapathGraphics());
  $drawBranchOr_MuxPC($clinit_DatapathGraphics());
  $drawFlag_FlagAnd($clinit_DatapathGraphics());
  $drawFlagAnd_BranchOR($clinit_DatapathGraphics());
  $drawALUMain_ZeroAnd($clinit_DatapathGraphics());
  $drawZeroAnd_BranchOR($clinit_DatapathGraphics());
  $drawALUControl_ALUMain_0($clinit_DatapathGraphics());
}

function $drawDataMemReadData_TXT(stxr){
  if (stxr) {
    null.nullMethod();
    null.nullMethod(DATA_MEM_COORDS_0[0] + DATA_MEM_DIMENSIONS_0[0] - 4 - null.nullMethod());
    null.nullMethod();
    null.nullMethod(DATA_MEM_COORDS_0[0] + DATA_MEM_DIMENSIONS_0[0] - 4 - null.nullMethod());
  }
   else {
    null.nullMethod();
    null.nullMethod(DATA_MEM_COORDS_0[0] + DATA_MEM_DIMENSIONS_0[0] - 4 - null.nullMethod());
    null.nullMethod();
    null.nullMethod(DATA_MEM_COORDS_0[0] + DATA_MEM_DIMENSIONS_0[0] - 4 - null.nullMethod());
  }
}

function $drawDataMem_MuxReadMemData(){
  drawRightArrow(false);
}

function $drawDataMem_TXT(){
  null.nullMethod();
  null.nullMethod(DATA_MEM_COORDS_0[0] + 6.5 * DATA_MEM_DIMENSIONS_0[0] / 10 - null.nullMethod() / 2);
  null.nullMethod();
  null.nullMethod(DATA_MEM_COORDS_0[0] + 6.5 * DATA_MEM_DIMENSIONS_0[0] / 10 - null.nullMethod() / 2);
}

function $drawDataWiresB(){
  $draw4_ALUPC_0($clinit_DatapathGraphics());
  $drawPC_ALUPC_0($clinit_DatapathGraphics());
  $drawInsMem_RegFileRead1($clinit_DatapathGraphics());
  $drawInsMem_RegFileWrite($clinit_DatapathGraphics());
  $drawInsMem_MuxReg2Loc1($clinit_DatapathGraphics());
  $drawInsMem_MuxReg2Loc2($clinit_DatapathGraphics());
  $drawInsMem_ALUControl($clinit_DatapathGraphics());
  $drawRegFile_ALUMain($clinit_DatapathGraphics());
  $drawRegFile_MuxReadRegData($clinit_DatapathGraphics());
  $drawRegFile_DataMem($clinit_DatapathGraphics());
  $drawDataMem_MuxReadMemData($clinit_DatapathGraphics());
  $drawALUPC_MuxPC_0($clinit_DatapathGraphics());
  $drawALUMain_Flags($clinit_DatapathGraphics());
  $drawALUMain_DataMem($clinit_DatapathGraphics());
  $drawALUMain_MuxReadMemData($clinit_DatapathGraphics());
  $drawMuxReg2Loc_RegFileRead2_0($clinit_DatapathGraphics());
  $drawMuxReadRegData_ALUMain_0($clinit_DatapathGraphics());
  $drawMuxReadMemData_RegFile($clinit_DatapathGraphics());
  $drawSignExtend_MuxReadRegData($clinit_DatapathGraphics());
  $drawSignExtend_ShiftLeft2_0($clinit_DatapathGraphics());
  $drawShiftLeft2_ALUBranch_0($clinit_DatapathGraphics());
  $drawPC_InsMem_0($clinit_DatapathGraphics());
  $drawPC_ALUBranch($clinit_DatapathGraphics());
  $drawInsMem_Control($clinit_DatapathGraphics());
  $drawALUBranch_MuxPC_0($clinit_DatapathGraphics());
  $drawMuxPC_PC_0($clinit_DatapathGraphics());
  $drawInsMem_SignExtend($clinit_DatapathGraphics());
}

function $drawDataWiresBcondFalse(){
  $drawInsMem_RegFileRead1($clinit_DatapathGraphics());
  $drawInsMem_RegFileWrite($clinit_DatapathGraphics());
  $drawInsMem_MuxReg2Loc1($clinit_DatapathGraphics());
  $drawInsMem_MuxReg2Loc2($clinit_DatapathGraphics());
  $drawInsMem_ALUControl($clinit_DatapathGraphics());
  $drawRegFile_ALUMain($clinit_DatapathGraphics());
  $drawRegFile_MuxReadRegData($clinit_DatapathGraphics());
  $drawRegFile_DataMem($clinit_DatapathGraphics());
  $drawDataMem_MuxReadMemData($clinit_DatapathGraphics());
  $drawALUMain_Flags($clinit_DatapathGraphics());
  $drawALUMain_DataMem($clinit_DatapathGraphics());
  $drawALUMain_MuxReadMemData($clinit_DatapathGraphics());
  $drawMuxReg2Loc_RegFileRead2_0($clinit_DatapathGraphics());
  $drawMuxReadRegData_ALUMain_0($clinit_DatapathGraphics());
  $drawMuxReadMemData_RegFile($clinit_DatapathGraphics());
  $drawSignExtend_MuxReadRegData($clinit_DatapathGraphics());
  $drawSignExtend_ShiftLeft2_0($clinit_DatapathGraphics());
  $drawShiftLeft2_ALUBranch_0($clinit_DatapathGraphics());
  $drawInsMem_SignExtend($clinit_DatapathGraphics());
  $drawALUBranch_MuxPC_0($clinit_DatapathGraphics());
  $drawPC_ALUBranch($clinit_DatapathGraphics());
  $drawInsMem_SignExtend($clinit_DatapathGraphics());
  $drawALUPC_MuxPC_0($clinit_DatapathGraphics());
  $draw4_ALUPC_0($clinit_DatapathGraphics());
  $drawPC_ALUPC_0($clinit_DatapathGraphics());
  $drawPC_InsMem_0($clinit_DatapathGraphics());
  $drawInsMem_Control($clinit_DatapathGraphics());
  $drawMuxPC_PC_0($clinit_DatapathGraphics());
}

function $drawDataWiresBcondTrue(){
  $draw4_ALUPC_0($clinit_DatapathGraphics());
  $drawPC_ALUPC_0($clinit_DatapathGraphics());
  $drawInsMem_RegFileRead1($clinit_DatapathGraphics());
  $drawInsMem_RegFileWrite($clinit_DatapathGraphics());
  $drawInsMem_MuxReg2Loc1($clinit_DatapathGraphics());
  $drawInsMem_MuxReg2Loc2($clinit_DatapathGraphics());
  $drawInsMem_ALUControl($clinit_DatapathGraphics());
  $drawRegFile_ALUMain($clinit_DatapathGraphics());
  $drawRegFile_MuxReadRegData($clinit_DatapathGraphics());
  $drawRegFile_DataMem($clinit_DatapathGraphics());
  $drawDataMem_MuxReadMemData($clinit_DatapathGraphics());
  $drawALUPC_MuxPC_0($clinit_DatapathGraphics());
  $drawALUMain_Flags($clinit_DatapathGraphics());
  $drawALUMain_DataMem($clinit_DatapathGraphics());
  $drawALUMain_MuxReadMemData($clinit_DatapathGraphics());
  $drawMuxReg2Loc_RegFileRead2_0($clinit_DatapathGraphics());
  $drawMuxReadRegData_ALUMain_0($clinit_DatapathGraphics());
  $drawMuxReadMemData_RegFile($clinit_DatapathGraphics());
  $drawSignExtend_MuxReadRegData($clinit_DatapathGraphics());
  $drawSignExtend_ShiftLeft2_0($clinit_DatapathGraphics());
  $drawShiftLeft2_ALUBranch_0($clinit_DatapathGraphics());
  $drawPC_InsMem_0($clinit_DatapathGraphics());
  $drawPC_ALUBranch($clinit_DatapathGraphics());
  $drawInsMem_Control($clinit_DatapathGraphics());
  $drawALUBranch_MuxPC_0($clinit_DatapathGraphics());
  $drawMuxPC_PC_0($clinit_DatapathGraphics());
  $drawInsMem_SignExtend($clinit_DatapathGraphics());
}

function $drawDataWiresCBNotTaken(){
  $drawInsMem_RegFileRead1($clinit_DatapathGraphics());
  $drawInsMem_RegFileWrite($clinit_DatapathGraphics());
  $drawInsMem_MuxReg2Loc2($clinit_DatapathGraphics());
  $drawInsMem_ALUControl($clinit_DatapathGraphics());
  $drawRegFile_ALUMain($clinit_DatapathGraphics());
  $drawRegFile_DataMem($clinit_DatapathGraphics());
  $drawDataMem_MuxReadMemData($clinit_DatapathGraphics());
  $drawALUMain_Flags($clinit_DatapathGraphics());
  $drawALUMain_DataMem($clinit_DatapathGraphics());
  $drawALUMain_MuxReadMemData($clinit_DatapathGraphics());
  $drawMuxReadMemData_RegFile($clinit_DatapathGraphics());
  $drawSignExtend_MuxReadRegData($clinit_DatapathGraphics());
  $drawSignExtend_ShiftLeft2_0($clinit_DatapathGraphics());
  $drawShiftLeft2_ALUBranch_0($clinit_DatapathGraphics());
  $drawPC_ALUBranch($clinit_DatapathGraphics());
  $drawALUBranch_MuxPC_0($clinit_DatapathGraphics());
  $drawInsMem_SignExtend($clinit_DatapathGraphics());
  $draw4_ALUPC_0($clinit_DatapathGraphics());
  $drawPC_ALUPC_0($clinit_DatapathGraphics());
  $drawInsMem_MuxReg2Loc1($clinit_DatapathGraphics());
  $drawRegFile_MuxReadRegData($clinit_DatapathGraphics());
  $drawALUPC_MuxPC_0($clinit_DatapathGraphics());
  $drawMuxReg2Loc_RegFileRead2_0($clinit_DatapathGraphics());
  $drawMuxReadRegData_ALUMain_0($clinit_DatapathGraphics());
  $drawPC_InsMem_0($clinit_DatapathGraphics());
  $drawInsMem_Control($clinit_DatapathGraphics());
  $drawMuxPC_PC_0($clinit_DatapathGraphics());
}

function $drawDataWiresCBTaken(){
  $drawALUPC_MuxPC_0($clinit_DatapathGraphics());
  $draw4_ALUPC_0($clinit_DatapathGraphics());
  $drawPC_ALUPC_0($clinit_DatapathGraphics());
  $drawInsMem_RegFileRead1($clinit_DatapathGraphics());
  $drawInsMem_RegFileWrite($clinit_DatapathGraphics());
  $drawInsMem_MuxReg2Loc2($clinit_DatapathGraphics());
  $drawInsMem_ALUControl($clinit_DatapathGraphics());
  $drawRegFile_ALUMain($clinit_DatapathGraphics());
  $drawRegFile_DataMem($clinit_DatapathGraphics());
  $drawDataMem_MuxReadMemData($clinit_DatapathGraphics());
  $drawALUMain_Flags($clinit_DatapathGraphics());
  $drawALUMain_DataMem($clinit_DatapathGraphics());
  $drawALUMain_MuxReadMemData($clinit_DatapathGraphics());
  $drawMuxReadMemData_RegFile($clinit_DatapathGraphics());
  $drawSignExtend_MuxReadRegData($clinit_DatapathGraphics());
  $drawSignExtend_ShiftLeft2_0($clinit_DatapathGraphics());
  $drawShiftLeft2_ALUBranch_0($clinit_DatapathGraphics());
  $drawInsMem_SignExtend($clinit_DatapathGraphics());
  $drawALUBranch_MuxPC_0($clinit_DatapathGraphics());
  $drawPC_ALUBranch($clinit_DatapathGraphics());
  $drawInsMem_SignExtend($clinit_DatapathGraphics());
  $drawInsMem_MuxReg2Loc1($clinit_DatapathGraphics());
  $drawPC_InsMem_0($clinit_DatapathGraphics());
  $drawInsMem_Control($clinit_DatapathGraphics());
  $drawMuxPC_PC_0($clinit_DatapathGraphics());
  $drawRegFile_MuxReadRegData($clinit_DatapathGraphics());
  $drawMuxReg2Loc_RegFileRead2_0($clinit_DatapathGraphics());
  $drawMuxReadRegData_ALUMain_0($clinit_DatapathGraphics());
}

function $drawDataWiresInit_0(){
  $draw4_ALUPC_0($clinit_DatapathGraphics());
  $drawPC_InsMem_0($clinit_DatapathGraphics());
  $drawPC_ALUPC_0($clinit_DatapathGraphics());
  $drawPC_ALUBranch($clinit_DatapathGraphics());
  $drawInsMem_Control($clinit_DatapathGraphics());
  $drawInsMem_RegFileRead1($clinit_DatapathGraphics());
  $drawInsMem_RegFileWrite($clinit_DatapathGraphics());
  $drawInsMem_MuxReg2Loc1($clinit_DatapathGraphics());
  $drawInsMem_MuxReg2Loc2($clinit_DatapathGraphics());
  $drawInsMem_SignExtend($clinit_DatapathGraphics());
  $drawInsMem_ALUControl($clinit_DatapathGraphics());
  $drawRegFile_ALUMain($clinit_DatapathGraphics());
  $drawRegFile_MuxReadRegData($clinit_DatapathGraphics());
  $drawRegFile_DataMem($clinit_DatapathGraphics());
  $drawDataMem_MuxReadMemData($clinit_DatapathGraphics());
  $drawALUPC_MuxPC_0($clinit_DatapathGraphics());
  $drawALUBranch_MuxPC_0($clinit_DatapathGraphics());
  $drawALUMain_Flags($clinit_DatapathGraphics());
  $drawALUMain_DataMem($clinit_DatapathGraphics());
  $drawALUMain_MuxReadMemData($clinit_DatapathGraphics());
  $drawMuxPC_PC_0($clinit_DatapathGraphics());
  $drawMuxReg2Loc_RegFileRead2_0($clinit_DatapathGraphics());
  $drawMuxReadRegData_ALUMain_0($clinit_DatapathGraphics());
  $drawMuxReadMemData_RegFile($clinit_DatapathGraphics());
  $drawSignExtend_MuxReadRegData($clinit_DatapathGraphics());
  $drawSignExtend_ShiftLeft2_0($clinit_DatapathGraphics());
  $drawShiftLeft2_ALUBranch_0($clinit_DatapathGraphics());
}

function $drawDataWiresLoad(){
  $drawInsMem_MuxReg2Loc2($clinit_DatapathGraphics());
  $drawInsMem_ALUControl($clinit_DatapathGraphics());
  $drawRegFile_DataMem($clinit_DatapathGraphics());
  $drawALUMain_Flags($clinit_DatapathGraphics());
  $drawALUMain_MuxReadMemData($clinit_DatapathGraphics());
  $drawSignExtend_ShiftLeft2_0($clinit_DatapathGraphics());
  $drawShiftLeft2_ALUBranch_0($clinit_DatapathGraphics());
  $drawPC_ALUBranch($clinit_DatapathGraphics());
  $drawALUBranch_MuxPC_0($clinit_DatapathGraphics());
  $drawInsMem_MuxReg2Loc1($clinit_DatapathGraphics());
  $drawRegFile_MuxReadRegData($clinit_DatapathGraphics());
  $drawMuxReg2Loc_RegFileRead2_0($clinit_DatapathGraphics());
  $drawMuxReadRegData_ALUMain_0($clinit_DatapathGraphics());
  $drawPC_InsMem_0($clinit_DatapathGraphics());
  $drawInsMem_Control($clinit_DatapathGraphics());
  $drawMuxPC_PC_0($clinit_DatapathGraphics());
  $drawInsMem_RegFileRead1($clinit_DatapathGraphics());
  $drawInsMem_RegFileWrite($clinit_DatapathGraphics());
  $drawRegFile_ALUMain($clinit_DatapathGraphics());
  $drawDataMem_MuxReadMemData($clinit_DatapathGraphics());
  $drawALUMain_DataMem($clinit_DatapathGraphics());
  $drawMuxReadMemData_RegFile($clinit_DatapathGraphics());
  $drawSignExtend_MuxReadRegData($clinit_DatapathGraphics());
  $drawInsMem_SignExtend($clinit_DatapathGraphics());
  $draw4_ALUPC_0($clinit_DatapathGraphics());
  $drawPC_ALUPC_0($clinit_DatapathGraphics());
  $drawALUPC_MuxPC_0($clinit_DatapathGraphics());
}

function $drawDataWiresRRI(flags){
  $drawSignExtend_ShiftLeft2_0($clinit_DatapathGraphics());
  $drawShiftLeft2_ALUBranch_0($clinit_DatapathGraphics());
  $drawALUMain_DataMem($clinit_DatapathGraphics());
  $drawALUBranch_MuxPC_0($clinit_DatapathGraphics());
  $drawRegFile_DataMem($clinit_DatapathGraphics());
  $drawPC_ALUBranch($clinit_DatapathGraphics());
  $drawInsMem_MuxReg2Loc2($clinit_DatapathGraphics());
  $drawDataMem_MuxReadMemData($clinit_DatapathGraphics());
  $drawMuxReg2Loc_RegFileRead2_0($clinit_DatapathGraphics());
  $drawInsMem_MuxReg2Loc1($clinit_DatapathGraphics());
  $drawRegFile_MuxReadRegData($clinit_DatapathGraphics());
  $drawInsMem_SignExtend($clinit_DatapathGraphics());
  $drawSignExtend_MuxReadRegData($clinit_DatapathGraphics());
  $draw4_ALUPC_0($clinit_DatapathGraphics());
  $drawPC_InsMem_0($clinit_DatapathGraphics());
  $drawPC_ALUPC_0($clinit_DatapathGraphics());
  $drawInsMem_Control($clinit_DatapathGraphics());
  $drawInsMem_RegFileRead1($clinit_DatapathGraphics());
  $drawInsMem_RegFileWrite($clinit_DatapathGraphics());
  $drawInsMem_ALUControl($clinit_DatapathGraphics());
  $drawRegFile_ALUMain($clinit_DatapathGraphics());
  $drawALUPC_MuxPC_0($clinit_DatapathGraphics());
  flags?$drawALUMain_Flags($clinit_DatapathGraphics()):$drawALUMain_Flags($clinit_DatapathGraphics());
  $drawALUMain_MuxReadMemData($clinit_DatapathGraphics());
  $drawMuxPC_PC_0($clinit_DatapathGraphics());
  $drawMuxReadRegData_ALUMain_0($clinit_DatapathGraphics());
  $drawMuxReadMemData_RegFile($clinit_DatapathGraphics());
}

function $drawDataWiresRRR(flags){
  $drawSignExtend_ShiftLeft2_0($clinit_DatapathGraphics());
  $drawShiftLeft2_ALUBranch_0($clinit_DatapathGraphics());
  $drawSignExtend_MuxReadRegData($clinit_DatapathGraphics());
  $drawALUMain_DataMem($clinit_DatapathGraphics());
  $drawALUBranch_MuxPC_0($clinit_DatapathGraphics());
  $drawRegFile_DataMem($clinit_DatapathGraphics());
  $drawInsMem_SignExtend($clinit_DatapathGraphics());
  $drawInsMem_MuxReg2Loc1($clinit_DatapathGraphics());
  $drawPC_ALUBranch($clinit_DatapathGraphics());
  $drawDataMem_MuxReadMemData($clinit_DatapathGraphics());
  $draw4_ALUPC_0($clinit_DatapathGraphics());
  $drawPC_InsMem_0($clinit_DatapathGraphics());
  $drawPC_ALUPC_0($clinit_DatapathGraphics());
  $drawInsMem_Control($clinit_DatapathGraphics());
  $drawInsMem_RegFileRead1($clinit_DatapathGraphics());
  $drawInsMem_RegFileWrite($clinit_DatapathGraphics());
  $drawInsMem_MuxReg2Loc2($clinit_DatapathGraphics());
  $drawInsMem_ALUControl($clinit_DatapathGraphics());
  $drawRegFile_ALUMain($clinit_DatapathGraphics());
  $drawRegFile_MuxReadRegData($clinit_DatapathGraphics());
  $drawALUPC_MuxPC_0($clinit_DatapathGraphics());
  flags?$drawALUMain_Flags($clinit_DatapathGraphics()):$drawALUMain_Flags($clinit_DatapathGraphics());
  $drawALUMain_MuxReadMemData($clinit_DatapathGraphics());
  $drawMuxPC_PC_0($clinit_DatapathGraphics());
  $drawMuxReg2Loc_RegFileRead2_0($clinit_DatapathGraphics());
  $drawMuxReadRegData_ALUMain_0($clinit_DatapathGraphics());
  $drawMuxReadMemData_RegFile($clinit_DatapathGraphics());
}

function $drawDataWiresSTXRFail(){
  $drawInsMem_MuxReg2Loc2($clinit_DatapathGraphics());
  $drawInsMem_ALUControl($clinit_DatapathGraphics());
  $drawALUMain_Flags($clinit_DatapathGraphics());
  $drawALUMain_MuxReadMemData($clinit_DatapathGraphics());
  $drawSignExtend_ShiftLeft2_0($clinit_DatapathGraphics());
  $drawShiftLeft2_ALUBranch_0($clinit_DatapathGraphics());
  $drawPC_ALUBranch($clinit_DatapathGraphics());
  $drawALUBranch_MuxPC_0($clinit_DatapathGraphics());
  $drawInsMem_MuxReg2Loc1($clinit_DatapathGraphics());
  $drawRegFile_MuxReadRegData($clinit_DatapathGraphics());
  $drawRegFile_DataMem($clinit_DatapathGraphics());
  $drawDataMem_MuxReadMemData($clinit_DatapathGraphics());
  $drawMuxReadMemData_RegFile($clinit_DatapathGraphics());
  $drawInsMem_RegFileWrite($clinit_DatapathGraphics());
  $drawMuxReg2Loc_RegFileRead2_0($clinit_DatapathGraphics());
  $drawMuxReadRegData_ALUMain_0($clinit_DatapathGraphics());
  $drawPC_InsMem_0($clinit_DatapathGraphics());
  $drawInsMem_Control($clinit_DatapathGraphics());
  $drawMuxPC_PC_0($clinit_DatapathGraphics());
  $drawInsMem_RegFileRead1($clinit_DatapathGraphics());
  $drawRegFile_ALUMain($clinit_DatapathGraphics());
  $drawALUMain_DataMem($clinit_DatapathGraphics());
  $drawSignExtend_MuxReadRegData($clinit_DatapathGraphics());
  $drawInsMem_SignExtend($clinit_DatapathGraphics());
  $draw4_ALUPC_0($clinit_DatapathGraphics());
  $drawPC_ALUPC_0($clinit_DatapathGraphics());
  $drawALUPC_MuxPC_0($clinit_DatapathGraphics());
}

function $drawDataWiresSTXRSucceed(){
  $drawInsMem_MuxReg2Loc2($clinit_DatapathGraphics());
  $drawInsMem_ALUControl($clinit_DatapathGraphics());
  $drawALUMain_Flags($clinit_DatapathGraphics());
  $drawALUMain_MuxReadMemData($clinit_DatapathGraphics());
  $drawSignExtend_ShiftLeft2_0($clinit_DatapathGraphics());
  $drawShiftLeft2_ALUBranch_0($clinit_DatapathGraphics());
  $drawPC_ALUBranch($clinit_DatapathGraphics());
  $drawALUBranch_MuxPC_0($clinit_DatapathGraphics());
  $drawInsMem_MuxReg2Loc1($clinit_DatapathGraphics());
  $drawRegFile_MuxReadRegData($clinit_DatapathGraphics());
  $drawDataMem_MuxReadMemData($clinit_DatapathGraphics());
  $drawMuxReadMemData_RegFile($clinit_DatapathGraphics());
  $drawInsMem_RegFileWrite($clinit_DatapathGraphics());
  $drawMuxReg2Loc_RegFileRead2_0($clinit_DatapathGraphics());
  $drawRegFile_DataMem($clinit_DatapathGraphics());
  $drawMuxReadRegData_ALUMain_0($clinit_DatapathGraphics());
  $drawPC_InsMem_0($clinit_DatapathGraphics());
  $drawInsMem_Control($clinit_DatapathGraphics());
  $drawMuxPC_PC_0($clinit_DatapathGraphics());
  $drawInsMem_RegFileRead1($clinit_DatapathGraphics());
  $drawRegFile_ALUMain($clinit_DatapathGraphics());
  $drawALUMain_DataMem($clinit_DatapathGraphics());
  $drawSignExtend_MuxReadRegData($clinit_DatapathGraphics());
  $drawInsMem_SignExtend($clinit_DatapathGraphics());
  $draw4_ALUPC_0($clinit_DatapathGraphics());
  $drawPC_ALUPC_0($clinit_DatapathGraphics());
  $drawALUPC_MuxPC_0($clinit_DatapathGraphics());
}

function $drawDataWiresStore(){
  $drawInsMem_MuxReg2Loc2($clinit_DatapathGraphics());
  $drawInsMem_ALUControl($clinit_DatapathGraphics());
  $drawALUMain_Flags($clinit_DatapathGraphics());
  $drawALUMain_MuxReadMemData($clinit_DatapathGraphics());
  $drawSignExtend_ShiftLeft2_0($clinit_DatapathGraphics());
  $drawShiftLeft2_ALUBranch_0($clinit_DatapathGraphics());
  $drawPC_ALUBranch($clinit_DatapathGraphics());
  $drawALUBranch_MuxPC_0($clinit_DatapathGraphics());
  $drawDataMem_MuxReadMemData($clinit_DatapathGraphics());
  $drawMuxReadMemData_RegFile($clinit_DatapathGraphics());
  $drawRegFile_MuxReadRegData($clinit_DatapathGraphics());
  $drawInsMem_RegFileWrite($clinit_DatapathGraphics());
  $drawMuxReg2Loc_RegFileRead2_0($clinit_DatapathGraphics());
  $drawInsMem_MuxReg2Loc1($clinit_DatapathGraphics());
  $drawRegFile_DataMem($clinit_DatapathGraphics());
  $drawMuxReadRegData_ALUMain_0($clinit_DatapathGraphics());
  $drawPC_InsMem_0($clinit_DatapathGraphics());
  $drawInsMem_Control($clinit_DatapathGraphics());
  $drawMuxPC_PC_0($clinit_DatapathGraphics());
  $drawInsMem_RegFileRead1($clinit_DatapathGraphics());
  $drawRegFile_ALUMain($clinit_DatapathGraphics());
  $drawALUMain_DataMem($clinit_DatapathGraphics());
  $drawSignExtend_MuxReadRegData($clinit_DatapathGraphics());
  $drawInsMem_SignExtend($clinit_DatapathGraphics());
  $draw4_ALUPC_0($clinit_DatapathGraphics());
  $drawPC_ALUPC_0($clinit_DatapathGraphics());
  $drawALUPC_MuxPC_0($clinit_DatapathGraphics());
}

function $drawDatapathBcond(taken){
  if (taken) {
    $drawDataWiresBcondTrue();
    $drawControlSignals_0();
    drawCompRect_0(true, true);
    drawCompRect_0(false, true);
    drawCompRect_0(false, false);
    drawCompRect_0(false, false);
    drawALU(false);
    drawALU(true);
    drawALU(false);
    drawMux(false, true);
    drawMux(false, false);
    drawMux(false, false);
    drawMux(false, false);
    $clinit_DatapathGraphics();
    drawEllipse();
    drawEllipse();
    $drawFlags(false, true);
    drawAndGateHorizontal($clinit_DatapathGraphics());
    drawAndGateHorizontal($clinit_DatapathGraphics());
    drawOrGateHorizontal(BRANCH_OR_COORDS_0[0], BRANCH_OR_DIMENSIONS_0[1], $clinit_DatapathGraphics());
    drawEllipse($clinit_DatapathGraphics());
    drawEllipse($clinit_DatapathGraphics());
    $drawControlSignalVals(($clinit_ControlUnitConfiguration() , L_COND));
  }
   else {
    $drawDataWiresBcondFalse();
    $drawControlSignals_0();
    drawCompRect_0(true, true);
    drawCompRect_0(false, true);
    drawCompRect_0(false, false);
    drawCompRect_0(false, false);
    drawALU(true);
    drawALU(false);
    drawALU(false);
    drawMux(true, false);
    drawMux(false, false);
    drawMux(false, false);
    drawMux(false, false);
    $clinit_DatapathGraphics();
    drawEllipse();
    drawEllipse();
    $drawFlags(false, true);
    drawAndGateHorizontal($clinit_DatapathGraphics());
    drawAndGateHorizontal($clinit_DatapathGraphics());
    drawOrGateHorizontal(BRANCH_OR_COORDS_0[0], BRANCH_OR_DIMENSIONS_0[1], $clinit_DatapathGraphics());
    drawEllipse($clinit_DatapathGraphics());
    drawEllipse($clinit_DatapathGraphics());
    $drawControlSignalVals(($clinit_ControlUnitConfiguration() , L_COND));
  }
  $drawStringsInit_0(true, true, false);
}

function $drawDatapathCB(taken, m){
  if (taken) {
    $drawDataWiresCBTaken();
    $drawControlSignals_0();
    drawCompRect_0(true, true);
    drawCompRect_0(false, true);
    drawCompRect_0(false, true);
    drawCompRect_0(false, false);
    drawALU(false);
    drawALU(true);
    drawALU(true);
    drawMux(false, true);
    drawMux(false, true);
    drawMux(true, false);
    drawMux(false, false);
    $clinit_DatapathGraphics();
    drawEllipse();
    drawEllipse();
    $drawFlags(false, false);
    drawAndGateHorizontal($clinit_DatapathGraphics());
    drawAndGateHorizontal($clinit_DatapathGraphics());
    drawOrGateHorizontal(BRANCH_OR_COORDS_0[0], BRANCH_OR_DIMENSIONS_0[1], $clinit_DatapathGraphics());
    drawEllipse($clinit_DatapathGraphics());
    drawEllipse($clinit_DatapathGraphics());
    $drawControlSignalVals(($clinit_ControlUnitConfiguration() , RL));
  }
   else {
    $drawDataWiresCBNotTaken();
    $drawControlSignals_0();
    drawCompRect_0(true, true);
    drawCompRect_0(false, true);
    drawCompRect_0(false, true);
    drawCompRect_0(false, false);
    drawALU(true);
    drawALU(false);
    drawALU(true);
    drawMux(true, false);
    drawMux(false, true);
    drawMux(true, false);
    drawMux(false, false);
    $clinit_DatapathGraphics();
    drawEllipse();
    drawEllipse();
    $drawFlags(false, false);
    drawAndGateHorizontal($clinit_DatapathGraphics());
    drawAndGateHorizontal($clinit_DatapathGraphics());
    drawOrGateHorizontal(BRANCH_OR_COORDS_0[0], BRANCH_OR_DIMENSIONS_0[1], $clinit_DatapathGraphics());
    drawEllipse($clinit_DatapathGraphics());
    drawEllipse($clinit_DatapathGraphics());
    $drawControlSignalVals(($clinit_ControlUnitConfiguration() , RL));
  }
  m == ($clinit_Mnemonic() , CBZ)?$drawStringsInit_0(true, true, false):$drawStringsInit_0(true, false, false);
}

function $drawDatapathLoad(){
  $drawDataWiresLoad();
  $drawControlSignals_0();
  drawCompRect_0(true, true);
  drawCompRect_0(false, true);
  drawCompRect_0(true, true);
  drawCompRect_0(false, true);
  drawALU(true);
  drawALU(false);
  drawALU(true);
  drawMux(true, false);
  drawMux(false, false);
  drawMux(false, true);
  drawMux(true, false);
  $clinit_DatapathGraphics();
  drawEllipse();
  drawEllipse();
  $drawFlags(false, false);
  drawAndGateHorizontal($clinit_DatapathGraphics());
  drawAndGateHorizontal($clinit_DatapathGraphics());
  drawOrGateHorizontal(BRANCH_OR_COORDS_0[0], BRANCH_OR_DIMENSIONS_0[1], $clinit_DatapathGraphics());
  drawEllipse($clinit_DatapathGraphics());
  drawEllipse($clinit_DatapathGraphics());
  $drawStringsInit_0(true, true, false);
  $drawControlSignalVals(($clinit_ControlUnitConfiguration() , RM_LOAD));
}

function $drawDatapathRRI(flags){
  $drawDataWiresRRI(flags);
  $drawControlSignals_0();
  drawCompRect_0(true, true);
  drawCompRect_0(false, true);
  drawCompRect_0(true, true);
  drawCompRect_0(false, false);
  drawALU(true);
  drawALU(false);
  drawALU(true);
  drawMux(true, false);
  drawMux(false, false);
  drawMux(false, true);
  drawMux(false, true);
  $clinit_DatapathGraphics();
  drawEllipse();
  drawEllipse();
  $drawFlags(flags, false);
  drawAndGateHorizontal($clinit_DatapathGraphics());
  drawAndGateHorizontal($clinit_DatapathGraphics());
  drawOrGateHorizontal(BRANCH_OR_COORDS_0[0], BRANCH_OR_DIMENSIONS_0[1], $clinit_DatapathGraphics());
  drawEllipse($clinit_DatapathGraphics());
  drawEllipse($clinit_DatapathGraphics());
  flags?$drawControlSignalVals(($clinit_ControlUnitConfiguration() , RRI_FLAGS)):$drawControlSignalVals(($clinit_ControlUnitConfiguration() , RRI));
  $drawStringsInit_0(false, true, false);
}

function $drawDatapathRRR(flags){
  $drawDataWiresRRR(flags);
  $drawControlSignals_0();
  drawCompRect_0(true, true);
  drawCompRect_0(false, true);
  drawCompRect_0(true, true);
  drawCompRect_0(false, false);
  drawALU(true);
  drawALU(false);
  drawALU(true);
  drawMux(true, false);
  drawMux(true, false);
  drawMux(true, false);
  drawMux(false, true);
  $clinit_DatapathGraphics();
  drawEllipse();
  drawEllipse();
  $drawFlags(flags, false);
  drawAndGateHorizontal($clinit_DatapathGraphics());
  drawAndGateHorizontal($clinit_DatapathGraphics());
  drawOrGateHorizontal(BRANCH_OR_COORDS_0[0], BRANCH_OR_DIMENSIONS_0[1], $clinit_DatapathGraphics());
  drawEllipse($clinit_DatapathGraphics());
  drawEllipse($clinit_DatapathGraphics());
  flags?$drawControlSignalVals(($clinit_ControlUnitConfiguration() , RRR_FLAGS)):$drawControlSignalVals(($clinit_ControlUnitConfiguration() , RRR));
  $drawStringsInit_0(true, true, false);
}

function $drawDatapathSTXR(succeed){
  if (succeed) {
    $drawDataWiresSTXRSucceed();
    $drawControlSignals_0();
    drawCompRect_0(true, true);
    drawCompRect_0(false, true);
    drawCompRect_0(true, true);
    drawCompRect_0(true, true);
    drawALU(true);
    drawALU(false);
    drawALU(true);
    drawMux(true, false);
    drawMux(true, false);
    drawMux(false, true);
    drawMux(true, false);
    $clinit_DatapathGraphics();
    drawEllipse();
    drawEllipse();
    $drawFlags(false, false);
    drawAndGateHorizontal($clinit_DatapathGraphics());
    drawAndGateHorizontal($clinit_DatapathGraphics());
    drawOrGateHorizontal(BRANCH_OR_COORDS_0[0], BRANCH_OR_DIMENSIONS_0[1], $clinit_DatapathGraphics());
    drawEllipse($clinit_DatapathGraphics());
    drawEllipse($clinit_DatapathGraphics());
    $drawControlSignalVals(($clinit_ControlUnitConfiguration() , RRM));
  }
   else {
    $drawDataWiresSTXRFail();
    $drawControlSignals_0();
    drawCompRect_0(true, true);
    drawCompRect_0(false, true);
    drawCompRect_0(true, true);
    drawCompRect_0(false, true);
    drawALU(true);
    drawALU(false);
    drawALU(true);
    drawMux(true, false);
    drawMux(true, false);
    drawMux(false, true);
    drawMux(true, false);
    $clinit_DatapathGraphics();
    drawEllipse();
    drawEllipse();
    $drawFlags(false, false);
    drawAndGateHorizontal($clinit_DatapathGraphics());
    drawAndGateHorizontal($clinit_DatapathGraphics());
    drawOrGateHorizontal(BRANCH_OR_COORDS_0[0], BRANCH_OR_DIMENSIONS_0[1], $clinit_DatapathGraphics());
    drawEllipse($clinit_DatapathGraphics());
    drawEllipse($clinit_DatapathGraphics());
    $drawControlSignalVals(($clinit_ControlUnitConfiguration() , RRM));
  }
  $drawStringsInit_0(true, true, true);
}

function $drawDatapathStore(){
  $drawDataWiresStore();
  $drawControlSignals_0();
  drawCompRect_0(true, true);
  drawCompRect_0(false, true);
  drawCompRect_0(false, true);
  drawCompRect_0(true, false);
  drawALU(true);
  drawALU(false);
  drawALU(true);
  drawMux(true, false);
  drawMux(false, true);
  drawMux(false, true);
  drawMux(false, false);
  $clinit_DatapathGraphics();
  drawEllipse();
  drawEllipse();
  $drawFlags(false, false);
  drawAndGateHorizontal($clinit_DatapathGraphics());
  drawAndGateHorizontal($clinit_DatapathGraphics());
  drawOrGateHorizontal(BRANCH_OR_COORDS_0[0], BRANCH_OR_DIMENSIONS_0[1], $clinit_DatapathGraphics());
  drawEllipse($clinit_DatapathGraphics());
  drawEllipse($clinit_DatapathGraphics());
  $drawStringsInit_0(true, true, false);
  $drawControlSignalVals(($clinit_ControlUnitConfiguration() , RM_STORE));
}

function $drawFlagAnd_BranchOR(){
  $clinit_DatapathGraphics();
  drawHorizontalSegment(false, false);
  drawVerticalSegment(false, false);
  drawHorizontalSegment(false, false);
}

function $drawFlagBranch(){
  $clinit_DatapathGraphics();
  drawHorizontalSegment(($getEllipseXIntersect(CONTROL_COORDS_0[0], CONTROL_COORDS_0[1] + CONTROL_DIMENSIONS_0[1] / 2 - CONTROL_COORDS_0[1] - 2.5 - 2 * CONTROL_PADDING, CONTROL_DIMENSIONS_0[0] / 2, CONTROL_DIMENSIONS_0[1] / 2) , false), false);
  drawVerticalSegment(false, false);
  drawHorizontalSegment(false, false);
}

function $drawFlagWrite(){
  $clinit_DatapathGraphics();
  drawHorizontalSegment(($getEllipseXIntersect(CONTROL_COORDS_0[0], CONTROL_COORDS_0[1] + CONTROL_DIMENSIONS_0[1] / 2 - CONTROL_COORDS_0[1] - 2.5 - 7 * CONTROL_PADDING, CONTROL_DIMENSIONS_0[0] / 2, CONTROL_DIMENSIONS_0[1] / 2) , false), false);
  drawVerticalSegment(false, false);
}

function $drawFlag_FlagAnd(){
  $clinit_DatapathGraphics();
  drawHorizontalSegment(false, false);
}

function $drawFlag_TXT(){
  null.nullMethod();
  null.nullMethod(FLAGS_COORDS_0[0] + FLAGS_DIMENSIONS_0[0] / 8 - null.nullMethod() / 2);
  null.nullMethod();
  null.nullMethod(FLAGS_COORDS_0[0] + 3 * FLAGS_DIMENSIONS_0[0] / 8 - null.nullMethod() / 2);
  null.nullMethod();
  null.nullMethod(FLAGS_COORDS_0[0] + 5 * FLAGS_DIMENSIONS_0[0] / 8 - null.nullMethod() / 2);
  null.nullMethod();
  null.nullMethod(FLAGS_COORDS_0[0] + 7 * FLAGS_DIMENSIONS_0[0] / 8 - null.nullMethod() / 2);
}

function $drawFlags(highlightWrite, highlightRead){
  drawCompRect_0(highlightWrite, highlightRead);
  drawCompRect_0(highlightWrite, highlightRead);
  drawCompRect_0(highlightWrite, highlightRead);
  drawCompRect_0(highlightWrite, highlightRead);
}

function $drawInsMem_ALUControl(){
  $clinit_DatapathGraphics();
  drawHorizontalSegment(false, true);
  drawVerticalSegment(false, false);
  drawHorizontalSegment(false, true);
  drawVerticalSegment(false, false);
  drawHorizontalSegment(false, false);
  drawVerticalSegment(false, false);
  drawRightArrow(false);
}

function $drawInsMem_Control(){
  $clinit_DatapathGraphics();
  drawHorizontalSegment(false, true);
  drawVerticalSegment(false, false);
  drawRightArrow(false);
}

function $drawInsMem_MuxReg2Loc1(){
  $clinit_DatapathGraphics();
  drawHorizontalSegment(false, true);
  drawVerticalSegment(false, false);
  drawHorizontalSegment(true, false);
  drawVerticalSegment(true, false);
  drawRightArrow(false);
}

function $drawInsMem_MuxReg2Loc2(){
  $clinit_DatapathGraphics();
  drawHorizontalSegment(false, true);
  drawVerticalSegment(false, true);
  drawRightArrow(false);
}

function $drawInsMem_RegFileRead1(){
  $clinit_DatapathGraphics();
  drawHorizontalSegment(false, true);
  drawVerticalSegment(false, true);
  drawRightArrow(false);
}

function $drawInsMem_RegFileWrite(){
  $clinit_DatapathGraphics();
  drawHorizontalSegment(false, true);
  drawVerticalSegment(true, true);
  drawRightArrow(false);
}

function $drawInsMem_SignExtend(){
  $clinit_DatapathGraphics();
  drawHorizontalSegment(false, true);
  drawVerticalSegment(false, false);
  drawRightArrow(false);
  drawDiagSlash();
}

function $drawInsMem_TXT(){
  null.nullMethod();
  null.nullMethod(INS_MEM_COORDS_0[0] + INS_MEM_DIMENSIONS_0[0] / 2 - null.nullMethod() / 2);
  null.nullMethod();
  null.nullMethod(INS_MEM_COORDS_0[0] + INS_MEM_DIMENSIONS_0[0] / 2 - null.nullMethod() / 2);
}

function $drawInstructionFields_TXT(){
  null.nullMethod();
  null.nullMethod(INS_MEM_COORDS_0[0] + INS_MEM_DIMENSIONS_0[0] - 4 - null.nullMethod());
  null.nullMethod();
  null.nullMethod(INS_MEM_COORDS_0[0] + INS_MEM_DIMENSIONS_0[0] - 4 - null.nullMethod());
  null.nullMethod();
  null.nullMethod();
  null.nullMethod();
  null.nullMethod();
  null.nullMethod();
  null.nullMethod();
}

function $drawInstructionString(fields){
  var f0Width, i, xPos;
  xPos = INSTRUCTION_TEXT_COORDS[0];
  null.nullMethod();
  null.nullMethod($clinit_DatapathGraphics());
  null.nullMethod();
  for (i = 0; i < fields.length; i++) {
    null.nullMethod();
    null.nullMethod($clinit_DatapathGraphics());
    null.nullMethod();
    f0Width = null.nullMethod();
    null.nullMethod();
    null.nullMethod();
    null.nullMethod($clinit_DatapathGraphics());
    null.nullMethod((xPos + xPos + f0Width) / 2 - null.nullMethod() / 2);
    xPos += f0Width + 7.5;
  }
}

function $drawInstructionTextRISI(ins){
  var fields, instruction, shift_0;
  shift_0 = '';
  switch (ins.args[2]) {
    case 0:
      shift_0 = '00';
      break;
    case 16:
      shift_0 = '01';
      break;
    case 32:
      shift_0 = '10';
      break;
    case 48:
      shift_0 = '11';
  }
  instruction = new StringBuilder('');
  $append_0(instruction, ins.mnemonic.nameUpper + '   ');
  $append_0(instruction, $getRegString(ins.args[0]) + ', ');
  $append_0(instruction, '#' + ins.args[1] + ', LSL');
  $append_0(instruction, '#' + ins.args[2]);
  fields = initDims(Ljava_lang_String_2_classLit, [$intern_5, $intern_6], [32, 2], 4, [3, 2], 2);
  fields[0][0] = ins.mnemonic.opcode + shift_0;
  fields[0][1] = 'Opcode';
  fields[1][0] = $getImmBinary(ins.args[1], 16, false);
  fields[1][1] = 'MOV_immediate';
  fields[2][0] = $getRegBinary(ins.args[0]);
  fields[2][1] = 'Rd';
  $drawInstructionString(fields);
}

function $drawInstructionTextRM(ins){
  var fields, instruction;
  instruction = new StringBuilder('');
  $append_0(instruction, ins.mnemonic.nameUpper + '   ');
  $append_0(instruction, $getRegString(ins.args[0]) + ', [');
  $append_0(instruction, $getRegString(ins.args[1]) + ', ');
  $append_0(instruction, '#' + ins.args[2] + ']');
  fields = initDims(Ljava_lang_String_2_classLit, [$intern_5, $intern_6], [32, 2], 4, [5, 2], 2);
  fields[0][0] = ins.mnemonic.opcode;
  fields[0][1] = 'Opcode';
  fields[1][0] = $getImmBinary(ins.args[2], 12, true);
  fields[1][1] = 'DT_address';
  fields[2][0] = '00';
  fields[2][1] = 'op2';
  fields[3][0] = $getRegBinary(ins.args[1]);
  fields[3][1] = 'Rn';
  fields[4][0] = $getRegBinary(ins.args[0]);
  fields[4][1] = 'Rt';
  $drawInstructionString(fields);
}

function $drawMemRead(){
  $clinit_DatapathGraphics();
  drawHorizontalSegment(($getEllipseXIntersect(CONTROL_COORDS_0[0], CONTROL_COORDS_0[1] + CONTROL_DIMENSIONS_0[1] / 2 - CONTROL_COORDS_0[1] - 2.5 - 4 * CONTROL_PADDING, CONTROL_DIMENSIONS_0[0] / 2, CONTROL_DIMENSIONS_0[1] / 2) , false), false);
  drawVerticalSegment(false, false);
  drawHorizontalSegment(false, false);
  drawVerticalSegment(false, false);
}

function $drawMemToReg(){
  $clinit_DatapathGraphics();
  drawHorizontalSegment(($getEllipseXIntersect(CONTROL_COORDS_0[0], CONTROL_COORDS_0[1] + CONTROL_DIMENSIONS_0[1] / 2 - CONTROL_COORDS_0[1] - 2.5 - 5 * CONTROL_PADDING, CONTROL_DIMENSIONS_0[0] / 2, CONTROL_DIMENSIONS_0[1] / 2) , false), false);
  drawVerticalSegment(false, false);
}

function $drawMemWrite(){
  $clinit_DatapathGraphics();
  drawHorizontalSegment(($getEllipseXIntersect(CONTROL_COORDS_0[0], CONTROL_COORDS_0[1] + CONTROL_DIMENSIONS_0[1] / 2 - CONTROL_COORDS_0[1] - 2.5 - 6 * CONTROL_PADDING, CONTROL_DIMENSIONS_0[0] / 2, CONTROL_DIMENSIONS_0[1] / 2) , false), false);
  drawVerticalSegment(false, false);
}

function $drawMuxPC_PC_0(){
  $clinit_DatapathGraphics();
  drawHorizontalSegment(false, false);
  drawVerticalSegment(false, false);
  drawHorizontalSegment(false, false);
  drawVerticalSegment(false, false);
  drawRightArrow(false);
}

function $drawMuxReadMemData_RegFile(){
  $clinit_DatapathGraphics();
  drawHorizontalSegment(false, false);
  drawVerticalSegment(false, false);
  drawHorizontalSegment(false, false);
  drawVerticalSegment(false, false);
  drawRightArrow(false);
}

function $drawMuxReadRegData_ALUMain_0(){
  drawRightArrow(false);
}

function $drawMuxReg2Loc_RegFileRead2_0(){
  drawRightArrow(false);
}

function $drawMux_TXT_0(muxCoords, muxDimensions){
  null.nullMethod();
  null.nullMethod(muxCoords[0] + muxDimensions[0] / 2 - null.nullMethod() / 2);
  null.nullMethod();
  null.nullMethod(muxCoords[0] + muxDimensions[0] / 2 - null.nullMethod() / 2);
  null.nullMethod();
  null.nullMethod(muxCoords[0] + muxDimensions[0] / 2 - null.nullMethod() / 2);
  null.nullMethod();
  null.nullMethod();
  null.nullMethod(muxCoords[0] + muxDimensions[0] / 2 - null.nullMethod() / 2);
  null.nullMethod();
  null.nullMethod(muxCoords[0] + muxDimensions[0] / 2 - null.nullMethod() / 2);
  null.nullMethod();
}

function $drawPC_ALUBranch(){
  $clinit_DatapathGraphics();
  drawHorizontalSegment(false, true);
  drawVerticalSegment(true, false);
  drawHorizontalSegment(true, false);
  drawVerticalSegment(false, false);
  drawRightArrow(false);
}

function $drawPC_ALUPC_0(){
  drawRightArrow(false);
  $clinit_DatapathGraphics();
  drawHorizontalSegment(false, true);
  drawVerticalSegment(true, false);
}

function $drawPC_InsMem_0(){
  drawRightArrow(false);
}

function $drawReadData1_TXT(){
  null.nullMethod();
  null.nullMethod(REG_FILE_COORDS_0[0] + REG_FILE_DIMENSIONS_0[0] - 4 - null.nullMethod());
  null.nullMethod();
  null.nullMethod(REG_FILE_COORDS_0[0] + REG_FILE_DIMENSIONS_0[0] - 4 - null.nullMethod());
}

function $drawReadData2_TXT(){
  null.nullMethod();
  null.nullMethod(REG_FILE_COORDS_0[0] + REG_FILE_DIMENSIONS_0[0] - 4 - null.nullMethod());
  null.nullMethod();
  null.nullMethod(REG_FILE_COORDS_0[0] + REG_FILE_DIMENSIONS_0[0] - 4 - null.nullMethod());
}

function $drawReg2Loc(){
  $clinit_DatapathGraphics();
  drawHorizontalSegment(($getEllipseXIntersect(CONTROL_COORDS_0[0], CONTROL_COORDS_0[1] + CONTROL_DIMENSIONS_0[1] / 2 - CONTROL_COORDS_0[1] - 2.5, CONTROL_DIMENSIONS_0[0] / 2, CONTROL_DIMENSIONS_0[1] / 2) , false), false);
  drawVerticalSegment(false, false);
  drawHorizontalSegment(false, false);
  drawVerticalSegment(false, false);
  drawHorizontalSegment(false, false);
  drawVerticalSegment(false, false);
}

function $drawRegFile_ALUMain(){
  drawRightArrow(false);
}

function $drawRegFile_DataMem(){
  $clinit_DatapathGraphics();
  drawHorizontalSegment(false, false);
  drawVerticalSegment(false, true);
  drawRightArrow(false);
}

function $drawRegFile_MuxReadRegData(){
  drawRightArrow(false);
}

function $drawRegWrite(){
  $clinit_DatapathGraphics();
  drawHorizontalSegment(($getEllipseXIntersect(CONTROL_COORDS_0[0], CONTROL_COORDS_0[1] + CONTROL_DIMENSIONS_0[1] / 2 - CONTROL_COORDS_0[1] - 2.5 - 10 * CONTROL_PADDING, CONTROL_DIMENSIONS_0[0] / 2, CONTROL_DIMENSIONS_0[1] / 2) , false), false);
  drawVerticalSegment(false, false);
}

function $drawShiftLeft2_ALUBranch_0(){
  drawRightArrow(false);
}

function $drawShiftLeft2_TXT(){
  null.nullMethod();
  null.nullMethod(SHIFT_LEFT2_COORDS_0[0] + SHIFT_LEFT2_DIMENSIONS_0[0] / 2 - null.nullMethod() / 2);
  null.nullMethod();
  null.nullMethod(SHIFT_LEFT2_COORDS_0[0] + SHIFT_LEFT2_DIMENSIONS_0[0] / 2 - null.nullMethod() / 2);
}

function $drawSignExtend_MuxReadRegData(){
  $clinit_DatapathGraphics();
  drawHorizontalSegment(false, false);
  drawVerticalSegment(false, false);
  drawRightArrow(true);
  drawDiagSlash();
}

function $drawSignExtend_ShiftLeft2_0(){
  $clinit_DatapathGraphics();
  drawHorizontalSegment(false, false);
  drawVerticalSegment(false, false);
  drawRightArrow(false);
  drawDiagSlash();
}

function $drawSignExtend_TXT(){
  null.nullMethod();
  null.nullMethod(SIGN_EXTEND_COORDS_0[0] + SIGN_EXTEND_DIMENSIONS_0[0] / 2 - null.nullMethod() / 2);
  null.nullMethod();
  null.nullMethod(SIGN_EXTEND_COORDS_0[0] + SIGN_EXTEND_DIMENSIONS_0[0] / 2 - null.nullMethod() / 2);
}

function $drawStringsInit_0(signExtend, zero, stxr){
  null.nullMethod($clinit_DatapathGraphics());
  null.nullMethod();
  null.nullMethod();
  null.nullMethod(PC_COORDS_0[0] + PC_DIMENSIONS_0[0] / 2 - null.nullMethod() / 2);
  null.nullMethod();
  null.nullMethod(ALU_PC_COORDS_0[0] + 3 * ALU_PC_DIMENSIONS_0[0] / 5 - null.nullMethod() / 2);
  $drawInsMem_TXT();
  $drawMux_TXT_0(MUX_REG2LOC_COORDS_0, MUX_REG2LOC_DIMENSIONS_0);
  null.nullMethod();
  null.nullMethod(REG_FILE_COORDS_0[0] + 2 * REG_FILE_DIMENSIONS_0[0] / 3 - null.nullMethod() / 2);
  signExtend?$drawSignExtend_TXT():(null.nullMethod() , null.nullMethod(SIGN_EXTEND_COORDS_0[0] + SIGN_EXTEND_DIMENSIONS_0[0] / 2 - null.nullMethod() / 2));
  $drawShiftLeft2_TXT();
  $drawMux_TXT_0(MUX_READ_REG_COORDS_0, MUX_READ_REG_DIMENSIONS_0);
  null.nullMethod();
  null.nullMethod(ALU_MAIN_COORDS_0[0] + 2 * ALU_MAIN_DIMENSIONS_0[0] / 5 + 2.5 - null.nullMethod() / 2);
  $drawFlag_TXT();
  null.nullMethod();
  null.nullMethod(ALU_BRANCH_COORDS_0[0] + 2 * ALU_BRANCH_DIMENSIONS_0[0] / 5 + 2.5 - null.nullMethod() / 2);
  $drawDataMem_TXT();
  $drawMux_TXT_0(MUX_READ_DATA_MEM_COORDS_0, MUX_READ_DATA_MEM_DIMENSIONS_0);
  $drawMux_TXT_0(MUX_PC_COORDS_0, MUX_PC_DIMENSIONS_0);
  null.nullMethod();
  null.nullMethod();
  null.nullMethod(PC_PCALU_VERTICAL_X + (ALU_PC_COORDS_0[0] - PC_PCALU_VERTICAL_X) / 2 - null.nullMethod() / 2);
  null.nullMethod();
  null.nullMethod(REG_FILE_COORDS_0[0] + (SIGN_EXTEND_COORDS_0[0] - REG_FILE_COORDS_0[0]) / 2 - 3 * null.nullMethod() / 4);
  null.nullMethod();
  null.nullMethod(SIGN_EXTEND_COORDS_0[0] + SIGN_EXTEND_DIMENSIONS_0[0] + (SIGN_EXTEND_COORDS_0[0] - REG_FILE_COORDS_0[0]) / 2 - 3 * null.nullMethod() / 4);
  null.nullMethod();
  $drawInstructionFields_TXT();
  null.nullMethod();
  null.nullMethod();
  null.nullMethod();
  null.nullMethod();
  null.nullMethod();
  null.nullMethod();
  null.nullMethod();
  null.nullMethod();
  null.nullMethod();
  null.nullMethod();
  $drawReadData1_TXT();
  $drawReadData2_TXT();
  null.nullMethod();
  null.nullMethod();
  null.nullMethod();
  $drawDataMemReadData_TXT(stxr);
  null.nullMethod($clinit_DatapathGraphics());
  null.nullMethod();
  null.nullMethod();
  null.nullMethod(CONTROL_COORDS_0[0] + CONTROL_DIMENSIONS_0[0] / 2 - null.nullMethod() / 2);
  $drawALUControl_TXT();
  null.nullMethod();
  null.nullMethod();
  null.nullMethod();
  null.nullMethod();
  null.nullMethod();
  null.nullMethod();
  null.nullMethod();
  null.nullMethod();
  null.nullMethod();
  null.nullMethod();
  null.nullMethod();
  null.nullMethod();
  $drawALUZero_TXT(zero);
}

function $drawUnconditionalBranch(){
  $clinit_DatapathGraphics();
  drawHorizontalSegment(($getEllipseXIntersect(CONTROL_COORDS_0[0], CONTROL_COORDS_0[1] + CONTROL_DIMENSIONS_0[1] / 2 - CONTROL_COORDS_0[1] - 2.5 - CONTROL_PADDING, CONTROL_DIMENSIONS_0[0] / 2, CONTROL_DIMENSIONS_0[1] / 2) , false), false);
}

function $drawZeroAnd_BranchOR(){
  $clinit_DatapathGraphics();
  drawHorizontalSegment(false, false);
  drawVerticalSegment(false, false);
  drawHorizontalSegment(false, false);
}

function $drawZeroBranch(){
  $clinit_DatapathGraphics();
  drawHorizontalSegment(($getEllipseXIntersect(CONTROL_COORDS_0[0], CONTROL_COORDS_0[1] + CONTROL_DIMENSIONS_0[1] / 2 - CONTROL_COORDS_0[1] - 2.5 - 3 * CONTROL_PADDING, CONTROL_DIMENSIONS_0[0] / 2, CONTROL_DIMENSIONS_0[1] / 2) , false), false);
  drawVerticalSegment(false, false);
  drawHorizontalSegment(false, false);
}

function $getEllipseXIntersect(xOffset, y_0, xRadius, yRadius){
  return xOffset + xRadius + xRadius * Math.sqrt(1 - y_0 * y_0 / (yRadius * yRadius));
}

function $getImmBinary(value_0, numBits, signed){
  var immBinary;
  if (signed) {
    if (value_0 < 0) {
      immBinary = toUnsignedRadixString(value_0 & 268435455, 2);
      while (immBinary.length > numBits) {
        immBinary = __substr(immBinary, 1, immBinary.length - 1);
      }
      return immBinary;
    }
  }
  immBinary = toUnsignedRadixString(value_0, 2);
  while (immBinary.length < numBits) {
    immBinary = '0' + immBinary;
  }
  return immBinary;
}

function $getRegBinary(regNum){
  var regBinary;
  regBinary = toUnsignedRadixString(regNum, 2);
  while (regBinary.length < 5) {
    regBinary = '0' + regBinary;
  }
  return regBinary;
}

function $getRegString(regNum){
  switch (regNum) {
    case 31:
      return 'XZR';
    case 30:
      return 'LR';
    case 29:
      return 'FP';
    case 28:
      return 'SP';
    default:return 'X' + regNum;
  }
}

function $updateDatapath(ins, branchTaken, stxrSucceed, instructionIndex, label_0){
  var m, instruction, fields, instruction_0, fields_0, instruction_1, fields_1, instruction_2, fields_2, instruction_3, fields_3, instruction_4, fields_4;
  null.nullMethod();
  m = ins.mnemonic;
  switch (m.type_0.ordinal) {
    case 10:
      $drawDatapathRRR(m == ($clinit_Mnemonic() , ADDS) || m == SUBS || m == ANDS);
      instruction = new StringBuilder('');
      $append_0(instruction, ins.mnemonic.nameUpper + '   ');
      $append_0(instruction, $getRegString(ins.args[0]) + ', ');
      $append_0(instruction, $getRegString(ins.args[1]) + ', ');
      $append_0(instruction, $getRegString(ins.args[2]));
      fields = initDims(Ljava_lang_String_2_classLit, [$intern_5, $intern_6], [32, 2], 4, [5, 2], 2);
      fields[0][0] = ins.mnemonic.opcode;
      fields[0][1] = 'Opcode';
      fields[1][0] = $getRegBinary(ins.args[2]);
      fields[1][1] = 'Rm';
      fields[2][0] = $getImmBinary(0, 6, false);
      fields[2][1] = 'shamt';
      fields[3][0] = $getRegBinary(ins.args[1]);
      fields[3][1] = 'Rn';
      fields[4][0] = $getRegBinary(ins.args[0]);
      fields[4][1] = 'Rd';
      $drawInstructionString(fields);
      break;
    case 9:
      $drawDatapathRRI(m == ($clinit_Mnemonic() , ADDIS) || m == SUBIS || m == ANDIS);
      m == LSL || m == LSR?(instruction_0 = new StringBuilder('') , $append_0(instruction_0, ins.mnemonic.nameUpper + '   ') , $append_0(instruction_0, $getRegString(ins.args[0]) + ', ') , $append_0(instruction_0, $getRegString(ins.args[1]) + ', ') , $append_0(instruction_0, '#' + ins.args[2]) , fields_0 = initDims(Ljava_lang_String_2_classLit, [$intern_5, $intern_6], [32, 2], 4, [5, 2], 2) , fields_0[0][0] = ins.mnemonic.opcode , fields_0[0][1] = 'Opcode' , fields_0[1][0] = $getImmBinary(0, 5, false) , fields_0[1][1] = 'Rm' , fields_0[2][0] = $getImmBinary(ins.args[2], 6, false) , fields_0[2][1] = 'shamt' , fields_0[3][0] = $getRegBinary(ins.args[1]) , fields_0[3][1] = 'Rn' , fields_0[4][0] = $getRegBinary(ins.args[0]) , fields_0[4][1] = 'Rd' , $drawInstructionString(fields_0) , undefined):(instruction_1 = new StringBuilder('') , $append_0(instruction_1, ins.mnemonic.nameUpper + '   ') , $append_0(instruction_1, $getRegString(ins.args[0]) + ', ') , $append_0(instruction_1, $getRegString(ins.args[1]) + ', ') , $append_0(instruction_1, '#' + ins.args[2]) , fields_1 = initDims(Ljava_lang_String_2_classLit, [$intern_5, $intern_6], [32, 2], 4, [4, 2], 2) , fields_1[0][0] = ins.mnemonic.opcode , fields_1[0][1] = 'Opcode' , fields_1[1][0] = $getImmBinary(ins.args[2], 12, false) , fields_1[1][1] = 'ALU_immediate' , fields_1[2][0] = $getRegBinary(ins.args[1]) , fields_1[2][1] = 'Rn' , fields_1[3][0] = $getRegBinary(ins.args[0]) , fields_1[3][1] = 'Rd' , $drawInstructionString(fields_1) , undefined);
      break;
    case 6:
      $drawDatapathRRI(false);
      $drawInstructionTextRISI(ins);
      break;
    case 11:
      if (m == ($clinit_Mnemonic() , STUR) || m == STURW || m == STURH || m == STURB) {
        $drawDatapathStore();
        $drawInstructionTextRM(ins);
      }
       else {
        $drawDatapathLoad();
        $drawInstructionTextRM(ins);
      }

      break;
    case 12:
      $drawDatapathSTXR(stxrSucceed);
      instruction_2 = new StringBuilder('');
      $append_0(instruction_2, ins.mnemonic.nameUpper + '   ');
      $append_0(instruction_2, $getRegString(ins.args[0]) + ', ');
      $append_0(instruction_2, $getRegString(ins.args[1]) + ', [');
      $append_0(instruction_2, $getRegString(ins.args[2]) + ', ');
      $append_0(instruction_2, '#' + ins.args[3] + ']');
      fields_2 = initDims(Ljava_lang_String_2_classLit, [$intern_5, $intern_6], [32, 2], 4, [5, 2], 2);
      fields_2[0][0] = ins.mnemonic.opcode;
      fields_2[0][1] = 'Opcode';
      fields_2[1][0] = $getRegBinary(ins.args[0]);
      fields_2[1][1] = 'Rs';
      fields_2[2][0] = $getImmBinary(31, 6, false);
      fields_2[2][1] = 'Rt2';
      fields_2[3][0] = $getRegBinary(ins.args[2]);
      fields_2[3][1] = 'Rn';
      fields_2[4][0] = $getRegBinary(ins.args[1]);
      fields_2[4][1] = 'Rt';
      $drawInstructionString(fields_2);
      break;
    case 14:
      $drawDatapathCB(branchTaken, m);
      instruction_3 = new StringBuilder('');
      $append_0(instruction_3, ins.mnemonic.nameUpper + '   ');
      $append_0(instruction_3, $getRegString(ins.args[0]) + ', ');
      instruction_3.string += label_0;
      fields_3 = initDims(Ljava_lang_String_2_classLit, [$intern_5, $intern_6], [32, 2], 4, [3, 2], 2);
      fields_3[0][0] = ins.mnemonic.opcode;
      fields_3[0][1] = 'Opcode';
      fields_3[1][0] = $getImmBinary(ins.args[1] - instructionIndex, 19, true);
      fields_3[1][1] = 'COND_BR_address';
      fields_3[2][0] = $getRegBinary(ins.args[0]);
      fields_3[2][1] = 'Rt';
      $drawInstructionString(fields_3);
      break;
    case 13:
      m == ($clinit_Mnemonic() , B)?($drawDataWiresB() , $drawControlSignals_0() , drawCompRect_0(true, true) , drawCompRect_0(false, true) , drawCompRect_0(false, false) , drawCompRect_0(false, false) , drawALU(false) , drawALU(true) , drawALU(false) , drawMux(false, true) , drawMux(false, false) , drawMux(false, false) , drawMux(false, false) , $clinit_DatapathGraphics() , drawEllipse() , $clinit_DatapathGraphics() , drawEllipse() , $drawFlags(false, false) , drawAndGateHorizontal($clinit_DatapathGraphics()) , drawAndGateHorizontal($clinit_DatapathGraphics()) , drawOrGateHorizontal(BRANCH_OR_COORDS_0[0], BRANCH_OR_DIMENSIONS_0[1], $clinit_DatapathGraphics()) , drawEllipse($clinit_DatapathGraphics()) , drawEllipse($clinit_DatapathGraphics()) , undefined , $drawControlSignalVals(($clinit_ControlUnitConfiguration() , L)) , null.nullMethod($clinit_DatapathGraphics()) , null.nullMethod() , null.nullMethod() , null.nullMethod(PC_COORDS_0[0] + PC_DIMENSIONS_0[0] / 2 - null.nullMethod() / 2) , null.nullMethod() , null.nullMethod(ALU_PC_COORDS_0[0] + 3 * ALU_PC_DIMENSIONS_0[0] / 5 - null.nullMethod() / 2) , $drawInsMem_TXT() , $drawMux_TXT_0(MUX_REG2LOC_COORDS_0, MUX_REG2LOC_DIMENSIONS_0) , null.nullMethod() , null.nullMethod(REG_FILE_COORDS_0[0] + 2 * REG_FILE_DIMENSIONS_0[0] / 3 - null.nullMethod() / 2) , $drawSignExtend_TXT() , $drawShiftLeft2_TXT() , $drawMux_TXT_0(MUX_READ_REG_COORDS_0, MUX_READ_REG_DIMENSIONS_0) , null.nullMethod() , null.nullMethod(ALU_MAIN_COORDS_0[0] + 2 * ALU_MAIN_DIMENSIONS_0[0] / 5 + 2.5 - null.nullMethod() / 2) , $drawFlag_TXT() , null.nullMethod() , null.nullMethod(ALU_BRANCH_COORDS_0[0] + 2 * ALU_BRANCH_DIMENSIONS_0[0] / 5 + 2.5 - null.nullMethod() / 2) , $drawDataMem_TXT() , $drawMux_TXT_0(MUX_READ_DATA_MEM_COORDS_0, MUX_READ_DATA_MEM_DIMENSIONS_0) , $drawMux_TXT_0(MUX_PC_COORDS_0, MUX_PC_DIMENSIONS_0) , null.nullMethod() , null.nullMethod() , null.nullMethod(PC_PCALU_VERTICAL_X + (ALU_PC_COORDS_0[0] - PC_PCALU_VERTICAL_X) / 2 - null.nullMethod() / 2) , null.nullMethod() , null.nullMethod(REG_FILE_COORDS_0[0] + (SIGN_EXTEND_COORDS_0[0] - REG_FILE_COORDS_0[0]) / 2 - 3 * null.nullMethod() / 4) , null.nullMethod() , null.nullMethod(SIGN_EXTEND_COORDS_0[0] + SIGN_EXTEND_DIMENSIONS_0[0] + (SIGN_EXTEND_COORDS_0[0] - REG_FILE_COORDS_0[0]) / 2 - 3 * null.nullMethod() / 4) , null.nullMethod() , $drawInstructionFields_TXT() , null.nullMethod() , null.nullMethod() , null.nullMethod() , null.nullMethod() , null.nullMethod() , null.nullMethod() , null.nullMethod() , null.nullMethod() , null.nullMethod() , null.nullMethod() , $drawReadData1_TXT() , $drawReadData2_TXT() , null.nullMethod() , null.nullMethod() , null.nullMethod() , $drawDataMemReadData_TXT(false) , null.nullMethod($clinit_DatapathGraphics()) , null.nullMethod() , null.nullMethod() , null.nullMethod(CONTROL_COORDS_0[0] + CONTROL_DIMENSIONS_0[0] / 2 - null.nullMethod() / 2) , $drawALUControl_TXT() , null.nullMethod() , null.nullMethod() , null.nullMethod() , null.nullMethod() , null.nullMethod() , null.nullMethod() , null.nullMethod() , null.nullMethod() , null.nullMethod() , null.nullMethod() , null.nullMethod() , null.nullMethod() , $drawALUZero_TXT(true)):$drawDatapathBcond(branchTaken);
      instruction_4 = new StringBuilder('');
      $append_0(instruction_4, ins.mnemonic.nameUpper + '   ');
      instruction_4.string += label_0;
      fields_4 = initDims(Ljava_lang_String_2_classLit, [$intern_5, $intern_6], [32, 2], 4, [2, 2], 2);
      fields_4[0][0] = ins.mnemonic.opcode;
      fields_4[0][1] = 'Opcode';
      fields_4[1][0] = $getImmBinary(ins.args[0] - instructionIndex, 26, true);
      fields_4[1][1] = 'BR_address';
      $drawInstructionString(fields_4);
  }
}

function SingleCycleVis(canvasWidth, canvasHeight){
  $clinit_SingleCycleVis();
  this.canvas = (!detector && (detector = new Canvas$CanvasElementSupportDetectedNo) , null);
  this.canvasWidth = canvasWidth;
  this.canvasHeight = canvasHeight;
  null.nullMethod();
  null.nullMethod();
  null.nullMethod(round_int(this.canvasWidth));
  null.nullMethod(round_int(this.canvasHeight));
  null.nullMethod().nullMethod();
  null.nullMethod();
  null.nullMethod();
  $drawDataWiresInit_0();
  $drawControlSignals_0();
  $drawComponentsInit_0();
  $drawStringsInit_0(true, true, false);
}

defineClass(108, 1, {}, SingleCycleVis);
_.canvasHeight = 0;
_.canvasWidth = 0;
var ALU_BRANCH_COORDS_0, ALU_BRANCH_DIMENSIONS_0, ALU_CONTROL_COORDS_0, ALU_CONTROL_DIMENSIONS_0, ALU_MAIN_COORDS_0, ALU_MAIN_DIMENSIONS_0, ALU_PC_COORDS_0, ALU_PC_DIMENSIONS_0, BRANCH_OR_COORDS_0, BRANCH_OR_DIMENSIONS_0, CONTROL_COORDS_0, CONTROL_DIMENSIONS_0, CONTROL_PADDING = 0, DATA_MEM_COORDS_0, DATA_MEM_DIMENSIONS_0, FLAGS_COORDS_0, FLAGS_DIMENSIONS_0, FLAG_AND_COORDS, FLAG_AND_DIMENSIONS, INSTRUCTION_TEXT_COORDS, INS_MEM_COORDS_0, INS_MEM_DIMENSIONS_0, MUX_PC_COORDS_0, MUX_PC_DIMENSIONS_0, MUX_READ_DATA_MEM_COORDS_0, MUX_READ_DATA_MEM_DIMENSIONS_0, MUX_READ_REG_COORDS_0, MUX_READ_REG_DIMENSIONS_0, MUX_REG2LOC_COORDS_0, MUX_REG2LOC_DIMENSIONS_0, PC_COORDS_0, PC_DIMENSIONS_0, PC_PCALU_VERTICAL_X = 0, REG_FILE_COORDS_0, REG_FILE_DIMENSIONS_0, SHIFT_LEFT2_COORDS_0, SHIFT_LEFT2_DIMENSIONS_0, SIGN_EXTEND_COORDS_0, SIGN_EXTEND_DIMENSIONS_0, ZERO_AND_COORDS_0, ZERO_AND_DIMENSIONS;
var Lcom_arm_legv8simulator_client_SingleCycleVis_2_classLit = createForClass('com.arm.legv8simulator.client', 'SingleCycleVis', 108);
function $buildControlPanel(this$static){
  var buttonPanel, padding1, padding2, padding3;
  this$static.controlPanel = new HorizontalPanel;
  $setHorizontalAlignment(this$static.controlPanel, ($clinit_HasHorizontalAlignment() , ALIGN_CENTER));
  $setVerticalAlignment(this$static.controlPanel, ($clinit_HasVerticalAlignment() , ALIGN_MIDDLE));
  $setWidth(this$static.controlPanel, '100%');
  $setHeight(this$static.controlPanel, '34px');
  $setStyleName_0(this$static.controlPanel, 'controlPanel', true);
  buttonPanel = new HorizontalPanel;
  $setVerticalAlignment(buttonPanel, ALIGN_MIDDLE);
  $add_0(buttonPanel, this$static.execModesLab);
  $add_0(buttonPanel, this$static.executionModes);
  padding1 = new HorizontalPanel;
  $setPropertyImpl(padding1.element.style, 'width', '45px');
  $add_0(buttonPanel, padding1);
  $add_0(buttonPanel, this$static.assembleButt);
  padding2 = new HorizontalPanel;
  $setPropertyImpl(padding2.element.style, 'width', '40px');
  $add_0(buttonPanel, padding2);
  $add_0(buttonPanel, this$static.executeButt);
  padding3 = new HorizontalPanel;
  $setPropertyImpl(padding3.element.style, 'width', '40px');
  $add_0(buttonPanel, padding3);
  $add_0(buttonPanel, this$static.helpButt);
  $add_0(this$static.controlPanel, buttonPanel);
}

function $buildHelpPage(this$static){
  var arithmetic, condBranch, condCodes, dataTransfer, ex1, ex2, ex3, ex4, help1, help2, help3, help4, help5, help6, instrFormat1, instrFormat2, line1, line10, line11, line12, line13, line14, line15, line16, line17, line18, line19, line2, line3, line4, line5, line6, line7, line8, line9, logical, moreInfo, regTable, sp1, sp2, sp3, sp4, sp5, sp6, space1, space10, space11, space12, space13, space14, space15, space2, space3, space4, space5, space6, space7, space8, space9, testInstr, uncondBranch, wp1, wp2, wp3, wp4, wp5;
  $add_2(this$static.page, this$static.controlPanel);
  !!this$static.contentPanel && $remove_0(this$static.page, this$static.contentPanel);
  this$static.contentPanel = new HorizontalPanel;
  $setHeight(this$static.contentPanel, '100%');
  $setHorizontalAlignment(this$static.contentPanel, ($clinit_HasHorizontalAlignment() , ALIGN_CENTER));
  $setVerticalAlignment(this$static.contentPanel, ($clinit_HasVerticalAlignment() , ALIGN_TOP));
  this$static.writingPanel = new VerticalPanel;
  $setHorizontalAlignment_0(this$static.writingPanel, ALIGN_JUSTIFY);
  $setVerticalAlignment_0(this$static.writingPanel, ALIGN_TOP);
  $add_0(this$static.contentPanel, this$static.writingPanel);
  sp1 = new Image_1('images/space.png');
  help1 = new Label('How to use the simulator');
  setStyleName(help1.element, 'title1Label', true);
  sp2 = new Image_1('images/space.png');
  help2 = new Label('Step 1: Select the execution mode you would like to observe; Single Cycle or Pipeline.');
  wp1 = new Image_1('images/selectModeHelp.jpeg');
  $setPropertyImpl(wp1.element.style, 'width', '600px');
  $setPropertyImpl(wp1.element.style, 'height', '400px');
  sp3 = new Image_1('images/space.png');
  help3 = new Label('Step 2: Enter your assembly code in the text editor.');
  wp2 = new Image_1('images/editorHelp.jpeg');
  $setPropertyImpl(wp2.element.style, 'width', '600px');
  $setPropertyImpl(wp2.element.style, 'height', '400px');
  sp4 = new Image_1('images/space.png');
  help4 = new Label("Step 3: Select the 'Assemble' button; this will check for errors in the assembly code and compile.");
  wp3 = new Image_1('images/assembleHelp.jpeg');
  $setPropertyImpl(wp3.element.style, 'width', '600px');
  $setPropertyImpl(wp3.element.style, 'height', '400px');
  sp5 = new Image_1('images/space.png');
  help5 = new Label("Step 4: Select the 'Execute Instruction' button if there are no errors in your code.");
  wp4 = new Image_1('images/executeHelp.jpeg');
  $setPropertyImpl(wp4.element.style, 'width', '600px');
  $setPropertyImpl(wp4.element.style, 'height', '400px');
  sp6 = new Image_1('images/space.png');
  help6 = new Label('Step 5: View the results by observing the registers, flags and the image of the datapath.');
  wp5 = new Image_1('images/outputHelp.jpeg');
  $setPropertyImpl(wp5.element.style, 'width', '600px');
  $setPropertyImpl(wp5.element.style, 'height', '400px');
  space1 = new Image_1('images/space.png');
  line1 = new Label('Background Information on the LEGv8 architecture');
  setStyleName(line1.element, 'title2Label', true);
  line2 = new Label('LEGv8 is a load/store architecture meaning that data has to be loaded from memory into registers before operations can be performed on it.The LEGv8 architecture has 32 registers, each having size 64 bits.');
  space2 = new Image_1('images/space.png');
  regTable = new Image_1('images/regTable.png');
  $setPropertyImpl(regTable.element.style, 'width', '624px');
  $setPropertyImpl(regTable.element.style, 'height', '325px');
  space3 = new Image_1('images/space.png');
  line3 = new Label("X8 is used by procedures that return a result via a pointer. Registers X16, X17, X28, X29 and X30 have special roles. In these roles they are labelled IP1, IP2, SP, FP, and LR respectively. These registers should only be referred to by their special names when they are being used to store addresses; the special name implies accessing the register as a 64-bit entity. In order to access the memory using an instruction, you must be aware that the Dynamic memory offset is 0x10000000 and the Stack base is 0x7ffffffffc. Thus you should store the value ' 0x10000000' into a register e.g X7 and use this register as the memory base. So memory access is Mem[X7 + 40].");
  line4 = new Label('Arithmetics instructions');
  setStyleName(line4.element, 'arithLabel', true);
  space4 = new Image_1('images/space.png');
  arithmetic = new Image_1('images/arithmetic.png');
  $setPropertyImpl(arithmetic.element.style, 'width', '568px');
  $setPropertyImpl(arithmetic.element.style, 'height', '208px');
  space5 = new Image_1('images/space.png');
  line5 = new Label('Data Transfer');
  setStyleName(line5.element, 'dataLabel', true);
  dataTransfer = new Image_1('images/dataTransfer.png');
  $setPropertyImpl(dataTransfer.element.style, 'width', '600px');
  $setPropertyImpl(dataTransfer.element.style, 'height', '260px');
  space6 = new Image_1('images/space.png');
  line6 = new Label('Logical');
  setStyleName(line6.element, 'logicalLabel', true);
  logical = new Image_1('images/logical.png');
  $setPropertyImpl(logical.element.style, 'width', '595px');
  $setPropertyImpl(logical.element.style, 'height', '254px');
  space7 = new Image_1('images/space.png');
  line7 = new Label('Conditional Branch');
  setStyleName(line7.element, 'condBLabel', true);
  condBranch = new Image_1('images/condBranch.png');
  $setPropertyImpl(condBranch.element.style, 'width', '650px');
  $setPropertyImpl(condBranch.element.style, 'height', '95px');
  space8 = new Image_1('images/space.png');
  line8 = new Label('Unconditional Branch');
  setStyleName(line8.element, 'uncondBLabel', true);
  uncondBranch = new Image_1('images/uncondBranch.png');
  $setPropertyImpl(uncondBranch.element.style, 'width', '479px');
  $setPropertyImpl(uncondBranch.element.style, 'height', '96px');
  space9 = new Image_1('images/space.png');
  line9 = new Label('Condition codes and Flags');
  setStyleName(line9.element, 'condCodesLabel', true);
  condCodes = new Image_1('images/condCodes.png');
  $setPropertyImpl(condCodes.element.style, 'width', '670px');
  $setPropertyImpl(condCodes.element.style, 'height', '233px');
  moreInfo = new Label('Core Instruction Formats');
  setStyleName(moreInfo.element, 'moreInfo', true);
  instrFormat1 = new Image_1('images/instrFormat1.png');
  $setPropertyImpl(instrFormat1.element.style, 'width', '770px');
  $setPropertyImpl(instrFormat1.element.style, 'height', '550px');
  instrFormat2 = new Image_1('images/instrFormat2.png');
  $setPropertyImpl(instrFormat2.element.style, 'width', '770px');
  $setPropertyImpl(instrFormat2.element.style, 'height', '615px');
  space10 = new Image_1('images/space.png');
  line10 = new Label('Test Walkthrough for Pipelined Processor Simulation');
  setStyleName(line10.element, 'title3Label', true);
  testInstr = new Image_1('images/testInstr.png');
  $setPropertyImpl(testInstr.element.style, 'width', '600px');
  $setPropertyImpl(testInstr.element.style, 'height', '400px');
  line11 = new Label("The instructions in the image above were added to the editor and then assembled, ready to be executed. The CPU Log shows the 5 pipeline stages separated by a '|'. So the stages are as follows: Instruction Fetch (IF), Instruction Decode (ID), Execute (EX), Memory Access (MEM), and Write Back (WB). The first instruction 'MOVZ' (Explained in the Data Transfer Instructions) is processed in the IF stage. After this, the second instruction will be processed in the IF stage while the first instruction will move to the ID stage.. and so on.");
  ex1 = new Image_1('images/ex1.png');
  $setPropertyImpl(ex1.element.style, 'width', '660px');
  $setPropertyImpl(ex1.element.style, 'height', '202px');
  space11 = new Image_1('images/space.png');
  line12 = new Label('Something interesting happens when the first arithmetic instrtuction, Subtract, reaches the EX stage.The CPU Log shows the following:');
  ex2 = new Image_1('images/ex2.png');
  $setPropertyImpl(ex2.element.style, 'width', '315px');
  $setPropertyImpl(ex2.element.style, 'height', '190px');
  line13 = new Label("A data hazard occurs due to the data dependencies between the two 'MOVZ' instructions and the 'SUB' instruction. The processor can either stall the pipeline and wait until the data is available or use logic to detect dependencies and then select where to read the operand from. This simulator has been programmed to do the latter.");
  line14 = new Label("Note that 'A' refers to the first operand i.e, the first register you choose to do the operation with; in this case, 'A' is x1. Likewise, 'B' refers to the second operand; in this case x2.");
  setStyleName(line14.element, 'note1', true);
  line15 = new Label("'Data Hazard: EX, forward B' means that the processor forwards the value for x2 from the second MOVZ instruction ( currently in the EX stage) to be used in the subtract instruction. 'Data Hazard: MEM, forward A' means that the processor forwards the value for x1 from the first MOVZ instruction (currently in the MEM stage) to be used in the subtract instruction.");
  space12 = new Image_1('images/space.png');
  line16 = new Label("Another thing to note is the method to store a value to memory. The two required instructions are MOVZ and LSL. Have a look at instruction 5 and 6. This effectively stores the value '0x10000000' which is the Dynamic memory offset into register x27. After this, the store instruction on line 7 accesses memory by going to the memory location specified by the addition of x27 and the immediate value 5. This would effectively be the fifth location of (accessible) memory.");
  space13 = new Image_1('images/space.png');
  line17 = new Label('Again, there is a data hazard as the Add instruction requires x0 (this value is forwarded from the SUB instruction in the EX stage) and x2 (this value is forwarded from the MOVZ instruction in the MEM stage).');
  ex3 = new Image_1('images/ex3.png');
  $setPropertyImpl(ex3.element.style, 'width', '330px');
  $setPropertyImpl(ex3.element.style, 'height', '240px');
  space14 = new Image_1('images/space.png');
  line18 = new Label("The last thing to note for this walkthrough is the an example of a control hazard and pipeline stall. Below, we have a Conditional Branch instruction which will branch if the value in register x6 is equal to zero. The CPU Log shows a line which says 'Control Hazard: Flushing Pipeline'. Note that this does not happen until the instruction is evaluated to be true. Furthermore, there is a data hazard which requires stalling of the pipeline. This is because the new value of register x6 is still being evaluated by the previous SUB instruction. Thus the pipeline is stalled until this value is ready and then the pipeline is flushed when the conditional branch is evaluated to be true.");
  ex4 = new Image_1('images/ex4.png');
  $setPropertyImpl(ex4.element.style, 'width', '295px');
  $setPropertyImpl(ex4.element.style, 'height', '196px');
  space15 = new Image_1('images/space.png');
  line19 = new Label('That concludes this walkthrough. Try out your own tests to check your understanding of both the Single Cycle and Pipelined processors!');
  setStyleName(line19.element, 'endLabel', true);
  $setAutoHorizontalAlignment(line19, ALIGN_CENTER);
  $add_2(this$static.writingPanel, sp1);
  $add_2(this$static.writingPanel, help1);
  $add_2(this$static.writingPanel, sp2);
  $add_2(this$static.writingPanel, help2);
  $add_2(this$static.writingPanel, wp1);
  $add_2(this$static.writingPanel, sp3);
  $add_2(this$static.writingPanel, help3);
  $add_2(this$static.writingPanel, wp2);
  $add_2(this$static.writingPanel, sp4);
  $add_2(this$static.writingPanel, help4);
  $add_2(this$static.writingPanel, wp3);
  $add_2(this$static.writingPanel, sp5);
  $add_2(this$static.writingPanel, help5);
  $add_2(this$static.writingPanel, wp4);
  $add_2(this$static.writingPanel, sp6);
  $add_2(this$static.writingPanel, help6);
  $add_2(this$static.writingPanel, wp5);
  $add_2(this$static.writingPanel, space1);
  $add_2(this$static.writingPanel, line1);
  $add_2(this$static.writingPanel, line2);
  $add_2(this$static.writingPanel, space2);
  $add_2(this$static.writingPanel, regTable);
  $add_2(this$static.writingPanel, space3);
  $add_2(this$static.writingPanel, line3);
  $add_2(this$static.writingPanel, space4);
  $add_2(this$static.writingPanel, line4);
  $add_2(this$static.writingPanel, arithmetic);
  $add_2(this$static.writingPanel, space5);
  $add_2(this$static.writingPanel, line5);
  $add_2(this$static.writingPanel, dataTransfer);
  $add_2(this$static.writingPanel, space6);
  $add_2(this$static.writingPanel, line6);
  $add_2(this$static.writingPanel, logical);
  $add_2(this$static.writingPanel, space7);
  $add_2(this$static.writingPanel, line7);
  $add_2(this$static.writingPanel, condBranch);
  $add_2(this$static.writingPanel, space8);
  $add_2(this$static.writingPanel, line8);
  $add_2(this$static.writingPanel, uncondBranch);
  $add_2(this$static.writingPanel, space9);
  $add_2(this$static.writingPanel, line9);
  $add_2(this$static.writingPanel, condCodes);
  $add_2(this$static.writingPanel, moreInfo);
  $add_2(this$static.writingPanel, instrFormat1);
  $add_2(this$static.writingPanel, instrFormat2);
  $add_2(this$static.writingPanel, space10);
  $add_2(this$static.writingPanel, line10);
  $add_2(this$static.writingPanel, testInstr);
  $add_2(this$static.writingPanel, line11);
  $add_2(this$static.writingPanel, ex1);
  $add_2(this$static.writingPanel, space11);
  $add_2(this$static.writingPanel, line12);
  $add_2(this$static.writingPanel, ex2);
  $add_2(this$static.writingPanel, line13);
  $add_2(this$static.writingPanel, line14);
  $add_2(this$static.writingPanel, line15);
  $add_2(this$static.writingPanel, space12);
  $add_2(this$static.writingPanel, line16);
  $add_2(this$static.writingPanel, space13);
  $add_2(this$static.writingPanel, line17);
  $add_2(this$static.writingPanel, ex3);
  $add_2(this$static.writingPanel, space14);
  $add_2(this$static.writingPanel, line18);
  $add_2(this$static.writingPanel, ex4);
  $add_2(this$static.writingPanel, space15);
  $add_2(this$static.writingPanel, line19);
  $add_2(this$static.page, this$static.contentPanel);
}

function $buildPipelineUI(this$static){
  var datapathWidth, width_0;
  this$static.scDatapath = null;
  $buildVisualisationUI(this$static);
  width_0 = $getClientWidth($doc);
  width_0 > 1700?$setWidth(this$static.editor, '675px'):$setWidth(this$static.editor, $getPropertyInt(this$static.registerPanel.element, 'offsetWidth') + 'px');
  datapathWidth = width_0 - $getPropertyInt(this$static.editorPanel.element, 'offsetWidth') - 20;
  this$static.pDatapath = new PipelineVis(datapathWidth, datapathWidth / 1.432);
  $add_0(this$static.contentPanel, this$static.datapathPanel);
  $add_2(this$static.datapathPanel, this$static.debugPanel);
  $add_2(this$static.datapathPanel, this$static.pDatapath.canvas);
}

function $buildSimulationUI(this$static){
  var editorHeight, padding;
  $add_2(this$static.page, this$static.controlPanel);
  !!this$static.contentPanel && $remove_0(this$static.page, this$static.contentPanel);
  this$static.contentPanel = new HorizontalPanel;
  $setHeight(this$static.contentPanel, '100%');
  $setHorizontalAlignment(this$static.contentPanel, ($clinit_HasHorizontalAlignment() , ALIGN_CENTER));
  $setVerticalAlignment(this$static.contentPanel, ($clinit_HasVerticalAlignment() , ALIGN_TOP));
  $add_0(this$static.contentPanel, this$static.editorPanel);
  editorHeight = $getClientHeight($doc) - $getPropertyInt(this$static.controlPanel.element, 'offsetHeight') - 50 - 30;
  editorHeight > 200?$setHeight(this$static.editor, editorHeight + 'px'):$setHeight(this$static.editor, '200px');
  $setWidth(this$static.editor, '675px');
  padding = new HorizontalPanel;
  $setPropertyImpl(padding.element.style, 'width', '30px');
  $add_0(this$static.contentPanel, padding);
  $add_0(this$static.contentPanel, this$static.registerPanel);
  $resetRegisterPanel(this$static);
  $reset(this$static.cpsrPanel);
  $add_2(this$static.page, this$static.contentPanel);
}

function $buildSingleCycleUI(this$static){
  var datapathWidth, width_0;
  this$static.pDatapath = null;
  $buildVisualisationUI(this$static);
  width_0 = $getClientWidth($doc);
  width_0 > 1700?$setWidth(this$static.editor, '675px'):$setWidth(this$static.editor, $getPropertyInt(this$static.registerPanel.element, 'offsetWidth') + 'px');
  datapathWidth = width_0 - $getPropertyInt(this$static.editorPanel.element, 'offsetWidth') - 20;
  this$static.scDatapath = new SingleCycleVis(datapathWidth, datapathWidth / 1.432);
  $add_2(this$static.datapathPanel, this$static.scDatapath.canvas);
  $add_0(this$static.contentPanel, this$static.datapathPanel);
}

function $buildVisualisationUI(this$static){
  var editorHeight;
  $add_2(this$static.page, this$static.controlPanel);
  !!this$static.contentPanel && $remove_0(this$static.page, this$static.contentPanel);
  this$static.contentPanel = new HorizontalPanel;
  $setSize(this$static.contentPanel);
  $setHorizontalAlignment(this$static.contentPanel, ($clinit_HasHorizontalAlignment() , ALIGN_LEFT));
  $setVerticalAlignment(this$static.contentPanel, ($clinit_HasVerticalAlignment() , ALIGN_TOP));
  $add_2(this$static.page, this$static.contentPanel);
  this$static.leftContentPanel = new VerticalPanel;
  $setHorizontalAlignment_0(this$static.leftContentPanel, ALIGN_CENTER);
  $setVerticalAlignment_0(this$static.leftContentPanel, ALIGN_TOP);
  $add_2(this$static.leftContentPanel, this$static.editorPanel);
  $add_2(this$static.leftContentPanel, this$static.registerPanel);
  $resetRegisterPanel(this$static);
  $reset(this$static.cpsrPanel);
  $add_0(this$static.contentPanel, this$static.leftContentPanel);
  editorHeight = $getClientHeight($doc) - $getPropertyInt(this$static.controlPanel.element, 'offsetHeight') - $getPropertyInt(this$static.registerPanel.element, 'offsetHeight') - 50 - 30;
  editorHeight > 200?$setHeight(this$static.editor, editorHeight + 'px'):$setHeight(this$static.editor, '200px');
  this$static.datapathPanel = new VerticalPanel;
  $setStyleName_0(this$static.datapathPanel, 'datapathPanel', true);
  $setSize(this$static.datapathPanel);
  $setHorizontalAlignment_0(this$static.datapathPanel, ALIGN_LEFT);
}

function $clockPipeline(this$static){
  $clock(this$static.pipelineSim);
  $removeAllMarkers(this$static.editor);
  this$static.pipelineSim.currentLineNumber != -1 && $addMarker(this$static.editor, toJsObject(this$static.pipelineSim.currentLineNumber, 0, this$static.pipelineSim.currentLineNumber, 41), 'ace_selection', ($clinit_AceMarkerType() , FULL_LINE), false);
  $setText_0(this$static.cpuLog, this$static.pipelineSim.pipelineLog.string);
  $updateRegisterLabels(this$static, this$static.pipelineSim);
  $updateFlagLabels(this$static, this$static.pipelineSim);
  this$static.runtimeError = this$static.pipelineSim.runtimeError;
  if (this$static.runtimeError) {
    $setEnabled(this$static.executeButt, false);
    $setError(this$static, this$static.runtimeError.errorMsg, this$static.runtimeError.lineNumber);
    $setAnnotations(this$static.editor);
  }
}

function $executeInstruction(this$static){
  var t;
  $executeInstruction_1(this$static.singleCycleSim);
  $removeAllMarkers(this$static.editor);
  $addMarker(this$static.editor, toJsObject(this$static.singleCycleSim.currentLineNumber, 0, this$static.singleCycleSim.currentLineNumber, 41), 'ace_selection', ($clinit_AceMarkerType() , FULL_LINE), false);
  $setText_0(this$static.cpuLog, this$static.singleCycleSim.cpu.cpuLog.string);
  $updateRegisterLabels(this$static, this$static.singleCycleSim);
  $updateFlagLabels(this$static, this$static.singleCycleSim);
  t = new WebApp$9(this$static);
  $animate(t, t.this$01.singleCycleSim.previousInstruction, t.this$01.singleCycleSim.currentInstruction);
  this$static.runtimeError = this$static.singleCycleSim.runtimeError;
  if (this$static.runtimeError) {
    $setEnabled(this$static.executeButt, false);
    $setError(this$static, this$static.runtimeError.errorMsg, this$static.runtimeError.lineNumber);
    $setAnnotations(this$static.editor);
  }
}

function $initRegisterPanel(this$static){
  var i, leftRegPanel, regFile, rightRegPanel;
  regFile = new HorizontalPanel;
  leftRegPanel = new VerticalPanel;
  rightRegPanel = new VerticalPanel;
  $setHorizontalAlignment_0(rightRegPanel, ($clinit_HasHorizontalAlignment() , ALIGN_CENTER));
  this$static.pcPanel = new RegisterPanel(-1);
  $setStyleName_0(this$static.pcPanel, 'pcReg', true);
  this$static.cpsrPanel = new CPSRPanel;
  $setStyleName_0(this$static.cpsrPanel, 'cpsrReg', true);
  $add_2(leftRegPanel, this$static.pcPanel);
  $add_2(rightRegPanel, this$static.cpsrPanel);
  for (i = 0; i < 32; i++) {
    this$static.regPanels[i] = new RegisterPanel(i);
    if (i < 16) {
      $setStyleName(this$static.regPanels[i], 'individualReg');
      $add_2(leftRegPanel, this$static.regPanels[i]);
    }
     else {
      $add_2(rightRegPanel, this$static.regPanels[i]);
    }
  }
  $add_0(regFile, leftRegPanel);
  $add_0(regFile, rightRegPanel);
  this$static.registerPanel = new VerticalPanel;
  $setStyleName_0(this$static.registerPanel, 'registerPanel', true);
  $add_2(this$static.registerPanel, regFile);
}

function $initUIComponents(this$static){
  this$static.assembleButt = new Button('Assemble');
  $setHeight(this$static.assembleButt, '25px');
  $addDomHandler(this$static.assembleButt, new WebApp$6(this$static), ($clinit_ClickEvent() , $clinit_ClickEvent() , TYPE_0));
  this$static.execModesLab = new Label('Execution Mode: ');
  $setStyleName_0(this$static.execModesLab, 'controlLabel', true);
  this$static.executionModes = new ListBox;
  $insertItem(this$static.executionModes, 'Simulation');
  $insertItem(this$static.executionModes, 'Single Cycle');
  $insertItem(this$static.executionModes, 'Pipeline');
  this$static.executionModes.element.size = 1;
  $setStyleName_0(this$static.executionModes, 'dropdownBox', true);
  this$static.currentExMode = 'Single Cycle';
  $addDomHandler(this$static.executionModes, new WebApp$7(this$static), ($clinit_ChangeEvent() , $clinit_ChangeEvent() , TYPE));
  this$static.executeButt = new Button('Execute Instruction');
  $setHeight(this$static.executeButt, '25px');
  $setEnabled(this$static.executeButt, false);
  $addDomHandler(this$static.executeButt, new WebApp$8(this$static), (null , TYPE_0));
  this$static.helpButt = new Button('Help');
  $setHeight(this$static.helpButt, '25px');
  $addDomHandler(this$static.helpButt, new WebApp$5(this$static), (null , TYPE_0));
  $buildControlPanel(this$static);
  $initRegisterPanel(this$static);
  this$static.editorPanel = new VerticalPanel;
  $setStyleName(this$static.editorPanel, 'editorPanel');
  $add_2(this$static.editorPanel, this$static.editor);
  this$static.debugPanel = new VerticalPanel;
  $add_2(this$static.debugPanel, new Label('CPU Log'));
  $add_2(this$static.debugPanel, this$static.cpuLog);
  this$static.page = new VerticalPanel;
  $setWidth(this$static.page, '100%');
  $setHorizontalAlignment_0(this$static.page, ($clinit_HasHorizontalAlignment() , ALIGN_CENTER));
  $add_1(($clinit_RootPanel() , get_0()), this$static.page);
}

function $launchPipelineSim(this$static){
  var i, text_0;
  $clearAnnotations(this$static.editor);
  $splitIntoLines(this$static, $getText(this$static.editor));
  this$static.pipelineSim = new PipelinedSimulator(this$static.code_0);
  text_0 = '';
  for (i = 0; i < this$static.pipelineSim.code_0.array.length; i++) {
    text_0 += $getLine(dynamicCast($get_1(this$static.pipelineSim.code_0, i), 29)) + '\n';
  }
  $setText_0(this$static.editor, text_0);
  $removeAllMarkers(this$static.editor);
  $updateRegisterLabels(this$static, this$static.pipelineSim);
  $updateFlagLabels(this$static, this$static.pipelineSim);
  this$static.compileErrors = this$static.pipelineSim.compileErrors;
  if (this$static.compileErrors.array.length != 0) {
    $setEnabled(this$static.executeButt, false);
    $setCompileErrors(this$static);
    $setAnnotations(this$static.editor);
  }
   else {
    $setEnabled(this$static.executeButt, true);
  }
}

function $launchSingleCycleSim(this$static){
  var i, text_0;
  $clearAnnotations(this$static.editor);
  $splitIntoLines(this$static, $getText(this$static.editor));
  this$static.singleCycleSim = new SingleCycleSimulator(this$static.code_0);
  text_0 = '';
  for (i = 0; i < this$static.singleCycleSim.code_0.array.length; i++) {
    text_0 += $getLine(dynamicCast($get_1(this$static.singleCycleSim.code_0, i), 29)) + '\n';
  }
  $setText_0(this$static.editor, text_0);
  $removeAllMarkers(this$static.editor);
  $updateRegisterLabels(this$static, this$static.singleCycleSim);
  $updateFlagLabels(this$static, this$static.singleCycleSim);
  this$static.compileErrors = this$static.singleCycleSim.compileErrors;
  if (this$static.compileErrors.array.length != 0) {
    $setEnabled(this$static.executeButt, false);
    $setCompileErrors(this$static);
    $setAnnotations(this$static.editor);
  }
   else {
    $setEnabled(this$static.executeButt, true);
  }
}

function $onModuleLoad(this$static){
  var gotolineCmd, editor, editor_0, editor_1;
  addResizeHandler(new WebApp$1(this$static));
  this$static.editor = new AceEditor;
  $setWidth(this$static.editor, '600px');
  $setHeight(this$static.editor, '350px');
  this$static.cpuLog = new AceEditor;
  $setWidth(this$static.cpuLog, '600px');
  $setHeight(this$static.cpuLog, '350px');
  $initUIComponents(this$static);
  $buildSingleCycleUI(this$static);
  $buildSimulationUI(this$static);
  $startEditor(this$static.editor);
  $setThemeByName(this$static.editor, ($clinit_AceEditorTheme() , COBALT).name_0);
  $setFontSize(this$static.editor, 14);
  editor = this$static.editor.editor;
  editor.getSession().setTabSize(10);
  editor_0 = this$static.editor.editor;
  editor_0.focus();
  $setShowGutter(this$static.editor, true);
  $startEditor(this$static.cpuLog);
  $setThemeByName(this$static.cpuLog, MONOKAI.name_0);
  editor_1 = this$static.cpuLog.editor;
  editor_1.setReadOnly(true);
  $setShowGutter(this$static.cpuLog, false);
  null.nullMethod();
  $addCommand(this$static.editor, $withBindKey(new AceCommandDescription('increaseFontSize', new WebApp$2), 'Ctrl-=|Ctrl-+'));
  $addCommand(this$static.editor, $withBindKey(new AceCommandDescription('decreaseFontSize', new WebApp$3), 'Ctrl+-|Ctrl-_'));
  $addCommand(this$static.editor, $withBindKey(new AceCommandDescription('resetFontSize', new WebApp$4), 'Ctrl+0|Ctrl-Numpad0'));
  gotolineCmd = $getCommandDescription(this$static.editor, 'gotoline');
  $addCommand(this$static.editor, $withReadOnly($withBindKey(new AceCommandDescription('gotoline2', gotolineCmd.exec_0), 'Alt-1'), true));
}

function $resetRegisterPanel(this$static){
  var i;
  for (i = 0; i < this$static.regPanels.length; i++) {
    $reset_0(this$static.regPanels[i], i);
  }
  $reset_0(this$static.pcPanel, -1);
}

function $setCompileErrors(this$static){
  var i;
  for (i = 0; i < this$static.compileErrors.array.length; i++) {
    $setError(this$static, dynamicCast($get_1(this$static.compileErrors, i), 45).errorMsg, dynamicCast($get_1(this$static.compileErrors, i), 45).lineNumber);
  }
}

function $setError(this$static, message, lineNumber){
  $addAnnotation(this$static.editor, lineNumber, message, ($clinit_AceAnnotationType() , ERROR_0));
}

function $splitIntoLines(this$static, editorText){
  var currentIndex, indexNextNewLineChar;
  this$static.code_0 = new ArrayList;
  currentIndex = 0;
  while (currentIndex + 1 < editorText.length) {
    indexNextNewLineChar = editorText.indexOf('\n', currentIndex);
    if (indexNextNewLineChar == -1) {
      $add_4(this$static.code_0, new TextLine($trim($substring_0(editorText, currentIndex, editorText.length))));
      currentIndex = editorText.length;
    }
     else {
      $add_4(this$static.code_0, new TextLine($trim(editorText.substr(currentIndex, indexNextNewLineChar - currentIndex))));
      currentIndex = indexNextNewLineChar + 1;
    }
  }
}

function $updateFlagLabels(this$static, sim){
  $update(this$static.cpsrPanel, sim.getCPUZflag(), sim.getCPUNflag(), sim.getCPUCflag(), sim.getCPUVflag());
}

function $updateRegisterLabels(this$static, sim){
  var i;
  for (i = 0; i < this$static.regPanels.length; i++) {
    $update_0(this$static.regPanels[i], sim.getCPURegister(i));
  }
  $update_0(this$static.pcPanel, sim.getPC());
}

function WebApp(){
  this.regPanels = initDim(Lcom_arm_legv8simulator_client_RegisterPanel_2_classLit, $intern_7, 79, 32, 0, 1);
}

defineClass(137, 1, {}, WebApp);
var Lcom_arm_legv8simulator_client_WebApp_2_classLit = createForClass('com.arm.legv8simulator.client', 'WebApp', 137);
function $onResize(this$static, event_0){
  var editorHeight, width_0, datapathWidth, datapathWidth_0;
  $equals($getSelectedItemText(this$static.this$01.executionModes), 'Simulation')?(editorHeight = $getClientHeight($doc) - $getPropertyInt(this$static.this$01.controlPanel.element, 'offsetHeight') - 50 - 30):(editorHeight = $getClientHeight($doc) - $getPropertyInt(this$static.this$01.controlPanel.element, 'offsetHeight') - $getPropertyInt(this$static.this$01.registerPanel.element, 'offsetHeight') - 50 - 30);
  editorHeight > 200?$setHeight(this$static.this$01.editor, editorHeight + 'px'):$setHeight(this$static.this$01.editor, '200px');
  if (this$static.this$01.scDatapath) {
    width_0 = event_0.width_0;
    width_0 > 1600?$setWidth(this$static.this$01.editor, '675px'):$setWidth(this$static.this$01.editor, $getPropertyInt(this$static.this$01.registerPanel.element, 'offsetWidth') + 'px');
    datapathWidth = width_0 - $getPropertyInt(this$static.this$01.editorPanel.element, 'offsetWidth') - 20;
    $remove_0(this$static.this$01.datapathPanel, this$static.this$01.scDatapath.canvas);
    this$static.this$01.scDatapath = new SingleCycleVis(datapathWidth, datapathWidth / 1.432);
    !!this$static.this$01.singleCycleSim && !!this$static.this$01.singleCycleSim.currentInstruction && $updateDatapath(this$static.this$01.singleCycleSim.currentInstruction, this$static.this$01.singleCycleSim.cpu.branchTaken, this$static.this$01.singleCycleSim.cpu.STXRSucceed, this$static.this$01.singleCycleSim.currentInstructionIndex, dynamicCastToString($get_1(dynamicCast($get_1(this$static.this$01.code_0, this$static.this$01.singleCycleSim.currentInstruction.editorLineNumber), 29).args, 0)));
    $add_2(this$static.this$01.datapathPanel, this$static.this$01.scDatapath.canvas);
  }
  if (this$static.this$01.pDatapath) {
    width_0 = event_0.width_0;
    width_0 > 1700?$setWidth(this$static.this$01.editor, '675px'):$setWidth(this$static.this$01.editor, $getPropertyInt(this$static.this$01.registerPanel.element, 'offsetWidth') + 'px');
    datapathWidth_0 = width_0 - $getPropertyInt(this$static.this$01.editorPanel.element, 'offsetWidth') - 20;
    $remove_0(this$static.this$01.datapathPanel, this$static.this$01.pDatapath.canvas);
    this$static.this$01.pDatapath = new PipelineVis(datapathWidth_0, datapathWidth_0 / 1.432);
    $add_2(this$static.this$01.datapathPanel, this$static.this$01.pDatapath.canvas);
  }
}

function WebApp$1(this$0){
  this.this$01 = this$0;
}

defineClass(124, 1, {264:1, 55:1}, WebApp$1);
var Lcom_arm_legv8simulator_client_WebApp$1_2_classLit = createForClass('com.arm.legv8simulator.client', 'WebApp/1', 124);
function WebApp$2(){
}

defineClass(125, 1, {}, WebApp$2);
_.exec_1 = function exec_1(editor){
  var fontSize;
  fontSize = $getFontSize(editor);
  $setFontSize(editor, fontSize + 1);
  return null;
}
;
var Lcom_arm_legv8simulator_client_WebApp$2_2_classLit = createForClass('com.arm.legv8simulator.client', 'WebApp/2', 125);
function WebApp$3(){
}

defineClass(126, 1, {}, WebApp$3);
_.exec_1 = function exec_2(editor){
  var fontSize;
  fontSize = $getFontSize(editor);
  fontSize = fontSize - 1 > 1?fontSize - 1:1;
  $setFontSize(editor, fontSize);
  return null;
}
;
var Lcom_arm_legv8simulator_client_WebApp$3_2_classLit = createForClass('com.arm.legv8simulator.client', 'WebApp/3', 126);
function WebApp$4(){
}

defineClass(127, 1, {}, WebApp$4);
_.exec_1 = function exec_3(editor){
  $setFontSize(editor, 12);
  return null;
}
;
var Lcom_arm_legv8simulator_client_WebApp$4_2_classLit = createForClass('com.arm.legv8simulator.client', 'WebApp/4', 127);
function WebApp$5(this$0){
  this.this$01 = this$0;
}

defineClass(128, 1, $intern_4, WebApp$5);
_.onClick = function onClick_1(event_0){
  $buildHelpPage(this.this$01);
}
;
var Lcom_arm_legv8simulator_client_WebApp$5_2_classLit = createForClass('com.arm.legv8simulator.client', 'WebApp/5', 128);
function WebApp$6(this$0){
  this.this$01 = this$0;
}

defineClass(129, 1, $intern_4, WebApp$6);
_.onClick = function onClick_2(event_0){
  this.this$01.currentExMode = $getSelectedItemText(this.this$01.executionModes);
  switch (this.this$01.currentExMode) {
    case 'Single Cycle':
      $buildSingleCycleUI(this.this$01);
      $launchSingleCycleSim(this.this$01);
      this.this$01.pipelineSim = null;
      break;
    case 'Pipeline':
      $buildPipelineUI(this.this$01);
      $launchPipelineSim(this.this$01);
      this.this$01.singleCycleSim = null;
  }
}
;
var Lcom_arm_legv8simulator_client_WebApp$6_2_classLit = createForClass('com.arm.legv8simulator.client', 'WebApp/6', 129);
function $onChange(this$static){
  this$static.this$01.currentExMode = $getSelectedItemText(this$static.this$01.executionModes);
  switch (this$static.this$01.currentExMode) {
    case 'Simulation':
      $buildSimulationUI(this$static.this$01);
      this$static.this$01.pipelineSim = null;
      break;
    case 'Single Cycle':
      $buildSingleCycleUI(this$static.this$01);
      this$static.this$01.pipelineSim = null;
      break;
    case 'Pipeline':
      $buildPipelineUI(this$static.this$01);
      this$static.this$01.singleCycleSim = null;
  }
}

function WebApp$7(this$0){
  this.this$01 = this$0;
}

defineClass(131, 1, {265:1, 55:1}, WebApp$7);
var Lcom_arm_legv8simulator_client_WebApp$7_2_classLit = createForClass('com.arm.legv8simulator.client', 'WebApp/7', 131);
function WebApp$8(this$0){
  this.this$01 = this$0;
}

defineClass(132, 1, $intern_4, WebApp$8);
_.onClick = function onClick_3(event_0){
  if ($equals(this.this$01.currentExMode, $getSelectedItemText(this.this$01.executionModes))) {
    switch (this.this$01.currentExMode) {
      case 'Single Cycle':
        $executeInstruction(this.this$01);
        break;
      case 'Pipeline':
        $clockPipeline(this.this$01);
    }
  }
   else {
    $setEnabled(this.this$01.executeButt, false);
  }
}
;
var Lcom_arm_legv8simulator_client_WebApp$8_2_classLit = createForClass('com.arm.legv8simulator.client', 'WebApp/8', 132);
function $cancel(this$static){
  if (!this$static.timerId) {
    return;
  }
  ++this$static.cancelCounter;
  this$static.isRepeating?clearInterval_0(this$static.timerId.value_0):clearTimeout_0(this$static.timerId.value_0);
  this$static.timerId = null;
}

function clearInterval_0(timerId){
  $wnd.clearInterval(timerId);
}

function clearTimeout_0(timerId){
  $wnd.clearTimeout(timerId);
}

function createCallback(timer, cancelCounter){
  return $entry(function(){
    timer.fire(cancelCounter);
  }
  );
}

function setTimeout_0(func, time){
  return $wnd.setTimeout(func, time);
}

defineClass(138, 1, {});
_.fire = function fire(scheduleCancelCounter){
  if (scheduleCancelCounter != this.cancelCounter) {
    return;
  }
  this.isRepeating || (this.timerId = null);
  $animate(this, this.this$01.singleCycleSim.previousInstruction, this.this$01.singleCycleSim.currentInstruction);
}
;
_.cancelCounter = 0;
_.isRepeating = false;
_.timerId = null;
var Lcom_google_gwt_user_client_Timer_2_classLit = createForClass('com.google.gwt.user.client', 'Timer', 138);
function $animate(this$static, previous, current){
  if (this$static.i >= 0) {
    if (this$static.i > 50) {
      null.nullMethod();
      !previous?(null.nullMethod() , $drawDataWiresInit_0() , $drawControlSignals_0() , $drawComponentsInit_0() , null.nullMethod($clinit_DatapathGraphics()) , null.nullMethod() , null.nullMethod() , null.nullMethod(($clinit_SingleCycleVis() , PC_COORDS_0)[0] + PC_DIMENSIONS_0[0] / 2 - null.nullMethod() / 2) , null.nullMethod() , null.nullMethod(ALU_PC_COORDS_0[0] + 3 * ALU_PC_DIMENSIONS_0[0] / 5 - null.nullMethod() / 2) , $drawInsMem_TXT() , $drawMux_TXT_0(MUX_REG2LOC_COORDS_0, MUX_REG2LOC_DIMENSIONS_0) , null.nullMethod() , null.nullMethod(REG_FILE_COORDS_0[0] + 2 * REG_FILE_DIMENSIONS_0[0] / 3 - null.nullMethod() / 2) , $drawSignExtend_TXT() , $drawShiftLeft2_TXT() , $drawMux_TXT_0(MUX_READ_REG_COORDS_0, MUX_READ_REG_DIMENSIONS_0) , null.nullMethod() , null.nullMethod(ALU_MAIN_COORDS_0[0] + 2 * ALU_MAIN_DIMENSIONS_0[0] / 5 + 2.5 - null.nullMethod() / 2) , $drawFlag_TXT() , null.nullMethod() , null.nullMethod(ALU_BRANCH_COORDS_0[0] + 2 * ALU_BRANCH_DIMENSIONS_0[0] / 5 + 2.5 - null.nullMethod() / 2) , $drawDataMem_TXT() , $drawMux_TXT_0(MUX_READ_DATA_MEM_COORDS_0, MUX_READ_DATA_MEM_DIMENSIONS_0) , $drawMux_TXT_0(MUX_PC_COORDS_0, MUX_PC_DIMENSIONS_0) , null.nullMethod() , null.nullMethod() , null.nullMethod(PC_PCALU_VERTICAL_X + (ALU_PC_COORDS_0[0] - PC_PCALU_VERTICAL_X) / 2 - null.nullMethod() / 2) , null.nullMethod() , null.nullMethod(REG_FILE_COORDS_0[0] + (SIGN_EXTEND_COORDS_0[0] - REG_FILE_COORDS_0[0]) / 2 - 3 * null.nullMethod() / 4) , null.nullMethod() , null.nullMethod(SIGN_EXTEND_COORDS_0[0] + SIGN_EXTEND_DIMENSIONS_0[0] + (SIGN_EXTEND_COORDS_0[0] - REG_FILE_COORDS_0[0]) / 2 - 3 * null.nullMethod() / 4) , null.nullMethod() , $drawInstructionFields_TXT() , null.nullMethod() , null.nullMethod() , null.nullMethod() , null.nullMethod() , null.nullMethod() , null.nullMethod() , null.nullMethod() , null.nullMethod() , null.nullMethod() , null.nullMethod() , $drawReadData1_TXT() , $drawReadData2_TXT() , null.nullMethod() , null.nullMethod() , null.nullMethod() , $drawDataMemReadData_TXT(false) , null.nullMethod($clinit_DatapathGraphics()) , null.nullMethod() , null.nullMethod() , null.nullMethod(CONTROL_COORDS_0[0] + CONTROL_DIMENSIONS_0[0] / 2 - null.nullMethod() / 2) , $drawALUControl_TXT() , null.nullMethod() , null.nullMethod() , null.nullMethod() , null.nullMethod() , null.nullMethod() , null.nullMethod() , null.nullMethod() , null.nullMethod() , null.nullMethod() , null.nullMethod() , null.nullMethod() , null.nullMethod() , $drawALUZero_TXT(true)):$updateDatapath(previous, this$static.this$01.singleCycleSim.cpu.branchTaken, this$static.this$01.singleCycleSim.cpu.STXRSucceed, this$static.this$01.singleCycleSim.previousInstructionIndex, dynamicCastToString($get_1(dynamicCast($get_1(this$static.this$01.code_0, previous.editorLineNumber), 29).args, 0)));
    }
     else {
      null.nullMethod();
      $updateDatapath(current, this$static.this$01.singleCycleSim.cpu.branchTaken, this$static.this$01.singleCycleSim.cpu.STXRSucceed, this$static.this$01.singleCycleSim.currentInstructionIndex, dynamicCastToString($get_1(dynamicCast($get_1(this$static.this$01.code_0, current.editorLineNumber), 29).args, 0)));
    }
    this$static.i -= 5;
    !!this$static.timerId && $cancel(this$static);
    this$static.isRepeating = false;
    this$static.timerId = valueOf_0(setTimeout_0(createCallback(this$static, this$static.cancelCounter), 25));
  }
   else {
    $cancel(this$static);
  }
}

function WebApp$9(this$0){
  this.this$01 = this$0;
}

defineClass(136, 138, {}, WebApp$9);
_.i = 100;
var Lcom_arm_legv8simulator_client_WebApp$9_2_classLit = createForClass('com.arm.legv8simulator.client', 'WebApp/9', 136);
function $ADD(this$static, destReg, op1Reg, op2Reg){
  if (destReg == 31) {
    $append_0(this$static.cpuLog, 'Ignored attempted assignment to XZR. \n');
  }
   else {
    this$static.registerFile[destReg] = add_1(this$static.registerFile[op1Reg], this$static.registerFile[op2Reg]);
    $append_0(this$static.cpuLog, 'ADD \t X' + destReg + ', X' + op1Reg + ', X' + op2Reg + '\n');
  }
}

function $ADDI(this$static, destReg, op1Reg, op2Imm){
  if (destReg == 31) {
    $append_0(this$static.cpuLog, 'Ignored attempted assignment to XZR. \n');
  }
   else {
    this$static.registerFile[destReg] = add_1(this$static.registerFile[op1Reg], fromInt(op2Imm));
    $append_0(this$static.cpuLog, 'ADDI \t X' + destReg + ', X' + op1Reg + ', #' + op2Imm + '\n');
  }
}

function $ADDIS(this$static, destReg, op1Reg, op2Imm){
  var result;
  result = add_1(this$static.registerFile[op1Reg], fromInt(op2Imm));
  if (destReg == 31) {
    $append_0(this$static.cpuLog, 'Ignored attempted assignment to XZR. \n');
  }
   else {
    this$static.registerFile[destReg] = result;
    $append_0(this$static.cpuLog, 'ADDIS \t X' + destReg + ', X' + op1Reg + ', #' + op2Imm + '\n');
  }
  $ADDSetFlags(this$static, result, this$static.registerFile[op1Reg], fromInt(op2Imm));
  $append_0(this$static.cpuLog, 'Set flags + \n');
}

function $ADDS(this$static, destReg, op1Reg, op2Reg){
  var result;
  result = add_1(this$static.registerFile[op1Reg], this$static.registerFile[op2Reg]);
  if (destReg == 31) {
    $append_0(this$static.cpuLog, 'Ignored attempted assignment to XZR. \n');
  }
   else {
    this$static.registerFile[destReg] = result;
    $append_0(this$static.cpuLog, 'ADDS \t X' + destReg + ', X' + op1Reg + ', X' + op2Reg + '\n');
  }
  $ADDSetFlags(this$static, result, this$static.registerFile[op1Reg], this$static.registerFile[op2Reg]);
  $append_0(this$static.cpuLog, 'Set flags + \n');
}

function $ADDSetFlags(this$static, result, op1, op2){
  this$static.Nflag = lt(result, {l:0, m:0, h:0});
  this$static.Zflag = eq(result, {l:0, m:0, h:0});
  this$static.Cflag = neq(and(add_1(add_1(shru(not(result), 63), shru(op1, 63)), shru(op2, 63)), {l:2, m:0, h:0}), {l:0, m:0, h:0});
  this$static.Vflag = neq(and(and(xor(op1, not(op2)), xor(op1, result)), {l:0, m:4193792, h:$intern_8}), {l:0, m:0, h:0});
}

function $AND(this$static, destReg, op1Reg, op2Reg){
  if (destReg == 31) {
    $append_0(this$static.cpuLog, 'Ignored attempted assignment to XZR. \n');
  }
   else {
    this$static.registerFile[destReg] = and(this$static.registerFile[op1Reg], this$static.registerFile[op2Reg]);
    $append_0(this$static.cpuLog, 'AND \t X' + destReg + ', X' + op1Reg + ', X' + op2Reg + '\n');
  }
}

function $ANDI(this$static, destReg, op1Reg, op2Imm){
  if (destReg == 31) {
    $append_0(this$static.cpuLog, 'Ignored attempted assignment to XZR. \n');
  }
   else {
    this$static.registerFile[destReg] = and(this$static.registerFile[op1Reg], fromInt(op2Imm));
    $append_0(this$static.cpuLog, 'ANDI \t X' + destReg + ', X' + op1Reg + ', #' + op2Imm + '\n');
  }
}

function $ANDIS(this$static, destReg, op1Reg, op2Imm){
  var result;
  result = and(this$static.registerFile[op1Reg], fromInt(op2Imm));
  if (destReg == 31) {
    $append_0(this$static.cpuLog, 'Ignored attempted assignment to XZR. \n');
  }
   else {
    this$static.registerFile[destReg] = result;
    $append_0(this$static.cpuLog, 'ANDIS \t X' + destReg + ', X' + op1Reg + ', #' + op2Imm + '\n');
  }
  $ANDSetFlags(this$static, result);
  $append_0(this$static.cpuLog, 'Set flags + \n');
}

function $ANDS(this$static, destReg, op1Reg, op2Reg){
  var result;
  result = and(this$static.registerFile[op1Reg], this$static.registerFile[op2Reg]);
  if (destReg == 31) {
    $append_0(this$static.cpuLog, 'Ignored attempted assignment to XZR. \n');
  }
   else {
    this$static.registerFile[destReg] = result;
    $append_0(this$static.cpuLog, 'ANDS \t X' + destReg + ', X' + op1Reg + ', X' + op2Reg + '\n');
  }
  $ANDSetFlags(this$static, result);
  $append_0(this$static.cpuLog, 'Set flags + \n');
}

function $ANDSetFlags(this$static, result){
  this$static.Nflag = lt(result, {l:0, m:0, h:0});
  this$static.Zflag = eq(result, {l:0, m:0, h:0});
  this$static.Cflag = false;
  this$static.Vflag = false;
}

function $BR(this$static, branchReg, memory){
  if (neq(mod(this$static.registerFile[branchReg], {l:4, m:0, h:0}), {l:0, m:0, h:0})) {
    throw new PCAlignmentException(this$static.registerFile[branchReg]);
  }
  if (lt(this$static.registerFile[branchReg], {l:0, m:1, h:0}) || gt(this$static.registerFile[branchReg], sub_0(memory.staticDataSegmentOffset, {l:4, m:0, h:0}))) {
    throw new SegmentFaultException(this$static.registerFile[branchReg], 'text');
  }
  this$static.instructionIndex = ~~(toInt(sub_0(this$static.registerFile[branchReg], {l:0, m:1, h:0})) / 4);
  $append_0(this$static.cpuLog, 'BR \t X0x' + toPowerOfTwoUnsignedString(add_1(mul(fromInt(this$static.instructionIndex), {l:4, m:0, h:0}), {l:0, m:1, h:0})) + ' \n');
}

function $EOR(this$static, destReg, op1Reg, op2Reg){
  if (destReg == 31) {
    $append_0(this$static.cpuLog, 'Ignored attempted assignment to XZR. \n');
  }
   else {
    this$static.registerFile[destReg] = xor(this$static.registerFile[op1Reg], this$static.registerFile[op2Reg]);
    $append_0(this$static.cpuLog, 'EOR \t X' + destReg + ', X' + op1Reg + ', X' + op2Reg + '\n');
  }
}

function $EORI(this$static, destReg, op1Reg, op2Imm){
  if (destReg == 31) {
    $append_0(this$static.cpuLog, 'Ignored attempted assignment to XZR. \n');
  }
   else {
    this$static.registerFile[destReg] = xor(this$static.registerFile[op1Reg], fromInt(op2Imm));
    $append_0(this$static.cpuLog, 'EORI \t X' + destReg + ', X' + op1Reg + ', #' + op2Imm + '\n');
  }
}

function $LDUR(this$static, destReg, baseAddressReg, offset, memory){
  baseAddressReg == 28 && $checkSPAlignment(this$static);
  if (destReg == 31) {
    $append_0(this$static.cpuLog, 'Ignored attempted assignment to XZR. \n');
  }
   else {
    this$static.registerFile[destReg] = $loadDoubleword(memory, add_1(this$static.registerFile[baseAddressReg], fromInt(offset)));
    $append_0(this$static.cpuLog, 'LDUR \t X' + destReg + ', [X' + baseAddressReg + ', #' + offset + '] \n');
  }
}

function $LDURB(this$static, destReg, baseAddressReg, offset, memory){
  baseAddressReg == 28 && $checkSPAlignment(this$static);
  if (destReg == 31) {
    $append_0(this$static.cpuLog, 'Ignored attempted assignment to XZR. \n');
  }
   else {
    this$static.registerFile[destReg] = $loadByte(memory, add_1(this$static.registerFile[baseAddressReg], fromInt(offset)));
    $append_0(this$static.cpuLog, 'LDURB \t X' + destReg + ', [X' + baseAddressReg + ', #' + offset + '] \n');
  }
}

function $LDURH(this$static, destReg, baseAddressReg, offset, memory){
  baseAddressReg == 28 && $checkSPAlignment(this$static);
  if (destReg == 31) {
    $append_0(this$static.cpuLog, 'Ignored attempted assignment to XZR. \n');
  }
   else {
    this$static.registerFile[destReg] = $loadHalfword(memory, add_1(this$static.registerFile[destReg], fromInt(offset)));
    $append_0(this$static.cpuLog, 'LDURH \t X' + destReg + ', [X' + baseAddressReg + ', #' + offset + '] \n');
  }
}

function $LDURSW(this$static, destReg, baseAddressReg, offset, memory){
  baseAddressReg == 28 && $checkSPAlignment(this$static);
  if (destReg == 31) {
    $append_0(this$static.cpuLog, 'Ignored attempted assignment to XZR. \n');
  }
   else {
    this$static.registerFile[destReg] = $loadSignedWord(memory, add_1(this$static.registerFile[baseAddressReg], fromInt(offset)));
    $append_0(this$static.cpuLog, 'LDURSW \t X' + destReg + ', [X' + baseAddressReg + ', #' + offset + '] \n');
  }
}

function $LDXR(this$static, destReg, baseAddressReg, offset, memory){
  var address;
  baseAddressReg == 28 && $checkSPAlignment(this$static);
  address = add_1(this$static.registerFile[baseAddressReg], fromInt(offset));
  if (destReg == 31) {
    $append_0(this$static.cpuLog, 'Ignored attempted assignment to XZR. \n');
  }
   else {
    this$static.registerFile[destReg] = $loadDoubleword(memory, address);
    this$static.taggedAddress = address;
    $append_0(this$static.cpuLog, 'LDXR \t X' + destReg + ', [X' + baseAddressReg + ', #' + offset + '] \n');
  }
}

function $LSL(this$static, destReg, op1Reg, op2Imm){
  if (destReg == 31) {
    $append_0(this$static.cpuLog, 'Ignored attempted assignment to XZR. \n');
  }
   else {
    this$static.registerFile[destReg] = shl(this$static.registerFile[op1Reg], op2Imm);
    $append_0(this$static.cpuLog, 'LSL \t X' + destReg + ', X' + op1Reg + ', #' + op2Imm + '\n');
  }
}

function $LSR(this$static, destReg, op1Reg, op2Imm){
  if (destReg == 31) {
    $append_0(this$static.cpuLog, 'Ignored attempted assignment to XZR. \n');
  }
   else {
    this$static.registerFile[destReg] = shru(this$static.registerFile[op1Reg], op2Imm);
    $append_0(this$static.cpuLog, 'LSR \t X' + destReg + ', X' + op1Reg + ', #' + op2Imm + '\n');
  }
}

function $MOVK(this$static, destReg, immediate, quadrantShift){
  if (destReg == 31) {
    $append_0(this$static.cpuLog, 'Ignored attempted assignment to XZR. \n');
  }
   else {
    this$static.registerFile[destReg] = or(this$static.registerFile[destReg], fromInt(immediate << quadrantShift));
    $append_0(this$static.cpuLog, 'MOVK \t X' + destReg + ', #' + immediate + ', LSL #' + quadrantShift + ' \n');
  }
}

function $MOVZ(this$static, destReg, immediate, quadrantShift){
  if (destReg == 31) {
    $append_0(this$static.cpuLog, 'Ignored attempted assignment to XZR. \n');
  }
   else {
    this$static.registerFile[destReg] = fromInt(immediate << quadrantShift);
    $append_0(this$static.cpuLog, 'MOVZ \t X' + destReg + ', #' + immediate + ', LSL #' + quadrantShift + ' \n');
  }
}

function $ORR(this$static, destReg, op1Reg, op2Reg){
  if (destReg == 31) {
    $append_0(this$static.cpuLog, 'Ignored attempted assignment to XZR. \n');
  }
   else {
    this$static.registerFile[destReg] = or(this$static.registerFile[op1Reg], this$static.registerFile[op2Reg]);
    $append_0(this$static.cpuLog, 'ORR \t X' + destReg + ', X' + op1Reg + ', X' + op2Reg + '\n');
  }
}

function $ORRI(this$static, destReg, op1Reg, op2Imm){
  if (destReg == 31) {
    $append_0(this$static.cpuLog, 'Ignored attempted assignment to XZR. \n');
  }
   else {
    this$static.registerFile[destReg] = or(this$static.registerFile[op1Reg], fromInt(op2Imm));
    $append_0(this$static.cpuLog, 'ORRI \t X' + destReg + ', X' + op1Reg + ', #' + op2Imm + '\n');
  }
}

function $STXR(this$static, valReg, outcomeReg, baseAddressReg, offset, memory){
  var address;
  baseAddressReg == 28 && $checkSPAlignment(this$static);
  address = add_1(this$static.registerFile[baseAddressReg], fromInt(offset));
  if (eq(this$static.taggedAddress, address)) {
    $storeDoubleword(memory, address, this$static.registerFile[valReg]);
    this$static.registerFile[outcomeReg] = {l:0, m:0, h:0};
    this$static.taggedAddress = {l:0, m:0, h:0};
    this$static.STXRSucceed = true;
  }
   else {
    this$static.registerFile[outcomeReg] = {l:1, m:0, h:0};
    this$static.STXRSucceed = false;
  }
  $append_0(this$static.cpuLog, 'STXR \t X' + valReg + ', X' + outcomeReg + ', [X' + baseAddressReg + ', #' + offset + '] \n');
}

function $SUB(this$static, destReg, op1Reg, op2Reg){
  if (destReg == 31) {
    $append_0(this$static.cpuLog, 'Ignored attempted assignment to XZR. \n');
  }
   else {
    this$static.registerFile[destReg] = sub_0(this$static.registerFile[op1Reg], this$static.registerFile[op2Reg]);
    $append_0(this$static.cpuLog, 'SUB \t X' + destReg + ', X' + op1Reg + ', X' + op2Reg + '\n');
  }
}

function $SUBI(this$static, destReg, op1Reg, op2Imm){
  if (destReg == 31) {
    $append_0(this$static.cpuLog, 'Ignored attempted assignment to XZR. \n');
  }
   else {
    this$static.registerFile[destReg] = sub_0(this$static.registerFile[op1Reg], fromInt(op2Imm));
    $append_0(this$static.cpuLog, 'SUBI \t X' + destReg + ', X' + op1Reg + ', #' + op2Imm + '\n');
  }
}

function $SUBIS(this$static, destReg, op1Reg, op2Imm){
  var result;
  result = sub_0(this$static.registerFile[op1Reg], fromInt(op2Imm));
  if (destReg == 31) {
    $append_0(this$static.cpuLog, 'Ignored attempted assignment to XZR. \n');
  }
   else {
    this$static.registerFile[destReg] = result;
    $append_0(this$static.cpuLog, 'SUBIS \t X' + destReg + ', X' + op1Reg + ', #' + op2Imm + '\n');
  }
  $ADDSetFlags(this$static, result, this$static.registerFile[op1Reg], fromInt(op2Imm));
  $append_0(this$static.cpuLog, 'Set flags + \n');
}

function $SUBS(this$static, destReg, op1Reg, op2Reg){
  var result;
  result = sub_0(this$static.registerFile[op1Reg], this$static.registerFile[op2Reg]);
  if (destReg == 31) {
    $append_0(this$static.cpuLog, 'Ignored attempted assignment to XZR. \n');
  }
   else {
    this$static.registerFile[destReg] = result;
    $append_0(this$static.cpuLog, 'SUBS \t X' + destReg + ', X' + op1Reg + ', X' + op2Reg + '\n');
  }
  $ADDSetFlags(this$static, result, this$static.registerFile[op1Reg], this$static.registerFile[op2Reg]);
  $append_0(this$static.cpuLog, 'Set flags + \n');
}

function $checkSPAlignment(this$static){
  if (neq(mod(this$static.registerFile[28], {l:16, m:0, h:0}), {l:0, m:0, h:0})) {
    $append_0(this$static.cpuLog, 'SP misaligned\n');
    throw new SPAlignmentException(this$static.registerFile[28]);
  }
  $append_0(this$static.cpuLog, 'SP aligned correctly\n');
}

function $clearExclusiveAccessTag(this$static, address, figureSize){
  if (eq(this$static.taggedAddress, {l:0, m:0, h:0}))
    return;
  if (gte_0(address, this$static.taggedAddress) && lt(address, add_1(this$static.taggedAddress, {l:8, m:0, h:0})) || gte_0(sub_0(add_1(address, fromInt(figureSize)), {l:1, m:0, h:0}), this$static.taggedAddress) && lt(sub_0(add_1(address, fromInt(figureSize)), {l:1, m:0, h:0}), add_1(this$static.taggedAddress, {l:8, m:0, h:0}))) {
    this$static.taggedAddress = {l:0, m:0, h:0};
    $append_0(this$static.cpuLog, 'Exclusive access address tag cleared \n');
  }
}

function $execute(this$static, ins, memory){
  var args;
  args = ins.args;
  this$static.branchTaken = false;
  switch (ins.mnemonic.ordinal) {
    case 0:
      $ADD(this$static, args[0], args[1], args[2]);
      break;
    case 1:
      $ADDS(this$static, args[0], args[1], args[2]);
      break;
    case 2:
      $ADDI(this$static, args[0], args[1], args[2]);
      break;
    case 3:
      $ADDIS(this$static, args[0], args[1], args[2]);
      break;
    case 4:
      $SUB(this$static, args[0], args[1], args[2]);
      break;
    case 5:
      $SUBS(this$static, args[0], args[1], args[2]);
      break;
    case 6:
      $SUBI(this$static, args[0], args[1], args[2]);
      break;
    case 7:
      $SUBIS(this$static, args[0], args[1], args[2]);
      break;
    case 8:
      $AND(this$static, args[0], args[1], args[2]);
      break;
    case 9:
      $ANDS(this$static, args[0], args[1], args[2]);
      break;
    case 10:
      $ANDI(this$static, args[0], args[1], args[2]);
      break;
    case 11:
      $ANDIS(this$static, args[0], args[1], args[2]);
      break;
    case 12:
      $ORR(this$static, args[0], args[1], args[2]);
      break;
    case 13:
      $ORRI(this$static, args[0], args[1], args[2]);
      break;
    case 14:
      $EOR(this$static, args[0], args[1], args[2]);
      break;
    case 15:
      $EORI(this$static, args[0], args[1], args[2]);
      break;
    case 16:
      $LSL(this$static, args[0], args[1], args[2]);
      break;
    case 17:
      $LSR(this$static, args[0], args[1], args[2]);
      break;
    case 18:
      $LDUR(this$static, args[0], args[1], args[2], memory);
      break;
    case 19:
      args[1] == 28 && $checkSPAlignment(this$static);
      $storeDoubleword(memory, add_1(this$static.registerFile[args[1]], fromInt(args[2])), this$static.registerFile[args[0]]);
      $clearExclusiveAccessTag(this$static, add_1(this$static.registerFile[args[1]], fromInt(args[2])), 8);
      $append_0(this$static.cpuLog, 'STUR \t X' + args[0] + ', [X' + args[1] + ', #' + args[2] + '] \n');
      break;
    case 20:
      $LDURSW(this$static, args[0], args[1], args[2], memory);
      break;
    case 21:
      args[1] == 28 && $checkSPAlignment(this$static);
      $storeWord(memory, add_1(this$static.registerFile[args[1]], fromInt(args[2])), this$static.registerFile[args[0]]);
      $clearExclusiveAccessTag(this$static, add_1(this$static.registerFile[args[1]], fromInt(args[2])), 4);
      $append_0(this$static.cpuLog, 'STURW \t X' + args[0] + ', [X' + args[1] + ', #' + args[2] + '] \n');
      break;
    case 22:
      $LDURH(this$static, args[0], args[1], args[2], memory);
      break;
    case 23:
      args[1] == 28 && $checkSPAlignment(this$static);
      $storeHalfword(memory, add_1(this$static.registerFile[args[1]], fromInt(args[2])), this$static.registerFile[args[0]]);
      $clearExclusiveAccessTag(this$static, add_1(this$static.registerFile[args[1]], fromInt(args[2])), 2);
      $append_0(this$static.cpuLog, 'STURH \t X' + args[0] + ', [X' + args[1] + ', #' + args[2] + '] \n');
      break;
    case 24:
      $LDURB(this$static, args[0], args[1], args[2], memory);
      break;
    case 25:
      args[1] == 28 && $checkSPAlignment(this$static);
      $storeByte(memory, add_1(this$static.registerFile[args[1]], fromInt(args[2])), this$static.registerFile[args[0]]);
      $clearExclusiveAccessTag(this$static, add_1(this$static.registerFile[args[1]], fromInt(args[2])), 1);
      $append_0(this$static.cpuLog, 'STURB \t X' + args[0] + ', [X' + args[1] + ', #' + args[2] + '] \n');
      break;
    case 26:
      $LDXR(this$static, args[0], args[1], args[2], memory);
      break;
    case 27:
      $STXR(this$static, args[0], args[1], args[2], args[3], memory);
      break;
    case 28:
      $MOVZ(this$static, args[0], args[1], args[2]);
      break;
    case 29:
      $MOVK(this$static, args[0], args[1], args[2]);
      break;
    case 30:
      eq(this$static.registerFile[args[0]], {l:0, m:0, h:0}) && (this$static.instructionIndex = args[1]);
      $append_0(this$static.cpuLog, 'CBZ \t X' + args[0] + ', ' + '0x' + toPowerOfTwoUnsignedString(add_1(mul(fromInt(this$static.instructionIndex), {l:4, m:0, h:0}), {l:0, m:1, h:0})) + ' \n');
      this$static.branchTaken = eq(this$static.registerFile[args[0]], {l:0, m:0, h:0});
      break;
    case 31:
      neq(this$static.registerFile[args[0]], {l:0, m:0, h:0}) && (this$static.instructionIndex = args[1]);
      $append_0(this$static.cpuLog, 'CBNZ \t X' + args[0] + ', ' + '0x' + toPowerOfTwoUnsignedString(add_1(mul(fromInt(this$static.instructionIndex), {l:4, m:0, h:0}), {l:0, m:1, h:0})) + ' \n');
      this$static.branchTaken = neq(this$static.registerFile[args[0]], {l:0, m:0, h:0});
      break;
    case 32:
      this$static.Zflag && (this$static.instructionIndex = args[0]);
      $append_0(this$static.cpuLog, 'B.EQ \t0x' + toPowerOfTwoUnsignedString(add_1(mul(fromInt(this$static.instructionIndex), {l:4, m:0, h:0}), {l:0, m:1, h:0})) + ' \n');
      this$static.branchTaken = this$static.Zflag;
      break;
    case 33:
      this$static.Zflag || (this$static.instructionIndex = args[0]);
      $append_0(this$static.cpuLog, 'B.NE \t0x' + toPowerOfTwoUnsignedString(add_1(mul(fromInt(this$static.instructionIndex), {l:4, m:0, h:0}), {l:0, m:1, h:0})) + ' \n');
      this$static.branchTaken = !this$static.Zflag;
      break;
    case 34:
      this$static.Cflag && (this$static.instructionIndex = args[0]);
      $append_0(this$static.cpuLog, 'B.HS \t0x' + toPowerOfTwoUnsignedString(add_1(mul(fromInt(this$static.instructionIndex), {l:4, m:0, h:0}), {l:0, m:1, h:0})) + ' \n');
      this$static.branchTaken = this$static.Cflag;
      break;
    case 35:
      this$static.Cflag || (this$static.instructionIndex = args[0]);
      $append_0(this$static.cpuLog, 'B.LO \t0x' + toPowerOfTwoUnsignedString(add_1(mul(fromInt(this$static.instructionIndex), {l:4, m:0, h:0}), {l:0, m:1, h:0})) + ' \n');
      this$static.branchTaken = !this$static.Cflag;
      break;
    case 36:
      !this$static.Zflag && this$static.Cflag && (this$static.instructionIndex = args[0]);
      $append_0(this$static.cpuLog, 'B.HI \t0x' + toPowerOfTwoUnsignedString(add_1(mul(fromInt(this$static.instructionIndex), {l:4, m:0, h:0}), {l:0, m:1, h:0})) + ' \n');
      this$static.branchTaken = !this$static.Zflag && this$static.Cflag;
      break;
    case 37:
      !this$static.Zflag && this$static.Cflag || (this$static.instructionIndex = args[0]);
      $append_0(this$static.cpuLog, 'B.LS \t0x' + toPowerOfTwoUnsignedString(add_1(mul(fromInt(this$static.instructionIndex), {l:4, m:0, h:0}), {l:0, m:1, h:0})) + ' \n');
      this$static.branchTaken = !(!this$static.Zflag && this$static.Cflag);
      break;
    case 38:
      this$static.Nflag == this$static.Vflag && (this$static.instructionIndex = args[0]);
      $append_0(this$static.cpuLog, 'B.GE \t0x' + toPowerOfTwoUnsignedString(add_1(mul(fromInt(this$static.instructionIndex), {l:4, m:0, h:0}), {l:0, m:1, h:0})) + ' \n');
      this$static.branchTaken = this$static.Nflag == this$static.Vflag;
      break;
    case 39:
      this$static.Cflag != this$static.Vflag && (this$static.instructionIndex = args[0]);
      $append_0(this$static.cpuLog, 'B.LT \t0x' + toPowerOfTwoUnsignedString(add_1(mul(fromInt(this$static.instructionIndex), {l:4, m:0, h:0}), {l:0, m:1, h:0})) + ' \n');
      break;
    case 40:
      !this$static.Zflag && this$static.Nflag == this$static.Vflag && (this$static.instructionIndex = args[0]);
      $append_0(this$static.cpuLog, 'B.GT \t0x' + toPowerOfTwoUnsignedString(add_1(mul(fromInt(this$static.instructionIndex), {l:4, m:0, h:0}), {l:0, m:1, h:0})) + ' \n');
      this$static.branchTaken = !this$static.Zflag && this$static.Nflag == this$static.Vflag;
      break;
    case 41:
      !this$static.Zflag && this$static.Nflag == this$static.Vflag || (this$static.instructionIndex = args[0]);
      $append_0(this$static.cpuLog, 'B.LE \t0x' + toPowerOfTwoUnsignedString(add_1(mul(fromInt(this$static.instructionIndex), {l:4, m:0, h:0}), {l:0, m:1, h:0})) + ' \n');
      this$static.branchTaken = !(!this$static.Zflag && this$static.Nflag == this$static.Vflag);
      break;
    case 42:
      this$static.Nflag && (this$static.instructionIndex = args[0]);
      $append_0(this$static.cpuLog, 'B.MI \t0x' + toPowerOfTwoUnsignedString(add_1(mul(fromInt(this$static.instructionIndex), {l:4, m:0, h:0}), {l:0, m:1, h:0})) + ' \n');
      this$static.branchTaken = this$static.Nflag;
      break;
    case 43:
      this$static.Nflag || (this$static.instructionIndex = args[0]);
      $append_0(this$static.cpuLog, 'B.PL \t0x' + toPowerOfTwoUnsignedString(add_1(mul(fromInt(this$static.instructionIndex), {l:4, m:0, h:0}), {l:0, m:1, h:0})) + ' \n');
      this$static.branchTaken = !this$static.Nflag;
      break;
    case 44:
      this$static.Vflag && (this$static.instructionIndex = args[0]);
      $append_0(this$static.cpuLog, 'B.VS \t0x' + toPowerOfTwoUnsignedString(add_1(mul(fromInt(this$static.instructionIndex), {l:4, m:0, h:0}), {l:0, m:1, h:0})) + ' \n');
      this$static.branchTaken = this$static.Vflag;
      break;
    case 45:
      this$static.Vflag || (this$static.instructionIndex = args[0]);
      $append_0(this$static.cpuLog, 'B.VC \t0x' + toPowerOfTwoUnsignedString(add_1(mul(fromInt(this$static.instructionIndex), {l:4, m:0, h:0}), {l:0, m:1, h:0})) + ' \n');
      this$static.branchTaken = !this$static.Vflag;
      break;
    case 46:
      this$static.instructionIndex = args[0];
      $append_0(this$static.cpuLog, 'B \t0x' + toPowerOfTwoUnsignedString(add_1(mul(fromInt(this$static.instructionIndex), {l:4, m:0, h:0}), {l:0, m:1, h:0})) + ' \n');
      this$static.branchTaken = true;
      break;
    case 47:
      $BR(this$static, args[0], memory);
      break;
    case 48:
      this$static.instructionIndex = args[0];
      this$static.registerFile[30] = add_1(fromInt(this$static.instructionIndex * 4), {l:0, m:1, h:0});
      $append_0(this$static.cpuLog, 'BL \t0x' + toPowerOfTwoUnsignedString(this$static.registerFile[30]) + ' \n');
  }
}

function $executeInstruction_0(this$static, cpuInstructions, memory){
  var pcae, sfe, spae;
  try {
    $execute(this$static, dynamicCast($get_1(cpuInstructions, this$static.instructionIndex++), 11), memory);
  }
   catch ($e0) {
    $e0 = wrap($e0);
    if (instanceOf($e0, 90)) {
      sfe = $e0;
      return new Error_0('Memory address out of bounds: 0x' + toPowerOfTwoUnsignedString(sfe.address) + ' is not in the ' + sfe.segment + ' segment', dynamicCast($get_1(cpuInstructions, this$static.instructionIndex - 1), 11).editorLineNumber);
    }
     else if (instanceOf($e0, 103)) {
      pcae = $e0;
      return new Error_0('The address 0x' + toPowerOfTwoUnsignedString(pcae.address) + ' is not word aligned.', dynamicCast($get_1(cpuInstructions, this$static.instructionIndex - 1), 11).editorLineNumber);
    }
     else if (instanceOf($e0, 104)) {
      spae = $e0;
      return new Error_0('Data transfer operation with misaligned SP: 0x' + toPowerOfTwoUnsignedString(spae.address) + ' is not quadword aligned.', dynamicCast($get_1(cpuInstructions, this$static.instructionIndex - 1), 11).editorLineNumber);
    }
     else 
      throw unwrap($e0);
  }
  return null;
}

function $getRegister(this$static, index_0){
  return this$static.registerFile[index_0];
}

function CPU(){
  var i;
  this.cpuLog = new StringBuilder('');
  this.registerFile = initDim(J_classLit, $intern_2, 0, 32, 6, 1);
  for (i = 0; i < 32; i++) {
    this.registerFile[i] = {l:0, m:0, h:0};
  }
  this.registerFile[28] = {l:4194300, m:131071, h:0};
  this.Nflag = false;
  this.Zflag = false;
  this.Cflag = false;
  this.Vflag = false;
}

defineClass(201, 1, {}, CPU);
_.Cflag = false;
_.Nflag = false;
_.STXRSucceed = false;
_.Vflag = false;
_.Zflag = false;
_.branchTaken = false;
_.instructionIndex = 0;
_.taggedAddress = {l:0, m:0, h:0};
var Lcom_arm_legv8simulator_client_cpu_CPU_2_classLit = createForClass('com.arm.legv8simulator.client.cpu', 'CPU', 201);
function $getRegister_0(this$static, index_0){
  return this$static.registerFile[index_0];
}

function CPUSnapshot(cpu){
  var i;
  this.registerFile = initDim(J_classLit, $intern_2, 0, 32, 6, 1);
  for (i = 0; i < this.registerFile.length; i++) {
    this.registerFile[i] = cpu.registerFile[i];
  }
  this.Nflag = cpu.Nflag;
  this.Zflag = cpu.Zflag;
  this.Cflag = cpu.Cflag;
  this.Vflag = cpu.Vflag;
}

defineClass(102, 1, {}, CPUSnapshot);
_.Cflag = false;
_.Nflag = false;
_.Vflag = false;
_.Zflag = false;
var Lcom_arm_legv8simulator_client_cpu_CPUSnapshot_2_classLit = createForClass('com.arm.legv8simulator.client.cpu', 'CPUSnapshot', 102);
function $name(this$static){
  return this$static.name_1 != null?this$static.name_1:'' + this$static.ordinal;
}

function Enum(name_0, ordinal){
  this.name_1 = name_0;
  this.ordinal = ordinal;
}

defineClass(8, 1, {3:1, 9:1, 8:1});
_.equals$ = function equals_0(other){
  return this === other;
}
;
_.hashCode$ = function hashCode_1(){
  return getHashCode(this);
}
;
_.name_2 = function name_2(){
  return $name(this);
}
;
_.toString$ = function toString_2(){
  return this.name_1 != null?this.name_1:'' + this.ordinal;
}
;
_.ordinal = 0;
var Ljava_lang_Enum_2_classLit = createForClass('java.lang', 'Enum', 8);
function $clinit_ControlUnitConfiguration(){
  $clinit_ControlUnitConfiguration = emptyMethod;
  RRR = new ControlUnitConfiguration('RRR', 0, ($clinit_Boolean() , $clinit_Boolean() , FALSE), (null , FALSE), (null , FALSE), (null , FALSE), (null , FALSE), (null , FALSE), (null , FALSE), (null , FALSE), (null , FALSE), valueOf_0(2), (null , TRUE));
  RRR_FLAGS = new ControlUnitConfiguration('RRR_FLAGS', 1, (null , FALSE), (null , FALSE), (null , FALSE), (null , FALSE), (null , FALSE), (null , FALSE), (null , FALSE), (null , TRUE), (null , FALSE), valueOf_0(2), (null , TRUE));
  RRI = new ControlUnitConfiguration('RRI', 2, (null , FALSE), (null , FALSE), (null , FALSE), (null , FALSE), (null , FALSE), (null , FALSE), (null , FALSE), (null , FALSE), (null , TRUE), valueOf_0(2), (null , TRUE));
  RRI_FLAGS = new ControlUnitConfiguration('RRI_FLAGS', 3, (null , FALSE), (null , FALSE), (null , FALSE), (null , FALSE), (null , FALSE), (null , FALSE), (null , FALSE), (null , TRUE), (null , TRUE), valueOf_0(2), (null , TRUE));
  RM_LOAD = new ControlUnitConfiguration('RM_LOAD', 4, null, (null , FALSE), (null , FALSE), (null , FALSE), (null , FALSE), (null , TRUE), (null , TRUE), (null , FALSE), (null , TRUE), valueOf_0(0), (null , TRUE));
  RM_STORE = new ControlUnitConfiguration('RM_STORE', 5, (null , TRUE), (null , FALSE), (null , FALSE), (null , FALSE), (null , FALSE), null, (null , TRUE), (null , FALSE), (null , FALSE), valueOf_0(0), (null , FALSE));
  RRM = new ControlUnitConfiguration('RRM', 6, (null , TRUE), (null , FALSE), (null , FALSE), (null , FALSE), (null , TRUE), (null , TRUE), (null , TRUE), (null , FALSE), (null , TRUE), valueOf_0(0), (null , TRUE));
  RISI = new ControlUnitConfiguration('RISI', 7, (null , FALSE), (null , FALSE), (null , FALSE), (null , FALSE), (null , FALSE), (null , FALSE), (null , FALSE), (null , FALSE), (null , TRUE), valueOf_0(2), (null , TRUE));
  L = new ControlUnitConfiguration('L', 8, null, (null , TRUE), (null , FALSE), (null , FALSE), (null , FALSE), null, (null , FALSE), (null , FALSE), null, null, (null , FALSE));
  L_COND = new ControlUnitConfiguration('L_COND', 9, null, (null , FALSE), (null , TRUE), (null , FALSE), (null , FALSE), null, (null , FALSE), (null , FALSE), null, null, (null , FALSE));
  RL = new ControlUnitConfiguration('RL', 10, (null , TRUE), (null , FALSE), (null , FALSE), (null , TRUE), (null , FALSE), null, (null , FALSE), (null , FALSE), (null , FALSE), valueOf_0(1), (null , FALSE));
}

function ControlUnitConfiguration(enum$name, enum$ordinal, reg2Loc, uncondBranch, flagBranch, zeroBranch, memRead, memToReg, memWrite, flagWrite, aluSrc, aluOp, regWrite){
  Enum.call(this, enum$name, enum$ordinal);
  this.reg2Loc = reg2Loc;
  this.uncondBranch = uncondBranch;
  this.flagBranch = flagBranch;
  this.zeroBranch = zeroBranch;
  this.memRead = memRead;
  this.memToReg = memToReg;
  this.memWrite = memWrite;
  this.flagWrite = flagWrite;
  this.aluSrc = aluSrc;
  this.aluOp = aluOp;
  this.regWrite = regWrite;
}

function toString_3(signal){
  $clinit_ControlUnitConfiguration();
  return !signal?'':signal.value_0?'1':'0';
}

function toString_4(aluOp){
  $clinit_ControlUnitConfiguration();
  if (!aluOp)
    return '';
  switch (aluOp.value_0) {
    case 0:
      return '00';
    case 1:
      return '01';
    case 2:
      return '10';
    case 3:
      return '11';
    default:return '';
  }
}

function values(){
  $clinit_ControlUnitConfiguration();
  return initValues(getClassLiteralForArray(Lcom_arm_legv8simulator_client_cpu_ControlUnitConfiguration_2_classLit, 1), $intern_9, 36, 0, [RRR, RRR_FLAGS, RRI, RRI_FLAGS, RM_LOAD, RM_STORE, RRM, RISI, L, L_COND, RL]);
}

defineClass(36, 8, {36:1, 3:1, 9:1, 8:1}, ControlUnitConfiguration);
var L, L_COND, RISI, RL, RM_LOAD, RM_STORE, RRI, RRI_FLAGS, RRM, RRR, RRR_FLAGS;
var Lcom_arm_legv8simulator_client_cpu_ControlUnitConfiguration_2_classLit = createForEnum('com.arm.legv8simulator.client.cpu', 'ControlUnitConfiguration', 36, values);
function Throwable(message){
  this.detailMessage = message;
  captureStackTrace(this, this.detailMessage);
}

defineClass(13, 1, $intern_10);
_.getMessage = function getMessage(){
  return this.detailMessage;
}
;
_.toString$ = function toString_5(){
  var className, msg;
  className = $getName(this.___clazz$);
  msg = this.getMessage();
  return msg != null?className + ': ' + msg:className;
}
;
var Ljava_lang_Throwable_2_classLit = createForClass('java.lang', 'Throwable', 13);
function Exception(){
  captureStackTrace(this, this.detailMessage);
}

defineClass(30, 13, $intern_10);
var Ljava_lang_Exception_2_classLit = createForClass('java.lang', 'Exception', 30);
function PCAlignmentException(address){
  Exception.call(this);
  this.address = address;
}

defineClass(103, 30, {103:1, 3:1, 13:1}, PCAlignmentException);
_.getMessage = function getMessage_0(){
  return 'The address 0x' + toPowerOfTwoUnsignedString(this.address) + ' is not word aligned.';
}
;
_.address = {l:0, m:0, h:0};
var Lcom_arm_legv8simulator_client_cpu_PCAlignmentException_2_classLit = createForClass('com.arm.legv8simulator.client.cpu', 'PCAlignmentException', 103);
function SPAlignmentException(address){
  Exception.call(this);
  this.address = address;
}

defineClass(104, 30, {104:1, 3:1, 13:1}, SPAlignmentException);
_.getMessage = function getMessage_1(){
  return 'Data transfer operation with misaligned SP: 0x' + toPowerOfTwoUnsignedString(this.address) + ' is not quadword aligned.';
}
;
_.address = {l:0, m:0, h:0};
var Lcom_arm_legv8simulator_client_cpu_SPAlignmentException_2_classLit = createForClass('com.arm.legv8simulator.client.cpu', 'SPAlignmentException', 104);
function $decodeInstructions(this$static){
  var i, ioobe, line, ule;
  for (i = 0; i < this$static.code_0.array.length; i++) {
    line = dynamicCast($get_1(this$static.code_0, i), 29);
    if (line.mnemonic) {
      try {
        $add_4(this$static.cpuInstructions, getInstruction(line.mnemonic, line.args, i, this$static.branchTable));
      }
       catch ($e0) {
        $e0 = wrap($e0);
        if (instanceOf($e0, 66)) {
          ule = $e0;
          $add_4(this$static.compileErrors, new Error_0("Undefined label: '" + ule.label_0 + "'", i));
        }
         else if (instanceOf($e0, 51)) {
          ioobe = $e0;
          $add_4(this$static.compileErrors, new Error_0($getMessage(ioobe), i));
        }
         else 
          throw unwrap($e0);
      }
    }
  }
}

function $parseCode(this$static){
  var errorMsg, i;
  for (i = 0; i < this$static.code_0.array.length; i++) {
    if ($getLine(dynamicCast($get_1(this$static.code_0, i), 29)).length) {
      $tokenize(dynamicCast($get_1(this$static.code_0, i), 29));
      if (dynamicCast($get_1(this$static.code_0, i), 29).tokens.array.length > 0) {
        errorMsg = $parse(dynamicCast($get_1(this$static.code_0, i), 29));
        errorMsg != null && $add_4(this$static.compileErrors, new Error_0(errorMsg, i));
      }
    }
  }
}

function $populateBranchTable(this$static){
  var i, instructionCount, label_0, mnem;
  instructionCount = 0;
  for (i = 0; i < this$static.code_0.array.length; i++) {
    label_0 = dynamicCast($get_1(this$static.code_0, i), 29).label_0;
    mnem = dynamicCast($get_1(this$static.code_0, i), 29).mnemonic;
    label_0 != null && $putStringValue(this$static.branchTable, label_0, valueOf_0(instructionCount));
    !!mnem && ++instructionCount;
  }
}

function LEGv8_Simulator(code_0){
  this.code_0 = code_0;
  this.branchTable = new HashMap;
  this.cpuInstructions = new ArrayList;
  this.cpu = new CPU;
  this.compileErrors = new ArrayList;
  $parseCode(this);
  $populateBranchTable(this);
  $decodeInstructions(this);
  this.memory = new Memory(this.cpuInstructions.array.length);
}

defineClass(120, 1, {});
_.getCPUCflag = function getCPUCflag(){
  return this.cpu.Cflag;
}
;
_.getCPUNflag = function getCPUNflag(){
  return this.cpu.Nflag;
}
;
_.getCPURegister = function getCPURegister(index_0){
  return $getRegister(this.cpu, index_0);
}
;
_.getCPUVflag = function getCPUVflag(){
  return this.cpu.Vflag;
}
;
_.getCPUZflag = function getCPUZflag(){
  return this.cpu.Zflag;
}
;
_.getPC = function getPC(){
  return add_1(mul(fromInt(this.cpu.instructionIndex), {l:4, m:0, h:0}), {l:0, m:1, h:0});
}
;
_.currentLineNumber = 0;
_.runtimeError = null;
var Lcom_arm_legv8simulator_client_executionmodes_LEGv8_1Simulator_2_classLit = createForClass('com.arm.legv8simulator.client.executionmodes', 'LEGv8_Simulator', 120);
function $BCondHazard(this$static){
  var hazardPresent;
  hazardPresent = false;
  if (this$static.pipeline[1]) {
    if (this$static.pipeline[1].instruction.mnemonic.type_0 == ($clinit_TokenType() , MNEMONIC_L) && this$static.pipeline[1].instruction.mnemonic != ($clinit_Mnemonic() , B)) {
      !!this$static.pipeline[2] && (hazardPresent = $setsFlags(this$static.pipeline[2].instruction.mnemonic));
      !!this$static.pipeline[3] && (hazardPresent = $setsFlags(this$static.pipeline[3].instruction.mnemonic));
    }
  }
  return hazardPresent;
}

function $clock(this$static){
  var before, currentInstruction, currentPC;
  if (this$static.cpu.instructionIndex == this$static.cpuInstructions.array.length) {
    this$static.currentLineNumber = dynamicCast($get_1(this$static.cpuInstructions, this$static.cpuInstructions.array.length - 1), 11).editorLineNumber;
    $pipelineEmpty(this$static) || (this$static.dataHazardStall || this$static.branchDataHazardStall?$insertBubble(this$static):$updatePipeline(this$static, null));
  }
   else {
    if (this$static.dataHazardStall || this$static.branchDataHazardStall) {
      $insertBubble(this$static);
    }
     else {
      if (!!this$static.pipeline[0] && this$static.pipeline[0].branchTaken) {
        $updatePipeline(this$static, new PipelineInstruction(this$static.nextInstruction, null, null, add_1(this$static.pipeline[0].PC, {l:4, m:0, h:0}), false));
      }
       else {
        currentPC = add_1(mul(fromInt(this$static.cpu.instructionIndex), {l:4, m:0, h:0}), {l:0, m:1, h:0});
        currentInstruction = dynamicCast($get_1(this$static.cpuInstructions, this$static.cpu.instructionIndex), 11);
        this$static.cpu.instructionIndex + 1 < this$static.cpuInstructions.array.length?(this$static.nextInstruction = dynamicCast($get_1(this$static.cpuInstructions, this$static.cpu.instructionIndex + 1), 11)):(this$static.nextInstruction = null);
        this$static.currentLineNumber = currentInstruction.editorLineNumber;
        before = new CPUSnapshot(this$static.cpu);
        this$static.runtimeError = $executeInstruction_0(this$static.cpu, this$static.cpuInstructions, this$static.memory);
        if (this$static.controlHazardStall && !this$static.branchDataHazardStall) {
          this$static.pipeline[0] = null;
          this$static.controlHazardStall = false;
        }
        $updatePipeline(this$static, new PipelineInstruction(currentInstruction, before, new CPUSnapshot(this$static.cpu), currentPC, this$static.cpu.branchTaken));
      }
    }
  }
  $detectControlHazard(this$static);
  $detectDataHazard(this$static);
}

function $detectControlHazard(this$static){
  if (this$static.pipeline[1]) {
    if (this$static.pipeline[1].instruction.mnemonic == ($clinit_Mnemonic() , B)) {
      this$static.controlHazardStall = true;
      $append_0(this$static.pipelineLog, 'Control Hazard: Flushing pipeline \n');
    }
     else if (this$static.pipeline[1].instruction.mnemonic.type_0 == ($clinit_TokenType() , MNEMONIC_L) || this$static.pipeline[1].instruction.mnemonic.type_0 == MNEMONIC_RL) {
      if (this$static.pipeline[1].branchTaken) {
        this$static.controlHazardStall = true;
        $append_0(this$static.pipelineLog, 'Control Hazard: Flushing pipeline \n');
      }
    }
  }
}

function $detectDataHazard(this$static){
  var hazardPresent, hazardPresent_0;
  if (hazardPresent = false , !!this$static.pipeline[1] && this$static.pipeline[1].instruction.mnemonic.type_0 == ($clinit_TokenType() , MNEMONIC_RL) && (hazardPresent = this$static.pipeline[1].instruction.args[0] == this$static.IDEX_Rd || this$static.pipeline[1].instruction.args[0] == this$static.EXMEM_Rd) , hazardPresent) {
    this$static.branchDataHazardStall = true;
    $append_0(this$static.pipelineLog, 'Data Hazard: Stalling pipeline \n');
  }
  if ($BCondHazard(this$static)) {
    this$static.branchDataHazardStall = true;
    $append_0(this$static.pipelineLog, 'Data Hazard: Stalling pipeline \n');
  }
  if (hazardPresent_0 = false , !!this$static.pipeline[2] && (hazardPresent_0 = this$static.pipeline[2].instruction.controlSignals == ($clinit_ControlUnitConfiguration() , RM_LOAD) && (this$static.IDEX_Rd == this$static.IFID_Rn || this$static.IDEX_Rd == this$static.IFID_Rm)) , hazardPresent_0) {
    this$static.dataHazardStall = true;
    $append_0(this$static.pipelineLog, 'Data Hazard: Stalling pipeline \n');
  }
  this$static.EXMEM_WB_RegWrite && this$static.EXMEM_Rd != 31 && this$static.EXMEM_Rd == this$static.IDEX_Rn && $append_0(this$static.pipelineLog, 'Data Hazard: EX, forward A \n');
  this$static.EXMEM_WB_RegWrite && this$static.EXMEM_Rd != 31 && this$static.EXMEM_Rd == this$static.IDEX_Rm && $append_0(this$static.pipelineLog, 'Data Hazard: EX, forward B \n');
  this$static.MEMWB_WB_RegWrite && this$static.MEMWB_Rd != 31 && !(this$static.EXMEM_WB_RegWrite && this$static.EXMEM_Rd != 31 && this$static.EXMEM_Rd == this$static.IDEX_Rn) && this$static.MEMWB_Rd == this$static.IDEX_Rn && $append_0(this$static.pipelineLog, 'Data Hazard: MEM, forward A \n');
  this$static.MEMWB_WB_RegWrite && this$static.MEMWB_Rd != 31 && !(this$static.EXMEM_WB_RegWrite && this$static.EXMEM_Rd != 31 && this$static.EXMEM_Rd == this$static.IDEX_Rm) && this$static.MEMWB_Rd == this$static.IDEX_Rm && $append_0(this$static.pipelineLog, 'Data Hazard: MEM, forward B \n');
}

function $insertBubble(this$static){
  var i;
  for (i = 4; i > 2; i--) {
    this$static.pipeline[i] = this$static.pipeline[i - 1];
  }
  this$static.pipeline[2] = null;
  !!this$static.pipeline[4] && (this$static.visibleState = this$static.pipeline[4].after);
  $updatePipelineRegisters(this$static);
  this$static.dataHazardStall = false;
  this$static.branchDataHazardStall = false;
  $logPipeline(this$static);
}

function $logPipeline(this$static){
  var i;
  for (i = 0; i < 5; i++) {
    !!this$static.pipeline[i] && !!this$static.pipeline[i].instruction?$append_0(this$static.pipelineLog, this$static.pipeline[i].instruction.mnemonic.nameUpper + ' | '):$append_0(this$static.pipelineLog, 'bubble | ');
  }
  $append_0(this$static.pipelineLog, '\n');
}

function $pipelineEmpty(this$static){
  var empty, i;
  empty = true;
  for (i = 0; i < 5; i++) {
    !!this$static.pipeline[i] && (empty = false);
  }
  return empty;
}

function $setsFlags(m){
  return m == ($clinit_Mnemonic() , ADDS) || m == SUBS || m == ANDS || m == ADDIS || m == SUBIS || m == ANDIS;
}

function $updateEXMEM(this$static){
  var a, c, insGroup;
  c = this$static.pipeline[3].instruction.controlSignals;
  this$static.EXMEM_WB_RegWrite = c.regWrite.value_0;
  a = this$static.pipeline[3].instruction.args;
  insGroup = this$static.pipeline[3].instruction.mnemonic.type_0;
  switch (insGroup.ordinal) {
    case 9:
    case 10:
      this$static.EXMEM_Rd = a[0];
      valueOf_1($getRegister_0(this$static.pipeline[3].after, a[0]));
      break;
    case 11:
      this$static.EXMEM_WB_RegWrite?(this$static.EXMEM_Rd = a[0]):valueOf_1($getRegister_0(this$static.pipeline[3].before, a[0]));
      valueOf_1(add_1($getRegister_0(this$static.pipeline[3].before, a[1]), fromInt(a[2])));
      break;
    case 12:
      valueOf_1(add_1($getRegister_0(this$static.pipeline[3].before, a[2]), fromInt(a[3])));
      valueOf_1($getRegister_0(this$static.pipeline[3].before, a[0]));
      this$static.EXMEM_Rd = a[1];
      break;
    case 6:
      this$static.EXMEM_Rd = a[0];
      valueOf_1($getRegister_0(this$static.pipeline[3].after, a[0]));
  }
}

function $updateIDEX(this$static){
  var a, c, insGroup;
  c = this$static.pipeline[2].instruction.controlSignals;
  this$static.IDEX_WB_RegWrite = c.regWrite.value_0;
  insGroup = this$static.pipeline[2].instruction.mnemonic.type_0;
  a = this$static.pipeline[2].instruction.args;
  switch (insGroup.ordinal) {
    case 10:
      this$static.IDEX_Rd = a[0];
      this$static.IDEX_Rn = a[1];
      this$static.IDEX_Rm = a[2];
      valueOf_1($getRegister_0(this$static.pipeline[2].before, a[1]));
      valueOf_1($getRegister_0(this$static.pipeline[2].before, a[2]));
      break;
    case 9:
      this$static.IDEX_Rd = a[0];
      this$static.IDEX_Rn = a[1];
      valueOf_1($getRegister_0(this$static.pipeline[2].before, a[1]));
      break;
    case 11:
      if (this$static.IDEX_WB_RegWrite) {
        this$static.IDEX_Rd = a[0];
        this$static.IDEX_Rn = a[1];
        valueOf_1(add_1($getRegister_0(this$static.pipeline[2].before, a[1]), fromInt(a[2])));
      }
       else {
        this$static.IDEX_Rn = a[1];
        this$static.IDEX_Rm = a[0];
        valueOf_1($getRegister_0(this$static.pipeline[2].before, a[1]));
        valueOf_1($getRegister_0(this$static.pipeline[2].before, a[0]));
      }

      break;
    case 12:
      this$static.IDEX_Rd = a[1];
      this$static.IDEX_Rn = a[2];
      this$static.IDEX_Rm = a[0];
      valueOf_1($getRegister_0(this$static.pipeline[2].before, a[1]));
      valueOf_1($getRegister_0(this$static.pipeline[2].before, a[0]));
      break;
    case 6:
      this$static.IDEX_Rd = a[0];
      break;
    case 14:
      this$static.IDEX_Rm = a[0];
  }
}

function $updateIFID(this$static){
  var a, insGroup;
  insGroup = this$static.pipeline[1].instruction.mnemonic.type_0;
  a = this$static.pipeline[1].instruction.args;
  switch (insGroup.ordinal) {
    case 10:
      this$static.IFID_Rn = a[1];
      this$static.IFID_Rm = a[2];
      break;
    case 9:
      this$static.IFID_Rn = a[1];
      break;
    case 11:
      if (this$static.pipeline[1].instruction.controlSignals == ($clinit_ControlUnitConfiguration() , RM_LOAD)) {
        this$static.IFID_Rn = a[1];
      }
       else {
        this$static.IFID_Rn = a[1];
        this$static.IFID_Rm = a[0];
      }

      break;
    case 12:
      this$static.IFID_Rn = a[2];
      this$static.IFID_Rm = a[0];
      break;
    case 14:
      this$static.IFID_Rm = a[0];
  }
}

function $updateMEMWB(this$static){
  var a, c, insGroup;
  c = this$static.pipeline[4].instruction.controlSignals;
  this$static.MEMWB_WB_RegWrite = c.regWrite.value_0;
  a = this$static.pipeline[4].instruction.args;
  insGroup = this$static.pipeline[4].instruction.mnemonic.type_0;
  switch (insGroup.ordinal) {
    case 9:
    case 10:
      this$static.MEMWB_Rd = a[0];
      valueOf_1($getRegister_0(this$static.pipeline[4].after, a[0]));
      break;
    case 11:
      if (this$static.MEMWB_WB_RegWrite) {
        this$static.MEMWB_Rd = a[0];
        valueOf_1($getRegister_0(this$static.pipeline[4].after, a[0]));
      }

      valueOf_1(add_1($getRegister_0(this$static.pipeline[4].before, a[1]), fromInt(a[2])));
      break;
    case 12:
      valueOf_1(add_1($getRegister_0(this$static.pipeline[4].before, a[2]), fromInt(a[3])));
      valueOf_1($getRegister_0(this$static.pipeline[4].after, a[1]));
      this$static.MEMWB_Rd = a[1];
      break;
    case 6:
      this$static.MEMWB_Rd = a[0];
      valueOf_1($getRegister_0(this$static.pipeline[4].after, a[0]));
  }
}

function $updatePipeline(this$static, nextInstruction){
  var i;
  for (i = 4; i > 0; i--) {
    this$static.pipeline[i] = this$static.pipeline[i - 1];
  }
  this$static.pipeline[0] = nextInstruction;
  !!this$static.pipeline[4] && (this$static.visibleState = this$static.pipeline[4].after);
  $updatePipelineRegisters(this$static);
  $logPipeline(this$static);
}

function $updatePipelineRegisters(this$static){
  this$static.IFID_Rn = -1;
  this$static.IFID_Rm = -1;
  this$static.IDEX_WB_RegWrite = false;
  this$static.IDEX_Rn = -1;
  this$static.IDEX_Rm = -1;
  this$static.IDEX_Rd = -1;
  this$static.EXMEM_WB_RegWrite = false;
  this$static.EXMEM_Rd = -1;
  this$static.MEMWB_WB_RegWrite = false;
  this$static.MEMWB_Rd = -1;
  !!this$static.pipeline[1] && $updateIFID(this$static);
  !!this$static.pipeline[2] && $updateIDEX(this$static);
  !!this$static.pipeline[3] && $updateEXMEM(this$static);
  !!this$static.pipeline[4] && $updateMEMWB(this$static);
}

function PipelinedSimulator(code_0){
  LEGv8_Simulator.call(this, code_0);
  this.IFID_Rn = -1;
  this.IFID_Rm = -1;
  this.IDEX_WB_RegWrite = false;
  this.IDEX_Rn = -1;
  this.IDEX_Rm = -1;
  this.IDEX_Rd = -1;
  this.EXMEM_WB_RegWrite = false;
  this.EXMEM_Rd = -1;
  this.MEMWB_WB_RegWrite = false;
  this.MEMWB_Rd = -1;
  this.dataHazardStall = false;
  this.branchDataHazardStall = false;
  this.controlHazardStall = false;
  this.pipelineLog = new StringBuilder('');
  this.pipeline = initDim(Lcom_arm_legv8simulator_client_instruction_PipelineInstruction_2_classLit, $intern_7, 89, 5, 0, 1);
  this.visibleState = new CPUSnapshot(this.cpu);
}

defineClass(135, 120, {}, PipelinedSimulator);
_.getCPUCflag = function getCPUCflag_0(){
  return this.visibleState.Cflag;
}
;
_.getCPUNflag = function getCPUNflag_0(){
  return this.visibleState.Nflag;
}
;
_.getCPURegister = function getCPURegister_0(index_0){
  return $getRegister_0(this.visibleState, index_0);
}
;
_.getCPUVflag = function getCPUVflag_0(){
  return this.visibleState.Vflag;
}
;
_.getCPUZflag = function getCPUZflag_0(){
  return this.visibleState.Zflag;
}
;
_.getPC = function getPC_0(){
  return !!this.pipeline[0] && !!this.pipeline[0].before?add_1(this.pipeline[0].PC, {l:4, m:0, h:0}):add_1(mul(fromInt(this.cpu.instructionIndex), {l:4, m:0, h:0}), {l:0, m:1, h:0});
}
;
_.EXMEM_Rd = 0;
_.EXMEM_WB_RegWrite = false;
_.IDEX_Rd = 0;
_.IDEX_Rm = 0;
_.IDEX_Rn = 0;
_.IDEX_WB_RegWrite = false;
_.IFID_Rm = 0;
_.IFID_Rn = 0;
_.MEMWB_Rd = 0;
_.MEMWB_WB_RegWrite = false;
_.branchDataHazardStall = false;
_.controlHazardStall = false;
_.dataHazardStall = false;
var Lcom_arm_legv8simulator_client_executionmodes_PipelinedSimulator_2_classLit = createForClass('com.arm.legv8simulator.client.executionmodes', 'PipelinedSimulator', 135);
function $executeInstruction_1(this$static){
  this$static.previousInstructionIndex = this$static.currentInstructionIndex;
  this$static.currentInstructionIndex = this$static.cpu.instructionIndex;
  this$static.previousInstruction = this$static.currentInstruction;
  this$static.currentInstruction = dynamicCast($get_1(this$static.cpuInstructions, this$static.cpu.instructionIndex), 11);
  this$static.currentLineNumber = dynamicCast($get_1(this$static.cpuInstructions, this$static.cpu.instructionIndex), 11).editorLineNumber;
  this$static.runtimeError = $executeInstruction_0(this$static.cpu, this$static.cpuInstructions, this$static.memory);
}

function SingleCycleSimulator(code_0){
  LEGv8_Simulator.call(this, code_0);
  this.currentInstructionIndex = 0;
  this.previousInstructionIndex = 0;
}

defineClass(134, 120, {}, SingleCycleSimulator);
_.currentInstructionIndex = 0;
_.previousInstructionIndex = 0;
var Lcom_arm_legv8simulator_client_executionmodes_SingleCycleSimulator_2_classLit = createForClass('com.arm.legv8simulator.client.executionmodes', 'SingleCycleSimulator', 134);
function $clinit_Decoder(){
  $clinit_Decoder = emptyMethod;
  WIDE_SHIFT_IMM = initValues(getClassLiteralForArray(I_classLit, 1), $intern_2, 0, 7, [0, 16, 32, 48]);
}

function decodeExclusiveImmediate(imm){
  var result;
  try {
    result = parseImmediate(imm);
  }
   catch ($e0) {
    $e0 = wrap($e0);
    if (instanceOf($e0, 28)) {
      throw new ImmediateOutOfBoundsException(imm);
    }
     else 
      throw unwrap($e0);
  }
  if (result == 0) {
    return 0;
  }
  throw new ImmediateOutOfBoundsException(imm);
}

function decodeImmediate(imm, lowerBound, upperBound){
  var result;
  try {
    result = parseImmediate(imm);
  }
   catch ($e0) {
    $e0 = wrap($e0);
    if (instanceOf($e0, 28)) {
      throw new ImmediateOutOfBoundsException_0(imm, lowerBound, upperBound);
    }
     else 
      throw unwrap($e0);
  }
  if (result >= lowerBound && result <= upperBound) {
    return result;
  }
   else {
    throw new ImmediateOutOfBoundsException_0(imm, lowerBound, upperBound);
  }
}

function decodeLArgs(args, branchTable){
  var instructionIndex;
  instructionIndex = initDim(I_classLit, $intern_2, 0, 1, 7, 1);
  try {
    instructionIndex[0] = dynamicCast($get_0(branchTable, (checkElementIndex(0, args.array.length) , args.array[0])), 47).value_0;
  }
   catch ($e0) {
    $e0 = wrap($e0);
    if (instanceOf($e0, 58)) {
      throw new UndefinedLabelException((checkElementIndex(0, args.array.length) , dynamicCastToString(args.array[0])));
    }
     else if (instanceOf($e0, 48)) {
      throw new UndefinedLabelException((checkElementIndex(0, args.array.length) , dynamicCastToString(args.array[0])));
    }
     else 
      throw unwrap($e0);
  }
  return instructionIndex;
}

function decodeRISIArgs(args){
  var operands;
  operands = initDim(I_classLit, $intern_2, 0, 3, 7, 1);
  operands[0] = decodeRegister((checkElementIndex(0, args.array.length) , dynamicCastToString(args.array[0])));
  operands[1] = decodeImmediate((checkElementIndex(1, args.array.length) , dynamicCastToString(args.array[1])), 0, 65535);
  args.array.length == 4 && (operands[2] = decodeWideOffsetImmediate((checkElementIndex(3, args.array.length) , dynamicCastToString(args.array[3]))));
  return operands;
}

function decodeRLArgs(args, branchTable){
  var operands;
  operands = initDim(I_classLit, $intern_2, 0, 2, 7, 1);
  operands[0] = decodeRegister((checkElementIndex(0, args.array.length) , dynamicCastToString(args.array[0])));
  try {
    operands[1] = dynamicCast($get_0(branchTable, (checkElementIndex(1, args.array.length) , args.array[1])), 47).value_0;
  }
   catch ($e0) {
    $e0 = wrap($e0);
    if (instanceOf($e0, 58)) {
      throw new UndefinedLabelException((checkElementIndex(1, args.array.length) , dynamicCastToString(args.array[1])));
    }
     else if (instanceOf($e0, 48)) {
      throw new UndefinedLabelException((checkElementIndex(1, args.array.length) , dynamicCastToString(args.array[1])));
    }
     else 
      throw unwrap($e0);
  }
  return operands;
}

function decodeRMArgs(args){
  var operands;
  operands = initDim(I_classLit, $intern_2, 0, 3, 7, 1);
  operands[0] = decodeRegister((checkElementIndex(0, args.array.length) , dynamicCastToString(args.array[0])));
  operands[1] = decodeRegister((checkElementIndex(1, args.array.length) , dynamicCastToString(args.array[1])));
  args.array.length == 3 && (operands[2] = decodeImmediate((checkElementIndex(2, args.array.length) , dynamicCastToString(args.array[2])), -256, 255));
  return operands;
}

function decodeRRIArithmeticArgs(args){
  var operands;
  operands = initDim(I_classLit, $intern_2, 0, 3, 7, 1);
  operands[0] = decodeRegister((checkElementIndex(0, args.array.length) , dynamicCastToString(args.array[0])));
  operands[1] = decodeRegister((checkElementIndex(1, args.array.length) , dynamicCastToString(args.array[1])));
  operands[2] = decodeImmediate((checkElementIndex(2, args.array.length) , dynamicCastToString(args.array[2])), 0, 4095);
  return operands;
}

function decodeRRILogicalArgs(args){
  var operands;
  operands = initDim(I_classLit, $intern_2, 0, 3, 7, 1);
  operands[0] = decodeRegister((checkElementIndex(0, args.array.length) , dynamicCastToString(args.array[0])));
  operands[1] = decodeRegister((checkElementIndex(1, args.array.length) , dynamicCastToString(args.array[1])));
  operands[2] = decodeImmediate((checkElementIndex(2, args.array.length) , dynamicCastToString(args.array[2])), 0, 4095);
  return operands;
}

function decodeRRIShiftArgs(args){
  var operands;
  operands = initDim(I_classLit, $intern_2, 0, 3, 7, 1);
  operands[0] = decodeRegister((checkElementIndex(0, args.array.length) , dynamicCastToString(args.array[0])));
  operands[1] = decodeRegister((checkElementIndex(1, args.array.length) , dynamicCastToString(args.array[1])));
  operands[2] = decodeImmediate((checkElementIndex(2, args.array.length) , dynamicCastToString(args.array[2])), 0, 63);
  return operands;
}

function decodeRRRArgs(args){
  var operands;
  operands = initDim(I_classLit, $intern_2, 0, 2, 7, 1);
  operands[0] = decodeRegister((checkElementIndex(0, args.array.length) , dynamicCastToString(args.array[0])));
  operands[1] = decodeRegister((checkElementIndex(1, args.array.length) , dynamicCastToString(args.array[1])));
  operands[2] = decodeRegister((checkElementIndex(2, args.array.length) , dynamicCastToString(args.array[2])));
  return operands;
}

function decodeRegister(reg){
  switch (reg) {
    case 'xzr':
    case 'XZR':
      return 31;
    case 'ip0':
    case 'IP0':
      return 16;
    case 'ip1':
    case 'IP1':
      return 17;
    case 'sp':
    case 'SP':
      return 28;
    case 'fp':
    case 'FP':
      return 29;
    case 'lr':
    case 'LR':
      return 30;
    default:return __parseAndValidateInt(__substr(reg, 1, reg.length - 1), 10);
  }
}

function decodeWideOffsetImmediate(imm){
  var i, result;
  try {
    result = parseImmediate(imm);
  }
   catch ($e0) {
    $e0 = wrap($e0);
    if (instanceOf($e0, 28)) {
      throw new ImmediateOutOfBoundsException_0(imm, 0, 48);
    }
     else 
      throw unwrap($e0);
  }
  for (i = 0; i < WIDE_SHIFT_IMM.length; i++) {
    if (result == WIDE_SHIFT_IMM[i]) {
      return result;
    }
  }
  throw new ImmediateOutOfBoundsException_1(imm, WIDE_SHIFT_IMM);
}

function getInstruction(mnemonic, args, lineNumber, branchTable){
  var operands, operands_0, operands_1, operands_2, operands_3;
  $clinit_Decoder();
  switch (mnemonic.ordinal) {
    case 4:
    case 8:
    case 12:
    case 14:
    case 0:
      return new Instruction(mnemonic, decodeRRRArgs(args), lineNumber, ($clinit_ControlUnitConfiguration() , RRR));
    case 5:
    case 9:
    case 1:
      return new Instruction(mnemonic, decodeRRRArgs(args), lineNumber, ($clinit_ControlUnitConfiguration() , RRR_FLAGS));
    case 6:
    case 2:
      return new Instruction(mnemonic, decodeRRIArithmeticArgs(args), lineNumber, ($clinit_ControlUnitConfiguration() , RRI));
    case 7:
    case 3:
      return new Instruction(mnemonic, decodeRRIArithmeticArgs(args), lineNumber, ($clinit_ControlUnitConfiguration() , RRI_FLAGS));
    case 13:
    case 15:
    case 10:
      return new Instruction(mnemonic, decodeRRILogicalArgs(args), lineNumber, ($clinit_ControlUnitConfiguration() , RRI));
    case 11:
      return new Instruction(mnemonic, decodeRRILogicalArgs(args), lineNumber, ($clinit_ControlUnitConfiguration() , RRI_FLAGS));
    case 17:
    case 16:
      return new Instruction(mnemonic, decodeRRIShiftArgs(args), lineNumber, ($clinit_ControlUnitConfiguration() , RRI));
    case 20:
    case 22:
    case 24:
    case 26:
    case 18:
      return new Instruction(mnemonic, decodeRMArgs(args), lineNumber, ($clinit_ControlUnitConfiguration() , RM_LOAD));
    case 21:
    case 23:
    case 25:
    case 19:
      return new Instruction(mnemonic, decodeRMArgs(args), lineNumber, ($clinit_ControlUnitConfiguration() , RM_STORE));
    case 27:
      return new Instruction(mnemonic, (operands = initDim(I_classLit, $intern_2, 0, 4, 7, 1) , operands[0] = decodeRegister((checkElementIndex(0, args.array.length) , dynamicCastToString(args.array[0]))) , operands[1] = decodeRegister((checkElementIndex(1, args.array.length) , dynamicCastToString(args.array[1]))) , operands[2] = decodeRegister((checkElementIndex(2, args.array.length) , dynamicCastToString(args.array[2]))) , args.array.length == 4 && (operands[3] = decodeExclusiveImmediate((checkElementIndex(3, args.array.length) , dynamicCastToString(args.array[3])))) , operands), lineNumber, ($clinit_ControlUnitConfiguration() , RRM));
    case 29:
    case 28:
      return new Instruction(mnemonic, decodeRISIArgs(args), lineNumber, ($clinit_ControlUnitConfiguration() , RISI));
    case 31:
    case 30:
      return new Instruction(mnemonic, decodeRLArgs(args, branchTable), lineNumber, ($clinit_ControlUnitConfiguration() , RL));
    case 33:
    case 34:
    case 35:
    case 36:
    case 37:
    case 38:
    case 39:
    case 40:
    case 41:
    case 42:
    case 43:
    case 44:
    case 45:
    case 32:
      return new Instruction(mnemonic, decodeLArgs(args, branchTable), lineNumber, ($clinit_ControlUnitConfiguration() , L_COND));
    case 46:
      return new Instruction(mnemonic, decodeLArgs(args, branchTable), lineNumber, ($clinit_ControlUnitConfiguration() , L));
    case 47:
      return new Instruction(mnemonic, (operands_0 = initDim(I_classLit, $intern_2, 0, 1, 7, 1) , operands_0[0] = decodeRegister((checkElementIndex(0, args.array.length) , dynamicCastToString(args.array[0]))) , operands_0), lineNumber, null);
    case 48:
      return new Instruction(mnemonic, decodeLArgs(args, branchTable), lineNumber, null);
    case 49:
      return new Instruction(($clinit_Mnemonic() , SUBS), (operands_1 = initDim(I_classLit, $intern_2, 0, 3, 7, 1) , operands_1[0] = decodeRegister('XZR') , operands_1[1] = decodeRegister((checkElementIndex(0, args.array.length) , dynamicCastToString(args.array[0]))) , operands_1[2] = decodeRegister((checkElementIndex(1, args.array.length) , dynamicCastToString(args.array[1]))) , operands_1), lineNumber, null);
    case 50:
      return new Instruction(($clinit_Mnemonic() , SUBIS), (operands_2 = initDim(I_classLit, $intern_2, 0, 3, 7, 1) , operands_2[0] = decodeRegister('XZR') , operands_2[1] = decodeRegister((checkElementIndex(0, args.array.length) , dynamicCastToString(args.array[0]))) , operands_2[2] = decodeImmediate((checkElementIndex(0, args.array.length) , dynamicCastToString(args.array[0])), 0, 4095) , operands_2), lineNumber, null);
    case 51:
      return new Instruction(($clinit_Mnemonic() , ORR), (operands_3 = initDim(I_classLit, $intern_2, 0, 3, 7, 1) , operands_3[0] = decodeRegister((checkElementIndex(0, args.array.length) , dynamicCastToString(args.array[0]))) , operands_3[1] = decodeRegister('XZR') , operands_3[2] = decodeRegister((checkElementIndex(1, args.array.length) , dynamicCastToString(args.array[1]))) , operands_3), lineNumber, null);
    default:return null;
  }
}

function parseImmediate(imm){
  if ($equals(imm.substr(0, 1), '#')) {
    return valueOf_0(__decodeAndValidateInt(__substr(imm, 1, imm.length - 1))).value_0;
  }
  return valueOf_0(__decodeAndValidateInt(imm)).value_0;
}

var WIDE_SHIFT_IMM;
function $getMessage(this$static){
  var i, msg;
  if (this$static.cases == null) {
    return 'Illegal immediate value: ' + this$static.illegalImm + '. Permitted range: ' + this$static.lowerBound + ' - ' + this$static.upperBound + ' inclusive.';
  }
   else {
    msg = 'Illegal immediate value: ' + this$static.illegalImm + '. Permitted values: ';
    for (i = 0; i < this$static.cases.length; i++) {
      msg += this$static.cases[i];
      i < this$static.cases.length - 1 && (msg += ', ');
    }
    return msg;
  }
}

function ImmediateOutOfBoundsException(imm){
  Exception.call(this);
  this.illegalImm = imm;
  this.cases = initValues(getClassLiteralForArray(I_classLit, 1), $intern_2, 0, 7, [0]);
}

function ImmediateOutOfBoundsException_0(imm, lowerBound, upperBound){
  Exception.call(this);
  this.illegalImm = imm;
  this.lowerBound = lowerBound;
  this.upperBound = upperBound;
}

function ImmediateOutOfBoundsException_1(imm, cases){
  Exception.call(this);
  this.illegalImm = imm;
  this.cases = cases;
}

defineClass(51, 30, {51:1, 3:1, 13:1}, ImmediateOutOfBoundsException, ImmediateOutOfBoundsException_0, ImmediateOutOfBoundsException_1);
_.getMessage = function getMessage_2(){
  return $getMessage(this);
}
;
_.lowerBound = 0;
_.upperBound = 0;
var Lcom_arm_legv8simulator_client_instruction_ImmediateOutOfBoundsException_2_classLit = createForClass('com.arm.legv8simulator.client.instruction', 'ImmediateOutOfBoundsException', 51);
function Instruction(mnemonic, args, editorLineNumber, controlSignals){
  this.mnemonic = mnemonic;
  this.args = args;
  this.editorLineNumber = editorLineNumber;
  this.controlSignals = controlSignals;
}

defineClass(11, 1, {11:1}, Instruction);
_.editorLineNumber = 0;
var Lcom_arm_legv8simulator_client_instruction_Instruction_2_classLit = createForClass('com.arm.legv8simulator.client.instruction', 'Instruction', 11);
function $clinit_Mnemonic(){
  $clinit_Mnemonic = emptyMethod;
  ADD = new Mnemonic('ADD', 0, 'ADD', 'add', ($clinit_TokenType() , MNEMONIC_RRR), '10001011000');
  ADDS = new Mnemonic('ADDS', 1, 'ADDS', 'adds', MNEMONIC_RRR, '10101011000');
  ADDI = new Mnemonic('ADDI', 2, 'ADDI', 'addi', MNEMONIC_RRI, '1001000100');
  ADDIS = new Mnemonic('ADDIS', 3, 'ADDIS', 'addis', MNEMONIC_RRI, '1011000100');
  SUB = new Mnemonic('SUB', 4, 'SUB', 'sub', MNEMONIC_RRR, '11001011000');
  SUBS = new Mnemonic('SUBS', 5, 'SUBS', 'subs', MNEMONIC_RRR, '11101011000');
  SUBI = new Mnemonic('SUBI', 6, 'SUBI', 'subi', MNEMONIC_RRI, '1101000100');
  SUBIS = new Mnemonic('SUBIS', 7, 'SUBIS', 'subis', MNEMONIC_RRI, '1111000100');
  AND = new Mnemonic('AND', 8, 'AND', 'and', MNEMONIC_RRR, '10001010000');
  ANDS = new Mnemonic('ANDS', 9, 'ANDS', 'ands', MNEMONIC_RRR, '11101010000');
  ANDI = new Mnemonic('ANDI', 10, 'ANDI', 'andi', MNEMONIC_RRI, '1001001000');
  ANDIS = new Mnemonic('ANDIS', 11, 'ANDIS', 'andis', MNEMONIC_RRI, '1111001000');
  ORR = new Mnemonic('ORR', 12, 'ORR', 'orr', MNEMONIC_RRR, '10101010000');
  ORRI = new Mnemonic('ORRI', 13, 'ORRI', 'orri', MNEMONIC_RRI, '1011001000');
  EOR = new Mnemonic('EOR', 14, 'EOR', 'eor', MNEMONIC_RRR, '11001010000');
  EORI = new Mnemonic('EORI', 15, 'EORI', 'eori', MNEMONIC_RRI, '1101001000');
  LSL = new Mnemonic('LSL', 16, 'LSL', 'lsl', MNEMONIC_RRI, '11010011011');
  LSR = new Mnemonic('LSR', 17, 'LSR', 'lsr', MNEMONIC_RRI, '11010011010');
  LDUR = new Mnemonic('LDUR', 18, 'LDUR', 'ldur', MNEMONIC_RM, '11111000010');
  STUR = new Mnemonic('STUR', 19, 'STUR', 'stur', MNEMONIC_RM, '11111000000');
  LDURSW = new Mnemonic('LDURSW', 20, 'LDURSW', 'ldursw', MNEMONIC_RM, '10111000100');
  STURW = new Mnemonic('STURW', 21, 'STURW', 'sturw', MNEMONIC_RM, '10111000000');
  LDURH = new Mnemonic('LDURH', 22, 'LDURH', 'ldurh', MNEMONIC_RM, '01111000010');
  STURH = new Mnemonic('STURH', 23, 'STURH', 'sturh', MNEMONIC_RM, '01111000000');
  LDURB = new Mnemonic('LDURB', 24, 'LDURB', 'ldurb', MNEMONIC_RM, '00111000010');
  STURB = new Mnemonic('STURB', 25, 'STURB', 'sturb', MNEMONIC_RM, '00111000000');
  LDXR = new Mnemonic('LDXR', 26, 'LDXR', 'ldxr', MNEMONIC_RM, '11001000010');
  STXR = new Mnemonic('STXR', 27, 'STXR', 'stxr', MNEMONIC_RRM, '11001000000');
  MOVZ = new Mnemonic('MOVZ', 28, 'MOVZ', 'movz', MNEMONIC_RISI, '110100101');
  MOVK = new Mnemonic('MOVK', 29, 'MOVK', 'movk', MNEMONIC_RISI, '111100101');
  CBZ = new Mnemonic('CBZ', 30, 'CBZ', 'cbz', MNEMONIC_RL, '10110100');
  CBNZ = new Mnemonic('CBNZ', 31, 'CBNZ', 'cbnz', MNEMONIC_RL, '10110101');
  BEQ = new Mnemonic('BEQ', 32, 'B.EQ', 'b.eq', MNEMONIC_L, '01010100');
  BNE = new Mnemonic('BNE', 33, 'B.NE', 'b.ne', MNEMONIC_L, '01010100');
  BHS = new Mnemonic('BHS', 34, 'B.HS', 'b.hs', MNEMONIC_L, '01010100');
  BLO = new Mnemonic('BLO', 35, 'B.LO', 'b.lo', MNEMONIC_L, '01010100');
  BHI = new Mnemonic('BHI', 36, 'B.HI', 'b.hi', MNEMONIC_L, '01010100');
  BLS = new Mnemonic('BLS', 37, 'B.LS', 'b.ls', MNEMONIC_L, '01010100');
  BGE = new Mnemonic('BGE', 38, 'B.GE', 'b.ge', MNEMONIC_L, '01010100');
  BLT = new Mnemonic('BLT', 39, 'B.LT', 'b.lt', MNEMONIC_L, '01010100');
  BGT = new Mnemonic('BGT', 40, 'B.GT', 'b.gt', MNEMONIC_L, '01010100');
  BLE = new Mnemonic('BLE', 41, 'B.LE', 'b.le', MNEMONIC_L, '01010100');
  BMI = new Mnemonic('BMI', 42, 'B.MI', 'b.mi', MNEMONIC_L, '01010100');
  BPL = new Mnemonic('BPL', 43, 'B.PL', 'b.pl', MNEMONIC_L, '01010100');
  BVS = new Mnemonic('BVS', 44, 'B.VS', 'b.vs', MNEMONIC_L, '01010100');
  BVC = new Mnemonic('BVC', 45, 'B.VC', 'b.vc', MNEMONIC_L, '01010100');
  B = new Mnemonic('B', 46, 'B', 'b', MNEMONIC_L, '00101');
  BR = new Mnemonic('BR', 47, 'BR', 'br', MNEMONIC_R, '11010110000');
  BL = new Mnemonic('BL', 48, 'BL', 'bl', MNEMONIC_L, '100101');
  CMP = new Mnemonic('CMP', 49, 'CMP', 'cmp', MNEMONIC_RR, null);
  CMPI = new Mnemonic('CMPI', 50, 'CMPI', 'cmpi', MNEMONIC_RI, null);
  MOV = new Mnemonic('MOV', 51, 'MOV', 'mov', MNEMONIC_RR, null);
}

function Mnemonic(enum$name, enum$ordinal, nameUpper, nameLower, type_0, opcode){
  Enum.call(this, enum$name, enum$ordinal);
  this.nameUpper = nameUpper;
  this.nameLower = nameLower;
  this.type_0 = type_0;
  this.opcode = opcode;
}

function fromString(name_0){
  $clinit_Mnemonic();
  var m, m$array, m$index, m$max;
  if (name_0 != null) {
    for (m$array = values_0() , m$index = 0 , m$max = m$array.length; m$index < m$max; ++m$index) {
      m = m$array[m$index];
      if ($equals(name_0, m.nameUpper) || $equals(name_0, m.nameLower)) {
        return m;
      }
    }
  }
  throw new IllegalArgumentException(name_0 + ' instruction mnemonic does not exist in LEGv8');
}

function values_0(){
  $clinit_Mnemonic();
  return initValues(getClassLiteralForArray(Lcom_arm_legv8simulator_client_instruction_Mnemonic_2_classLit, 1), $intern_9, 12, 0, [ADD, ADDS, ADDI, ADDIS, SUB, SUBS, SUBI, SUBIS, AND, ANDS, ANDI, ANDIS, ORR, ORRI, EOR, EORI, LSL, LSR, LDUR, STUR, LDURSW, STURW, LDURH, STURH, LDURB, STURB, LDXR, STXR, MOVZ, MOVK, CBZ, CBNZ, BEQ, BNE, BHS, BLO, BHI, BLS, BGE, BLT, BGT, BLE, BMI, BPL, BVS, BVC, B, BR, BL, CMP, CMPI, MOV]);
}

defineClass(12, 8, {12:1, 3:1, 9:1, 8:1}, Mnemonic);
var ADD, ADDI, ADDIS, ADDS, AND, ANDI, ANDIS, ANDS, B, BEQ, BGE, BGT, BHI, BHS, BL, BLE, BLO, BLS, BLT, BMI, BNE, BPL, BR, BVC, BVS, CBNZ, CBZ, CMP, CMPI, EOR, EORI, LDUR, LDURB, LDURH, LDURSW, LDXR, LSL, LSR, MOV, MOVK, MOVZ, ORR, ORRI, STUR, STURB, STURH, STURW, STXR, SUB, SUBI, SUBIS, SUBS;
var Lcom_arm_legv8simulator_client_instruction_Mnemonic_2_classLit = createForEnum('com.arm.legv8simulator.client.instruction', 'Mnemonic', 12, values_0);
function PipelineInstruction(instruction, before, after, PC, branchTaken){
  this.instruction = instruction;
  this.before = before;
  this.after = after;
  this.PC = PC;
  this.branchTaken = branchTaken;
}

defineClass(89, 1, {89:1}, PipelineInstruction);
_.PC = {l:0, m:0, h:0};
_.branchTaken = false;
var Lcom_arm_legv8simulator_client_instruction_PipelineInstruction_2_classLit = createForClass('com.arm.legv8simulator.client.instruction', 'PipelineInstruction', 89);
function UndefinedLabelException(label_0){
  Exception.call(this);
  this.label_0 = label_0;
}

defineClass(66, 30, {66:1, 3:1, 13:1}, UndefinedLabelException);
_.getMessage = function getMessage_3(){
  return "Undefined label: '" + this.label_0 + "'";
}
;
var Lcom_arm_legv8simulator_client_instruction_UndefinedLabelException_2_classLit = createForClass('com.arm.legv8simulator.client.instruction', 'UndefinedLabelException', 66);
function lex(input_0){
  var matcher, tokenPatterns, tokenPatternsBuffer, tokens, type_0, type$array, type$array0, type$index, type$index0, type$max, type$max0;
  tokens = new ArrayList;
  tokenPatternsBuffer = new StringBuffer;
  for (type$array0 = values_1() , type$index0 = 0 , type$max0 = type$array0.length; type$index0 < type$max0; ++type$index0) {
    type_0 = type$array0[type$index0];
    $append(tokenPatternsBuffer, '|(' + type_0.pattern + ')');
  }
  tokenPatterns = compile($substring(tokenPatternsBuffer.string, 1), 'g');
  for (matcher = tokenPatterns.exec(input_0); matcher; matcher = tokenPatterns.exec(input_0)) {
    for (type$array = values_1() , type$index = 0 , type$max = type$array.length; type$index < type$max; ++type$index) {
      type_0 = type$array[type$index];
      if (type_0 == ($clinit_TokenType() , WHITESPACE)) {
        continue;
      }
      if (matcher[type_0.groupNumber] != null) {
        $add_4(tokens, new Token(type_0, matcher[type_0.groupNumber]));
        break;
      }
    }
  }
  return tokens;
}

function $decodeLine(this$static){
  var t, t$iterator;
  for (t$iterator = new AbstractList$IteratorImpl(this$static.tokens); t$iterator.i < t$iterator.this$01_0.size_1();) {
    t = (checkCriticalElement(t$iterator.i < t$iterator.this$01_0.size_1()) , dynamicCast(t$iterator.this$01_0.get_0(t$iterator.i++), 34));
    switch (t.type_0.ordinal) {
      case 2:
      case 0:
      case 1:
      case 17:
        break;
      case 15:
        this$static.label_0 = $substring_0(t.data_0, 0, t.data_0.length - 1);
        break;
      case 3:
      case 16:
      case 4:
        $add_4(this$static.args, t.data_0);
        break;
      case 18:
        this$static.comment += 'something has gone very wrong for this to happen!';
        break;
      default:if (!this$static.mnemonic) {
          this$static.mnemonic = fromString($trim(t.data_0));
          this$static.mneType = t.type_0;
        }
         else {
          $add_4(this$static.args, $trim(t.data_0));
        }

    }
  }
}

function $formatArgs(this$static){
  switch (this$static.mneType.ordinal) {
    case 13:
    case 5:
      return dynamicCastToString($get_1(this$static.args, 0));
    case 7:
    case 14:
    case 8:
      return dynamicCastToString($get_1(this$static.args, 0)) + ', ' + dynamicCastToString($get_1(this$static.args, 1));
    case 9:
    case 10:
      return dynamicCastToString($get_1(this$static.args, 0)) + ', ' + dynamicCastToString($get_1(this$static.args, 1)) + ', ' + dynamicCastToString($get_1(this$static.args, 2));
    case 11:
      return this$static.args.array.length == 2?dynamicCastToString($get_1(this$static.args, 0)) + ', [' + dynamicCastToString($get_1(this$static.args, 1)) + ']':dynamicCastToString($get_1(this$static.args, 0)) + ', [' + dynamicCastToString($get_1(this$static.args, 1)) + ', ' + dynamicCastToString($get_1(this$static.args, 2)) + ']';
    case 12:
      return this$static.args.array.length == 3?dynamicCastToString($get_1(this$static.args, 0)) + ', ' + dynamicCastToString($get_1(this$static.args, 1)) + ', [' + dynamicCastToString($get_1(this$static.args, 2)) + ']':dynamicCastToString($get_1(this$static.args, 0)) + ', ' + dynamicCastToString($get_1(this$static.args, 1)) + ', [' + dynamicCastToString($get_1(this$static.args, 2)) + ', ' + dynamicCastToString($get_1(this$static.args, 3)) + ']';
    case 6:
      return this$static.args.array.length == 2?dynamicCastToString($get_1(this$static.args, 0)) + ', ' + dynamicCastToString($get_1(this$static.args, 1)):dynamicCastToString($get_1(this$static.args, 0)) + ', ' + dynamicCastToString($get_1(this$static.args, 1)) + ', LSL ' + dynamicCastToString($get_1(this$static.args, 3));
    default:return 'Args formatting Failed.';
  }
}

function $getLine(this$static){
  var line;
  if (!this$static.parsed) {
    return this$static.line;
  }
  line = '';
  this$static.label_0 != null && (line += this$static.label_0 + ':');
  !!this$static.mnemonic && (line += '\t' + this$static.mnemonic.nameUpper + '\t');
  this$static.args.array.length != 0 && (line += $formatArgs(this$static));
  if (!line.length) {
    return this$static.line;
  }
   else {
    this$static.comment != null && (line += '\t' + this$static.comment);
  }
  return line;
}

function $parse(this$static){
  var error;
  error = parseLine(this$static.tokens);
  this$static.parsed = error == null;
  this$static.parsed && $decodeLine(this$static);
  return error;
}

function $removeComment(this$static){
  var commentIdentifierIndex;
  commentIdentifierIndex = this$static.line.indexOf('//');
  if (commentIdentifierIndex != -1) {
    this$static.comment = $substring(this$static.line, commentIdentifierIndex);
    this$static.lineNoComment = $substring_0(this$static.line, 0, commentIdentifierIndex);
  }
   else {
    this$static.lineNoComment = this$static.line;
  }
}

function $tokenize(this$static){
  this$static.tokens = lex(this$static.lineNoComment);
}

function TextLine(line){
  this.tokens = new ArrayList;
  this.args = new ArrayList;
  this.line = line;
  $removeComment(this);
}

defineClass(29, 1, {29:1}, TextLine);
_.comment = null;
_.label_0 = null;
_.mneType = null;
_.mnemonic = null;
_.parsed = false;
var Lcom_arm_legv8simulator_client_lexer_TextLine_2_classLit = createForClass('com.arm.legv8simulator.client.lexer', 'TextLine', 29);
function Token(type_0, data_0){
  this.type_0 = type_0;
  this.data_0 = data_0;
}

defineClass(34, 1, {34:1}, Token);
_.toString$ = function toString_6(){
  return $name(this.type_0) + ' |' + this.data_0 + '|';
}
;
var Lcom_arm_legv8simulator_client_lexer_Token_2_classLit = createForClass('com.arm.legv8simulator.client.lexer', 'Token', 34);
function $clinit_TokenType(){
  $clinit_TokenType = emptyMethod;
  LBRACKET = new TokenType('LBRACKET', 0, '\\[', 1, '[');
  RBRACKET = new TokenType('RBRACKET', 1, '\\]', 2, ']');
  COMMA = new TokenType('COMMA', 2, '\\,', 3, ',');
  IMMEDIATE = new TokenType('IMMEDIATE', 3, '#?-?0[xX][0-9a-fA-F]+|#?-?[0-9]+', 4, 'IMMEDIATE');
  REGISTER = new TokenType('REGISTER', 4, '[Xx][12][0-9]|[Xx]30|[Xx][0-9]|XZR|xzr|SP|sp|LR|lr|FP|fp|IP[01]|ip[01]', 5, 'REGISTER');
  MNEMONIC_R = new TokenType('MNEMONIC_R', 5, 'BR[ \t]+|br[ \t]+', 6, 'MNEMONIC');
  MNEMONIC_RISI = new TokenType('MNEMONIC_RISI', 6, 'MOV[ZK][ \t]+|mov[zk][ \t]+', 7, 'MNEMONIC');
  MNEMONIC_RI = new TokenType('MNEMONIC_RI', 7, 'CMPI[ \t]+|cmpi[ \t]+', 8, 'MNEMONIC');
  MNEMONIC_RR = new TokenType('MNEMONIC_RR', 8, 'CMP[ \t]+|MOV[ \t]+|cmp[ \t]+|mov[ \t]+', 9, 'MNEMONIC');
  MNEMONIC_RRI = new TokenType('MNEMONIC_RRI', 9, 'ADDIS?[ \t]+|SUBIS?[ \t]+|ANDIS?[ \t]+|ORRI[ \t]+|EORI[ \t]+|LS[LR][ \t]+|addis?[ \t]+|subis?[ \t]+|andis?[ \t]+|orri[ \t]+|eori[ \t]+|ls[lr][ \t]+', 10, 'MNEMONIC');
  MNEMONIC_RRR = new TokenType('MNEMONIC_RRR', 10, 'ADDS?[ \t]+|SUBS?[ \t]+|ANDS?[ \t]+|ORR[ \t]+|EOR[ \t]+|adds?[ \t]+|subs?[ \t]+|ands?[ \t]+|orr[ \t]+|eor[ \t]+', 11, 'MNEMONIC');
  MNEMONIC_RM = new TokenType('MNEMONIC_RM', 11, 'LDURSW[ \t]+|LDUR[HB]?[ \t]+|LDXR[ \t]+|STUR[WHB]?[ \t]+|ldursw[ \t]+|ldur[hb]?[ \t]+|ldxr[ \t]+|stur[whb]?[ \t]+', 12, 'MNEMONIC');
  MNEMONIC_RRM = new TokenType('MNEMONIC_RRM', 12, 'STXR[ \t]+|stxr[ \t]+', 13, 'MNEMONIC');
  MNEMONIC_L = new TokenType('MNEMONIC_L', 13, 'B\\.[GNL]E[ \t]+|B\\.[HL]S[ \t]+|B\\.[LG]T[ \t]+|B\\.LO[ \t]+|B\\.[MH]I[ \t]+|B\\.EQ[ \t]+|B\\.V[SC][ \t]+|B\\.PL[ \t]+|B[RL]?[ \t]+|b\\.[gnl]e[ \t]+|b\\.[hl]s[ \t]+|b\\.[lg]t[ \t]+|b\\.lo[ \t]+|b\\.[mh]i[ \t]+|b\\.eq[ \t]+|b\\.v[sc][ \t]+|b\\.pl[ \t]+|b[rl]?[ \t]+', 14, 'MNEMONIC');
  MNEMONIC_RL = new TokenType('MNEMONIC_RL', 14, 'CBN?Z[ \t]+|cbn?z[ \t]+', 15, 'MNEMONIC');
  LABEL = new TokenType('LABEL', 15, '[A-Za-z0-9_]+:', 16, 'LABEL');
  IDENTIFIER = new TokenType('IDENTIFIER', 16, '[A-Za-z0-9_]+', 17, 'IDENTIFIER');
  WHITESPACE = new TokenType('WHITESPACE', 17, '[ \t]+', 18, 'WHITESPACE');
  ERROR = new TokenType('ERROR', 18, '[^\\s]+', 19, 'ERROR');
}

function TokenType(enum$name, enum$ordinal, pattern, groupNumber, tokenStr){
  Enum.call(this, enum$name, enum$ordinal);
  this.pattern = pattern;
  this.groupNumber = groupNumber;
  this.tokenStr = tokenStr;
}

function values_1(){
  $clinit_TokenType();
  return initValues(getClassLiteralForArray(Lcom_arm_legv8simulator_client_lexer_TokenType_2_classLit, 1), $intern_9, 10, 0, [LBRACKET, RBRACKET, COMMA, IMMEDIATE, REGISTER, MNEMONIC_R, MNEMONIC_RISI, MNEMONIC_RI, MNEMONIC_RR, MNEMONIC_RRI, MNEMONIC_RRR, MNEMONIC_RM, MNEMONIC_RRM, MNEMONIC_L, MNEMONIC_RL, LABEL, IDENTIFIER, WHITESPACE, ERROR]);
}

defineClass(10, 8, {10:1, 3:1, 9:1, 8:1}, TokenType);
_.toString$ = function toString_7(){
  return this.tokenStr;
}
;
_.groupNumber = 0;
var COMMA, ERROR, IDENTIFIER, IMMEDIATE, LABEL, LBRACKET, MNEMONIC_L, MNEMONIC_R, MNEMONIC_RI, MNEMONIC_RISI, MNEMONIC_RL, MNEMONIC_RM, MNEMONIC_RR, MNEMONIC_RRI, MNEMONIC_RRM, MNEMONIC_RRR, RBRACKET, REGISTER, WHITESPACE;
var Lcom_arm_legv8simulator_client_lexer_TokenType_2_classLit = createForEnum('com.arm.legv8simulator.client.lexer', 'TokenType', 10, values_1);
function $get(this$static, index_0){
  return this$static.buffer[index_0];
}

function $getLong(this$static){
  var i, result;
  result = {l:0, m:0, h:0};
  for (i = 0; i < 8; i++) {
    result = shl(result, 8);
    result = or(result, and(fromInt(this$static.buffer[i]), {l:255, m:0, h:0}));
  }
  return result;
}

function $put(this$static, index_0, value_0){
  this$static.buffer[index_0] = value_0;
}

function $putLong(this$static, value_0){
  var i;
  for (i = 0; i < 8; i++) {
    this$static.buffer[i] = toInt(shru(value_0, (7 - i) * 8)) << 24 >> 24;
  }
}

function ByteBuffer(){
  this.buffer = initDim(B_classLit, $intern_2, 0, 8, 7, 1);
}

defineClass(203, 1, {}, ByteBuffer);
var Lcom_arm_legv8simulator_client_memory_ByteBuffer_2_classLit = createForClass('com.arm.legv8simulator.client.memory', 'ByteBuffer', 203);
function $boundsCheck(address, figureSize){
  if (gt(address, sub_0({l:4194300, m:131071, h:0}, fromInt(figureSize))) || lt(address, {l:0, m:64, h:0})) {
    throw new SegmentFaultException(address, 'stack or heap');
  }
}

function $loadByte(this$static, address){
  var b, i;
  $boundsCheck(address, 1);
  for (i = 0; i < 7; i++) {
    $put(this$static.buffer, i, 0);
  }
  b = dynamicCast($get_0(this$static.memory, valueOf_1(address)), 46);
  !b?$put(this$static.buffer, 7, 0):$put(this$static.buffer, 7, b.value_0);
  return $getLong(this$static.buffer);
}

function $loadDoubleword(this$static, address){
  var b, i;
  $boundsCheck(address, 8);
  for (i = 0; i < 8; i++) {
    b = dynamicCast($get_0(this$static.memory, valueOf_1(add_1(address, fromInt(i)))), 46);
    !b?$put(this$static.buffer, i, 0):$put(this$static.buffer, i, b.value_0);
  }
  return $getLong(this$static.buffer);
}

function $loadHalfword(this$static, address){
  var b, i, i0;
  $boundsCheck(address, 2);
  for (i0 = 0; i0 < 6; i0++) {
    $put(this$static.buffer, i0, 0);
  }
  for (i = 0; i < 2; i++) {
    b = dynamicCast($get_0(this$static.memory, valueOf_1(add_1(address, fromInt(i)))), 46);
    !b?$put(this$static.buffer, i + 8 - 2, 0):$put(this$static.buffer, i + 8 - 2, b.value_0);
  }
  return $getLong(this$static.buffer);
}

function $loadSignedWord(this$static, address){
  var b, i;
  $boundsCheck(address, 4);
  for (i = 0; i < 4; i++) {
    b = dynamicCast($get_0(this$static.memory, valueOf_1(add_1(address, fromInt(i)))), 46);
    !b?$put(this$static.buffer, i + 4, 0):$put(this$static.buffer, i + 4, b.value_0);
  }
  return and($getLong(this$static.buffer), {l:$intern_3, m:1023, h:0});
}

function $storeByte(this$static, address, value_0){
  $boundsCheck(address, 1);
  $putLong(this$static.buffer, value_0);
  $put_0(this$static.memory, valueOf_1(address), valueOf($get(this$static.buffer, 7)));
}

function $storeDoubleword(this$static, address, value_0){
  var i;
  $boundsCheck(address, 8);
  $putLong(this$static.buffer, value_0);
  for (i = 0; i < 8; i++) {
    $put_0(this$static.memory, valueOf_1(add_1(address, fromInt(i))), valueOf($get(this$static.buffer, i)));
  }
}

function $storeHalfword(this$static, address, value_0){
  $boundsCheck(address, 2);
  $putLong(this$static.buffer, value_0);
  $put_0(this$static.memory, valueOf_1(address), valueOf($get(this$static.buffer, 6)));
  $put_0(this$static.memory, valueOf_1(add_1(address, {l:1, m:0, h:0})), valueOf($get(this$static.buffer, 7)));
}

function $storeWord(this$static, address, value_0){
  var i;
  $boundsCheck(address, 4);
  $putLong(this$static.buffer, value_0);
  for (i = 0; i < 4; i++) {
    $put_0(this$static.memory, valueOf_1(add_1(address, fromInt(i))), valueOf($get(this$static.buffer, i + 4)));
  }
}

function Memory(numInstructions){
  this.staticDataSegmentOffset = add_1({l:0, m:1, h:0}, fromInt(numInstructions * 4));
  this.memory = new HashMap;
  this.buffer = new ByteBuffer;
}

defineClass(202, 1, {}, Memory);
_.staticDataSegmentOffset = {l:0, m:0, h:0};
var Lcom_arm_legv8simulator_client_memory_Memory_2_classLit = createForClass('com.arm.legv8simulator.client.memory', 'Memory', 202);
function SegmentFaultException(address, segment){
  Exception.call(this);
  this.address = address;
  this.segment = segment;
}

defineClass(90, 30, {90:1, 3:1, 13:1}, SegmentFaultException);
_.getMessage = function getMessage_4(){
  return 'Memory address out of bounds: 0x' + toPowerOfTwoUnsignedString(this.address) + ' is not in the ' + this.segment + ' segment';
}
;
_.address = {l:0, m:0, h:0};
var Lcom_arm_legv8simulator_client_memory_SegmentFaultException_2_classLit = createForClass('com.arm.legv8simulator.client.memory', 'SegmentFaultException', 90);
function InvalidTokenException(expected){
  Exception.call(this);
  this.tokenExpected = expected;
}

function InvalidTokenException_0(tokenExpected, mnemonicExpected){
  Exception.call(this);
  this.tokenExpected = tokenExpected;
  this.mnemonicExpected = mnemonicExpected;
}

defineClass(14, 30, {14:1, 3:1, 13:1}, InvalidTokenException, InvalidTokenException_0);
var Lcom_arm_legv8simulator_client_parser_InvalidTokenException_2_classLit = createForClass('com.arm.legv8simulator.client.parser', 'InvalidTokenException', 14);
function handleInvalidTokenException(ite, parserState, tokens, tokenIndex){
  var currentToken, expectedMne;
  expectedMne = ite.mnemonicExpected;
  currentToken = (checkElementIndex(tokenIndex, tokens.array.length) , dynamicCast(tokens.array[tokenIndex], 34));
  if (!expectedMne) {
    return "Invalid token: expected '" + ite.tokenExpected.tokenStr + "', found '" + currentToken.data_0 + "'";
  }
   else {
    if ($equals(currentToken.data_0, ($clinit_Mnemonic() , LSL).nameUpper) || $equals(currentToken.data_0, LSL.nameLower)) {
      if (tokenIndex == tokens.array.length - 1) {
        return missingTokensMsg(parserState, 1);
      }
      return tokenIndex < tokens.array.length - 1?"Invalid token: expected '" + (expectedMne.name_1 != null?expectedMne.name_1:'' + expectedMne.ordinal) + "', found '" + (currentToken.data_0 + (checkElementIndex(tokenIndex + 1, tokens.array.length) , dynamicCast(tokens.array[tokenIndex + 1], 34)).data_0) + "'":"Invalid token: expected '" + ite.tokenExpected.tokenStr + "', found '" + currentToken.data_0 + "'";
    }
    return "Invalid token: expected '" + (expectedMne.name_1 != null?expectedMne.name_1:'' + expectedMne.ordinal) + "', found '" + (checkElementIndex(tokenIndex, tokens.array.length) , dynamicCast(tokens.array[tokenIndex], 34)).data_0 + "'";
  }
}

function handleUnsupportedInstructionException(parserState, tokens, tokenIndex){
  var m;
  try {
    if (tokenIndex != tokens.array.length - 1 && (checkElementIndex(tokenIndex, tokens.array.length) , dynamicCast(tokens.array[tokenIndex], 34)).type_0 != ($clinit_TokenType() , IDENTIFIER)) {
      return unsupportedInstructionMsg((checkElementIndex(tokenIndex, tokens.array.length) , dynamicCast(tokens.array[tokenIndex], 34)), (checkElementIndex(tokenIndex + 1, tokens.array.length) , dynamicCast(tokens.array[tokenIndex + 1], 34)));
    }
    m = fromString((checkElementIndex(tokenIndex, tokens.array.length) , dynamicCast(tokens.array[tokenIndex], 34)).data_0);
  }
   catch ($e0) {
    $e0 = wrap($e0);
    if (instanceOf($e0, 59)) {
      return "Unsupported instruction: '" + (checkElementIndex(tokenIndex, tokens.array.length) , dynamicCast(tokens.array[tokenIndex], 34)).data_0 + "'";
    }
     else 
      throw unwrap($e0);
  }
  try {
    parserState = parserState.transition(new Token(m.type_0, null));
  }
   catch ($e1) {
    $e1 = wrap($e1);
    if (!instanceOf($e1, 77))
      if (!instanceOf($e1, 14))
        if (!instanceOf($e1, 37))
          throw unwrap($e1);
  }
  return missingTokensMsg(parserState, 0);
}

function missingTokensMsg(parserState, index_0){
  var i, missingTokens;
  missingTokens = '';
  for (i = index_0; i < parserState.expected.length; i++) {
    $equals(parserState.expected[i].tokenStr, 'MNEMONIC')?(missingTokens += "'LSL' "):(missingTokens += "'" + parserState.expected[i].tokenStr + "' ");
  }
  if (parserState.expected.length == 1) {
    return 'Missing token: ' + missingTokens;
  }
  return 'Missing tokens: ' + missingTokens;
}

function parseLine(tokens){
  var currentParserState, i, ite;
  currentParserState = ($clinit_ParserState() , INIT);
  try {
    for (i = 0; i < tokens.array.length; i++) {
      currentParserState = currentParserState.transition((checkElementIndex(i, tokens.array.length) , dynamicCast(tokens.array[i], 34)));
    }
  }
   catch ($e0) {
    $e0 = wrap($e0);
    if (instanceOf($e0, 77)) {
      return handleUnsupportedInstructionException(currentParserState, tokens, i);
    }
     else if (instanceOf($e0, 14)) {
      ite = $e0;
      return handleInvalidTokenException(ite, currentParserState, tokens, i);
    }
     else if (instanceOf($e0, 37)) {
      return "Unexpected token: '" + (checkElementIndex(i, tokens.array.length) , dynamicCast(tokens.array[i], 34)).data_0 + "'. Remove this token.";
    }
     else 
      throw unwrap($e0);
  }
  return currentParserState.accepting?null:missingTokensMsg(currentParserState, 0);
}

function unsupportedInstructionMsg(t1, t2){
  return "Unsupported instruction: '" + t1.data_0 + t2.data_0 + "'";
}

function $clinit_ParserState(){
  $clinit_ParserState = emptyMethod;
  INIT = new ParserState$1;
  G1 = new ParserState$2;
  R1 = new ParserState$3(initValues(getClassLiteralForArray(Lcom_arm_legv8simulator_client_lexer_TokenType_2_classLit, 1), $intern_9, 10, 0, [($clinit_TokenType() , REGISTER)]));
  R2 = new ParserState$4;
  RR1 = new ParserState$5(initValues(getClassLiteralForArray(Lcom_arm_legv8simulator_client_lexer_TokenType_2_classLit, 1), $intern_9, 10, 0, [REGISTER, COMMA, REGISTER]));
  RR2 = new ParserState$6(initValues(getClassLiteralForArray(Lcom_arm_legv8simulator_client_lexer_TokenType_2_classLit, 1), $intern_9, 10, 0, [COMMA, REGISTER]));
  RR3 = new ParserState$7(initValues(getClassLiteralForArray(Lcom_arm_legv8simulator_client_lexer_TokenType_2_classLit, 1), $intern_9, 10, 0, [REGISTER]));
  RR4 = new ParserState$8;
  RRR1 = new ParserState$9(initValues(getClassLiteralForArray(Lcom_arm_legv8simulator_client_lexer_TokenType_2_classLit, 1), $intern_9, 10, 0, [REGISTER, COMMA, REGISTER, COMMA, REGISTER]));
  RRR2 = new ParserState$10(initValues(getClassLiteralForArray(Lcom_arm_legv8simulator_client_lexer_TokenType_2_classLit, 1), $intern_9, 10, 0, [COMMA, REGISTER, COMMA, REGISTER]));
  RRR3 = new ParserState$11(initValues(getClassLiteralForArray(Lcom_arm_legv8simulator_client_lexer_TokenType_2_classLit, 1), $intern_9, 10, 0, [REGISTER, COMMA, REGISTER]));
  RRR4 = new ParserState$12(initValues(getClassLiteralForArray(Lcom_arm_legv8simulator_client_lexer_TokenType_2_classLit, 1), $intern_9, 10, 0, [COMMA, REGISTER]));
  RRR5 = new ParserState$13(initValues(getClassLiteralForArray(Lcom_arm_legv8simulator_client_lexer_TokenType_2_classLit, 1), $intern_9, 10, 0, [REGISTER]));
  RRR6 = new ParserState$14;
  RI1 = new ParserState$15(initValues(getClassLiteralForArray(Lcom_arm_legv8simulator_client_lexer_TokenType_2_classLit, 1), $intern_9, 10, 0, [REGISTER, COMMA, IMMEDIATE]));
  RI2 = new ParserState$16(initValues(getClassLiteralForArray(Lcom_arm_legv8simulator_client_lexer_TokenType_2_classLit, 1), $intern_9, 10, 0, [COMMA, IMMEDIATE]));
  RI3 = new ParserState$17(initValues(getClassLiteralForArray(Lcom_arm_legv8simulator_client_lexer_TokenType_2_classLit, 1), $intern_9, 10, 0, [IMMEDIATE]));
  RI4 = new ParserState$18;
  RRI1 = new ParserState$19(initValues(getClassLiteralForArray(Lcom_arm_legv8simulator_client_lexer_TokenType_2_classLit, 1), $intern_9, 10, 0, [REGISTER, COMMA, REGISTER, COMMA, IMMEDIATE]));
  RRI2 = new ParserState$20(initValues(getClassLiteralForArray(Lcom_arm_legv8simulator_client_lexer_TokenType_2_classLit, 1), $intern_9, 10, 0, [COMMA, REGISTER, COMMA, IMMEDIATE]));
  RRI3 = new ParserState$21(initValues(getClassLiteralForArray(Lcom_arm_legv8simulator_client_lexer_TokenType_2_classLit, 1), $intern_9, 10, 0, [REGISTER, COMMA, IMMEDIATE]));
  RRI4 = new ParserState$22(initValues(getClassLiteralForArray(Lcom_arm_legv8simulator_client_lexer_TokenType_2_classLit, 1), $intern_9, 10, 0, [COMMA, IMMEDIATE]));
  RRI5 = new ParserState$23(initValues(getClassLiteralForArray(Lcom_arm_legv8simulator_client_lexer_TokenType_2_classLit, 1), $intern_9, 10, 0, [IMMEDIATE]));
  RRI6 = new ParserState$24;
  RM1 = new ParserState$25(initValues(getClassLiteralForArray(Lcom_arm_legv8simulator_client_lexer_TokenType_2_classLit, 1), $intern_9, 10, 0, [REGISTER, COMMA, LBRACKET, REGISTER, COMMA, IMMEDIATE, RBRACKET]));
  RM2 = new ParserState$26(initValues(getClassLiteralForArray(Lcom_arm_legv8simulator_client_lexer_TokenType_2_classLit, 1), $intern_9, 10, 0, [COMMA, LBRACKET, REGISTER, COMMA, IMMEDIATE, RBRACKET]));
  RM3 = new ParserState$27(initValues(getClassLiteralForArray(Lcom_arm_legv8simulator_client_lexer_TokenType_2_classLit, 1), $intern_9, 10, 0, [LBRACKET, REGISTER, COMMA, IMMEDIATE, RBRACKET]));
  RM4 = new ParserState$28(initValues(getClassLiteralForArray(Lcom_arm_legv8simulator_client_lexer_TokenType_2_classLit, 1), $intern_9, 10, 0, [REGISTER, COMMA, IMMEDIATE, RBRACKET]));
  RM5 = new ParserState$29(initValues(getClassLiteralForArray(Lcom_arm_legv8simulator_client_lexer_TokenType_2_classLit, 1), $intern_9, 10, 0, [COMMA, IMMEDIATE, RBRACKET]));
  RM6 = new ParserState$30;
  RM7 = new ParserState$31(initValues(getClassLiteralForArray(Lcom_arm_legv8simulator_client_lexer_TokenType_2_classLit, 1), $intern_9, 10, 0, [IMMEDIATE, RBRACKET]));
  RM8 = new ParserState$32(initValues(getClassLiteralForArray(Lcom_arm_legv8simulator_client_lexer_TokenType_2_classLit, 1), $intern_9, 10, 0, [RBRACKET]));
  RRM1 = new ParserState$33(initValues(getClassLiteralForArray(Lcom_arm_legv8simulator_client_lexer_TokenType_2_classLit, 1), $intern_9, 10, 0, [REGISTER, COMMA, REGISTER, COMMA, LBRACKET, REGISTER, COMMA, IMMEDIATE, RBRACKET]));
  RRM2 = new ParserState$34(initValues(getClassLiteralForArray(Lcom_arm_legv8simulator_client_lexer_TokenType_2_classLit, 1), $intern_9, 10, 0, [COMMA, REGISTER, COMMA, LBRACKET, REGISTER, COMMA, IMMEDIATE, RBRACKET]));
  RRM3 = new ParserState$35(initValues(getClassLiteralForArray(Lcom_arm_legv8simulator_client_lexer_TokenType_2_classLit, 1), $intern_9, 10, 0, [REGISTER, COMMA, LBRACKET, REGISTER, COMMA, IMMEDIATE, RBRACKET]));
  RRM4 = new ParserState$36(initValues(getClassLiteralForArray(Lcom_arm_legv8simulator_client_lexer_TokenType_2_classLit, 1), $intern_9, 10, 0, [COMMA, LBRACKET, REGISTER, COMMA, IMMEDIATE, RBRACKET]));
  RRM5 = new ParserState$37(initValues(getClassLiteralForArray(Lcom_arm_legv8simulator_client_lexer_TokenType_2_classLit, 1), $intern_9, 10, 0, [LBRACKET, REGISTER, COMMA, IMMEDIATE, RBRACKET]));
  RRM6 = new ParserState$38(initValues(getClassLiteralForArray(Lcom_arm_legv8simulator_client_lexer_TokenType_2_classLit, 1), $intern_9, 10, 0, [REGISTER, COMMA, IMMEDIATE, RBRACKET]));
  RRM7 = new ParserState$39(initValues(getClassLiteralForArray(Lcom_arm_legv8simulator_client_lexer_TokenType_2_classLit, 1), $intern_9, 10, 0, [COMMA, IMMEDIATE, RBRACKET]));
  RRM8 = new ParserState$40;
  RRM9 = new ParserState$41(initValues(getClassLiteralForArray(Lcom_arm_legv8simulator_client_lexer_TokenType_2_classLit, 1), $intern_9, 10, 0, [IMMEDIATE, RBRACKET]));
  RRM10 = new ParserState$42(initValues(getClassLiteralForArray(Lcom_arm_legv8simulator_client_lexer_TokenType_2_classLit, 1), $intern_9, 10, 0, [RBRACKET]));
  RISI1 = new ParserState$43(initValues(getClassLiteralForArray(Lcom_arm_legv8simulator_client_lexer_TokenType_2_classLit, 1), $intern_9, 10, 0, [REGISTER, COMMA, IMMEDIATE, COMMA, MNEMONIC_RRI, IMMEDIATE]));
  RISI2 = new ParserState$44(initValues(getClassLiteralForArray(Lcom_arm_legv8simulator_client_lexer_TokenType_2_classLit, 1), $intern_9, 10, 0, [COMMA, IMMEDIATE, COMMA, MNEMONIC_RRI, IMMEDIATE]));
  RISI3 = new ParserState$45(initValues(getClassLiteralForArray(Lcom_arm_legv8simulator_client_lexer_TokenType_2_classLit, 1), $intern_9, 10, 0, [IMMEDIATE, COMMA, MNEMONIC_RRI, IMMEDIATE]));
  RISI4 = new ParserState$46(initValues(getClassLiteralForArray(Lcom_arm_legv8simulator_client_lexer_TokenType_2_classLit, 1), $intern_9, 10, 0, [COMMA, MNEMONIC_RRI, IMMEDIATE]));
  RISI5 = new ParserState$47(initValues(getClassLiteralForArray(Lcom_arm_legv8simulator_client_lexer_TokenType_2_classLit, 1), $intern_9, 10, 0, [MNEMONIC_RRI, IMMEDIATE]));
  RISI6 = new ParserState$48(initValues(getClassLiteralForArray(Lcom_arm_legv8simulator_client_lexer_TokenType_2_classLit, 1), $intern_9, 10, 0, [IMMEDIATE]));
  RISI7 = new ParserState$49;
  L1 = new ParserState$50(initValues(getClassLiteralForArray(Lcom_arm_legv8simulator_client_lexer_TokenType_2_classLit, 1), $intern_9, 10, 0, [IDENTIFIER]));
  L2 = new ParserState$51;
  L3 = new ParserState$52;
  RL1 = new ParserState$53(initValues(getClassLiteralForArray(Lcom_arm_legv8simulator_client_lexer_TokenType_2_classLit, 1), $intern_9, 10, 0, [REGISTER, COMMA, IDENTIFIER]));
  RL2 = new ParserState$54(initValues(getClassLiteralForArray(Lcom_arm_legv8simulator_client_lexer_TokenType_2_classLit, 1), $intern_9, 10, 0, [COMMA, IDENTIFIER]));
  RL3 = new ParserState$55(initValues(getClassLiteralForArray(Lcom_arm_legv8simulator_client_lexer_TokenType_2_classLit, 1), $intern_9, 10, 0, [IDENTIFIER]));
  RL4 = new ParserState$56;
}

function ParserState(enum$name, enum$ordinal, accepting, expected){
  Enum.call(this, enum$name, enum$ordinal);
  this.expected = expected;
  this.accepting = accepting;
}

function values_2(){
  $clinit_ParserState();
  return initValues(getClassLiteralForArray(Lcom_arm_legv8simulator_client_parser_ParserState_2_classLit, 1), $intern_9, 5, 0, [INIT, G1, R1, R2, RR1, RR2, RR3, RR4, RRR1, RRR2, RRR3, RRR4, RRR5, RRR6, RI1, RI2, RI3, RI4, RRI1, RRI2, RRI3, RRI4, RRI5, RRI6, RM1, RM2, RM3, RM4, RM5, RM6, RM7, RM8, RRM1, RRM2, RRM3, RRM4, RRM5, RRM6, RRM7, RRM8, RRM9, RRM10, RISI1, RISI2, RISI3, RISI4, RISI5, RISI6, RISI7, L1, L2, L3, RL1, RL2, RL3, RL4]);
}

defineClass(5, 8, $intern_11);
_.accepting = false;
var G1, INIT, L1, L2, L3, R1, R2, RI1, RI2, RI3, RI4, RISI1, RISI2, RISI3, RISI4, RISI5, RISI6, RISI7, RL1, RL2, RL3, RL4, RM1, RM2, RM3, RM4, RM5, RM6, RM7, RM8, RR1, RR2, RR3, RR4, RRI1, RRI2, RRI3, RRI4, RRI5, RRI6, RRM1, RRM10, RRM2, RRM3, RRM4, RRM5, RRM6, RRM7, RRM8, RRM9, RRR1, RRR2, RRR3, RRR4, RRR5, RRR6;
var Lcom_arm_legv8simulator_client_parser_ParserState_2_classLit = createForEnum('com.arm.legv8simulator.client.parser', 'ParserState', 5, values_2);
function ParserState$1(){
  ParserState.call(this, 'INIT', 0, false, null);
}

defineClass(205, 5, $intern_11, ParserState$1);
_.transition = function transition(t){
  switch (t.type_0.ordinal) {
    case 5:
      return R1;
    case 8:
      return RR1;
    case 10:
      return RRR1;
    case 7:
      return RI1;
    case 9:
      return RRI1;
    case 11:
      return RM1;
    case 12:
      return RRM1;
    case 6:
      return RISI1;
    case 13:
      return L1;
    case 14:
      return RL1;
    case 15:
      return G1;
    default:throw new UnsupportedInstructionException;
  }
}
;
var Lcom_arm_legv8simulator_client_parser_ParserState$1_2_classLit = createForEnum('com.arm.legv8simulator.client.parser', 'ParserState/1', 205, null);
function ParserState$10($anonymous1){
  ParserState.call(this, 'RRR2', 9, false, $anonymous1);
}

defineClass(214, 5, $intern_11, ParserState$10);
_.transition = function transition_0(t){
  switch (t.type_0.ordinal) {
    case 2:
      return RRR3;
    default:throw new InvalidTokenException(this.expected[0]);
  }
}
;
var Lcom_arm_legv8simulator_client_parser_ParserState$10_2_classLit = createForEnum('com.arm.legv8simulator.client.parser', 'ParserState/10', 214, null);
function ParserState$11($anonymous1){
  ParserState.call(this, 'RRR3', 10, false, $anonymous1);
}

defineClass(215, 5, $intern_11, ParserState$11);
_.transition = function transition_1(t){
  switch (t.type_0.ordinal) {
    case 4:
      return RRR4;
    default:throw new InvalidTokenException(this.expected[0]);
  }
}
;
var Lcom_arm_legv8simulator_client_parser_ParserState$11_2_classLit = createForEnum('com.arm.legv8simulator.client.parser', 'ParserState/11', 215, null);
function ParserState$12($anonymous1){
  ParserState.call(this, 'RRR4', 11, false, $anonymous1);
}

defineClass(216, 5, $intern_11, ParserState$12);
_.transition = function transition_2(t){
  switch (t.type_0.ordinal) {
    case 2:
      return RRR5;
    default:throw new InvalidTokenException(this.expected[0]);
  }
}
;
var Lcom_arm_legv8simulator_client_parser_ParserState$12_2_classLit = createForEnum('com.arm.legv8simulator.client.parser', 'ParserState/12', 216, null);
function ParserState$13($anonymous1){
  ParserState.call(this, 'RRR5', 12, false, $anonymous1);
}

defineClass(217, 5, $intern_11, ParserState$13);
_.transition = function transition_3(t){
  switch (t.type_0.ordinal) {
    case 4:
      return RRR6;
    default:throw new InvalidTokenException(this.expected[0]);
  }
}
;
var Lcom_arm_legv8simulator_client_parser_ParserState$13_2_classLit = createForEnum('com.arm.legv8simulator.client.parser', 'ParserState/13', 217, null);
function ParserState$14(){
  ParserState.call(this, 'RRR6', 13, true, null);
}

defineClass(218, 5, $intern_11, ParserState$14);
_.transition = function transition_4(t){
  throw new UnexpectedTokenException;
}
;
var Lcom_arm_legv8simulator_client_parser_ParserState$14_2_classLit = createForEnum('com.arm.legv8simulator.client.parser', 'ParserState/14', 218, null);
function ParserState$15($anonymous1){
  ParserState.call(this, 'RI1', 14, false, $anonymous1);
}

defineClass(219, 5, $intern_11, ParserState$15);
_.transition = function transition_5(t){
  switch (t.type_0.ordinal) {
    case 4:
      return RI2;
    default:throw new InvalidTokenException(this.expected[0]);
  }
}
;
var Lcom_arm_legv8simulator_client_parser_ParserState$15_2_classLit = createForEnum('com.arm.legv8simulator.client.parser', 'ParserState/15', 219, null);
function ParserState$16($anonymous1){
  ParserState.call(this, 'RI2', 15, false, $anonymous1);
}

defineClass(220, 5, $intern_11, ParserState$16);
_.transition = function transition_6(t){
  switch (t.type_0.ordinal) {
    case 2:
      return RI3;
    default:throw new InvalidTokenException(this.expected[0]);
  }
}
;
var Lcom_arm_legv8simulator_client_parser_ParserState$16_2_classLit = createForEnum('com.arm.legv8simulator.client.parser', 'ParserState/16', 220, null);
function ParserState$17($anonymous1){
  ParserState.call(this, 'RI3', 16, false, $anonymous1);
}

defineClass(221, 5, $intern_11, ParserState$17);
_.transition = function transition_7(t){
  switch (t.type_0.ordinal) {
    case 3:
      return RI4;
    default:throw new InvalidTokenException(this.expected[0]);
  }
}
;
var Lcom_arm_legv8simulator_client_parser_ParserState$17_2_classLit = createForEnum('com.arm.legv8simulator.client.parser', 'ParserState/17', 221, null);
function ParserState$18(){
  ParserState.call(this, 'RI4', 17, true, null);
}

defineClass(222, 5, $intern_11, ParserState$18);
_.transition = function transition_8(t){
  throw new UnexpectedTokenException;
}
;
var Lcom_arm_legv8simulator_client_parser_ParserState$18_2_classLit = createForEnum('com.arm.legv8simulator.client.parser', 'ParserState/18', 222, null);
function ParserState$19($anonymous1){
  ParserState.call(this, 'RRI1', 18, false, $anonymous1);
}

defineClass(223, 5, $intern_11, ParserState$19);
_.transition = function transition_9(t){
  switch (t.type_0.ordinal) {
    case 4:
      return RRI2;
    default:throw new InvalidTokenException(this.expected[0]);
  }
}
;
var Lcom_arm_legv8simulator_client_parser_ParserState$19_2_classLit = createForEnum('com.arm.legv8simulator.client.parser', 'ParserState/19', 223, null);
function ParserState$2(){
  ParserState.call(this, 'G1', 1, true, null);
}

defineClass(206, 5, $intern_11, ParserState$2);
_.transition = function transition_10(t){
  switch (t.type_0.ordinal) {
    case 5:
      return R1;
    case 8:
      return RR1;
    case 10:
      return RRR1;
    case 7:
      return RI1;
    case 9:
      return RRI1;
    case 11:
      return RM1;
    case 12:
      return RRM1;
    case 6:
      return RISI1;
    case 13:
      return L1;
    case 14:
      return RL1;
    default:throw new UnsupportedInstructionException;
  }
}
;
var Lcom_arm_legv8simulator_client_parser_ParserState$2_2_classLit = createForEnum('com.arm.legv8simulator.client.parser', 'ParserState/2', 206, null);
function ParserState$20($anonymous1){
  ParserState.call(this, 'RRI2', 19, false, $anonymous1);
}

defineClass(224, 5, $intern_11, ParserState$20);
_.transition = function transition_11(t){
  switch (t.type_0.ordinal) {
    case 2:
      return RRI3;
    default:throw new InvalidTokenException(this.expected[0]);
  }
}
;
var Lcom_arm_legv8simulator_client_parser_ParserState$20_2_classLit = createForEnum('com.arm.legv8simulator.client.parser', 'ParserState/20', 224, null);
function ParserState$21($anonymous1){
  ParserState.call(this, 'RRI3', 20, false, $anonymous1);
}

defineClass(225, 5, $intern_11, ParserState$21);
_.transition = function transition_12(t){
  switch (t.type_0.ordinal) {
    case 4:
      return RRI4;
    default:throw new InvalidTokenException(this.expected[0]);
  }
}
;
var Lcom_arm_legv8simulator_client_parser_ParserState$21_2_classLit = createForEnum('com.arm.legv8simulator.client.parser', 'ParserState/21', 225, null);
function ParserState$22($anonymous1){
  ParserState.call(this, 'RRI4', 21, false, $anonymous1);
}

defineClass(226, 5, $intern_11, ParserState$22);
_.transition = function transition_13(t){
  switch (t.type_0.ordinal) {
    case 2:
      return RRI5;
    default:throw new InvalidTokenException(this.expected[0]);
  }
}
;
var Lcom_arm_legv8simulator_client_parser_ParserState$22_2_classLit = createForEnum('com.arm.legv8simulator.client.parser', 'ParserState/22', 226, null);
function ParserState$23($anonymous1){
  ParserState.call(this, 'RRI5', 22, false, $anonymous1);
}

defineClass(227, 5, $intern_11, ParserState$23);
_.transition = function transition_14(t){
  switch (t.type_0.ordinal) {
    case 3:
      return RRI6;
    default:throw new InvalidTokenException(this.expected[0]);
  }
}
;
var Lcom_arm_legv8simulator_client_parser_ParserState$23_2_classLit = createForEnum('com.arm.legv8simulator.client.parser', 'ParserState/23', 227, null);
function ParserState$24(){
  ParserState.call(this, 'RRI6', 23, true, null);
}

defineClass(228, 5, $intern_11, ParserState$24);
_.transition = function transition_15(t){
  throw new UnexpectedTokenException;
}
;
var Lcom_arm_legv8simulator_client_parser_ParserState$24_2_classLit = createForEnum('com.arm.legv8simulator.client.parser', 'ParserState/24', 228, null);
function ParserState$25($anonymous1){
  ParserState.call(this, 'RM1', 24, false, $anonymous1);
}

defineClass(229, 5, $intern_11, ParserState$25);
_.transition = function transition_16(t){
  switch (t.type_0.ordinal) {
    case 4:
      return RM2;
    default:throw new InvalidTokenException(this.expected[0]);
  }
}
;
var Lcom_arm_legv8simulator_client_parser_ParserState$25_2_classLit = createForEnum('com.arm.legv8simulator.client.parser', 'ParserState/25', 229, null);
function ParserState$26($anonymous1){
  ParserState.call(this, 'RM2', 25, false, $anonymous1);
}

defineClass(230, 5, $intern_11, ParserState$26);
_.transition = function transition_17(t){
  switch (t.type_0.ordinal) {
    case 2:
      return RM3;
    default:throw new InvalidTokenException(this.expected[0]);
  }
}
;
var Lcom_arm_legv8simulator_client_parser_ParserState$26_2_classLit = createForEnum('com.arm.legv8simulator.client.parser', 'ParserState/26', 230, null);
function ParserState$27($anonymous1){
  ParserState.call(this, 'RM3', 26, false, $anonymous1);
}

defineClass(231, 5, $intern_11, ParserState$27);
_.transition = function transition_18(t){
  switch (t.type_0.ordinal) {
    case 0:
      return RM4;
    default:throw new InvalidTokenException(this.expected[0]);
  }
}
;
var Lcom_arm_legv8simulator_client_parser_ParserState$27_2_classLit = createForEnum('com.arm.legv8simulator.client.parser', 'ParserState/27', 231, null);
function ParserState$28($anonymous1){
  ParserState.call(this, 'RM4', 27, false, $anonymous1);
}

defineClass(232, 5, $intern_11, ParserState$28);
_.transition = function transition_19(t){
  switch (t.type_0.ordinal) {
    case 4:
      return RM5;
    default:throw new InvalidTokenException(this.expected[0]);
  }
}
;
var Lcom_arm_legv8simulator_client_parser_ParserState$28_2_classLit = createForEnum('com.arm.legv8simulator.client.parser', 'ParserState/28', 232, null);
function ParserState$29($anonymous1){
  ParserState.call(this, 'RM5', 28, false, $anonymous1);
}

defineClass(233, 5, $intern_11, ParserState$29);
_.transition = function transition_20(t){
  switch (t.type_0.ordinal) {
    case 1:
      return RM6;
    case 2:
      return RM7;
    default:throw new InvalidTokenException(this.expected[0]);
  }
}
;
var Lcom_arm_legv8simulator_client_parser_ParserState$29_2_classLit = createForEnum('com.arm.legv8simulator.client.parser', 'ParserState/29', 233, null);
function ParserState$3($anonymous1){
  ParserState.call(this, 'R1', 2, false, $anonymous1);
}

defineClass(207, 5, $intern_11, ParserState$3);
_.transition = function transition_21(t){
  switch (t.type_0.ordinal) {
    case 4:
      return R2;
    default:throw new InvalidTokenException(this.expected[0]);
  }
}
;
var Lcom_arm_legv8simulator_client_parser_ParserState$3_2_classLit = createForEnum('com.arm.legv8simulator.client.parser', 'ParserState/3', 207, null);
function ParserState$30(){
  ParserState.call(this, 'RM6', 29, true, null);
}

defineClass(234, 5, $intern_11, ParserState$30);
_.transition = function transition_22(t){
  throw new UnexpectedTokenException;
}
;
var Lcom_arm_legv8simulator_client_parser_ParserState$30_2_classLit = createForEnum('com.arm.legv8simulator.client.parser', 'ParserState/30', 234, null);
function ParserState$31($anonymous1){
  ParserState.call(this, 'RM7', 30, false, $anonymous1);
}

defineClass(235, 5, $intern_11, ParserState$31);
_.transition = function transition_23(t){
  switch (t.type_0.ordinal) {
    case 3:
      return RM8;
    default:throw new InvalidTokenException(this.expected[0]);
  }
}
;
var Lcom_arm_legv8simulator_client_parser_ParserState$31_2_classLit = createForEnum('com.arm.legv8simulator.client.parser', 'ParserState/31', 235, null);
function ParserState$32($anonymous1){
  ParserState.call(this, 'RM8', 31, false, $anonymous1);
}

defineClass(236, 5, $intern_11, ParserState$32);
_.transition = function transition_24(t){
  switch (t.type_0.ordinal) {
    case 1:
      return RM6;
    default:throw new InvalidTokenException(this.expected[0]);
  }
}
;
var Lcom_arm_legv8simulator_client_parser_ParserState$32_2_classLit = createForEnum('com.arm.legv8simulator.client.parser', 'ParserState/32', 236, null);
function ParserState$33($anonymous1){
  ParserState.call(this, 'RRM1', 32, false, $anonymous1);
}

defineClass(237, 5, $intern_11, ParserState$33);
_.transition = function transition_25(t){
  switch (t.type_0.ordinal) {
    case 4:
      return RRM2;
    default:throw new InvalidTokenException(this.expected[0]);
  }
}
;
var Lcom_arm_legv8simulator_client_parser_ParserState$33_2_classLit = createForEnum('com.arm.legv8simulator.client.parser', 'ParserState/33', 237, null);
function ParserState$34($anonymous1){
  ParserState.call(this, 'RRM2', 33, false, $anonymous1);
}

defineClass(238, 5, $intern_11, ParserState$34);
_.transition = function transition_26(t){
  switch (t.type_0.ordinal) {
    case 2:
      return RRM3;
    default:throw new InvalidTokenException(this.expected[0]);
  }
}
;
var Lcom_arm_legv8simulator_client_parser_ParserState$34_2_classLit = createForEnum('com.arm.legv8simulator.client.parser', 'ParserState/34', 238, null);
function ParserState$35($anonymous1){
  ParserState.call(this, 'RRM3', 34, false, $anonymous1);
}

defineClass(239, 5, $intern_11, ParserState$35);
_.transition = function transition_27(t){
  switch (t.type_0.ordinal) {
    case 4:
      return RRM4;
    default:throw new InvalidTokenException(this.expected[0]);
  }
}
;
var Lcom_arm_legv8simulator_client_parser_ParserState$35_2_classLit = createForEnum('com.arm.legv8simulator.client.parser', 'ParserState/35', 239, null);
function ParserState$36($anonymous1){
  ParserState.call(this, 'RRM4', 35, false, $anonymous1);
}

defineClass(240, 5, $intern_11, ParserState$36);
_.transition = function transition_28(t){
  switch (t.type_0.ordinal) {
    case 2:
      return RRM5;
    default:throw new InvalidTokenException(this.expected[0]);
  }
}
;
var Lcom_arm_legv8simulator_client_parser_ParserState$36_2_classLit = createForEnum('com.arm.legv8simulator.client.parser', 'ParserState/36', 240, null);
function ParserState$37($anonymous1){
  ParserState.call(this, 'RRM5', 36, false, $anonymous1);
}

defineClass(241, 5, $intern_11, ParserState$37);
_.transition = function transition_29(t){
  switch (t.type_0.ordinal) {
    case 0:
      return RRM6;
    default:throw new InvalidTokenException(this.expected[0]);
  }
}
;
var Lcom_arm_legv8simulator_client_parser_ParserState$37_2_classLit = createForEnum('com.arm.legv8simulator.client.parser', 'ParserState/37', 241, null);
function ParserState$38($anonymous1){
  ParserState.call(this, 'RRM6', 37, false, $anonymous1);
}

defineClass(242, 5, $intern_11, ParserState$38);
_.transition = function transition_30(t){
  switch (t.type_0.ordinal) {
    case 4:
      return RRM7;
    default:throw new InvalidTokenException(this.expected[0]);
  }
}
;
var Lcom_arm_legv8simulator_client_parser_ParserState$38_2_classLit = createForEnum('com.arm.legv8simulator.client.parser', 'ParserState/38', 242, null);
function ParserState$39($anonymous1){
  ParserState.call(this, 'RRM7', 38, false, $anonymous1);
}

defineClass(243, 5, $intern_11, ParserState$39);
_.transition = function transition_31(t){
  switch (t.type_0.ordinal) {
    case 1:
      return RRM8;
    case 2:
      return RRM9;
    default:throw new InvalidTokenException(this.expected[0]);
  }
}
;
var Lcom_arm_legv8simulator_client_parser_ParserState$39_2_classLit = createForEnum('com.arm.legv8simulator.client.parser', 'ParserState/39', 243, null);
function ParserState$4(){
  ParserState.call(this, 'R2', 3, true, null);
}

defineClass(208, 5, $intern_11, ParserState$4);
_.transition = function transition_32(t){
  throw new UnexpectedTokenException;
}
;
var Lcom_arm_legv8simulator_client_parser_ParserState$4_2_classLit = createForEnum('com.arm.legv8simulator.client.parser', 'ParserState/4', 208, null);
function ParserState$40(){
  ParserState.call(this, 'RRM8', 39, true, null);
}

defineClass(244, 5, $intern_11, ParserState$40);
_.transition = function transition_33(t){
  throw new UnexpectedTokenException;
}
;
var Lcom_arm_legv8simulator_client_parser_ParserState$40_2_classLit = createForEnum('com.arm.legv8simulator.client.parser', 'ParserState/40', 244, null);
function ParserState$41($anonymous1){
  ParserState.call(this, 'RRM9', 40, false, $anonymous1);
}

defineClass(245, 5, $intern_11, ParserState$41);
_.transition = function transition_34(t){
  switch (t.type_0.ordinal) {
    case 3:
      return RRM10;
    default:throw new InvalidTokenException(this.expected[0]);
  }
}
;
var Lcom_arm_legv8simulator_client_parser_ParserState$41_2_classLit = createForEnum('com.arm.legv8simulator.client.parser', 'ParserState/41', 245, null);
function ParserState$42($anonymous1){
  ParserState.call(this, 'RRM10', 41, false, $anonymous1);
}

defineClass(246, 5, $intern_11, ParserState$42);
_.transition = function transition_35(t){
  switch (t.type_0.ordinal) {
    case 1:
      return RRM8;
    default:throw new InvalidTokenException(this.expected[0]);
  }
}
;
var Lcom_arm_legv8simulator_client_parser_ParserState$42_2_classLit = createForEnum('com.arm.legv8simulator.client.parser', 'ParserState/42', 246, null);
function ParserState$43($anonymous1){
  ParserState.call(this, 'RISI1', 42, false, $anonymous1);
}

defineClass(247, 5, $intern_11, ParserState$43);
_.transition = function transition_36(t){
  switch (t.type_0.ordinal) {
    case 4:
      return RISI2;
    default:throw new InvalidTokenException(this.expected[0]);
  }
}
;
var Lcom_arm_legv8simulator_client_parser_ParserState$43_2_classLit = createForEnum('com.arm.legv8simulator.client.parser', 'ParserState/43', 247, null);
function ParserState$44($anonymous1){
  ParserState.call(this, 'RISI2', 43, false, $anonymous1);
}

defineClass(248, 5, $intern_11, ParserState$44);
_.transition = function transition_37(t){
  switch (t.type_0.ordinal) {
    case 2:
      return RISI3;
    default:throw new InvalidTokenException(this.expected[0]);
  }
}
;
var Lcom_arm_legv8simulator_client_parser_ParserState$44_2_classLit = createForEnum('com.arm.legv8simulator.client.parser', 'ParserState/44', 248, null);
function ParserState$45($anonymous1){
  ParserState.call(this, 'RISI3', 44, false, $anonymous1);
}

defineClass(249, 5, $intern_11, ParserState$45);
_.transition = function transition_38(t){
  switch (t.type_0.ordinal) {
    case 3:
      return RISI4;
    default:throw new InvalidTokenException(this.expected[0]);
  }
}
;
var Lcom_arm_legv8simulator_client_parser_ParserState$45_2_classLit = createForEnum('com.arm.legv8simulator.client.parser', 'ParserState/45', 249, null);
function ParserState$46($anonymous1){
  ParserState.call(this, 'RISI4', 45, true, $anonymous1);
}

defineClass(250, 5, $intern_11, ParserState$46);
_.transition = function transition_39(t){
  switch (t.type_0.ordinal) {
    case 2:
      return RISI5;
    default:throw new InvalidTokenException(this.expected[0]);
  }
}
;
var Lcom_arm_legv8simulator_client_parser_ParserState$46_2_classLit = createForEnum('com.arm.legv8simulator.client.parser', 'ParserState/46', 250, null);
function ParserState$47($anonymous1){
  ParserState.call(this, 'RISI5', 46, false, $anonymous1);
}

defineClass(251, 5, $intern_11, ParserState$47);
_.transition = function transition_40(t){
  switch (t.type_0.ordinal) {
    case 9:
      if ($equalsIgnoreCase($trim(t.data_0), 'lsl') && !$equals($trim(t.data_0), t.data_0)) {
        return RISI6;
      }
       else {
        throw new InvalidTokenException_0(this.expected[0], ($clinit_Mnemonic() , LSL));
      }

    default:throw new InvalidTokenException_0(this.expected[0], ($clinit_Mnemonic() , LSL));
  }
}
;
var Lcom_arm_legv8simulator_client_parser_ParserState$47_2_classLit = createForEnum('com.arm.legv8simulator.client.parser', 'ParserState/47', 251, null);
function ParserState$48($anonymous1){
  ParserState.call(this, 'RISI6', 47, false, $anonymous1);
}

defineClass(252, 5, $intern_11, ParserState$48);
_.transition = function transition_41(t){
  switch (t.type_0.ordinal) {
    case 3:
      return RISI7;
    default:throw new InvalidTokenException(this.expected[0]);
  }
}
;
var Lcom_arm_legv8simulator_client_parser_ParserState$48_2_classLit = createForEnum('com.arm.legv8simulator.client.parser', 'ParserState/48', 252, null);
function ParserState$49(){
  ParserState.call(this, 'RISI7', 48, true, null);
}

defineClass(253, 5, $intern_11, ParserState$49);
_.transition = function transition_42(t){
  throw new UnexpectedTokenException;
}
;
var Lcom_arm_legv8simulator_client_parser_ParserState$49_2_classLit = createForEnum('com.arm.legv8simulator.client.parser', 'ParserState/49', 253, null);
function ParserState$5($anonymous1){
  ParserState.call(this, 'RR1', 4, false, $anonymous1);
}

defineClass(209, 5, $intern_11, ParserState$5);
_.transition = function transition_43(t){
  switch (t.type_0.ordinal) {
    case 4:
      return RR2;
    default:throw new InvalidTokenException(this.expected[0]);
  }
}
;
var Lcom_arm_legv8simulator_client_parser_ParserState$5_2_classLit = createForEnum('com.arm.legv8simulator.client.parser', 'ParserState/5', 209, null);
function ParserState$50($anonymous1){
  ParserState.call(this, 'L1', 49, false, $anonymous1);
}

defineClass(254, 5, $intern_11, ParserState$50);
_.transition = function transition_44(t){
  switch (t.type_0.ordinal) {
    case 16:
      return L2;
    default:throw new InvalidTokenException(this.expected[0]);
  }
}
;
var Lcom_arm_legv8simulator_client_parser_ParserState$50_2_classLit = createForEnum('com.arm.legv8simulator.client.parser', 'ParserState/50', 254, null);
function ParserState$51(){
  ParserState.call(this, 'L2', 50, true, null);
}

defineClass(255, 5, $intern_11, ParserState$51);
_.transition = function transition_45(t){
  throw new UnexpectedTokenException;
}
;
var Lcom_arm_legv8simulator_client_parser_ParserState$51_2_classLit = createForEnum('com.arm.legv8simulator.client.parser', 'ParserState/51', 255, null);
function ParserState$52(){
  ParserState.call(this, 'L3', 51, true, null);
}

defineClass(256, 5, $intern_11, ParserState$52);
_.transition = function transition_46(t){
  return L3;
}
;
var Lcom_arm_legv8simulator_client_parser_ParserState$52_2_classLit = createForEnum('com.arm.legv8simulator.client.parser', 'ParserState/52', 256, null);
function ParserState$53($anonymous1){
  ParserState.call(this, 'RL1', 52, false, $anonymous1);
}

defineClass(257, 5, $intern_11, ParserState$53);
_.transition = function transition_47(t){
  switch (t.type_0.ordinal) {
    case 4:
      return RL2;
    default:throw new InvalidTokenException(this.expected[0]);
  }
}
;
var Lcom_arm_legv8simulator_client_parser_ParserState$53_2_classLit = createForEnum('com.arm.legv8simulator.client.parser', 'ParserState/53', 257, null);
function ParserState$54($anonymous1){
  ParserState.call(this, 'RL2', 53, false, $anonymous1);
}

defineClass(258, 5, $intern_11, ParserState$54);
_.transition = function transition_48(t){
  switch (t.type_0.ordinal) {
    case 2:
      return RL3;
    default:throw new InvalidTokenException(this.expected[0]);
  }
}
;
var Lcom_arm_legv8simulator_client_parser_ParserState$54_2_classLit = createForEnum('com.arm.legv8simulator.client.parser', 'ParserState/54', 258, null);
function ParserState$55($anonymous1){
  ParserState.call(this, 'RL3', 54, false, $anonymous1);
}

defineClass(259, 5, $intern_11, ParserState$55);
_.transition = function transition_49(t){
  switch (t.type_0.ordinal) {
    case 16:
      return RL4;
    default:throw new InvalidTokenException(this.expected[0]);
  }
}
;
var Lcom_arm_legv8simulator_client_parser_ParserState$55_2_classLit = createForEnum('com.arm.legv8simulator.client.parser', 'ParserState/55', 259, null);
function ParserState$56(){
  ParserState.call(this, 'RL4', 55, true, null);
}

defineClass(260, 5, $intern_11, ParserState$56);
_.transition = function transition_50(t){
  throw new UnexpectedTokenException;
}
;
var Lcom_arm_legv8simulator_client_parser_ParserState$56_2_classLit = createForEnum('com.arm.legv8simulator.client.parser', 'ParserState/56', 260, null);
function ParserState$6($anonymous1){
  ParserState.call(this, 'RR2', 5, false, $anonymous1);
}

defineClass(210, 5, $intern_11, ParserState$6);
_.transition = function transition_51(t){
  switch (t.type_0.ordinal) {
    case 2:
      return RR3;
    default:throw new InvalidTokenException(this.expected[0]);
  }
}
;
var Lcom_arm_legv8simulator_client_parser_ParserState$6_2_classLit = createForEnum('com.arm.legv8simulator.client.parser', 'ParserState/6', 210, null);
function ParserState$7($anonymous1){
  ParserState.call(this, 'RR3', 6, false, $anonymous1);
}

defineClass(211, 5, $intern_11, ParserState$7);
_.transition = function transition_52(t){
  switch (t.type_0.ordinal) {
    case 4:
      return RR4;
    default:throw new InvalidTokenException(this.expected[0]);
  }
}
;
var Lcom_arm_legv8simulator_client_parser_ParserState$7_2_classLit = createForEnum('com.arm.legv8simulator.client.parser', 'ParserState/7', 211, null);
function ParserState$8(){
  ParserState.call(this, 'RR4', 7, true, null);
}

defineClass(212, 5, $intern_11, ParserState$8);
_.transition = function transition_53(t){
  throw new UnexpectedTokenException;
}
;
var Lcom_arm_legv8simulator_client_parser_ParserState$8_2_classLit = createForEnum('com.arm.legv8simulator.client.parser', 'ParserState/8', 212, null);
function ParserState$9($anonymous1){
  ParserState.call(this, 'RRR1', 8, false, $anonymous1);
}

defineClass(213, 5, $intern_11, ParserState$9);
_.transition = function transition_54(t){
  switch (t.type_0.ordinal) {
    case 4:
      return RRR2;
    default:throw new InvalidTokenException(this.expected[0]);
  }
}
;
var Lcom_arm_legv8simulator_client_parser_ParserState$9_2_classLit = createForEnum('com.arm.legv8simulator.client.parser', 'ParserState/9', 213, null);
function UnexpectedTokenException(){
  Exception.call(this);
}

defineClass(37, 30, {37:1, 3:1, 13:1}, UnexpectedTokenException);
var Lcom_arm_legv8simulator_client_parser_UnexpectedTokenException_2_classLit = createForClass('com.arm.legv8simulator.client.parser', 'UnexpectedTokenException', 37);
function UnsupportedInstructionException(){
  Exception.call(this);
}

defineClass(77, 30, {77:1, 3:1, 13:1}, UnsupportedInstructionException);
var Lcom_arm_legv8simulator_client_parser_UnsupportedInstructionException_2_classLit = createForClass('com.arm.legv8simulator.client.parser', 'UnsupportedInstructionException', 77);
function $setEnabled(this$static, enabled){
  this$static.element['disabled'] = !enabled;
}

function FocusWidget(elem){
  $setElement(this, elem);
}

defineClass(112, 19, $intern_0);
_.onAttach = function onAttach_0(){
  var tabIndex;
  $onAttach(this);
  tabIndex = this.element.tabIndex;
  -1 == tabIndex && (this.element.tabIndex = 0 , undefined);
}
;
var Lcom_google_gwt_user_client_ui_FocusWidget_2_classLit = createForClass('com.google.gwt.user.client.ui', 'FocusWidget', 112);
var detector;
defineClass(288, 1, {});
var Lcom_google_gwt_canvas_client_Canvas$CanvasElementSupportDetector_2_classLit = createForClass('com.google.gwt.canvas.client', 'Canvas/CanvasElementSupportDetector', 288);
function Canvas$CanvasElementSupportDetectedNo(){
}

defineClass(116, 288, {}, Canvas$CanvasElementSupportDetectedNo);
var Lcom_google_gwt_canvas_client_Canvas$CanvasElementSupportDetectedNo_2_classLit = createForClass('com.google.gwt.canvas.client', 'Canvas/CanvasElementSupportDetectedNo', 116);
function Duration(){
  this.start_0 = now_1();
}

defineClass(189, 1, {}, Duration);
_.start_0 = 0;
var Lcom_google_gwt_core_client_Duration_2_classLit = createForClass('com.google.gwt.core.client', 'Duration', 189);
function isScript(){
  return true;
}

function RuntimeException(){
  Exception.call(this);
}

function RuntimeException_0(message){
  this.detailMessage = message;
  captureStackTrace(this, this.detailMessage);
}

function RuntimeException_1(message){
  Throwable.call(this, message);
}

defineClass(27, 30, $intern_10, RuntimeException_0);
var Ljava_lang_RuntimeException_2_classLit = createForClass('java.lang', 'RuntimeException', 27);
defineClass(143, 27, $intern_10);
var Lcom_google_gwt_core_client_impl_JavaScriptExceptionBase_2_classLit = createForClass('com.google.gwt.core.client.impl', 'JavaScriptExceptionBase', 143);
function $clinit_JavaScriptException(){
  $clinit_JavaScriptException = emptyMethod;
  NOT_SET = new Object_0;
}

function $ensureInit(this$static){
  var exception;
  if (this$static.message_0 == null) {
    exception = maskUndefined(this$static.e) === maskUndefined(NOT_SET)?null:this$static.e;
    this$static.name_0 = exception == null?'null':instanceOfJso(exception)?getExceptionName0(dynamicCastJso(exception)):isJavaString(exception)?'String':$getName(getClass__Ljava_lang_Class___devirtual$(exception));
    this$static.description = this$static.description + ': ' + (instanceOfJso(exception)?getExceptionDescription0(dynamicCastJso(exception)):exception + '');
    this$static.message_0 = '(' + this$static.name_0 + ') ' + this$static.description;
  }
}

function JavaScriptException(e){
  $clinit_JavaScriptException();
  this.detailMessage = null;
  this.description = '';
  this.e = e;
  this.description = '';
}

function getExceptionDescription0(e){
  return e == null?null:e.message;
}

function getExceptionName0(e){
  return e == null?null:e.name;
}

defineClass(48, 143, {48:1, 3:1, 13:1}, JavaScriptException);
_.getMessage = function getMessage_5(){
  $ensureInit(this);
  return this.message_0;
}
;
_.getThrown = function getThrown(){
  return maskUndefined(this.e) === maskUndefined(NOT_SET)?null:this.e;
}
;
var NOT_SET;
var Lcom_google_gwt_core_client_JavaScriptException_2_classLit = createForClass('com.google.gwt.core.client', 'JavaScriptException', 48);
function $push(this$static, value_0){
  this$static[this$static.length] = value_0;
}

function now_1(){
  if (Date.now) {
    return Date.now();
  }
  return (new Date).getTime();
}

defineClass(266, 1, {});
var Lcom_google_gwt_core_client_Scheduler_2_classLit = createForClass('com.google.gwt.core.client', 'Scheduler', 266);
function apply_0(jsFunction, thisObj, args){
  return jsFunction.apply(thisObj, args);
  var __0;
}

function enter(){
  var now_0;
  if (entryDepth != 0) {
    now_0 = now_1();
    if (now_0 - watchdogEntryDepthLastScheduled > 2000) {
      watchdogEntryDepthLastScheduled = now_0;
      watchdogEntryDepthTimerId = $wnd.setTimeout(watchdogEntryDepthRun, 10);
    }
  }
  if (entryDepth++ == 0) {
    $flushEntryCommands(($clinit_SchedulerImpl() , INSTANCE));
    return true;
  }
  return false;
}

function entry_0(jsFunction){
  return function(){
    if (isScript()) {
      return entry0(jsFunction, this, arguments);
    }
     else {
      var __0 = entry0(jsFunction, this, arguments);
      __0 != null && (__0 = __0.val);
      return __0;
    }
  }
  ;
}

function entry0(jsFunction, thisObj, args){
  var initialEntry;
  initialEntry = enter();
  try {
    return apply_0(jsFunction, thisObj, args);
  }
   finally {
    exit(initialEntry);
  }
}

function exit(initialEntry){
  initialEntry && $flushFinallyCommands(($clinit_SchedulerImpl() , INSTANCE));
  --entryDepth;
  if (initialEntry) {
    if (watchdogEntryDepthTimerId != -1) {
      watchdogEntryDepthCancel(watchdogEntryDepthTimerId);
      watchdogEntryDepthTimerId = -1;
    }
  }
}

function getHashCode(o){
  return o.$H || (o.$H = ++sNextHashId);
}

function reportToBrowser(e){
  $wnd.setTimeout(function(){
    throw e;
  }
  , 0);
}

function watchdogEntryDepthCancel(timerId){
  $wnd.clearTimeout(timerId);
}

function watchdogEntryDepthRun(){
  entryDepth != 0 && (entryDepth = 0);
  watchdogEntryDepthTimerId = -1;
}

var entryDepth = 0, sNextHashId = 0, watchdogEntryDepthLastScheduled = 0, watchdogEntryDepthTimerId = -1;
function $clinit_SchedulerImpl(){
  $clinit_SchedulerImpl = emptyMethod;
  INSTANCE = new SchedulerImpl;
}

function $flushEntryCommands(this$static){
  var oldQueue, rescheduled;
  if (this$static.entryCommands) {
    rescheduled = null;
    do {
      oldQueue = this$static.entryCommands;
      this$static.entryCommands = null;
      rescheduled = runScheduledTasks(oldQueue, rescheduled);
    }
     while (this$static.entryCommands);
    this$static.entryCommands = rescheduled;
  }
}

function $flushFinallyCommands(this$static){
  var oldQueue, rescheduled;
  if (this$static.finallyCommands) {
    rescheduled = null;
    do {
      oldQueue = this$static.finallyCommands;
      this$static.finallyCommands = null;
      rescheduled = runScheduledTasks(oldQueue, rescheduled);
    }
     while (this$static.finallyCommands);
    this$static.finallyCommands = rescheduled;
  }
}

function $flushPostEventPumpCommands(this$static){
  var oldDeferred;
  if (this$static.deferredCommands) {
    oldDeferred = this$static.deferredCommands;
    this$static.deferredCommands = null;
    !this$static.incrementalCommands && (this$static.incrementalCommands = []);
    runScheduledTasks(oldDeferred, this$static.incrementalCommands);
  }
  !!this$static.incrementalCommands && (this$static.incrementalCommands = $runRepeatingTasks(this$static.incrementalCommands));
}

function $isWorkQueued(this$static){
  return !!this$static.deferredCommands || !!this$static.incrementalCommands;
}

function $maybeSchedulePostEventPumpCommands(this$static){
  if (!this$static.shouldBeRunning) {
    this$static.shouldBeRunning = true;
    !this$static.flusher && (this$static.flusher = new SchedulerImpl$Flusher(this$static));
    scheduleFixedDelayImpl(this$static.flusher, 1);
    !this$static.rescue && (this$static.rescue = new SchedulerImpl$Rescuer(this$static));
    scheduleFixedDelayImpl(this$static.rescue, 50);
  }
}

function $runRepeatingTasks(tasks){
  var canceledSomeTasks, duration, executedSomeTask, i, length_0, newTasks, t;
  length_0 = tasks.length;
  if (length_0 == 0) {
    return null;
  }
  canceledSomeTasks = false;
  duration = new Duration;
  while (now_1() - duration.start_0 < 16) {
    executedSomeTask = false;
    for (i = 0; i < length_0; i++) {
      t = tasks[i];
      if (!t) {
        continue;
      }
      executedSomeTask = true;
      if (!t[0].execute()) {
        tasks[i] = null;
        canceledSomeTasks = true;
      }
    }
    if (!executedSomeTask) {
      break;
    }
  }
  if (canceledSomeTasks) {
    newTasks = [];
    for (i = 0; i < length_0; i++) {
      !!tasks[i] && $push(newTasks, tasks[i]);
    }
    return newTasks.length == 0?null:newTasks;
  }
   else {
    return tasks;
  }
}

function $scheduleDeferred(this$static, cmd){
  this$static.deferredCommands = push_0(this$static.deferredCommands, [cmd, false]);
  $maybeSchedulePostEventPumpCommands(this$static);
}

function SchedulerImpl(){
}

function execute(cmd){
  return cmd.execute();
}

function push_0(queue, task){
  !queue && (queue = []);
  $push(queue, task);
  return queue;
}

function runScheduledTasks(tasks, rescheduled){
  var e, i, j, t;
  for (i = 0 , j = tasks.length; i < j; i++) {
    t = tasks[i];
    try {
      t[1]?t[0].execute() && (rescheduled = push_0(rescheduled, t)):t[0].execute_0();
    }
     catch ($e0) {
      $e0 = wrap($e0);
      if (instanceOf($e0, 13)) {
        e = $e0;
        reportToBrowser(instanceOf(e, 48)?dynamicCast(e, 48).getThrown():e);
      }
       else 
        throw unwrap($e0);
    }
  }
  return rescheduled;
}

function scheduleFixedDelayImpl(cmd, delayMs){
  $clinit_SchedulerImpl();
  function callback(){
    var ret = $entry(execute)(cmd);
    !isScript() && (ret = ret == true);
    ret && $wnd.setTimeout(callback, delayMs);
  }

  $wnd.setTimeout(callback, delayMs);
}

defineClass(186, 266, {}, SchedulerImpl);
_.flushRunning = false;
_.shouldBeRunning = false;
var INSTANCE;
var Lcom_google_gwt_core_client_impl_SchedulerImpl_2_classLit = createForClass('com.google.gwt.core.client.impl', 'SchedulerImpl', 186);
function SchedulerImpl$Flusher(this$0){
  this.this$01 = this$0;
}

defineClass(187, 1, {}, SchedulerImpl$Flusher);
_.execute = function execute_0(){
  this.this$01.flushRunning = true;
  $flushPostEventPumpCommands(this.this$01);
  this.this$01.flushRunning = false;
  return this.this$01.shouldBeRunning = $isWorkQueued(this.this$01);
}
;
var Lcom_google_gwt_core_client_impl_SchedulerImpl$Flusher_2_classLit = createForClass('com.google.gwt.core.client.impl', 'SchedulerImpl/Flusher', 187);
function SchedulerImpl$Rescuer(this$0){
  this.this$01 = this$0;
}

defineClass(188, 1, {}, SchedulerImpl$Rescuer);
_.execute = function execute_1(){
  this.this$01.flushRunning && scheduleFixedDelayImpl(this.this$01.flusher, 1);
  return this.this$01.shouldBeRunning;
}
;
var Lcom_google_gwt_core_client_impl_SchedulerImpl$Rescuer_2_classLit = createForClass('com.google.gwt.core.client.impl', 'SchedulerImpl/Rescuer', 188);
function $clinit_StackTraceCreator(){
  $clinit_StackTraceCreator = emptyMethod;
  var c, enforceLegacy;
  enforceLegacy = !(!!Error.stackTraceLimit || 'stack' in new Error);
  c = new StackTraceCreator$CollectorModernNoSourceMap;
  collector = enforceLegacy?new StackTraceCreator$CollectorLegacy:c;
}

function captureStackTrace(throwable, reference){
  $clinit_StackTraceCreator();
  collector.collect(throwable, reference);
}

function extractFunctionName(fnName){
  var fnRE = /function(?:\s+([\w$]+))?\s*\(/;
  var match_0 = fnRE.exec(fnName);
  return match_0 && match_0[1] || 'anonymous';
}

var collector;
defineClass(277, 1, {});
var Lcom_google_gwt_core_client_impl_StackTraceCreator$Collector_2_classLit = createForClass('com.google.gwt.core.client.impl', 'StackTraceCreator/Collector', 277);
function StackTraceCreator$CollectorLegacy(){
}

defineClass(144, 277, {}, StackTraceCreator$CollectorLegacy);
_.collect = function collect(t, thrownIgnored){
  var seen = {}, name_1;
  t.fnStack = [];
  var callee = arguments.callee.caller;
  while (callee) {
    var name_0 = ($clinit_StackTraceCreator() , callee.name || (callee.name = extractFunctionName(callee.toString())));
    t.fnStack.push(name_0);
    var keyName = ':' + name_0;
    var withThisName = seen[keyName];
    if (withThisName) {
      var i, j;
      for (i = 0 , j = withThisName.length; i < j; i++) {
        if (withThisName[i] === callee) {
          return;
        }
      }
    }
    (withThisName || (seen[keyName] = [])).push(callee);
    callee = callee.caller;
  }
}
;
var Lcom_google_gwt_core_client_impl_StackTraceCreator$CollectorLegacy_2_classLit = createForClass('com.google.gwt.core.client.impl', 'StackTraceCreator/CollectorLegacy', 144);
function $clinit_StackTraceCreator$CollectorModern(){
  $clinit_StackTraceCreator$CollectorModern = emptyMethod;
  Error.stackTraceLimit = 64;
}

defineClass(278, 277, {});
_.collect = function collect_0(t, jsThrown){
  function fixIE(e){
    if (!('stack' in e)) {
      try {
        throw e;
      }
       catch (ignored) {
      }
    }
    return e;
  }

  var backingJsError;
  typeof jsThrown == 'string'?(backingJsError = fixIE(new Error(jsThrown))):jsThrown instanceof Object && 'stack' in jsThrown?(backingJsError = jsThrown):(backingJsError = fixIE(new Error));
  t.__gwt$backingJsError = backingJsError;
}
;
var Lcom_google_gwt_core_client_impl_StackTraceCreator$CollectorModern_2_classLit = createForClass('com.google.gwt.core.client.impl', 'StackTraceCreator/CollectorModern', 278);
function StackTraceCreator$CollectorModernNoSourceMap(){
  $clinit_StackTraceCreator$CollectorModern();
}

defineClass(145, 278, {}, StackTraceCreator$CollectorModernNoSourceMap);
var Lcom_google_gwt_core_client_impl_StackTraceCreator$CollectorModernNoSourceMap_2_classLit = createForClass('com.google.gwt.core.client.impl', 'StackTraceCreator/CollectorModernNoSourceMap', 145);
function checkCriticalElement(expression){
  if (!expression) {
    throw new NoSuchElementException;
  }
}

function checkElementIndex(index_0, size_0){
  if (index_0 < 0 || index_0 >= size_0) {
    throw new IndexOutOfBoundsException_0('Index: ' + index_0 + ', Size: ' + size_0);
  }
}

function checkNotNull(reference){
  if (!reference) {
    throw new NullPointerException;
  }
  return reference;
}

function checkPositionIndex(index_0, size_0){
  if (index_0 < 0 || index_0 > size_0) {
    throw new IndexOutOfBoundsException_0('Index: ' + index_0 + ', Size: ' + size_0);
  }
}

function $appendChild(this$static, newChild){
  return this$static.appendChild(newChild);
}

function $removeChild(this$static, oldChild){
  return this$static.removeChild(oldChild);
}

function $addClassName(this$static, className){
  var idx, oldClassName;
  className = trimClassName(className);
  oldClassName = $getClassName(this$static);
  idx = indexOfName(oldClassName, className);
  if (idx == -1) {
    oldClassName.length > 0?$setClassName(this$static, oldClassName + ' ' + className):$setClassName(this$static, className);
    return true;
  }
  return false;
}

function $getClassName(this$static){
  return this$static.className || '';
}

function $getPropertyInt(this$static, name_0){
  return parseInt(this$static[name_0]) | 0;
}

function $getPropertyString(this$static, name_0){
  return this$static[name_0] == null?null:String(this$static[name_0]);
}

function $removeClassName(this$static, className){
  var begin, end, idx, newClassName, oldStyle;
  className = trimClassName(className);
  oldStyle = $getClassName(this$static);
  idx = indexOfName(oldStyle, className);
  if (idx != -1) {
    begin = $trim(oldStyle.substr(0, idx));
    end = $trim($substring(oldStyle, idx + className.length));
    begin.length == 0?(newClassName = end):end.length == 0?(newClassName = begin):(newClassName = begin + ' ' + end);
    $setClassName(this$static, newClassName);
    return true;
  }
  return false;
}

function $setClassName(this$static, className){
  this$static.className = className || '';
}

function $setId(this$static, id_0){
  this$static.id = id_0;
}

function $setInnerHTML(this$static, html){
  this$static.innerHTML = html || '';
}

function $setPropertyString(this$static, name_0, value_0){
  this$static[name_0] = value_0;
}

function indexOfName(nameList, name_0){
  var idx, last, lastPos;
  idx = nameList.indexOf(name_0);
  while (idx != -1) {
    if (idx == 0 || nameList.charCodeAt(idx - 1) == 32) {
      last = idx + name_0.length;
      lastPos = nameList.length;
      if (last == lastPos || last < lastPos && nameList.charCodeAt(last) == 32) {
        break;
      }
    }
    idx = nameList.indexOf(name_0, idx + 1);
  }
  return idx;
}

function trimClassName(className){
  className = $trim(className);
  return className;
}

function $createScriptElement(doc, source){
  var elem;
  elem = $createElement(doc, 'script');
  elem.text = source;
  return elem;
}

function $getFirstChildElement(elem){
  var child = elem.firstChild;
  while (child && child.nodeType != 1)
    child = child.nextSibling;
  return child;
}

function $getParentElement(node){
  var parent_0 = node.parentNode;
  (!parent_0 || parent_0.nodeType != 1) && (parent_0 = null);
  return parent_0;
}

function $createElement(doc, tagName){
  var container, elem;
  if (tagName.indexOf(':') != -1) {
    container = (!doc.__gwt_container && (doc.__gwt_container = doc.createElement('div')) , doc.__gwt_container);
    $setInnerHTML(container, '<' + tagName + '/>');
    elem = $getFirstChildElement(container);
    container.removeChild(elem);
    return elem;
  }
  return doc.createElement(tagName);
}

function $dispatchEvent(target, evt){
  target.fireEvent('on' + evt.type, evt);
}

function $selectAdd(select, option, before){
  before?select.add(option, before.index):select.add(option);
}

function $setInnerText(elem, text_0){
  elem.innerText = text_0 || '';
}

function isOrHasChildImpl(parent_0, child){
  if (parent_0.nodeType != 1 && parent_0.nodeType != 9) {
    return parent_0 == child;
  }
  if (child.nodeType != 1) {
    child = child.parentNode;
    if (!child) {
      return false;
    }
  }
  if (parent_0.nodeType == 9) {
    return parent_0 === child || parent_0.body && parent_0.body.contains(child);
  }
   else {
    return parent_0 === child || parent_0.contains(child);
  }
}

var currentEventTarget;
function $getClientHeight(this$static){
  return ($equals(this$static.compatMode, 'CSS1Compat')?this$static.documentElement:this$static.body).clientHeight | 0;
}

function $getClientWidth(this$static){
  return ($equals(this$static.compatMode, 'CSS1Compat')?this$static.documentElement:this$static.body).clientWidth | 0;
}

function $setSrc(this$static, src_0){
  this$static.src = src_0;
}

function $setPropertyImpl(this$static, name_0, value_0){
  this$static[name_0] = value_0;
}

function $clinit_Style$TextAlign(){
  $clinit_Style$TextAlign = emptyMethod;
  CENTER = new Style$TextAlign$1;
  JUSTIFY = new Style$TextAlign$2;
  LEFT = new Style$TextAlign$3;
  RIGHT = new Style$TextAlign$4;
}

function Style$TextAlign(enum$name, enum$ordinal){
  Enum.call(this, enum$name, enum$ordinal);
}

function values_3(){
  $clinit_Style$TextAlign();
  return initValues(getClassLiteralForArray(Lcom_google_gwt_dom_client_Style$TextAlign_2_classLit, 1), $intern_9, 43, 0, [CENTER, JUSTIFY, LEFT, RIGHT]);
}

defineClass(43, 8, $intern_12);
var CENTER, JUSTIFY, LEFT, RIGHT;
var Lcom_google_gwt_dom_client_Style$TextAlign_2_classLit = createForEnum('com.google.gwt.dom.client', 'Style/TextAlign', 43, values_3);
function Style$TextAlign$1(){
  Style$TextAlign.call(this, 'CENTER', 0);
}

defineClass(172, 43, $intern_12, Style$TextAlign$1);
var Lcom_google_gwt_dom_client_Style$TextAlign$1_2_classLit = createForEnum('com.google.gwt.dom.client', 'Style/TextAlign/1', 172, null);
function Style$TextAlign$2(){
  Style$TextAlign.call(this, 'JUSTIFY', 1);
}

defineClass(173, 43, $intern_12, Style$TextAlign$2);
var Lcom_google_gwt_dom_client_Style$TextAlign$2_2_classLit = createForEnum('com.google.gwt.dom.client', 'Style/TextAlign/2', 173, null);
function Style$TextAlign$3(){
  Style$TextAlign.call(this, 'LEFT', 2);
}

defineClass(174, 43, $intern_12, Style$TextAlign$3);
var Lcom_google_gwt_dom_client_Style$TextAlign$3_2_classLit = createForEnum('com.google.gwt.dom.client', 'Style/TextAlign/3', 174, null);
function Style$TextAlign$4(){
  Style$TextAlign.call(this, 'RIGHT', 3);
}

defineClass(175, 43, $intern_12, Style$TextAlign$4);
var Lcom_google_gwt_dom_client_Style$TextAlign$4_2_classLit = createForEnum('com.google.gwt.dom.client', 'Style/TextAlign/4', 175, null);
defineClass(282, 1, {});
_.toString$ = function toString_8(){
  return 'An event type';
}
;
var Lcom_google_web_bindery_event_shared_Event_2_classLit = createForClass('com.google.web.bindery.event.shared', 'Event', 282);
function $overrideSource(this$static, source){
  this$static.source = source;
}

defineClass(283, 282, {});
_.dead = false;
var Lcom_google_gwt_event_shared_GwtEvent_2_classLit = createForClass('com.google.gwt.event.shared', 'GwtEvent', 283);
function $setNativeEvent(this$static, nativeEvent){
  this$static.nativeEvent = nativeEvent;
}

function $setRelativeElement(this$static, relativeElem){
  this$static.relativeElem = relativeElem;
}

function fireNativeEvent(nativeEvent, handlerSource, relativeElem){
  var currentNative, currentRelativeElem, type_0, type$iterator, types;
  if (registered) {
    types = dynamicCast($unsafeGet(registered, nativeEvent.type), 50);
    if (types) {
      for (type$iterator = types.iterator(); type$iterator.hasNext();) {
        type_0 = dynamicCast(type$iterator.next(), 88);
        currentNative = type_0.flyweight.nativeEvent;
        currentRelativeElem = type_0.flyweight.relativeElem;
        $setNativeEvent(type_0.flyweight, nativeEvent);
        $setRelativeElement(type_0.flyweight, relativeElem);
        $fireEvent(handlerSource, type_0.flyweight);
        $setNativeEvent(type_0.flyweight, currentNative);
        $setRelativeElement(type_0.flyweight, currentRelativeElem);
      }
    }
  }
}

defineClass(289, 283, {});
_.getAssociatedType = function getAssociatedType(){
  return this.getAssociatedType_0();
}
;
var registered;
var Lcom_google_gwt_event_dom_client_DomEvent_2_classLit = createForClass('com.google.gwt.event.dom.client', 'DomEvent', 289);
function $clinit_ChangeEvent(){
  $clinit_ChangeEvent = emptyMethod;
  TYPE = new DomEvent$Type('change', new ChangeEvent);
}

function ChangeEvent(){
}

defineClass(196, 289, {}, ChangeEvent);
_.dispatch = function dispatch(handler){
  $onChange(dynamicCast(handler, 265));
}
;
_.getAssociatedType_0 = function getAssociatedType_0(){
  return TYPE;
}
;
var TYPE;
var Lcom_google_gwt_event_dom_client_ChangeEvent_2_classLit = createForClass('com.google.gwt.event.dom.client', 'ChangeEvent', 196);
defineClass(290, 289, {});
var Lcom_google_gwt_event_dom_client_HumanInputEvent_2_classLit = createForClass('com.google.gwt.event.dom.client', 'HumanInputEvent', 290);
defineClass(291, 290, {});
var Lcom_google_gwt_event_dom_client_MouseEvent_2_classLit = createForClass('com.google.gwt.event.dom.client', 'MouseEvent', 291);
function $clinit_ClickEvent(){
  $clinit_ClickEvent = emptyMethod;
  TYPE_0 = new DomEvent$Type('click', new ClickEvent);
}

function ClickEvent(){
}

defineClass(195, 291, {}, ClickEvent);
_.dispatch = function dispatch_0(handler){
  dynamicCast(handler, 81).onClick(this);
}
;
_.getAssociatedType_0 = function getAssociatedType_1(){
  return TYPE_0;
}
;
var TYPE_0;
var Lcom_google_gwt_event_dom_client_ClickEvent_2_classLit = createForClass('com.google.gwt.event.dom.client', 'ClickEvent', 195);
defineClass(158, 1, {});
_.hashCode$ = function hashCode_2(){
  return this.index_0;
}
;
_.toString$ = function toString_9(){
  return 'Event type';
}
;
_.index_0 = 0;
var nextHashCode = 0;
var Lcom_google_web_bindery_event_shared_Event$Type_2_classLit = createForClass('com.google.web.bindery.event.shared', 'Event/Type', 158);
function GwtEvent$Type(){
  this.index_0 = ++nextHashCode;
}

defineClass(85, 158, {}, GwtEvent$Type);
var Lcom_google_gwt_event_shared_GwtEvent$Type_2_classLit = createForClass('com.google.gwt.event.shared', 'GwtEvent/Type', 85);
function DomEvent$Type(eventName, flyweight){
  var types;
  GwtEvent$Type.call(this);
  this.flyweight = flyweight;
  !registered && (registered = new PrivateMap);
  types = dynamicCast($unsafeGet(registered, eventName), 50);
  if (!types) {
    types = new ArrayList;
    $unsafePut(registered, eventName, types);
  }
  types.add_1(this);
  this.name_0 = eventName;
}

defineClass(88, 85, {88:1}, DomEvent$Type);
var Lcom_google_gwt_event_dom_client_DomEvent$Type_2_classLit = createForClass('com.google.gwt.event.dom.client', 'DomEvent/Type', 88);
function $unsafeGet(this$static, key){
  return this$static.map_0[key];
}

function $unsafePut(this$static, key, value_0){
  this$static.map_0[key] = value_0;
}

function PrivateMap(){
  this.map_0 = {};
}

defineClass(197, 1, {}, PrivateMap);
var Lcom_google_gwt_event_dom_client_PrivateMap_2_classLit = createForClass('com.google.gwt.event.dom.client', 'PrivateMap', 197);
function CloseEvent_0(){
}

function fire_0(source){
  var event_0;
  if (TYPE_1) {
    event_0 = new CloseEvent_0;
    $fireEvent_0(source, event_0);
  }
}

defineClass(194, 283, {}, CloseEvent_0);
_.dispatch = function dispatch_1(handler){
  dynamicCast(handler, 293);
  detachWidgets();
}
;
_.getAssociatedType = function getAssociatedType_2(){
  return TYPE_1;
}
;
var TYPE_1;
var Lcom_google_gwt_event_logical_shared_CloseEvent_2_classLit = createForClass('com.google.gwt.event.logical.shared', 'CloseEvent', 194);
function $dispatch(this$static, handler){
  $onResize(handler, this$static);
}

function ResizeEvent(width_0){
  this.width_0 = width_0;
}

function fire_1(source, width_0){
  var event_0;
  if (TYPE_2) {
    event_0 = new ResizeEvent(width_0);
    $fireEvent_0(source, event_0);
  }
}

defineClass(171, 283, {}, ResizeEvent);
_.dispatch = function dispatch_2(handler){
  $dispatch(this, dynamicCast(handler, 264));
}
;
_.getAssociatedType = function getAssociatedType_3(){
  return TYPE_2;
}
;
_.width_0 = 0;
var TYPE_2;
var Lcom_google_gwt_event_logical_shared_ResizeEvent_2_classLit = createForClass('com.google.gwt.event.logical.shared', 'ResizeEvent', 171);
function $addHandler(this$static, type_0, handler){
  return new LegacyHandlerWrapper($doAdd(this$static.eventBus, type_0, handler));
}

function $fireEvent_0(this$static, event_0){
  var e, oldSource;
  !event_0.dead || (event_0.dead = false , event_0.source = null);
  oldSource = event_0.source;
  $overrideSource(event_0, this$static.source);
  try {
    $doFire(this$static.eventBus, event_0);
  }
   catch ($e0) {
    $e0 = wrap($e0);
    if (instanceOf($e0, 64)) {
      e = $e0;
      throw new UmbrellaException_0(e.causes);
    }
     else 
      throw unwrap($e0);
  }
   finally {
    oldSource == null?(event_0.dead = true , event_0.source = null):(event_0.source = oldSource);
  }
}

function HandlerManager(source){
  this.eventBus = new HandlerManager$Bus;
  this.source = source;
}

defineClass(97, 1, {21:1}, HandlerManager);
var Lcom_google_gwt_event_shared_HandlerManager_2_classLit = createForClass('com.google.gwt.event.shared', 'HandlerManager', 97);
defineClass(284, 1, {});
var Lcom_google_web_bindery_event_shared_EventBus_2_classLit = createForClass('com.google.web.bindery.event.shared', 'EventBus', 284);
function $defer(this$static, command){
  !this$static.deferredDeltas && (this$static.deferredDeltas = new ArrayList);
  $add_4(this$static.deferredDeltas, command);
}

function $doAdd(this$static, type_0, handler){
  if (!type_0) {
    throw new NullPointerException_0('Cannot add a handler with a null type');
  }
  this$static.firingDepth > 0?$defer(this$static, new SimpleEventBus$2(this$static, type_0, handler)):$doAddNow(this$static, type_0, null, handler);
  return new SimpleEventBus$1;
}

function $doAddNow(this$static, type_0, source, handler){
  var l;
  l = $ensureHandlerList(this$static, type_0, source);
  l.add_1(handler);
}

function $doFire(this$static, event_0){
  var causes, e, handler, handlers, it;
  if (!event_0) {
    throw new NullPointerException_0('Cannot fire null event');
  }
  try {
    ++this$static.firingDepth;
    handlers = $getDispatchList(this$static, event_0.getAssociatedType());
    causes = null;
    it = this$static.isReverseOrder?handlers.listIterator_0(handlers.size_1()):handlers.listIterator();
    while (this$static.isReverseOrder?it.hasPrevious():it.hasNext()) {
      handler = this$static.isReverseOrder?it.previous():it.next();
      try {
        event_0.dispatch(dynamicCast(handler, 55));
      }
       catch ($e0) {
        $e0 = wrap($e0);
        if (instanceOf($e0, 13)) {
          e = $e0;
          !causes && (causes = new HashSet);
          $add_5(causes, e);
        }
         else 
          throw unwrap($e0);
      }
    }
    if (causes) {
      throw new UmbrellaException(causes);
    }
  }
   finally {
    --this$static.firingDepth;
    this$static.firingDepth == 0 && $handleQueuedAddsAndRemoves(this$static);
  }
}

function $ensureHandlerList(this$static, type_0, source){
  var handlers, sourceMap;
  sourceMap = dynamicCast($get_0(this$static.map_0, type_0), 78);
  if (!sourceMap) {
    sourceMap = new HashMap;
    $put_0(this$static.map_0, type_0, sourceMap);
  }
  handlers = dynamicCast(getEntryValueOrNull($getEntry(sourceMap.hashCodeMap, source)), 50);
  if (!handlers) {
    handlers = new ArrayList;
    $put_1(sourceMap.hashCodeMap, source, handlers);
  }
  return handlers;
}

function $getDispatchList(this$static, type_0){
  var directHandlers;
  directHandlers = $getHandlerList(this$static, type_0);
  return directHandlers;
}

function $getHandlerList(this$static, type_0){
  var handlers, sourceMap;
  sourceMap = dynamicCast($get_0(this$static.map_0, type_0), 78);
  if (!sourceMap) {
    return $clinit_Collections() , $clinit_Collections() , EMPTY_LIST;
  }
  handlers = dynamicCast(getEntryValueOrNull($getEntry(sourceMap.hashCodeMap, null)), 50);
  if (!handlers) {
    return $clinit_Collections() , $clinit_Collections() , EMPTY_LIST;
  }
  return handlers;
}

function $handleQueuedAddsAndRemoves(this$static){
  var c, c$iterator;
  if (this$static.deferredDeltas) {
    try {
      for (c$iterator = new AbstractList$IteratorImpl(this$static.deferredDeltas); c$iterator.i < c$iterator.this$01_0.size_1();) {
        c = (checkCriticalElement(c$iterator.i < c$iterator.this$01_0.size_1()) , dynamicCast(c$iterator.this$01_0.get_0(c$iterator.i++), 292));
        $doAddNow(c.this$01, c.val$type2, c.val$source3, c.val$handler4);
      }
    }
     finally {
      this$static.deferredDeltas = null;
    }
  }
}

defineClass(159, 284, {});
_.firingDepth = 0;
_.isReverseOrder = false;
var Lcom_google_web_bindery_event_shared_SimpleEventBus_2_classLit = createForClass('com.google.web.bindery.event.shared', 'SimpleEventBus', 159);
function HandlerManager$Bus(){
  this.map_0 = new HashMap;
  this.isReverseOrder = false;
}

defineClass(160, 159, {}, HandlerManager$Bus);
var Lcom_google_gwt_event_shared_HandlerManager$Bus_2_classLit = createForClass('com.google.gwt.event.shared', 'HandlerManager/Bus', 160);
function LegacyHandlerWrapper(){
}

defineClass(190, 1, {}, LegacyHandlerWrapper);
var Lcom_google_gwt_event_shared_LegacyHandlerWrapper_2_classLit = createForClass('com.google.gwt.event.shared', 'LegacyHandlerWrapper', 190);
function UmbrellaException(causes){
  RuntimeException_1.call(this, makeMessage(causes), makeCause(causes));
  this.causes = causes;
}

function makeCause(causes){
  var iterator;
  iterator = causes.iterator();
  if (!iterator.hasNext()) {
    return null;
  }
  return dynamicCast(iterator.next(), 13);
}

function makeMessage(causes){
  var b, count, first, t, t$iterator;
  count = causes.size_1();
  if (count == 0) {
    return null;
  }
  b = new StringBuilder(count == 1?'Exception caught: ':count + ' exceptions caught: ');
  first = true;
  for (t$iterator = causes.iterator(); t$iterator.hasNext();) {
    t = dynamicCast(t$iterator.next(), 13);
    first?(first = false):(b.string += '; ' , b);
    $append_0(b, t.getMessage());
  }
  return b.string;
}

defineClass(64, 27, $intern_13, UmbrellaException);
var Lcom_google_web_bindery_event_shared_UmbrellaException_2_classLit = createForClass('com.google.web.bindery.event.shared', 'UmbrellaException', 64);
function UmbrellaException_0(causes){
  UmbrellaException.call(this, causes);
}

defineClass(111, 64, $intern_13, UmbrellaException_0);
var Lcom_google_gwt_event_shared_UmbrellaException_2_classLit = createForClass('com.google.gwt.event.shared', 'UmbrellaException', 111);
function getDirectionOnElement(elem){
  var dirPropertyValue;
  dirPropertyValue = $getPropertyString(elem, 'dir');
  if ($equalsIgnoreCase('rtl', dirPropertyValue)) {
    return $clinit_HasDirection$Direction() , RTL;
  }
   else if ($equalsIgnoreCase('ltr', dirPropertyValue)) {
    return $clinit_HasDirection$Direction() , LTR;
  }
  return $clinit_HasDirection$Direction() , DEFAULT;
}

function setDirectionOnElement(elem, direction){
  switch (direction.ordinal) {
    case 0:
      {
        $setPropertyString(elem, 'dir', 'rtl');
        break;
      }

    case 1:
      {
        $setPropertyString(elem, 'dir', 'ltr');
        break;
      }

    case 2:
      {
        getDirectionOnElement(elem) != ($clinit_HasDirection$Direction() , DEFAULT) && $setPropertyString(elem, 'dir', '');
        break;
      }

  }
}

function $clinit_HasDirection$Direction(){
  $clinit_HasDirection$Direction = emptyMethod;
  RTL = new HasDirection$Direction('RTL', 0);
  LTR = new HasDirection$Direction('LTR', 1);
  DEFAULT = new HasDirection$Direction('DEFAULT', 2);
}

function HasDirection$Direction(enum$name, enum$ordinal){
  Enum.call(this, enum$name, enum$ordinal);
}

function values_4(){
  $clinit_HasDirection$Direction();
  return initValues(getClassLiteralForArray(Lcom_google_gwt_i18n_client_HasDirection$Direction_2_classLit, 1), $intern_9, 72, 0, [RTL, LTR, DEFAULT]);
}

defineClass(72, 8, {72:1, 3:1, 9:1, 8:1}, HasDirection$Direction);
var DEFAULT, LTR, RTL;
var Lcom_google_gwt_i18n_client_HasDirection$Direction_2_classLit = createForEnum('com.google.gwt.i18n.client', 'HasDirection/Direction', 72, values_4);
function createFrom(array, length_0){
  var result;
  result = initializeArrayElementsWithDefaults(0, length_0);
  initValues(getClass__Ljava_lang_Class___devirtual$(array), array.castableTypeMap$, array.__elementTypeId$, array.__elementTypeCategory$, result);
  return result;
}

function getClassLiteralForArray(clazz, dimensions){
  return getClassLiteralForArray_0(clazz, dimensions);
}

function initDim(leafClassLiteral, castableTypeMap, elementTypeId, length_0, elementTypeCategory, dimensions){
  var result;
  result = initializeArrayElementsWithDefaults(elementTypeCategory, length_0);
  initValues(getClassLiteralForArray(leafClassLiteral, dimensions), castableTypeMap, elementTypeId, elementTypeCategory, result);
  return result;
}

function initDims(leafClassLiteral, castableTypeMapExprs, elementTypeIds, leafElementTypeCategory, dimExprs, count){
  return initDims_0(leafClassLiteral, castableTypeMapExprs, elementTypeIds, leafElementTypeCategory, dimExprs, 0, count);
}

function initDims_0(leafClassLiteral, castableTypeMapExprs, elementTypeIds, leafElementTypeCategory, dimExprs, index_0, count){
  var elementTypeCategory, i, isLastDim, length_0, result;
  length_0 = dimExprs[index_0];
  isLastDim = index_0 == count - 1;
  elementTypeCategory = isLastDim?leafElementTypeCategory:0;
  result = initializeArrayElementsWithDefaults(elementTypeCategory, length_0);
  initValues(getClassLiteralForArray(leafClassLiteral, count - index_0), castableTypeMapExprs[index_0], elementTypeIds[index_0], elementTypeCategory, result);
  if (!isLastDim) {
    ++index_0;
    for (i = 0; i < length_0; ++i) {
      result[i] = initDims_0(leafClassLiteral, castableTypeMapExprs, elementTypeIds, leafElementTypeCategory, dimExprs, index_0, count);
    }
  }
  return result;
}

function initValues(arrayClass, castableTypeMap, elementTypeId, elementTypeCategory, array){
  array.___clazz$ = arrayClass;
  array.castableTypeMap$ = castableTypeMap;
  array.typeMarker$ = typeMarkerFn;
  array.__elementTypeId$ = elementTypeId;
  array.__elementTypeCategory$ = elementTypeCategory;
  return array;
}

function initializeArrayElementsWithDefaults(elementTypeCategory, length_0){
  var array = new Array(length_0);
  var initValue;
  switch (elementTypeCategory) {
    case 6:
      initValue = {l:0, m:0, h:0};
      break;
    case 7:
      initValue = 0;
      break;
    case 8:
      initValue = false;
      break;
    default:return array;
  }
  for (var i = 0; i < length_0; ++i) {
    array[i] = initValue;
  }
  return array;
}

function setCheck(array, index_0, value_0){
  var elementTypeId;
  if (value_0 != null) {
    switch (array.__elementTypeCategory$) {
      case 4:
        if (!isJavaString(value_0)) {
          throw new ArrayStoreException;
        }

        break;
      case 0:
        {
          elementTypeId = array.__elementTypeId$;
          if (!canCast(value_0, elementTypeId)) {
            throw new ArrayStoreException;
          }
          break;
        }

      case 2:
        if (!(!isJavaString(value_0) && !hasTypeMarker(value_0))) {
          throw new ArrayStoreException;
        }

        break;
      case 1:
        {
          elementTypeId = array.__elementTypeId$;
          if (!(!isJavaString(value_0) && !hasTypeMarker(value_0)) && !canCast(value_0, elementTypeId)) {
            throw new ArrayStoreException;
          }
          break;
        }

    }
  }
  return array[index_0] = value_0;
}

function cacheJavaScriptException(e, jse){
  if (e && typeof e == 'object') {
    try {
      e.__gwt$exception = jse;
    }
     catch (ignored) {
    }
  }
}

function unwrap(e){
  var jse;
  if (instanceOf(e, 48)) {
    jse = dynamicCast(e, 48);
    if (maskUndefined(jse.e) !== maskUndefined(($clinit_JavaScriptException() , NOT_SET))) {
      return maskUndefined(jse.e) === maskUndefined(NOT_SET)?null:jse.e;
    }
  }
  return e;
}

function wrap(e){
  var jse;
  if (instanceOf(e, 13)) {
    return e;
  }
  jse = e && e.__gwt$exception;
  if (!jse) {
    jse = new JavaScriptException(e);
    captureStackTrace(jse, e);
    cacheJavaScriptException(e, jse);
  }
  return jse;
}

function create(value_0){
  var a0, a1, a2;
  a0 = value_0 & $intern_3;
  a1 = value_0 >> 22 & $intern_3;
  a2 = value_0 < 0?$intern_8:0;
  return create0(a0, a1, a2);
}

function create_0(a){
  return create0(a.l, a.m, a.h);
}

function create0(l, m, h){
  return {l:l, m:m, h:h};
}

function divMod(a, b, computeRemainder){
  var aIsCopy, aIsMinValue, aIsNegative, bpower, c, negative;
  if (b.l == 0 && b.m == 0 && b.h == 0) {
    throw new ArithmeticException;
  }
  if (a.l == 0 && a.m == 0 && a.h == 0) {
    computeRemainder && (remainder = create0(0, 0, 0));
    return create0(0, 0, 0);
  }
  if (b.h == $intern_14 && b.m == 0 && b.l == 0) {
    return divModByMinValue(a, computeRemainder);
  }
  negative = false;
  if (b.h >> 19 != 0) {
    b = neg(b);
    negative = true;
  }
  bpower = powerOfTwo(b);
  aIsNegative = false;
  aIsMinValue = false;
  aIsCopy = false;
  if (a.h == $intern_14 && a.m == 0 && a.l == 0) {
    aIsMinValue = true;
    aIsNegative = true;
    if (bpower == -1) {
      a = create_0(($clinit_LongLib$Const() , MAX_VALUE));
      aIsCopy = true;
      negative = !negative;
    }
     else {
      c = shr(a, bpower);
      negative && negate(c);
      computeRemainder && (remainder = create0(0, 0, 0));
      return c;
    }
  }
   else if (a.h >> 19 != 0) {
    aIsNegative = true;
    a = neg(a);
    aIsCopy = true;
    negative = !negative;
  }
  if (bpower != -1) {
    return divModByShift(a, bpower, negative, aIsNegative, computeRemainder);
  }
  if (!gte_0(a, b)) {
    computeRemainder && (aIsNegative?(remainder = neg(a)):(remainder = create0(a.l, a.m, a.h)));
    return create0(0, 0, 0);
  }
  return divModHelper(aIsCopy?a:create0(a.l, a.m, a.h), b, negative, aIsNegative, aIsMinValue, computeRemainder);
}

function divModByMinValue(a, computeRemainder){
  if (a.h == $intern_14 && a.m == 0 && a.l == 0) {
    computeRemainder && (remainder = create0(0, 0, 0));
    return create_0(($clinit_LongLib$Const() , ONE));
  }
  computeRemainder && (remainder = create0(a.l, a.m, a.h));
  return create0(0, 0, 0);
}

function divModByShift(a, bpower, negative, aIsNegative, computeRemainder){
  var c;
  c = shr(a, bpower);
  negative && negate(c);
  if (computeRemainder) {
    a = maskRight(a, bpower);
    aIsNegative?(remainder = neg(a)):(remainder = create0(a.l, a.m, a.h));
  }
  return c;
}

function divModHelper(a, b, negative, aIsNegative, aIsMinValue, computeRemainder){
  var bshift, gte, quotient, shift_0, a1, a2, a0;
  shift_0 = numberOfLeadingZeros(b) - numberOfLeadingZeros(a);
  bshift = shl(b, shift_0);
  quotient = create0(0, 0, 0);
  while (shift_0 >= 0) {
    gte = trialSubtract(a, bshift);
    if (gte) {
      shift_0 < 22?(quotient.l |= 1 << shift_0 , undefined):shift_0 < 44?(quotient.m |= 1 << shift_0 - 22 , undefined):(quotient.h |= 1 << shift_0 - 44 , undefined);
      if (a.l == 0 && a.m == 0 && a.h == 0) {
        break;
      }
    }
    a1 = bshift.m;
    a2 = bshift.h;
    a0 = bshift.l;
    setH(bshift, a2 >>> 1);
    bshift.m = a1 >>> 1 | (a2 & 1) << 21;
    bshift.l = a0 >>> 1 | (a1 & 1) << 21;
    --shift_0;
  }
  negative && negate(quotient);
  if (computeRemainder) {
    if (aIsNegative) {
      remainder = neg(a);
      aIsMinValue && (remainder = sub_0(remainder, ($clinit_LongLib$Const() , ONE)));
    }
     else {
      remainder = create0(a.l, a.m, a.h);
    }
  }
  return quotient;
}

function maskRight(a, bits){
  var b0, b1, b2;
  if (bits <= 22) {
    b0 = a.l & (1 << bits) - 1;
    b1 = b2 = 0;
  }
   else if (bits <= 44) {
    b0 = a.l;
    b1 = a.m & (1 << bits - 22) - 1;
    b2 = 0;
  }
   else {
    b0 = a.l;
    b1 = a.m;
    b2 = a.h & (1 << bits - 44) - 1;
  }
  return create0(b0, b1, b2);
}

function negate(a){
  var neg0, neg1, neg2;
  neg0 = ~a.l + 1 & $intern_3;
  neg1 = ~a.m + (neg0 == 0?1:0) & $intern_3;
  neg2 = ~a.h + (neg0 == 0 && neg1 == 0?1:0) & $intern_8;
  setL(a, neg0);
  setM(a, neg1);
  setH(a, neg2);
}

function numberOfLeadingZeros(a){
  var b1, b2;
  b2 = numberOfLeadingZeros_0(a.h);
  if (b2 == 32) {
    b1 = numberOfLeadingZeros_0(a.m);
    return b1 == 32?numberOfLeadingZeros_0(a.l) + 32:b1 + 20 - 10;
  }
   else {
    return b2 - 12;
  }
}

function powerOfTwo(a){
  var h, l, m;
  l = a.l;
  if ((l & l - 1) != 0) {
    return -1;
  }
  m = a.m;
  if ((m & m - 1) != 0) {
    return -1;
  }
  h = a.h;
  if ((h & h - 1) != 0) {
    return -1;
  }
  if (h == 0 && m == 0 && l == 0) {
    return -1;
  }
  if (h == 0 && m == 0 && l != 0) {
    return numberOfTrailingZeros(l);
  }
  if (h == 0 && m != 0 && l == 0) {
    return numberOfTrailingZeros(m) + 22;
  }
  if (h != 0 && m == 0 && l == 0) {
    return numberOfTrailingZeros(h) + 44;
  }
  return -1;
}

function setH(a, x_0){
  a.h = x_0;
}

function setL(a, x_0){
  a.l = x_0;
}

function setM(a, x_0){
  a.m = x_0;
}

function trialSubtract(a, b){
  var sum0, sum1, sum2;
  sum2 = a.h - b.h;
  if (sum2 < 0) {
    return false;
  }
  sum0 = a.l - b.l;
  sum1 = a.m - b.m + (sum0 >> 22);
  sum2 += sum1 >> 22;
  if (sum2 < 0) {
    return false;
  }
  setL(a, sum0 & $intern_3);
  setM(a, sum1 & $intern_3);
  setH(a, sum2 & $intern_8);
  return true;
}

var remainder;
function add_1(a, b){
  var sum0, sum1, sum2;
  sum0 = a.l + b.l;
  sum1 = a.m + b.m + (sum0 >> 22);
  sum2 = a.h + b.h + (sum1 >> 22);
  return {l:sum0 & $intern_3, m:sum1 & $intern_3, h:sum2 & $intern_8};
}

function and(a, b){
  return {l:a.l & b.l, m:a.m & b.m, h:a.h & b.h};
}

function div_0(a, b){
  return divMod(a, b, false);
}

function eq(a, b){
  return a.l == b.l && a.m == b.m && a.h == b.h;
}

function fromInt(value_0){
  var rebase, result;
  if (value_0 > -129 && value_0 < 128) {
    rebase = value_0 + 128;
    boxedValues == null && (boxedValues = initDim(Lcom_google_gwt_lang_LongLibBase$LongEmul_2_classLit, $intern_7, 299, 256, 0, 1));
    result = boxedValues[rebase];
    !result && (result = boxedValues[rebase] = create(value_0));
    return result;
  }
  return create(value_0);
}

function gt(a, b){
  var signa, signb;
  signa = a.h >> 19;
  signb = b.h >> 19;
  return signa == 0?signb != 0 || a.h > b.h || a.h == b.h && a.m > b.m || a.h == b.h && a.m == b.m && a.l > b.l:!(signb == 0 || a.h < b.h || a.h == b.h && a.m < b.m || a.h == b.h && a.m == b.m && a.l <= b.l);
}

function gte_0(a, b){
  var signa, signb;
  signa = a.h >> 19;
  signb = b.h >> 19;
  return signa == 0?signb != 0 || a.h > b.h || a.h == b.h && a.m > b.m || a.h == b.h && a.m == b.m && a.l >= b.l:!(signb == 0 || a.h < b.h || a.h == b.h && a.m < b.m || a.h == b.h && a.m == b.m && a.l < b.l);
}

function lt(a, b){
  return !gte_0(a, b);
}

function lte(a, b){
  return !gt(a, b);
}

function mod(a, b){
  divMod(a, b, true);
  return remainder;
}

function mul(a, b){
  var a0, a1, a2, a3, a4, b0, b1, b2, b3, b4, c0, c00, c01, c1, c10, c11, c12, c13, c2, c22, c23, c24, p0, p1, p2, p3, p4;
  a0 = a.l & 8191;
  a1 = a.l >> 13 | (a.m & 15) << 9;
  a2 = a.m >> 4 & 8191;
  a3 = a.m >> 17 | (a.h & 255) << 5;
  a4 = (a.h & 1048320) >> 8;
  b0 = b.l & 8191;
  b1 = b.l >> 13 | (b.m & 15) << 9;
  b2 = b.m >> 4 & 8191;
  b3 = b.m >> 17 | (b.h & 255) << 5;
  b4 = (b.h & 1048320) >> 8;
  p0 = a0 * b0;
  p1 = a1 * b0;
  p2 = a2 * b0;
  p3 = a3 * b0;
  p4 = a4 * b0;
  if (b1 != 0) {
    p1 += a0 * b1;
    p2 += a1 * b1;
    p3 += a2 * b1;
    p4 += a3 * b1;
  }
  if (b2 != 0) {
    p2 += a0 * b2;
    p3 += a1 * b2;
    p4 += a2 * b2;
  }
  if (b3 != 0) {
    p3 += a0 * b3;
    p4 += a1 * b3;
  }
  b4 != 0 && (p4 += a0 * b4);
  c00 = p0 & $intern_3;
  c01 = (p1 & 511) << 13;
  c0 = c00 + c01;
  c10 = p0 >> 22;
  c11 = p1 >> 9;
  c12 = (p2 & 262143) << 4;
  c13 = (p3 & 31) << 17;
  c1 = c10 + c11 + c12 + c13;
  c22 = p2 >> 18;
  c23 = p3 >> 5;
  c24 = (p4 & 4095) << 8;
  c2 = c22 + c23 + c24;
  c1 += c0 >> 22;
  c0 &= $intern_3;
  c2 += c1 >> 22;
  c1 &= $intern_3;
  c2 &= $intern_8;
  return create0(c0, c1, c2);
}

function neg(a){
  var neg0, neg1, neg2;
  neg0 = ~a.l + 1 & $intern_3;
  neg1 = ~a.m + (neg0 == 0?1:0) & $intern_3;
  neg2 = ~a.h + (neg0 == 0 && neg1 == 0?1:0) & $intern_8;
  return create0(neg0, neg1, neg2);
}

function neq(a, b){
  return a.l != b.l || a.m != b.m || a.h != b.h;
}

function not(a){
  return {l:~a.l & $intern_3, m:~a.m & $intern_3, h:~a.h & $intern_8};
}

function or(a, b){
  return {l:a.l | b.l, m:a.m | b.m, h:a.h | b.h};
}

function shl(a, n){
  var res0, res1, res2;
  n &= 63;
  if (n < 22) {
    res0 = a.l << n;
    res1 = a.m << n | a.l >> 22 - n;
    res2 = a.h << n | a.m >> 22 - n;
  }
   else if (n < 44) {
    res0 = 0;
    res1 = a.l << n - 22;
    res2 = a.m << n - 22 | a.l >> 44 - n;
  }
   else {
    res0 = 0;
    res1 = 0;
    res2 = a.l << n - 44;
  }
  return {l:res0 & $intern_3, m:res1 & $intern_3, h:res2 & $intern_8};
}

function shr(a, n){
  var a2, negative, res0, res1, res2;
  n &= 63;
  a2 = a.h;
  negative = (a2 & $intern_14) != 0;
  negative && (a2 |= -1048576);
  if (n < 22) {
    res2 = a2 >> n;
    res1 = a.m >> n | a2 << 22 - n;
    res0 = a.l >> n | a.m << 22 - n;
  }
   else if (n < 44) {
    res2 = negative?$intern_8:0;
    res1 = a2 >> n - 22;
    res0 = a.m >> n - 22 | a2 << 44 - n;
  }
   else {
    res2 = negative?$intern_8:0;
    res1 = negative?$intern_3:0;
    res0 = a2 >> n - 44;
  }
  return {l:res0 & $intern_3, m:res1 & $intern_3, h:res2 & $intern_8};
}

function shru(a, n){
  var a2, res0, res1, res2;
  n &= 63;
  a2 = a.h & $intern_8;
  if (n < 22) {
    res2 = a2 >>> n;
    res1 = a.m >> n | a2 << 22 - n;
    res0 = a.l >> n | a.m << 22 - n;
  }
   else if (n < 44) {
    res2 = 0;
    res1 = a2 >>> n - 22;
    res0 = a.m >> n - 22 | a.h << 44 - n;
  }
   else {
    res2 = 0;
    res1 = 0;
    res0 = a2 >>> n - 44;
  }
  return {l:res0 & $intern_3, m:res1 & $intern_3, h:res2 & $intern_8};
}

function sub_0(a, b){
  var sum0, sum1, sum2;
  sum0 = a.l - b.l;
  sum1 = a.m - b.m + (sum0 >> 22);
  sum2 = a.h - b.h + (sum1 >> 22);
  return {l:sum0 & $intern_3, m:sum1 & $intern_3, h:sum2 & $intern_8};
}

function toInt(a){
  return a.l | a.m << 22;
}

function toString_10(a){
  var digits, rem, res, tenPowerLong, zeroesNeeded;
  if (a.l == 0 && a.m == 0 && a.h == 0) {
    return '0';
  }
  if (a.h == $intern_14 && a.m == 0 && a.l == 0) {
    return '-9223372036854775808';
  }
  if (a.h >> 19 != 0) {
    return '-' + toString_10(neg(a));
  }
  rem = a;
  res = '';
  while (!(rem.l == 0 && rem.m == 0 && rem.h == 0)) {
    tenPowerLong = fromInt(1000000000);
    rem = divMod(rem, tenPowerLong, true);
    digits = '' + toInt(remainder);
    if (!(rem.l == 0 && rem.m == 0 && rem.h == 0)) {
      zeroesNeeded = 9 - digits.length;
      for (; zeroesNeeded > 0; zeroesNeeded--) {
        digits = '0' + digits;
      }
    }
    res = digits + res;
  }
  return res;
}

function xor(a, b){
  return {l:a.l ^ b.l, m:a.m ^ b.m, h:a.h ^ b.h};
}

var boxedValues;
function $clinit_LongLib$Const(){
  $clinit_LongLib$Const = emptyMethod;
  MAX_VALUE = create0($intern_3, $intern_3, 524287);
  MIN_VALUE = create0(0, 0, $intern_14);
  ONE = fromInt(1);
  fromInt(2);
  ZERO = fromInt(0);
}

var MAX_VALUE, MIN_VALUE, ONE, ZERO;
function hasTypeMarker(o){
  return o.typeMarker$ === typeMarkerFn;
}

function init(){
  $wnd.setTimeout($entry(assertCompileTimeUserAgent));
  $onModuleLoad_0();
  $onModuleLoad(new WebApp);
}

function compile(pattern, flags){
  return new RegExp(pattern, flags);
}

function SafeUriString(uri_0){
  this.uri_0 = uri_0;
}

defineClass(105, 1, {263:1, 105:1}, SafeUriString);
_.equals$ = function equals_1(obj){
  if (!instanceOf(obj, 263)) {
    return false;
  }
  return $equals(this.uri_0, dynamicCast(dynamicCast(obj, 263), 105).uri_0);
}
;
_.hashCode$ = function hashCode_3(){
  return getHashCode_0(this.uri_0);
}
;
var Lcom_google_gwt_safehtml_shared_SafeUriString_2_classLit = createForClass('com.google.gwt.safehtml.shared', 'SafeUriString', 105);
function $clinit_UriUtils(){
  $clinit_UriUtils = emptyMethod;
  new RegExp('%5B', 'g');
  new RegExp('%5D', 'g');
}

function dispatchEvent_1(evt, elem, listener){
  var prevCurrentEvent;
  prevCurrentEvent = currentEvent;
  currentEvent = evt;
  elem == sCaptureElem && $eventGetTypeInt(evt.type) == 8192 && (sCaptureElem = null);
  listener.onBrowserEvent(evt);
  currentEvent = prevCurrentEvent;
}

function isPotential(o){
  try {
    return !!o && !!o.__gwt_resolve;
  }
   catch (e) {
    return false;
  }
}

function previewEvent(evt){
  return true;
}

function resolve(maybePotential){
  return maybePotential.__gwt_resolve?maybePotential.__gwt_resolve():maybePotential;
}

function sinkEvents(elem, eventBits){
  $maybeInitializeEventSystem();
  $sinkEventsImpl(elem, eventBits);
}

var currentEvent = null, sCaptureElem;
function $onModuleLoad_0(){
  var allowedModes, currentMode, i;
  currentMode = $doc.compatMode;
  allowedModes = initValues(getClassLiteralForArray(Ljava_lang_String_2_classLit, 1), $intern_6, 2, 4, ['CSS1Compat']);
  for (i = 0; i < allowedModes.length; i++) {
    if ($equals(allowedModes[i], currentMode)) {
      return;
    }
  }
  allowedModes.length == 1 && $equals('CSS1Compat', allowedModes[0]) && $equals('BackCompat', currentMode)?"GWT no longer supports Quirks Mode (document.compatMode=' BackCompat').<br>Make sure your application's host HTML page has a Standards Mode (document.compatMode=' CSS1Compat') doctype,<br>e.g. by using &lt;!doctype html&gt; at the start of your application's HTML page.<br><br>To continue using this unsupported rendering mode and risk layout problems, suppress this message by adding<br>the following line to your*.gwt.xml module file:<br>&nbsp;&nbsp;&lt;extend-configuration-property name=\"document.compatMode\" value=\"" + currentMode + '"/&gt;':"Your *.gwt.xml module configuration prohibits the use of the current document rendering mode (document.compatMode=' " + currentMode + "').<br>Modify your application's host HTML page doctype, or update your custom " + "'document.compatMode' configuration property settings.";
}

function sinkEvents_0(elem){
  $maybeInitializeEventSystem();
  $sinkEventsImpl(elem, $intern_15);
}

function addCloseHandler(handler){
  maybeInitializeCloseHandlers();
  return addHandler(TYPE_1?TYPE_1:(TYPE_1 = new GwtEvent$Type), handler);
}

function addHandler(type_0, handler){
  return $addHandler((!handlers_0 && (handlers_0 = new Window$WindowHandlers) , handlers_0), type_0, handler);
}

function addResizeHandler(handler){
  maybeInitializeCloseHandlers();
  maybeInitializeResizeHandlers();
  return addHandler((!TYPE_2 && (TYPE_2 = new GwtEvent$Type) , TYPE_2), handler);
}

function maybeInitializeCloseHandlers(){
  if (!closeHandlersInitialized) {
    $initHandler('function __gwt_initWindowCloseHandler(beforeunload, unload) {\n  var wnd = window\n  , oldOnBeforeUnload = wnd.onbeforeunload\n  , oldOnUnload = wnd.onunload;\n  \n  wnd.onbeforeunload = function(evt) {\n    var ret, oldRet;\n    try {\n      ret = beforeunload();\n    } finally {\n      oldRet = oldOnBeforeUnload && oldOnBeforeUnload(evt);\n    }\n    // Avoid returning null as IE6 will coerce it into a string.\n    // Ensure that "" gets returned properly.\n    if (ret != null) {\n      return ret;\n    }\n    if (oldRet != null) {\n      return oldRet;\n    }\n    // returns undefined.\n  };\n  \n  wnd.onunload = function(evt) {\n    try {\n      unload();\n    } finally {\n      oldOnUnload && oldOnUnload(evt);\n      wnd.onresize = null;\n      wnd.onscroll = null;\n      wnd.onbeforeunload = null;\n      wnd.onunload = null;\n    }\n  };\n  \n  // Remove the reference once we\'ve initialize the handler\n  wnd.__gwt_initWindowCloseHandler = undefined;\n}\n', new WindowImplIE$1);
    closeHandlersInitialized = true;
  }
}

function maybeInitializeResizeHandlers(){
  if (!resizeHandlersInitialized) {
    $initHandler("function __gwt_initWindowResizeHandler(resize) {\n  var wnd = window, oldOnResize = wnd.onresize;\n  \n  wnd.onresize = function(evt) {\n    try {\n      resize();\n    } finally {\n      oldOnResize && oldOnResize(evt);\n    }\n  };\n  \n  // Remove the reference once we've initialize the handler\n  wnd.__gwt_initWindowResizeHandler = undefined;\n}\n", new WindowImplIE$2);
    resizeHandlersInitialized = true;
  }
}

function onClosed(){
  closeHandlersInitialized && fire_0((!handlers_0 && (handlers_0 = new Window$WindowHandlers) , handlers_0));
}

function onClosing(){
  var event_0;
  if (closeHandlersInitialized) {
    event_0 = new Window$ClosingEvent;
    !!handlers_0 && $fireEvent_0(handlers_0, event_0);
    return null;
  }
  return null;
}

function onResize(){
  var height, width_0;
  if (resizeHandlersInitialized) {
    width_0 = $getClientWidth($doc);
    height = $getClientHeight($doc);
    if (lastResizeWidth != width_0 || lastResizeHeight != height) {
      lastResizeWidth = width_0;
      lastResizeHeight = height;
      fire_1((!handlers_0 && (handlers_0 = new Window$WindowHandlers) , handlers_0), width_0);
    }
  }
}

var closeHandlersInitialized = false, handlers_0, lastResizeHeight = 0, lastResizeWidth = 0, resizeHandlersInitialized = false;
function $clinit_Window$ClosingEvent(){
  $clinit_Window$ClosingEvent = emptyMethod;
  TYPE_3 = new GwtEvent$Type;
}

function Window$ClosingEvent(){
  $clinit_Window$ClosingEvent();
}

defineClass(157, 283, {}, Window$ClosingEvent);
_.dispatch = function dispatch_3(handler){
  throwClassCastExceptionUnlessNull(handler);
  null.nullMethod();
}
;
_.getAssociatedType = function getAssociatedType_4(){
  return TYPE_3;
}
;
var TYPE_3;
var Lcom_google_gwt_user_client_Window$ClosingEvent_2_classLit = createForClass('com.google.gwt.user.client', 'Window/ClosingEvent', 157);
function Window$WindowHandlers(){
  HandlerManager.call(this, null);
}

defineClass(98, 97, {21:1}, Window$WindowHandlers);
var Lcom_google_gwt_user_client_Window$WindowHandlers_2_classLit = createForClass('com.google.gwt.user.client', 'Window/WindowHandlers', 98);
function $eventGetTypeInt(eventType){
  switch (eventType) {
    case 'blur':
      return 4096;
    case 'change':
      return 1024;
    case 'click':
      return 1;
    case 'dblclick':
      return 2;
    case 'focus':
      return 2048;
    case 'keydown':
      return 128;
    case 'keypress':
      return 256;
    case 'keyup':
      return 512;
    case 'load':
      return $intern_15;
    case 'losecapture':
      return 8192;
    case 'mousedown':
      return 4;
    case 'mousemove':
      return 64;
    case 'mouseout':
      return 32;
    case 'mouseover':
      return 16;
    case 'mouseup':
      return 8;
    case 'scroll':
      return 16384;
    case 'error':
      return 65536;
    case 'DOMMouseScroll':
    case 'mousewheel':
      return 131072;
    case 'contextmenu':
      return 262144;
    case 'paste':
      return $intern_14;
    case 'touchstart':
      return 1048576;
    case 'touchmove':
      return 2097152;
    case 'touchend':
      return 4194304;
    case 'touchcancel':
      return 8388608;
    case 'gesturestart':
      return 16777216;
    case 'gesturechange':
      return 33554432;
    case 'gestureend':
      return 67108864;
    default:return -1;
  }
}

function $getEventsSunk(elem){
  return elem.__eventBits || 0;
}

function $maybeInitializeEventSystem(){
  if (!eventSystemIsInitialized) {
    $initEventSystem();
    eventSystemIsInitialized = true;
  }
}

function getEventListener_0(elem){
  var maybeListener = elem.__listener;
  return !instanceOfJso(maybeListener) && instanceOf(maybeListener, 24)?maybeListener:null;
}

function setEventListener(elem, listener){
  elem.__listener = listener;
}

var eventSystemIsInitialized = false;
function $initEventSystem(){
  $wnd.__gwt_globalEventArray == null && ($wnd.__gwt_globalEventArray = new Array);
  $wnd.__gwt_globalEventArray[$wnd.__gwt_globalEventArray.length] = $entry(function(){
    return previewEvent($wnd.event);
  }
  );
  var dispatchEvent_0 = $entry(function(){
    var oldEventTarget = currentEventTarget;
    currentEventTarget = this;
    if ($wnd.event.returnValue == null) {
      $wnd.event.returnValue = true;
      if (!previewEventImpl()) {
        currentEventTarget = oldEventTarget;
        return;
      }
    }
    var getEventListener = getEventListener_0;
    var listener, curElem = this;
    while (curElem && !(listener = getEventListener(curElem))) {
      curElem = curElem.parentElement;
    }
    listener && dispatchEvent_1($wnd.event, curElem, listener);
    currentEventTarget = oldEventTarget;
  }
  );
  var dispatchDblClickEvent = $entry(function(){
    var newEvent = $doc.createEventObject();
    $wnd.event.returnValue == null && $wnd.event.srcElement.fireEvent && $wnd.event.srcElement.fireEvent('onclick', newEvent);
    if (this.__eventBits & 2) {
      dispatchEvent_0.call(this);
    }
     else if ($wnd.event.returnValue == null) {
      $wnd.event.returnValue = true;
      previewEventImpl();
    }
  }
  );
  var dispatchUnhandledEvent = $entry(function(){
    this.__gwtLastUnhandledEvent = $wnd.event.type;
    dispatchEvent_0.call(this);
  }
  );
  var moduleName = $moduleName.replace(/\./g, '_');
  $wnd['__gwt_dispatchEvent_' + moduleName] = dispatchEvent_0;
  callDispatchEvent = (new Function('w', 'return function() { w.__gwt_dispatchEvent_' + moduleName + '.call(this) }'))($wnd);
  $wnd['__gwt_dispatchDblClickEvent_' + moduleName] = dispatchDblClickEvent;
  callDispatchDblClickEvent = (new Function('w', 'return function() { w.__gwt_dispatchDblClickEvent_' + moduleName + '.call(this)}'))($wnd);
  $wnd['__gwt_dispatchUnhandledEvent_' + moduleName] = dispatchUnhandledEvent;
  callDispatchUnhandledEvent = (new Function('w', 'return function() { w.__gwt_dispatchUnhandledEvent_' + moduleName + '.call(this)}'))($wnd);
  callDispatchOnLoadEvent = (new Function('w', 'return function() { w.__gwt_dispatchUnhandledEvent_' + moduleName + '.call(w.event.srcElement)}'))($wnd);
  var bodyDispatcher = $entry(function(){
    dispatchEvent_0.call($doc.body);
  }
  );
  var bodyDblClickDispatcher = $entry(function(){
    dispatchDblClickEvent.call($doc.body);
  }
  );
  $doc.body.attachEvent('onclick', bodyDispatcher);
  $doc.body.attachEvent('onmousedown', bodyDispatcher);
  $doc.body.attachEvent('onmouseup', bodyDispatcher);
  $doc.body.attachEvent('onmousemove', bodyDispatcher);
  $doc.body.attachEvent('onmousewheel', bodyDispatcher);
  $doc.body.attachEvent('onkeydown', bodyDispatcher);
  $doc.body.attachEvent('onkeypress', bodyDispatcher);
  $doc.body.attachEvent('onkeyup', bodyDispatcher);
  $doc.body.attachEvent('onfocus', bodyDispatcher);
  $doc.body.attachEvent('onblur', bodyDispatcher);
  $doc.body.attachEvent('ondblclick', bodyDblClickDispatcher);
  $doc.body.attachEvent('oncontextmenu', bodyDispatcher);
}

function $sinkEvents_0(elem, bits){
  $maybeInitializeEventSystem();
  $sinkEventsImpl(elem, bits);
}

function $sinkEventsImpl(elem, bits){
  var chMask = (elem.__eventBits || 0) ^ bits;
  elem.__eventBits = bits;
  if (!chMask)
    return;
  chMask & 1 && (elem.onclick = bits & 1?callDispatchEvent:null);
  chMask & 3 && (elem.ondblclick = bits & 3?callDispatchDblClickEvent:null);
  chMask & 4 && (elem.onmousedown = bits & 4?callDispatchEvent:null);
  chMask & 8 && (elem.onmouseup = bits & 8?callDispatchEvent:null);
  chMask & 16 && (elem.onmouseover = bits & 16?callDispatchEvent:null);
  chMask & 32 && (elem.onmouseout = bits & 32?callDispatchEvent:null);
  chMask & 64 && (elem.onmousemove = bits & 64?callDispatchEvent:null);
  chMask & 128 && (elem.onkeydown = bits & 128?callDispatchEvent:null);
  chMask & 256 && (elem.onkeypress = bits & 256?callDispatchEvent:null);
  chMask & 512 && (elem.onkeyup = bits & 512?callDispatchEvent:null);
  chMask & 1024 && (elem.onchange = bits & 1024?callDispatchEvent:null);
  chMask & 2048 && (elem.onfocus = bits & 2048?callDispatchEvent:null);
  chMask & 4096 && (elem.onblur = bits & 4096?callDispatchEvent:null);
  chMask & 8192 && (elem.onlosecapture = bits & 8192?callDispatchEvent:null);
  chMask & 16384 && (elem.onscroll = bits & 16384?callDispatchEvent:null);
  chMask & $intern_15 && (elem.nodeName == 'IFRAME'?bits & $intern_15?elem.attachEvent('onload', callDispatchOnLoadEvent):elem.detachEvent('onload', callDispatchOnLoadEvent):(elem.onload = bits & $intern_15?callDispatchUnhandledEvent:null));
  chMask & 65536 && (elem.onerror = bits & 65536?callDispatchEvent:null);
  chMask & 131072 && (elem.onmousewheel = bits & 131072?callDispatchEvent:null);
  chMask & 262144 && (elem.oncontextmenu = bits & 262144?callDispatchEvent:null);
  chMask & $intern_14 && (elem.onpaste = bits & $intern_14?callDispatchEvent:null);
}

function previewEventImpl(){
  var isCancelled = false;
  for (var i = 0; i < $wnd.__gwt_globalEventArray.length; i++) {
    !$wnd.__gwt_globalEventArray[i]() && (isCancelled = true);
  }
  return !isCancelled;
}

var callDispatchDblClickEvent, callDispatchEvent, callDispatchOnLoadEvent, callDispatchUnhandledEvent;
function $initHandler(initFunc, cmd){
  var scriptElem;
  scriptElem = $createScriptElement($doc, initFunc);
  $appendChild($doc.body, scriptElem);
  cmd.execute_0();
  $removeChild($doc.body, scriptElem);
}

function WindowImplIE$1(){
}

defineClass(169, 1, {}, WindowImplIE$1);
_.execute_0 = function execute_2(){
  $wnd.__gwt_initWindowCloseHandler($entry(onClosing), $entry(onClosed));
}
;
var Lcom_google_gwt_user_client_impl_WindowImplIE$1_2_classLit = createForClass('com.google.gwt.user.client.impl', 'WindowImplIE/1', 169);
function WindowImplIE$2(){
}

defineClass(170, 1, {}, WindowImplIE$2);
_.execute_0 = function execute_3(){
  $wnd.__gwt_initWindowResizeHandler($entry(onResize));
}
;
var Lcom_google_gwt_user_client_impl_WindowImplIE$2_2_classLit = createForClass('com.google.gwt.user.client.impl', 'WindowImplIE/2', 170);
function $add_1(this$static, w){
  $add(this$static, w, this$static.element);
}

function changeToStaticPositioning(elem){
  $setPropertyImpl(elem.style, 'left', '');
  $setPropertyImpl(elem.style, 'top', '');
  $setPropertyImpl(elem.style, 'position', '');
}

defineClass(176, 35, $intern_16);
_.remove = function remove_1(w){
  var removed;
  removed = $remove(this, w);
  removed && changeToStaticPositioning(w.element);
  return removed;
}
;
var Lcom_google_gwt_user_client_ui_AbsolutePanel_2_classLit = createForClass('com.google.gwt.user.client.ui', 'AbsolutePanel', 176);
function $clinit_AttachDetachException(){
  $clinit_AttachDetachException = emptyMethod;
  attachCommand = new AttachDetachException$1;
  detachCommand = new AttachDetachException$2;
}

function AttachDetachException(causes){
  UmbrellaException_0.call(this, causes);
}

function tryCommand(hasWidgets, c){
  $clinit_AttachDetachException();
  var caught, e, w, w$iterator;
  caught = null;
  for (w$iterator = hasWidgets.iterator(); w$iterator.hasNext();) {
    w = dynamicCast(w$iterator.next(), 19);
    try {
      c.execute_1(w);
    }
     catch ($e0) {
      $e0 = wrap($e0);
      if (instanceOf($e0, 13)) {
        e = $e0;
        !caught && (caught = new HashSet);
        $add_5(caught, e);
      }
       else 
        throw unwrap($e0);
    }
  }
  if (caught) {
    throw new AttachDetachException(caught);
  }
}

defineClass(153, 111, $intern_13, AttachDetachException);
var attachCommand, detachCommand;
var Lcom_google_gwt_user_client_ui_AttachDetachException_2_classLit = createForClass('com.google.gwt.user.client.ui', 'AttachDetachException', 153);
function AttachDetachException$1(){
}

defineClass(154, 1, {}, AttachDetachException$1);
_.execute_1 = function execute_4(w){
  w.onAttach();
}
;
var Lcom_google_gwt_user_client_ui_AttachDetachException$1_2_classLit = createForClass('com.google.gwt.user.client.ui', 'AttachDetachException/1', 154);
function AttachDetachException$2(){
}

defineClass(155, 1, {}, AttachDetachException$2);
_.execute_1 = function execute_5(w){
  w.onDetach();
}
;
var Lcom_google_gwt_user_client_ui_AttachDetachException$2_2_classLit = createForClass('com.google.gwt.user.client.ui', 'AttachDetachException/2', 155);
function ButtonBase(elem){
  FocusWidget.call(this, elem);
}

defineClass(192, 112, $intern_0);
var Lcom_google_gwt_user_client_ui_ButtonBase_2_classLit = createForClass('com.google.gwt.user.client.ui', 'ButtonBase', 192);
function Button(html){
  ButtonBase.call(this, $doc.createElement("<BUTTON type='button'><\/BUTTON>"));
  $setClassName(this.element, 'gwt-Button');
  $setInnerHTML(this.element, html);
}

defineClass(60, 192, $intern_0, Button);
var Lcom_google_gwt_user_client_ui_Button_2_classLit = createForClass('com.google.gwt.user.client.ui', 'Button', 60);
function $checkInit(this$static){
  if (!this$static.widget) {
    throw new IllegalStateException('initWidget() is not called yet');
  }
}

function $initWidget(this$static, widget){
  var elem;
  if (this$static.widget) {
    throw new IllegalStateException('Composite.initWidget() may only be called once.');
  }
  $removeFromParent(widget);
  elem = widget.element;
  this$static.element = elem;
  ($clinit_PotentialElement() , isPotential(elem)) && $setResolver(elem, this$static);
  this$static.widget = widget;
  $setParent(widget, this$static);
}

defineClass(285, 19, $intern_0);
_.isAttached = function isAttached_0(){
  if (this.widget) {
    return this.widget.attached;
  }
  return false;
}
;
_.onAttach = function onAttach_1(){
  $checkInit(this);
  if (this.eventsToSink != -1) {
    $sinkEvents(this.widget, this.eventsToSink);
    this.eventsToSink = -1;
  }
  $onAttach(this.widget);
  setEventListener(this.element, this);
}
;
_.onBrowserEvent = function onBrowserEvent_0(event_0){
  $onBrowserEvent(this, event_0);
  $onBrowserEvent(this.widget, event_0);
}
;
_.onDetach = function onDetach_0(){
  $onDetach(this.widget);
}
;
_.resolvePotentialElement = function resolvePotentialElement_0(){
  $setElement(this, $resolvePotentialElement());
  return this.element;
}
;
var Lcom_google_gwt_user_client_ui_Composite_2_classLit = createForClass('com.google.gwt.user.client.ui', 'Composite', 285);
function $setTextOrHtml(this$static, content_0){
  $setInnerText(this$static.element, content_0);
  if (this$static.textDir != this$static.initialElementDir) {
    this$static.textDir = this$static.initialElementDir;
    setDirectionOnElement(this$static.element, this$static.initialElementDir);
  }
}

function DirectionalTextHelper(element){
  this.element = element;
  this.initialElementDir = getDirectionOnElement(element);
  this.textDir = this.initialElementDir;
}

defineClass(193, 1, {}, DirectionalTextHelper);
var Lcom_google_gwt_user_client_ui_DirectionalTextHelper_2_classLit = createForClass('com.google.gwt.user.client.ui', 'DirectionalTextHelper', 193);
function FlowPanel(){
  ComplexPanel.call(this);
  $setElement(this, $createElement($doc, 'div'));
}

defineClass(115, 35, $intern_16, FlowPanel);
var Lcom_google_gwt_user_client_ui_FlowPanel_2_classLit = createForClass('com.google.gwt.user.client.ui', 'FlowPanel', 115);
function $clinit_HasAutoHorizontalAlignment(){
  $clinit_HasAutoHorizontalAlignment = emptyMethod;
  ALIGN_CONTENT_START = new HasHorizontalAlignment$AutoHorizontalAlignmentConstant;
}

var ALIGN_CONTENT_START;
function $clinit_HasHorizontalAlignment(){
  $clinit_HasHorizontalAlignment = emptyMethod;
  ALIGN_CENTER = new HasHorizontalAlignment$HorizontalAlignmentConstant(($clinit_Style$TextAlign() , 'center'));
  ALIGN_JUSTIFY = new HasHorizontalAlignment$HorizontalAlignmentConstant('justify');
  ALIGN_LEFT = new HasHorizontalAlignment$HorizontalAlignmentConstant('left');
  ALIGN_RIGHT = new HasHorizontalAlignment$HorizontalAlignmentConstant('right');
  ALIGN_LOCALE_START = ALIGN_LEFT;
  ALIGN_LOCALE_END = ALIGN_RIGHT;
  ALIGN_DEFAULT = ALIGN_LOCALE_START;
}

var ALIGN_CENTER, ALIGN_DEFAULT, ALIGN_JUSTIFY, ALIGN_LEFT, ALIGN_LOCALE_END, ALIGN_LOCALE_START, ALIGN_RIGHT;
function HasHorizontalAlignment$AutoHorizontalAlignmentConstant(){
}

defineClass(156, 1, {}, HasHorizontalAlignment$AutoHorizontalAlignmentConstant);
var Lcom_google_gwt_user_client_ui_HasHorizontalAlignment$AutoHorizontalAlignmentConstant_2_classLit = createForClass('com.google.gwt.user.client.ui', 'HasHorizontalAlignment/AutoHorizontalAlignmentConstant', 156);
function HasHorizontalAlignment$HorizontalAlignmentConstant(textAlignString){
  this.textAlignString = textAlignString;
}

function endOf(direction){
  return direction == ($clinit_HasDirection$Direction() , LTR)?($clinit_HasHorizontalAlignment() , ALIGN_RIGHT):direction == RTL?($clinit_HasHorizontalAlignment() , ALIGN_LEFT):($clinit_HasHorizontalAlignment() , ALIGN_LOCALE_END);
}

function startOf(direction){
  return direction == ($clinit_HasDirection$Direction() , LTR)?($clinit_HasHorizontalAlignment() , ALIGN_LEFT):direction == RTL?($clinit_HasHorizontalAlignment() , ALIGN_RIGHT):($clinit_HasHorizontalAlignment() , ALIGN_LOCALE_START);
}

defineClass(84, 156, {}, HasHorizontalAlignment$HorizontalAlignmentConstant);
var Lcom_google_gwt_user_client_ui_HasHorizontalAlignment$HorizontalAlignmentConstant_2_classLit = createForClass('com.google.gwt.user.client.ui', 'HasHorizontalAlignment/HorizontalAlignmentConstant', 84);
function $clinit_HasVerticalAlignment(){
  $clinit_HasVerticalAlignment = emptyMethod;
  new HasVerticalAlignment$VerticalAlignmentConstant('bottom');
  ALIGN_MIDDLE = new HasVerticalAlignment$VerticalAlignmentConstant('middle');
  ALIGN_TOP = new HasVerticalAlignment$VerticalAlignmentConstant('top');
}

var ALIGN_MIDDLE, ALIGN_TOP;
function HasVerticalAlignment$VerticalAlignmentConstant(verticalAlignString){
  this.verticalAlignString = verticalAlignString;
}

defineClass(96, 1, {}, HasVerticalAlignment$VerticalAlignmentConstant);
var Lcom_google_gwt_user_client_ui_HasVerticalAlignment$VerticalAlignmentConstant_2_classLit = createForClass('com.google.gwt.user.client.ui', 'HasVerticalAlignment/VerticalAlignmentConstant', 96);
function $clinit_Image(){
  $clinit_Image = emptyMethod;
  new HashMap;
}

function $changeState(this$static, newState){
  this$static.state = newState;
}

function Image_0(url_0){
  $changeState(this, new Image$UnclippedState(this, url_0));
  $setClassName(this.element, 'gwt-Image');
}

function Image_1(url_0){
  $clinit_Image();
  Image_0.call(this, ($clinit_UriUtils() , new SafeUriString(url_0)));
}

defineClass(15, 19, $intern_0, Image_1);
_.onBrowserEvent = function onBrowserEvent_1(event_0){
  $eventGetTypeInt(event_0.type) == $intern_15 && !!this.state && $setPropertyString(this.element, '__gwtLastUnhandledEvent', '');
  $onBrowserEvent(this, event_0);
}
;
_.onLoad = function onLoad_0(){
  $onLoad(this.state, this);
}
;
var Lcom_google_gwt_user_client_ui_Image_2_classLit = createForClass('com.google.gwt.user.client.ui', 'Image', 15);
function $onLoad(this$static, image){
  var unhandledEvent;
  unhandledEvent = $getPropertyString(image.element, '__gwtLastUnhandledEvent');
  $equals('load', unhandledEvent) && (this$static.syntheticEventCommand = new Image$State$1(this$static, image) , $scheduleDeferred(($clinit_SchedulerImpl() , INSTANCE), this$static.syntheticEventCommand));
}

defineClass(199, 1, {});
_.syntheticEventCommand = null;
var Lcom_google_gwt_user_client_ui_Image$State_2_classLit = createForClass('com.google.gwt.user.client.ui', 'Image/State', 199);
function Image$State$1(this$1, val$image){
  this.this$11 = this$1;
  this.val$image2 = val$image;
}

defineClass(200, 1, {}, Image$State$1);
_.execute_0 = function execute_6(){
  var evt, evt_0;
  if (this.val$image2.state != this.this$11 || this != this.this$11.syntheticEventCommand) {
    return;
  }
  this.this$11.syntheticEventCommand = null;
  if (!this.val$image2.attached) {
    $setPropertyString(this.val$image2.element, '__gwtLastUnhandledEvent', 'load');
    return;
  }
  evt = (evt_0 = $doc.createEventObject() , evt_0.type = 'load' , evt_0);
  $dispatchEvent(this.val$image2.element, evt);
}
;
var Lcom_google_gwt_user_client_ui_Image$State$1_2_classLit = createForClass('com.google.gwt.user.client.ui', 'Image/State/1', 200);
function Image$UnclippedState(image, url_0){
  $replaceElement(image, $createElement($doc, 'img'));
  sinkEvents_0(image.element);
  image.eventsToSink == -1?sinkEvents(image.element, 133398655 | $getEventsSunk(image.element)):(image.eventsToSink |= 133398655);
  !!image.state && $setPropertyString(image.element, '__gwtLastUnhandledEvent', '');
  $setSrc(image.element, url_0.uri_0);
}

defineClass(121, 199, {}, Image$UnclippedState);
var Lcom_google_gwt_user_client_ui_Image$UnclippedState_2_classLit = createForClass('com.google.gwt.user.client.ui', 'Image/UnclippedState', 121);
function $setAutoHorizontalAlignment(this$static, autoAlignment){
  this$static.autoHorizontalAlignment = autoAlignment;
  $updateHorizontalAlignment(this$static);
}

function $updateHorizontalAlignment(this$static){
  var align_0;
  !this$static.autoHorizontalAlignment?(align_0 = null):this$static.autoHorizontalAlignment?(align_0 = this$static.autoHorizontalAlignment):(align_0 = this$static.autoHorizontalAlignment == ($clinit_HasAutoHorizontalAlignment() , ALIGN_CONTENT_START)?startOf(this$static.directionalTextHelper.textDir):endOf(this$static.directionalTextHelper.textDir));
  if (align_0 != this$static.horzAlign) {
    this$static.horzAlign = align_0;
    this$static.element.style['textAlign'] = !this$static.horzAlign?'':this$static.horzAlign.textAlignString;
  }
}

function LabelBase(element){
  $setElement(this, element);
  this.directionalTextHelper = new DirectionalTextHelper(this.element);
}

defineClass(118, 19, $intern_17);
var Lcom_google_gwt_user_client_ui_LabelBase_2_classLit = createForClass('com.google.gwt.user.client.ui', 'LabelBase', 118);
function $setText(this$static, text_0){
  $setTextOrHtml(this$static.directionalTextHelper, text_0);
  $updateHorizontalAlignment(this$static);
}

function Label(text_0){
  LabelBase.call(this, $createElement($doc, 'div'));
  $setClassName(this.element, 'gwt-Label');
  $setTextOrHtml(this.directionalTextHelper, text_0);
  $updateHorizontalAlignment(this);
}

defineClass(16, 118, $intern_17, Label);
var Lcom_google_gwt_user_client_ui_Label_2_classLit = createForClass('com.google.gwt.user.client.ui', 'Label', 16);
function $checkIndex(this$static, index_0){
  if (index_0 < 0 || index_0 >= this$static.element.options.length) {
    throw new IndexOutOfBoundsException;
  }
}

function $getOptionText(option){
  var text_0, node;
  text_0 = option.text;
  (node = option.getAttributeNode('bidiwrapped') , !!(node && node.specified)) && text_0.length > 1 && (text_0 = $substring_0(text_0, 1, text_0.length - 1));
  return text_0;
}

function $getSelectedItemText(this$static){
  var index_0;
  index_0 = this$static.element.selectedIndex;
  return index_0 == -1?null:($checkIndex(this$static, index_0) , $getOptionText(this$static.element.options[index_0]));
}

function $insertItem(this$static, item_0){
  $insertItem_0(this$static, item_0, item_0, -1);
}

function $insertItem_0(this$static, item_0, value_0, index_0){
  var before, itemCount, option, select;
  select = this$static.element;
  option = $createElement($doc, 'option');
  option.text = item_0;
  option.removeAttribute('bidiwrapped');
  option.value = value_0;
  itemCount = select.options.length;
  (index_0 < 0 || index_0 > itemCount) && (index_0 = itemCount);
  if (index_0 == itemCount) {
    $selectAdd(select, option, null);
  }
   else {
    before = select.options[index_0];
    $selectAdd(select, option, before);
  }
}

function ListBox(){
  FocusWidget.call(this, $createElement($doc, 'select'));
  $setClassName(this.element, 'gwt-ListBox');
}

defineClass(130, 112, $intern_0, ListBox);
var Lcom_google_gwt_user_client_ui_ListBox_2_classLit = createForClass('com.google.gwt.user.client.ui', 'ListBox', 130);
function $clinit_PotentialElement(){
  $clinit_PotentialElement = emptyMethod;
  declareShim();
}

function $setResolver(this$static, resolver){
  $clinit_PotentialElement();
  this$static.__gwt_resolve = buildResolveCallback(resolver);
}

function buildResolveCallback(resolver){
  return function(){
    this.__gwt_resolve = cannotResolveTwice;
    return resolver.resolvePotentialElement();
  }
  ;
}

function cannotResolveTwice(){
  throw 'A PotentialElement cannot be resolved twice.';
}

function declareShim(){
  var shim = function(){
  }
  ;
  shim.prototype = {className:'', clientHeight:0, clientWidth:0, dir:'', getAttribute:function(name_0, value_0){
    return this[name_0];
  }
  , href:'', id:'', lang:'', nodeType:1, removeAttribute:function(name_0, value_0){
    this[name_0] = undefined;
  }
  , setAttribute:function(name_0, value_0){
    this[name_0] = value_0;
  }
  , src:'', style:{}, title:''};
  $wnd.GwtPotentialElementShim = shim;
}

function $clinit_RootPanel(){
  $clinit_RootPanel = emptyMethod;
  maybeDetachCommand = new RootPanel$1;
  rootPanels = new HashMap;
  widgetsToDetach = new HashSet;
}

function RootPanel(elem){
  ComplexPanel.call(this);
  this.element = elem;
  $onAttach(this);
}

function detachNow(widget){
  $clinit_RootPanel();
  try {
    widget.onDetach();
  }
   finally {
    $remove_4(widgetsToDetach, widget);
  }
}

function detachWidgets(){
  $clinit_RootPanel();
  try {
    tryCommand(widgetsToDetach, maybeDetachCommand);
  }
   finally {
    $reset_1(widgetsToDetach.map_0);
    $reset_1(rootPanels);
  }
}

function get_0(){
  $clinit_RootPanel();
  var rp;
  rp = dynamicCast($get_0(rootPanels, null), 87);
  if (rp) {
    return rp;
  }
  rootPanels.size_0 == 0 && addCloseHandler(new RootPanel$2);
  rp = new RootPanel$DefaultRootPanel;
  $put_0(rootPanels, null, rp);
  $add_5(widgetsToDetach, rp);
  return rp;
}

defineClass(87, 176, $intern_18);
var maybeDetachCommand, rootPanels, widgetsToDetach;
var Lcom_google_gwt_user_client_ui_RootPanel_2_classLit = createForClass('com.google.gwt.user.client.ui', 'RootPanel', 87);
function RootPanel$1(){
}

defineClass(178, 1, {}, RootPanel$1);
_.execute_1 = function execute_7(w){
  w.isAttached() && w.onDetach();
}
;
var Lcom_google_gwt_user_client_ui_RootPanel$1_2_classLit = createForClass('com.google.gwt.user.client.ui', 'RootPanel/1', 178);
function RootPanel$2(){
}

defineClass(179, 1, {293:1, 55:1}, RootPanel$2);
var Lcom_google_gwt_user_client_ui_RootPanel$2_2_classLit = createForClass('com.google.gwt.user.client.ui', 'RootPanel/2', 179);
function RootPanel$DefaultRootPanel(){
  RootPanel.call(this, $doc.body);
}

defineClass(177, 87, $intern_18, RootPanel$DefaultRootPanel);
var Lcom_google_gwt_user_client_ui_RootPanel$DefaultRootPanel_2_classLit = createForClass('com.google.gwt.user.client.ui', 'RootPanel/DefaultRootPanel', 177);
function $add_2(this$static, w){
  var td, tr, td_0;
  tr = $createElement($doc, 'tr');
  td = (td_0 = $createElement($doc, 'td') , $setPropertyString(td_0, 'align', this$static.horzAlign.textAlignString) , $setCellVerticalAlignment(td_0, this$static.vertAlign) , td_0);
  $appendChild(tr, resolve(td));
  $appendChild(this$static.body_0, resolve(tr));
  $add(this$static, w, td);
}

function $remove_0(this$static, w){
  var removed, td;
  td = $getParentElement(w.element);
  removed = $remove(this$static, w);
  removed && $removeChild(this$static.body_0, $getParentElement(td));
  return removed;
}

function $setHorizontalAlignment_0(this$static, align_0){
  this$static.horzAlign = align_0;
}

function $setVerticalAlignment_0(this$static, align_0){
  this$static.vertAlign = align_0;
}

function VerticalPanel(){
  CellPanel.call(this);
  this.horzAlign = ($clinit_HasHorizontalAlignment() , ALIGN_DEFAULT);
  this.vertAlign = ($clinit_HasVerticalAlignment() , ALIGN_TOP);
  $setPropertyString(this.table, 'cellSpacing', '0');
  $setPropertyString(this.table, 'cellPadding', '0');
}

defineClass(44, 57, {25:1, 21:1, 24:1, 57:1, 35:1, 122:1, 92:1, 123:1, 23:1, 41:1, 49:1, 53:1, 54:1, 67:1, 68:1, 26:1, 40:1, 20:1, 19:1, 22:1}, VerticalPanel);
_.remove = function remove_2(w){
  return $remove_0(this, w);
}
;
var Lcom_google_gwt_user_client_ui_VerticalPanel_2_classLit = createForClass('com.google.gwt.user.client.ui', 'VerticalPanel', 44);
function $add_3(this$static, w){
  $insert(this$static, w, this$static.size_0);
}

function $indexOf(this$static, w){
  var i;
  for (i = 0; i < this$static.size_0; ++i) {
    if (this$static.array[i] == w) {
      return i;
    }
  }
  return -1;
}

function $insert(this$static, w, beforeIndex){
  var i, i0, newArray;
  if (beforeIndex < 0 || beforeIndex > this$static.size_0) {
    throw new IndexOutOfBoundsException;
  }
  if (this$static.size_0 == this$static.array.length) {
    newArray = initDim(Lcom_google_gwt_user_client_ui_Widget_2_classLit, $intern_7, 19, this$static.array.length * 2, 0, 1);
    for (i0 = 0; i0 < this$static.array.length; ++i0) {
      setCheck(newArray, i0, this$static.array[i0]);
    }
    this$static.array = newArray;
  }
  ++this$static.size_0;
  for (i = this$static.size_0 - 1; i > beforeIndex; --i) {
    setCheck(this$static.array, i, this$static.array[i - 1]);
  }
  setCheck(this$static.array, beforeIndex, w);
}

function $remove_1(this$static, index_0){
  var i;
  if (index_0 < 0 || index_0 >= this$static.size_0) {
    throw new IndexOutOfBoundsException;
  }
  --this$static.size_0;
  for (i = index_0; i < this$static.size_0; ++i) {
    setCheck(this$static.array, i, this$static.array[i + 1]);
  }
  setCheck(this$static.array, this$static.size_0, null);
}

function $remove_2(this$static, w){
  var index_0;
  index_0 = $indexOf(this$static, w);
  if (index_0 == -1) {
    throw new NoSuchElementException;
  }
  $remove_1(this$static, index_0);
}

function WidgetCollection(){
  this.array = initDim(Lcom_google_gwt_user_client_ui_Widget_2_classLit, $intern_7, 19, 4, 0, 1);
}

defineClass(191, 1, {22:1}, WidgetCollection);
_.iterator = function iterator_1(){
  return new WidgetCollection$WidgetIterator(this);
}
;
_.size_0 = 0;
var Lcom_google_gwt_user_client_ui_WidgetCollection_2_classLit = createForClass('com.google.gwt.user.client.ui', 'WidgetCollection', 191);
function $next(this$static){
  if (this$static.index_0 >= this$static.this$01.size_0) {
    throw new NoSuchElementException;
  }
  this$static.currentWidget = this$static.this$01.array[this$static.index_0];
  ++this$static.index_0;
  return this$static.currentWidget;
}

function WidgetCollection$WidgetIterator(this$0){
  this.this$01 = this$0;
}

defineClass(119, 1, {}, WidgetCollection$WidgetIterator);
_.hasNext = function hasNext(){
  return this.index_0 < this.this$01.size_0;
}
;
_.next = function next(){
  return $next(this);
}
;
_.index_0 = 0;
var Lcom_google_gwt_user_client_ui_WidgetCollection$WidgetIterator_2_classLit = createForClass('com.google.gwt.user.client.ui', 'WidgetCollection/WidgetIterator', 119);
function assertCompileTimeUserAgent(){
  var runtimeValue;
  runtimeValue = $getRuntimeValue();
  if (!$equals('ie8', runtimeValue)) {
    throw new UserAgentAsserter$UserAgentAssertionError(runtimeValue);
  }
}

function Error_1(message){
  Throwable.call(this, message);
}

defineClass(93, 13, $intern_10);
var Ljava_lang_Error_2_classLit = createForClass('java.lang', 'Error', 93);
defineClass(31, 93, $intern_10);
var Ljava_lang_AssertionError_2_classLit = createForClass('java.lang', 'AssertionError', 31);
function UserAgentAsserter$UserAgentAssertionError(runtimeValue){
  Error_1.call(this, '' + ('Possible problem with your *.gwt.xml module file.\nThe compile time user.agent value (ie8) does not match the runtime user.agent value (' + runtimeValue + ').\n' + 'Expect more errors.'), instanceOf('Possible problem with your *.gwt.xml module file.\nThe compile time user.agent value (ie8) does not match the runtime user.agent value (' + runtimeValue + ').\n' + 'Expect more errors.', 13)?dynamicCast('Possible problem with your *.gwt.xml module file.\nThe compile time user.agent value (ie8) does not match the runtime user.agent value (' + runtimeValue + ').\n' + 'Expect more errors.', 13):null);
}

defineClass(141, 31, $intern_10, UserAgentAsserter$UserAgentAssertionError);
var Lcom_google_gwt_useragent_client_UserAgentAsserter$UserAgentAssertionError_2_classLit = createForClass('com.google.gwt.useragent.client', 'UserAgentAsserter/UserAgentAssertionError', 141);
function $getRuntimeValue(){
  var ua = navigator.userAgent.toLowerCase();
  var docMode = $doc.documentMode;
  if (function(){
    return ua.indexOf('webkit') != -1;
  }
  ())
    return 'safari';
  if (function(){
    return ua.indexOf('msie') != -1 && docMode >= 10 && docMode < 11;
  }
  ())
    return 'ie10';
  if (function(){
    return ua.indexOf('msie') != -1 && docMode >= 9 && docMode < 11;
  }
  ())
    return 'ie9';
  if (function(){
    return ua.indexOf('msie') != -1 && docMode >= 8 && docMode < 11;
  }
  ())
    return 'ie8';
  if (function(){
    return ua.indexOf('gecko') != -1 || docMode >= 11;
  }
  ())
    return 'gecko1_8';
  return 'unknown';
}

function SimpleEventBus$1(){
}

defineClass(161, 1, {}, SimpleEventBus$1);
var Lcom_google_web_bindery_event_shared_SimpleEventBus$1_2_classLit = createForClass('com.google.web.bindery.event.shared', 'SimpleEventBus/1', 161);
function SimpleEventBus$2(this$0, val$type, val$handler){
  this.this$01 = this$0;
  this.val$type2 = val$type;
  this.val$source3 = null;
  this.val$handler4 = val$handler;
}

defineClass(162, 1, {292:1}, SimpleEventBus$2);
var Lcom_google_web_bindery_event_shared_SimpleEventBus$2_2_classLit = createForClass('com.google.web.bindery.event.shared', 'SimpleEventBus/2', 162);
function $clinit_AceAnnotationType(){
  $clinit_AceAnnotationType = emptyMethod;
  ERROR_0 = new AceAnnotationType('ERROR', 0, 'error');
  INFORMATION = new AceAnnotationType('INFORMATION', 1, 'information');
  WARNING = new AceAnnotationType('WARNING', 2, 'warning');
}

function AceAnnotationType(enum$name, enum$ordinal, name_0){
  Enum.call(this, enum$name, enum$ordinal);
  this.name_0 = name_0;
}

function values_5(){
  $clinit_AceAnnotationType();
  return initValues(getClassLiteralForArray(Ledu_ycp_cs_dh_acegwt_client_ace_AceAnnotationType_2_classLit, 1), $intern_9, 76, 0, [ERROR_0, INFORMATION, WARNING]);
}

defineClass(76, 8, {76:1, 3:1, 9:1, 8:1}, AceAnnotationType);
var ERROR_0, INFORMATION, WARNING;
var Ledu_ycp_cs_dh_acegwt_client_ace_AceAnnotationType_2_classLit = createForEnum('edu.ycp.cs.dh.acegwt.client.ace', 'AceAnnotationType', 76, values_5);
function $withBindKey(this$static, bindKeyForAllPlatforms){
  this$static.bindKey_0 = new AceCommandDescription$KeyBinding(bindKeyForAllPlatforms);
  return this$static;
}

function $withReadOnly(this$static, readOnly){
  this$static.readOnly_0 = readOnly;
  return this$static;
}

function AceCommandDescription(name_0, exec_0){
  this.name_0 = name_0;
  this.exec_0 = exec_0;
}

function createJavaScriptWrapper(jsFunction){
  return new AceCommandDescription$1(jsFunction);
}

function invokeJavaScriptCommand(jsFunction, javaWrapper){
  var jsEditor = javaWrapper.editor;
  return jsFunction(jsEditor);
}

defineClass(80, 1, {}, AceCommandDescription);
_.toJavaScript = function toJavaScript(editor){
  var ret = {};
  ret['name'] = this.name_0;
  var javaExec = this.exec_0;
  ret['exec'] = function(){
    javaExec.exec_1(editor);
  }
  ;
  var bindKey = this.bindKey_0;
  bindKey && (ret['bindKey'] = bindKey.toJavaScript_0());
  var readOnly = this.readOnly_0;
  readOnly && (ret['readOnly'] = readOnly);
  var passEvent = this.passEvent_0;
  passEvent && (ret['passEvent'] = passEvent);
  var scrollIntoView = this.scrollIntoView_0;
  scrollIntoView && (ret['scrollIntoView'] = scrollIntoView.name_2());
  var multiSelectAction = this.multiSelectAction_0;
  multiSelectAction && (ret['multiSelectAction'] = multiSelectAction.name_2());
  var aceCommandGroup = this.aceCommandGroup_0;
  aceCommandGroup && (ret['aceCommandGroup'] = aceCommandGroup);
  return ret;
}
;
_.toString$ = function toString_11(){
  return 'AceCommandDescription [name=' + this.name_0 + ', exec=' + this.exec_0 + ', bindKey=' + this.bindKey_0 + ', readOnly=' + this.readOnly_0 + ', passEvent=' + this.passEvent_0 + ', scrollIntoView=' + this.scrollIntoView_0 + ', multiSelectAction=' + this.multiSelectAction_0 + ', aceCommandGroup=' + this.aceCommandGroup_0 + ']';
}
;
_.withAceCommandGroup = function withAceCommandGroup(aceCommandGroup){
  this.aceCommandGroup_0 = aceCommandGroup;
  return this;
}
;
_.withBindKey = function withBindKey(bindKey){
  this.bindKey_0 = bindKey;
  return this;
}
;
_.withMultiSelectAction = function withMultiSelectAction(multiSelectAction){
  this.multiSelectAction_0 = multiSelectAction;
  return this;
}
;
_.withPassEvent = function withPassEvent(passEvent){
  this.passEvent_0 = passEvent;
  return this;
}
;
_.withReadOnly = function withReadOnly(readOnly){
  return $withReadOnly(this, readOnly);
}
;
_.withScrollIntoView = function withScrollIntoView(scrollIntoView){
  this.scrollIntoView_0 = scrollIntoView;
  return this;
}
;
_.aceCommandGroup_0 = null;
_.bindKey_0 = null;
_.multiSelectAction_0 = null;
_.passEvent_0 = false;
_.readOnly_0 = false;
_.scrollIntoView_0 = null;
var Ledu_ycp_cs_dh_acegwt_client_ace_AceCommandDescription_2_classLit = createForClass('edu.ycp.cs.dh.acegwt.client.ace', 'AceCommandDescription', 80);
function AceCommandDescription$1(val$jsFunction){
  this.val$jsFunction1 = val$jsFunction;
}

defineClass(140, 1, {}, AceCommandDescription$1);
_.exec_1 = function exec_4(editor){
  return invokeJavaScriptCommand(this.val$jsFunction1, editor);
}
;
_.toString$ = function toString_12(){
  return 'ExecAction [javascript=' + this.val$jsFunction1 + ']';
}
;
var Ledu_ycp_cs_dh_acegwt_client_ace_AceCommandDescription$1_2_classLit = createForClass('edu.ycp.cs.dh.acegwt.client.ace', 'AceCommandDescription/1', 140);
function AceCommandDescription$KeyBinding(allPlatforms){
  this.allPlatforms = allPlatforms;
  this.mac_0 = null;
  this.exceptMac = null;
}

function AceCommandDescription$KeyBinding_0(exceptMac, mac){
  this.allPlatforms = null;
  this.mac_0 = mac;
  this.exceptMac = exceptMac;
}

function fromJavaScript(obj){
  if (!obj)
    return null;
  if (typeof obj === 'string')
    return new AceCommandDescription$KeyBinding(obj);
  return new AceCommandDescription$KeyBinding_0(obj.win, obj.mac);
}

defineClass(139, 1, {}, AceCommandDescription$KeyBinding, AceCommandDescription$KeyBinding_0);
_.toJavaScript_0 = function toJavaScript_0(){
  var ret = this.allPlatforms;
  if (ret)
    return ret;
  var win = this.exceptMac;
  var mac = this.mac_0;
  return {win:win, mac:mac};
}
;
_.toString$ = function toString_13(){
  if (this.allPlatforms != null)
    return 'KeyBinding [allPlatforms=' + this.allPlatforms + ']';
  return 'KeyBinding [mac=' + this.mac_0 + ', exceptMac=' + this.exceptMac + ']';
}
;
var Ledu_ycp_cs_dh_acegwt_client_ace_AceCommandDescription$KeyBinding_2_classLit = createForClass('edu.ycp.cs.dh.acegwt.client.ace', 'AceCommandDescription/KeyBinding', 139);
function $clinit_AceCommandDescription$MultiSelectAction(){
  $clinit_AceCommandDescription$MultiSelectAction = emptyMethod;
  forEach = new AceCommandDescription$MultiSelectAction('forEach', 0);
  forEachLine = new AceCommandDescription$MultiSelectAction('forEachLine', 1);
  single = new AceCommandDescription$MultiSelectAction('single', 2);
}

function AceCommandDescription$MultiSelectAction(enum$name, enum$ordinal){
  Enum.call(this, enum$name, enum$ordinal);
}

function fromString_0(value_0){
  $clinit_AceCommandDescription$MultiSelectAction();
  var ret, ret$array, ret$index, ret$max;
  for (ret$array = initValues(getClassLiteralForArray(Ledu_ycp_cs_dh_acegwt_client_ace_AceCommandDescription$MultiSelectAction_2_classLit, 1), $intern_9, 61, 0, [forEach, forEachLine, single]) , ret$index = 0 , ret$max = ret$array.length; ret$index < ret$max; ++ret$index) {
    ret = ret$array[ret$index];
    if ($equals(ret.name_1 != null?ret.name_1:'' + ret.ordinal, value_0))
      return ret;
  }
  return null;
}

function values_6(){
  $clinit_AceCommandDescription$MultiSelectAction();
  return initValues(getClassLiteralForArray(Ledu_ycp_cs_dh_acegwt_client_ace_AceCommandDescription$MultiSelectAction_2_classLit, 1), $intern_9, 61, 0, [forEach, forEachLine, single]);
}

defineClass(61, 8, {61:1, 3:1, 9:1, 8:1}, AceCommandDescription$MultiSelectAction);
var forEach, forEachLine, single;
var Ledu_ycp_cs_dh_acegwt_client_ace_AceCommandDescription$MultiSelectAction_2_classLit = createForEnum('edu.ycp.cs.dh.acegwt.client.ace', 'AceCommandDescription/MultiSelectAction', 61, values_6);
function $clinit_AceCommandDescription$ScrollIntoView(){
  $clinit_AceCommandDescription$ScrollIntoView = emptyMethod;
  animate = new AceCommandDescription$ScrollIntoView('animate', 0);
  center = new AceCommandDescription$ScrollIntoView('center', 1);
  cursor = new AceCommandDescription$ScrollIntoView('cursor', 2);
  selectionPart = new AceCommandDescription$ScrollIntoView('selectionPart', 3);
}

function AceCommandDescription$ScrollIntoView(enum$name, enum$ordinal){
  Enum.call(this, enum$name, enum$ordinal);
}

function fromString_1(value_0){
  $clinit_AceCommandDescription$ScrollIntoView();
  var ret, ret$array, ret$index, ret$max;
  for (ret$array = initValues(getClassLiteralForArray(Ledu_ycp_cs_dh_acegwt_client_ace_AceCommandDescription$ScrollIntoView_2_classLit, 1), $intern_9, 56, 0, [animate, center, cursor, selectionPart]) , ret$index = 0 , ret$max = ret$array.length; ret$index < ret$max; ++ret$index) {
    ret = ret$array[ret$index];
    if ($equals(ret.name_1 != null?ret.name_1:'' + ret.ordinal, value_0))
      return ret;
  }
  return null;
}

function values_7(){
  $clinit_AceCommandDescription$ScrollIntoView();
  return initValues(getClassLiteralForArray(Ledu_ycp_cs_dh_acegwt_client_ace_AceCommandDescription$ScrollIntoView_2_classLit, 1), $intern_9, 56, 0, [animate, center, cursor, selectionPart]);
}

defineClass(56, 8, {56:1, 3:1, 9:1, 8:1}, AceCommandDescription$ScrollIntoView);
var animate, center, cursor, selectionPart;
var Ledu_ycp_cs_dh_acegwt_client_ace_AceCommandDescription$ScrollIntoView_2_classLit = createForEnum('edu.ycp.cs.dh.acegwt.client.ace', 'AceCommandDescription/ScrollIntoView', 56, values_7);
function $addAnnotation(this$static, row, text_0, type_0){
  $push(this$static.annotations, {row:row, column:1, text:text_0, type:type_0.name_0});
}

function $addCommand(this$static, description){
  var editor = this$static.editor;
  var command = description.toJavaScript(this$static);
  editor.commands.addCommand(command);
}

function $addMarker(this$static, range, clazz, type_0, inFront){
  var editor = this$static.editor;
  var markerID = editor.getSession().addMarker(range, clazz, type_0.getName(), inFront);
  this$static.addMarker_0(markerID, range);
  return markerID;
}

function $clearAnnotations(this$static){
  var editor = this$static.editor;
  editor.getSession().clearAnnotations();
  this$static.resetAnnotations();
}

function $getCommandDescription(this$static, command){
  var editor = this$static.editor, name_0, exec_0, bindKey, ret, readOnly, passEvent, scrollIntoView, objMultiSelectAction, multiSelectAction, aceCommandGroup;
  var obj = editor.commands.commands[command];
  if (!obj)
    return null;
  return name_0 = obj.name , exec_0 = createJavaScriptWrapper(obj.exec) , ret = new AceCommandDescription(name_0, exec_0) , bindKey = fromJavaScript(obj.bindKey) , bindKey && ret.withBindKey(bindKey) , readOnly = obj.readOnly , readOnly && ret.withReadOnly(readOnly) , passEvent = obj.passEvent , passEvent && ret.withPassEvent(passEvent) , scrollIntoView = fromString_1(obj.scrollIntoView) , scrollIntoView && ret.withScrollIntoView(scrollIntoView) , objMultiSelectAction = obj.multiSelectAction , multiSelectAction = null , typeof objMultiSelectAction === 'string' && (multiSelectAction = fromString_0(objMultiSelectAction)) , multiSelectAction && ret.withMultiSelectAction(multiSelectAction) , aceCommandGroup = obj.aceCommandGroup , aceCommandGroup && ret.withAceCommandGroup(aceCommandGroup) , ret;
}

function $getFontSize(this$static){
  var editor = this$static.editor;
  return editor.getFontSize();
}

function $getText(this$static){
  var editor = this$static.editor;
  return editor.getSession().getValue();
}

function $removeAllMarkers(this$static){
  var id_0, id$index, id$max, ids;
  ids = dynamicCast((new AbstractMap$1(this$static.markers)).toArray(initDim(Ljava_lang_Integer_2_classLit, $intern_19, 47, this$static.markers.size_0, 0, 1)), 262);
  for (id$index = 0 , id$max = ids.length; id$index < id$max; ++id$index) {
    id_0 = ids[id$index];
    $removeMarker(this$static, id_0.value_0);
  }
}

function $removeMarker(this$static, markerId){
  var editor = this$static.editor;
  editor.getSession().removeMarker(markerId);
  this$static.removeRegisteredMarker(markerId);
}

function $setAnnotations(this$static){
  var editor = this$static.editor;
  var annotations = this$static.annotations;
  editor.getSession().setAnnotations(annotations);
}

function $setFontSize(this$static, fontSize){
  var editor = this$static.editor;
  editor.setFontSize(fontSize);
}

function $setShowGutter(this$static, showGutter){
  var editor = this$static.editor;
  editor.renderer.setShowGutter(showGutter);
}

function $setText_0(this$static, text_0){
  var editor = this$static.editor;
  editor.getSession().setValue(text_0);
}

function $setThemeByName(this$static, themeName){
  var editor = this$static.editor;
  editor.setTheme('ace/theme/' + themeName);
}

function $startEditor(this$static){
  var editor = $wnd.ace.edit(this$static.divElement);
  editor.getSession().setUseWorker(false);
  this$static.editor = editor;
  editor._aceGWTAceEditor = this$static;
  editor.resize();
  this$static.redisplay;
}

function AceEditor(){
  var div;
  this.annotations = [];
  this.markers = new HashMap;
  this.elementId = '_aceGWT' + nextId;
  ++nextId;
  div = new FlowPanel;
  $setId(div.element, this.elementId);
  $initWidget(this, div);
  this.divElement = div.element;
}

defineClass(107, 285, $intern_0, AceEditor);
_.addMarker_0 = function addMarker(id_0, range){
  $put_0(this.markers, valueOf_0(id_0), range);
}
;
_.redisplay = function redisplay(){
  var editor = this.editor;
  editor.renderer.onResize(true);
  editor.renderer.updateFull();
  editor.resize();
  editor.focus();
}
;
_.removeRegisteredMarker = function removeRegisteredMarker(id_0){
  var range;
  range = dynamicCastJso($remove_3(this.markers, valueOf_0(id_0)));
  typeof range.start != 'undefined' && typeof range.start != 'object' && range.start.detach();
  typeof range.end != 'undefined' && typeof range.end != 'object' && range.end.detach();
}
;
_.resetAnnotations = function resetAnnotations(){
  this.annotations = [];
}
;
var nextId = 0;
var Ledu_ycp_cs_dh_acegwt_client_ace_AceEditor_2_classLit = createForClass('edu.ycp.cs.dh.acegwt.client.ace', 'AceEditor', 107);
function $clinit_AceEditorTheme(){
  $clinit_AceEditorTheme = emptyMethod;
  AMBIANCE = new AceEditorTheme('AMBIANCE', 0, 'ambiance');
  CHAOS = new AceEditorTheme('CHAOS', 1, 'chaos');
  CHROME = new AceEditorTheme('CHROME', 2, 'chrome');
  CLOUD9_DAY = new AceEditorTheme('CLOUD9_DAY', 3, 'cloud9_day');
  CLOUD9_NIGHT = new AceEditorTheme('CLOUD9_NIGHT', 4, 'cloud9_night');
  CLOUD9_NIGHT_LOW_COLOR = new AceEditorTheme('CLOUD9_NIGHT_LOW_COLOR', 5, 'cloud9_night_low_color');
  CLOUDS = new AceEditorTheme('CLOUDS', 6, 'clouds');
  CLOUDS_MIDNIGHT = new AceEditorTheme('CLOUDS_MIDNIGHT', 7, 'clouds_midnight');
  COBALT = new AceEditorTheme('COBALT', 8, 'cobalt');
  CRIMSON_EDITOR = new AceEditorTheme('CRIMSON_EDITOR', 9, 'crimson_editor');
  DAWN = new AceEditorTheme('DAWN', 10, 'dawn');
  DREAMWEAVER = new AceEditorTheme('DREAMWEAVER', 11, 'dreamweaver');
  ECLIPSE = new AceEditorTheme('ECLIPSE', 12, 'eclipse');
  GITHUB = new AceEditorTheme('GITHUB', 13, 'github');
  IDLE_FINGERS = new AceEditorTheme('IDLE_FINGERS', 14, 'idle_fingers');
  KATZENMILCH = new AceEditorTheme('KATZENMILCH', 15, 'katzenmilch');
  KR_THEME = new AceEditorTheme('KR_THEME', 16, 'kr_theme');
  KR = new AceEditorTheme('KR', 17, 'kr');
  KUROIR = new AceEditorTheme('KUROIR', 18, 'kuroir');
  MERBIVORE = new AceEditorTheme('MERBIVORE', 19, 'merbivore');
  MERBIVORE_SOFT = new AceEditorTheme('MERBIVORE_SOFT', 20, 'merbivore_soft');
  MONO_INDUSTRIAL = new AceEditorTheme('MONO_INDUSTRIAL', 21, 'mono_industrial');
  MONOKAI = new AceEditorTheme('MONOKAI', 22, 'monokai');
  PASTEL_ON_DARK = new AceEditorTheme('PASTEL_ON_DARK', 23, 'pastel_on_dark');
  SOLARIZED_DARK = new AceEditorTheme('SOLARIZED_DARK', 24, 'solarized_dark');
  SOLARIZED_LIGHT = new AceEditorTheme('SOLARIZED_LIGHT', 25, 'solarized_light');
  TERMINAL = new AceEditorTheme('TERMINAL', 26, 'terminal');
  TEXTMATE = new AceEditorTheme('TEXTMATE', 27, 'textmate');
  TOMORROW_NIGHT_BLUE = new AceEditorTheme('TOMORROW_NIGHT_BLUE', 28, 'tomorrow_night_blue');
  TOMORROW_NIGHT_BRIGHT = new AceEditorTheme('TOMORROW_NIGHT_BRIGHT', 29, 'tomorrow_night_bright');
  TOMORROW_NIGHT_EIGHTIES = new AceEditorTheme('TOMORROW_NIGHT_EIGHTIES', 30, 'tomorrow_night_eighties');
  TOMORROW_NIGHT = new AceEditorTheme('TOMORROW_NIGHT', 31, 'tomorrow_night');
  TOMORROW = new AceEditorTheme('TOMORROW', 32, 'tomorrow');
  TWILIGHT = new AceEditorTheme('TWILIGHT', 33, 'twilight');
  VIBRANT_INK = new AceEditorTheme('VIBRANT_INK', 34, 'vibrant_ink');
  XCODE = new AceEditorTheme('XCODE', 35, 'xcode');
}

function AceEditorTheme(enum$name, enum$ordinal, name_0){
  Enum.call(this, enum$name, enum$ordinal);
  this.name_0 = name_0;
}

function values_8(){
  $clinit_AceEditorTheme();
  return initValues(getClassLiteralForArray(Ledu_ycp_cs_dh_acegwt_client_ace_AceEditorTheme_2_classLit, 1), $intern_9, 17, 0, [AMBIANCE, CHAOS, CHROME, CLOUD9_DAY, CLOUD9_NIGHT, CLOUD9_NIGHT_LOW_COLOR, CLOUDS, CLOUDS_MIDNIGHT, COBALT, CRIMSON_EDITOR, DAWN, DREAMWEAVER, ECLIPSE, GITHUB, IDLE_FINGERS, KATZENMILCH, KR_THEME, KR, KUROIR, MERBIVORE, MERBIVORE_SOFT, MONO_INDUSTRIAL, MONOKAI, PASTEL_ON_DARK, SOLARIZED_DARK, SOLARIZED_LIGHT, TERMINAL, TEXTMATE, TOMORROW_NIGHT_BLUE, TOMORROW_NIGHT_BRIGHT, TOMORROW_NIGHT_EIGHTIES, TOMORROW_NIGHT, TOMORROW, TWILIGHT, VIBRANT_INK, XCODE]);
}

defineClass(17, 8, {17:1, 3:1, 9:1, 8:1}, AceEditorTheme);
var AMBIANCE, CHAOS, CHROME, CLOUD9_DAY, CLOUD9_NIGHT, CLOUD9_NIGHT_LOW_COLOR, CLOUDS, CLOUDS_MIDNIGHT, COBALT, CRIMSON_EDITOR, DAWN, DREAMWEAVER, ECLIPSE, GITHUB, IDLE_FINGERS, KATZENMILCH, KR, KR_THEME, KUROIR, MERBIVORE, MERBIVORE_SOFT, MONOKAI, MONO_INDUSTRIAL, PASTEL_ON_DARK, SOLARIZED_DARK, SOLARIZED_LIGHT, TERMINAL, TEXTMATE, TOMORROW, TOMORROW_NIGHT, TOMORROW_NIGHT_BLUE, TOMORROW_NIGHT_BRIGHT, TOMORROW_NIGHT_EIGHTIES, TWILIGHT, VIBRANT_INK, XCODE;
var Ledu_ycp_cs_dh_acegwt_client_ace_AceEditorTheme_2_classLit = createForEnum('edu.ycp.cs.dh.acegwt.client.ace', 'AceEditorTheme', 17, values_8);
function $clinit_AceMarkerType(){
  $clinit_AceMarkerType = emptyMethod;
  FULL_LINE = new AceMarkerType('FULL_LINE', 0, 'fullLine');
  SCREEN_LINE = new AceMarkerType('SCREEN_LINE', 1, 'screenLine');
  TEXT = new AceMarkerType('TEXT', 2, 'text');
}

function AceMarkerType(enum$name, enum$ordinal, name_0){
  Enum.call(this, enum$name, enum$ordinal);
  this.name_0 = name_0;
}

function values_9(){
  $clinit_AceMarkerType();
  return initValues(getClassLiteralForArray(Ledu_ycp_cs_dh_acegwt_client_ace_AceMarkerType_2_classLit, 1), $intern_9, 75, 0, [FULL_LINE, SCREEN_LINE, TEXT]);
}

defineClass(75, 8, {75:1, 3:1, 9:1, 8:1}, AceMarkerType);
_.getName = function getName(){
  return this.name_0;
}
;
var FULL_LINE, SCREEN_LINE, TEXT;
var Ledu_ycp_cs_dh_acegwt_client_ace_AceMarkerType_2_classLit = createForEnum('edu.ycp.cs.dh.acegwt.client.ace', 'AceMarkerType', 75, values_9);
function toJsObject(startRow, startColumn, endRow, endColumn){
  var Range_0 = $wnd.require('ace/range').Range;
  var range = new Range_0(startRow, startColumn, endRow, endColumn);
  return range;
}

function AbstractStringBuilder(string){
  this.string = string;
}

defineClass(94, 1, {});
_.toString$ = function toString_14(){
  return this.string;
}
;
var Ljava_lang_AbstractStringBuilder_2_classLit = createForClass('java.lang', 'AbstractStringBuilder', 94);
function ArithmeticException(){
  RuntimeException_0.call(this, 'divide by zero');
}

defineClass(150, 27, $intern_10, ArithmeticException);
var Ljava_lang_ArithmeticException_2_classLit = createForClass('java.lang', 'ArithmeticException', 150);
function ArrayStoreException(){
  RuntimeException.call(this);
}

defineClass(82, 27, $intern_10, ArrayStoreException);
var Ljava_lang_ArrayStoreException_2_classLit = createForClass('java.lang', 'ArrayStoreException', 82);
function $clinit_Boolean(){
  $clinit_Boolean = emptyMethod;
  FALSE = new Boolean_0(false);
  TRUE = new Boolean_0(true);
}

function Boolean_0(value_0){
  this.value_0 = value_0;
}

defineClass(69, 1, {3:1, 69:1, 9:1}, Boolean_0);
_.equals$ = function equals_2(o){
  return instanceOf(o, 69) && dynamicCast(o, 69).value_0 == this.value_0;
}
;
_.hashCode$ = function hashCode_4(){
  return this.value_0?1231:1237;
}
;
_.toString$ = function toString_15(){
  return '' + this.value_0;
}
;
_.value_0 = false;
var FALSE, TRUE;
var Ljava_lang_Boolean_2_classLit = createForClass('java.lang', 'Boolean', 69);
function __decodeAndValidateInt(s){
  var decode;
  decode = __decodeNumberString(s);
  return __parseAndValidateInt(decode.payload, decode.radix);
}

function __decodeNumberString(s){
  var negative, radix;
  if ($equals(s.substr(0, 1), '-')) {
    negative = true;
    s = __substr(s, 1, s.length - 1);
  }
   else {
    negative = false;
    $equals(s.substr(0, 1), '+') && (s = __substr(s, 1, s.length - 1));
  }
  if ($equals(s.substr(0, 2), '0x') || $equals(s.substr(0, 2), '0X')) {
    s = __substr(s, 2, s.length - 2);
    radix = 16;
  }
   else if ($equals(s.substr(0, 1), '#')) {
    s = __substr(s, 1, s.length - 1);
    radix = 16;
  }
   else 
    $equals(s.substr(0, 1), '0')?(radix = 8):(radix = 10);
  negative && (s = '-' + s);
  return new Number$__Decode(radix, s);
}

function __parseAndValidateInt(s, radix){
  var i, isTooLow, length_0, startIndex, toReturn;
  if (s == null) {
    throw new NumberFormatException('null');
  }
  if (radix < 2 || radix > 36) {
    throw new NumberFormatException('radix ' + radix + ' out of range');
  }
  length_0 = s.length;
  startIndex = length_0 > 0 && (s.charCodeAt(0) == 45 || s.charCodeAt(0) == 43)?1:0;
  for (i = startIndex; i < length_0; i++) {
    if (digit_0(s.charCodeAt(i), radix) == -1) {
      throw new NumberFormatException('For input string: "' + s + '"');
    }
  }
  toReturn = parseInt(s, radix);
  isTooLow = toReturn < -2147483648;
  if (isNaN(toReturn)) {
    throw new NumberFormatException('For input string: "' + s + '"');
  }
   else if (isTooLow || toReturn > 2147483647) {
    throw new NumberFormatException('For input string: "' + s + '"');
  }
  return toReturn;
}

function __parseAndValidateLong(s, radix){
  var c, firstTime, head, i, length_0, maxDigits, minValue, negative, orig, radixPower, toReturn;
  if (s == null) {
    throw new NumberFormatException('null');
  }
  if (radix < 2 || radix > 36) {
    throw new NumberFormatException('radix ' + radix + ' out of range');
  }
  orig = s;
  length_0 = s.length;
  negative = false;
  if (length_0 > 0) {
    c = s.charCodeAt(0);
    if (c == 45 || c == 43) {
      s = __substr(s, 1, s.length - 1);
      --length_0;
      negative = c == 45;
    }
  }
  if (length_0 == 0) {
    throw new NumberFormatException('For input string: "' + orig + '"');
  }
  while (s.length > 0 && s.charCodeAt(0) == 48) {
    s = __substr(s, 1, s.length - 1);
    --length_0;
  }
  if (length_0 > ($clinit_Number$__ParseLong() , maxLengthForRadix)[radix]) {
    throw new NumberFormatException('For input string: "' + orig + '"');
  }
  for (i = 0; i < length_0; i++) {
    if (digit_0(s.charCodeAt(i), radix) == -1) {
      throw new NumberFormatException('For input string: "' + orig + '"');
    }
  }
  toReturn = {l:0, m:0, h:0};
  maxDigits = maxDigitsForRadix[radix];
  radixPower = fromInt(maxDigitsRadixPower[radix]);
  minValue = neg(maxValueForRadix[radix]);
  firstTime = true;
  head = length_0 % maxDigits;
  if (head > 0) {
    toReturn = fromInt(-__parseInt(s.substr(0, head), radix));
    s = __substr(s, head, s.length - head);
    length_0 -= head;
    firstTime = false;
  }
  while (length_0 >= maxDigits) {
    head = __parseInt(s.substr(0, maxDigits), radix);
    s = __substr(s, maxDigits, s.length - maxDigits);
    length_0 -= maxDigits;
    if (firstTime) {
      firstTime = false;
    }
     else {
      if (lt(toReturn, minValue)) {
        throw new NumberFormatException('For input string: "' + orig + '"');
      }
      toReturn = mul(toReturn, radixPower);
    }
    toReturn = sub_0(toReturn, fromInt(head));
  }
  if (gt(toReturn, {l:0, m:0, h:0})) {
    throw new NumberFormatException('For input string: "' + orig + '"');
  }
  if (!negative) {
    toReturn = neg(toReturn);
    if (lt(toReturn, {l:0, m:0, h:0})) {
      throw new NumberFormatException('For input string: "' + orig + '"');
    }
  }
  return toReturn;
}

function __parseInt(s, radix){
  return parseInt(s, radix);
}

defineClass(83, 1, {3:1, 83:1});
var Ljava_lang_Number_2_classLit = createForClass('java.lang', 'Number', 83);
function Byte(value_0){
  this.value_0 = value_0;
}

function valueOf(b){
  var rebase, result;
  rebase = b + 128;
  result = ($clinit_Byte$BoxedValues() , boxedValues_0)[rebase];
  !result && (result = boxedValues_0[rebase] = new Byte(b));
  return result;
}

defineClass(46, 83, {3:1, 46:1, 9:1, 83:1}, Byte);
_.equals$ = function equals_3(o){
  return instanceOf(o, 46) && dynamicCast(o, 46).value_0 == this.value_0;
}
;
_.hashCode$ = function hashCode_5(){
  return this.value_0;
}
;
_.toString$ = function toString_16(){
  return '' + this.value_0;
}
;
_.value_0 = 0;
var Ljava_lang_Byte_2_classLit = createForClass('java.lang', 'Byte', 46);
function $clinit_Byte$BoxedValues(){
  $clinit_Byte$BoxedValues = emptyMethod;
  boxedValues_0 = initDim(Ljava_lang_Byte_2_classLit, $intern_9, 46, 256, 0, 1);
}

var boxedValues_0;
function digit_0(c, radix){
  if (radix < 2 || radix > 36) {
    return -1;
  }
  if (c >= 48 && c < 48 + (radix < 10?radix:10)) {
    return c - 48;
  }
  if (c >= 97 && c < radix + 97 - 10) {
    return c - 97 + 10;
  }
  if (c >= 65 && c < radix + 65 - 10) {
    return c - 65 + 10;
  }
  return -1;
}

function forDigit(digit){
  var overBaseTen;
  overBaseTen = digit - 10;
  return (overBaseTen < 0?48 + digit:97 + overBaseTen) & 65535;
}

function ClassCastException(){
  RuntimeException.call(this);
}

defineClass(62, 27, $intern_10, ClassCastException);
var Ljava_lang_ClassCastException_2_classLit = createForClass('java.lang', 'ClassCastException', 62);
function IllegalArgumentException(message){
  RuntimeException_0.call(this, message);
}

defineClass(59, 27, {3:1, 59:1, 13:1}, IllegalArgumentException);
var Ljava_lang_IllegalArgumentException_2_classLit = createForClass('java.lang', 'IllegalArgumentException', 59);
function IllegalStateException(s){
  RuntimeException_0.call(this, s);
}

defineClass(65, 27, $intern_10, IllegalStateException);
var Ljava_lang_IllegalStateException_2_classLit = createForClass('java.lang', 'IllegalStateException', 65);
function IndexOutOfBoundsException(){
  RuntimeException.call(this);
}

function IndexOutOfBoundsException_0(message){
  RuntimeException_0.call(this, message);
}

defineClass(74, 27, $intern_10, IndexOutOfBoundsException, IndexOutOfBoundsException_0);
var Ljava_lang_IndexOutOfBoundsException_2_classLit = createForClass('java.lang', 'IndexOutOfBoundsException', 74);
function Integer(value_0){
  this.value_0 = value_0;
}

function numberOfLeadingZeros_0(i){
  var m, n, y_0;
  if (i < 0) {
    return 0;
  }
   else if (i == 0) {
    return 32;
  }
   else {
    y_0 = -(i >> 16);
    m = y_0 >> 16 & 16;
    n = 16 - m;
    i = i >> m;
    y_0 = i - 256;
    m = y_0 >> 16 & 8;
    n += m;
    i <<= m;
    y_0 = i - 4096;
    m = y_0 >> 16 & 4;
    n += m;
    i <<= m;
    y_0 = i - 16384;
    m = y_0 >> 16 & 2;
    n += m;
    i <<= m;
    y_0 = i >> 14;
    m = y_0 & ~(y_0 >> 1);
    return n + 2 - m;
  }
}

function numberOfTrailingZeros(i){
  var r, rtn;
  if (i == 0) {
    return 32;
  }
   else {
    rtn = 0;
    for (r = 1; (r & i) == 0; r <<= 1) {
      ++rtn;
    }
    return rtn;
  }
}

function toUnsignedRadixString(value_0, radix){
  return (value_0 >>> 0).toString(radix);
}

function valueOf_0(i){
  var rebase, result;
  if (i > -129 && i < 128) {
    rebase = i + 128;
    result = ($clinit_Integer$BoxedValues() , boxedValues_1)[rebase];
    !result && (result = boxedValues_1[rebase] = new Integer(i));
    return result;
  }
  return new Integer(i);
}

defineClass(47, 83, {3:1, 9:1, 47:1, 83:1}, Integer);
_.equals$ = function equals_4(o){
  return instanceOf(o, 47) && dynamicCast(o, 47).value_0 == this.value_0;
}
;
_.hashCode$ = function hashCode_6(){
  return this.value_0;
}
;
_.toString$ = function toString_18(){
  return '' + this.value_0;
}
;
_.value_0 = 0;
var Ljava_lang_Integer_2_classLit = createForClass('java.lang', 'Integer', 47);
function $clinit_Integer$BoxedValues(){
  $clinit_Integer$BoxedValues = emptyMethod;
  boxedValues_1 = initDim(Ljava_lang_Integer_2_classLit, $intern_19, 47, 256, 0, 1);
}

var boxedValues_1;
function Long(value_0){
  this.value_0 = value_0;
}

function decode_0(s){
  var decode;
  decode = __decodeNumberString(s);
  return valueOf_1(__parseAndValidateLong(decode.payload, decode.radix));
}

function toPowerOfTwoUnsignedString(value_0){
  var buf, pos;
  if (lte({l:0, m:4193792, h:$intern_8}, value_0) && lte(value_0, {l:$intern_3, m:511, h:0})) {
    return toInt(value_0).toString(16);
  }
  buf = initDim(C_classLit, $intern_2, 0, 17, 7, 1);
  pos = 17;
  do {
    buf[--pos] = forDigit(toInt(value_0) & 15);
    value_0 = shru(value_0, 4);
  }
   while (neq(value_0, {l:0, m:0, h:0}));
  return __valueOf(buf, pos, 17);
}

function valueOf_1(i){
  var rebase, result;
  if (gt(i, {l:4194175, m:$intern_3, h:$intern_8}) && lt(i, {l:128, m:0, h:0})) {
    rebase = toInt(i) + 128;
    result = ($clinit_Long$BoxedValues() , boxedValues_2)[rebase];
    !result && (result = boxedValues_2[rebase] = new Long(i));
    return result;
  }
  return new Long(i);
}

defineClass(63, 83, {3:1, 9:1, 63:1, 83:1}, Long);
_.equals$ = function equals_5(o){
  return instanceOf(o, 63) && eq(dynamicCast(o, 63).value_0, this.value_0);
}
;
_.hashCode$ = function hashCode_7(){
  return toInt(this.value_0);
}
;
_.toString$ = function toString_19(){
  return '' + toString_10(this.value_0);
}
;
_.value_0 = {l:0, m:0, h:0};
var Ljava_lang_Long_2_classLit = createForClass('java.lang', 'Long', 63);
function $clinit_Long$BoxedValues(){
  $clinit_Long$BoxedValues = emptyMethod;
  boxedValues_2 = initDim(Ljava_lang_Long_2_classLit, $intern_9, 63, 256, 0, 1);
}

var boxedValues_2;
function pow_0(x_0, exp_0){
  return Math.pow(x_0, exp_0);
}

function sqrt_0(x_0){
  return Math.sqrt(x_0);
}

function NullPointerException(){
  RuntimeException.call(this);
}

function NullPointerException_0(message){
  RuntimeException_0.call(this, message);
}

defineClass(58, 27, {3:1, 58:1, 13:1}, NullPointerException, NullPointerException_0);
var Ljava_lang_NullPointerException_2_classLit = createForClass('java.lang', 'NullPointerException', 58);
function Number$__Decode(radix, payload){
  this.radix = radix;
  this.payload = payload;
}

defineClass(142, 1, {}, Number$__Decode);
_.radix = 0;
var Ljava_lang_Number$_1_1Decode_2_classLit = createForClass('java.lang', 'Number/__Decode', 142);
function $clinit_Number$__ParseLong(){
  $clinit_Number$__ParseLong = emptyMethod;
  var i;
  maxDigitsForRadix = initValues(getClassLiteralForArray(I_classLit, 1), $intern_2, 0, 7, [-1, -1, 30, 19, 15, 13, 11, 11, 10, 9, 9, 8, 8, 8, 8, 7, 7, 7, 7, 7, 7, 7, 6, 6, 6, 6, 6, 6, 6, 6, 6, 6, 6, 6, 6, 6, 5]);
  maxDigitsRadixPower = initDim(I_classLit, $intern_2, 0, 37, 7, 1);
  maxLengthForRadix = initValues(getClassLiteralForArray(I_classLit, 1), $intern_2, 0, 7, [-1, -1, 63, 40, 32, 28, 25, 23, 21, 20, 19, 19, 18, 18, 17, 17, 16, 16, 16, 15, 15, 15, 15, 14, 14, 14, 14, 14, 14, 13, 13, 13, 13, 13, 13, 13, 13]);
  maxValueForRadix = initDim(J_classLit, $intern_2, 0, 37, 6, 1);
  for (i = 2; i <= 36; i++) {
    maxDigitsRadixPower[i] = round_int(pow_0(i, maxDigitsForRadix[i]));
    maxValueForRadix[i] = div_0({l:$intern_3, m:$intern_3, h:524287}, fromInt(maxDigitsRadixPower[i]));
  }
}

var maxDigitsForRadix, maxDigitsRadixPower, maxLengthForRadix, maxValueForRadix;
function NumberFormatException(message){
  IllegalArgumentException.call(this, message);
}

defineClass(28, 59, {3:1, 59:1, 28:1, 13:1}, NumberFormatException);
var Ljava_lang_NumberFormatException_2_classLit = createForClass('java.lang', 'NumberFormatException', 28);
function $charAt(this$static, index_0){
  return this$static.charCodeAt(index_0);
}

function $equals(this$static, other){
  return this$static === other;
}

function $equalsIgnoreCase(this$static, other){
  if (other == null) {
    return false;
  }
  if (this$static == other) {
    return true;
  }
  return this$static.length == other.length && this$static.toLowerCase() == other.toLowerCase();
}

function $substring(this$static, beginIndex){
  return __substr(this$static, beginIndex, this$static.length - beginIndex);
}

function $substring_0(this$static, beginIndex, endIndex){
  return this$static.substr(beginIndex, endIndex - beginIndex);
}

function $trim(this$static){
  if (this$static.length == 0 || this$static[0] > ' ' && this$static[this$static.length - 1] > ' ') {
    return this$static;
  }
  return this$static.replace(/^[\u0000-\u0020]*|[\u0000-\u0020]*$/g, '');
}

function __substr(str, beginIndex, len){
  return str.substr(beginIndex, len);
}

function __valueOf(x_0, start_0, end){
  var s = '';
  for (var batchStart = start_0; batchStart < end;) {
    var batchEnd = Math.min(batchStart + 10000, end);
    s += String.fromCharCode.apply(null, x_0.slice(batchStart, batchEnd));
    batchStart = batchEnd;
  }
  return s;
}

var Ljava_lang_String_2_classLit = createForClass('java.lang', 'String', 2);
function $clinit_String$HashCache(){
  $clinit_String$HashCache = emptyMethod;
  back_0 = {};
  front = {};
}

function compute(str){
  var hashCode, i, n, nBatch;
  hashCode = 0;
  n = str.length;
  nBatch = n - 4;
  i = 0;
  while (i < nBatch) {
    hashCode = str.charCodeAt(i + 3) + 31 * (str.charCodeAt(i + 2) + 31 * (str.charCodeAt(i + 1) + 31 * (str.charCodeAt(i) + 31 * hashCode)));
    hashCode = ~~hashCode;
    i += 4;
  }
  while (i < n) {
    hashCode = hashCode * 31 + $charAt(str, i++);
  }
  hashCode = ~~hashCode;
  return hashCode;
}

function getHashCode_0(str){
  $clinit_String$HashCache();
  var key = ':' + str;
  var result = front[key];
  if (result != null) {
    return result;
  }
  result = back_0[key];
  result == null && (result = compute(str));
  increment();
  return front[key] = result;
}

function increment(){
  if (count_0 == 256) {
    back_0 = front;
    front = {};
    count_0 = 0;
  }
  ++count_0;
}

var back_0, count_0 = 0, front;
function $append(this$static, x_0){
  this$static.string += x_0;
  return this$static;
}

function StringBuffer(){
  AbstractStringBuilder.call(this, '');
}

defineClass(204, 94, {261:1}, StringBuffer);
var Ljava_lang_StringBuffer_2_classLit = createForClass('java.lang', 'StringBuffer', 204);
function $append_0(this$static, x_0){
  this$static.string += x_0;
  return this$static;
}

function StringBuilder(s){
  AbstractStringBuilder.call(this, s);
}

defineClass(33, 94, {261:1}, StringBuilder);
var Ljava_lang_StringBuilder_2_classLit = createForClass('java.lang', 'StringBuilder', 33);
function UnsupportedOperationException(){
  RuntimeException.call(this);
}

function UnsupportedOperationException_0(message){
  RuntimeException_0.call(this, message);
}

defineClass(99, 27, $intern_10, UnsupportedOperationException, UnsupportedOperationException_0);
var Ljava_lang_UnsupportedOperationException_2_classLit = createForClass('java.lang', 'UnsupportedOperationException', 99);
function $advanceToFind(this$static, o){
  var e, iter;
  for (iter = this$static.iterator(); iter.hasNext();) {
    e = iter.next();
    if (maskUndefined(o) === maskUndefined(e) || o != null && equals_Ljava_lang_Object__Z__devirtual$(o, e)) {
      return true;
    }
  }
  return false;
}

function $containsAll(this$static, c){
  var e, e$iterator;
  checkNotNull(c);
  for (e$iterator = c.iterator(); e$iterator.hasNext();) {
    e = e$iterator.next();
    if (!this$static.contains_0(e)) {
      return false;
    }
  }
  return true;
}

function $toString(this$static){
  var comma, e, e$iterator, sb;
  sb = new StringBuilder('[');
  comma = false;
  for (e$iterator = this$static.iterator(); e$iterator.hasNext();) {
    e = e$iterator.next();
    comma?(sb.string += ', ' , sb):(comma = true);
    sb.string += e === this$static?'(this Collection)':'' + e;
  }
  sb.string += ']';
  return sb.string;
}

defineClass(280, 1, {22:1});
_.contains_0 = function contains(o){
  return $advanceToFind(this, o);
}
;
_.toArray = function toArray(a){
  var i, it, size_0;
  size_0 = this.size_1();
  a.length < size_0 && (a = createFrom(a, size_0));
  it = this.iterator();
  for (i = 0; i < size_0; ++i) {
    setCheck(a, i, it.next());
  }
  a.length > size_0 && setCheck(a, size_0, null);
  return a;
}
;
_.toString$ = function toString_20(){
  return $toString(this);
}
;
var Ljava_util_AbstractCollection_2_classLit = createForClass('java.util', 'AbstractCollection', 280);
function $containsEntry(this$static, entry){
  var key, ourValue, value_0;
  key = entry.getKey();
  value_0 = entry.getValue_0();
  ourValue = isJavaString(key)?$getStringValue(this$static, key):getEntryValueOrNull($getEntry(this$static.hashCodeMap, key));
  if (!(maskUndefined(value_0) === maskUndefined(ourValue) || value_0 != null && equals_Ljava_lang_Object__Z__devirtual$(value_0, ourValue))) {
    return false;
  }
  if (ourValue == null && !(isJavaString(key)?$hasStringValue(this$static, key):!!$getEntry(this$static.hashCodeMap, key))) {
    return false;
  }
  return true;
}

function $toString_0(this$static, o){
  return o === this$static?'(this Map)':'' + o;
}

function getEntryValueOrNull(entry){
  return !entry?null:entry.getValue_0();
}

defineClass(279, 1, {78:1});
_.equals$ = function equals_6(obj){
  var entry, entry$iterator, otherMap;
  if (obj === this) {
    return true;
  }
  if (!instanceOf(obj, 78)) {
    return false;
  }
  otherMap = dynamicCast(obj, 78);
  if (this.size_0 != otherMap.size_0) {
    return false;
  }
  for (entry$iterator = new AbstractHashMap$EntrySetIterator((new AbstractHashMap$EntrySet(otherMap)).this$01); $hasNext(entry$iterator);) {
    entry = (checkStructuralChange(entry$iterator.this$01, entry$iterator) , checkCriticalElement($hasNext(entry$iterator)) , dynamicCast(entry$iterator.current.next(), 38));
    if (!$containsEntry(this, entry)) {
      return false;
    }
  }
  return true;
}
;
_.hashCode$ = function hashCode_8(){
  return hashCode_13(new AbstractHashMap$EntrySet(this));
}
;
_.toString$ = function toString_21(){
  var comma, entry, entry$iterator, sb;
  sb = new StringBuilder('{');
  comma = false;
  for (entry$iterator = new AbstractHashMap$EntrySetIterator((new AbstractHashMap$EntrySet(this)).this$01); $hasNext(entry$iterator);) {
    entry = (checkStructuralChange(entry$iterator.this$01, entry$iterator) , checkCriticalElement($hasNext(entry$iterator)) , dynamicCast(entry$iterator.current.next(), 38));
    comma?(sb.string += ', ' , sb):(comma = true);
    $append_0(sb, $toString_0(this, entry.getKey()));
    sb.string += '=';
    $append_0(sb, $toString_0(this, entry.getValue_0()));
  }
  sb.string += '}';
  return sb.string;
}
;
var Ljava_util_AbstractMap_2_classLit = createForClass('java.util', 'AbstractMap', 279);
function $containsKey(this$static, key){
  return isJavaString(key)?$hasStringValue(this$static, key):!!$getEntry(this$static.hashCodeMap, key);
}

function $elementAdded(this$static){
  ++this$static.size_0;
  structureChanged(this$static);
}

function $elementRemoved(this$static){
  --this$static.size_0;
  structureChanged(this$static);
}

function $get_0(this$static, key){
  return isJavaString(key)?$getStringValue(this$static, key):getEntryValueOrNull($getEntry(this$static.hashCodeMap, key));
}

function $getStringValue(this$static, key){
  return key == null?getEntryValueOrNull($getEntry(this$static.hashCodeMap, null)):this$static.stringMap.get_1(key);
}

function $hasStringValue(this$static, key){
  return key == null?!!$getEntry(this$static.hashCodeMap, null):!(this$static.stringMap.get_1(key) === undefined);
}

function $put_0(this$static, key, value_0){
  return isJavaString(key)?$putStringValue(this$static, key, value_0):$put_1(this$static.hashCodeMap, key, value_0);
}

function $putStringValue(this$static, key, value_0){
  return key == null?$put_1(this$static.hashCodeMap, null, value_0):this$static.stringMap.put(key, value_0);
}

function $remove_3(this$static, key){
  return isJavaString(key)?key == null?$remove_5(this$static.hashCodeMap, null):this$static.stringMap.remove_0(key):$remove_5(this$static.hashCodeMap, key);
}

function $reset_1(this$static){
  $clinit_InternalJsMapFactory$BackwardCompatibleJsMapFactory();
  this$static.hashCodeMap = delegate.createJsHashCodeMap();
  this$static.hashCodeMap.host = this$static;
  this$static.stringMap = delegate.createJsStringMap();
  this$static.stringMap.host = this$static;
  this$static.size_0 = 0;
  structureChanged(this$static);
}

defineClass(146, 279, {78:1});
_.size_0 = 0;
var Ljava_util_AbstractHashMap_2_classLit = createForClass('java.util', 'AbstractHashMap', 146);
defineClass(281, 280, $intern_20);
_.equals$ = function equals_7(o){
  var other;
  if (o === this) {
    return true;
  }
  if (!instanceOf(o, 91)) {
    return false;
  }
  other = dynamicCast(o, 91);
  if (other.size_1() != this.size_1()) {
    return false;
  }
  return $containsAll(this, other);
}
;
_.hashCode$ = function hashCode_9(){
  return hashCode_13(this);
}
;
var Ljava_util_AbstractSet_2_classLit = createForClass('java.util', 'AbstractSet', 281);
function $contains(this$static, o){
  if (instanceOf(o, 38)) {
    return $containsEntry(this$static.this$01, dynamicCast(o, 38));
  }
  return false;
}

function AbstractHashMap$EntrySet(this$0){
  this.this$01 = this$0;
}

defineClass(70, 281, $intern_20, AbstractHashMap$EntrySet);
_.contains_0 = function contains_0(o){
  return $contains(this, o);
}
;
_.iterator = function iterator_2(){
  return new AbstractHashMap$EntrySetIterator(this.this$01);
}
;
_.size_1 = function size_1(){
  return this.this$01.size_0;
}
;
var Ljava_util_AbstractHashMap$EntrySet_2_classLit = createForClass('java.util', 'AbstractHashMap/EntrySet', 70);
function $hasNext(this$static){
  if (this$static.current.hasNext()) {
    return true;
  }
  if (this$static.current != this$static.stringMapEntries) {
    return false;
  }
  this$static.current = this$static.this$01.hashCodeMap.entries();
  return this$static.current.hasNext();
}

function $next_0(this$static){
  return checkStructuralChange(this$static.this$01, this$static) , checkCriticalElement($hasNext(this$static)) , dynamicCast(this$static.current.next(), 38);
}

function AbstractHashMap$EntrySetIterator(this$0){
  this.this$01 = this$0;
  this.stringMapEntries = this.this$01.stringMap.entries();
  this.current = this.stringMapEntries;
  setModCount(this, this$0._gwt_modCount);
}

defineClass(71, 1, {}, AbstractHashMap$EntrySetIterator);
_.hasNext = function hasNext_0(){
  return $hasNext(this);
}
;
_.next = function next_0(){
  return $next_0(this);
}
;
var Ljava_util_AbstractHashMap$EntrySetIterator_2_classLit = createForClass('java.util', 'AbstractHashMap/EntrySetIterator', 71);
defineClass(286, 280, {22:1, 50:1});
_.add_0 = function add_2(index_0, element){
  throw new UnsupportedOperationException_0('Add not supported on this list');
}
;
_.add_1 = function add_3(obj){
  this.add_0(this.size_1(), obj);
  return true;
}
;
_.equals$ = function equals_8(o){
  var elem, elem$iterator, elemOther, iterOther, other;
  if (o === this) {
    return true;
  }
  if (!instanceOf(o, 50)) {
    return false;
  }
  other = dynamicCast(o, 50);
  if (this.size_1() != other.size_1()) {
    return false;
  }
  iterOther = other.iterator();
  for (elem$iterator = this.iterator(); elem$iterator.hasNext();) {
    elem = elem$iterator.next();
    elemOther = iterOther.next();
    if (!(maskUndefined(elem) === maskUndefined(elemOther) || elem != null && equals_Ljava_lang_Object__Z__devirtual$(elem, elemOther))) {
      return false;
    }
  }
  return true;
}
;
_.hashCode$ = function hashCode_10(){
  return hashCode_14(this);
}
;
_.iterator = function iterator_3(){
  return new AbstractList$IteratorImpl(this);
}
;
_.listIterator = function listIterator(){
  return new AbstractList$ListIteratorImpl(this, 0);
}
;
_.listIterator_0 = function listIterator_0(from){
  return new AbstractList$ListIteratorImpl(this, from);
}
;
var Ljava_util_AbstractList_2_classLit = createForClass('java.util', 'AbstractList', 286);
function AbstractList$IteratorImpl(this$0){
  this.this$01_0 = this$0;
}

defineClass(86, 1, {}, AbstractList$IteratorImpl);
_.hasNext = function hasNext_1(){
  return this.i < this.this$01_0.size_1();
}
;
_.next = function next_1(){
  return checkCriticalElement(this.i < this.this$01_0.size_1()) , this.this$01_0.get_0(this.i++);
}
;
_.i = 0;
var Ljava_util_AbstractList$IteratorImpl_2_classLit = createForClass('java.util', 'AbstractList/IteratorImpl', 86);
function AbstractList$ListIteratorImpl(this$0, start_0){
  this.this$01 = this$0;
  AbstractList$IteratorImpl.call(this, this$0);
  checkPositionIndex(start_0, this$0.size_1());
  this.i = start_0;
}

defineClass(113, 86, {}, AbstractList$ListIteratorImpl);
_.hasPrevious = function hasPrevious(){
  return this.i > 0;
}
;
_.previous = function previous_0(){
  checkCriticalElement(this.i > 0);
  return this.this$01.get_0(--this.i);
}
;
var Ljava_util_AbstractList$ListIteratorImpl_2_classLit = createForClass('java.util', 'AbstractList/ListIteratorImpl', 113);
function $iterator(this$static){
  var outerIter;
  outerIter = new AbstractHashMap$EntrySetIterator((new AbstractHashMap$EntrySet(this$static.this$01)).this$01);
  return new AbstractMap$1$1(outerIter);
}

function AbstractMap$1(this$0){
  this.this$01 = this$0;
}

defineClass(95, 281, $intern_20, AbstractMap$1);
_.contains_0 = function contains_1(key){
  return $containsKey(this.this$01, key);
}
;
_.iterator = function iterator_4(){
  return $iterator(this);
}
;
_.size_1 = function size_2(){
  return this.this$01.size_0;
}
;
var Ljava_util_AbstractMap$1_2_classLit = createForClass('java.util', 'AbstractMap/1', 95);
function AbstractMap$1$1(val$outerIter){
  this.val$outerIter2 = val$outerIter;
}

defineClass(149, 1, {}, AbstractMap$1$1);
_.hasNext = function hasNext_2(){
  return $hasNext(this.val$outerIter2);
}
;
_.next = function next_2(){
  var entry;
  entry = $next_0(this.val$outerIter2);
  return entry.getKey();
}
;
var Ljava_util_AbstractMap$1$1_2_classLit = createForClass('java.util', 'AbstractMap/1/1', 149);
defineClass(147, 1, $intern_21);
_.equals$ = function equals_9(other){
  var entry;
  if (!instanceOf(other, 38)) {
    return false;
  }
  entry = dynamicCast(other, 38);
  return equals_11(this.key, entry.getKey()) && equals_11(this.value_0, entry.getValue_0());
}
;
_.getKey = function getKey(){
  return this.key;
}
;
_.getValue_0 = function getValue(){
  return this.value_0;
}
;
_.hashCode$ = function hashCode_11(){
  return hashCode_15(this.key) ^ hashCode_15(this.value_0);
}
;
_.setValue_0 = function setValue(value_0){
  var oldValue;
  oldValue = this.value_0;
  this.value_0 = value_0;
  return oldValue;
}
;
_.toString$ = function toString_22(){
  return this.key + '=' + this.value_0;
}
;
var Ljava_util_AbstractMap$AbstractEntry_2_classLit = createForClass('java.util', 'AbstractMap/AbstractEntry', 147);
function AbstractMap$SimpleEntry(key, value_0){
  this.key = key;
  this.value_0 = value_0;
}

defineClass(148, 147, $intern_21, AbstractMap$SimpleEntry);
var Ljava_util_AbstractMap$SimpleEntry_2_classLit = createForClass('java.util', 'AbstractMap/SimpleEntry', 148);
defineClass(287, 1, $intern_21);
_.equals$ = function equals_10(other){
  var entry;
  if (!instanceOf(other, 38)) {
    return false;
  }
  entry = dynamicCast(other, 38);
  return equals_11(this.getKey(), entry.getKey()) && equals_11(this.getValue_0(), entry.getValue_0());
}
;
_.hashCode$ = function hashCode_12(){
  return hashCode_15(this.getKey()) ^ hashCode_15(this.getValue_0());
}
;
_.toString$ = function toString_23(){
  return this.getKey() + '=' + this.getValue_0();
}
;
var Ljava_util_AbstractMapEntry_2_classLit = createForClass('java.util', 'AbstractMapEntry', 287);
function $add_4(this$static, o){
  setCheck(this$static.array, this$static.array.length, o);
  return true;
}

function $get_1(this$static, index_0){
  checkElementIndex(index_0, this$static.array.length);
  return this$static.array[index_0];
}

function $indexOf_0(this$static, o, index_0){
  for (; index_0 < this$static.array.length; ++index_0) {
    if (equals_11(o, this$static.array[index_0])) {
      return index_0;
    }
  }
  return -1;
}

function ArrayList(){
  this.array = initDim(Ljava_lang_Object_2_classLit, $intern_7, 1, 0, 3, 1);
}

function splice(array, index_0, deleteCount, value_0){
  array.splice(index_0, deleteCount, value_0);
}

defineClass(39, 286, $intern_22, ArrayList);
_.add_0 = function add_4(index_0, o){
  checkPositionIndex(index_0, this.array.length);
  splice(this.array, index_0, 0, o);
}
;
_.add_1 = function add_5(o){
  return $add_4(this, o);
}
;
_.contains_0 = function contains_2(o){
  return $indexOf_0(this, o, 0) != -1;
}
;
_.get_0 = function get_1(index_0){
  return $get_1(this, index_0);
}
;
_.size_1 = function size_3(){
  return this.array.length;
}
;
_.toArray = function toArray_0(out){
  var i, size_0;
  size_0 = this.array.length;
  out.length < size_0 && (out = createFrom(out, size_0));
  for (i = 0; i < size_0; ++i) {
    setCheck(out, i, this.array[i]);
  }
  out.length > size_0 && setCheck(out, size_0, null);
  return out;
}
;
var Ljava_util_ArrayList_2_classLit = createForClass('java.util', 'ArrayList', 39);
function $clinit_Collections(){
  $clinit_Collections = emptyMethod;
  EMPTY_LIST = new Collections$EmptyList;
}

function hashCode_13(collection){
  $clinit_Collections();
  var e, e$iterator, hashCode;
  hashCode = 0;
  for (e$iterator = collection.iterator(); e$iterator.hasNext();) {
    e = e$iterator.next();
    hashCode = hashCode + (e != null?hashCode__I__devirtual$(e):0);
    hashCode = ~~hashCode;
  }
  return hashCode;
}

function hashCode_14(list){
  $clinit_Collections();
  var e, e$iterator, hashCode;
  hashCode = 1;
  for (e$iterator = list.iterator(); e$iterator.hasNext();) {
    e = e$iterator.next();
    hashCode = 31 * hashCode + (e != null?hashCode__I__devirtual$(e):0);
    hashCode = ~~hashCode;
  }
  return hashCode;
}

var EMPTY_LIST;
function Collections$EmptyList(){
}

defineClass(163, 286, $intern_22, Collections$EmptyList);
_.contains_0 = function contains_3(object){
  return false;
}
;
_.get_0 = function get_2(location_0){
  checkElementIndex(location_0, 0);
  return null;
}
;
_.iterator = function iterator_5(){
  return $clinit_Collections() , $clinit_Collections$EmptyListIterator() , INSTANCE_0;
}
;
_.listIterator = function listIterator_1(){
  return $clinit_Collections() , $clinit_Collections$EmptyListIterator() , INSTANCE_0;
}
;
_.size_1 = function size_4(){
  return 0;
}
;
var Ljava_util_Collections$EmptyList_2_classLit = createForClass('java.util', 'Collections/EmptyList', 163);
function $clinit_Collections$EmptyListIterator(){
  $clinit_Collections$EmptyListIterator = emptyMethod;
  INSTANCE_0 = new Collections$EmptyListIterator;
}

function Collections$EmptyListIterator(){
}

defineClass(164, 1, {}, Collections$EmptyListIterator);
_.hasNext = function hasNext_3(){
  return false;
}
;
_.hasPrevious = function hasPrevious_0(){
  return false;
}
;
_.next = function next_3(){
  throw new NoSuchElementException;
}
;
_.previous = function previous_1(){
  throw new NoSuchElementException;
}
;
var INSTANCE_0;
var Ljava_util_Collections$EmptyListIterator_2_classLit = createForClass('java.util', 'Collections/EmptyListIterator', 164);
function checkStructuralChange(host, iterator){
  if (iterator._gwt_modCount != host._gwt_modCount) {
    throw new ConcurrentModificationException;
  }
}

function setModCount(o, modCount){
  o._gwt_modCount = modCount;
}

function structureChanged(map_0){
  var modCount;
  modCount = map_0._gwt_modCount | 0;
  setModCount(map_0, modCount + 1);
}

function ConcurrentModificationException(){
  RuntimeException.call(this);
}

defineClass(198, 27, $intern_10, ConcurrentModificationException);
var Ljava_util_ConcurrentModificationException_2_classLit = createForClass('java.util', 'ConcurrentModificationException', 198);
function $equals_0(value1, value2){
  return maskUndefined(value1) === maskUndefined(value2) || value1 != null && equals_Ljava_lang_Object__Z__devirtual$(value1, value2);
}

function $getHashCode(key){
  var hashCode;
  hashCode = hashCode__I__devirtual$(key);
  return ~~hashCode;
}

function HashMap(){
  $reset_1(this);
}

defineClass(42, 146, {3:1, 78:1}, HashMap);
var Ljava_util_HashMap_2_classLit = createForClass('java.util', 'HashMap', 42);
function $add_5(this$static, o){
  var old;
  old = $put_0(this$static.map_0, o, this$static);
  return old == null;
}

function $contains_0(this$static, o){
  return $containsKey(this$static.map_0, o);
}

function $remove_4(this$static, o){
  return $remove_3(this$static.map_0, o) != null;
}

function HashSet(){
  this.map_0 = new HashMap;
}

defineClass(101, 281, {3:1, 22:1, 91:1}, HashSet);
_.contains_0 = function contains_4(o){
  return $contains_0(this, o);
}
;
_.iterator = function iterator_6(){
  return $iterator(new AbstractMap$1(this.map_0));
}
;
_.size_1 = function size_5(){
  return this.map_0.size_0;
}
;
_.toString$ = function toString_24(){
  return $toString(new AbstractMap$1(this.map_0));
}
;
var Ljava_util_HashSet_2_classLit = createForClass('java.util', 'HashSet', 101);
function $ensureChain(this$static, hashCode){
  var map_0 = this$static.backingMap;
  return map_0[hashCode] || (map_0[hashCode] = []);
}

function $getChain(this$static, hashCode){
  return this$static.backingMap[hashCode];
}

function $getChainOrEmpty(this$static, hashCode){
  return this$static.backingMap[hashCode] || [];
}

function $getEntry(this$static, key){
  var entry, entry$array, entry$index, entry$max;
  for (entry$array = $getChainOrEmpty(this$static, key == null?'0':'' + $getHashCode(key)) , entry$index = 0 , entry$max = entry$array.length; entry$index < entry$max; ++entry$index) {
    entry = entry$array[entry$index];
    if ($equals_0(key, entry.getKey())) {
      return entry;
    }
  }
  return null;
}

function $keys(this$static){
  return Object.getOwnPropertyNames(this$static.backingMap);
}

function $put_1(this$static, key, value_0){
  var chain, entry, entry$index, entry$max;
  chain = $ensureChain(this$static, key == null?'0':'' + $getHashCode(key));
  for (entry$index = 0 , entry$max = chain.length; entry$index < entry$max; ++entry$index) {
    entry = chain[entry$index];
    if ($equals_0(key, entry.getKey())) {
      return entry.setValue_0(value_0);
    }
  }
  setCheck(chain, chain.length, new AbstractMap$SimpleEntry(key, value_0));
  $elementAdded(this$static.host);
  return null;
}

function $remove_5(this$static, key){
  var chain, entry, hashCode, i;
  hashCode = key == null?'0':'' + $getHashCode(key);
  chain = $getChainOrEmpty(this$static, hashCode);
  for (i = 0; i < chain.length; i++) {
    entry = chain[i];
    if ($equals_0(key, entry.getKey())) {
      chain.length == 1?(delete this$static.backingMap[hashCode] , undefined):(chain.splice(i, 1) , undefined);
      $elementRemoved(this$static.host);
      return entry.getValue_0();
    }
  }
  return null;
}

function InternalJsHashCodeMap(){
  this.backingMap = this.createMap();
}

defineClass(117, 1, {}, InternalJsHashCodeMap);
_.createMap = function createMap(){
  return Object.create(null);
}
;
_.entries = function entries(){
  return new InternalJsHashCodeMap$1(this);
}
;
var Ljava_util_InternalJsHashCodeMap_2_classLit = createForClass('java.util', 'InternalJsHashCodeMap', 117);
function $hasNext_0(this$static){
  if (this$static.itemIndex < this$static.chain.length) {
    return true;
  }
  if (this$static.chainIndex < this$static.keys_0.length - 1) {
    this$static.chain = $getChain(this$static.this$01, this$static.keys_0[++this$static.chainIndex]);
    this$static.itemIndex = 0;
    return true;
  }
  return false;
}

function InternalJsHashCodeMap$1(this$0){
  this.this$01 = this$0;
  this.keys_0 = $keys(this.this$01);
  this.chain = initDim(Ljava_util_Map$Entry_2_classLit, $intern_7, 38, 0, 0, 1);
}

defineClass(185, 1, {}, InternalJsHashCodeMap$1);
_.hasNext = function hasNext_4(){
  return $hasNext_0(this);
}
;
_.next = function next_4(){
  return checkCriticalElement($hasNext_0(this)) , this.lastEntry = this.chain[this.itemIndex++] , this.lastEntry;
}
;
_.chainIndex = -1;
_.itemIndex = 0;
_.lastEntry = null;
var Ljava_util_InternalJsHashCodeMap$1_2_classLit = createForClass('java.util', 'InternalJsHashCodeMap/1', 185);
function InternalJsHashCodeMap$InternalJsHashCodeMapLegacy(){
  InternalJsHashCodeMap.call(this);
}

defineClass(183, 117, {}, InternalJsHashCodeMap$InternalJsHashCodeMapLegacy);
_.createMap = function createMap_0(){
  return {};
}
;
_.entries = function entries_0(){
  var list = this.newEntryList();
  var map_0 = this.backingMap;
  for (var hashCode in map_0) {
    if (hashCode == parseInt(hashCode, 10)) {
      var array = map_0[hashCode];
      for (var i = 0, c = array.length; i < c; ++i) {
        list.add_1(array[i]);
      }
    }
  }
  return list.iterator();
}
;
_.newEntryList = function newEntryList(){
  return new InternalJsHashCodeMap$InternalJsHashCodeMapLegacy$1;
}
;
var Ljava_util_InternalJsHashCodeMap$InternalJsHashCodeMapLegacy_2_classLit = createForClass('java.util', 'InternalJsHashCodeMap/InternalJsHashCodeMapLegacy', 183);
function InternalJsHashCodeMap$InternalJsHashCodeMapLegacy$1(){
  ArrayList.call(this);
}

defineClass(184, 39, $intern_22, InternalJsHashCodeMap$InternalJsHashCodeMapLegacy$1);
var Ljava_util_InternalJsHashCodeMap$InternalJsHashCodeMapLegacy$1_2_classLit = createForClass('java.util', 'InternalJsHashCodeMap/InternalJsHashCodeMapLegacy/1', 184);
function InternalJsMapFactory(){
}

defineClass(180, 1, {}, InternalJsMapFactory);
_.createJsHashCodeMap = function createJsHashCodeMap(){
  return new InternalJsHashCodeMap;
}
;
_.createJsStringMap = function createJsStringMap(){
  return new InternalJsStringMap;
}
;
var Ljava_util_InternalJsMapFactory_2_classLit = createForClass('java.util', 'InternalJsMapFactory', 180);
function $clinit_InternalJsMapFactory$BackwardCompatibleJsMapFactory(){
  $clinit_InternalJsMapFactory$BackwardCompatibleJsMapFactory = emptyMethod;
  delegate = createFactory();
}

function canHandleProto(){
  var protoField = '__proto__';
  var map_0 = Object.create(null);
  if (map_0[protoField] !== undefined) {
    return false;
  }
  var keys_0 = Object.getOwnPropertyNames(map_0);
  if (keys_0.length != 0) {
    return false;
  }
  map_0[protoField] = 42;
  if (map_0[protoField] !== 42) {
    return false;
  }
  return true;
}

function createFactory(){
  var map_0;
  if (Object.create && Object.getOwnPropertyNames && canHandleProto()) {
    return (map_0 = Object.create(null) , map_0['__proto__'] = 42 , Object.getOwnPropertyNames(map_0).length == 0)?new InternalJsMapFactory$KeysWorkaroundJsMapFactory:new InternalJsMapFactory;
  }
  return new InternalJsMapFactory$LegacyInternalJsMapFactory;
}

var delegate;
function InternalJsMapFactory$KeysWorkaroundJsMapFactory(){
}

defineClass(182, 180, {}, InternalJsMapFactory$KeysWorkaroundJsMapFactory);
_.createJsStringMap = function createJsStringMap_0(){
  return new InternalJsStringMap$InternalJsStringMapWithKeysWorkaround;
}
;
var Ljava_util_InternalJsMapFactory$KeysWorkaroundJsMapFactory_2_classLit = createForClass('java.util', 'InternalJsMapFactory/KeysWorkaroundJsMapFactory', 182);
function InternalJsMapFactory$LegacyInternalJsMapFactory(){
}

defineClass(181, 180, {}, InternalJsMapFactory$LegacyInternalJsMapFactory);
_.createJsHashCodeMap = function createJsHashCodeMap_0(){
  return new InternalJsHashCodeMap$InternalJsHashCodeMapLegacy;
}
;
_.createJsStringMap = function createJsStringMap_1(){
  return new InternalJsStringMap$InternalJsStringMapLegacy;
}
;
var Ljava_util_InternalJsMapFactory$LegacyInternalJsMapFactory_2_classLit = createForClass('java.util', 'InternalJsMapFactory/LegacyInternalJsMapFactory', 181);
function $keys_0(this$static){
  return Object.getOwnPropertyNames(this$static.backingMap);
}

function $put_2(this$static, key, value_0){
  var oldValue;
  oldValue = this$static.backingMap[key];
  oldValue === undefined && $elementAdded(this$static.host);
  $set(this$static, key, value_0 === undefined?null:value_0);
  return oldValue;
}

function $remove_6(this$static, key){
  var value_0;
  value_0 = this$static.backingMap[key];
  if (!(value_0 === undefined)) {
    delete this$static.backingMap[key];
    $elementRemoved(this$static.host);
  }
  return value_0;
}

function $set(this$static, key, value_0){
  this$static.backingMap[key] = value_0;
}

function InternalJsStringMap(){
  this.backingMap = this.createMap_0();
}

defineClass(100, 1, {}, InternalJsStringMap);
_.createMap_0 = function createMap_1(){
  return Object.create(null);
}
;
_.entries = function entries_1(){
  var keys_0;
  keys_0 = this.keys_1();
  return new InternalJsStringMap$1(this, keys_0);
}
;
_.get_1 = function get_3(key){
  return this.backingMap[key];
}
;
_.keys_1 = function keys_1(){
  return $keys_0(this);
}
;
_.newMapEntry = function newMapEntry(key){
  return new InternalJsStringMap$2(this, key);
}
;
_.put = function put(key, value_0){
  return $put_2(this, key, value_0);
}
;
_.remove_0 = function remove_3(key){
  return $remove_6(this, key);
}
;
var Ljava_util_InternalJsStringMap_2_classLit = createForClass('java.util', 'InternalJsStringMap', 100);
function InternalJsStringMap$1(this$0, val$keys){
  this.this$01 = this$0;
  this.val$keys2 = val$keys;
}

defineClass(168, 1, {}, InternalJsStringMap$1);
_.hasNext = function hasNext_5(){
  return this.i < this.val$keys2.length;
}
;
_.next = function next_5(){
  return checkCriticalElement(this.i < this.val$keys2.length) , new InternalJsStringMap$2(this.this$01, this.val$keys2[this.i++]);
}
;
_.i = 0;
var Ljava_util_InternalJsStringMap$1_2_classLit = createForClass('java.util', 'InternalJsStringMap/1', 168);
function InternalJsStringMap$2(this$0, val$key){
  this.this$01 = this$0;
  this.val$key2 = val$key;
}

defineClass(114, 287, $intern_21, InternalJsStringMap$2);
_.getKey = function getKey_0(){
  return this.val$key2;
}
;
_.getValue_0 = function getValue_0(){
  return this.this$01.get_1(this.val$key2);
}
;
_.setValue_0 = function setValue_0(object){
  return this.this$01.put(this.val$key2, object);
}
;
var Ljava_util_InternalJsStringMap$2_2_classLit = createForClass('java.util', 'InternalJsStringMap/2', 114);
function InternalJsStringMap$InternalJsStringMapLegacy(){
  InternalJsStringMap.call(this);
}

defineClass(165, 100, {}, InternalJsStringMap$InternalJsStringMapLegacy);
_.createMap_0 = function createMap_2(){
  return {};
}
;
_.entries = function entries_2(){
  var list = this.newEntryList_0();
  for (var key in this.backingMap) {
    if (key.charCodeAt(0) == 58) {
      var entry = this.newMapEntry(key.substring(1));
      list.add_1(entry);
    }
  }
  return list.iterator();
}
;
_.get_1 = function get_4(key){
  return this.backingMap[':' + key];
}
;
_.newEntryList_0 = function newEntryList_0(){
  return new InternalJsStringMap$InternalJsStringMapLegacy$1;
}
;
_.put = function put_0(key, value_0){
  return $put_2(this, ':' + key, value_0);
}
;
_.remove_0 = function remove_4(key){
  return $remove_6(this, ':' + key);
}
;
var Ljava_util_InternalJsStringMap$InternalJsStringMapLegacy_2_classLit = createForClass('java.util', 'InternalJsStringMap/InternalJsStringMapLegacy', 165);
function InternalJsStringMap$InternalJsStringMapLegacy$1(){
  ArrayList.call(this);
}

defineClass(167, 39, $intern_22, InternalJsStringMap$InternalJsStringMapLegacy$1);
var Ljava_util_InternalJsStringMap$InternalJsStringMapLegacy$1_2_classLit = createForClass('java.util', 'InternalJsStringMap/InternalJsStringMapLegacy/1', 167);
function InternalJsStringMap$InternalJsStringMapWithKeysWorkaround(){
  InternalJsStringMap.call(this);
}

defineClass(166, 100, {}, InternalJsStringMap$InternalJsStringMapWithKeysWorkaround);
_.keys_1 = function keys_2(){
  var keys_0;
  keys_0 = $keys_0(this);
  !(this.backingMap['__proto__'] === undefined) && (keys_0[keys_0.length] = '__proto__');
  return keys_0;
}
;
var Ljava_util_InternalJsStringMap$InternalJsStringMapWithKeysWorkaround_2_classLit = createForClass('java.util', 'InternalJsStringMap/InternalJsStringMapWithKeysWorkaround', 166);
var Ljava_util_Map$Entry_2_classLit = createForInterface('java.util', 'Map/Entry');
function NoSuchElementException(){
  RuntimeException.call(this);
}

defineClass(73, 27, $intern_10, NoSuchElementException);
var Ljava_util_NoSuchElementException_2_classLit = createForClass('java.util', 'NoSuchElementException', 73);
function equals_11(a, b){
  return maskUndefined(a) === maskUndefined(b) || a != null && equals_Ljava_lang_Object__Z__devirtual$(a, b);
}

function hashCode_15(o){
  return o != null?hashCode__I__devirtual$(o):0;
}

var I_classLit = createForPrimitive('int', 'I'), Lcom_google_gwt_lang_CollapsedPropertyHolder_2_classLit = createForClass('com.google.gwt.lang', 'CollapsedPropertyHolder', 268), Lcom_google_gwt_lang_JavaClassHierarchySetupUtil_2_classLit = createForClass('com.google.gwt.lang', 'JavaClassHierarchySetupUtil', 270), Lcom_google_gwt_lang_LongLibBase$LongEmul_2_classLit = createForClass('com.google.gwt.lang', 'LongLibBase/LongEmul', null), Lcom_google_gwt_lang_ModuleUtils_2_classLit = createForClass('com.google.gwt.lang', 'ModuleUtils', 273), B_classLit = createForPrimitive('byte', 'B'), J_classLit = createForPrimitive('long', 'J'), D_classLit = createForPrimitive('double', 'D'), C_classLit = createForPrimitive('char', 'C'), Ljava_util_Map$Entry_2_classLit = createForInterface('java.util', 'Map/Entry');
var $entry = registerEntry();
var gwtOnLoad = gwtOnLoad = gwtOnLoad_0;
addInitFunctions(init);
setGwtProperty('permProps', [[['locale', 'default'], ['user.agent', 'ie8']]]);
$sendStats('moduleStartup', 'moduleEvalEnd');
gwtOnLoad(__gwtModuleFunction.__errFn, __gwtModuleFunction.__moduleName, __gwtModuleFunction.__moduleBase, __gwtModuleFunction.__softPermutationId,__gwtModuleFunction.__computePropValue);
$sendStats('moduleStartup', 'end');
$gwt && $gwt.permProps && __gwtModuleFunction.__moduleStartupDone($gwt.permProps);
//# sourceURL=legv8_simulator-0.js

