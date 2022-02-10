(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[708],{5113:function(e,r,t){"use strict";t.d(r,{zx:function(){return G}});var n=t(7375),a=t(1604),i=t(9703),o=t(8554),s=t.n(o),l=t(7294),c=t(6450),d=t(917),u={border:"0px",clip:"rect(0px, 0px, 0px, 0px)",height:"1px",width:"1px",margin:"-1px",padding:"0px",overflow:"hidden",whiteSpace:"nowrap",position:"absolute"},m=(0,a.m$)("span",{baseStyle:u});i.Ts&&(m.displayName="VisuallyHidden");var p=(0,a.m$)("input",{baseStyle:u});i.Ts&&(p.displayName="VisuallyHiddenInput");function f(){return(f=Object.assign||function(e){for(var r=1;r<arguments.length;r++){var t=arguments[r];for(var n in t)Object.prototype.hasOwnProperty.call(t,n)&&(e[n]=t[n])}return e}).apply(this,arguments)}var v=["label","thickness","speed","emptyColor","className"],h=(0,d.F4)({"0%":{transform:"rotate(0deg)"},"100%":{transform:"rotate(360deg)"}}),g=(0,a.Gp)((function(e,r){var t=(0,a.mq)("Spinner",e),n=(0,a.Lr)(e),o=n.label,s=void 0===o?"Loading...":o,c=n.thickness,d=void 0===c?"2px":c,u=n.speed,p=void 0===u?"0.45s":u,g=n.emptyColor,y=void 0===g?"transparent":g,b=n.className,x=function(e,r){if(null==e)return{};var t,n,a={},i=Object.keys(e);for(n=0;n<i.length;n++)t=i[n],r.indexOf(t)>=0||(a[t]=e[t]);return a}(n,v),N=(0,i.cx)("chakra-spinner",b),_=f({display:"inline-block",borderColor:"currentColor",borderStyle:"solid",borderRadius:"99999px",borderWidth:d,borderBottomColor:y,borderLeftColor:y,animation:h+" "+p+" linear infinite"},t);return l.createElement(a.m$.div,f({ref:r,__css:_,className:N},x),s&&l.createElement(m,null,s))}));function y(e,r){if(null==e)return{};var t,n,a={},i=Object.keys(e);for(n=0;n<i.length;n++)t=i[n],r.indexOf(t)>=0||(a[t]=e[t]);return a}function b(){return(b=Object.assign||function(e){for(var r=1;r<arguments.length;r++){var t=arguments[r];for(var n in t)Object.prototype.hasOwnProperty.call(t,n)&&(e[n]=t[n])}return e}).apply(this,arguments)}i.Ts&&(g.displayName="Spinner");var x=["size","colorScheme","variant","className","spacing","isAttached","isDisabled"],N=(0,c.kr)({strict:!1,name:"ButtonGroupContext"}),_=N[0],E=N[1],k=(0,a.Gp)((function(e,r){var t=e.size,n=e.colorScheme,o=e.variant,s=e.className,c=e.spacing,d=void 0===c?"0.5rem":c,u=e.isAttached,m=e.isDisabled,p=y(e,x),f=(0,i.cx)("chakra-button__group",s),v=l.useMemo((function(){return{size:t,colorScheme:n,variant:o,isDisabled:m}}),[t,n,o,m]),h={display:"inline-flex"};return h=b({},h,u?{"> *:first-of-type:not(:last-of-type)":{borderEndRadius:0},"> *:not(:first-of-type):not(:last-of-type)":{borderRadius:0},"> *:not(:first-of-type):last-of-type":{borderStartRadius:0}}:{"& > *:not(style) ~ *:not(style)":{marginStart:d}}),l.createElement(_,{value:v},l.createElement(a.m$.div,b({ref:r,role:"group",__css:h,className:f},p)))}));i.Ts&&(k.displayName="ButtonGroup");var w=["label","placement","spacing","children","className","__css"],C=function(e){var r=e.label,t=e.placement,n=e.spacing,o=void 0===n?"0.5rem":n,s=e.children,c=void 0===s?l.createElement(g,{color:"currentColor",width:"1em",height:"1em"}):s,d=e.className,u=e.__css,m=y(e,w),p=(0,i.cx)("chakra-button__spinner",d),f="start"===t?"marginEnd":"marginStart",v=l.useMemo((function(){var e;return b(((e={display:"flex",alignItems:"center",position:r?"relative":"absolute"})[f]=r?o:0,e.fontSize="1em",e.lineHeight="normal",e),u)}),[u,r,f,o]);return l.createElement(a.m$.div,b({className:p},m,{__css:v}),c)};i.Ts&&(C.displayName="ButtonSpinner");var T=["children","className"],S=function(e){var r=e.children,t=e.className,n=y(e,T),o=l.isValidElement(r)?l.cloneElement(r,{"aria-hidden":!0,focusable:!1}):r,s=(0,i.cx)("chakra-button__icon",t);return l.createElement(a.m$.span,b({display:"inline-flex",alignSelf:"center",flexShrink:0},n,{className:s}),o)};i.Ts&&(S.displayName="ButtonIcon");var L=["isDisabled","isLoading","isActive","isFullWidth","children","leftIcon","rightIcon","loadingText","iconSpacing","type","spinner","spinnerPlacement","className","as"],G=(0,a.Gp)((function(e,r){var t=E(),o=(0,a.mq)("Button",b({},t,e)),c=(0,a.Lr)(e),d=c.isDisabled,u=void 0===d?null==t?void 0:t.isDisabled:d,m=c.isLoading,p=c.isActive,f=c.isFullWidth,v=c.children,h=c.leftIcon,g=c.rightIcon,x=c.loadingText,N=c.iconSpacing,_=void 0===N?"0.5rem":N,k=c.type,w=c.spinner,T=c.spinnerPlacement,S=void 0===T?"start":T,G=c.className,I=c.as,B=y(c,L),j=l.useMemo((function(){var e,r=s()({},null!=(e=null==o?void 0:o._focus)?e:{},{zIndex:1});return b({display:"inline-flex",appearance:"none",alignItems:"center",justifyContent:"center",userSelect:"none",position:"relative",whiteSpace:"nowrap",verticalAlign:"middle",outline:"none",width:f?"100%":"auto"},o,!!t&&{_focus:r})}),[o,t,f]),$=function(e){var r=l.useState(!e),t=r[0],n=r[1];return{ref:l.useCallback((function(e){e&&n("BUTTON"===e.tagName)}),[]),type:t?"button":void 0}}(I),R=$.ref,O=$.type,M={rightIcon:g,leftIcon:h,iconSpacing:_,children:v};return l.createElement(a.m$.button,b({disabled:u||m,ref:(0,n.qq)(r,R),as:I,type:null!=k?k:O,"data-active":(0,i.PB)(p),"data-loading":(0,i.PB)(m),__css:j,className:(0,i.cx)("chakra-button",G)},B),m&&"start"===S&&l.createElement(C,{className:"chakra-button__spinner--start",label:x,placement:"start",spacing:_},w),m?x||l.createElement(a.m$.span,{opacity:0},l.createElement(W,M)):l.createElement(W,M),m&&"end"===S&&l.createElement(C,{className:"chakra-button__spinner--end",label:x,placement:"end",spacing:_},w))}));function W(e){var r=e.leftIcon,t=e.rightIcon,n=e.children,a=e.iconSpacing;return l.createElement(l.Fragment,null,r&&l.createElement(S,{marginEnd:a},r),n,t&&l.createElement(S,{marginStart:a},t))}i.Ts&&(G.displayName="Button");var I=["icon","children","isRound","aria-label"],B=(0,a.Gp)((function(e,r){var t=e.icon,n=e.children,a=e.isRound,i=e["aria-label"],o=y(e,I),s=t||n,c=l.isValidElement(s)?l.cloneElement(s,{"aria-hidden":!0,focusable:!1}):null;return l.createElement(G,b({padding:"0",borderRadius:a?"full":void 0,ref:r,"aria-label":i},o),c)}));i.Ts&&(B.displayName="IconButton")},3236:function(e,r,t){"use strict";t.d(r,{xu:function(){return x},X6:function(){return R}});var n=t(1604),a=t(4244),i=t(9703),o=t(7294);function s(){return(s=Object.assign||function(e){for(var r=1;r<arguments.length;r++){var t=arguments[r];for(var n in t)Object.prototype.hasOwnProperty.call(t,n)&&(e[n]=t[n])}return e}).apply(this,arguments)}var l=["as","viewBox","color","focusable","children","className","__css"],c={path:o.createElement("g",{stroke:"currentColor",strokeWidth:"1.5"},o.createElement("path",{strokeLinecap:"round",fill:"none",d:"M9,9a3,3,0,1,1,4,2.829,1.5,1.5,0,0,0-1,1.415V14.25"}),o.createElement("path",{fill:"currentColor",strokeLinecap:"round",d:"M12,17.25a.375.375,0,1,0,.375.375A.375.375,0,0,0,12,17.25h0"}),o.createElement("circle",{fill:"none",strokeMiterlimit:"10",cx:"12",cy:"12",r:"11.25"})),viewBox:"0 0 24 24"},d=(0,n.Gp)((function(e,r){var t=e.as,a=e.viewBox,d=e.color,u=void 0===d?"currentColor":d,m=e.focusable,p=void 0!==m&&m,f=e.children,v=e.className,h=e.__css,g=function(e,r){if(null==e)return{};var t,n,a={},i=Object.keys(e);for(n=0;n<i.length;n++)t=i[n],r.indexOf(t)>=0||(a[t]=e[t]);return a}(e,l),y={ref:r,focusable:p,className:(0,i.cx)("chakra-icon",v),__css:s({w:"1em",h:"1em",display:"inline-block",lineHeight:"1em",flexShrink:0,color:u},h)},b=null!=a?a:c.viewBox;if(t&&"string"!==typeof t)return o.createElement(n.m$.svg,s({as:t},y,g));var x=null!=f?f:c.path;return o.createElement(n.m$.svg,s({verticalAlign:"middle",viewBox:b},y,g),x)}));i.Ts&&(d.displayName="Icon");var u=t(6450);function m(){return(m=Object.assign||function(e){for(var r=1;r<arguments.length;r++){var t=arguments[r];for(var n in t)Object.prototype.hasOwnProperty.call(t,n)&&(e[n]=t[n])}return e}).apply(this,arguments)}function p(e,r){if(null==e)return{};var t,n,a={},i=Object.keys(e);for(n=0;n<i.length;n++)t=i[n],r.indexOf(t)>=0||(a[t]=e[t]);return a}var f=["ratio","children","className"],v=(0,n.Gp)((function(e,r){var t=e.ratio,a=void 0===t?4/3:t,s=e.children,l=e.className,c=p(e,f),d=o.Children.only(s),u=(0,i.cx)("chakra-aspect-ratio",l);return o.createElement(n.m$.div,m({ref:r,position:"relative",className:u,_before:{height:0,content:'""',display:"block",paddingBottom:(0,i.XQ)(a,(function(e){return 1/e*100+"%"}))},__css:{"& > *:not(style)":{overflow:"hidden",position:"absolute",top:"0",right:"0",bottom:"0",left:"0",display:"flex",justifyContent:"center",alignItems:"center",width:"100%",height:"100%"},"& > img, & > video":{objectFit:"cover"}}},c),d)}));i.Ts&&(v.displayName="AspectRatio");var h=["className"],g=(0,n.Gp)((function(e,r){var t=(0,n.mq)("Badge",e),a=(0,n.Lr)(e);a.className;var s=p(a,h);return o.createElement(n.m$.span,m({ref:r,className:(0,i.cx)("chakra-badge",e.className)},s,{__css:m({display:"inline-block",whiteSpace:"nowrap",verticalAlign:"middle"},t)}))}));i.Ts&&(g.displayName="Badge");var y=["size","centerContent"],b=["size"],x=(0,n.m$)("div");i.Ts&&(x.displayName="Box");var N=(0,n.Gp)((function(e,r){var t=e.size,n=e.centerContent,a=void 0===n||n,i=p(e,y),s=a?{display:"flex",alignItems:"center",justifyContent:"center"}:{};return o.createElement(x,m({ref:r,boxSize:t,__css:m({},s,{flexShrink:0,flexGrow:0})},i))}));i.Ts&&(N.displayName="Square");var _=(0,n.Gp)((function(e,r){var t=e.size,n=p(e,b);return o.createElement(N,m({size:t,ref:r,borderRadius:"9999px"},n))}));i.Ts&&(_.displayName="Circle");var E=(0,n.m$)("div",{baseStyle:{display:"flex",alignItems:"center",justifyContent:"center"}});i.Ts&&(E.displayName="Center");var k=["className"],w=(0,n.Gp)((function(e,r){var t=(0,n.mq)("Code",e),a=(0,n.Lr)(e);a.className;var s=p(a,k);return o.createElement(n.m$.code,m({ref:r,className:(0,i.cx)("chakra-code",e.className)},s,{__css:m({display:"inline-block"},t)}))}));i.Ts&&(w.displayName="Code");var C=["className","centerContent"],T=(0,n.Gp)((function(e,r){var t=(0,n.Lr)(e),a=t.className,s=t.centerContent,l=p(t,C),c=(0,n.mq)("Container",e);return o.createElement(n.m$.div,m({ref:r,className:(0,i.cx)("chakra-container",a)},l,{__css:m({},c,s&&{display:"flex",flexDirection:"column",alignItems:"center"})}))}));i.Ts&&(T.displayName="Container");var S=["borderLeftWidth","borderBottomWidth","borderTopWidth","borderRightWidth","borderWidth","borderStyle","borderColor"],L=["className","orientation","__css"],G=(0,n.Gp)((function(e,r){var t=(0,n.mq)("Divider",e),a=t.borderLeftWidth,s=t.borderBottomWidth,l=t.borderTopWidth,c=t.borderRightWidth,d=t.borderWidth,u=t.borderStyle,f=t.borderColor,v=p(t,S),h=(0,n.Lr)(e),g=h.className,y=h.orientation,b=void 0===y?"horizontal":y,x=h.__css,N=p(h,L),_={vertical:{borderLeftWidth:a||c||d||"1px",height:"100%"},horizontal:{borderBottomWidth:s||l||d||"1px",width:"100%"}};return o.createElement(n.m$.hr,m({ref:r,"aria-orientation":b},N,{__css:m({},v,{border:"0",borderColor:f,borderStyle:u},_[b],x),className:(0,i.cx)("chakra-divider",g)}))}));i.Ts&&(G.displayName="Divider");var W=["direction","align","justify","wrap","basis","grow","shrink"],I=(0,n.Gp)((function(e,r){var t=e.direction,a=e.align,i=e.justify,s=e.wrap,l=e.basis,c=e.grow,d=e.shrink,u=p(e,W),f={display:"flex",flexDirection:t,alignItems:a,justifyContent:i,flexWrap:s,flexBasis:l,flexGrow:c,flexShrink:d};return o.createElement(n.m$.div,m({ref:r,__css:f},u))}));i.Ts&&(I.displayName="Flex");var B=["area","templateAreas","gap","rowGap","columnGap","column","row","autoFlow","autoRows","templateRows","autoColumns","templateColumns"],j=(0,n.Gp)((function(e,r){var t=e.area,a=e.templateAreas,i=e.gap,s=e.rowGap,l=e.columnGap,c=e.column,d=e.row,u=e.autoFlow,f=e.autoRows,v=e.templateRows,h=e.autoColumns,g=e.templateColumns,y=p(e,B),b={display:"grid",gridArea:t,gridTemplateAreas:a,gridGap:i,gridRowGap:s,gridColumnGap:l,gridAutoColumns:h,gridColumn:c,gridRow:d,gridAutoFlow:u,gridAutoRows:f,gridTemplateRows:v,gridTemplateColumns:g};return o.createElement(n.m$.div,m({ref:r,__css:b},y))}));i.Ts&&(j.displayName="Grid");var $=["className"],R=(0,n.Gp)((function(e,r){var t=(0,n.mq)("Heading",e),a=(0,n.Lr)(e);a.className;var s=p(a,$);return o.createElement(n.m$.h2,m({ref:r,className:(0,i.cx)("chakra-heading",e.className)},s,{__css:t}))}));i.Ts&&(R.displayName="Heading");var O=["className"],M=(0,n.Gp)((function(e,r){var t=(0,n.mq)("Kbd",e),a=(0,n.Lr)(e),s=a.className,l=p(a,O);return o.createElement(n.m$.kbd,m({ref:r,className:(0,i.cx)("chakra-kbd",s)},l,{__css:m({fontFamily:"mono"},t)}))}));i.Ts&&(M.displayName="Kbd");var A=["className","isExternal"],D=(0,n.Gp)((function(e,r){var t=(0,n.mq)("Link",e),a=(0,n.Lr)(e),s=a.className,l=a.isExternal,c=p(a,A);return o.createElement(n.m$.a,m({target:l?"_blank":void 0,rel:l?"noopener noreferrer":void 0,ref:r,className:(0,i.cx)("chakra-link",s)},c,{__css:t}))}));i.Ts&&(D.displayName="Link");var z=["children","styleType","stylePosition","spacing"],q=["as"],P=["as"],F=(0,u.kr)({name:"StylesContext",errorMessage:"useStyles: `styles` is undefined. Seems you forgot to wrap the components in a `<*List />` "}),H=F[0],X=F[1],U=(0,n.Gp)((function(e,r){var t,a=(0,n.jC)("List",e),i=(0,n.Lr)(e),s=i.children,l=i.styleType,c=void 0===l?"none":l,d=i.stylePosition,f=i.spacing,v=p(i,z),h=(0,u.WR)(s),g=f?((t={})["& > *:not(style) ~ *:not(style)"]={mt:f},t):{};return o.createElement(H,{value:a},o.createElement(n.m$.ul,m({ref:r,listStyleType:c,listStylePosition:d,role:"list",__css:m({},a.container,g)},v),h))}));i.Ts&&(U.displayName="List");var K=(0,n.Gp)((function(e,r){e.as;var t=p(e,q);return o.createElement(U,m({ref:r,as:"ol",styleType:"decimal",marginStart:"1em"},t))}));i.Ts&&(K.displayName="OrderedList");var Q=(0,n.Gp)((function(e,r){e.as;var t=p(e,P);return o.createElement(U,m({ref:r,as:"ul",styleType:"initial",marginStart:"1em"},t))}));i.Ts&&(Q.displayName="UnorderedList");var V=(0,n.Gp)((function(e,r){var t=X();return o.createElement(n.m$.li,m({ref:r},e,{__css:t.item}))}));i.Ts&&(V.displayName="ListItem");var Y=(0,n.Gp)((function(e,r){var t=X();return o.createElement(d,m({ref:r,role:"presentation"},e,{__css:t.icon}))}));i.Ts&&(Y.displayName="ListIcon");var J=["columns","spacingX","spacingY","spacing","minChildWidth"],Z=(0,n.Gp)((function(e,r){var t,n,a=e.columns,s=e.spacingX,l=e.spacingY,c=e.spacing,d=e.minChildWidth,u=p(e,J),f=d?(n=d,(0,i.XQ)(n,(function(e){return(0,i.Ft)(e)?null:"repeat(auto-fit, minmax("+(r=e,((0,i.hj)(r)?r+"px":r)+", 1fr))");var r}))):(t=a,(0,i.XQ)(t,(function(e){return(0,i.Ft)(e)?null:"repeat("+e+", minmax(0, 1fr))"})));return o.createElement(j,m({ref:r,gap:c,columnGap:s,rowGap:l,templateColumns:f},u))}));i.Ts&&(Z.displayName="SimpleGrid");var ee=(0,n.m$)("div",{baseStyle:{flex:1,justifySelf:"stretch",alignSelf:"stretch"}});i.Ts&&(ee.displayName="Spacer");var re="& > *:not(style) ~ *:not(style)";var te=["isInline","direction","align","justify","spacing","wrap","children","divider","className","shouldWrapChildren"],ne=function(e){return o.createElement(n.m$.div,m({className:"chakra-stack__item"},e,{__css:m({display:"inline-block",flex:"0 0 auto",minWidth:0},e.__css)}))},ae=(0,n.Gp)((function(e,r){var t,a=e.isInline,s=e.direction,l=e.align,c=e.justify,d=e.spacing,f=void 0===d?"0.5rem":d,v=e.wrap,h=e.children,g=e.divider,y=e.className,b=e.shouldWrapChildren,x=p(e,te),N=a?"row":null!=s?s:"column",_=o.useMemo((function(){return function(e){var r,t=e.spacing,n=e.direction,a={column:{marginTop:t,marginEnd:0,marginBottom:0,marginStart:0},row:{marginTop:0,marginEnd:0,marginBottom:0,marginStart:t},"column-reverse":{marginTop:0,marginEnd:0,marginBottom:t,marginStart:0},"row-reverse":{marginTop:0,marginEnd:t,marginBottom:0,marginStart:0}};return(r={flexDirection:n})[re]=(0,i.XQ)(n,(function(e){return a[e]})),r}({direction:N,spacing:f})}),[N,f]),E=o.useMemo((function(){return function(e){var r=e.spacing,t=e.direction,n={column:{my:r,mx:0,borderLeftWidth:0,borderBottomWidth:"1px"},"column-reverse":{my:r,mx:0,borderLeftWidth:0,borderBottomWidth:"1px"},row:{mx:r,my:0,borderLeftWidth:"1px",borderBottomWidth:0},"row-reverse":{mx:r,my:0,borderLeftWidth:"1px",borderBottomWidth:0}};return{"&":(0,i.XQ)(t,(function(e){return n[e]}))}}({spacing:f,direction:N})}),[f,N]),k=!!g,w=!b&&!k,C=(0,u.WR)(h),T=w?C:C.map((function(e,r){var t="undefined"!==typeof e.key?e.key:r,n=r+1===C.length,a=b?o.createElement(ne,{key:t},e):e;if(!k)return a;var i=n?null:o.cloneElement(g,{__css:E});return o.createElement(o.Fragment,{key:t},a,i)})),S=(0,i.cx)("chakra-stack",y);return o.createElement(n.m$.div,m({ref:r,display:"flex",alignItems:l,justifyContent:c,flexDirection:_.flexDirection,flexWrap:v,className:S,__css:k?{}:(t={},t[re]=_[re],t)},x),T)}));i.Ts&&(ae.displayName="Stack");var ie=(0,n.Gp)((function(e,r){return o.createElement(ae,m({align:"center"},e,{direction:"row",ref:r}))}));i.Ts&&(ie.displayName="HStack");var oe=(0,n.Gp)((function(e,r){return o.createElement(ae,m({align:"center"},e,{direction:"column",ref:r}))}));i.Ts&&(oe.displayName="VStack");var se=["className","align","decoration","casing"],le=(0,n.Gp)((function(e,r){var t=(0,n.mq)("Text",e),a=(0,n.Lr)(e);a.className,a.align,a.decoration,a.casing;var s=p(a,se),l=(0,i.YU)({textAlign:e.align,textDecoration:e.decoration,textTransform:e.casing});return o.createElement(n.m$.p,m({ref:r,className:(0,i.cx)("chakra-text",e.className)},l,s,{__css:t}))}));i.Ts&&(le.displayName="Text");var ce=["spacing","children","justify","direction","align","className","shouldWrapChildren"],de=["className"],ue=(0,n.Gp)((function(e,r){var t=e.spacing,s=void 0===t?"0.5rem":t,l=e.children,c=e.justify,d=e.direction,u=e.align,f=e.className,v=e.shouldWrapChildren,h=p(e,ce),g=o.useMemo((function(){return{"--chakra-wrap-spacing":function(e){return(0,i.XQ)(s,(function(r){return(0,a.fr)("space",r)(e)}))},"--wrap-spacing":"calc(var(--chakra-wrap-spacing) / 2)",display:"flex",flexWrap:"wrap",justifyContent:c,alignItems:u,flexDirection:d,listStyleType:"none",padding:"0",margin:"calc(var(--wrap-spacing) * -1)","& > *:not(style)":{margin:"var(--wrap-spacing)"}}}),[s,c,u,d]),y=v?o.Children.map(l,(function(e,r){return o.createElement(me,{key:r},e)})):l;return o.createElement(n.m$.div,m({ref:r,className:(0,i.cx)("chakra-wrap",f)},h),o.createElement(n.m$.ul,{className:"chakra-wrap__list",__css:g},y))}));i.Ts&&(ue.displayName="Wrap");var me=(0,n.Gp)((function(e,r){var t=e.className,a=p(e,de);return o.createElement(n.m$.li,m({ref:r,__css:{display:"flex",alignItems:"flex-start"},className:(0,i.cx)("chakra-wrap__listitem",t)},a))}));i.Ts&&(me.displayName="WrapItem")},7942:function(e,r,t){"use strict";var n=t(5696);r.default=void 0;var a,i=(a=t(7294))&&a.__esModule?a:{default:a},o=t(4957),s=t(9898),l=t(639);var c={};function d(e,r,t,n){if(e&&o.isLocalURL(r)){e.prefetch(r,t,n).catch((function(e){0}));var a=n&&"undefined"!==typeof n.locale?n.locale:e&&e.locale;c[r+"%"+t+(a?"%"+a:"")]=!0}}var u=function(e){var r,t=!1!==e.prefetch,a=s.useRouter(),u=i.default.useMemo((function(){var r=o.resolveHref(a,e.href,!0),t=n(r,2),i=t[0],s=t[1];return{href:i,as:e.as?o.resolveHref(a,e.as):s||i}}),[a,e.href,e.as]),m=u.href,p=u.as,f=e.children,v=e.replace,h=e.shallow,g=e.scroll,y=e.locale;"string"===typeof f&&(f=i.default.createElement("a",null,f));var b=(r=i.default.Children.only(f))&&"object"===typeof r&&r.ref,x=l.useIntersection({rootMargin:"200px"}),N=n(x,2),_=N[0],E=N[1],k=i.default.useCallback((function(e){_(e),b&&("function"===typeof b?b(e):"object"===typeof b&&(b.current=e))}),[b,_]);i.default.useEffect((function(){var e=E&&t&&o.isLocalURL(m),r="undefined"!==typeof y?y:a&&a.locale,n=c[m+"%"+p+(r?"%"+r:"")];e&&!n&&d(a,m,p,{locale:r})}),[p,m,E,y,t,a]);var w={ref:k,onClick:function(e){r.props&&"function"===typeof r.props.onClick&&r.props.onClick(e),e.defaultPrevented||function(e,r,t,n,a,i,s,l){("A"!==e.currentTarget.nodeName||!function(e){var r=e.currentTarget.target;return r&&"_self"!==r||e.metaKey||e.ctrlKey||e.shiftKey||e.altKey||e.nativeEvent&&2===e.nativeEvent.which}(e)&&o.isLocalURL(t))&&(e.preventDefault(),null==s&&n.indexOf("#")>=0&&(s=!1),r[a?"replace":"push"](t,n,{shallow:i,locale:l,scroll:s}))}(e,a,m,p,v,h,g,y)},onMouseEnter:function(e){r.props&&"function"===typeof r.props.onMouseEnter&&r.props.onMouseEnter(e),o.isLocalURL(m)&&d(a,m,p,{priority:!0})}};if(e.passHref||"a"===r.type&&!("href"in r.props)){var C="undefined"!==typeof y?y:a&&a.locale,T=a&&a.isLocaleDomain&&o.getDomainLocale(p,C,a&&a.locales,a&&a.domainLocales);w.href=T||o.addBasePath(o.addLocale(p,C,a&&a.defaultLocale))}return i.default.cloneElement(r,w)};r.default=u},639:function(e,r,t){"use strict";var n=t(5696);Object.defineProperty(r,"__esModule",{value:!0}),r.useIntersection=function(e){var r=e.rootRef,t=e.rootMargin,l=e.disabled||!o,c=a.useRef(),d=a.useState(!1),u=n(d,2),m=u[0],p=u[1],f=a.useState(r?r.current:null),v=n(f,2),h=v[0],g=v[1],y=a.useCallback((function(e){c.current&&(c.current(),c.current=void 0),l||m||e&&e.tagName&&(c.current=function(e,r,t){var n=function(e){var r=e.rootMargin||"",t=s.get(r);if(t)return t;var n=new Map,a=new IntersectionObserver((function(e){e.forEach((function(e){var r=n.get(e.target),t=e.isIntersecting||e.intersectionRatio>0;r&&t&&r(t)}))}),e);return s.set(r,t={id:r,observer:a,elements:n}),t}(t),a=n.id,i=n.observer,o=n.elements;return o.set(e,r),i.observe(e),function(){o.delete(e),i.unobserve(e),0===o.size&&(i.disconnect(),s.delete(a))}}(e,(function(e){return e&&p(e)}),{root:h,rootMargin:t}))}),[l,h,t,m]);return a.useEffect((function(){if(!o&&!m){var e=i.requestIdleCallback((function(){return p(!0)}));return function(){return i.cancelIdleCallback(e)}}}),[m]),a.useEffect((function(){r&&g(r.current)}),[r]),[y,m]};var a=t(7294),i=t(6286),o="undefined"!==typeof IntersectionObserver;var s=new Map},1664:function(e,r,t){e.exports=t(7942)}}]);