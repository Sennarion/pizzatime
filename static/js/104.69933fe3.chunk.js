"use strict";(self.webpackChunkpizzatime=self.webpackChunkpizzatime||[]).push([[104],{6104:function(n,r,i){i.r(r),i.d(r,{default:function(){return v}});var e=i(9439),t=i(2791),c=i(9434),a=i(7689),s=i(7799),o=i(1516),d=i(8520),l=i(9164),h=i(6314),u=i(4554),m=i(890),x=i(748),p=i(6151),j=i(8991),Z=i(4698),f=i(3329);function v(){var n=(0,t.useState)(null),r=(0,e.Z)(n,2),i=r[0],v=r[1],b=(0,c.v9)((function(n){return n.cart.items})),g=(0,c.I0)(),w=(0,a.UO)().productId,I=(0,s.JU)(o.db,"products",w);if((0,t.useEffect)((function(){(0,s.QT)(I).then((function(n){return v(n.data())})).catch((function(n){return alert(n)}))}),[I]),!i)return null;var k=i.id,y=i.name,z=i.weight,C=i.diameter,D=i.price,U=i.discountPrice,O=i.ingredients,S=i.description,A=i.photoUrl,E=i.rating,J=b.some((function(n){return n.id===k})),K=U||D;return(0,f.jsx)(l.Z,{children:(0,f.jsxs)(h.Z,{spacing:4,direction:{xs:"column",md:"row"},children:[(0,f.jsx)(u.Z,{borderRadius:10,overflow:"hidden",boxShadow:2,children:(0,f.jsx)("img",{src:A,alt:y,width:"100%"})}),(0,f.jsxs)(h.Z,{children:[(0,f.jsx)(m.Z,{variant:"h4",mb:2,color:"primary",children:y}),(0,f.jsx)(m.Z,{mb:2,children:S}),(0,f.jsx)(x.Z,{name:"read-only",value:E,precision:.5,readOnly:!0}),(0,f.jsxs)(m.Z,{mb:2,mt:2,children:[(0,f.jsx)(m.Z,{variant:"h6",component:"span",mr:1,children:"Ingredients:"}),O.join(", ")]}),(0,f.jsxs)(m.Z,{mb:2,children:[(0,f.jsx)(m.Z,{variant:"h6",component:"span",mr:1,children:"Weight:"}),z]}),(0,f.jsxs)(m.Z,{mb:2,children:[(0,f.jsx)(m.Z,{variant:"h6",component:"span",mr:1,children:"Diameter:"}),C]}),(0,f.jsxs)(h.Z,{direction:"row",alignItems:"center",spacing:2,children:[(0,f.jsxs)(m.Z,{variant:"h4",color:"primary",mb:2,children:[K,"\u20b4"]}),U&&(0,f.jsxs)(m.Z,{variant:"h6",sx:{textDecoration:"line-through"},mb:2,children:[D,"\u20b4"]})]}),J?(0,f.jsx)(p.Z,{variant:"outlined",color:"primary",startIcon:(0,f.jsx)(Z.Z,{}),onClick:function(){return g((0,d.Ir)(k))},children:"Delete from cart"}):(0,f.jsx)(p.Z,{variant:"contained",color:"primary",startIcon:(0,f.jsx)(j.Z,{}),onClick:function(){return g((0,d.gK)(i))},children:"Add to cart"})]})]})})}}}]);
//# sourceMappingURL=104.69933fe3.chunk.js.map