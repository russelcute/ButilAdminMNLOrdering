"use strict";(self.webpackChunkbutil_admin=self.webpackChunkbutil_admin||[]).push([[104],{3576:function(e,t,n){var a=n(1413),i=n(2791),r=n(4575),s=n(9658),o=n(184),c=i.forwardRef((function(e,t){return(0,o.jsx)(s.Z,(0,a.Z)({elevation:6,ref:t,variant:"filled"},e))}));t.Z=function(e){var t=e.openSnackbar,n=e.success,a=e.message,i=e.setOpenSnackbar,s=function(e,t){"clickaway"!==t&&i(!1)};return(0,o.jsx)(r.Z,{open:t,autoHideDuration:6e3,onClose:s,children:(0,o.jsx)(c,{onClose:s,severity:n?"success":"error",sx:{width:"100%"},children:a})})}},348:function(e,t,n){var a=n(885),i=n(2791),r=n(7621),s=n(1889),o=n(7391),c=n(4518),d=n(3466),l=n(3400),u=n(9321),m=n(5022),p=n(3746),f=n(165),h=n(184);t.Z=function(e){var t=e.userData,n=e.onTextChange,Z=e.onSelectChange,v=e.onSubmitForm,b=(0,i.useState)(!1),x=(0,a.Z)(b,2),g=x[0],j=x[1];return(0,h.jsx)(r.Z,{sx:{width:"100%",padding:3},children:(0,h.jsx)("form",{onSubmit:function(e){return v(e)},children:(0,h.jsxs)(s.ZP,{container:!0,spacing:2,children:[(0,h.jsx)(s.ZP,{item:!0,sm:12,md:12,sx:{width:"100%"},children:(0,h.jsx)(o.Z,{fullWidth:!0,required:!0,name:"firstName",label:"First Name",variant:"outlined",value:t.firstName,onChange:function(e){return n(e)}})}),(0,h.jsx)(s.ZP,{item:!0,sm:12,md:12,sx:{width:"100%"},children:(0,h.jsx)(o.Z,{fullWidth:!0,required:!0,name:"lastName",label:"Last Name",variant:"outlined",value:t.lastName,onChange:function(e){return n(e)}})}),(0,h.jsx)(s.ZP,{item:!0,sm:12,md:12,sx:{width:"100%"},children:(0,h.jsxs)(u.Z,{fullWidth:!0,required:!0,name:"gender",label:"Gender",value:t.gender,onChange:function(e){return Z(e)},children:[(0,h.jsx)(m.Z,{value:"Male",children:"Male"}),(0,h.jsx)(m.Z,{value:"Female",children:"Female"})]})}),(0,h.jsx)(s.ZP,{item:!0,sm:12,md:12,sx:{width:"100%"},children:(0,h.jsx)(o.Z,{fullWidth:!0,required:!0,type:"email",name:"email",label:"User Email",variant:"outlined",value:t.email,onChange:function(e){return n(e)}})}),(0,h.jsx)(s.ZP,{item:!0,sm:12,md:12,sx:{width:"100%"},children:(0,h.jsx)(o.Z,{fullWidth:!0,required:!0,inputProps:{maxLength:13,minLength:9},name:"contact",label:"Contact Number",variant:"outlined",value:t.contact,onChange:function(e){return n(e)}})}),(0,h.jsx)(s.ZP,{item:!0,sm:12,md:12,sx:{width:"100%"},children:(0,h.jsx)(o.Z,{fullWidth:!0,required:!0,type:g?"text":"password",name:"password",label:"Password",variant:"outlined",value:t.password,onChange:function(e){return n(e)},InputProps:{endAdornment:(0,h.jsx)(d.Z,{position:"end",children:(0,h.jsx)(l.Z,{"aria-label":"toggle password visibility",edge:"end",onClick:function(e){return j(!g)},children:g?(0,h.jsx)(p.Z,{}):(0,h.jsx)(f.Z,{})})})}})}),(0,h.jsx)(s.ZP,{item:!0,sm:12,md:12,sx:{width:"100%"},children:(0,h.jsx)(c.Z,{type:"submit",variant:"contained",fullWidth:!0,children:"SAVE"})})]})})})}},2104:function(e,t,n){n.r(t);var a=n(4942),i=n(1413),r=n(885),s=n(2791),o=n(6907),c=n(6445),d=n(890),l=n(3400),u=n(4518),m=n(8530),p=n(5193),f=n(6871),h=n(348),Z=n(3576),v=n(9062),b=n(376),x=n(4569),g=n.n(x),j=n(9823),C=n(184);t.default=function(){var e=(0,p.Z)("(min-width:600px)"),t=(0,f.s0)(),n=(0,b.h)().database,x=(0,s.useState)({openSnackbar:!1,success:!0,message:""}),y=(0,r.Z)(x,2),w=y[0],k=y[1],S=(0,s.useState)({firstName:"",lastName:"",contact:"",email:"",password:"",gender:"Male"}),N=(0,r.Z)(S,2),M=N[0],F=N[1];function I(e){e.preventDefault();var a=JSON.stringify({email:M.email,name:M.firstName+" "+M.lastName,contact:M.contact,password:M.password});g().post("https://butiladmin.herokuapp.com/api/jsdhfyyrhv7&ggeimcv_$hrjeuifcv/user/create",a,{headers:{"Content-Type":"application/json"}}).then((function(e){!function(e){var a={firstName:M.firstName,lastName:M.lastName,contact:M.contact,gender:M.gender};(0,v.pl)((0,v.JU)(n,"accounts",e),a).then((function(e){t("/dashboards/users")})).catch((function(e){k((0,i.Z)((0,i.Z)({},w),{},{openSnackbar:!0,success:!1,message:"Failed to save user."}))}))}(e.data.uid)})).catch((function(e){k((0,i.Z)((0,i.Z)({},w),{},{openSnackbar:!0,success:!1,message:"User alredy exist."}))}))}return(0,C.jsxs)(C.Fragment,{children:[(0,C.jsx)(o.q,{children:(0,C.jsx)("title",{children:"Create User"})}),(0,C.jsxs)(c.Z,{maxWidth:"sm",sx:{mb:5},children:[(0,C.jsxs)(m.Z,{sx:{display:"flex",justifyContent:"space-between",alignItems:"center",marginTop:5,marginBottom:3},children:[(0,C.jsx)(d.Z,{variant:"h1",color:"primary",children:"Create User"}),e?(0,C.jsx)(u.Z,{variant:"contained",color:"error",startIcon:(0,C.jsx)(j.Z,{}),onClick:function(e){return t("/dashboards/users")},children:"Cancel"}):(0,C.jsx)(l.Z,{onClick:function(e){return t("/dashboards/users")},color:"error",children:(0,C.jsx)(j.Z,{})})]}),(0,C.jsx)(h.Z,{userData:M,onTextChange:function(e){return function(e){F((0,i.Z)((0,i.Z)({},M),{},(0,a.Z)({},e.target.name,e.target.value)))}(e)},onSelectChange:function(e){return function(e){F((0,i.Z)((0,i.Z)({},M),{},(0,a.Z)({},e.target.name,e.target.value)))}(e)},onSubmitForm:function(e){return I(e)}})]}),(0,C.jsx)(Z.Z,{openSnackbar:w.openSnackbar,success:w.success,message:w.message,setOpenSnackbar:function(e){return k((0,i.Z)((0,i.Z)({},w),{},{openSnackbar:e}))}})]})}},3746:function(e,t,n){var a=n(5318);t.Z=void 0;var i=a(n(5649)),r=n(184),s=(0,i.default)((0,r.jsx)("path",{d:"M12 4.5C7 4.5 2.73 7.61 1 12c1.73 4.39 6 7.5 11 7.5s9.27-3.11 11-7.5c-1.73-4.39-6-7.5-11-7.5zM12 17c-2.76 0-5-2.24-5-5s2.24-5 5-5 5 2.24 5 5-2.24 5-5 5zm0-8c-1.66 0-3 1.34-3 3s1.34 3 3 3 3-1.34 3-3-1.34-3-3-3z"}),"Visibility");t.Z=s},165:function(e,t,n){var a=n(5318);t.Z=void 0;var i=a(n(5649)),r=n(184),s=(0,i.default)((0,r.jsx)("path",{d:"M12 7c2.76 0 5 2.24 5 5 0 .65-.13 1.26-.36 1.83l2.92 2.92c1.51-1.26 2.7-2.89 3.43-4.75-1.73-4.39-6-7.5-11-7.5-1.4 0-2.74.25-3.98.7l2.16 2.16C10.74 7.13 11.35 7 12 7zM2 4.27l2.28 2.28.46.46C3.08 8.3 1.78 10.02 1 12c1.73 4.39 6 7.5 11 7.5 1.55 0 3.03-.3 4.38-.84l.42.42L19.73 22 21 20.73 3.27 3 2 4.27zM7.53 9.8l1.55 1.55c-.05.21-.08.43-.08.65 0 1.66 1.34 3 3 3 .22 0 .44-.03.65-.08l1.55 1.55c-.67.33-1.41.53-2.2.53-2.76 0-5-2.24-5-5 0-.79.2-1.53.53-2.2zm4.31-.78 3.15 3.15.02-.16c0-1.66-1.34-3-3-3l-.17.01z"}),"VisibilityOff");t.Z=s},5022:function(e,t,n){n.d(t,{Z:function(){return S}});var a=n(4942),i=n(3366),r=n(7462),s=n(2791),o=(n(2007),n(8182)),c=n(9468),d=n(48),l=n(33),u=n(1894),m=n(6199),p=n(3701),f=n(162),h=n(2071),Z=n(133),v=n(6309);var b=(0,v.Z)("MuiListItemIcon",["root","alignItemsFlexStart"]),x=n(9849),g=n(1920);function j(e){return(0,g.Z)("MuiMenuItem",e)}var C=(0,v.Z)("MuiMenuItem",["root","focusVisible","dense","disabled","divider","gutters","selected"]),y=n(184),w=["autoFocus","component","dense","divider","disableGutters","focusVisibleClassName","role","tabIndex"],k=(0,l.ZP)(p.Z,{shouldForwardProp:function(e){return(0,l.FO)(e)||"classes"===e},name:"MuiMenuItem",slot:"Root",overridesResolver:function(e,t){var n=e.ownerState;return[t.root,n.dense&&t.dense,n.divider&&t.divider,!n.disableGutters&&t.gutters]}})((function(e){var t,n=e.theme,i=e.ownerState;return(0,r.Z)({},n.typography.body1,{display:"flex",justifyContent:"flex-start",alignItems:"center",position:"relative",textDecoration:"none",minHeight:48,paddingTop:6,paddingBottom:6,boxSizing:"border-box",whiteSpace:"nowrap"},!i.disableGutters&&{paddingLeft:16,paddingRight:16},i.divider&&{borderBottom:"1px solid ".concat(n.palette.divider),backgroundClip:"padding-box"},(t={"&:hover":{textDecoration:"none",backgroundColor:n.palette.action.hover,"@media (hover: none)":{backgroundColor:"transparent"}}},(0,a.Z)(t,"&.".concat(C.selected),(0,a.Z)({backgroundColor:(0,d.Fq)(n.palette.primary.main,n.palette.action.selectedOpacity)},"&.".concat(C.focusVisible),{backgroundColor:(0,d.Fq)(n.palette.primary.main,n.palette.action.selectedOpacity+n.palette.action.focusOpacity)})),(0,a.Z)(t,"&.".concat(C.selected,":hover"),{backgroundColor:(0,d.Fq)(n.palette.primary.main,n.palette.action.selectedOpacity+n.palette.action.hoverOpacity),"@media (hover: none)":{backgroundColor:(0,d.Fq)(n.palette.primary.main,n.palette.action.selectedOpacity)}}),(0,a.Z)(t,"&.".concat(C.focusVisible),{backgroundColor:n.palette.action.focus}),(0,a.Z)(t,"&.".concat(C.disabled),{opacity:n.palette.action.disabledOpacity}),(0,a.Z)(t,"& + .".concat(Z.Z.root),{marginTop:n.spacing(1),marginBottom:n.spacing(1)}),(0,a.Z)(t,"& + .".concat(Z.Z.inset),{marginLeft:52}),(0,a.Z)(t,"& .".concat(x.Z.root),{marginTop:0,marginBottom:0}),(0,a.Z)(t,"& .".concat(x.Z.inset),{paddingLeft:36}),(0,a.Z)(t,"& .".concat(b.root),{minWidth:36}),t),!i.dense&&(0,a.Z)({},n.breakpoints.up("sm"),{minHeight:"auto"}),i.dense&&(0,r.Z)({minHeight:36},n.typography.body2,(0,a.Z)({},"& .".concat(b.root," svg"),{fontSize:"1.25rem"})))})),S=s.forwardRef((function(e,t){var n=(0,u.Z)({props:e,name:"MuiMenuItem"}),a=n.autoFocus,d=void 0!==a&&a,l=n.component,p=void 0===l?"li":l,Z=n.dense,v=void 0!==Z&&Z,b=n.divider,x=void 0!==b&&b,g=n.disableGutters,C=void 0!==g&&g,S=n.focusVisibleClassName,N=n.role,M=void 0===N?"menuitem":N,F=n.tabIndex,I=(0,i.Z)(n,w),P=s.useContext(m.Z),O={dense:v||P.dense||!1,disableGutters:C},q=s.useRef(null);(0,f.Z)((function(){d&&q.current&&q.current.focus()}),[d]);var V,z=(0,r.Z)({},n,{dense:O.dense,divider:x,disableGutters:C}),W=function(e){var t=e.disabled,n=e.dense,a=e.divider,i=e.disableGutters,s=e.selected,o=e.classes,d={root:["root",n&&"dense",t&&"disabled",!i&&"gutters",a&&"divider",s&&"selected"]},l=(0,c.Z)(d,j,o);return(0,r.Z)({},o,l)}(n),G=(0,h.Z)(q,t);return n.disabled||(V=void 0!==F?F:-1),(0,y.jsx)(m.Z.Provider,{value:O,children:(0,y.jsx)(k,(0,r.Z)({ref:G,role:M,tabIndex:V,component:p,focusVisibleClassName:(0,o.Z)(W.focusVisible,S)},I,{ownerState:z,classes:W}))})}))}}]);
//# sourceMappingURL=104.47daaea8.chunk.js.map